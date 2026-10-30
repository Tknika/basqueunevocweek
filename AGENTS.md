# AGENTS.md

Instructions for AI coding agents (and humans) working on this repository. Read [README.md](README.md) first for the overview.

## Project in one paragraph

English-only static site for the Basque UNEVOC Week (Tknika UNEVOC centre 10th Anniversary & Open Days 2027, 11-13 May 2027, Donostia · San Sebastian), built with **Hugo ≥ 0.146 (extended)** and **Tailwind CSS v4 via npm**, using a custom theme in `themes/basqueunevocweek`. The workflow in `.github/workflows/pages.yml` deploys it to GitHub Pages on every push to `main`. It shares its technology with the `cyberlehia` site but not its design or content: keep the two separate.

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
2. **Don't invent facts.** Programme, speakers and practical details come from the organisers. While a fact is unknown, use `{{< soon >}}` in Markdown. Dates, venue and tagline are params in `hugo.toml`.
3. **Never hardcode URLs** in templates: use `.RelPermalink`, `relURL` or `relLangURL`, and pass asset paths without a leading `/`. In Markdown, write internal links as `/path/`.
4. **Tailwind: npm only.** Tailwind v4 is configured in CSS (`@theme` in `assets/css/main.css`). No PostCSS, `tailwind.config.js` or extra npm packages unless asked.
5. **Keep it static and light.** No tracking scripts and no third-party requests; fonts are self-hosted in the theme. There is no JavaScript so far (the mobile menu is a `<details>`).
6. **Don't commit build output:** `public/`, `resources/_gen/`, `node_modules/`, `hugo_stats.json` and `.hugo_build.lock` are git-ignored.

## Conventions

- **Template layout (Hugo ≥ 0.146):** `layouts/baseof.html`, `home.html`, `section.html`, `page.html`, `404.html`, with `_partials/`, `_shortcodes/` and `_markup/`.
- **Site map:** home; programme (a section with one page per day: 11, 12 and 13 May); speakers; Youth Camp; press area; practical information.
- **Menus come from front matter** (`menus: main`, ordered by `weight`). The days hang from the programme with `parent: programme`.
- **Organisers** are listed in `hugo.toml` (`params.organizers`), in footer order. The footer is dark, so logos must be the white versions.
- **Design tokens:** `navy`, `azure`, `mist`, `pink`, plus `font-display`. Don't introduce new hex colours in templates; add a token to `@theme`. The exception is `_partials/folds.html`, whose decorative shapes use fixed colours.
- **Design:** it follows the event's poster loosely (blue, flowing folds, slanted white strip, white date pill with pink text) in a cleaner way.
- **Components** live in `@layer components` in `main.css`: `container-site`, `tape`, `pill`, `prose-site`. In Tailwind v4 you can't `@apply` a custom component class.
- Light theme only, by design (`color-scheme: light`). Respect `prefers-reduced-motion`.

## Open items

- Event content (programme, speakers, Youth Camp, press area, practical information): unknown, shown as "Details will be published soon".
- UNESCO-UNEVOC logo: shown as text until the original file is available, in a white version for the dark footer.
- FP Euskadi logo is a small 111×109 PNG; replace it with an SVG or larger PNG if available.
- `params.noindex = true` while the site is a placeholder: set it to `false` at launch.
- Legal pages (legal notice, privacy, cookies) are missing and need to be added before launch.
- The production domain is not decided; the site is meant to live at `tknika.github.io/basqueunevocweek/`.
