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
    hours: "Sij hawm qhib lub chaw: Hnub Ib txog Hnub Tsib, 8:00 AM txog 4:30 PM",
    programHours: "Sij hawm pab cuam: Hnub Ib txog Hnub Tsib, 8:00 AM txog 2:00 PM",
    hoursNote:
      "Peb kaw rau hnub Saturday thiab Sunday. Peb kuj kaw rau hnub Thanksgiving, hnub Christmas, hnub New Year thiab hnub 4 Lub Xya Hli.",
    mapTitle: "Daim ntawv qhia chaw Golden Days Adult Day Health Care nyob",
    directionsLinkLabel: "Saib kev mus",
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
    disclaimer:
      "Lub vev xaib no yog ib daim ntawv sau thaum ntxov. Txhua yam uas cim tias yog chaw tso cia yog cov ntawv piv txwv thiab tseem tsis tau paub tseeb.",
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
      paragraphs: [
        "Golden Days txais cov neeg laus uas nyob hauv tsev thiab xav tau kev pab, kev nrog nyob, lossis kev saib xyuas thaum nruab hnub.",
        "Coob leej uas tuaj cuag peb nyob nrog ib tug neeg hauv tsev neeg uas mus ua haujlwm, lossis xav so ib pliag thaum lub limtiam.",
        "Yog koj tsis paub tseeb tias Golden Days puas haum rau koj tus neeg hlub, hu rau peb. Peb txaus siab sib tham, tsis yuam koj li.",
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
          text: "Pab nkag siab txog cov txiaj ntsig, cov ntawv, thiab cov chaw pab hauv zej zog.",
        },
        {
          icon: "recreation" as const,
          title: "Kev Lom Zem",
          text: "Suab paj nruag, kev ua si, kev ua tes ua taw, kev tawm dag zog, mus ncig, thiab nrog lwm tus nyob.",
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
          text: "Peb pab neeg tshuaj xyuas kev noj qab haus huv thiab txhua hnub xav tau dab tsi kom paub tias qhov kev pab cuam puas haum.",
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
      text: "Peb txais insurance, thiab Medi-Cal ua ke nrog insurance. Them nyiaj ncaj qha kuj tau. Hu rau peb thiab peb yuav piav seb dab tsi siv tau rau koj tsev neeg.",
    },
    trust: {
      text: "Pab cov tsev neeg West Sacramento txij li xyoo 2003. Cov tswv tib yam txij li xyoo 2007.",
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
        "Peb yog ib lub chaw me, thiab peb xaiv li ntawd. Cov neeg ua haujlwm paub npe, kev ua neej txhua hnub, thiab yam uas ua rau txhua tus nyob zoo siab.",
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
          text: "Peb hu thaum muaj yam hloov, thiab peb teb xov tooj.",
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
          "Cov neeg kho lub cev pab ua kom taug kev, sib npaug, thiab txav tau txhua hnub.",
          "Kev kho npaj raws li txhua tus xav ua kom tau dab tsi.",
          "Muaj kev tawm dag zog ua pab pawg feem ntau thaum sawv ntxov rau cov neeg xav koom.",
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
        summary: "Pab txog cov txiaj ntsig, cov ntawv, thiab nrhiav kev pab sab nraum lub chaw.",
        details: [
          "Peb tus social worker pab cov tsev neeg nkag siab txog cov foos thiab cov lus nug txog insurance.",
          "Peb qhia tau cov kev pab hauv zej zog xws li kev pab hauv tsev lossis kev xa zaub mov.",
          "Muaj kev sib tham nrog tsev neeg thaum txoj kev npaj yuav tsum hloov.",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Kev Lom Zem",
        summary: "Suab paj nruag, kev ua si, kev ua tes ua taw, kev tawm dag zog maj mam, thiab nrog lwm tus nyob txhua hnub.",
        details: [
          "Kev ua si txhua hnub uas neeg koom tau lossis tsis koom, xws li suab paj nruag, kev ua si, kev ua tes ua taw, thiab kev tawm dag zog.",
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
      { time: "10:00 AM", text: "Kawm Txog Kev Noj Qab Haus Huv / Kho Lub Cev Ib Leeg (Hnub Ib, Hnub Tuam Tsav, Hnub Tsib)" },
      { time: "10:30 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Pawg Taug Kev / Mus Ncig" },
      { time: "11:00 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Kev Kho Ua Pab Pawg" },
      { time: "11:30 AM", text: "Kev Tawm Dag Zog Kho Lub Cev / Pab Pawg Txhim Kho Lub Cim Xeeb / Kev Ua Si / Pab Pawg Sab Ntsuj Plig" },
      { time: "12:00 PM", text: "Cov Qhua thiab Cov Neeg Hais Lus / Kho Lub Cev Ib Leeg (Hnub Ib, Hnub Tuam Tsav, Hnub Tsib)" },
      { time: "12:30 PM", text: "Kev Kho Kom Ua Haujlwm Tau Ib Leeg (Hnub Peb, Hnub Tsib)" },
      { time: "1:00 PM", text: "Noj Su" },
      { time: "1:30 PM", text: "Saib Yeeb Yaj Kiab / Sib Tham" },
    ],
    weeklyHeading: "Kev ua si txhua lub limtiam",
    weeklyActivities: [
      { day: "Hnub Tuam Tsav", text: "Pab Pawg Txhim Kho Lub Cim Xeeb" },
      { day: "Hnub Peb", text: "Chav Kawm Lus Askiv" },
      { day: "Hnub Tsib", text: "Bingo" },
    ],
    cta: {
      heading: "Tsis paub tias koj tus neeg hlub xav tau yam twg?",
      text: "Hu rau peb. Peb yuav nug ob peb lo lus thiab teb koj ncaj ncaj.",
    },
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
        paragraphs: [
          "Txhua tus neeg caij tau ib lub sij hawm tuaj nqa, tsis yog ib feeb tseeb, vim tsheb nres thiab lwm tus neeg caij hloov txoj kev.",
          "Peb tsav ze rau qhov rooj li ntawm tau. Thaum tuaj nqa, tus neeg saib xyuas ntawm tus neeg tuaj koom pab nws nce bus. Cov tsav tsheb tsis pab cov neeg tuaj koom nce, thiab lawv nqa tsis tau leej twg nce bus.",
          "Ntawm lub chaw, cov tsav tsheb pab tau cov neeg tuaj koom nqis bus, thiab peb cov neeg saib xyuas ntawm no npaj txais lawv. Peb cov neeg saib xyuas tsis mus rau tib neeg tej tsev.",
          "Yog bus lig, peb hu rau tsev neeg.",
        ],
      },
      {
        heading: "Wheelchair thiab kev txav tsis yooj yim",
        paragraphs: [
          "Peb cov tsheb thauj tau cov neeg siv wheelchair, walker, lossis tus pas.",
          "Wheelchair raug khi ruaj ua ntej tsheb tsav, thiab txhua tus neeg caij siv txoj siv tsheb.",
          "Qhia peb txog oxygen, kev hloov chaw zaum, lossis lwm yam uas tus tsav tsheb yuav tsum paub, thiab peb yuav npaj.",
        ],
      },
      {
        heading: "Tsev neeg npaj lossis hloov kev thauj li cas",
        paragraphs: [
          "Kev thauj teem tseg thaum koj tus neeg hlub kos npe nkag, thiab sij hawm tseem zoo li qub txhua lub limtiam.",
          "Yog xav hloov chaw tuaj nqa, ntxiv ib hnub, lossis tshem kev thauj, hu rau chaw ua haujlwm.",
          "Yog tshem kev thauj hnub ntawd, hu sai li sai tau kom tus tsav tsheb hloov tau txoj kev.",
        ],
        list: {
          label: "Yog xav hloov kev thauj, npaj cov no:",
          items: [
            "Tus neeg caij npe",
            "Hnub lossis cov hnub uas hloov",
            "Chaw nyob tshiab, yog qhov chaw tuaj nqa hloov",
            "Ib tus xov tooj uas peb hu tau koj hnub ntawd",
          ],
        },
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
      intro: "Golden Days feem ntau haum rau ib tug neeg laus uas:",
      items: [
        "Yog neeg laus nyob hauv tsev lossis nrog tsev neeg",
        "Xav tau kev pab, kev saib xyuas, lossis kev nrog nyob thaum nruab hnub",
        "Muaj mob uas tau txiaj ntsig ntawm kev tshuaj xyuas tsis tu ncua",
        "Koom tau hauv ib qhov kev pab cuam thaum nruab hnub ua pab pawg",
      ],
      note: "Kev tsim nyog txiav txim tom qab ua kev ntsuam xyuas, tsis yog hla xov tooj. Hu rau peb thiab peb yuav qhia kauj ruam tom ntej yog li cas.",
    },
    pays: {
      heading: "Leej twg them nyiaj",
      intro: "Cov tsev neeg feem ntau them ib txoj kev hauv qab no:",
      items: [
        {
          title: "Medi-Cal",
          text: "Peb txais Medi-Cal ua ke nrog insurance, tab sis tsis txais Medi-Cal ib leeg. Peb piav tau tias cov kauj ruam zoo li cas.",
        },
        {
          title: "Cov phiaj xwm saib xyuas kev noj qab haus huv (managed care)",
          text: "Qee cov phiaj xwm kev noj qab haus huv them rau cov kev pab cuam thaum nruab hnub. Peb yuav tshawb xyuas seb koj txoj phiaj xwm hais li cas.",
        },
        {
          title: "Them nyiaj ncaj qha",
          text: "Cov tsev neeg kuj them ncaj qha tau.",
        },
      ],
      note: "Tsis muaj dabtsi ntawm nplooj ntawv no yog lus cog tseg txog kev them lossis tus nqi. Hu rau peb kom paub xov xwm tam sim no txog koj li xwm txheej.",
    },
    bring: {
      heading: "Yuav coj dab tsi",
      intro: "Coj cov uas koj muaj. Peb yuav pab lwm yam.",
      items: [
        "Daim ntawv pov thawj muaj duab",
        "Daim npav insurance (koj coj nws ib leeg tau)",
        "Daim npav Medi-Cal (coj nrog koj daim npav insurance, tsis yog coj ib leeg)",
        "Koj tus kws kho mob lub npe thiab xov tooj",
        "Cov npe thiab xov tooj ntawm cov neeg hu thaum muaj xwm ceev",
        "Cov ntawv kho mob tshiab uas koj twb muaj",
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
        {
          title: "Kev ntsuam xyuas",
          text: "Peb pab neeg tshuaj xyuas keeb kwm kev noj qab haus huv, yam xav tau txhua hnub, thiab lub hom phiaj kom paub tseeb tias qhov kev pab cuam haum.",
        },
        {
          title: "Cov ntawv thiab insurance",
          text: "Peb sau cov foos kos npe nkag ua ke thiab daws cov lus nug txog insurance.",
        },
        {
          title: "Hnub thawj zaug",
          text: "Peb teem sij hawm, npaj kev thauj, thiab qhia koj tus neeg hlub rau cov neeg ua haujlwm thiab lwm tus neeg tuaj koom.",
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
      text: "Teb tsib lo lus nug luv luv thiab peb yuav qhia koj kauj ruam tom ntej. Siv kwv yees ib feeb.",
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
      description:
        "Teb tsib lo lus nug luv luv kom paub tias Golden Days hauv West Sacramento puas haum.",
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
        text: "Nws puas koom tau kev ua si ua pab pawg thaum nruab hnub, siv walker lossis wheelchair los tsis siv?",
        help: "Kev ua si ua pab pawg muaj kev tawm dag zog, suab paj nruag, kev ua si, thiab noj mov ua ke. Neeg koom raws nws li kev, thiab qee tus kuj xav tau kev kho mob thaum nruab hnub. Yog koj tsis paub tseeb tias nws yuav nyob tau hauv pawg, xaiv Tsis paub tseeb.",
      },
      {
        text: "Nws puas muaj insurance kev noj qab haus huv los ntawm lub tuam txhab insurance, muaj Medi-Cal los tsis muaj?",
        help: "Peb txais insurance, thiab Medi-Cal ua ke nrog insurance. Medi-Cal ib leeg tsis txaus. Yog koj tsis paub tseeb, xaiv Tsis paub tseeb.",
      },
      {
        text: "Nws puas muaj kws kho mob uas qhia tau cov ntawv kho mob tshiab?",
        help: "Peb thov cov ntawv kho mob tshiab ntawm nws tus kws kho mob, nrog rau xov xwm insurance. Yog koj tsis paub tseeb, xaiv Tsis paub tseeb.",
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
