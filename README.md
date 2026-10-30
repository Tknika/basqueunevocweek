# Basque UNEVOC Week

Website of the Basque UNEVOC Week. Static site built with [Hugo](https://gohugo.io/) and Tailwind CSS v4, published on GitHub Pages.

- Languages: Basque (`/`), Spanish (`/es/`), English (`/en/`)
- Published at: <https://tknika.github.io/basqueunevocweek/>

## Run it locally

Requires Hugo extended ≥ 0.146 and Node ≥ 20.

```sh
npm ci
hugo server
```

The site opens at <http://localhost:1313/basqueunevocweek/>.

## Where things are

| What | Where |
| --- | --- |
| Texts of each page | `content/eu`, `content/es`, `content/en` |
| Dates, venue, contact, organisers | `hugo.toml` |
| Interface texts | `themes/basqueunevocweek/i18n` |
| Design | `themes/basqueunevocweek/assets/css/main.css` |
| Templates | `themes/basqueunevocweek/layouts` |

Every push to `main` is built and published by `.github/workflows/pages.yml`. Rules for contributors are in [AGENTS.md](AGENTS.md).
