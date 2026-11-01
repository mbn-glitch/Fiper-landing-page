#!/usr/bin/env bash
# Guarded production deploy for fipercard.com (Vercel project fiper-landing-page, team fiper-card; git deploys from
# mbn-glitch/Fiper-landing-page main — if the alias does not move within 6 minutes the script deploys with `vercel deploy --prod`
# and says so).
#
#   scripts/deploy-guarded.sh                 gates → push main → wait for the production alias → smoke → rollback on failure
#   scripts/deploy-guarded.sh --smoke-only    smoke fipercard.com only
#
# Smoke (Playwright, rendered SPA): https://fipercard.com/ and /help-center in en and ar — 200, the fixed risk line, the
# official lockup, no Google Fonts, no old logo asset, charcoal ground, identity font; `vercel rollback <previous-id>` on failure.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
SCOPE=fiper-card
PROJECT=fiper-landing-page
ALIAS=fipercard.com
MODE="${1:-push}"
LOG="regression-out/deploy-$(date +%Y%m%d-%H%M%S).log"
mkdir -p regression-out
exec > >(tee -a "$LOG") 2>&1
say() { printf '\n[deploy] %s\n' "$*"; }
inspect_field() { vercel inspect "$1" --scope "$SCOPE" 2>&1 | awk -v k="$2" '$1 == k && !done {print $2; done = 1}' || true; }
prod_id() { inspect_field "$ALIAS" id; }
prod_url() { inspect_field "$ALIAS" url; }

smoke() { node scripts/gates/check-identity.mjs --base "https://$ALIAS" | tail -4; }

PREV_ID=$(prod_id)
say "production before: $PREV_ID ($(prod_url))"
if [ "$MODE" = "--smoke-only" ]; then smoke && say "SMOKE PASS" || { say "SMOKE FAIL"; exit 1; }; exit 0; fi

say "gates"
node brand/scripts/verify-identity.mjs src public index.html | tail -1
npm run build >/dev/null 2>&1 && node scripts/gates/check-identity.mjs | tail -1
[ -z "$(git status --porcelain)" ] || { say "working tree not clean — commit first"; git status --short; exit 1; }
say "push main → $(git remote get-url origin)"
git push origin main
SHA=$(git rev-parse HEAD)

say "waiting for the production alias to move off $PREV_ID"
NEW_ID=""
for i in $(seq 1 36); do
  sleep 10
  CUR=$(prod_id); CUR_URL=$(prod_url)
  STATUS=$(vercel inspect "$CUR_URL" --scope "$SCOPE" 2>&1 | awk '$1 == "status" && !done {print $NF; done = 1}' || true)
  echo "  $i: production=$CUR ($STATUS)"
  if [ -n "$CUR" ] && [ "$CUR" != "$PREV_ID" ] && [ "$STATUS" = "Ready" ]; then NEW_ID="$CUR"; break; fi
done
if [ -z "$NEW_ID" ]; then
  say "the alias did not move — git deploys are not connected for $PROJECT; deploying $SHA with vercel deploy --prod"
  vercel link --yes --project "$PROJECT" --scope "$SCOPE" >/dev/null 2>&1 || true
  vercel deploy --prod --yes --scope "$SCOPE" | tail -3
  for i in $(seq 1 12); do sleep 10; CUR=$(prod_id); [ -n "$CUR" ] && [ "$CUR" != "$PREV_ID" ] && { NEW_ID="$CUR"; break; }; done
  [ -n "$NEW_ID" ] || { say "deploy did not promote — production stays $PREV_ID"; exit 1; }
fi
say "production now: $NEW_ID ($(prod_url))"

say "smoke on https://$ALIAS"
if smoke; then say "SMOKE PASS — deployed $NEW_ID · rollback target $PREV_ID"; exit 0; fi
say "SMOKE FAIL — rolling back to $PREV_ID"
vercel rollback "$PREV_ID" --scope "$SCOPE" --yes || vercel rollback "$PREV_ID" --scope "$SCOPE"
say "after rollback: $(prod_id)"
exit 1
