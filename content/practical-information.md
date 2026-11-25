---
title: "Practical information"
# Photo: Ultrash Ricco on Unsplash, resized from ultrash-ricco-8KCquMrFEPg-unsplash.jpg (original in _originals/)
header_image: "images/la-concha.jpg"
weight: 6
menus: main
layout: practical
venue:
  name: "Kursaal"
  address: "Avenida de Zurriola 1, 20002 Donostia · San Sebastian"
  map: "https://maps.app.goo.gl/SuAH3ZbRPpMkHpkv7"
  image: "images/kursaal-sky-pale-1200.jpg"
  alt: "The corner of one of the Kursaal glass cubes against a pale blue sky"
getting_there:
  - title: "By plane"
    items:
      - "San Sebastián Airport (EAS), in Hondarribia, about 20 km away, with buses and taxis to the city."
      - "Bilbao Airport (BIO), about 100 km away, with direct buses to the San Sebastián bus station."
      - "Biarritz Airport (BIQ), in France, about 50 km away."
  - title: "By train, bus or metro"
    items:
      - "By train: the train station (Renfe) is on the same side of the river as the Kursaal, next to Tabakalera, about 15 minutes on foot."
      - "By bus: long-distance buses arrive at the bus station, next to the train station. In the city, buses run by [Dbus](https://www.dbus.eus/) stop near the Kursaal."
      - "By metro: Metro Donostialdea, the *Topo*, crosses the city underground. Since November 2026 it stops in the city centre (Kontxa-Zentroa), Amara and El Antiguo (Bentaberri), with a train every 7.5 minutes, and links San Sebastian with the nearby towns and with Hendaye, in France. Lines and timetables on the [Euskotren website](https://www.euskotren.eus/)."
  - title: "On foot"
    items:
      - "The Kursaal is in the Gros neighbourhood, on Zurriola beach, a short walk from the Old Town and the city centre."
# The map under "Getting to the Kursaal" (layouts/practical.html): OpenStreetMap, not Google Maps, so the page sets no cookies (asked in November 2026).
# Leaflet is kept in the theme (static/vendor/leaflet); only the map images come from OpenStreetMap. In the style of the euskelec contact map (grey, small blue squares). Each place is a square on the map and a line in the list next to it.
places_map:
  title: "The Kursaal and Tabakalera on the map"
  places:
    - name: "Kursaal"
      address: "Avenida de Zurriola 1, 20002 Donostia · San Sebastian"
      lat: 43.3243
      lon: -1.9787
    - name: "Tabakalera"
      address: "Andre Zigarrogileen plaza 1, 20012 Donostia · San Sebastian"
      lat: 43.3167
      lon: -1.9757
stay:
  intro: "May is a busy month in San Sebastian: book early. These neighbourhoods are within walking distance of the Kursaal."
  areas:
    - name: "Gros"
      text: "The neighbourhood of the Kursaal, by Zurriola beach. The closest option, with plenty of pintxo bars."
    - name: "Old Town"
      text: "Across the river, 5 to 10 minutes on foot. The historic centre, between the port and Mount Urgull."
    - name: "City centre"
      text: "Around the cathedral and La Concha bay, about 15 minutes on foot."
  link:
    text: "San Sebastian tourist office"
    url: "https://www.sansebastianturismoa.eus/"
# The places of interest, each a card numbered as its square on the map beside them (a drawing, _partials/drawing-places-map.html, made by scripts/make-places-map.js; it replaced a photo in November 2026).
# image, alt and credit: a photo of the place, free to use (Wikimedia Commons, CC0 or CC BY-SA, and Unsplash; November 2026), credited under the cards.
# lat and lon place it on the map: from OpenStreetMap (for the Old Town, the Plaza de la Constitución; for La Concha, its beach; for Mount Igueldo, its viewpoint).
interest:
  - name: "Zurriola beach"
    text: "Right in front of the Kursaal, the surfers' beach."
    lat: 43.32672
    lon: -1.97614
    image: "images/place-zurriola.jpg"
    alt: "Zurriola beach on a sunny day, with people on the sand and Mount Ulia behind"
    credit: {text: "Mariordo (Mario Roberto Durán Ortiz)", url: "https://commons.wikimedia.org/wiki/File:Zurriola_Beach_San_Sebastian_06_2012_2590.jpg", license: "CC BY-SA 4.0", license_url: "https://creativecommons.org/licenses/by-sa/4.0/"}
  - name: "Old Town"
    text: "Narrow streets, the Plaza de la Constitución and the best known pintxo bars."
    lat: 43.32362
    lon: -1.98488
    image: "images/place-old-town.jpg"
    alt: "A pedestrian street of the Old Town between tall houses with balconies, full of people"
    credit: {text: "Hans-Jürgen Weinhardt", url: "https://unsplash.com/photos/2BlPUNH2g7U", license: "Unsplash License", license_url: "https://unsplash.com/license"}
  - name: "La Concha"
    text: "The city's bay, with its promenade and railings."
    lat: 43.31772
    lon: -1.99152
    image: "images/place-la-concha.jpg"
    alt: "The white wrought-iron railing of the La Concha promenade, with the turquoise sea behind"
    credit: {text: "Zarateman", url: "https://commons.wikimedia.org/wiki/File:San_Sebasti%C3%A1n_-_Paseo_de_la_Concha,_barandilla.jpg", license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/"}
  - name: "Mount Urgull"
    text: "Paths and viewpoints over the bay, above the Old Town."
    lat: 43.32485
    lon: -1.98942
    image: "images/place-urgull.jpg"
    alt: "Mount Urgull, green and wooded, with the statue on its top, above the houses and boats of the port"
    credit: {text: "Wolfgang Pehlemann", url: "https://commons.wikimedia.org/wiki/File:Monte_Urgull_mit_Castillo_de_La_Mota_-_Donostia_San_Sebastian_Foto_Wolfgang_Pehlemann_DSC00120.jpg", license: "CC BY-SA 3.0 DE", license_url: "https://creativecommons.org/licenses/by-sa/3.0/de/deed.en"}
  - name: "Mount Igueldo"
    text: "Reached by funicular, with views over the whole bay."
    lat: 43.32104
    lon: -2.00965
    image: "images/place-igueldo.jpg"
    alt: "The old stone tower on top of Mount Igueldo, next to a hotel, among trees under a blue sky"
    credit: {text: "Zarateman", url: "https://commons.wikimedia.org/wiki/File:San_Sebasti%C3%A1n_-_Monte_Igeldo_3.jpg", license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/"}
  - name: "Peine del Viento"
    text: "Eduardo Chillida's sculptures in the rocks at the end of Ondarreta beach."
    lat: 43.32169
    lon: -2.00555
    image: "images/place-peine-del-viento.jpg"
    alt: "The rusted iron sculptures of the Peine del Viento on the rocks, with the sea behind"
    credit: {text: "Aldara Gutiérrez Pol", url: "https://unsplash.com/photos/EneXnZ23cQA", license: "Unsplash License", license_url: "https://unsplash.com/license"}
  - name: "San Telmo Museoa"
    text: "The museum of Basque society, in a former convent in the Old Town."
    lat: 43.32503
    lon: -1.98536
    image: "images/place-san-telmo.jpg"
    alt: "The sandstone façade of San Telmo Museoa, with arched windows and the museum's sign, at the foot of the green slope of Mount Urgull"
    credit: {text: "Zarateman", url: "https://commons.wikimedia.org/wiki/File:San_Sebastian_-_San_Telmo_02.jpg", license: "CC0", license_url: "https://creativecommons.org/publicdomain/zero/1.0/"}
  - name: "Tabakalera"
    text: "Centre for contemporary culture in a former tobacco factory, by the train station."
    lat: 43.31662
    lon: -1.9759
    image: "images/place-tabakalera.jpg"
    alt: "The long sandstone façade of Tabakalera, the former tobacco factory, under a blue sky"
    credit: {text: "Mendizuri", url: "https://commons.wikimedia.org/wiki/File:Tabakalera_fatxada_albotik.jpg", license: "CC BY-SA 4.0", license_url: "https://creativecommons.org/licenses/by-sa/4.0/"}
---
