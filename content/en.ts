/**
 * All English text for the website lives in this one file.
 *
 * To change wording on the site, edit the strings here. You do not need to
 * touch the page files.
 *
 * Draft copy rule: every fact that was invented for this draft ends with
 * " [PLACEHOLDER]" so it is obvious on the page. Run `npm run check-placeholders`
 * to list everything that still needs real information.
 *
 * Adding another language later: copy this file to `content/ru.ts` or
 * `content/zh.ts`, translate the strings, and keep the same shape.
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
    hours: "Office hours: Monday to Friday, 8:00 AM to 4:30 PM",
    programHours: "Program day: Monday to Friday, 8:00 AM to 2:00 PM",
    hoursNote: "Closed Saturday and Sunday. Also closed on Thanksgiving, Christmas Day, New Year's Day, and the Fourth of July.",
    mapTitle: "Map showing the Golden Days Adult Day Health Care location [PLACEHOLDER]",
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
    disclaimer:
      "This website is a draft. Any detail marked as a placeholder is sample text and has not been confirmed.",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Adult Day Health Care in West Sacramento",
      description:
        "Golden Days Adult Day Health Care is a day program for adults, including many older adults, in West Sacramento, California. Call us or schedule a tour. [PLACEHOLDER]",
    },
    hero: {
      heading: "Daytime care for adults in West Sacramento",
      intro:
        "Golden Days is a day program for adults of any age who need some help during the day, including many older adults, and for the families who care for them. [PLACEHOLDER]",
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
        "Golden Days welcomes adults, including many older adults, who live at home and need support, company, or supervision during the day. [PLACEHOLDER]",
        "Many of the people who come to us live with a family member who works, or who simply needs a break during the week. [PLACEHOLDER]",
        "If you are not sure whether Golden Days is the right fit for your loved one, call us. We are happy to talk it through, with no pressure. [PLACEHOLDER]",
      ],
    },
    services: {
      heading: "What we offer",
      intro: "A day at Golden Days can include any of the following. [PLACEHOLDER]",
      linkLabel: "See all services",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Nursing Care",
          text: "Our nursing staff checks in on health needs during the day. [PLACEHOLDER]",
        },
        {
          icon: "rehabilitation" as const,
          title: "Rehabilitation",
          text: "Therapy sessions to help with strength, balance, and daily movement. [PLACEHOLDER]",
        },
        {
          icon: "nutrition" as const,
          title: "Nutrition",
          text: "A hot meal and snacks each day, with options for special diets. [PLACEHOLDER]",
        },
        {
          icon: "socialWork" as const,
          title: "Social Work",
          text: "Help understanding benefits, paperwork, and community resources. [PLACEHOLDER]",
        },
        {
          icon: "recreation" as const,
          title: "Recreation",
          text: "Music, games, crafts, exercise, field trips, and time with other people. [PLACEHOLDER]",
        },
        {
          icon: "transportation" as const,
          title: "Transportation",
          text: "Rides to and from the center on program days. [PLACEHOLDER]",
        },
      ],
    },
    transportation: {
      heading: "Getting here is part of the care",
      paragraphs: [
        "Golden Days offers door-to-door rides for people who attend the program, including riders who use a wheelchair or a walker. [PLACEHOLDER]",
        "We work out a pickup window with your family, and we call if a schedule needs to change. [PLACEHOLDER]",
      ],
      linkLabel: "Read about transportation",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Photo placeholder - Golden Days bus",
        alt: "Placeholder image standing in for a photo of a Golden Days bus parked outside the center",
      },
    },
    enrollment: {
      heading: "How enrollment works",
      intro: "Four steps, and we help with each one. [PLACEHOLDER]",
      steps: [
        {
          title: "Call or send a message",
          text: "Tell us a little about your loved one and what the days look like now. [PLACEHOLDER]",
        },
        {
          title: "Visit the center",
          text: "Come see the rooms, meet the staff, and ask anything you want. [PLACEHOLDER]",
        },
        {
          title: "Complete an assessment",
          text: "Our team reviews health and daily needs to see whether the program fits. [PLACEHOLDER]",
        },
        {
          title: "Start attending",
          text: "We agree on days, arrange rides, and welcome your loved one in. [PLACEHOLDER]",
        },
      ],
      linkLabel: "See the full enrollment guide",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "What about cost?",
      text: "Many families use Medi-Cal, and private pay is also an option. Call us and we will explain what applies to your family. [PLACEHOLDER]",
    },
    trust: {
      text: "Serving West Sacramento families since 2003. Same owners since 2007.",
    },
    contact: {
      heading: "Talk with us",
      intro:
        "Send a message and we will get back to you, or call during office hours. [PLACEHOLDER]",
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
      label: "Photo placeholder - activity room",
      alt: "Placeholder image standing in for a photo of the Golden Days activity room",
    },
    story: {
      heading: "Our story",
      paragraphs: [
        "Golden Days opened in West Sacramento in 2003 as a place where adults could spend the day with care close at hand. The same owners have run the center since 2007. [PLACEHOLDER]",
        "Over those years we have come to know many local families. Some people come to us a few days a week for years, and their families become part of the center too. [PLACEHOLDER]",
        "We are a small center on purpose. Staff learn names, routines, and what makes each person comfortable. [PLACEHOLDER]",
      ],
    },
    values: {
      heading: "What matters to us",
      items: [
        {
          title: "Respect first",
          text: "Everyone who comes here is an adult, and we treat them that way. [PLACEHOLDER]",
        },
        {
          title: "Plain answers",
          text: "We explain costs, paperwork, and schedules in plain language. [PLACEHOLDER]",
        },
        {
          title: "Steady routines",
          text: "Familiar faces and a predictable day help people settle in. [PLACEHOLDER]",
        },
        {
          title: "Family in the loop",
          text: "We call when something changes, and we answer the phone. [PLACEHOLDER]",
        },
      ],
    },
    team: {
      heading: "Our team",
      paragraphs: [
        "Our staff includes nurses, therapy staff, a social worker, activity leaders, drivers, and kitchen staff. [PLACEHOLDER]",
        "Many of them have worked at Golden Days for years and speak more than one language. [PLACEHOLDER]",
      ],
    },
    center: {
      heading: "The center",
      paragraphs: [
        "The building has an activity room, a dining room, quiet rooms for rest, a therapy area, and accessible restrooms. [PLACEHOLDER]",
        "Parking is available in front, and the entrance is at ground level with no stairs. [PLACEHOLDER]",
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
    cta: {
      heading: "Come see it for yourself",
      text: "A visit takes about half an hour. Call us and we will find a time. [PLACEHOLDER]",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Services",
      description:
        "Nursing care, rehabilitation, nutrition, social work, recreation, and transportation at Golden Days in West Sacramento. [PLACEHOLDER]",
    },
    heading: "Services",
    lead: "A day at Golden Days is built around six kinds of support. Families choose the days that work for them. [PLACEHOLDER]",
    items: [
      {
        icon: "nursing" as const,
        title: "Nursing Care",
        summary: "Health checks and medication support while your loved one is at the center. [PLACEHOLDER]",
        details: [
          "Nursing staff check vital signs and watch for changes during the day. [PLACEHOLDER]",
          "We help with medications that are scheduled during program hours. [PLACEHOLDER]",
          "If something looks different, we call the family and the doctor's office. [PLACEHOLDER]",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Rehabilitation",
        summary: "Exercises and therapy that support strength, balance, and movement. [PLACEHOLDER]",
        details: [
          "Therapy staff work on walking, balance, and everyday movement. [PLACEHOLDER]",
          "Sessions are planned around what each person is working toward. [PLACEHOLDER]",
          "Group exercise happens most mornings for people who want to join. [PLACEHOLDER]",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Nutrition",
        summary: "A hot meal and snacks each program day, with special diets available. [PLACEHOLDER]",
        details: [
          "Breakfast and lunch are served every program day, with morning and afternoon snacks. The meals rotate. [PLACEHOLDER]",
          "We can plan around low-salt, diabetic, and soft-food diets. [PLACEHOLDER]",
          "Tell us about food preferences and we will do our best to match them. [PLACEHOLDER]",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Social Work",
        summary: "Help with benefits, paperwork, and finding services outside the center. [PLACEHOLDER]",
        details: [
          "Our social worker helps families understand forms and coverage questions. [PLACEHOLDER]",
          "We can point you toward local services such as home help or meal programs. [PLACEHOLDER]",
          "Family meetings are available when a plan needs to change. [PLACEHOLDER]",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Recreation",
        summary: "Music, games, crafts, gentle exercise, and company through the day. [PLACEHOLDER]",
        details: [
          "Each day has a schedule of activities people can join or skip, including music, card games, crafts, and seated exercise. [PLACEHOLDER]",
          "Field trips happen three times a week, at no extra cost. People who use a wheelchair or have other mobility needs can come along. [PLACEHOLDER]",
          "Holidays and birthdays are celebrated together. [PLACEHOLDER]",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Transportation",
        summary: "Door-to-door rides to and from the center on program days. [PLACEHOLDER]",
        details: [
          "Rides are available within our service area. [PLACEHOLDER]",
          "Our vehicles can carry riders who use a wheelchair or a walker. [PLACEHOLDER]",
          "Drivers help at the door and make sure someone is there at drop-off. [PLACEHOLDER]",
        ],
      },
    ],
    dayHeading: "What a day looks like",
    daySchedule: [
      { time: "8:00 AM", text: "Arrival, greetings, and morning check-ins. [PLACEHOLDER]" },
      { time: "9:00 AM", text: "Seated exercise and therapy sessions. [PLACEHOLDER]" },
      { time: "10:00 AM", text: "Activities, music, and small groups. [PLACEHOLDER]" },
      { time: "11:30 AM", text: "Lunch together in the dining room. [PLACEHOLDER]" },
      { time: "12:30 PM", text: "Quiet time, nursing visits, and social work meetings. [PLACEHOLDER]" },
      { time: "1:15 PM", text: "Afternoon activity and snack. [PLACEHOLDER]" },
      { time: "2:00 PM", text: "Rides home. [PLACEHOLDER]" },
    ],
    cta: {
      heading: "Not sure which parts your loved one needs? [PLACEHOLDER]",
      text: "Call us. We will ask a few questions and give you a straight answer. [PLACEHOLDER]",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Transportation",
      description:
        "Door-to-door rides to Golden Days in West Sacramento, including wheelchair accessible vehicles. [PLACEHOLDER]",
    },
    heading: "Transportation",
    lead: "Getting to the center should not be the hard part. Golden Days offers rides to and from the program for people who need them. [PLACEHOLDER]",
    photo: {
      kind: "bus" as const,
      label: "Photo placeholder - Golden Days bus at the entrance",
      alt: "Placeholder image standing in for a photo of a Golden Days bus at the center entrance",
    },
    sections: [
      {
        heading: "Service area",
        paragraphs: [
          "We provide rides in West Sacramento and nearby neighborhoods. [PLACEHOLDER]",
          "Some addresses outside that area may still work depending on the day and the route. Call us with your address and we will check. [PLACEHOLDER]",
        ],
        list: {
          label: "Areas we usually serve: [PLACEHOLDER]",
          items: [
            "West Sacramento [PLACEHOLDER]",
            "Bryte and Broderick [PLACEHOLDER]",
            "Southport [PLACEHOLDER]",
            "Parts of Sacramento near the river [PLACEHOLDER]",
          ],
        },
      },
      {
        heading: "Pickup and drop-off",
        paragraphs: [
          "Each rider gets a pickup window rather than an exact minute, because traffic and other riders change the route. [PLACEHOLDER]",
          "Drivers come to the door, help with the walk to the vehicle, and wait until someone answers at drop-off. [PLACEHOLDER]",
          "If the bus is running late, we call the family. [PLACEHOLDER]",
        ],
      },
      {
        heading: "Wheelchair and mobility access",
        paragraphs: [
          "Our vehicles can carry riders who use a wheelchair, a walker, or a cane. [PLACEHOLDER]",
          "Wheelchairs are secured before the vehicle moves, and seat belts are used for every rider. [PLACEHOLDER]",
          "Tell us about oxygen, transfers, or anything else a driver should know, and we will plan for it. [PLACEHOLDER]",
        ],
      },
      {
        heading: "How families arrange or change a ride",
        paragraphs: [
          "Rides are set up when your loved one enrolls, and the schedule stays the same week to week. [PLACEHOLDER]",
          "To change a pickup address, add a day, or cancel a ride, call the office. [PLACEHOLDER]",
          "For a same-day cancellation, call as early as you can so the driver can adjust the route. [PLACEHOLDER]",
        ],
        list: {
          label: "To change a ride, have this ready: [PLACEHOLDER]",
          items: [
            "The rider's name [PLACEHOLDER]",
            "The date or dates that are changing [PLACEHOLDER]",
            "The new address, if the pickup location is moving [PLACEHOLDER]",
            "A phone number where we can reach you that day [PLACEHOLDER]",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Photo placeholder - wheelchair lift on a Golden Days bus",
      alt: "Placeholder image standing in for a photo of the wheelchair lift on a Golden Days bus",
    },
    cta: {
      heading: "Questions about a pickup?",
      text: "Call the office and ask for the transportation schedule. [PLACEHOLDER]",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Enrollment",
      description:
        "Who qualifies for Golden Days, who pays, what to bring, and the steps to enroll in West Sacramento. [PLACEHOLDER]",
    },
    heading: "Enrollment",
    lead: "Enrolling takes a few conversations, not a mountain of paperwork. Here is how it goes. [PLACEHOLDER]",
    qualifies: {
      heading: "Who qualifies",
      intro: "Golden Days is generally a fit for an adult who: [PLACEHOLDER]",
      items: [
        "Is an adult living at home or with family [PLACEHOLDER]",
        "Needs help, supervision, or company during the day [PLACEHOLDER]",
        "Has a health condition that benefits from regular check-ins [PLACEHOLDER]",
        "Can take part in a group day program [PLACEHOLDER]",
      ],
      note: "Eligibility is decided after an assessment, not over the phone. Call us and we will tell you what the next step looks like. [PLACEHOLDER]",
    },
    pays: {
      heading: "Who pays",
      intro: "Families usually pay in one of these ways: [PLACEHOLDER]",
      items: [
        {
          title: "Medi-Cal",
          text: "Many families use Medi-Cal coverage for adult day health care. We can explain what the process looks like. [PLACEHOLDER]",
        },
        {
          title: "Managed care plans",
          text: "Some health plans cover day programs. We will check what your plan says. [PLACEHOLDER]",
        },
        {
          title: "Private pay",
          text: "Families can also pay directly, by the day or by the month. [PLACEHOLDER]",
        },
      ],
      note: "Nothing on this page is a promise of coverage or a price. Call us for current information about your situation. [PLACEHOLDER]",
    },
    bring: {
      heading: "What to bring",
      intro: "Bring what you have. We will help with the rest. [PLACEHOLDER]",
      items: [
        "Photo identification [PLACEHOLDER]",
        "Insurance or Medi-Cal card [PLACEHOLDER]",
        "A current list of medications [PLACEHOLDER]",
        "Your doctor's name and phone number [PLACEHOLDER]",
        "Emergency contact names and numbers [PLACEHOLDER]",
        "Any recent medical paperwork you already have [PLACEHOLDER]",
      ],
    },
    steps: {
      heading: "The steps",
      items: [
        {
          title: "Call or send a message",
          text: "Tell us about your loved one, the days you are hoping for, and any concerns. This call takes about ten minutes. [PLACEHOLDER]",
        },
        {
          title: "Tour the center",
          text: "Visit during program hours so you can see a normal day. Bring your loved one if that is comfortable. [PLACEHOLDER]",
        },
        {
          title: "Assessment",
          text: "Our team reviews health history, daily needs, and goals to confirm the program is a good fit. [PLACEHOLDER]",
        },
        {
          title: "Paperwork and coverage",
          text: "We complete enrollment forms together and work through the coverage questions. [PLACEHOLDER]",
        },
        {
          title: "First day",
          text: "We set the schedule, arrange rides, and introduce your loved one to staff and other participants. [PLACEHOLDER]",
        },
      ],
    },
    faq: {
      heading: "Common questions",
      items: [
        {
          question: "How many days a week can my loved one come? [PLACEHOLDER]",
          answer: "Schedules range from one day to five days a week. We work out a schedule together. [PLACEHOLDER]",
        },
        {
          question: "How long does enrollment take?",
          answer: "It depends on paperwork and coverage. We will give you a realistic timeline on the first call. [PLACEHOLDER]",
        },
        {
          question: "Can we try it first?",
          answer: "Start with a tour. Ask us about a trial day when you visit. [PLACEHOLDER]",
        },
        {
          question: "What if my loved one does not want to go? [PLACEHOLDER]",
          answer: "That is common. A tour and a short first week often help. We have done this many times. [PLACEHOLDER]",
        },
      ],
    },
    qualifyPrompt: {
      heading: "Not sure if this is a fit?",
      text: "Answer five short questions and we will point you to the next step. It takes about a minute. [PLACEHOLDER]",
    },
    cta: {
      heading: "Ready to start?",
      text: "Call us or schedule a tour. There is no cost to ask questions. [PLACEHOLDER]",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "Do I qualify?",
      description:
        "Answer five short questions to see whether Golden Days in West Sacramento may be a good fit. [PLACEHOLDER]",
    },
    intro: {
      heading: "See if Golden Days may be right for you or your loved one.",
      reassurance:
        "This takes about a minute. It is not an application and not a final decision. We do not ask for your name or any health information, and your answers stay on this page. We do not collect or store them. [PLACEHOLDER]",
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
        text: "Is the person 18 or older? [PLACEHOLDER]",
        help: "Golden Days is a program for adults. If you are asking for a parent or a spouse, answer for that person. [PLACEHOLDER]",
      },
      {
        text: "Do they live in or near West Sacramento? [PLACEHOLDER]",
        help: "Nearby towns can work too. If you are not sure whether your address is close enough, choose Not sure. [PLACEHOLDER]",
      },
      {
        text: "Do they need help with everyday activities, like bathing, dressing, or taking medicine? [PLACEHOLDER]",
        help: "Everyday activities means things like washing up, getting dressed, eating, walking safely, or remembering medicine. [PLACEHOLDER]",
      },
      {
        text: "Do they have Medi-Cal (California's health coverage program), other health insurance, or can they pay privately? [PLACEHOLDER]",
        help: "Medi-Cal helps pay for care for people with a low income. Paying privately means paying the center directly. [PLACEHOLDER]",
      },
      {
        text: "Can a doctor fill out a referral form? [PLACEHOLDER]",
        help: "A referral form is a short form a doctor signs to say the program may help. We can send the form to the doctor's office. [PLACEHOLDER]",
      },
    ],
    results: {
      announcement: "Here are your results.",
      goodFit: {
        heading: "Good news. Golden Days may be a good fit.",
        text: "Call us or schedule a tour, and we will help with the next steps. [PLACEHOLDER]",
      },
      notFit: {
        heading: "Golden Days may not be the right fit. [PLACEHOLDER]",
        text: "Thank you for checking. If you would like to talk it over, please call us and we will be glad to help. [PLACEHOLDER]",
      },
      unsure: {
        heading: "We are not sure yet, and that is okay.",
        text: "Many families are unsure at the start. Call us and we will go through your situation together. Some answers can change with the right paperwork or coverage. [PLACEHOLDER]",
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
        "Call Golden Days Adult Day Health Care in West Sacramento, send a message, or schedule a tour. [PLACEHOLDER]",
    },
    heading: "Contact us",
    lead: "Call us during office hours, or send a message and we will get back to you. [PLACEHOLDER]",
    detailsHeading: "Visit or call",
    directionsHeading: "Find us",
    directionsText:
      "The entrance is at ground level and parking is in front of the building. [PLACEHOLDER]",
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
      "Tours happen during program hours so you can see a normal day. Call us or use the form and say that you would like a tour. [PLACEHOLDER]",
  },

  form: {
    heading: "Send us a message",
    responseTime: "A member of our team will call you within 2 business days. [PLACEHOLDER]",
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
      "We will get back to you during office hours. If you need an answer sooner, please call us. [PLACEHOLDER]",
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

  photoPlaceholderNote: "Placeholder image. Replace with a real photo before launch.",
};

export type Content = typeof en;
