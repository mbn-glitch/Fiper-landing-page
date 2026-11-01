// Homography → CSS matrix3d (v2.3.0). matrix3d(w, h, dst): maps a w×h element onto the quadrilateral dst = [[x,y]×4] (top-left, top-right, bottom-right, bottom-left) measured on the device plate.
export function homography(src, dst) { // 4 point pairs → 3×3 (row-major), solving the 8×8 system by Gaussian elimination
  const A = [], B = [];
  for (let i = 0; i < 4; i++) { const [x, y] = src[i], [u, v] = dst[i]; A.push([x, y, 1, 0, 0, 0, -u * x, -u * y]); B.push(u); A.push([0, 0, 0, x, y, 1, -v * x, -v * y]); B.push(v); }
  const n = 8; for (let c = 0; c < n; c++) { let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r; [A[c], A[p]] = [A[p], A[c]]; [B[c], B[p]] = [B[p], B[c]]; for (let r = 0; r < n; r++) { if (r === c) continue; const f = A[r][c] / A[c][c]; for (let k = c; k < n; k++) A[r][k] -= f * A[c][k]; B[r] -= f * B[c]; } }
  const h = B.map((b, i) => b / A[i][i]); return [[h[0], h[1], h[2]], [h[3], h[4], h[5]], [h[6], h[7], 1]];
}
export function matrix3d(w, h, dst) { const H = homography([[0, 0], [w, 0], [w, h], [0, h]], dst); // CSS matrix3d is column-major 4×4; z row/col identity
  const m = [H[0][0], H[1][0], 0, H[2][0], H[0][1], H[1][1], 0, H[2][1], 0, 0, 1, 0, H[0][2], H[1][2], 0, H[2][2]]; return `matrix3d(${m.map(v => +v.toFixed(6)).join(',')})`; }
export const handheld = (t, ampPx = 7, ampDeg = 0.35) => ({ x: ampPx * (0.6 * Math.sin(t * 0.9) + 0.3 * Math.sin(t * 2.3 + 1) + 0.1 * Math.sin(t * 5.1)), y: ampPx * (0.6 * Math.cos(t * 0.7) + 0.3 * Math.sin(t * 1.9 + 2)), rot: ampDeg * (0.7 * Math.sin(t * 0.5 + 0.4) + 0.3 * Math.sin(t * 1.7)) });
