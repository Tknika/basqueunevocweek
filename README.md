# Basque UNEVOC Week

Website of the Basque UNEVOC Week: Tknika UNEVOC centre 10th Anniversary & Open Days 2027, 11-13 May 2027, Donostia · San Sebastian. Static site in English, built with [Hugo](https://gohugo.io/) and Tailwind CSS v4.

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
| Texts of each page | `content/` |
| Dates, venue, tagline, organisers | `hugo.toml` |
| Design | `themes/basqueunevocweek/assets/css/main.css` |
| Templates | `themes/basqueunevocweek/layouts` |

Every push to `main` is built by `.github/workflows/pages.yml`, which also publishes it once GitHub Pages is enabled. Rules for contributors are in [AGENTS.md](AGENTS.md).
