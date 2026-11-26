---
title: "Student Hub 2027"
# The 2027 programmes arrived in November 2026 (two Word files from the organisers, "…_WEB ORRIRAKO"), so the "Pending" band is gone;
# each programme keeps its own note that it is preliminary (`footnote`).
aliases: ["/youth-camp/"]
weight: 7
layout: youth
highlight: true
menus: main
dates: "10-14 May"
photo:
  image: "images/youth-camp-santurtzi.jpg"
  alt: "A large group of students posing in front of CIFP Santurtzi LHII"
intro: "Two international programmes for students, alongside the conference: a skills competition for VET students and an Erasmus+ Blended Intensive Programme for higher education students."
# The registration form, on another site: one button for both programmes, in the opening and at the end of the page (asked in November 2026).
# While `url` is empty the button is shown but does nothing; set it and the button goes live (opens in a new tab).
registration:
  label: "Register"
  url: ""
topics: ["Skills competition", "International teams", "Democratic culture", "Global citizenship", "Challenge-based learning", "Erasmus+", "Teamwork", "Active citizenship"]
# The two programmes, from the organisers' Word files (November 2026), in their words (only trimmed).
# Each one: id (its anchor), title, subtitle, audience and level (on its ticket), dates, intro (paragraphs), hosts (the places that host it, with a heading),
# days (weekday and number, or `when` for a phase without a date, such as the online sessions; place, title, text, and `extra` for a second activity that day),
# objectives (learning objectives), info (general information, as label and value) and footnote.
tracks:
  - id: "skills-competition"
    title: "International VET Skills Competition"
    subtitle: "Technical Skills, Teamwork and Democratic Culture"
    audience: "VET students"
    level: "EQF 4"
    dates: "10-13 May"
    photo:
      image: "images/youth-camp-awards.jpg"
      alt: "Students with their awards on stage after a skills competition"
    # What it is about, shown visually (asked in November 2026: the five paragraphs of the Word file were too long to read):
    # a short lead, four key figures and three points on how it works. Every fact comes from those paragraphs.
    lead: "EQF Level 4 VET students from different European countries, including the Basque Country, compete in international teams to show their professional and transversal skills."
    figures:
      - { n: "4", text: "competitions in four professional fields, one at each host school" }
      - { n: "3–4", text: "students in each international team" }
      - { n: "2", text: "mornings of competition, 11 and 12 May, in parallel" }
      - { n: "1", text: "winning team in each professional field" }
    points:
      - { icon: "bulb", title: "Technical challenges", text: "Real professional problems, solved together through challenge-based learning inspired by the Basque ETHAZI model." }
      - { icon: "people", title: "Democratic culture", text: "Every challenge puts cooperation, shared decision-making, responsibility and respect for diversity into practice." }
      - { icon: "trend", title: "Assessed on both", text: "Technical and transversal competences, against predefined criteria." }
    hosts:
      title: "Four Basque VET institutions host the competitions"
      items:
        - "CIFP Politécnico Easo Politeknikoa LHII"
        - "IES Xabier Zubiri-Manteo BHI"
        - "CIFP Don Bosco LHII"
        - "CIFP Usurbil LHII"
    days:
      - weekday: "Monday"
        number: "10"
        place: "Donostia-San Sebastián"
        title: "Welcome and International Team Building"
        text: "Joint afternoon welcome session at CIFP Politécnico Easo Politeknikoa LHII, including an introduction to the programme and competition format, intercultural team-building activities and opportunities for participants to get to know each other. The day will conclude with a joint welcome dinner for all participants."
      - weekday: "Tuesday"
        number: "11"
        place: "Four hosting VET institutions"
        title: "Skills Competition – Day 1"
        text: "In the morning, participants will be divided into four groups according to their vocational specialisation. Each group will attend its designated host institution, where students will begin working on their technical challenges in international teams, combining professional skills, problem-solving and collaborative decision-making."
      - weekday: "Wednesday"
        number: "12"
        place: "Four hosting VET institutions"
        title: "Skills Competition – Day 2"
        text: "Students will return to the same host institution in the morning to continue and complete their technical challenges. The four competitions will conclude with the assessment of the teams' technical achievements and transversal competences."
        extra:
          place: "Donostia-San Sebastián"
          title: "Joint Cultural Activity"
          text: "The programme will also include a joint cultural activity, bringing together participants from all four competitions and providing opportunities for intercultural exchange, social interaction and discovery of the local culture."
      - weekday: "Thursday"
        number: "13"
        place: "Tabakalera, Donostia-San Sebastián"
        title: "Reflection, Evaluation and Awards Ceremony"
        text: "All participants will come together for a morning reflection and evaluation session, sharing their experiences and reflecting on their learning and the value of working in international teams. The programme will conclude with the Skills Competition Awards Ceremony, which will take place during the international conference's Dissemination Event at Tabakalera, recognising the achievements of the winning teams in each professional field."
    objectives:
      - "Develop and demonstrate professional and technical competences."
      - "Apply knowledge and skills to practical professional challenges."
      - "Strengthen intercultural communication and international teamwork."
      - "Develop collaborative problem-solving and shared decision-making skills."
      - "Integrate democratic values into professional practice."
      - "Promote mutual respect, inclusion and responsibility."
      - "Reflect on the role of technical and transversal competences in professional environments."
    info:
      - { label: "Programme", value: "International VET Skills Competition" }
      - { label: "Organiser", value: "Vice-Ministry of Vocational Education and Training of the Basque Government" }
      - { label: "Hosting institutions", value: "CIFP Politécnico Easo Politeknikoa LHII, IES Xabier Zubiri-Manteo BHI, CIFP Don Bosco LHII and CIFP Usurbil LHII" }
      - { label: "Participants", value: "VET students from the Basque Country and other European countries (EQF Level 4)" }
      - { label: "Competition format", value: "Four parallel competitions in international teams of 3–4 students" }
      - { label: "Competition areas", value: "Four vocational specialisations, each hosted by a different VET institution" }
      - { label: "Dates", value: "10–13 May 2027" }
      - { label: "Working language", value: "English" }
    footnote: "The programme is subject to change."

  - id: "global-citizenship"
    title: "Global Citizenship in Action"
    subtitle: "Erasmus+ Blended Intensive Programme (BIP)"
    audience: "Higher education students"
    level: "Erasmus+ BIP"
    dates: "10-14 May"
    # What it is about, shown visually as for the Skills Competition (asked in November 2026): a short lead, key figures and three points.
    # Every fact comes from the four paragraphs of the organisers' Word file.
    lead: "Higher education students from different European countries explore democratic culture and global citizenship in international teams, through practical, participatory and collaborative learning."
    figures:
      - { n: "5", text: "days of physical mobility in the Basque Country" }
      - { n: "2", text: "virtual sessions, before and after the week" }
      - { n: "3", text: "ECTS credits at least, as academic recognition" }
    points:
      - { icon: "globe", title: "An Erasmus+ BIP", text: "A short, intensive programme that combines physical mobility with collaborative virtual learning." }
      - { icon: "school", title: "Who runs it", text: "Coordinated by Ikaslan Mobility and hosted by Easo Politeknikoa, within the international conference." }
      - { icon: "people", title: "Three phases", text: "Understand democratic culture online, experience it in the Basque Country, then apply it in a follow-up online session." }
    days:
      - when: "Before"
        place: "Online"
        label: "Preparatory Virtual Session"
        title: "Understanding Democratic Culture and Global Citizenship"
        text: "With the contribution of UNESCO-UNEVOC, students will explore the values, principles and competences that underpin democratic culture. The session will introduce a shared framework to guide their learning and reflection throughout the programme. Participants will get to know each other and engage in an initial collaborative activity in international teams, preparing for the learning experiences and common challenges they will address during the physical mobility."
      - weekday: "Monday"
        number: "10"
        place: "Donostia-San Sebastián"
        title: "Education, Democratic Culture and Active Citizenship"
        text: "Welcome session, intercultural team-building activities and a practical workshop at Easo Politeknikoa, exploring how democratic values, inclusion and active participation can be promoted within educational communities. The day will also include a collaborative activity with a local NGO or civil society organisation, allowing students to explore practical examples of civic engagement, community participation and active citizenship."
      - weekday: "Tuesday"
        number: "11"
        place: "Bilbao"
        title: "Cultural Diversity and Sustainability"
        text: "A practical learning experience using gastronomy as a means of exploring intercultural dialogue, cultural identity, sustainability, cooperation and respect for diversity."
      - weekday: "Wednesday"
        number: "12"
        place: "Donostia-San Sebastián"
        title: "Global Challenges, Local Solutions"
        text: "Participation in the UNESCO-UNEVOC international conference. In the morning, students will attend the plenary session, gaining insights into global challenges and international perspectives on Technical and Vocational Education and Training (TVET). In the afternoon, they will take part in thematic workshops, providing opportunities for dialogue, active participation and the exchange of ideas on different topics addressed by the conference."
      - weekday: "Thursday"
        number: "13"
        place: "Arrasate-Mondragón (to be confirmed)"
        title: "Democracy in the Workplace"
        text: "Exploring the cooperative business model as a practical example of democratic governance, active participation, shared decision-making and social responsibility in the professional environment."
      - weekday: "Friday"
        number: "14"
        place: "Donostia-San Sebastián"
        title: "From Local Experiences to Global Learning"
        text: "A collaborative reflection session bringing together the learning experiences of the week and connecting them with the framework introduced during the preparatory virtual session. Working in international teams, students will share their conclusions and develop practical proposals to promote a more democratic, inclusive and participatory culture within their own educational communities."
      - when: "After"
        place: "Online"
        label: "Follow-up Virtual Session"
        title: "From Learning to Action"
        text: "Following the physical mobility, students will reconnect online and work in their international teams to further develop and share the proposals initiated during the programme. Participants will reflect on their learning outcomes, exchange perspectives and explore how the knowledge and competences acquired can be transferred to their own educational communities and local contexts. The session will also contribute to the overall evaluation of the programme and the consolidation of the international connections established throughout the learning experience."
    objectives:
      - "Understand the principles, values and competences associated with democratic culture."
      - "Develop intercultural communication and collaborative working skills in both virtual and face-to-face environments."
      - "Foster critical thinking, active citizenship and civic participation."
      - "Explore practical examples of democratic values in educational institutions, civil society and professional environments."
      - "Reflect on global challenges through local experiences."
      - "Develop collaborative proposals to promote democratic culture within educational communities."
      - "Transfer the knowledge and competences acquired to participants' own educational and local contexts."
    info:
      - { label: "Programme", value: "Erasmus+ Blended Intensive Programme (BIP)" }
      - { label: "Coordination", value: "Ikaslan Mobility" }
      - { label: "Hosting institution", value: "Easo Politeknikoa" }
      - { label: "Participants", value: "International higher education students" }
      - { label: "Physical mobility", value: "10–14 May 2027" }
      - { label: "Virtual component", value: "Collaborative preparatory and follow-up virtual sessions, before and after the physical mobility" }
      - { label: "Academic recognition", value: "Minimum of 3 ECTS credits" }
      - { label: "Working language", value: "English" }
    footnote: "Preliminary programme subject to adjustments."
---
