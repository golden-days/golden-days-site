/**
 * White Hmong (Hmoob Dawb, written in the Romanized Popular Alphabet) text for the
 * website. It has the same shape as `en.ts`, so TypeScript reports any string that
 * is missing. When you change wording in `en.ts`, update the matching line here too.
 *
 * Machine-assisted translation: have a fluent White Hmong speaker read the whole
 * file before launch.
 */

import { phone, type Content } from "./en";

export const hmn: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "Mus rau cov ntsiab lus tseem ceeb",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "Xov tooj",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "Email",
    addressLabel: "Chaw nyob",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "Sij hawm qhib",
    hours: "Sij hawm qhib lub chaw: Hnub Ib txog Hnub Tsib, 8:00 AM txog 3:00 PM",
    programHours: "Sij hawm pab cuam: Hnub Ib txog Hnub Tsib, 8:00 AM txog 2:00 PM",
    hoursNote:
      "Peb kaw rau hnub Saturday thiab Sunday. Peb kuj kaw rau hnub Thanksgiving, hnub Christmas, hnub New Year thiab hnub 4 Lub Xya Hli.",
    mapTitle: "Daim ntawv qhia chaw Golden Days Adult Day Health Care nyob",
    directionsLinkLabel: "Saib kev mus",
    // TODO: translate the English text below before turning this language on.
    languagesLabel: "Languages",
    languagesLine: "We speak English, Russian, and Ukrainian, and a Chinese interpreter is available.",
  },

  nav: {
    menuLabel: "Menu",
    closeLabel: "Kaw",
    ariaLabel: "Cov ntawv qhia tseem ceeb",
    links: [
      { href: "/", label: "Hauv Tsev" },
      { href: "/about", label: "Txog Peb" },
      { href: "/services", label: "Kev Pab" },
      { href: "/transportation", label: "Kev Thauj" },
      { href: "/qualify", label: "Kuv puas tsim nyog?" },
      { href: "/enrollment", label: "Kos Npe Nkag" },
      { href: "/contact", label: "Hu Rau Peb" },
    ],
  },

  buttons: {
    call: "Hu rau peb",
    callWithNumber: `Hu rau ${phone.display}`,
    scheduleTour: "Teem sij hawm tuaj saib",
    doIQualify: "Kuv puas tsim nyog?",
    learnMore: "Kawm ntxiv",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "Ib lub chaw saib xyuas neeg laus thaum nruab hnub nyob hauv West Sacramento, California. Peb pab cov tsev neeg nyob ze txij li xyoo 2003.",
    contactHeading: "Hu rau peb",
    hoursHeading: "Sij hawm qhib",
    copyright: "Golden Days Adult Day Health Care. Muaj cai tag nrho.",
    privacyLabel: "Privacy",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Chaw Saib Xyuas Neeg Laus Thaum Nruab Hnub hauv West Sacramento",
      description:
        "Golden Days Adult Day Health Care yog ib qhov kev pab cuam thaum nruab hnub rau cov neeg laus hauv West Sacramento, California. Hu rau peb lossis teem sij hawm tuaj saib.",
    },
    hero: {
      heading: "Kev saib xyuas thaum nruab hnub rau cov neeg laus hauv West Sacramento",
      intro:
        "Golden Days yog ib qhov kev pab cuam thaum nruab hnub rau cov neeg laus, thiab rau cov tsev neeg uas saib xyuas lawv.",
      photo: {
        kind: "building" as const,
        label: "Chaw tso duab - sab nraum lub tsev",
        alt: "Sab hauv ntej ntawm Golden Days Adult Day Health Care Center, nrog daim paib tshav ntuj saum qhov rooj qhib thiab daim paib Welcome to Golden Days ntawm lub qhov rais.",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "Peb pab leej twg",
      // TODO: translate the English lines below before turning this language on.
      paragraphs: [
        "Adult day health care programs serve frail older adults, and younger adults with chronic, disabling medical, cognitive, or mental health conditions, who are at risk of needing to move into a care facility. Golden Days serves adults age 18 and over.",
      ],
    },
    services: {
      heading: "Peb muaj dabtsi pab",
      intro: "Ib hnub ntawm Golden Days muaj peev xwm muaj cov hauv qab no.",
      linkLabel: "Saib txhua yam kev pab",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Kev Saib Xyuas Kev Noj Qab Haus Huv",
          text: "Peb cov nurse saib xyuas kev noj qab haus huv thaum nruab hnub.",
        },
        {
          icon: "rehabilitation" as const,
          title: "Kev Kho Lub Cev",
          text: "Kev kho kom muaj zog, sib npaug, thiab txav tau zoo txhua hnub.",
        },
        {
          icon: "nutrition" as const,
          title: "Zaub Mov",
          text: "Noj tshais thiab noj su txhua hnub, ua los ntawm ib tug kws ua zaub mov uas npaj raws li txhua tus neeg xav tau.",
        },
        {
          icon: "socialWork" as const,
          title: "Kev Pab Zej Zog",
          // TODO: translate the English line below before turning this language on.
          text: "Our social workers handle psychosocial assessments, care planning, advocacy, and community resources to support participants' health, safety, and well-being.",
        },
        {
          icon: "recreation" as const,
          title: "Kev Lom Zem",
          // TODO: translate the English line below before turning this language on.
          text: "Music, games, crafts, field trips, and time with other people.",
        },
        {
          icon: "transportation" as const,
          title: "Kev Thauj",
          text: "Thauj mus thiab los ntawm lub chaw rau hnub pab cuam.",
        },
      ],
    },
    transportation: {
      heading: "Kev tuaj txog yog ib feem ntawm kev saib xyuas",
      paragraphs: [
        "Golden Days thauj cov neeg tuaj koom pab cuam mus thiab los ntawm lub chaw, suav nrog cov neeg siv wheelchair lossis walker.",
        "Peb sib tham nrog koj tsev neeg txog sij hawm tuaj nqa, thiab peb hu yog sij hawm yuav hloov.",
      ],
      linkLabel: "Nyeem txog kev thauj",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Chaw tso duab - Golden Days bus",
        alt: "Ib lub bus dawb ntawm Golden Days nres sab nraum lub chaw, qhov rooj rau neeg caij qhib.",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "Kos npe nkag ua li cas",
      intro: "Plaub kauj ruam, thiab peb pab txhua kauj ruam.",
      steps: [
        {
          title: "Hu lossis xa lus",
          text: "Qhia peb me ntsis txog koj tus neeg hlub thiab nws txhua hnub zoo li cas tam sim no.",
        },
        {
          title: "Tuaj saib lub chaw",
          text: "Tuaj saib lub chaw, ntsib cov neeg ua haujlwm, thiab nug txhua yam koj xav paub.",
        },
        {
          title: "Ua kev ntsuam xyuas",
          // TODO: translate the English line below before turning this language on.
          text: "Our team reviews health and daily needs to see whether the program fits. An assessment can only be done with a doctor's approval.",
        },
        {
          title: "Pib tuaj",
          text: "Peb pom zoo hnub tuaj, npaj kev thauj, thiab txais koj tus neeg hlub tuaj.",
        },
      ],
      linkLabel: "Saib phau ntawv qhia kos npe nkag tag nrho",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "Tus nqi thiab?",
      // TODO: translate the English line below before turning this language on.
      text: "We accept Medi-Cal. Private pay is also an option. Call us and we will explain what applies to your family.",
    },
    trust: {
      text: "Pab cov tsev neeg West Sacramento txij li xyoo 2003. Tsev neeg li txij li xyoo 2007.",
      // TODO: translate the English line below before turning this language on.
      licenseText: "Licensed by the California Department of Public Health. License number 070000633.",
    },
    contact: {
      heading: "Tham nrog peb",
      intro:
        "Xa lus tuaj thiab peb yuav teb rov qab, lossis hu rau peb thaum lub chaw qhib.",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "Txog Golden Days",
      description:
        "Golden Days Adult Day Health Care tau pab cov tsev neeg West Sacramento txij li xyoo 2003, nrog cov tswv tib yam txij li xyoo 2007.",
    },
    heading: "Txog Golden Days",
    lead: "Golden Days Adult Day Health Care nyob hauv West Sacramento txij li xyoo 2003. Cov tswv tib yam tau tswj lub chaw txij li xyoo 2007.",
    photo: {
      kind: "interior" as const,
      label: "Chaw tso duab - duab cov neeg ua haujlwm",
      alt: "Daim duab tso cia hloov rau daim duab ua ke ntawm cov neeg ua haujlwm Golden Days",
    },
    story: {
      heading: "Peb zaj dab neeg",
      paragraphs: [
        "Golden Days qhib hauv West Sacramento xyoo 2003 ua ib qhov chaw uas cov neeg laus siv tau ib hnub nrog kev saib xyuas nyob ze. Cov tswv tib yam tau tswj lub chaw txij li xyoo 2007.",
        "Ntau xyoo no peb tau paub ntau tsev neeg nyob ze. Qee tus tuaj cuag peb ob peb hnub ib lub limtiam ntau xyoo, thiab lawv tsev neeg kuj los ua ib feem ntawm lub chaw.",
        "Muaj li 120 tus neeg nrog peb nyob txhua hnub, thiab cov neeg ua haujlwm tseem muab sij hawm kawm paub npe, kev ua neej txhua hnub, thiab yam uas ua rau txhua tus nyob zoo siab.",
      ],
    },
    values: {
      heading: "Yam uas tseem ceeb rau peb",
      items: [
        {
          title: "Hwm ua ntej",
          text: "Txhua tus uas tuaj ntawm no yog neeg laus, thiab peb xyuas lawv li ntawd.",
        },
        {
          title: "Teb ncaj ncaj",
          text: "Peb piav tus nqi, cov ntawv, thiab sij hawm ua lus yooj yim.",
        },
        {
          title: "Kev ua neej ruaj khov",
          text: "Cov ntsej muag paub thiab ib hnub uas paub ua ntej pab neeg nyob ruaj.",
        },
        {
          title: "Tsev neeg paub tas li",
          // TODO: translate the English line below before turning this language on.
          text: "If something changes, we call you. If you have a question, call us during facility hours.",
        },
      ],
    },
    team: {
      heading: "Peb pab neeg",
      paragraphs: [
        "Peb cov neeg ua haujlwm muaj nurse, cov neeg kho lub cev, ib tug social worker, cov coj kev ua si, cov tsav tsheb, thiab cov neeg ua zaub mov.",
        "Coob leej tau ua haujlwm ntawm Golden Days ntau xyoo thiab hais tau ntau yam lus.",
      ],
    },
    center: {
      heading: "Lub chaw",
      paragraphs: [
        "Lub tsev muaj chav ua si, chav noj mov, chav ntsiag to so, qhov chaw kho lub cev, thiab chav dej uas nkag tau yooj yim.",
        "Muaj chaw nres tsheb ntawm sab hauv ntej, thiab qhov rooj nkag nyob tib theem av tsis muaj ntaiv.",
      ],
      photo: {
        kind: "interior" as const,
        label: "Chaw tso duab - chav noj mov",
        alt: "Chav noj mov ntawm Golden Days, nrog cov rooj puag ncig teeb rau noj su thiab paj tshiab saum rooj.",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    // TODO: translate the English text below before turning this language on.
    licensing: {
      heading: "Licensed in California",
      text: "Golden Days is licensed by the California Department of Public Health as an Adult Day Health Center, and holds a City of West Sacramento business license.",
      items: [
        "State license: California Department of Public Health, Adult Day Health Center, license number 070000633",
        "City of West Sacramento business license, number 12046",
      ],
    },
    cta: {
      heading: "Tuaj saib koj tus kheej",
      text: "Kev tuaj saib siv kwv yees ib nrab teev. Hu rau peb thiab peb yuav nrhiav sij hawm.",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Kev Pab",
      description:
        "Kev saib xyuas kev noj qab haus huv, kev kho lub cev, zaub mov, kev pab zej zog, kev lom zem, thiab kev thauj ntawm Golden Days hauv West Sacramento.",
    },
    heading: "Kev Pab",
    lead: "Ib hnub ntawm Golden Days muaj rau yam kev pab. Cov tsev neeg xaiv hnub uas haum lawv.",
    items: [
      {
        icon: "nursing" as const,
        title: "Kev Saib Xyuas Kev Noj Qab Haus Huv",
        summary: "Peb cov nurse tshuaj xyuas kev noj qab haus huv thiab muab tshuaj thaum nruab hnub.",
        details: [
          "Cov nurse ntsuas lub cev thiab ntshav qab zib (blood glucose).",
          "Cov nurse muab tshuaj raws sij hawm thaum lub sij hawm pab cuam.",
          "Yog kev noj qab haus huv hloov, peb hu rau tsev neeg thiab rau chaw kws kho mob.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Kev Kho Lub Cev",
        summary: "Kev tawm dag zog thiab kev kho pab kom muaj zog, sib npaug, thiab txav tau zoo.",
        details: [
          "Cov neeg kho lub cev pab ua kom taug kev, sib npaug, thiab txav tau txhua hnub, thiab kev kho npaj raws li txhua tus xav ua kom tau dab tsi.",
          "Muaj kev tawm dag zog ua pab pawg feem ntau thaum sawv ntxov rau cov neeg xav koom.",
          "Cov kws kho mob uas muaj daim ntawv tso cai ua kev tsuam lub cev (massage) thiab kev kho nrog paraffin wax, suav nrog rau cov neeg koom, tsis them ntxiv.",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Zaub Mov",
        summary: "Noj tshais thiab noj su txhua hnub pab cuam, ua los ntawm ib tug kws ua zaub mov uas npaj raws li txhua tus neeg xav tau.",
        details: [
          "Noj tshais thiab noj su txhua hnub pab cuam, thiab zaub mov hloov mus tas li.",
          "Ib tug kws ua zaub mov tshwj xeeb npaj zaub mov raws li txhua tus neeg xav tau.",
          "Qhia peb txog yam zaub mov xav tau, xws li ua xua, nqos nyuaj (peb muaj peev xwm txiav zaub mov kom me), lossis noj zaub xwb.",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Kev Pab Zej Zog",
        // TODO: translate the English line below before turning this language on.
        summary: "Social workers are core staff responsible for psychosocial assessments, care planning, advocacy, and coordinating community resources to support participants' health, safety, and well-being.",
        details: [],
      },
      {
        icon: "recreation" as const,
        title: "Kev Lom Zem",
        // TODO: translate the English line below before turning this language on.
        summary: "Music, games, crafts, and company through the day.",
        details: [
          // TODO: translate the English line below before turning this language on.
          "Daily activities people can join or skip, such as music, games, and crafts.",
          "Mus ncig tshwm sim txog peb zaug ib lub limtiam nruab nrab, tsis them nqi ntxiv. Cov neeg txav tsis yooj yim mus nrog tau.",
          "Peb ua kev zoo siab hnub so thiab hnub yug ua ke.",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Kev Thauj",
        summary: "Thauj mus thiab los ntawm lub chaw rau hnub pab cuam.",
        details: [
          "Muaj kev thauj hauv peb thaj tsam pab.",
          "Peb cov tsheb thauj tau cov neeg siv wheelchair lossis walker.",
          "Lub bus tsav ze rau qhov rooj li ntawm tau. Hauv tsev, tus neeg saib xyuas pab tus neeg tuaj koom nce bus. Ntawm lub chaw, cov tsav tsheb pab cov neeg tuaj koom nqis bus.",
        ],
      },
    ],
    dayHeading: "Ib hnub zoo li cas",
    daySchedule: [
      { time: "8:30 AM", text: "Txais tos" },
      { time: "9:00 AM", text: "Kev Tawm Dag Zog Kho Lub Cev" },
      { time: "9:30 AM", text: "Noj Tshais / Saib Xov Xwm Tam Sim No ntawm TV" },
      { time: "10:00 AM", text: "Kawm Txog Kev Noj Qab Haus Huv / Kho Lub Cev Ib Leeg" },
      { time: "10:30 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Pawg Taug Kev / Mus Ncig" },
      { time: "11:00 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Kev Kho Ua Pab Pawg" },
      { time: "11:30 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Pab Pawg Txhim Kho Lub Cim Xeeb / Kev Ua Si / Pab Pawg Sab Ntsuj Plig" },
      { time: "12:00 PM", text: "Cov Qhua thiab Cov Neeg Hais Lus / Kho Lub Cev Ib Leeg" },
      { time: "12:30 PM", text: "Kev Kho Kom Ua Haujlwm Tau Ib Leeg" },
      { time: "1:00 PM", text: "Noj Su" },
      { time: "1:30 PM", text: "Saib Yeeb Yaj Kiab / Sib Tham" },
    ],
    // TODO: translate the English heading and intro below before turning this language on.
    rotatingHeading: "Rotating activities",
    // TODO: translate the English line below before turning this language on.
    rotatingIntro: "Activities rotate through the week. Bingo happens several times a week, and we go on outings to local stores, markets, and parks.",
    rotatingActivities: [
      "Chav Kawm Lus Askiv",
      "Bingo",
      // TODO: translate the two English items below before turning this language on.
      "Outings to stores, markets, and parks",
      "Birthday celebrations",
    ],
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Kev Thauj",
      description:
        "Kev thauj mus Golden Days hauv West Sacramento, suav nrog cov tsheb uas wheelchair nkag tau.",
    },
    heading: "Kev Thauj",
    lead: "Kev tuaj txog lub chaw yuav tsum tsis nyuaj. Golden Days thauj mus thiab los ntawm qhov kev pab cuam rau cov neeg xav tau.",
    photo: {
      kind: "bus" as const,
      label: "Chaw tso duab - sab hauv Golden Days bus",
      alt: "Sab hauv ib lub Golden Days bus: ntau kab rooj zaum xiav ob sab ntawm txoj kev dav, nrog cov cim wheelchair nkag tau rau ntawm phab ntsa.",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "Thaj tsam peb pab",
        paragraphs: [
          "Peb thauj hauv West Sacramento thiab cov zej zog nyob ze.",
          "Qee qhov chaw nyob sab nraum thaj tsam ntawd tseem yuav ua tau, nyob ntawm hnub thiab txoj kev. Yog koj thaj tsam tsis nyob hauv daim ntawv teev, hu rau peb thiab qhia chaw nyob, peb yuav tshawb xyuas.",
        ],
        list: {
          label: "Cov thaj tsam peb feem ntau pab:",
          items: [
            "West Sacramento",
            "Bryte thiab Broderick",
            "Southport",
            "Qee qhov ntawm Sacramento ze tus dej",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "Nqa nce thiab xa nqis",
        // TODO: translate the English lines below before turning this language on.
        paragraphs: [
          "At home, a caregiver helps the participant onto the bus, and at the center our drivers help them off.",
        ],
      },
      {
        heading: "Wheelchair thiab kev txav tsis yooj yim",
        // TODO: translate the English lines below before turning this language on.
        paragraphs: [
          "Our vehicles can carry participants who use a wheelchair, a walker, or a cane.",
        ],
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Chaw tso duab - wheelchair lift ntawm Golden Days bus",
      alt: "Lub wheelchair lift tom qab ntawm ib lub Golden Days bus, nrog lub rooj tsa nce sab hauv qhov rooj tom qab qhib.",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "Muaj lus nug txog kev tuaj nqa?",
      text: "Hu rau chaw ua haujlwm thiab thov daim sij hawm thauj.",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Kos Npe Nkag",
      description:
        "Leej twg tsim nyog rau Golden Days, leej twg them nyiaj, yuav coj dab tsi, thiab cov kauj ruam kos npe nkag hauv West Sacramento.",
    },
    heading: "Kos Npe Nkag",
    lead: "Kos npe nkag siv ob peb zaug sib tham, tsis yog ib pab ntawv loj. Nov yog li cas.",
    qualifies: {
      heading: "Leej twg tsim nyog",
      // TODO: translate the English line below before turning this language on.
      purpose: "We are here to help improve participants' health, both physically and mentally. We do not provide one-on-one care.",
      intro: "Golden Days feem ntau haum rau ib tug neeg laus uas:",
      items: [
        "Yog neeg laus nyob hauv tsev lossis nrog tsev neeg",
        "Xav tau kev pab, kev saib xyuas, lossis kev nrog nyob thaum nruab hnub",
        "Muaj mob uas tau txiaj ntsig ntawm kev tshuaj xyuas tsis tu ncua",
        "Koom tau hauv ib qhov kev pab cuam thaum nruab hnub ua pab pawg",
      ],
      // TODO: translate the English line below before turning this language on.
      note: "An assessment can only be done with a doctor's approval. Call us and we will tell you what the next step looks like.",
    },
    pays: {
      heading: "Leej twg them nyiaj",
      intro: "Cov tsev neeg feem ntau them ib txoj kev hauv qab no:",
      // TODO: translate the English line below before turning this language on.
      value: "Adult day health care usually costs much less than a hospital stay later on, so enrolling early can help.",
      items: [
        {
          title: "Medi-Cal",
          // TODO: translate the English line below before turning this language on.
          text: "We accept Medi-Cal. We can explain what the process looks like.",
        },
        {
          title: "Them nyiaj ncaj qha",
          text: "Cov tsev neeg kuj them ncaj qha tau.",
        },
      ],
      // TODO: translate the English line below before turning this language on.
      note: "Medicare does not cover this program. Nothing on this page is a promise of coverage or a price. Call us for current information about your situation.",
    },
    bring: {
      heading: "Yuav coj dab tsi",
      intro: "Coj cov uas koj muaj. Peb yuav pab lwm yam.",
      // TODO: translate the English lines below before turning this language on.
      items: [
        "Photo identification",
        "Medi-Cal card",
      ],
    },
    steps: {
      heading: "Cov kauj ruam",
      items: [
        {
          title: "Hu lossis xa lus",
          text: "Qhia peb txog koj tus neeg hlub, cov hnub koj xav tau, thiab txhua yam koj txhawj xeeb. Kev hu no siv kwv yees kaum feeb.",
        },
        {
          title: "Tuaj saib lub chaw",
          text: "Tuaj thaum lub sij hawm pab cuam, zoo tshaj ua ntej 1:30 PM, kom koj pom ib hnub li niaj hnub. Coj koj tus neeg hlub tuaj yog nws xis nyob.",
        },
      ],
    },
    faq: {
      heading: "Cov lus nug uas nquag nug",
      items: [
        {
          question: "Kuv tus neeg hlub tuaj tau ntau hnub ib lub limtiam?",
          answer: "Sij hawm txij li ib hnub txog tsib hnub ib lub limtiam. Peb yuav teem nrog koj ua ke.",
        },
        {
          question: "Kos npe nkag siv sij hawm ntev npaum li cas?",
          answer: "Nyob ntawm cov ntawv thiab insurance. Peb yuav qhia koj lub sij hawm tseeb thaum hu thawj zaug.",
        },
        {
          question: "Peb sim ua ntej tau tsis?",
          answer: "Pib nrog kev tuaj saib. Nug peb txog ib hnub sim thaum koj tuaj.",
        },
        {
          question: "Yog kuv tus neeg hlub tsis xav mus thiab?",
          answer: "Qhov ntawd muaj ntau. Kev tuaj saib thiab ib lub limtiam thawj zaug luv luv feem ntau pab tau. Peb tau ua li no ntau zaus lawm.",
        },
      ],
    },
    qualifyPrompt: {
      heading: "Tsis paub tias puas haum?",
      // TODO: translate the English line below before turning this language on.
      text: "Answer four short questions and we will point you to the next step. It takes about a minute.",
    },
    cta: {
      heading: "Npaj pib lawm?",
      text: "Hu rau peb lossis teem sij hawm tuaj saib. Nug lus nug tsis them nqi.",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "Kuv puas tsim nyog?",
      // TODO: translate the English line below before turning this language on.
      description:
        "Answer four short questions to see whether Golden Days in West Sacramento may be a good fit.",
    },
    intro: {
      heading: "Saib seb Golden Days puas haum rau koj lossis koj tus neeg hlub.",
      reassurance:
        "Qhov no siv kwv yees ib feeb. Nws tsis yog daim ntawv thov thiab tsis yog kev txiav txim zaum kawg. Peb tsis nug koj lub npe lossis xov xwm kev noj qab haus huv, thiab koj cov lus teb nyob ntawm nplooj ntawv no xwb. Peb tsis sau lossis khaws lawv.",
      startLabel: "Pib cov lus nug",
    },
    progressLabel: "Lus nug {current} ntawm {total}",
    progressBarLabel: "Koj mus tau deb npaum li cas",
    backLabel: "Rov qab",
    helpLabel: "Qhov no txhais li cas?",
    answers: {
      yes: "Yog",
      no: "Tsis yog",
      notSure: "Tsis paub tseeb",
    },
    answerGroupLabel: "Xaiv ib qho lus teb",
    questions: [
      {
        text: "Tus neeg ntawd muaj 18 xyoo lossis laus dua?",
        help: "Golden Days yog ib qhov kev pab cuam rau cov neeg laus. Yog koj nug rau niam txiv lossis tus txij nkawm, teb rau tus neeg ntawd.",
      },
      {
        text: "Nws puas nyob hauv West Sacramento lossis ib thaj tsam ze uas peb pab?",
        help: "Peb pab West Sacramento thiab cov thaj tsam ze, suav nrog Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova, thiab Antelope. Yog koj tsis paub tseeb, xaiv Tsis paub tseeb thiab peb yuav tshawb xyuas.",
      },
      {
        // TODO: translate the English line below before turning this language on.
        text: "Can they take part in group activities during the day without needing one-on-one help?",
        // TODO: translate the English line below before turning this language on.
        help: "Group activities include music, games, and meals together. We do not provide one-on-one care. People take part in their own way, and some also need medical attention during the day. If you are not sure they could manage a group setting, choose Not sure.",
      },
      {
        // TODO: translate the English line below before turning this language on.
        text: "Do they have Medi-Cal?",
        // TODO: translate the English line below before turning this language on.
        help: "We accept Medi-Cal. Private pay is also an option, so if they do not have Medi-Cal, choose No and call us to talk it over. If you are not sure, choose Not sure.",
      },
    ],
    results: {
      announcement: "Nov yog koj cov txiaj ntsig.",
      goodFit: {
        heading: "Xov zoo. Koj haum rau Golden Days.",
        text: "Hu rau peb lossis teem sij hawm tuaj saib, thiab peb yuav pab nrog cov kauj ruam tom ntej.",
      },
      notFit: {
        heading: "Golden Days tej zaum tsis haum.",
        text: "Ua tsaug uas tshawb xyuas. Yog koj xav sib tham, thov hu rau peb thiab peb txaus siab pab.",
      },
      unsure: {
        heading: "Peb tseem tsis paub tseeb, thiab qhov ntawd tsis ua li cas.",
        text: "Ntau tsev neeg tsis paub tseeb thaum pib. Hu rau peb thiab peb yuav saib koj li xwm txheej ua ke. Qee cov lus teb hloov tau nrog cov ntawv lossis insurance kom raug. Yog txhua qhov lus teb yog Yog, koj haum.",
      },
      enrollmentLinkLabel: "Nyeem txog kos npe nkag ua li cas",
      startOverLabel: "Pib dua",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "Hu Rau Peb",
      description:
        "Hu rau Golden Days Adult Day Health Care hauv West Sacramento, xa lus, lossis teem sij hawm tuaj saib.",
    },
    heading: "Hu rau peb",
    lead: "Hu rau peb thaum lub chaw qhib, lossis xa lus tuaj thiab peb yuav teb rov qab.",
    detailsHeading: "Tuaj saib lossis hu",
    directionsHeading: "Nrhiav peb",
    directionsText:
      "Qhov rooj nkag nyob tib theem av thiab chaw nres tsheb nyob ntawm sab hauv ntej ntawm lub tsev.",
    photo: {
      kind: "building" as const,
      label: "Chaw tso duab - qhov rooj nkag",
      alt: "Qhov rooj nkag ntawm Golden Days ntawm 1215 Merkley Ave, nrog daim paib saum qhov rooj thiab cov cones teeb ntawm txoj kev taug.",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "Teem sij hawm tuaj saib",
    tourText:
      "Kev tuaj saib muaj thaum lub sij hawm pab cuam, zoo tshaj ua ntej 1:30 PM, kom koj pom ib hnub li niaj hnub. Hu rau peb lossis siv daim foos thiab hais tias koj xav tuaj saib.",
  },

  form: {
    heading: "Xa lus rau peb",
    responseTime: "Ib tug neeg hauv peb pab neeg yuav hu rau koj hauv ib hnub ua haujlwm.",
    callAlternativeLead: "Xav hu hais lus?",
    callAlternativeLinkPrefix: "Hu rau peb ntawm",
    medicalNote: "Thov tsis txhob muab xov xwm kho mob tso rau hauv daim foos no.",
    fields: {
      name: { label: "Koj lub npe", placeholder: "Npe thiab xeem" },
      phone: { label: "Xov tooj", placeholder: "(916) 555-0123" },
      email: { label: "Email (tsis tas yuav sau)", placeholder: "you@example.com" },
      message: {
        label: "Peb pab koj li cas? (tsis tas yuav sau)",
        placeholder: "Qhia peb me ntsis txog tus neeg uas xav tau kev saib xyuas.",
      },
      honeypot: { label: "Tsis txhob sau qhov no" },
    },
    required: "Yuav tsum sau",
    submit: "Xa lus",
    submitting: "Tabtom xa...",
    successHeading: "Ua tsaug. Koj cov lus xa mus lawm.",
    successText:
      "Peb yuav teb koj thaum lub chaw qhib. Yog koj xav tau lus teb sai dua, thov hu rau peb.",
    successAgain: "Xa lus ntxiv",
    errorHeading: "Koj cov lus xa tsis tau.",
    errorText: "Thov sim dua, lossis hu rau peb.",
    notConfiguredHeading: "Daim foos xa lus tseem tsis tau txuas.",
    notConfiguredText:
      "Lub vev xaib no tsis tau teeb chaw nyob rau daim foos, yog li tsis muaj dabtsi xa mus. Teeb NEXT_PUBLIC_FORM_ENDPOINT rau ib qho chaw nyob Formspree kom daim foos ua haujlwm. Txog thaum ntawd, thov hu rau peb.",
    validation: {
      name: "Thov sau koj lub npe.",
      phone: "Thov sau ib tus xov tooj uas peb hu tau.",
    },
  },

  // ------------------------------------------------------------- Privacy ---
  // TODO: translate this English text before turning this language on.
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
    label: "Lus",
  },

  // Words read aloud by screen readers but not shown on the page.
  a11y: {
    stepLabel: "Kauj ruam {number}: ",
  },

  notFound: {
    metaTitle: "Nrhiav tsis tau nplooj ntawv",
    heading: "Peb nrhiav tsis tau nplooj ntawv ntawd",
    text: "Nplooj ntawv no tej zaum tau tsiv. Sim siv menu saum toj ntawm npo, lossis hu rau peb thiab peb yuav pab.",
    homeLabel: "Mus rau nplooj ntawv hauv tsev",
  },

  photoPlaceholderNote: "Daim duab tso cia. Hloov nrog daim duab tseeb ua ntej qhib lub vev xaib.",
};
