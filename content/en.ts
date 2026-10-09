/**
 * All English text for the website lives in this one file.
 *
 * To change wording on the site, edit the strings here. You do not need to
 * touch the page files.
 *
 * Draft copy rule: every fact that was invented for this draft ends with the
 * placeholder marker (see `scripts/check-placeholders.mjs`) so it is obvious on
 * the page. Run `npm run check-placeholders` to list everything that still needs
 * real information.
 *
 * Other languages live next to this file (`ru.ts`, ...). Each one has the same
 * shape as this file, so TypeScript tells you if a string is missing. To add a
 * language, see "Adding a language" in the README.
 */

export const phone = {
  display: "(916) 371-6011",
  href: "tel:+19163716011",
};

export const en = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "Skip to main content",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "Phone",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "Email",
    addressLabel: "Address",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "Hours",
    hours: "Facility hours: Monday to Friday, 8:00 AM to 4:30 PM",
    programHours: "Service hours: Monday to Friday, 8:00 AM to 2:00 PM",
    hoursNote: "Closed Saturday and Sunday. Also closed on Thanksgiving, Christmas Day, New Year's Day, and the Fourth of July.",
    mapTitle: "Map showing the Golden Days Adult Day Health Care location",
    directionsLinkLabel: "Get directions",
    languagesLabel: "Languages",
    languagesLine: "We speak English, Russian, and Ukrainian, and a Chinese interpreter is available.",
  },

  nav: {
    menuLabel: "Menu",
    closeLabel: "Close",
    ariaLabel: "Main navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/transportation", label: "Transportation" },
      { href: "/qualify", label: "Do I qualify?" },
      { href: "/enrollment", label: "Enrollment" },
      { href: "/contact", label: "Contact" },
    ],
  },

  buttons: {
    call: "Call us",
    callWithNumber: `Call ${phone.display}`,
    scheduleTour: "Schedule a tour",
    doIQualify: "Do I qualify?",
    learnMore: "Learn more",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "An adult day health care center in West Sacramento, California. Serving local families since 2003.",
    contactHeading: "Contact us",
    hoursHeading: "Hours",
    copyright: "Golden Days Adult Day Health Care. All rights reserved.",
    privacyLabel: "Privacy",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Adult Day Health Care in West Sacramento",
      description:
        "Golden Days Adult Day Health Care is a day program for adults in West Sacramento, California. Call us or schedule a tour.",
    },
    hero: {
      heading: "Daytime care for adults in West Sacramento",
      intro:
        "Golden Days is a day program for adults, and for the families who care for them.",
      photo: {
        kind: "building" as const,
        label: "Photo placeholder - building exterior",
        alt: "The front of the Golden Days Adult Day Health Care Center, with its sunburst sign above the open entrance and a Welcome to Golden Days sign in the window.",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "Who we serve",
      paragraphs: [
        "Golden Days welcomes adults who live at home and need support, company, or supervision during the day.",
        "Many of the people who come to us live with a family member who works, or who simply needs a break during the week.",
        "If you are not sure whether Golden Days is the right fit for your loved one, call us. We are happy to talk it through, with no pressure.",
      ],
    },
    services: {
      heading: "What we offer",
      intro: "A day at Golden Days can include any of the following.",
      linkLabel: "See all services",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Nursing Care",
          text: "Our nursing staff checks in on health needs during the day.",
        },
        {
          icon: "rehabilitation" as const,
          title: "Rehabilitation",
          text: "Therapy sessions to help with strength, balance, and daily movement.",
        },
        {
          icon: "nutrition" as const,
          title: "Nutrition",
          text: "Breakfast and lunch each day, made by a cook who plans for each person's needs.",
        },
        {
          icon: "socialWork" as const,
          title: "Social Work",
          text: "Help understanding benefits, paperwork, and community resources.",
        },
        {
          icon: "recreation" as const,
          title: "Recreation",
          text: "Music, games, crafts, exercise, field trips, and time with other people.",
        },
        {
          icon: "transportation" as const,
          title: "Transportation",
          text: "Rides to and from the center on program days.",
        },
      ],
    },
    transportation: {
      heading: "Getting here is part of the care",
      paragraphs: [
        "Golden Days offers rides to and from the center for people who attend the program, including riders who use a wheelchair or a walker.",
        "We work out a pickup window with your family, and we call if a schedule needs to change.",
      ],
      linkLabel: "Read about transportation",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Photo placeholder - Golden Days bus",
        alt: "A white Golden Days bus parked outside the center, with its passenger door open.",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "How enrollment works",
      intro: "Four steps, and we help with each one.",
      steps: [
        {
          title: "Call or send a message",
          text: "Tell us a little about your loved one and what the days look like now.",
        },
        {
          title: "Visit the center",
          text: "Come see the facility, meet the staff, and ask anything you want.",
        },
        {
          title: "Complete an assessment",
          text: "Our team reviews health and daily needs to see whether the program fits.",
        },
        {
          title: "Start attending",
          text: "We agree on days, arrange rides, and welcome your loved one in.",
        },
      ],
      linkLabel: "See the full enrollment guide",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "What about cost?",
      text: "We accept insurance, and Medi-Cal together with an insurance plan. Private pay is also an option. Call us and we will explain what applies to your family.",
    },
    trust: {
      text: "Serving West Sacramento families since 2003. Family owned since 2007.",
      licenseText: "Licensed by the California Department of Public Health. License number 070000633.",
    },
    contact: {
      heading: "Talk with us",
      intro:
        "Send a message and we will get back to you, or call during facility hours.",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "About Golden Days",
      description:
        "Golden Days Adult Day Health Care has served West Sacramento families since 2003, with the same owners since 2007.",
    },
    heading: "About Golden Days",
    lead: "Golden Days Adult Day Health Care has been part of West Sacramento since 2003. The same owners have run the center since 2007.",
    photo: {
      kind: "interior" as const,
      label: "Photo placeholder - staff group photo",
      alt: "Placeholder image standing in for a group photo of the Golden Days staff",
    },
    story: {
      heading: "Our story",
      paragraphs: [
        "Golden Days opened in West Sacramento in 2003 as a place where adults could spend the day with care close at hand. The same owners have run the center since 2007.",
        "Over those years we have come to know many local families. Some people come to us a few days a week for years, and their families become part of the center too.",
        "Around 120 people spend the day with us, and staff still take the time to learn names, routines, and what makes each person comfortable.",
      ],
    },
    values: {
      heading: "What matters to us",
      items: [
        {
          title: "Respect first",
          text: "Everyone who comes here is an adult, and we treat them that way.",
        },
        {
          title: "Plain answers",
          text: "We explain costs, paperwork, and schedules in plain language.",
        },
        {
          title: "Steady routines",
          text: "Familiar faces and a predictable day help people settle in.",
        },
        {
          title: "Family in the loop",
          text: "We call when something changes, and we answer the phone.",
        },
      ],
    },
    team: {
      heading: "Our team",
      paragraphs: [
        "Our staff includes nurses, therapy staff, a social worker, activity leaders, drivers, and kitchen staff.",
        "Many of them have worked at Golden Days for years and speak more than one language.",
      ],
    },
    center: {
      heading: "The center",
      paragraphs: [
        "The building has an activity room, a dining room, quiet rooms for rest, a therapy area, and accessible restrooms.",
        "Parking is available in front, and the entrance is at ground level with no stairs.",
      ],
      photo: {
        kind: "interior" as const,
        label: "Photo placeholder - dining room",
        alt: "The Golden Days dining room, with round tables set for lunch and fresh flowers on the tables.",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    licensing: {
      heading: "Licensed in California",
      text: "Golden Days is licensed by the California Department of Public Health as an Adult Day Health Center, and holds a City of West Sacramento business license.",
      items: [
        "State license: California Department of Public Health, Adult Day Health Center, license number 070000633",
        "City of West Sacramento business license, number 12046",
      ],
    },
    cta: {
      heading: "Come see it for yourself",
      text: "A visit takes about half an hour. Call us and we will find a time.",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Services",
      description:
        "Nursing care, rehabilitation, nutrition, social work, recreation, and transportation at Golden Days in West Sacramento.",
    },
    heading: "Services",
    lead: "A day at Golden Days is built around six kinds of support. Families choose the days that work for them.",
    items: [
      {
        icon: "nursing" as const,
        title: "Nursing Care",
        summary: "Health checks and medications from our nurses during the day.",
        details: [
          "Nurses check vital signs and blood glucose (blood sugar).",
          "Nurses give scheduled medications during program hours.",
          "If health changes, we call the family and the doctor's office.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Rehabilitation",
        summary: "Exercises and therapy that support strength, balance, and movement.",
        details: [
          "Therapy staff work on walking, balance, and everyday movement, with sessions planned around what each person is working toward.",
          "Group exercise happens most mornings for people who want to join.",
          "Licensed therapists provide massage therapy and paraffin wax treatments, included for participants at no extra charge.",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Nutrition",
        summary: "Breakfast and lunch each program day, made by a cook who plans for each person's needs.",
        details: [
          "Breakfast and lunch are served every program day, and the meals rotate.",
          "A specialist cook plans meals around each person's needs.",
          "Tell us about food needs, such as allergies, trouble swallowing (we can chop food), or a vegetarian diet.",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Social Work",
        summary: "Help with benefits, paperwork, and finding services outside the center.",
        details: [
          "Our social worker helps families understand forms and coverage questions.",
          "We can point you toward local services such as home help or meal programs.",
          "Family meetings are available when a plan needs to change.",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Recreation",
        summary: "Music, games, crafts, gentle exercise, and company through the day.",
        details: [
          "Daily activities people can join or skip, such as music, games, crafts, and exercise.",
          "Field trips happen up to three times a week on average, at no extra cost. People with mobility needs can come along.",
          "Holidays and birthdays are celebrated together.",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Transportation",
        summary: "Rides to and from the center on program days.",
        details: [
          "Rides are available within our service area.",
          "Our vehicles can carry riders who use a wheelchair or a walker.",
          "The bus drives as close to the door as possible. At home, a caregiver helps the participant onto the bus. At the center, drivers help participants off the bus.",
        ],
      },
    ],
    dayHeading: "What a day looks like",
    daySchedule: [
      { time: "8:30 AM", text: "Greeting" },
      { time: "9:00 AM", text: "Rehabilitation Exercise" },
      { time: "9:30 AM", text: "Breakfast / Current Events on TV" },
      { time: "10:00 AM", text: "Health Education / Individual Physical Therapy (Mon, Tue, Fri)" },
      { time: "10:30 AM", text: "Rehabilitation Exercise / Walking Club / Field Trip" },
      { time: "11:00 AM", text: "Rehabilitation Exercises / Group Therapy" },
      { time: "11:30 AM", text: "Rehabilitation Exercise / Memory Group / Activity Game / Spiritual Group" },
      { time: "12:00 PM", text: "Guests and Speakers / Individual Physical Therapy (Mon, Tue, Fri)" },
      { time: "12:30 PM", text: "Individual Occupational Therapy (Wed, Fri)" },
      { time: "1:00 PM", text: "Lunch" },
      { time: "1:30 PM", text: "Movie / Discussion" },
    ],
    rotatingHeading: "Rotating activities",
    rotatingIntro: "Activities rotate through the week. Bingo happens several times a week, and we go on outings to local stores, markets, and parks. Call us for this month's calendar, which is available in English and Russian.",
    rotatingActivities: [
      "English Lesson",
      "Bingo",
      "Outings to stores, markets, and parks",
      "Birthday celebrations",
    ],
    cta: {
      heading: "Not sure which parts your loved one needs?",
      text: "Call us. We will ask a few questions and give you a straight answer.",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Transportation",
      description:
        "Rides to Golden Days in West Sacramento, including wheelchair accessible vehicles.",
    },
    heading: "Transportation",
    lead: "Getting to the center should not be the hard part. Golden Days offers rides to and from the program for people who need them.",
    photo: {
      kind: "bus" as const,
      label: "Photo placeholder - inside the Golden Days bus",
      alt: "Inside a Golden Days bus: rows of blue seats on both sides of a wide aisle, with wheelchair accessibility symbols on the wall.",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "Service area",
        paragraphs: [
          "We provide rides in West Sacramento and nearby neighborhoods.",
          "Some addresses outside that area may still work depending on the day and the route. If your area is not listed, call us with your address and we will check.",
        ],
        list: {
          label: "Areas we usually serve:",
          items: [
            "West Sacramento",
            "Bryte and Broderick",
            "Southport",
            "Parts of Sacramento near the river",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "Pickup and drop-off",
        paragraphs: [
          "Each rider gets a pickup window rather than an exact minute, because traffic and other riders change the route.",
          "We drive as close to the door as possible. At pickup, the participant's caregiver helps them onto the bus. Drivers do not help participants on, and they cannot lift anyone onto the bus.",
          "At the center, drivers can help participants off the bus, and our caregivers here are ready to meet them. Our caregivers do not go to people's homes.",
          "If the bus is running late, we call the family.",
        ],
      },
      {
        heading: "Wheelchair and mobility access",
        paragraphs: [
          "Our vehicles can carry riders who use a wheelchair, a walker, or a cane.",
          "Wheelchairs are secured before the vehicle moves, and seat belts are used for every rider.",
          "Our buses operate under a permit from the California Public Utilities Commission.",
          "Tell us about oxygen, transfers, or anything else a driver should know, and we will plan for it.",
        ],
      },
      {
        heading: "How families arrange or change a ride",
        paragraphs: [
          "Rides are set up when your loved one enrolls, and the schedule stays the same week to week.",
          "To change a pickup address, add a day, or cancel a ride, call the office.",
          "For a same-day cancellation, call as early as you can so the driver can adjust the route.",
        ],
        list: {
          label: "To change a ride, have this ready:",
          items: [
            "The rider's name",
            "The date or dates that are changing",
            "The new address, if the pickup location is moving",
            "A phone number where we can reach you that day",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Photo placeholder - wheelchair lift on a Golden Days bus",
      alt: "The wheelchair lift at the back of a Golden Days bus, with the platform raised inside the open rear doors.",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "Questions about a pickup?",
      text: "Call the office and ask for the transportation schedule.",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Enrollment",
      description:
        "Who qualifies for Golden Days, who pays, what to bring, and the steps to enroll in West Sacramento.",
    },
    heading: "Enrollment",
    lead: "Enrolling takes a few conversations, not a mountain of paperwork. Here is how it goes.",
    qualifies: {
      heading: "Who qualifies",
      intro: "Golden Days is generally a fit for an adult who:",
      items: [
        "Is an adult living at home or with family",
        "Needs help, supervision, or company during the day",
        "Has a health condition that benefits from regular check-ins",
        "Can take part in a group day program",
      ],
      note: "Eligibility is decided after an assessment, not over the phone. Call us and we will tell you what the next step looks like.",
    },
    pays: {
      heading: "Who pays",
      intro: "Families usually pay in one of these ways:",
      items: [
        {
          title: "Medi-Cal",
          text: "We accept Medi-Cal together with an insurance plan, but not Medi-Cal on its own. We can explain what the process looks like.",
        },
        {
          title: "Managed care plans",
          text: "Some health plans cover day programs. We will check what your plan says.",
        },
        {
          title: "Private pay",
          text: "Families can also pay directly.",
        },
      ],
      note: "Nothing on this page is a promise of coverage or a price. Call us for current information about your situation.",
    },
    bring: {
      heading: "What to bring",
      intro: "Bring what you have. We will help with the rest.",
      items: [
        "Photo identification",
        "Insurance card (you can bring this on its own)",
        "Medi-Cal card (bring this together with your insurance card, not by itself)",
        "Your doctor's name and phone number",
        "Emergency contact names and numbers",
        "Any recent medical paperwork you already have",
      ],
    },
    steps: {
      heading: "The steps",
      items: [
        {
          title: "Call or send a message",
          text: "Tell us about your loved one, the days you are hoping for, and any concerns. This call takes about ten minutes.",
        },
        {
          title: "Tour the center",
          text: "Visit during program hours, preferably before 1:30 PM, so you can see a normal day. Bring your loved one if that is comfortable.",
        },
        {
          title: "Assessment",
          text: "Our team reviews health history, daily needs, and goals to confirm the program is a good fit.",
        },
        {
          title: "Paperwork and coverage",
          text: "We complete enrollment forms together and work through the coverage questions.",
        },
        {
          title: "First day",
          text: "We set the schedule, arrange rides, and introduce your loved one to staff and other participants.",
        },
      ],
    },
    faq: {
      heading: "Common questions",
      items: [
        {
          question: "How many days a week can my loved one come?",
          answer: "Schedules range from one day to five days a week. We will set the schedule together with you.",
        },
        {
          question: "How long does enrollment take?",
          answer: "It depends on paperwork and coverage. We will give you a realistic timeline on the first call.",
        },
        {
          question: "Can we try it first?",
          answer: "Start with a tour. Ask us about a trial day when you visit.",
        },
        {
          question: "What if my loved one does not want to go?",
          answer: "That is common. A tour and a short first week often help. We have done this many times.",
        },
      ],
    },
    qualifyPrompt: {
      heading: "Not sure if this is a fit?",
      text: "Answer five short questions and we will point you to the next step. It takes about a minute.",
    },
    cta: {
      heading: "Ready to start?",
      text: "Call us or schedule a tour. There is no cost to ask questions.",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "Do I qualify?",
      description:
        "Answer five short questions to see whether Golden Days in West Sacramento may be a good fit.",
    },
    intro: {
      heading: "See if Golden Days may be right for you or your loved one.",
      reassurance:
        "This takes about a minute. It is not an application and not a final decision. We do not ask for your name or any health information, and your answers stay on this page. We do not collect or store them.",
      startLabel: "Start the questions",
    },
    progressLabel: "Question {current} of {total}",
    progressBarLabel: "How far along you are",
    backLabel: "Go back",
    helpLabel: "What does this mean?",
    answers: {
      yes: "Yes",
      no: "No",
      notSure: "Not sure",
    },
    answerGroupLabel: "Choose one answer",
    questions: [
      {
        text: "Is the person 18 or older?",
        help: "Golden Days is a program for adults. If you are asking for a parent or a spouse, answer for that person.",
      },
      {
        text: "Do they live in West Sacramento or a nearby area we serve?",
        help: "We serve West Sacramento and nearby areas, including Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova, and Antelope. If you are not sure, choose Not sure and we will check.",
      },
      {
        text: "Can they take part in group activities during the day, with or without a walker or wheelchair?",
        help: "Group activities include exercise, music, games, and meals together. People take part in their own way, and some also need medical attention during the day. If you are not sure they could manage a group setting, choose Not sure.",
      },
      {
        text: "Do they have health insurance from an insurance provider, with or without Medi-Cal?",
        help: "We accept insurance, and Medi-Cal together with insurance. Medi-Cal on its own is not enough. If you are not sure, choose Not sure.",
      },
      {
        text: "Do they have a doctor who can share recent medical paperwork?",
        help: "We ask for recent medical paperwork from their doctor, along with their insurance information. If you are not sure, choose Not sure.",
      },
    ],
    results: {
      announcement: "Here are your results.",
      goodFit: {
        heading: "Good news. You are a good fit for Golden Days.",
        text: "Call us or schedule a tour, and we will help with the next steps.",
      },
      notFit: {
        heading: "Golden Days may not be the right fit.",
        text: "Thank you for checking. If you would like to talk it over, please call us and we will be glad to help.",
      },
      unsure: {
        heading: "We are not sure yet, and that is okay.",
        text: "Many families are unsure at the start. Call us and we will go through your situation together. Some answers can change with the right paperwork or coverage. If every answer is yes, you are a good fit.",
      },
      enrollmentLinkLabel: "Read how enrollment works",
      startOverLabel: "Start over",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "Contact",
      description:
        "Call Golden Days Adult Day Health Care in West Sacramento, send a message, or schedule a tour.",
    },
    heading: "Contact us",
    lead: "Call us during facility hours, or send a message and we will get back to you.",
    detailsHeading: "Visit or call",
    directionsHeading: "Find us",
    directionsText:
      "The entrance is at ground level and parking is in front of the building.",
    photo: {
      kind: "building" as const,
      label: "Photo placeholder - building entrance",
      alt: "The entrance to Golden Days at 1215 Merkley Ave, with the sign above the door and cones set out by the walkway.",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "Schedule a tour",
    tourText:
      "Tours happen during program hours, preferably before 1:30 PM, so you can see a normal day. Call us or use the form and say that you would like a tour.",
  },

  form: {
    heading: "Send us a message",
    responseTime: "A member of our team will call you within one business day.",
    callAlternativeLead: "Prefer to talk?",
    callAlternativeLinkPrefix: "Call us at",
    medicalNote: "Please do not include medical information in this form.",
    fields: {
      name: { label: "Your name", placeholder: "First and last name" },
      phone: { label: "Phone number", placeholder: "(916) 555-0123" },
      email: { label: "Email (optional)", placeholder: "you@example.com" },
      message: {
        label: "How can we help? (optional)",
        placeholder: "Tell us a little about who the care is for.",
      },
      honeypot: { label: "Leave this field empty" },
    },
    required: "Required",
    submit: "Send message",
    submitting: "Sending...",
    successHeading: "Thank you. Your message has been sent.",
    successText:
      "We will get back to you during facility hours. If you need an answer sooner, please call us.",
    successAgain: "Send another message",
    errorHeading: "Your message did not go through.",
    errorText: "Please try again, or call us instead.",
    notConfiguredHeading: "Message form is not connected yet.",
    notConfiguredText:
      "This site has no form address set, so nothing was sent. Set NEXT_PUBLIC_FORM_ENDPOINT to a Formspree address to turn the form on. Until then, please call us.",
    validation: {
      name: "Please enter your name.",
      phone: "Please enter a phone number we can call.",
    },
  },

  // ------------------------------------------------------------- Privacy ---
  // Plain-language description of what this website does with information.
  // Update it if the site starts collecting anything new (new analytics, new forms).
  privacy: {
    meta: {
      title: "Privacy",
      description:
        "What the Golden Days website does and does not do with your information.",
    },
    heading: "Privacy",
    lead: "This page explains in plain words what this website does with your information.",
    updated: "Last updated: October 2026",
    sections: [
      {
        heading: "If you send us a message",
        paragraphs: [
          "The contact form asks for your name and phone number. Your email address and message are optional. We use what you send only to reply to you. We do not sell it.",
          "Messages are delivered to our center's email by Formspree, a service that handles website forms.",
          "Please do not put health or medical information in the form. Call us instead.",
        ],
      },
      {
        heading: "The “Do I qualify?” questions",
        paragraphs: [
          "Your answers stay in your browser while the page is open. We do not collect, send, or save them.",
        ],
      },
      {
        heading: "Visitor counts",
        paragraphs: [
          "We use Vercel Analytics to count visits. It records which pages were viewed, the country, the type of device and browser, and which website sent the visitor. It does not use cookies, does not show ads, and does not follow you to other websites.",
        ],
      },
      {
        heading: "Maps and cookies",
        paragraphs: [
          "The home page and the contact page show a Google Map. When the map loads, Google may receive your IP address and may set cookies, under Google's own privacy policy. This website does not set any other cookies of its own.",
        ],
      },
      {
        heading: "We do not sell your information",
        paragraphs: [
          "We do not sell your information or share it for advertising.",
        ],
      },
      {
        heading: "Questions or requests",
        paragraphs: [
          "To ask us to delete a message you sent, or if you have any question about this page, call us or send an email. Our phone number and email are at the bottom of every page.",
          "If we change what this website does with information, we will update this page.",
        ],
      },
    ],
  },

  language: {
    label: "Language",
  },

  // Words read aloud by screen readers but not shown on the page.
  a11y: {
    stepLabel: "Step {number}: ",
  },

  notFound: {
    metaTitle: "Page not found",
    heading: "We could not find that page",
    text: "The page may have moved. Try the menu at the top of the screen, or call us and we will help.",
    homeLabel: "Go to the home page",
  },

  photoPlaceholderNote: "Placeholder image. Replace with a real photo before launch.",
};

export type Content = typeof en;
