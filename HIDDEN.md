# Hidden for now, to bring back

Things taken off the site on purpose while their 2027 information is unknown. Each one is kept, ready to come back. When you bring one back, delete it from this list.

## 1. The Speakers page (hidden November 2026)

The page is not built and not in the main menu. On the home, its highlight stays (the photo and the title) without a link, with a "Soon" tag and a teaser text (`soon` in `_partials/home-main.html`).

To bring it back, in `content/speakers.md`:
- delete the `build:` block (`render: never` and `list: never`);
- uncomment `menus: main`.

The home highlight links to the page again on its own, with its usual text, as soon as the page is built.
The page still carries its "Pending" band (`pending`): remove it when the 2027 speakers are confirmed.

## 2. Speakers and workshops in the home figures (hidden November 2026)

In `content/_index.md`, under `figures`, the speakers and the workshops have `hidden: true`. Delete that line from each to show them again: they count `data/speakers.yaml` and `data/workshops.yaml`, so update those files first with the 2027 people and workshops.

## 3. The workshop speakers on the Speakers page (hidden before November 2026)

The Workshops section of the Speakers page shows the call for workshops instead. The 2026 version is kept in `archive/speakers-workshops.md` (and the git tag `speakers-2026`).

## 4. The workshops on the afternoon of 12 May (hidden before November 2026)

The afternoon shows the call for workshops instead. The 2026 version is kept in `archive/12-may-afternoon-workshops.md` (and the git tag `programme-12-may-workshops`), to restore at launch.

## 5. The conference sessions on the morning of 12 May (hidden November 2026)

The 2027 programme is unknown, so the morning shows only registration, the coffee break, the closing and lunch, with the rest as "To be announced" slots (`tba: true` in `content/programme/12-may.md`). The 2026 talks, speakers and panel are kept in `archive/12-may-morning-2026.md`: replace the `tba` slots with the 2027 sessions when they arrive (and remove the morning's `pending`).
