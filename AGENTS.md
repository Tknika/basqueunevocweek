# AGENTS.md

Instructions for AI coding agents (and humans) working on this repository. Read [README.md](README.md) first for the overview.

## Project in one paragraph

English-only static site for the UNESCO-UNEVOC Anniversary Conference & Open Days 2027 (11-13 May 2027, Donostia · San Sebastian; the title is `title` in `hugo.toml`; the site has no name of its own), built with **Hugo ≥ 0.146 (extended)** and **Tailwind CSS v4 via npm**, using a custom theme in `themes/basqueunevocweek`. The workflow in `.github/workflows/pages.yml` deploys it to GitHub Pages on every push to `main`. It shares its technology with the `cyberlehia` site but not its design or content: keep the two separate.

## Commands

```sh
npm ci                # once: installs Tailwind (required by Hugo)
hugo server           # dev server on http://localhost:1313/basqueunevocweek/ (the baseURL subpath is kept)
hugo --gc --minify    # production build → public/
```

There is no test suite. **A change is verified when:**
1. `hugo --gc --minify` finishes with no `ERROR` and no `WARN` lines.
2. The site is built under `/basqueunevocweek/` and no link misses the prefix: `grep -rhoE '(href|src)="?/[^" >]*' public --include=*.html | grep -vE '="?/basqueunevocweek/'` prints nothing.
3. For visual changes, check the pages at ~1440px and ~390px wide.

## Hard rules

1. **English only.** Don't add languages or a language switcher unless asked. Interface text lives directly in the layouts.
2. **Don't invent facts.** Programme, speakers and practical details come from the organisers. While a fact is unknown, use `{{< soon >}}` in Markdown. Dates and venue are params in `hugo.toml`.
3. **Never hardcode URLs** in templates: use `.RelPermalink`, `relURL` or `relLangURL`, and pass asset paths without a leading `/`. In Markdown, write internal links as `/path/`.
4. **Tailwind: npm only.** Tailwind v4 is configured in CSS (`@theme` in `assets/css/main.css`). No PostCSS, `tailwind.config.js` or extra npm packages unless asked.
5. **Keep it static and light.** No tracking scripts and no third-party requests; fonts are self-hosted in the theme. There is no JavaScript so far (the mobile menu is a `<details>`).
6. **Don't commit build output:** `public/`, `resources/_gen/`, `node_modules/`, `hugo_stats.json` and `.hugo_build.lock` are git-ignored.

## Conventions

- **Template layout (Hugo ≥ 0.146):** `layouts/baseof.html`, `home.html`, `section.html`, `page.html`, `404.html`, with `_partials/`, `_shortcodes/` and `_markup/`.
- **Site map:** home; about (the concept note, `layouts/about.html`); programme (a section with one page per day: 11, 12 and 13 May); speakers; Student Hub; press area; practical information.
- **Menus come from front matter** (`menus: main`, ordered by `weight`). The days hang from the programme with `parent: programme`.
- **Organisers** are listed in `hugo.toml` (`params.organizers`), in press-area order. In the footer, `footer` places each logo: Tknika and FP Euskadi side by side (`"top"`, by `footer_order`), the Basque Government under them as wide as both (`"bottom"`), and UNESCO-UNEVOC apart on the right past a thin line (`"aside"`): the UNEVOC logo must always stand apart from the others. The footer is `azure`, so logos must be the white versions, or use `plaque = true` to sit on a white background.
- **Typography:** two fonts. Instrument Sans (the default) for everything, with big semibold titles and tight tracking (`h1` and `h2` in `main.css`). Krona One (`font-display`), graphic and with one weight, only for small big moments: dates, figures, day names on the programme, "Lunch" and "or". No fake bolds: `font-synthesis-weight` is off.
- **Design tokens:** palette: `azure`, `nobility`, `pink`, `lime`, `purple`, plus white, the `sky` and `haze` tints taken from the Kursaal photos, and the older `mist` tint. `pink` is `#e14e89` (since November 2026): white or `nobility` text don't reach 4.5:1 on it, so text on pink is `night` (a deeper nobility), and small pink text and pink link hovers use `pink-ink` (a deeper pink); over the azure sky of the home photo the menu hover stays white with a white underline (`--menu-hover` and `--menu-line`, animated by `header-solid`); `pink` itself is for shapes, surfaces and big text (24px and up).
- **Colour:** texts are UNEVOC `azure` (the `body` colour) and text links `nobility`, turning `pink` on hover, menu included, on every page but Student Hub, which sets its own colours. Light pages: white and `haze` and `azure` (UNEVOC) for the footer. No large dark blue areas ("too dark blue" was the reason for the redesign). `azure` (UNEVOC) for figures and hovers. `purple` is left for the avatars. `pink` and `lime` are small touches, never blocks (except on Student Hub); `lime` never as text on white.
- **Design (redesigned in November 2026 to look lighter and more current):** immersive full-width photos of the Kursaal against the sky (`kursaal-sky.jpg`, `kursaal-facade.jpg`, from `_originals/`), big titles, square boxes on `haze`, and a light header that stays at the top (on the home transparent over the first photo and white once the page scrolls, with a CSS scroll-driven animation, `.header-home`; white elsewhere). The brand shape is the leaning glass cube of the Kursaal: photos are cut with it and it appears as small pink and lime shards (`shape-*` classes in `main.css`), after texurabranding.com, which does the same with its logo. Inner pages open with `_partials/page-header.html`: the title on `haze` next to a cube-cut photo set by `header_image` in the front matter. The speakers page has its own layout (`layouts/speakers.html`), without boxes (a wall of cards looked too blocky and dull): an index of the three groups with their counts, conference speakers in an open grid with their bios folded away, the panel in one row on a tinted band, and workshop speakers grouped by workshop (from `data/workshops.yaml`) in compact rows; pictures cut as leaning cubes like every other photo (`_partials/avatar.html`; round and half-circle pictures clashed with the pointed shapes). Text links are `nobility` and turn `pink` on hover, buttons turn `pink` too (the Student Hub page and menu button keep their own look); links to other sites open in a new tab (`target="_blank" rel="noopener"`, also from Markdown via `_markup/render-link.html`). For the same reason, buttons and labels have square corners: no `rounded-*`, except the Student Hub button in the menu, which stays a pill so it stands apart, with initials on brand colours until a real `photo` is set.
- **Student Hub** speaks to students, so it looks nothing like the rest of the site on purpose: a festival poster (`layouts/youth.html`, content in its front matter). Tknika `lime` as the page, giant capitals from edge to edge, stickers at an angle, the two programmes as tickets, a dark moving band of topics (`marquee` in `main.css`) and each programme as a centred line-up of days, the second one on `pink`. No UNEVOC blue on this page. Tried and rejected: neon on a dark grid (old-fashioned), purple (ugly) and an azure version too close to the rest of the site. A page with `highlight` in its front matter stands apart in the menu (a pink pill, the only rounded button); `highlight: true` shows the pill alone, a short text adds a small label inside it. Keep this look to that page.
- **Components** live in `@layer components` in `main.css`: `container-site`, `prose-site`, `diagonal-left` and `diagonal-right`. In Tailwind v4 you can't `@apply` a custom component class.
- Light theme only, by design (`color-scheme: light`). Respect `prefers-reduced-motion`.

## The Kursaal drawing

Before the redesign, the site showed the Kursaal as an architect's perspective drawing, generated by `node scripts/make-kursaal-drawing.js` with geometry traced from a photo: ruled lines in a few weights, corners that cross, dash-dot construction lines to the vanishing points, dimension lines without figures, small people for scale and a faint squared sheet. Only three coloured lines (two pink, one lime). The script writes two versions: `kursaal-drawing-neon.svg`, the whole building lit up on the dark home, with SVG blur filters; and `kursaal-drawing-cube.svg`, the large cube alone in thin grey lines for the white inner page headers. White lines on blue, a black gradient, dark lines with a dark panel (too harsh), and blue or grey lines on an all-white home were tried and rejected.

The drawings are no longer used, but the script and SVGs are kept. Hand-drawn pencil lines were tried on the inner pages (page headers, over photos, half photo and half drawing) and rejected as childish: don't draw over photos or in the content.

## Open items

- Programme, speakers, Student Hub and practical information are filled from the 2026 PDF: replace them when the 2027 data arrives. None of it carries a notice, at the organisers' request, so it reads as 2027 even though it shows 2026 people, dates and places (only the 12 May venue, the Kursaal, is confirmed for 2027). The cards on the programme page come from each day's front matter (`weekday`, `headline`, `parts`, optional `image`). Days with `layout: day` (11 May so far) are built from `morning` and `afternoon` in the front matter (`layouts/day.html`). In the dev server, new Tailwind classes may not appear until `main.css` is touched; the stylesheet link carries `?v=<build time>` there so the browser never keeps a stale or half-built copy (production builds are fingerprinted instead). The home page's line drawing of the Kursaal is generated by `node scripts/make-kursaal-drawing.js`. People and workshops live in `data/`. The press area is still empty.
- FP Euskadi logo is a small 111×109 PNG; replace it with an SVG or larger PNG if available.
- `params.noindex = true` while the site is a placeholder: set it to `false` at launch.
- Legal pages (legal notice, privacy, cookies) are missing and need to be added before launch.
- The production domain is not decided; the site is meant to live at `tknika.github.io/basqueunevocweek/`.
