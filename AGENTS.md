# AGENTS.md

Instructions for AI coding agents (and humans) working on this repository. Read [README.md](README.md) first for the overview.

## Project in one paragraph

Trilingual static site (Basque `eu` = default at `/`, Spanish `es` at `/es/`, English `en` at `/en/`) for the Basque UNEVOC Week, built with **Hugo ≥ 0.146 (extended)** and **Tailwind CSS v4 via npm**, using a custom theme in `themes/basqueunevocweek`. It deploys to GitHub Pages through `.github/workflows/pages.yml` on every push to `main`. It shares its technology with the `cyberlehia` site but not its design or content: keep the two separate.

## Commands

```sh
npm ci                # once: installs Tailwind (required by Hugo)
hugo server           # dev server on http://localhost:1313/basqueunevocweek/ (the baseURL subpath is kept)
hugo --gc --minify    # production build → public/
```

There is no test suite. **A change is verified when:**
1. `hugo --gc --minify` finishes with no `ERROR` and no `WARN` lines.
2. The site is built under `/basqueunevocweek/` and no link misses the prefix: `grep -rhoE '(href|src)="?/[^" >]*' public --include=*.html | grep -vE '="?/basqueunevocweek/'` prints nothing.
3. For visual changes, check the pages at ~1440px and ~390px wide, in all three languages.

## Hard rules

1. **All languages, always.** Every content change needs the matching change in `content/eu/`, `content/es/` and `content/en/`, with the same `translationKey`. Every UI string goes in the three `themes/basqueunevocweek/i18n/*.yaml` files; never hardcode text in layouts.
2. **Don't invent facts.** Dates, venues, speakers, partners and programme come from the organisers. While a fact is unknown, use `{{< soon >}}` in Markdown or leave the `dates` / `venue` params empty.
3. **Never hardcode URLs** in templates: use `.RelPermalink`, `relURL` or `relLangURL`, and pass asset paths without a leading `/`. In Markdown, write internal links as `/path/` without the language prefix.
4. **Tailwind: npm only.** Tailwind v4 is configured in CSS (`@theme` in `assets/css/main.css`). No PostCSS, `tailwind.config.js` or extra npm packages unless asked.
5. **Keep it static and light.** No tracking scripts and no third-party requests; fonts are self-hosted in the theme. There is no JavaScript so far (the mobile menu is a `<details>`).
6. **Logos of third parties need permission.** Don't add the UNESCO or UNESCO-UNEVOC logo without the authorisation for this event.
7. **Don't commit build output:** `public/`, `resources/_gen/`, `node_modules/`, `hugo_stats.json` and `.hugo_build.lock` are git-ignored.

## Conventions

- **Template layout (Hugo ≥ 0.146):** `layouts/baseof.html`, `home.html`, `page.html`, `404.html`, with `_partials/`, `_shortcodes/` and `_markup/`.
- **Menus come from front matter** (`menus: main`, ordered by `weight`).
- **Design tokens:** `paper`, `paper-200`, `pine-900`, `pine-700`, `muted`, `coral`, plus `font-display`. Don't introduce new hex colours in templates; add a token to `@theme`.
- **Components** live in `@layer components` in `main.css`: `container-site`, `eyebrow`, `prose-site`. In Tailwind v4 you can't `@apply` a custom component class.
- Light theme only, by design (`color-scheme: light`). Respect `prefers-reduced-motion`.

## Open items

- All event content (dates, venue, programme, partners, contact): unknown, shown as "coming soon".
- `params.noindex = true` while the site is a placeholder: set it to `false` at launch.
- Legal pages (legal notice, privacy, cookies) are missing and need to be added before launch.
- The production domain is not decided; the site lives at `tknika.github.io/basqueunevocweek/`.
- Basque, Spanish and English texts need a review by the organisers.
