// The line drawing on the About page's call to action ("Be part of a week…"): an audience facing us in curved rows,
// as in an auditorium, drawn in thin white lines like the site's icons (a head and the shoulders), with one free
// place in the middle: a dashed lime outline with a small pink cube and a plus, a place for the visitor.
// The rows recede (smaller and fainter at the back) and curve like a hemicycle. Each person is filled with the band's
// azure so the nearer rows hide the ones behind. Writes an inline SVG partial (it uses the site's colours as classes).
// Run with: node scripts/make-crowd-drawing.js
const fs = require("fs");
const path = require("path");

const W = 600, H = 420;
const f = (n) => Math.round(n * 10) / 10;

// A small deterministic random, so the drawing is the same every time
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

// Rows from the front to the back: each one smaller (perspective), a little higher, so that the heads of a row show
// between the heads of the row in front and its bodies hide behind their shoulders, curving up at the sides
// (a hemicycle seen from the stage), with fainter lines further back. Staggered by half a place.
const N = 9, FRONT = { y: 388, s: 36 };
const rows = [];
for (let i = 0, y = FRONT.y, s = FRONT.s; i < N; i++) {
  rows.push({ y, s, step: s * 2.2, curve: 46 + i * 9, o: f(1 - i * 0.075), shift: i % 2 ? 0.5 : 0 });
  y -= s * 1.32;
  s *= 0.82;
}
// The free place: in the second row, the place right of the centre
const FREE_ROW = 1;

// A person, as in the site's icons: the shoulders as a low dome running down out of sight, and the head above them
function person(x, y, s, { free = false } = {}) {
  const w = s * (0.96 + rand() * 0.08);        // shoulders, half width
  const d = w * 0.62;                          // height of the dome
  const r = s * (0.54 + rand() * 0.06);        // head
  const hy = y - d - s * 0.14 - r;             // head centre
  const body = `M${f(x - w)} ${f(y + s * 2)}V${f(y)}A${f(w)} ${f(d)} 0 0 1 ${f(x + w)} ${f(y)}V${f(y + s * 2)}`;
  const head = `<circle cx="${f(x)}" cy="${f(hy)}" r="${f(r)}"/>`;
  if (!free) return `<path d="${body}"/>${head}`;
  // The free place: dashed lime, with a pink cube and a plus beside the head
  const cx = x + w * 0.92, cy = hy - r * 0.35, c = s * 0.5;
  const cube = `M${f(cx - c * 0.86)} ${f(cy - c)}L${f(cx + c)} ${f(cy - c * 0.88)}L${f(cx + c * 0.86)} ${f(cy + c)}L${f(cx - c)} ${f(cy + c * 0.88)}Z`;
  return `<g class="stroke-lime" stroke-width="2.6" stroke-dasharray="6 6"><path d="${body}"/>${head}</g>` +
    `<path class="fill-pink" stroke="none" d="${cube}"/>` +
    `<path class="stroke-night" stroke-width="3" d="M${f(cx - c * 0.45)} ${f(cy)}H${f(cx + c * 0.45)}M${f(cx)} ${f(cy - c * 0.45)}V${f(cy + c * 0.45)}"/>`;
}

// Drawn from the back to the front, so nearer people hide the ones behind
let out = "";
let top = H;
for (let i = N - 1; i >= 0; i--) {
  const row = rows[i];
  let people = "", free = null;
  for (let x = W / 2 + row.shift * row.step - Math.ceil(W / 2 / row.step + 1) * row.step; x <= W + row.step; x += row.step) {
    const u = (x - W / 2) / (W / 2);           // -1 at the left edge, 1 at the right
    const y = row.y - row.curve * u * u;
    const s = row.s * (1 - 0.12 * u * u);
    if (i === FREE_ROW && !free && x > W / 2) { free = { x, y, s }; continue; }
    people += person(x, y, s);
    if (Math.abs(u) < 1) top = Math.min(top, y - s * 1.9);
  }
  out += `<g stroke-opacity="${row.o}">${people}</g>`;
  // The free place goes on top of its own row, so the people beside it do not cover it
  if (free) out += person(free.x, free.y, free.s, { free: true });
}
const Y0 = Math.floor(top - 8);

const svg = `{{- /* Made by scripts/make-crowd-drawing.js: run it again instead of editing this file. A line drawing for the About page's call to action, on the azure band: an audience in curved rows with one free place (dashed lime, a pink cube with a plus). Decorative. Takes class (the size). */ -}}
<svg viewBox="0 ${Y0} ${W} ${H - Y0}" class="{{ .class }}" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><g class="fill-azure stroke-white">${out}</g></svg>
`;

const file = path.join(__dirname, "..", "themes", "basqueunevocweek", "layouts", "_partials", "drawing-crowd.html");
fs.writeFileSync(file, svg);
console.log(`${path.relative(process.cwd(), file)}: ${svg.length} bytes`);
