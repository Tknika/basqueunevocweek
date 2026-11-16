# Speakers page: the speakers version (kept to restore it)

Until November 2026 the speakers page listed the speakers (the 2026 ones, as placeholders): an index of the three groups, the conference speakers, the panel and the workshop speakers grouped by workshop. For now it shows the call for workshops instead, the same panel as on the afternoon of 12 May. This is how to put the speakers version back.

This folder is outside `content/`, so Hugo does not build it.

## How to restore it

1. In `content/speakers.md`, put back `layout: speakers` in the front matter and remove the `{{< call-for-workshops >}}` shortcode from the body (the body was empty). The front matter was:

   ```yaml
   title: "Speakers"
   header_image: "images/speakers-pedrosa.jpg"
   layout: speakers
   weight: 3
   menus: main
   ```

2. Nothing else is needed: the layout (`themes/basqueunevocweek/layouts/speakers.html`), its partials (`_partials/speaker.html`, `_partials/avatar.html`) and the data (`data/speakers.yaml`, `data/workshops.yaml`, the photos in `static/images/speakers/`) are all still in the repository. Update the data with the 2027 speakers when they arrive.

The whole page as it was is also in git, under the tag `speakers-2026`:
`git show speakers-2026:content/speakers.md`
