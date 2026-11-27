---
title: "12 May"
header_image: "images/kursaal-facade-1200.jpg"
weight: 2
weekday: "Wednesday"
headline: "Conference at the Kursaal"
parts: ["Morning", "Afternoon"]
image: "images/kursaal.jpg"
layout: day
menus:
  main:
    parent: programme
morning:
  pending: true  # shows a "Pending · Not final yet" tag by the Morning heading and on its button in the programme (_partials/pending.html): remove it when the 2027 morning arrives
  time: "8.30-13.15"
  conference:
    title: "Conference: “Global Challenges, Local Solutions — Connecting TVET Ecosystems Worldwide”"
    venue: "Kursaal, Donostia · San Sebastian"
    # The Kursaal auditorium full, seen from the stage (from the organisers, November 2026; original in _originals/kursaal-hall-audience.jpeg), its orange light toned down with ffmpeg (colorbalance towards blue, saturation 0.7)
    image: "images/kursaal-hall-audience.jpg"
    alt: "The Kursaal auditorium full of participants, seen from the stage"
    # The 2027 programme is unknown: only registration, the coffee break, the closing and lunch are sure.
    # `tba: true` shows a slot as "To be announced" (dashed, with an outlined tag). The 2026 sessions are in archive/12-may-morning-2026.md (see HIDDEN.md).
    sessions:
      - time: "8.30-9.00"
        break: "registration"
        title: "Registration"
      - time: "9.00-11.05"
        tba: true
        title: "Conference sessions"
      - time: "11.05-11.45"
        break: "coffee"
        title: "Coffee break"
      - time: "11.45-12.45"
        tba: true
        title: "Conference sessions"
      - time: "12.45-13.15"
        title: "Closing"
        people: "Jon Labaka, Basque Government"
lunch: "13.15-14.30"
afternoon_time: "14.30-16.30"
# Call for workshops (draft calendar: "Call for all participants to submit and present your workshop"), shown by the call-for-workshops shortcode.
# url: the application form; leave it empty until it exists (the button shows but does nothing).
# The texts draw on the concept note; no deadlines or formats are given yet.
call:
  eyebrow: "Call for workshops"
  title: "Bring your solution to the congress"
  text: "Has your school, company or organisation found a way to tackle a challenge that TVET systems share worldwide? Anyone can **propose a workshop** for the afternoon of 12 May and share it with peers from other countries."
  duration: "Workshops last one hour"
  # Photo: Unsplash (an open hand held out), resized from a-c-5u4L-E4eQWw-unsplash.jpg
  image: "images/workshop-call-hand.jpg"
  alt: "An open hand held out, in black and white"
  button: "Propose a workshop"
  url: ""
  why_title: "Why run a workshop"
  why:
    - title: "Share what works"
      icon: "pin"
      text: "Show a local solution that could inform or inspire others facing the same challenge in a different shape."
    - title: "Learn from other contexts"
      icon: "globe"
      text: "Test your choices against what others are learning in their own ecosystems."
    - title: "Find partners"
      icon: "people"
      text: "Open the door to future collaboration, joint projects and knowledge exchange."
  topics_title: "Start from one of the challenges we share:"
---

{{< call-for-workshops >}}
