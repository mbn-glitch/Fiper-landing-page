/** Splash while a route chunk loads: the stacked lockup centred on the ground, nothing else (README § B splash rule) — no spinner. */
export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-bg flex items-center justify-center z-[200] lockup" role="status" aria-label="Loading">
      <img src="/brand/fiper-lockup-stacked-colour.svg" alt="Fiper" width="120" height="140" className="h-[120px] w-auto" />
    </div>
  );
}
