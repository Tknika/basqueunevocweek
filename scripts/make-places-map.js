// The map of the places of interest on Practical information (asked in November 2026, in place of a photo): a drawing
// of the coast of Donostia · San Sebastian, not a map service, so the page loads nothing from other sites. The sea in
// a light sky tint, the land white on a faint squared sheet (as the site's old drawings), the coastline in a thin azure
// line, Santa Clara island and the Urumea river; each place is a small numbered azure square (the same number as its
// card) and the Kursaal a pink cube with its name.
// The shapes come from OpenStreetMap (© OpenStreetMap contributors, ODbL), kept in scripts/places-map-osm.json.
// The places are placed by Hugo from `lat` and `lon` in each place (front matter `interest`), with the projection
// written into the partial below, so a place can be added or moved without running this again.
// Writes an inline SVG partial (it uses the site's colours as classes). Run with: node scripts/make-places-map.js
const fs = require("fs");
const path = require("path");

const osm = JSON.parse(fs.readFileSync(path.join(__dirname, "places-map-osm.json"), "utf8"));

// The area shown, from Mount Igueldo to Zurriola, and its projection: x grows with longitude, y with latitude going
// south; a degree of longitude is cos(latitude) times a degree of latitude, so the shapes keep their proportions.
const LON0 = -2.0155, LON1 = -1.9665, LAT0 = 43.3310, LAT1 = 43.3135;
const W = 1000;
const KX = W / (LON1 - LON0);
const KY = KX / Math.cos(((LAT0 + LAT1) / 2) * Math.PI / 180);
const H = Math.round((LAT0 - LAT1) * KY);
const f = (n) => Math.round(n * 10) / 10;
const xy = ([lon, lat]) => [f((lon - LON0) * KX), f((LAT0 - lat) * KY)];
const line = (pts) => pts.map((p, i) => (i ? "L" : "M") + xy(p).join(" ")).join("");

// The land: the mainland coastline runs from east to west with the land on its left (south), so it closes through
// two points far south of the view; Santa Clara island is a closed line of its own.
const [island, mainland] = osm.coastline.slice().sort((a, b) => a.length - b.length);
const land = line(mainland) + `L${f((LON0 - 0.05 - LON0) * KX)} ${f(H + 400)}L${f((LON1 + 0.05 - LON0) * KX)} ${f(H + 400)}Z` + line(island) + "Z";
// The river: its centre line, drawn as a wide stroke in the sea's tint (about 70 m wide)
const river = osm.river.map(line).join("");
const riverWidth = f(70 / (111320 * Math.cos(((LAT0 + LAT1) / 2) * Math.PI / 180) / KX));

// The faint squared sheet on the land, every 50 units
let grid = "";
for (let x = 50; x < W; x += 50) grid += `M${x} 0V${H}`;
for (let y = 50; y < H; y += 50) grid += `M0 ${y}H${W}`;

const out = `{{- /* The map of the places of interest (Practical information), drawn by scripts/make-places-map.js: do not edit by hand.
  The coast, Santa Clara island and the Urumea come from OpenStreetMap (© OpenStreetMap contributors, ODbL). Each place
  in the page's \`interest\` with \`lat\` and \`lon\` is a numbered square (its number in the list), placed here with the
  script's projection; the Kursaal is the pink cube. On phones and in the narrow column of large screens the markers are drawn larger (max-sm:scale-140 lg:scale-140, around their own centre), as the map is small there. Decorative for screen readers: every place is also in the list. */ -}}
{{ $lon0 := ${LON0} }}{{ $lat0 := ${LAT0} }}{{ $kx := ${KX.toFixed(4)} }}{{ $ky := ${KY.toFixed(4)} }}
<svg viewBox="0 0 ${W} ${H}" class="block h-auto w-full" role="img" aria-label="Map of Donostia · San Sebastian with the places of interest, numbered as in the list" focusable="false">
  <defs><clipPath id="places-map-land"><path d="${land}"/></clipPath></defs>
  <rect width="${W}" height="${H}" class="fill-sky/45"/>
  <path d="${land}" class="fill-white"/>
  <path d="${grid}" clip-path="url(#places-map-land)" class="fill-none stroke-azure/8" stroke-width="1"/>
  <path d="${river}" class="fill-none stroke-sky/45" stroke-width="${riverWidth}" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="${line(mainland)}${line(island)}Z" class="fill-none stroke-azure/45" stroke-width="1.5" stroke-linejoin="round"/>
  {{- /* The Kursaal: a pink cube, the brand shape, with its name */ -}}
  {{ $k := dict "x" (mul (sub -1.97911 $lon0) $kx) "y" (mul (sub $lat0 43.32446) $ky) }}
  <g transform="translate({{ $k.x }} {{ $k.y }})"><g class="max-sm:scale-140 lg:scale-140">
    <path d="M-16 -13H16L13 13H-19Z" class="fill-pink stroke-white" stroke-width="3"/>
    <text x="24" y="7" class="fill-nobility font-display" font-size="20">Kursaal</text>
  </g></g>
  {{- range $i, $p := .places }}{{ with $p.lat }}
  <g transform="translate({{ mul (sub $p.lon $lon0) $kx }} {{ mul (sub $lat0 $p.lat) $ky }})"><g class="max-sm:scale-140 lg:scale-140">
    <rect x="-19" y="-19" width="38" height="38" class="fill-azure stroke-white" stroke-width="3.5"/>
    <text y="8" text-anchor="middle" class="fill-white font-display" font-size="21">{{ add $i 1 }}</text>
  </g></g>
  {{- end }}{{ end }}
</svg>
`;

const file = path.join(__dirname, "..", "themes", "basqueunevocweek", "layouts", "_partials", "drawing-places-map.html");
fs.writeFileSync(file, out);
console.log(`Wrote ${path.relative(process.cwd(), file)}: ${W}×${H}, river ${riverWidth} units wide`);
