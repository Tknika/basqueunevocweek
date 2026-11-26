---
title: "13 May"
# A frame of the round tables with the views of Bilbao behind, from the organisers' video (November 2026; _originals/dissemination-day.mp4)
header_image: "images/round-tables-bilbao.jpg"
weight: 3
weekday: "Thursday"
headline: "Activities at other venues"
home_headline: ""  # nothing under the day on the home (asked in November 2026)
parts: ["Morning", "Afternoon"]
layout: day
menus:
  main:
    parent: programme
morning:
  intro: "Two options to choose from."
  options:
    - title: "Visit to Companies"
      stack: true  # one company per row, the box as tall as the other option (layouts/day.html)
      # The companies to visit, from the organisers (November 2026), in place of the 2026 list: name, a link to its website (`url`), its logo (`logo`, from its own website, November 2026) and where it is (`location`, from the address on its own website), made monochrome in UNEVOC azure with no background (the darkest colour solid, the other paler), as the schools on 11 May
      centres:
        - name: "Viralgen (Viralgen Vector Core, S.L.)"
          url: "https://viralgen.com/"
          logo: "images/logo-company-viralgen.png"
          location: "Gipuzkoa Science and Technology Park, Donostia · San Sebastian"
        - name: "Irizar e-mobility"
          url: "https://irizar-emobility.com/eu/"
          logo: "images/logo-company-irizar.svg"
          location: "Aduna, Gipuzkoa"
        - name: "Createch Medical"
          url: "https://www.createchmedical.com/es/"
          logo: "images/logo-company-createch.png"
          location: "Mendaro, Gipuzkoa"
        - name: "Danobat Group"
          url: "https://www.danobat.com/en"
          logo: "images/logo-company-danobat.svg"
          location: "Elgoibar, Gipuzkoa"
    - title: "Project Dissemination Day"
      location: "Tabakalera"  # where it takes place, shown under the title
      location_url: "https://www.google.com/maps/search/?api=1&query=Tabakalera%2C%20Donostia"  # its place on Google Maps
      # An ambient loop of the round tables (from the same video as the header), with a frame of it as its poster
      video: "videos/dissemination-day.mp4"
      image: "images/dissemination-day-poster.jpg"
      alt: "Participants talking at round tables in a large glass hall"
      sessions:
        - time: "9.00-9.30"
          break: "registration"
          title: "Registration"
        - time: "9.30-9.50"
          title: "Welcome"
          people: "Jon Labaka, Basque Government"
        - time: "9.50-11.00"
          title: "Round tables"
        - time: "11.00-11.30"
          break: "coffee"
          title: "Networking coffee"
        - time: "11.30-13.00"
          title: "Round tables"
        - time: "13.00-13.15"
          title: "Award ceremony: Student Hub Skills Competition"
        - time: "13.15-13.30"
          title: "Closing"
          people: "Jon Labaka, Basque Government"
# The lunch band after the morning: `lunch` is its time, `lunch_title` its name (Lunch when empty).
lunch: "13.30-14.30"
lunch_title: "Networking lunch"
afternoon:
  eyebrow: "Optional"
  title: "Guided visit and dinner at a traditional cider house"
  # Photo: Clay Banks on Unsplash, resized from clay-banks-fXMeR5JSJ3E-unsplash.jpg
  images:
    - image: "images/cider-house.jpg"
      alt: "A heap of red and green apples for cider"
---
