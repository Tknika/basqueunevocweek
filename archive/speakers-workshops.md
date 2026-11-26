# Speakers page, Workshops section: the workshop speakers (kept to restore it)

Until November 2026 the Workshops section of the speakers page listed the workshop speakers, grouped by workshop. For now it shows the call for workshops instead (the same panel as on the afternoon of 12 May). Conference and Panel are unchanged. This is how to put the workshop speakers back.

This folder is outside `content/`, so Hugo does not build it.

## How to restore it

In `themes/basquevetsummit/layouts/speakers.html`:

1. Put back, after the other `where` lines at the top:

   ```go-html-template
   {{ $workshoppers := where $people "group" "workshops" }}
   ```

2. In the index of groups, give Workshops its count again:

   ```go-html-template
   (dict "id" "workshops" "label" "Workshops" "count" (len $workshoppers))
   ```

3. Replace the Workshops section (the one with `partial "call-for-workshops.html"`) with the section in `archive/speakers-workshops.html`.

The data (`data/speakers.yaml`, `data/workshops.yaml`), the photos in `static/images/speakers/` and the partials (`_partials/speaker.html`, `_partials/avatar.html`) are all still in the repository. Update the data with the 2027 workshops when they arrive.

The whole layout as it was is also in git, under the tag `speakers-2026`:
`git show speakers-2026:themes/basqueunevocweek/layouts/speakers.html`
