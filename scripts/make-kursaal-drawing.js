// The Kursaal for the home page, as an architect's perspective drawing: ruled lines in a few weights,
// corners that cross, construction lines running to the vanishing points, and dimension lines without figures.
// Geometry traced from the photo. Run with: node scripts/make-kursaal-drawing.js
const fs = require("fs");
const path = require("path");

const W = 2000, H = 1051;
const lerp = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
const f = (n) => Math.round(n * 10) / 10;
const seg = (a, b) => `M${f(a[0])} ${f(a[1])}L${f(b[0])} ${f(b[1])}`;

// Where two lines meet: the vanishing point of a face
const meet = (a, b, c, d) => {
  const [x1, y1, x2, y2, x3, y3, x4, y4] = [...a, ...b, ...c, ...d];
  const k = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  const u = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / k;
  return [x1 + u * (x2 - x1), y1 + u * (y2 - y1)];
};

// A line carried past both of its ends, as with a ruler
const past = (a, b, n) => {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const [ux, uy] = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
  return seg([a[0] - ux * n, a[1] - uy * n], [b[0] + ux * n, b[1] + uy * n]);
};

const layers = { sheet: [], build: [], glass: [], dim: [], pink: [], lime: [], line: [] };

// One glass face: rows and mullions between its corners
const face = (tl, tr, bl, br, rows, cols) => {
  for (let i = 1; i < rows; i++) layers.glass.push(seg(lerp(tl, bl, i / rows), lerp(tr, br, i / rows)));
  for (let i = 1; i < cols; i++) layers.glass.push(seg(lerp(tl, tr, i / cols), lerp(bl, br, i / cols)));
};
const edges = (list, n = 22) => list.forEach(([a, b]) => layers.line.push(past(a, b, n)));
const box = (x0, y0, x1, y1) =>
  layers.line.push(seg([x0, y0], [x1, y0]), seg([x1, y0], [x1, y1]), seg([x1, y1], [x0, y1]), seg([x0, y1], [x0, y0]));

// A dimension line: extension lines, the line itself and oblique ticks
const dimH = (x0, x1, y, from0, from1) => {
  layers.dim.push(seg([x0, y], [x1, y]));
  [[x0, from0], [x1, from1]].forEach(([x, from]) => {
    layers.dim.push(seg([x, from], [x, y - 12]), seg([x - 8, y + 8], [x + 8, y - 8]));
  });
};
const dimV = (y0, y1, x, from0, from1) => {
  layers.dim.push(seg([x, y0], [x, y1]));
  [[y0, from0], [y1, from1]].forEach(([y, from]) => {
    layers.dim.push(seg([from, y], [x + 12, y]), seg([x - 8, y + 8], [x + 8, y - 8]));
  });
};

// A faint squared sheet behind everything
for (let x = 100; x < W; x += 100) layers.sheet.push(seg([x, 0], [x, H]));
for (let y = 100; y < H; y += 100) layers.sheet.push(seg([0, y], [W, y]));

// The large cube, leaning, seen from its corner
const A = [1247, 237], L = [812, 443], R = [1838, 365];
const F = [1230, 692], LB = [795, 663], RB = [1808, 707];
face(A, L, F, LB, 11, 7);
face(A, R, F, RB, 11, 8);
edges([[A, L], [A, R], [A, F], [L, LB], [R, RB], [LB, F], [F, RB]]);

// Three rows of glass picked out in colour: two pink on the left face, one green on the right
[3 / 11, 7 / 11].forEach((t) => layers.pink.push(seg(lerp(A, F, t), lerp(L, LB, t))));
layers.lime.push(seg(lerp(A, F, 5 / 11), lerp(R, RB, 5 / 11)));

// Its construction lines, to both vanishing points
const VL = meet(A, L, F, LB), VR = meet(A, R, F, RB);
[[A, VL], [F, VL], [A, VR], [F, VR]].forEach(([a, b]) => layers.build.push(seg(a, b)));
layers.build.push(seg([A[0] + (A[0] - F[0]) * 0.32, A[1] + (A[1] - F[1]) * 0.32], F));

// The small cube
const TL = [122, 445], TR = [640, 490], BL = [130, 655], BR = [645, 660];
face(TL, TR, BL, BR, 7, 9);
edges([[TL, TR], [TR, BR], [BR, BL], [BL, TL]]);
layers.build.push(past(TL, TR, 150), past(BL, BR, 150));

// Doors and the small window of the large cube
box(1316, 652, 1366, 692);
box(1666, 660, 1736, 702);
box(1612, 562, 1646, 606);

// The city behind, as plain outlines
box(18, 500, 120, 655);
for (let y = 530; y < 650; y += 30) layers.glass.push(seg([18, y], [120, y]));
layers.line.push(seg([18, 500], [46, 476]), seg([46, 476], [92, 476]), seg([92, 476], [120, 500]));
box(646, 538, 692, 660);
box(692, 600, 762, 660);

// The promenade wall and the ground line
layers.line.push(seg([0, 666], [1190, 670]), seg([0, 692], [W, 708]));
layers.glass.push(seg([0, 672], [1190, 676]));

// Dimension lines, without figures
dimH(812, 1838, 150, 430, 350);
dimH(1247, 1838, 196, 225, 350);
dimH(122, 640, 368, 432, 476);
dimV(365, 707, 1920, 1852, 1822);

// People for scale, by the doors
[[1290, 692], [1395, 694], [1432, 695], [1640, 700]].forEach(([x, y]) => {
  layers.line.push(`M${x} ${y}V${y - 15}M${x - 4} ${y - 15}H${x + 4}M${x - 2.500} ${y - 20}a2.500 2.500 0 1 0 5 0a2.500 2.500 0 1 0 -5 0`);
});

const g = (attrs, paths) => `<path ${attrs} d="${paths.join("")}"/>\n`;
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" fill="none" stroke="#8a8f98" stroke-linecap="square">\n` +
  g('stroke-opacity=".07" stroke-width="1"', layers.sheet) +
  g('stroke-opacity=".32" stroke-width="1" stroke-dasharray="14 6 2 6"', layers.build) +
  g('stroke-opacity=".4" stroke-width="1"', layers.glass) +
  g('stroke-opacity=".5" stroke-width="1"', layers.dim) +
  g('stroke="#e0669a" stroke-width="3"', layers.pink) +
  g('stroke="#c3d13a" stroke-width="3"', layers.lime) +
  g('stroke-opacity=".85" stroke-width="1.6"', layers.line) +
  "</svg>\n";
const out = path.join(__dirname, "../themes/basqueunevocweek/static/images/");

// The large cube alone, in grey, for the white headers of the inner pages
const cube = svg.replace(`viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"`, 'viewBox="760 110 1200 400" width="1200" height="400"');
fs.writeFileSync(out + "kursaal-drawing-cube.svg", cube);

// The whole building for the dark home page, lit up as neon: each line is a blurred halo under a thin core,
// in off-white except for the three coloured rows. No fill in the faces: it turned grey on the dark blue.
const blur = (id, n) =>
  `<filter id="${id}" filterUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"><feGaussianBlur stdDeviation="${n}"/></filter>\n`;
const neon =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" fill="none" stroke-linecap="square">\n` +
  `<defs>\n${blur("halo", 7)}${blur("soft", 2.5)}</defs>\n` +
  g('stroke="#e9dcc0" stroke-opacity=".06"', layers.sheet) +
  g('stroke="#e9dcc0" stroke-opacity=".25" stroke-dasharray="14 6 2 6"', layers.build) +
  g('stroke="#e9dcc0" stroke-opacity=".3"', layers.dim) +
  g('stroke="#e9dcc0" stroke-opacity=".45" stroke-width="3" filter="url(#soft)"', layers.glass) +
  g('stroke="#f5ecd9" stroke-opacity=".7"', layers.glass) +
  g('stroke="#ff2f8e" stroke-width="10" filter="url(#halo)"', layers.pink) +
  g('stroke="#ffd0e4" stroke-width="2.6"', layers.pink) +
  g('stroke="#c8ef1e" stroke-width="10" filter="url(#halo)"', layers.lime) +
  g('stroke="#f2ffb8" stroke-width="2.6"', layers.lime) +
  g('stroke="#f0e2c4" stroke-opacity=".8" stroke-width="9" filter="url(#halo)"', layers.line) +
  g('stroke="#fff8ec" stroke-width="2"', layers.line) +
  "</svg>\n";
fs.writeFileSync(out + "kursaal-drawing-neon.svg", neon);
console.log(`neon: ${(neon.length / 1024).toFixed(1)} KB. Vanishing points: ${VL.map(f)} and ${VR.map(f)}`);
