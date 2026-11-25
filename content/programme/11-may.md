---
title: "11 May"
header_image: "images/tknika-tk-light.jpg"
weight: 1
weekday: "Tuesday"
headline: "Activities at other venues"
parts: ["Morning", "Afternoon"]
layout: day
menus:
  main:
    parent: programme
morning:
  pending: true  # shows a "Pending · Not final yet" tag by the Morning heading and on its button in the programme (_partials/pending.html): remove it when the 2027 morning arrives
  time: "9:00-14:30"
  intro: "Two options to choose from."
  options:
    # The six schools and their texts come from the organisers (November 2026).
    # name, focus (its line under the name), text; url and image are optional: each centre's photo is small, cut as a cube, next to its name (a sky-tinted cube while it has none). credit (text, url, license, license_url): for a photo under a free licence, listed at the foot of the box.
    - title: "Networking in schools"
      centres:
        - name: "CIFP Tolosaldea LHII"
          focus: "Centre of Excellence in Mechatronics"
          text: "Technology, industry, mechanical manufacturing, electrical engineering, IT and sports activities. Discover a wide range of vocational training programmes linked to the industrial, technological and service sectors."
          url: "https://www.tolosaldea.hezkuntza.net"
          image: "images/tolosaldea.jpg"
          alt: "Aerial view of the CIFP Tolosaldea LHII campus"
        - name: "CIFP Usurbil LHII"
          focus: "Centre of Excellence in Energy"
          text: "Energy, energy efficiency, building services engineering, maintenance and sustainability. Discover a wide range of vocational training programmes focused on energy technologies, energy efficiency, the energy transition and smart installations."
          url: "https://www.lhusurbil.eus"
          image: "images/zubieta.jpg"
          alt: "Aerial view of the CIFP Usurbil LHII campus in Zubieta"
        - name: "CIFP Easo LHII"
          focus: "Centre of Excellence in Social Economy and Care Services"
          image: "images/easo.jpg"
          alt: "The red brick front of Easo Politeknikoa, with students by its entrance steps"
          text: "Healthcare, physical activity, electrical engineering, mechanical manufacturing, woodworking and sociocultural services. Discover a wide range of vocational training programmes linked to the industrial, healthcare and social sectors."
        - name: "CIFP Eagi LHII"
          focus: "Building and Civil Engineering"
          text: "Construction, building renovation, civil engineering, construction site management and digital technologies such as BIM (Building Information Modelling). Discover a wide range of vocational training programmes focused on construction, building rehabilitation and innovative technologies applied to the sector."
        - name: "CIFP Don Bosco LHII"
          focus: "Centre of Excellence in Chemistry"
          text: "Industry, mechanical manufacturing, chemistry, electrical engineering, maintenance and automotive technology. Discover a wide range of vocational training programmes linked to industrial processes, advanced technologies and manufacturing sectors."
        - name: "CIFP Fraisoro LHII"
          focus: "Agriculture and Environmental Studies"
          # From Wikimedia Commons, "Fraisoro 1 - 94-074.jpg" (April 1994), resized; original in _originals/fraisoro.jpg
          image: "images/fraisoro.jpg"
          alt: "The Fraisoro school building with red roofs on a green hillside, with beehives in the field below"
          credit:
            text: "Aiurri"
            url: "https://commons.wikimedia.org/wiki/File:Fraisoro_1_-_94-074.jpg"
            license: "CC BY-SA 4.0"
            license_url: "https://creativecommons.org/licenses/by-sa/4.0/"
          text: "Agriculture, livestock farming, forestry management, gardening and landscaping, the natural environment and the food industry. Discover a wide range of vocational training programmes linked to nature, animal care, sustainability and rural development."
    - title: "Visit to Tknika projects"
      image: "images/tknika-auditorium-tv.jpg"
      # Show the lower part of the photo, so the screen is not cut off
      position: "object-[50%_80%]"
      alt: "Tknika auditorium seen from the front, wooden rows of desks under a lattice of wooden slats"
      groups:
        - title: "Projects"
          items:
            - "Smart Home"
            - "Immersive Spaces"
            - "Industry 5.0"
            - "BIO Laboratories"
# From the draft calendar (Draft_UnescoAnniversary_conference_): "Discover San Sebastian", no more detail yet
afternoon:
  eyebrow: "Discover"
  title: "San Sebastian"
  images:
    - image: "images/donostia-bay.jpg"
      alt: "La Concha bay in Donostia · San Sebastian seen from above, with Santa Clara island"
    - image: "images/donostia-old-town.jpg"
      alt: "A narrow street of the old town of Donostia · San Sebastian"
    - image: "images/donostia-port.jpg"
      alt: "A small boat crossing the fishing port of Donostia · San Sebastian"
    # Photo: Pierre-Antoine Franck on Unsplash, resized from pierre-antoine-franck-W2pBsQaT6FQ-unsplash.jpg (original in _originals/)
    - image: "images/running.jpg"
      alt: "The legs of runners on the street, blurred by their speed"
---
