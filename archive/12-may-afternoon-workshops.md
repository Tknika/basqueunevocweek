# 12 May afternoon: the workshops version (kept to restore it)

Until November 2026 the afternoon of 12 May listed the workshops on advanced manufacturing. Following the draft calendar, it now shows a call for participants' workshops instead. This is the earlier version, kept so it can be put back when the site is published.

This folder is outside `content/`, so Hugo does not build it.

## How to restore it

1. In `content/programme/12-may.md`, keep `lunch` and `afternoon_time` in the front matter, remove the `call` block (the call for workshops) and replace everything after the closing `---` (the `{{< call-for-workshops >}}` shortcode) with the block below.
2. The workshops come from `data/workshops.yaml` (with photos from `data/speakers.yaml`) through the `workshops` shortcode (`themes/basqueunevocweek/layouts/_shortcodes/workshops.html`). All three are still in the repository, because the speakers page uses them too: update the data if the workshops change.
3. In the press kit (`press-kit/press-kit.html`), the 12 May afternoon slot read `<b>Afternoon</b>Workshops on advanced manufacturing`. Change it back and run `node scripts/make-press-kit.js`.

The whole page as it was is also in git, under the tag `programme-12-may-workshops`:
`git show programme-12-may-workshops:content/programme/12-may.md`

## The block (body of content/programme/12-may.md)

Front matter values it used (unchanged today):

```yaml
lunch: "13.15-14.30"
afternoon_time: "14.30-16.30"
```

Body, after the closing `---`:

```markdown
### Workshops on advanced manufacturing

{{< workshops >}}
```
