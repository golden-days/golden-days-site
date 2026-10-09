/**
 * Tagalog (Filipino) text for the website. It has the same shape as `en.ts`, so
 * TypeScript reports any string that is missing. When you change wording in
 * `en.ts`, update the matching line here too.
 *
 * Machine-assisted translation: have a fluent Tagalog speaker read the whole
 * file before launch.
 */

import { phone, type Content } from "./en";

export const tl: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "Lumaktaw sa pangunahing nilalaman",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "Telepono",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "Email",
    addressLabel: "Address",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "Oras",
    hours: "Oras ng pasilidad: Lunes hanggang Biyernes, 8:00 n.u. hanggang 4:30 n.h.",
    programHours: "Oras ng serbisyo: Lunes hanggang Biyernes, 8:00 n.u. hanggang 2:00 n.h.",
    hoursNote:
      "Sarado kapag Sabado at Linggo. Sarado rin kapag Thanksgiving, Araw ng Pasko, Bagong Taon, at Ikaapat ng Hulyo.",
    mapTitle: "Mapa na nagpapakita ng lokasyon ng Golden Days Adult Day Health Care",
    directionsLinkLabel: "Kumuha ng direksyon",
    languagesLabel: "Mga wika",
    languagesLine: "Nagsasalita kami ng Ingles, Ruso, at Ukranyano, at may interpreter para sa Chinese.",
  },

  nav: {
    menuLabel: "Menu",
    closeLabel: "Isara",
    ariaLabel: "Pangunahing nabigasyon",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "Tungkol sa Amin" },
      { href: "/services", label: "Mga Serbisyo" },
      { href: "/transportation", label: "Transportasyon" },
      { href: "/qualify", label: "Kwalipikado ba Ako?" },
      { href: "/enrollment", label: "Pagpapatala" },
      { href: "/contact", label: "Makipag-ugnayan" },
    ],
  },

  buttons: {
    call: "Tawagan kami",
    callWithNumber: `Tawagan ang ${phone.display}`,
    scheduleTour: "Mag-iskedyul ng tour",
    doIQualify: "Kwalipikado ba Ako?",
    learnMore: "Alamin pa",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "Isang adult day health care center sa West Sacramento, California. Naglilingkod sa mga pamilya sa aming lugar mula pa noong 2003.",
    contactHeading: "Makipag-ugnayan sa amin",
    hoursHeading: "Oras",
    copyright: "Golden Days Adult Day Health Care. Lahat ng karapatan ay nakalaan.",
    privacyLabel: "Privacy",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Adult Day Health Care sa West Sacramento",
      description:
        "Ang Golden Days Adult Day Health Care ay isang day program para sa mga nasa hustong gulang sa West Sacramento, California. Tawagan kami o mag-iskedyul ng tour.",
    },
    hero: {
      heading: "Pangangalaga sa araw para sa mga nasa hustong gulang sa West Sacramento",
      intro:
        "Ang Golden Days ay isang day program para sa mga nasa hustong gulang, at para sa mga pamilyang nag-aalaga sa kanila.",
      photo: {
        kind: "building" as const,
        label: "Placeholder ng larawan - labas ng gusali",
        alt: "Harap ng Golden Days Adult Day Health Care Center, na may sunburst na karatula sa itaas ng bukas na pasukan at karatulang Welcome to Golden Days sa bintana.",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "Sino ang aming pinaglilingkuran",
      paragraphs: [
        "Malugod na tinatanggap ng Golden Days ang mga nasa hustong gulang na nakatira sa bahay at nangangailangan ng suporta, kasama, o pangangasiwa sa araw.",
        "Marami sa mga pumupunta sa amin ay kasama sa bahay ang isang kapamilyang nagtatrabaho, o nangangailangan lang ng pahinga sa loob ng linggo.",
        "Kung hindi kayo sigurado kung angkop ang Golden Days para sa inyong mahal sa buhay, tawagan kami. Masaya kaming makipag-usap, nang walang pamimilit.",
      ],
    },
    services: {
      heading: "Ang aming iniaalok",
      intro: "Ang isang araw sa Golden Days ay maaaring magsama ng alinman sa mga sumusunod.",
      linkLabel: "Tingnan ang lahat ng serbisyo",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Pangangalaga ng Nurse",
          text: "Sinusuri ng aming mga nurse ang pangangailangang pangkalusugan sa buong araw.",
        },
        {
          icon: "rehabilitation" as const,
          title: "Rehabilitasyon",
          text: "Mga sesyon ng therapy para sa lakas, balanse, at araw-araw na paggalaw.",
        },
        {
          icon: "nutrition" as const,
          title: "Nutrisyon",
          text: "Almusal at tanghalian araw-araw, na inihahanda ng kusinerong nagpaplano para sa pangangailangan ng bawat tao.",
        },
        {
          icon: "socialWork" as const,
          title: "Social Work",
          text: "Tulong sa pag-unawa sa mga benepisyo, papeles, at mga resource sa komunidad.",
        },
        {
          icon: "recreation" as const,
          title: "Libangan",
          text: "Musika, laro, crafts, ehersisyo, field trip, at oras na kasama ang ibang tao.",
        },
        {
          icon: "transportation" as const,
          title: "Transportasyon",
          text: "Sakay papunta at pauwi mula sa center sa mga araw ng programa.",
        },
      ],
    },
    transportation: {
      heading: "Bahagi ng pangangalaga ang pagpunta rito",
      paragraphs: [
        "Nag-aalok ang Golden Days ng sakay papunta at pauwi mula sa center para sa mga dumadalo sa programa, kasama ang mga gumagamit ng wheelchair o walker.",
        "Magkasama naming itinatakda sa inyong pamilya ang saklaw na oras ng sundo, at tinatawagan namin kayo kung may kailangang baguhin sa iskedyul.",
      ],
      linkLabel: "Basahin ang tungkol sa transportasyon",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Placeholder ng larawan - bus ng Golden Days",
        alt: "Isang puting bus ng Golden Days na nakaparada sa labas ng center, na bukas ang pinto ng pasahero.",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "Paano ang pagpapatala",
      intro: "Apat na hakbang, at tutulungan namin kayo sa bawat isa.",
      steps: [
        {
          title: "Tumawag o magpadala ng mensahe",
          text: "Ikuwento sa amin ang inyong mahal sa buhay at kung ano ang itsura ng kanilang mga araw ngayon.",
        },
        {
          title: "Bisitahin ang center",
          text: "Pumunta at tingnan ang pasilidad, makilala ang mga staff, at magtanong ng anumang gusto ninyo.",
        },
        {
          title: "Kumpletuhin ang assessment",
          text: "Sinusuri ng aming team ang kalusugan at pang-araw-araw na pangangailangan upang malaman kung angkop ang programa.",
        },
        {
          title: "Simulan ang pagdalo",
          text: "Pinagkakasunduan natin ang mga araw, inaayos ang sakay, at malugod naming tinatanggap ang inyong mahal sa buhay.",
        },
      ],
      linkLabel: "Tingnan ang buong gabay sa pagpapatala",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "Paano ang gastos?",
      text: "Tumatanggap kami ng insurance, at ng Medi-Cal kasama ng isang insurance plan. Maaari rin ang private pay. Tawagan kami at ipapaliwanag namin kung ano ang naaangkop sa inyong pamilya.",
    },
    trust: {
      text: "Naglilingkod sa mga pamilya sa West Sacramento mula pa noong 2003. Negosyong pag-aari ng pamilya mula noong 2007.",
      licenseText: "May lisensya mula sa California Department of Public Health. Numero ng lisensya 070000633.",
    },
    contact: {
      heading: "Makipag-usap sa amin",
      intro:
        "Magpadala ng mensahe at sasagutin namin kayo, o tumawag sa oras ng pasilidad.",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "Tungkol sa Golden Days",
      description:
        "Naglingkod na ang Golden Days Adult Day Health Care sa mga pamilya sa West Sacramento mula pa noong 2003, na may parehong may-ari mula noong 2007.",
    },
    heading: "Tungkol sa Golden Days",
    lead: "Bahagi na ng West Sacramento ang Golden Days Adult Day Health Care mula pa noong 2003. Ang parehong mga may-ari ang namamahala sa center mula noong 2007.",
    photo: {
      kind: "interior" as const,
      label: "Placeholder ng larawan - group photo ng mga staff",
      alt: "Placeholder na larawan na kapalit ng group photo ng mga staff ng Golden Days",
    },
    story: {
      heading: "Ang aming kuwento",
      paragraphs: [
        "Nagbukas ang Golden Days sa West Sacramento noong 2003 bilang isang lugar kung saan maaaring magpalipas ng araw ang mga nasa hustong gulang na may malapit na pangangalaga. Ang parehong mga may-ari ang namamahala sa center mula noong 2007.",
        "Sa paglipas ng mga taon, nakilala namin ang maraming pamilya sa aming lugar. May mga taong pumupunta sa amin ng ilang araw sa isang linggo sa loob ng maraming taon, at ang kanilang mga pamilya ay nagiging bahagi rin ng center.",
        "Mga 120 katao ang gumugugol ng araw sa amin, at naglalaan pa rin ng oras ang mga staff para kilalanin ang mga pangalan, gawain, at kung ano ang nagpapagaan ng pakiramdam ng bawat tao.",
      ],
    },
    values: {
      heading: "Ang mahalaga sa amin",
      items: [
        {
          title: "Paggalang muna",
          text: "Lahat ng pumupunta rito ay nasa hustong gulang, at ganoon namin sila itinuturing.",
        },
        {
          title: "Tuwirang sagot",
          text: "Ipinapaliwanag namin ang gastos, papeles, at iskedyul sa simpleng salita.",
        },
        {
          title: "Pare-parehong gawain",
          text: "Ang pamilyar na mga mukha at maayos na takbo ng araw ay nakatutulong para makapag-adjust ang mga tao.",
        },
        {
          title: "Laging may alam ang pamilya",
          text: "Tumatawag kami kapag may nagbago, at sinasagot namin ang telepono.",
        },
      ],
    },
    team: {
      heading: "Ang aming team",
      paragraphs: [
        "Kasama sa aming mga staff ang mga nurse, mga therapy staff, isang social worker, mga activity leader, mga driver, at mga staff sa kusina.",
        "Marami sa kanila ang ilang taon nang nagtatrabaho sa Golden Days at nagsasalita ng higit sa isang wika.",
      ],
    },
    center: {
      heading: "Ang center",
      paragraphs: [
        "Ang gusali ay may activity room, dining room, tahimik na mga silid pahingahan, therapy area, at mga accessible na banyo.",
        "May paradahan sa harap, at ang pasukan ay nasa antas ng lupa, walang hagdan.",
      ],
      photo: {
        kind: "interior" as const,
        label: "Placeholder ng larawan - dining room",
        alt: "Ang dining room ng Golden Days, na may mga bilog na mesang nakahanda para sa tanghalian at sariwang bulaklak sa mga mesa.",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    licensing: {
      heading: "May lisensya sa California",
      text: "May lisensya ang Golden Days mula sa California Department of Public Health bilang Adult Day Health Center, at may business license mula sa City of West Sacramento.",
      items: [
        "Lisensya ng estado: California Department of Public Health, Adult Day Health Center, numero ng lisensya 070000633",
        "Business license ng City of West Sacramento, numero 12046",
      ],
    },
    cta: {
      heading: "Pumunta at tingnan ninyo mismo",
      text: "Mga kalahating oras lang ang pagbisita. Tawagan kami at hahanap tayo ng oras.",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Mga Serbisyo",
      description:
        "Pangangalaga ng nurse, rehabilitasyon, nutrisyon, social work, libangan, at transportasyon sa Golden Days sa West Sacramento.",
    },
    heading: "Mga Serbisyo",
    lead: "Ang isang araw sa Golden Days ay binuo sa anim na uri ng suporta. Pinipili ng mga pamilya ang mga araw na akma sa kanila.",
    items: [
      {
        icon: "nursing" as const,
        title: "Pangangalaga ng Nurse",
        summary: "Pagsusuri ng kalusugan at mga gamot mula sa aming mga nurse sa buong araw.",
        details: [
          "Sinusuri ng mga nurse ang vital signs at blood glucose (asukal sa dugo).",
          "Ibinibigay ng mga nurse ang mga gamot ayon sa iskedyul sa oras ng programa.",
          "Kung may magbago sa kalusugan, tinatawagan namin ang pamilya at ang opisina ng doktor.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Rehabilitasyon",
        summary: "Mga ehersisyo at therapy na sumusuporta sa lakas, balanse, at paggalaw.",
        details: [
          "Ang mga therapy staff ay nagtatrabaho sa paglalakad, balanse, at pang-araw-araw na paggalaw, at pinaplano ang mga sesyon ayon sa nais abutin ng bawat tao.",
          "May group exercise halos tuwing umaga para sa mga gustong sumali.",
          "May lisensyadong therapist na nagbibigay ng massage therapy at paraffin wax treatment, na kasama para sa mga kalahok nang walang dagdag na bayad.",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Nutrisyon",
        summary: "Almusal at tanghalian sa bawat araw ng programa, na inihahanda ng kusinerong nagpaplano para sa pangangailangan ng bawat tao.",
        details: [
          "Ang almusal at tanghalian ay inihahain sa bawat araw ng programa, at nagpapalit-palit ang mga pagkain.",
          "Isang espesyalistang kusinero ang nagpaplano ng mga pagkain ayon sa pangangailangan ng bawat tao.",
          "Sabihin sa amin ang tungkol sa pangangailangan sa pagkain, tulad ng allergy, hirap sa paglunok (maaari naming tadtarin ang pagkain), o vegetarian na diyeta.",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Social Work",
        summary: "Tulong sa mga benepisyo, papeles, at paghahanap ng mga serbisyo sa labas ng center.",
        details: [
          "Tinutulungan ng aming social worker ang mga pamilya na maunawaan ang mga form at mga tanong tungkol sa coverage.",
          "Maaari namin kayong ituro sa mga lokal na serbisyo tulad ng tulong sa bahay o mga programa sa pagkain.",
          "May mga family meeting kapag kailangang baguhin ang plano.",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Libangan",
        summary: "Musika, laro, crafts, banayad na ehersisyo, at kasama sa buong araw.",
        details: [
          "Mga pang-araw-araw na aktibidad na maaaring salihan o laktawan, tulad ng musika, laro, crafts, at ehersisyo.",
          "Ang mga field trip ay hanggang tatlong beses sa isang linggo sa karaniwan, nang walang dagdag na bayad. Maaaring sumama ang mga may kahirapan sa paggalaw.",
          "Sabay-sabay naming ipinagdiriwang ang mga holiday at kaarawan.",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Transportasyon",
        summary: "Sakay papunta at pauwi mula sa center sa mga araw ng programa.",
        details: [
          "May sakay sa loob ng aming service area.",
          "Kayang isakay ng aming mga sasakyan ang mga gumagamit ng wheelchair o walker.",
          "Lumalapit ang bus hangga't maaari sa pinto. Sa bahay, tinutulungan ng isang tagapag-alaga ang kalahok na makasakay sa bus. Sa center, tinutulungan ng mga driver ang mga kalahok na makababa sa bus.",
        ],
      },
    ],
    dayHeading: "Ano ang itsura ng isang araw",
    daySchedule: [
      { time: "8:30 n.u.", text: "Pagsalubong" },
      { time: "9:00 n.u.", text: "Ehersisyo sa Rehabilitasyon" },
      { time: "9:30 n.u.", text: "Almusal / Balita sa TV" },
      { time: "10:00 n.u.", text: "Edukasyon sa Kalusugan / Individual na Physical Therapy (Lun, Mar, Biy)" },
      { time: "10:30 n.u.", text: "Ehersisyo sa Rehabilitasyon / Walking Club / Field Trip" },
      { time: "11:00 n.u.", text: "Mga Ehersisyo sa Rehabilitasyon / Group Therapy" },
      { time: "11:30 n.u.", text: "Ehersisyo sa Rehabilitasyon / Grupo sa Memorya / Larong Aktibidad / Spiritual na Grupo" },
      { time: "12:00 n.h.", text: "Mga Bisita at Tagapagsalita / Individual na Physical Therapy (Lun, Mar, Biy)" },
      { time: "12:30 n.h.", text: "Individual na Occupational Therapy (Miy, Biy)" },
      { time: "1:00 n.h.", text: "Tanghalian" },
      { time: "1:30 n.h.", text: "Pelikula / Talakayan" },
    ],
    rotatingHeading: "Mga umiikot na aktibidad",
    rotatingIntro: "Umiikot ang mga aktibidad sa buong linggo, at ang ilan, tulad ng bingo, ay higit sa isang beses sa isang linggo. Tawagan kami para sa kasalukuyang iskedyul.",
    rotatingActivities: [
      "Grupo sa Memorya",
      "Klase sa Ingles",
      "Bingo",
    ],
    cta: {
      heading: "Hindi sigurado kung alin ang kailangan ng inyong mahal sa buhay?",
      text: "Tawagan kami. Magtatanong kami ng ilang bagay at bibigyan namin kayo ng tapat na sagot.",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Transportasyon",
      description:
        "Sakay papunta sa Golden Days sa West Sacramento, kasama ang mga sasakyang accessible sa wheelchair.",
    },
    heading: "Transportasyon",
    lead: "Hindi dapat maging mahirap ang pagpunta sa center. Nag-aalok ang Golden Days ng sakay papunta at pauwi mula sa programa para sa mga nangangailangan nito.",
    photo: {
      kind: "bus" as const,
      label: "Placeholder ng larawan - loob ng bus ng Golden Days",
      alt: "Loob ng bus ng Golden Days: mga hanay ng asul na upuan sa magkabilang gilid ng malapad na pasilyo, na may mga simbolo ng wheelchair accessibility sa dingding.",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "Service area",
        paragraphs: [
          "Nagbibigay kami ng sakay sa West Sacramento at sa mga kalapit na lugar.",
          "Maaari pa ring magawa ang ilang address sa labas ng lugar na iyon depende sa araw at sa ruta. Kung wala sa listahan ang inyong lugar, tawagan kami at ibigay ang inyong address, at titingnan namin.",
        ],
        list: {
          label: "Mga lugar na karaniwan naming pinaglilingkuran:",
          items: [
            "West Sacramento",
            "Bryte at Broderick",
            "Southport",
            "Mga bahagi ng Sacramento malapit sa ilog",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "Sundo at hatid",
        paragraphs: [
          "Ang bawat pasahero ay may saklaw na oras ng sundo sa halip na eksaktong minuto, dahil nababago ng trapiko at ng ibang pasahero ang ruta.",
          "Lumalapit kami hangga't maaari sa pinto. Sa sundo, tinutulungan ng tagapag-alaga ng kalahok na makasakay sa bus. Hindi tumutulong ang mga driver sa pagsakay ng mga kalahok, at hindi nila kayang buhatin ang sinuman papasok sa bus.",
          "Sa center, maaaring tulungan ng mga driver ang mga kalahok na makababa sa bus, at handa ang aming mga tagapag-alaga rito na salubungin sila. Hindi pumupunta sa mga bahay ng tao ang aming mga tagapag-alaga.",
          "Kung nahuhuli ang bus, tinatawagan namin ang pamilya.",
        ],
      },
      {
        heading: "Access para sa wheelchair at may kahirapan sa paggalaw",
        paragraphs: [
          "Kayang isakay ng aming mga sasakyan ang mga gumagamit ng wheelchair, walker, o tungkod.",
          "Ikinakabit nang maayos ang mga wheelchair bago umandar ang sasakyan, at may seat belt ang bawat pasahero.",
          "Ang aming mga bus ay may permit mula sa California Public Utilities Commission.",
          "Sabihin sa amin ang tungkol sa oxygen, paglilipat, o anumang dapat malaman ng driver, at paghahandaan namin ito.",
        ],
      },
      {
        heading: "Paano mag-ayos o magbago ng sakay ang mga pamilya",
        paragraphs: [
          "Inaayos ang sakay kapag nagpatala ang inyong mahal sa buhay, at pareho ang iskedyul sa bawat linggo.",
          "Para baguhin ang address ng sundo, magdagdag ng araw, o magkansela ng sakay, tawagan ang opisina.",
          "Para sa pagkansela sa mismong araw, tumawag sa lalong madaling panahon para maiayos ng driver ang ruta.",
        ],
        list: {
          label: "Para magbago ng sakay, ihanda ang mga ito:",
          items: [
            "Pangalan ng pasahero",
            "Ang petsa o mga petsang magbabago",
            "Ang bagong address, kung lilipat ang lugar ng sundo",
            "Numero ng telepono kung saan namin kayo makokontak sa araw na iyon",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Placeholder ng larawan - wheelchair lift sa bus ng Golden Days",
      alt: "Ang wheelchair lift sa likod ng bus ng Golden Days, na nakataas ang platform sa loob ng nakabukas na pinto sa likod.",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "May tanong tungkol sa sundo?",
      text: "Tawagan ang opisina at hingin ang iskedyul ng transportasyon.",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Pagpapatala",
      description:
        "Sino ang kwalipikado sa Golden Days, sino ang nagbabayad, ano ang dadalhin, at ang mga hakbang sa pagpapatala sa West Sacramento.",
    },
    heading: "Pagpapatala",
    lead: "Ang pagpapatala ay ilang pag-uusap lang, hindi bundok ng papeles. Ganito ang proseso.",
    qualifies: {
      heading: "Sino ang kwalipikado",
      intro: "Karaniwang angkop ang Golden Days sa isang nasa hustong gulang na:",
      items: [
        "Nasa hustong gulang na nakatira sa bahay o kasama ang pamilya",
        "Nangangailangan ng tulong, pangangasiwa, o kasama sa araw",
        "May kondisyong pangkalusugan na nakikinabang sa regular na pagsusuri",
        "Kayang makilahok sa isang group day program",
      ],
      note: "Napagpapasyahan ang eligibility pagkatapos ng assessment, hindi sa telepono. Tawagan kami at sasabihin namin kung ano ang susunod na hakbang.",
    },
    pays: {
      heading: "Sino ang nagbabayad",
      intro: "Karaniwang nagbabayad ang mga pamilya sa isa sa mga paraang ito:",
      items: [
        {
          title: "Medi-Cal",
          text: "Tumatanggap kami ng Medi-Cal kasama ng isang insurance plan, ngunit hindi ng Medi-Cal lamang. Maipapaliwanag namin kung paano ang proseso.",
        },
        {
          title: "Managed care plan",
          text: "May ilang health plan na sumasagot sa day program. Titingnan namin kung ano ang sinasabi ng inyong plan.",
        },
        {
          title: "Private pay",
          text: "Maaari ring direktang magbayad ang mga pamilya.",
        },
      ],
      note: "Walang nasa pahinang ito na pangako ng coverage o presyo. Tawagan kami para sa kasalukuyang impormasyon tungkol sa inyong sitwasyon.",
    },
    bring: {
      heading: "Ano ang dadalhin",
      intro: "Dalhin ang mayroon kayo. Tutulungan namin kayo sa iba pa.",
      items: [
        "ID na may litrato",
        "Insurance card (maaari itong dalhin nang mag-isa)",
        "Medi-Cal card (dalhin ito kasama ng inyong insurance card, hindi nang mag-isa)",
        "Pangalan at numero ng telepono ng inyong doktor",
        "Mga pangalan at numero ng emergency contact",
        "Anumang kamakailang medikal na papeles na mayroon na kayo",
      ],
    },
    steps: {
      heading: "Ang mga hakbang",
      items: [
        {
          title: "Tumawag o magpadala ng mensahe",
          text: "Ikuwento sa amin ang inyong mahal sa buhay, ang mga araw na inaasahan ninyo, at anumang alalahanin. Mga sampung minuto ang tawag na ito.",
        },
        {
          title: "Libutin ang center",
          text: "Bumisita sa oras ng programa, mas mabuti bago mag-1:30 n.h., para makita ninyo ang karaniwang araw. Isama ang inyong mahal sa buhay kung komportable siya.",
        },
        {
          title: "Assessment",
          text: "Sinusuri ng aming team ang kasaysayan ng kalusugan, pang-araw-araw na pangangailangan, at mga layunin para matiyak na angkop ang programa.",
        },
        {
          title: "Papeles at coverage",
          text: "Magkasama naming pupunan ang mga form sa pagpapatala at aayusin ang mga tanong tungkol sa coverage.",
        },
        {
          title: "Unang araw",
          text: "Itinatakda namin ang iskedyul, inaayos ang sakay, at ipinakikilala ang inyong mahal sa buhay sa mga staff at sa ibang kalahok.",
        },
      ],
    },
    faq: {
      heading: "Mga karaniwang tanong",
      items: [
        {
          question: "Ilang araw sa isang linggo maaaring pumunta ang aking mahal sa buhay?",
          answer: "Mula isang araw hanggang limang araw sa isang linggo ang iskedyul. Itatakda namin ito kasama kayo.",
        },
        {
          question: "Gaano katagal ang pagpapatala?",
          answer: "Depende ito sa papeles at coverage. Bibigyan namin kayo ng makatotohanang timeline sa unang tawag.",
        },
        {
          question: "Maaari ba naming subukan muna?",
          answer: "Magsimula sa isang tour. Itanong sa amin ang tungkol sa trial day kapag bumisita kayo.",
        },
        {
          question: "Paano kung ayaw pumunta ng aking mahal sa buhay?",
          answer: "Karaniwan iyan. Madalas nakatutulong ang isang tour at maikling unang linggo. Ilang beses na naming ginawa ito.",
        },
      ],
    },
    qualifyPrompt: {
      heading: "Hindi sigurado kung angkop ito?",
      text: "Sagutan ang limang maikling tanong at ituturo namin kayo sa susunod na hakbang. Mga isang minuto lang ito.",
    },
    cta: {
      heading: "Handa na bang magsimula?",
      text: "Tawagan kami o mag-iskedyul ng tour. Walang bayad ang magtanong.",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "Kwalipikado ba Ako?",
      description:
        "Sagutan ang limang maikling tanong para malaman kung angkop ang Golden Days sa West Sacramento.",
    },
    intro: {
      heading: "Alamin kung angkop ang Golden Days para sa inyo o sa inyong mahal sa buhay.",
      reassurance:
        "Mga isang minuto lang ito. Hindi ito aplikasyon at hindi pinal na desisyon. Hindi namin hinihingi ang inyong pangalan o anumang impormasyon tungkol sa kalusugan, at nananatili sa pahinang ito ang inyong mga sagot. Hindi namin ito kinokolekta o iniimbak.",
      startLabel: "Simulan ang mga tanong",
    },
    progressLabel: "Tanong {current} ng {total}",
    progressBarLabel: "Gaano na kayo kalayo",
    backLabel: "Bumalik",
    helpLabel: "Ano ang ibig sabihin nito?",
    answers: {
      yes: "Oo",
      no: "Hindi",
      notSure: "Hindi sigurado",
    },
    answerGroupLabel: "Pumili ng isang sagot",
    questions: [
      {
        text: "18 taong gulang o mas matanda na ba ang tao?",
        help: "Ang Golden Days ay programa para sa mga nasa hustong gulang. Kung nagtatanong kayo para sa magulang o asawa, sagutin para sa taong iyon.",
      },
      {
        text: "Nakatira ba sila sa West Sacramento o sa kalapit na lugar na aming pinaglilingkuran?",
        help: "Pinaglilingkuran namin ang West Sacramento at mga kalapit na lugar, kabilang ang Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova, at Antelope. Kung hindi kayo sigurado, piliin ang Hindi sigurado at titingnan namin.",
      },
      {
        text: "Kaya ba nilang makilahok sa mga group activity sa araw, may walker o wheelchair man o wala?",
        help: "Kasama sa mga group activity ang ehersisyo, musika, laro, at sabay-sabay na pagkain. Nakikilahok ang mga tao sa sarili nilang paraan, at may ilan ding nangangailangan ng medikal na atensyon sa araw. Kung hindi kayo sigurado na kakayanin nila ang group setting, piliin ang Hindi sigurado.",
      },
      {
        text: "May health insurance ba sila mula sa isang insurance provider, may Medi-Cal man o wala?",
        help: "Tumatanggap kami ng insurance, at ng Medi-Cal kasama ng insurance. Hindi sapat ang Medi-Cal lamang. Kung hindi kayo sigurado, piliin ang Hindi sigurado.",
      },
      {
        text: "May doktor ba sila na maaaring magbahagi ng kamakailang medikal na papeles?",
        help: "Humihingi kami ng kamakailang medikal na papeles mula sa kanilang doktor, kasama ang kanilang impormasyon sa insurance. Kung hindi kayo sigurado, piliin ang Hindi sigurado.",
      },
    ],
    results: {
      announcement: "Narito ang inyong mga resulta.",
      goodFit: {
        heading: "Magandang balita. Angkop kayo sa Golden Days.",
        text: "Tawagan kami o mag-iskedyul ng tour, at tutulungan namin kayo sa susunod na mga hakbang.",
      },
      notFit: {
        heading: "Maaaring hindi angkop ang Golden Days.",
        text: "Salamat sa pagsuri. Kung nais ninyong pag-usapan ito, mangyaring tawagan kami at malugod kaming tutulong.",
      },
      unsure: {
        heading: "Hindi pa kami sigurado, at ayos lang iyon.",
        text: "Maraming pamilya ang hindi sigurado sa simula. Tawagan kami at sabay nating pag-aaralan ang inyong sitwasyon. Maaaring magbago ang ilang sagot kung may tamang papeles o coverage. Kung Oo ang bawat sagot, angkop kayo.",
      },
      enrollmentLinkLabel: "Basahin kung paano ang pagpapatala",
      startOverLabel: "Magsimulang muli",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "Makipag-ugnayan",
      description:
        "Tawagan ang Golden Days Adult Day Health Care sa West Sacramento, magpadala ng mensahe, o mag-iskedyul ng tour.",
    },
    heading: "Makipag-ugnayan sa amin",
    lead: "Tawagan kami sa oras ng pasilidad, o magpadala ng mensahe at sasagutin namin kayo.",
    detailsHeading: "Bumisita o tumawag",
    directionsHeading: "Hanapin kami",
    directionsText:
      "Ang pasukan ay nasa antas ng lupa at ang paradahan ay nasa harap ng gusali.",
    photo: {
      kind: "building" as const,
      label: "Placeholder ng larawan - pasukan ng gusali",
      alt: "Ang pasukan ng Golden Days sa 1215 Merkley Ave, na may karatula sa itaas ng pinto at mga cone sa tabi ng daanan.",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "Mag-iskedyul ng tour",
    tourText:
      "Ginaganap ang mga tour sa oras ng programa, mas mabuti bago mag-1:30 n.h., para makita ninyo ang karaniwang araw. Tawagan kami o gamitin ang form at sabihing gusto ninyong mag-tour.",
  },

  form: {
    heading: "Magpadala ng mensahe sa amin",
    responseTime: "Tatawagan kayo ng isang miyembro ng aming team sa loob ng isang araw ng trabaho.",
    callAlternativeLead: "Mas gusto bang makipag-usap?",
    callAlternativeLinkPrefix: "Tawagan kami sa",
    medicalNote: "Mangyaring huwag maglagay ng medikal na impormasyon sa form na ito.",
    fields: {
      name: { label: "Ang inyong pangalan", placeholder: "Pangalan at apelyido" },
      phone: { label: "Numero ng telepono", placeholder: "(916) 555-0123" },
      email: { label: "Email (opsyonal)", placeholder: "you@example.com" },
      message: {
        label: "Paano kami makatutulong? (opsyonal)",
        placeholder: "Ikuwento sa amin kung para kanino ang pangangalaga.",
      },
      honeypot: { label: "Iwanang blangko ang field na ito" },
    },
    required: "Kailangan",
    submit: "Ipadala ang mensahe",
    submitting: "Ipinapadala...",
    successHeading: "Salamat. Naipadala na ang inyong mensahe.",
    successText:
      "Sasagutin namin kayo sa oras ng pasilidad. Kung kailangan ninyo ng mas mabilis na sagot, mangyaring tawagan kami.",
    successAgain: "Magpadala ng isa pang mensahe",
    errorHeading: "Hindi naipadala ang inyong mensahe.",
    errorText: "Pakisubukang muli, o tawagan na lang kami.",
    notConfiguredHeading: "Hindi pa nakakonekta ang message form.",
    notConfiguredText:
      "Walang nakatakdang address ng form ang site na ito, kaya walang naipadala. Itakda ang NEXT_PUBLIC_FORM_ENDPOINT sa isang Formspree address para paganahin ang form. Sa ngayon, mangyaring tawagan kami.",
    validation: {
      name: "Pakilagay ang inyong pangalan.",
      phone: "Pakilagay ang numero ng telepono na maaari naming tawagan.",
    },
  },

  // ------------------------------------------------------------- Privacy ---
  privacy: {
    meta: {
      title: "Privacy",
      description:
        "Ang ginagawa at hindi ginagawa ng website ng Golden Days sa inyong impormasyon.",
    },
    heading: "Privacy",
    lead: "Ipinapaliwanag ng pahinang ito sa simpleng salita kung ano ang ginagawa ng website na ito sa inyong impormasyon.",
    updated: "Huling na-update: Oktubre 2026",
    sections: [
      {
        heading: "Kung magpapadala kayo ng mensahe",
        paragraphs: [
          "Hinihingi ng contact form ang inyong pangalan at numero ng telepono. Opsyonal ang inyong email address at mensahe. Ginagamit lang namin ang ipinapadala ninyo para sagutin kayo. Hindi namin ito ibinebenta.",
          "Ang mga mensahe ay inihahatid sa email ng aming center ng Formspree, isang serbisyong humahawak ng mga form sa website.",
          "Mangyaring huwag maglagay ng impormasyong pangkalusugan o medikal sa form. Tawagan na lang kami.",
        ],
      },
      {
        heading: "Ang mga tanong na “Kwalipikado ba Ako?”",
        paragraphs: [
          "Nananatili sa inyong browser ang inyong mga sagot habang bukas ang pahina. Hindi namin ito kinokolekta, ipinapadala, o sine-save.",
        ],
      },
      {
        heading: "Bilang ng bumibisita",
        paragraphs: [
          "Gumagamit kami ng Vercel Analytics para bilangin ang mga bisita. Itinatala nito kung aling mga pahina ang tiningnan, ang bansa, ang uri ng device at browser, at kung aling website ang nagdala sa bisita. Hindi ito gumagamit ng cookies, hindi nagpapakita ng ads, at hindi kayo sinusundan sa ibang website.",
        ],
      },
      {
        heading: "Mga mapa at cookies",
        paragraphs: [
          "Ang home page at ang contact page ay may Google Map. Kapag nag-load ang mapa, maaaring matanggap ng Google ang inyong IP address at maaaring maglagay ng cookies, ayon sa sariling privacy policy ng Google. Walang ibang cookies na inilalagay ang website na ito mismo.",
        ],
      },
      {
        heading: "Hindi namin ibinebenta ang inyong impormasyon",
        paragraphs: [
          "Hindi namin ibinebenta ang inyong impormasyon o ibinabahagi para sa advertising.",
        ],
      },
      {
        heading: "Mga tanong o kahilingan",
        paragraphs: [
          "Para hilingin sa amin na burahin ang mensaheng ipinadala ninyo, o kung may tanong kayo tungkol sa pahinang ito, tawagan kami o magpadala ng email. Nasa ibaba ng bawat pahina ang aming numero ng telepono at email.",
          "Kung may babaguhin sa ginagawa ng website na ito sa impormasyon, ia-update namin ang pahinang ito.",
        ],
      },
    ],
  },

  language: {
    label: "Wika",
  },

  a11y: {
    stepLabel: "Hakbang {number}: ",
  },

  notFound: {
    metaTitle: "Hindi nahanap ang pahina",
    heading: "Hindi namin mahanap ang pahinang iyon",
    text: "Maaaring nailipat ang pahina. Subukan ang menu sa itaas ng screen, o tawagan kami at tutulungan namin kayo.",
    homeLabel: "Pumunta sa home page",
  },

  photoPlaceholderNote: "Placeholder na larawan. Palitan ng tunay na litrato bago ang paglulunsad.",
};
