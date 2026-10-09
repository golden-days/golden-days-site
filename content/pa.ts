/**
 * Punjabi (Gurmukhi) text for the website. It has the same shape as `en.ts`, so
 * TypeScript reports any string that is missing. When you change wording in
 * `en.ts`, update the matching line here too.
 *
 * Machine-assisted translation: have a fluent Punjabi speaker read the whole
 * file before launch.
 */

import { phone, type Content } from "./en";

export const pa: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "ਮੁੱਖ ਸਮੱਗਰੀ 'ਤੇ ਜਾਓ",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "ਫ਼ੋਨ",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "ਈਮੇਲ",
    addressLabel: "ਪਤਾ",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "ਸਮਾਂ",
    hours: "ਕੇਂਦਰ ਦਾ ਸਮਾਂ: ਸੋਮਵਾਰ ਤੋਂ ਸ਼ੁੱਕਰਵਾਰ, ਸਵੇਰੇ 8:00 ਤੋਂ ਸ਼ਾਮ 4:30 ਵਜੇ ਤੱਕ",
    programHours: "ਸੇਵਾ ਦਾ ਸਮਾਂ: ਸੋਮਵਾਰ ਤੋਂ ਸ਼ੁੱਕਰਵਾਰ, ਸਵੇਰੇ 8:00 ਤੋਂ ਦੁਪਹਿਰ 2:00 ਵਜੇ ਤੱਕ",
    hoursNote:
      "ਸ਼ਨੀਵਾਰ ਅਤੇ ਐਤਵਾਰ ਬੰਦ ਹੈ। ਥੈਂਕਸਗਿਵਿੰਗ, ਕ੍ਰਿਸਮਸ ਦੇ ਦਿਨ, ਨਵੇਂ ਸਾਲ ਦੇ ਦਿਨ ਅਤੇ ਚਾਰ ਜੁਲਾਈ ਨੂੰ ਵੀ ਬੰਦ ਰਹਿੰਦਾ ਹੈ।",
    mapTitle: "Golden Days Adult Day Health Care ਦੀ ਥਾਂ ਦਿਖਾਉਂਦਾ ਨਕਸ਼ਾ",
    directionsLinkLabel: "ਰਸਤਾ ਦੇਖੋ",
    // TODO: translate the English text below before turning this language on.
    languagesLabel: "Languages",
    languagesLine: "We speak English, Russian, and Ukrainian, and a Chinese interpreter is available.",
  },

  nav: {
    menuLabel: "ਮੀਨੂ",
    closeLabel: "ਬੰਦ ਕਰੋ",
    ariaLabel: "ਮੁੱਖ ਨੈਵੀਗੇਸ਼ਨ",
    links: [
      { href: "/", label: "ਮੁੱਖ ਪੰਨਾ" },
      { href: "/about", label: "ਸਾਡੇ ਬਾਰੇ" },
      { href: "/services", label: "ਸੇਵਾਵਾਂ" },
      { href: "/transportation", label: "ਆਵਾਜਾਈ" },
      { href: "/qualify", label: "ਕੀ ਮੈਂ ਯੋਗ ਹਾਂ?" },
      { href: "/enrollment", label: "ਦਾਖ਼ਲਾ" },
      { href: "/contact", label: "ਸੰਪਰਕ" },
    ],
  },

  buttons: {
    call: "ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ",
    callWithNumber: `ਫ਼ੋਨ ਕਰੋ ${phone.display}`,
    scheduleTour: "ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ",
    doIQualify: "ਕੀ ਮੈਂ ਯੋਗ ਹਾਂ?",
    learnMore: "ਹੋਰ ਜਾਣੋ",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "West Sacramento, ਕੈਲੀਫੋਰਨੀਆ ਵਿੱਚ ਬਾਲਗਾਂ ਲਈ ਦਿਨ ਵੇਲੇ ਦੀ ਸਿਹਤ ਸੰਭਾਲ ਦਾ ਕੇਂਦਰ। 2003 ਤੋਂ ਸਥਾਨਕ ਪਰਿਵਾਰਾਂ ਦੀ ਸੇਵਾ ਵਿੱਚ।",
    contactHeading: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    hoursHeading: "ਸਮਾਂ",
    copyright: "Golden Days Adult Day Health Care. ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
    privacyLabel: "Privacy",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "West Sacramento ਵਿੱਚ ਬਾਲਗਾਂ ਲਈ ਦਿਨ ਦੀ ਸਿਹਤ ਸੰਭਾਲ",
      description:
        "Golden Days Adult Day Health Care West Sacramento, ਕੈਲੀਫੋਰਨੀਆ ਵਿੱਚ ਬਾਲਗਾਂ ਲਈ ਦਿਨ ਦਾ ਪ੍ਰੋਗਰਾਮ ਹੈ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ।",
    },
    hero: {
      heading: "West Sacramento ਵਿੱਚ ਬਾਲਗਾਂ ਲਈ ਦਿਨ ਵੇਲੇ ਦੀ ਸੰਭਾਲ",
      intro:
        "Golden Days ਬਾਲਗਾਂ ਲਈ ਦਿਨ ਦਾ ਪ੍ਰੋਗਰਾਮ ਹੈ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੀ ਸੰਭਾਲ ਕਰਨ ਵਾਲੇ ਪਰਿਵਾਰਾਂ ਲਈ ਵੀ।",
      photo: {
        kind: "building" as const,
        label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - ਇਮਾਰਤ ਦਾ ਬਾਹਰਲਾ ਹਿੱਸਾ",
        alt: "Golden Days Adult Day Health Care Center ਦਾ ਅਗਲਾ ਹਿੱਸਾ, ਖੁੱਲ੍ਹੇ ਦਰਵਾਜ਼ੇ ਦੇ ਉੱਪਰ ਸੂਰਜ ਵਾਲਾ ਬੋਰਡ ਅਤੇ ਖਿੜਕੀ ਵਿੱਚ Welcome to Golden Days ਦਾ ਬੋਰਡ।",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "ਅਸੀਂ ਕਿਨ੍ਹਾਂ ਦੀ ਸੇਵਾ ਕਰਦੇ ਹਾਂ",
      paragraphs: [
        "Golden Days ਉਨ੍ਹਾਂ ਬਾਲਗਾਂ ਦਾ ਸਵਾਗਤ ਕਰਦਾ ਹੈ ਜੋ ਘਰ ਵਿੱਚ ਰਹਿੰਦੇ ਹਨ ਅਤੇ ਦਿਨ ਵੇਲੇ ਸਹਾਰੇ, ਸੰਗਤ ਜਾਂ ਨਿਗਰਾਨੀ ਦੀ ਲੋੜ ਮਹਿਸੂਸ ਕਰਦੇ ਹਨ।",
        "ਸਾਡੇ ਕੋਲ ਆਉਣ ਵਾਲੇ ਬਹੁਤ ਸਾਰੇ ਲੋਕ ਅਜਿਹੇ ਪਰਿਵਾਰਕ ਮੈਂਬਰ ਨਾਲ ਰਹਿੰਦੇ ਹਨ ਜੋ ਨੌਕਰੀ ਕਰਦਾ ਹੈ, ਜਾਂ ਜਿਸ ਨੂੰ ਹਫ਼ਤੇ ਦੌਰਾਨ ਬੱਸ ਥੋੜ੍ਹੇ ਆਰਾਮ ਦੀ ਲੋੜ ਹੈ।",
        "ਜੇ ਤੁਹਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ ਕਿ Golden Days ਤੁਹਾਡੇ ਪਿਆਰੇ ਲਈ ਠੀਕ ਹੈ ਜਾਂ ਨਹੀਂ, ਤਾਂ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ। ਅਸੀਂ ਬਿਨਾਂ ਕਿਸੇ ਦਬਾਅ ਦੇ ਖੁਸ਼ੀ ਨਾਲ ਗੱਲ ਕਰਾਂਗੇ।",
      ],
    },
    services: {
      heading: "ਅਸੀਂ ਕੀ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ",
      intro: "Golden Days ਵਿੱਚ ਇੱਕ ਦਿਨ ਵਿੱਚ ਹੇਠ ਲਿਖੀਆਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਚੀਜ਼ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀ ਹੈ।",
      linkLabel: "ਸਾਰੀਆਂ ਸੇਵਾਵਾਂ ਦੇਖੋ",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "ਨਰਸਿੰਗ ਸੰਭਾਲ",
          text: "ਸਾਡਾ ਨਰਸਿੰਗ ਸਟਾਫ਼ ਦਿਨ ਦੌਰਾਨ ਸਿਹਤ ਦੀਆਂ ਲੋੜਾਂ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ।",
        },
        {
          icon: "rehabilitation" as const,
          title: "ਮੁੜ-ਵਸੇਬਾ",
          text: "ਤਾਕਤ, ਸੰਤੁਲਨ ਅਤੇ ਰੋਜ਼ਾਨਾ ਚੱਲਣ-ਫਿਰਨ ਵਿੱਚ ਮਦਦ ਲਈ ਥੈਰੇਪੀ ਦੇ ਸੈਸ਼ਨ।",
        },
        {
          icon: "nutrition" as const,
          title: "ਖੁਰਾਕ",
          text: "ਹਰ ਰੋਜ਼ ਨਾਸ਼ਤਾ ਅਤੇ ਦੁਪਹਿਰ ਦਾ ਖਾਣਾ, ਜੋ ਇੱਕ ਰਸੋਈਆ ਹਰ ਵਿਅਕਤੀ ਦੀਆਂ ਲੋੜਾਂ ਮੁਤਾਬਕ ਬਣਾਉਂਦਾ ਹੈ।",
        },
        {
          icon: "socialWork" as const,
          title: "ਸਮਾਜਿਕ ਕਾਰਜ",
          text: "ਲਾਭਾਂ, ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਭਾਈਚਾਰੇ ਦੇ ਸਾਧਨਾਂ ਨੂੰ ਸਮਝਣ ਵਿੱਚ ਮਦਦ।",
        },
        {
          icon: "recreation" as const,
          title: "ਮਨੋਰੰਜਨ",
          text: "ਸੰਗੀਤ, ਖੇਡਾਂ, ਦਸਤਕਾਰੀ, ਕਸਰਤ, ਸੈਰ-ਸਪਾਟੇ ਅਤੇ ਹੋਰ ਲੋਕਾਂ ਨਾਲ ਸਮਾਂ।",
        },
        {
          icon: "transportation" as const,
          title: "ਆਵਾਜਾਈ",
          text: "ਪ੍ਰੋਗਰਾਮ ਵਾਲੇ ਦਿਨਾਂ ਵਿੱਚ ਕੇਂਦਰ ਆਉਣ-ਜਾਣ ਲਈ ਸਵਾਰੀ।",
        },
      ],
    },
    transportation: {
      heading: "ਇੱਥੇ ਪਹੁੰਚਣਾ ਵੀ ਸੰਭਾਲ ਦਾ ਹਿੱਸਾ ਹੈ",
      paragraphs: [
        "Golden Days ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਆਉਣ ਵਾਲੇ ਲੋਕਾਂ ਲਈ ਕੇਂਦਰ ਆਉਣ-ਜਾਣ ਦੀ ਸਵਾਰੀ ਦਿੰਦਾ ਹੈ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਵ੍ਹੀਲਚੇਅਰ ਜਾਂ ਵਾਕਰ ਵਰਤਣ ਵਾਲੇ ਸਵਾਰ ਵੀ ਸ਼ਾਮਲ ਹਨ।",
        "ਅਸੀਂ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨਾਲ ਲੈਣ ਆਉਣ ਦਾ ਸਮਾਂ-ਦਾਇਰਾ ਤੈਅ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਜੇ ਸਮਾਂ-ਸਾਰਣੀ ਬਦਲਣੀ ਪਵੇ ਤਾਂ ਫ਼ੋਨ ਕਰਦੇ ਹਾਂ।",
      ],
      linkLabel: "ਆਵਾਜਾਈ ਬਾਰੇ ਪੜ੍ਹੋ",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - Golden Days ਦੀ ਬੱਸ",
        alt: "ਕੇਂਦਰ ਦੇ ਬਾਹਰ ਖੜ੍ਹੀ Golden Days ਦੀ ਚਿੱਟੀ ਬੱਸ, ਜਿਸ ਦਾ ਸਵਾਰੀਆਂ ਵਾਲਾ ਦਰਵਾਜ਼ਾ ਖੁੱਲ੍ਹਾ ਹੈ।",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "ਦਾਖ਼ਲਾ ਕਿਵੇਂ ਹੁੰਦਾ ਹੈ",
      intro: "ਚਾਰ ਕਦਮ, ਅਤੇ ਅਸੀਂ ਹਰ ਕਦਮ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਾਂ।",
      steps: [
        {
          title: "ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਸੁਨੇਹਾ ਭੇਜੋ",
          text: "ਸਾਨੂੰ ਆਪਣੇ ਪਿਆਰੇ ਬਾਰੇ ਥੋੜ੍ਹਾ ਦੱਸੋ ਅਤੇ ਇਹ ਵੀ ਕਿ ਹੁਣ ਉਨ੍ਹਾਂ ਦੇ ਦਿਨ ਕਿਵੇਂ ਲੰਘਦੇ ਹਨ।",
        },
        {
          title: "ਕੇਂਦਰ ਦਾ ਦੌਰਾ ਕਰੋ",
          text: "ਆ ਕੇ ਇਮਾਰਤ ਦੇਖੋ, ਸਟਾਫ਼ ਨੂੰ ਮਿਲੋ, ਅਤੇ ਜੋ ਚਾਹੋ ਪੁੱਛੋ।",
        },
        {
          title: "ਮੁਲਾਂਕਣ ਪੂਰਾ ਕਰੋ",
          text: "ਸਾਡੀ ਟੀਮ ਸਿਹਤ ਅਤੇ ਰੋਜ਼ਾਨਾ ਲੋੜਾਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ ਤਾਂ ਜੋ ਪਤਾ ਲੱਗੇ ਕਿ ਪ੍ਰੋਗਰਾਮ ਠੀਕ ਬੈਠਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।",
        },
        {
          title: "ਆਉਣਾ ਸ਼ੁਰੂ ਕਰੋ",
          text: "ਅਸੀਂ ਦਿਨ ਤੈਅ ਕਰਦੇ ਹਾਂ, ਸਵਾਰੀ ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਤੁਹਾਡੇ ਪਿਆਰੇ ਦਾ ਸਵਾਗਤ ਕਰਦੇ ਹਾਂ।",
        },
      ],
      linkLabel: "ਦਾਖ਼ਲੇ ਦੀ ਪੂਰੀ ਗਾਈਡ ਦੇਖੋ",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "ਖਰਚੇ ਬਾਰੇ ਕੀ?",
      text: "ਅਸੀਂ ਇੰਸ਼ੋਰੈਂਸ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਇੰਸ਼ੋਰੈਂਸ ਪਲਾਨ ਦੇ ਨਾਲ Medi-Cal ਵੀ। ਆਪਣੀ ਜੇਬ ਤੋਂ ਭੁਗਤਾਨ ਦਾ ਵਿਕਲਪ ਵੀ ਹੈ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਸਮਝਾਵਾਂਗੇ ਕਿ ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਉੱਤੇ ਕੀ ਲਾਗੂ ਹੁੰਦਾ ਹੈ।",
    },
    trust: {
      text: "2003 ਤੋਂ West Sacramento ਦੇ ਪਰਿਵਾਰਾਂ ਦੀ ਸੇਵਾ ਵਿੱਚ। 2007 ਤੋਂ ਪਰਿਵਾਰਕ ਮਾਲਕੀ।",
      // TODO: translate the English line below before turning this language on.
      licenseText: "Licensed by the California Department of Public Health. License number 070000633.",
    },
    contact: {
      heading: "ਸਾਡੇ ਨਾਲ ਗੱਲ ਕਰੋ",
      intro:
        "ਸੁਨੇਹਾ ਭੇਜੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਜਵਾਬ ਦੇਵਾਂਗੇ, ਜਾਂ ਕੇਂਦਰ ਦੇ ਸਮੇਂ ਦੌਰਾਨ ਫ਼ੋਨ ਕਰੋ।",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "Golden Days ਬਾਰੇ",
      description:
        "Golden Days Adult Day Health Care 2003 ਤੋਂ West Sacramento ਦੇ ਪਰਿਵਾਰਾਂ ਦੀ ਸੇਵਾ ਕਰ ਰਿਹਾ ਹੈ, ਅਤੇ 2007 ਤੋਂ ਮਾਲਕ ਉਹੀ ਹਨ।",
    },
    heading: "Golden Days ਬਾਰੇ",
    lead: "Golden Days Adult Day Health Care 2003 ਤੋਂ West Sacramento ਦਾ ਹਿੱਸਾ ਹੈ। ਇਹ ਕੇਂਦਰ 2007 ਤੋਂ ਉਹੀ ਮਾਲਕ ਚਲਾ ਰਹੇ ਹਨ।",
    photo: {
      kind: "interior" as const,
      label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - ਸਟਾਫ਼ ਦੀ ਗਰੁੱਪ ਫ਼ੋਟੋ",
      alt: "Golden Days ਦੇ ਸਟਾਫ਼ ਦੀ ਗਰੁੱਪ ਫ਼ੋਟੋ ਦੀ ਥਾਂ ਲੈਣ ਵਾਲੀ ਨਮੂਨਾ ਤਸਵੀਰ",
    },
    story: {
      heading: "ਸਾਡੀ ਕਹਾਣੀ",
      paragraphs: [
        "Golden Days 2003 ਵਿੱਚ West Sacramento ਵਿੱਚ ਇੱਕ ਅਜਿਹੀ ਥਾਂ ਵਜੋਂ ਖੁੱਲ੍ਹਿਆ ਜਿੱਥੇ ਬਾਲਗ ਸੰਭਾਲ ਨੇੜੇ ਹੋਣ ਦੇ ਨਾਲ ਦਿਨ ਬਿਤਾ ਸਕਣ। ਇਹ ਕੇਂਦਰ 2007 ਤੋਂ ਉਹੀ ਮਾਲਕ ਚਲਾ ਰਹੇ ਹਨ।",
        "ਇਨ੍ਹਾਂ ਸਾਲਾਂ ਵਿੱਚ ਅਸੀਂ ਬਹੁਤ ਸਾਰੇ ਸਥਾਨਕ ਪਰਿਵਾਰਾਂ ਨੂੰ ਜਾਣ ਗਏ ਹਾਂ। ਕੁਝ ਲੋਕ ਸਾਲਾਂ ਤੋਂ ਹਫ਼ਤੇ ਵਿੱਚ ਕੁਝ ਦਿਨ ਸਾਡੇ ਕੋਲ ਆਉਂਦੇ ਹਨ, ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਪਰਿਵਾਰ ਵੀ ਕੇਂਦਰ ਦਾ ਹਿੱਸਾ ਬਣ ਜਾਂਦੇ ਹਨ।",
        "ਲਗਭਗ 120 ਲੋਕ ਸਾਡੇ ਨਾਲ ਦਿਨ ਬਿਤਾਉਂਦੇ ਹਨ, ਅਤੇ ਸਟਾਫ਼ ਫਿਰ ਵੀ ਨਾਮ, ਰੁਟੀਨ ਅਤੇ ਇਹ ਸਿੱਖਣ ਲਈ ਸਮਾਂ ਕੱਢਦਾ ਹੈ ਕਿ ਹਰ ਵਿਅਕਤੀ ਨੂੰ ਕਿਸ ਚੀਜ਼ ਨਾਲ ਆਰਾਮ ਮਿਲਦਾ ਹੈ।",
      ],
    },
    values: {
      heading: "ਸਾਡੇ ਲਈ ਕੀ ਮਾਇਨੇ ਰੱਖਦਾ ਹੈ",
      items: [
        {
          title: "ਪਹਿਲਾਂ ਸਤਿਕਾਰ",
          text: "ਇੱਥੇ ਆਉਣ ਵਾਲਾ ਹਰ ਕੋਈ ਬਾਲਗ ਹੈ, ਅਤੇ ਅਸੀਂ ਉਨ੍ਹਾਂ ਨਾਲ ਉਸੇ ਤਰ੍ਹਾਂ ਵਰਤਾਅ ਕਰਦੇ ਹਾਂ।",
        },
        {
          title: "ਸਿੱਧੇ ਜਵਾਬ",
          text: "ਅਸੀਂ ਖਰਚੇ, ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਸਮਾਂ-ਸਾਰਣੀਆਂ ਸਰਲ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝਾਉਂਦੇ ਹਾਂ।",
        },
        {
          title: "ਪੱਕੀ ਰੁਟੀਨ",
          text: "ਜਾਣੇ-ਪਛਾਣੇ ਚਿਹਰੇ ਅਤੇ ਪਹਿਲਾਂ ਤੋਂ ਪਤਾ ਹੋਣ ਵਾਲਾ ਦਿਨ ਲੋਕਾਂ ਨੂੰ ਇੱਥੇ ਰਚਣ-ਮਿਚਣ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
        },
        {
          title: "ਪਰਿਵਾਰ ਨੂੰ ਪੂਰੀ ਖ਼ਬਰ",
          text: "ਜਦੋਂ ਕੁਝ ਬਦਲਦਾ ਹੈ ਤਾਂ ਅਸੀਂ ਫ਼ੋਨ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਅਸੀਂ ਫ਼ੋਨ ਚੁੱਕਦੇ ਹਾਂ।",
        },
      ],
    },
    team: {
      heading: "ਸਾਡੀ ਟੀਮ",
      paragraphs: [
        "ਸਾਡੇ ਸਟਾਫ਼ ਵਿੱਚ ਨਰਸਾਂ, ਥੈਰੇਪੀ ਸਟਾਫ਼, ਇੱਕ ਸਮਾਜਿਕ ਕਾਰਕੁਨ, ਗਤੀਵਿਧੀਆਂ ਦੇ ਆਗੂ, ਡਰਾਈਵਰ ਅਤੇ ਰਸੋਈ ਦਾ ਸਟਾਫ਼ ਸ਼ਾਮਲ ਹਨ।",
        "ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਬਹੁਤ ਸਾਰੇ ਸਾਲਾਂ ਤੋਂ Golden Days ਵਿੱਚ ਕੰਮ ਕਰ ਰਹੇ ਹਨ ਅਤੇ ਇੱਕ ਤੋਂ ਵੱਧ ਭਾਸ਼ਾਵਾਂ ਬੋਲਦੇ ਹਨ।",
      ],
    },
    center: {
      heading: "ਕੇਂਦਰ",
      paragraphs: [
        "ਇਮਾਰਤ ਵਿੱਚ ਗਤੀਵਿਧੀਆਂ ਦਾ ਕਮਰਾ, ਖਾਣੇ ਦਾ ਕਮਰਾ, ਆਰਾਮ ਲਈ ਸ਼ਾਂਤ ਕਮਰੇ, ਥੈਰੇਪੀ ਵਾਲਾ ਹਿੱਸਾ ਅਤੇ ਪਹੁੰਚਯੋਗ ਪਖਾਨੇ ਹਨ।",
        "ਸਾਹਮਣੇ ਪਾਰਕਿੰਗ ਉਪਲਬਧ ਹੈ, ਅਤੇ ਦਾਖ਼ਲਾ ਜ਼ਮੀਨ ਦੇ ਬਰਾਬਰ ਹੈ, ਪੌੜੀਆਂ ਤੋਂ ਬਿਨਾਂ।",
      ],
      photo: {
        kind: "interior" as const,
        label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - ਖਾਣੇ ਦਾ ਕਮਰਾ",
        alt: "Golden Days ਦਾ ਖਾਣੇ ਦਾ ਕਮਰਾ, ਦੁਪਹਿਰ ਦੇ ਖਾਣੇ ਲਈ ਲੱਗੇ ਗੋਲ ਮੇਜ਼ ਅਤੇ ਮੇਜ਼ਾਂ ਉੱਤੇ ਤਾਜ਼ੇ ਫੁੱਲ।",
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
      heading: "ਆ ਕੇ ਆਪ ਦੇਖੋ",
      text: "ਦੌਰੇ ਵਿੱਚ ਲਗਭਗ ਅੱਧਾ ਘੰਟਾ ਲੱਗਦਾ ਹੈ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਸਮਾਂ ਲੱਭ ਲਵਾਂਗੇ।",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "ਸੇਵਾਵਾਂ",
      description:
        "West Sacramento ਵਿੱਚ Golden Days ਵਿਖੇ ਨਰਸਿੰਗ ਸੰਭਾਲ, ਮੁੜ-ਵਸੇਬਾ, ਖੁਰਾਕ, ਸਮਾਜਿਕ ਕਾਰਜ, ਮਨੋਰੰਜਨ ਅਤੇ ਆਵਾਜਾਈ।",
    },
    heading: "ਸੇਵਾਵਾਂ",
    lead: "Golden Days ਵਿੱਚ ਇੱਕ ਦਿਨ ਛੇ ਕਿਸਮ ਦੇ ਸਹਾਰੇ ਦੁਆਲੇ ਬਣਿਆ ਹੈ। ਪਰਿਵਾਰ ਆਪਣੇ ਲਈ ਠੀਕ ਦਿਨ ਚੁਣਦੇ ਹਨ।",
    items: [
      {
        icon: "nursing" as const,
        title: "ਨਰਸਿੰਗ ਸੰਭਾਲ",
        summary: "ਦਿਨ ਦੌਰਾਨ ਸਾਡੀਆਂ ਨਰਸਾਂ ਵੱਲੋਂ ਸਿਹਤ ਦੀ ਜਾਂਚ ਅਤੇ ਦਵਾਈਆਂ।",
        details: [
          "ਨਰਸਾਂ ਮਹੱਤਵਪੂਰਨ ਸੰਕੇਤ ਅਤੇ ਖੂਨ ਵਿੱਚ ਗਲੂਕੋਜ਼ (ਸ਼ੂਗਰ) ਦੀ ਜਾਂਚ ਕਰਦੀਆਂ ਹਨ।",
          "ਨਰਸਾਂ ਪ੍ਰੋਗਰਾਮ ਦੇ ਸਮੇਂ ਦੌਰਾਨ ਤੈਅ ਸਮੇਂ ਅਨੁਸਾਰ ਦਵਾਈਆਂ ਦਿੰਦੀਆਂ ਹਨ।",
          "ਜੇ ਸਿਹਤ ਵਿੱਚ ਬਦਲਾਅ ਆਵੇ, ਤਾਂ ਅਸੀਂ ਪਰਿਵਾਰ ਅਤੇ ਡਾਕਟਰ ਦੇ ਦਫ਼ਤਰ ਨੂੰ ਫ਼ੋਨ ਕਰਦੇ ਹਾਂ।",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "ਮੁੜ-ਵਸੇਬਾ",
        summary: "ਕਸਰਤਾਂ ਅਤੇ ਥੈਰੇਪੀ ਜੋ ਤਾਕਤ, ਸੰਤੁਲਨ ਅਤੇ ਚੱਲਣ-ਫਿਰਨ ਵਿੱਚ ਸਹਾਇਕ ਹਨ।",
        details: [
          "ਥੈਰੇਪੀ ਸਟਾਫ਼ ਤੁਰਨ, ਸੰਤੁਲਨ ਅਤੇ ਰੋਜ਼ਾਨਾ ਚੱਲਣ-ਫਿਰਨ ਉੱਤੇ ਕੰਮ ਕਰਦਾ ਹੈ, ਅਤੇ ਸੈਸ਼ਨ ਇਸ ਮੁਤਾਬਕ ਬਣਾਏ ਜਾਂਦੇ ਹਨ ਕਿ ਹਰ ਵਿਅਕਤੀ ਕਿਸ ਟੀਚੇ ਵੱਲ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ।",
          "ਜੋ ਲੋਕ ਸ਼ਾਮਲ ਹੋਣਾ ਚਾਹੁੰਦੇ ਹਨ, ਉਨ੍ਹਾਂ ਲਈ ਸਮੂਹਿਕ ਕਸਰਤ ਬਹੁਤੀਆਂ ਸਵੇਰਾਂ ਹੁੰਦੀ ਹੈ।",
          "ਲਾਇਸੰਸਸ਼ੁਦਾ ਥੈਰੇਪਿਸਟ ਮਸਾਜ ਥੈਰੇਪੀ ਅਤੇ ਪੈਰਾਫ਼ਿਨ ਵੈਕਸ ਇਲਾਜ ਦਿੰਦੇ ਹਨ, ਜੋ ਭਾਗੀਦਾਰਾਂ ਲਈ ਬਿਨਾਂ ਕਿਸੇ ਵਾਧੂ ਖਰਚੇ ਦੇ ਸ਼ਾਮਲ ਹਨ।",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "ਖੁਰਾਕ",
        summary: "ਹਰ ਪ੍ਰੋਗਰਾਮ ਵਾਲੇ ਦਿਨ ਨਾਸ਼ਤਾ ਅਤੇ ਦੁਪਹਿਰ ਦਾ ਖਾਣਾ, ਜੋ ਇੱਕ ਰਸੋਈਆ ਹਰ ਵਿਅਕਤੀ ਦੀਆਂ ਲੋੜਾਂ ਮੁਤਾਬਕ ਬਣਾਉਂਦਾ ਹੈ।",
        details: [
          "ਹਰ ਪ੍ਰੋਗਰਾਮ ਵਾਲੇ ਦਿਨ ਨਾਸ਼ਤਾ ਅਤੇ ਦੁਪਹਿਰ ਦਾ ਖਾਣਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਖਾਣੇ ਬਦਲਦੇ ਰਹਿੰਦੇ ਹਨ।",
          "ਇੱਕ ਮਾਹਰ ਰਸੋਈਆ ਹਰ ਵਿਅਕਤੀ ਦੀਆਂ ਲੋੜਾਂ ਮੁਤਾਬਕ ਖਾਣਾ ਤਿਆਰ ਕਰਦਾ ਹੈ।",
          "ਖਾਣੇ ਦੀਆਂ ਲੋੜਾਂ ਬਾਰੇ ਸਾਨੂੰ ਦੱਸੋ, ਜਿਵੇਂ ਐਲਰਜੀ, ਨਿਗਲਣ ਵਿੱਚ ਤਕਲੀਫ਼ (ਅਸੀਂ ਖਾਣਾ ਬਾਰੀਕ ਕੱਟ ਸਕਦੇ ਹਾਂ), ਜਾਂ ਸ਼ਾਕਾਹਾਰੀ ਖੁਰਾਕ।",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "ਸਮਾਜਿਕ ਕਾਰਜ",
        summary: "ਲਾਭਾਂ, ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਕੇਂਦਰ ਤੋਂ ਬਾਹਰ ਦੀਆਂ ਸੇਵਾਵਾਂ ਲੱਭਣ ਵਿੱਚ ਮਦਦ।",
        details: [
          "ਸਾਡਾ ਸਮਾਜਿਕ ਕਾਰਕੁਨ ਪਰਿਵਾਰਾਂ ਨੂੰ ਫਾਰਮਾਂ ਅਤੇ ਕਵਰੇਜ ਦੇ ਸਵਾਲ ਸਮਝਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
          "ਅਸੀਂ ਤੁਹਾਨੂੰ ਸਥਾਨਕ ਸੇਵਾਵਾਂ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰ ਸਕਦੇ ਹਾਂ, ਜਿਵੇਂ ਘਰ ਵਿੱਚ ਮਦਦ ਜਾਂ ਖਾਣੇ ਦੇ ਪ੍ਰੋਗਰਾਮ।",
          "ਜਦੋਂ ਕਿਸੇ ਯੋਜਨਾ ਨੂੰ ਬਦਲਣ ਦੀ ਲੋੜ ਪਵੇ ਤਾਂ ਪਰਿਵਾਰ ਨਾਲ ਮੀਟਿੰਗਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ।",
        ],
      },
      {
        icon: "recreation" as const,
        title: "ਮਨੋਰੰਜਨ",
        summary: "ਸੰਗੀਤ, ਖੇਡਾਂ, ਦਸਤਕਾਰੀ, ਹਲਕੀ ਕਸਰਤ ਅਤੇ ਸਾਰਾ ਦਿਨ ਸੰਗਤ।",
        details: [
          "ਰੋਜ਼ਾਨਾ ਗਤੀਵਿਧੀਆਂ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਲੋਕ ਸ਼ਾਮਲ ਹੋ ਸਕਦੇ ਹਨ ਜਾਂ ਛੱਡ ਸਕਦੇ ਹਨ, ਜਿਵੇਂ ਸੰਗੀਤ, ਖੇਡਾਂ, ਦਸਤਕਾਰੀ ਅਤੇ ਕਸਰਤ।",
          "ਸੈਰ-ਸਪਾਟੇ ਔਸਤਨ ਹਫ਼ਤੇ ਵਿੱਚ ਤਿੰਨ ਵਾਰ ਤੱਕ ਹੁੰਦੇ ਹਨ, ਬਿਨਾਂ ਕਿਸੇ ਵਾਧੂ ਖਰਚੇ ਦੇ। ਚੱਲਣ-ਫਿਰਨ ਦੀਆਂ ਲੋੜਾਂ ਵਾਲੇ ਲੋਕ ਨਾਲ ਆ ਸਕਦੇ ਹਨ।",
          "ਤਿਉਹਾਰ ਅਤੇ ਜਨਮ-ਦਿਨ ਅਸੀਂ ਮਿਲ ਕੇ ਮਨਾਉਂਦੇ ਹਾਂ।",
        ],
      },
      {
        icon: "transportation" as const,
        title: "ਆਵਾਜਾਈ",
        summary: "ਪ੍ਰੋਗਰਾਮ ਵਾਲੇ ਦਿਨਾਂ ਵਿੱਚ ਕੇਂਦਰ ਆਉਣ-ਜਾਣ ਲਈ ਸਵਾਰੀ।",
        details: [
          "ਸਵਾਰੀ ਸਾਡੇ ਸੇਵਾ ਖੇਤਰ ਦੇ ਅੰਦਰ ਉਪਲਬਧ ਹੈ।",
          "ਸਾਡੀਆਂ ਗੱਡੀਆਂ ਵ੍ਹੀਲਚੇਅਰ ਜਾਂ ਵਾਕਰ ਵਰਤਣ ਵਾਲੇ ਸਵਾਰਾਂ ਨੂੰ ਲਿਜਾ ਸਕਦੀਆਂ ਹਨ।",
          "ਬੱਸ ਦਰਵਾਜ਼ੇ ਦੇ ਜਿੰਨੀ ਹੋ ਸਕੇ ਨੇੜੇ ਆਉਂਦੀ ਹੈ। ਘਰ ਵਿੱਚ, ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਾ ਵਿਅਕਤੀ ਭਾਗੀਦਾਰ ਨੂੰ ਬੱਸ ਵਿੱਚ ਚੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਕੇਂਦਰ ਵਿੱਚ, ਡਰਾਈਵਰ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਬੱਸ ਤੋਂ ਉਤਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੇ ਹਨ।",
        ],
      },
    ],
    dayHeading: "ਇੱਕ ਦਿਨ ਕਿਹੋ ਜਿਹਾ ਹੁੰਦਾ ਹੈ",
    daySchedule: [
      { time: "ਸਵੇਰੇ 8:30", text: "ਸਵਾਗਤ" },
      { time: "ਸਵੇਰੇ 9:00", text: "ਮੁੜ-ਵਸੇਬੇ ਦੀ ਕਸਰਤ" },
      { time: "ਸਵੇਰੇ 9:30", text: "ਨਾਸ਼ਤਾ / ਟੀਵੀ ਉੱਤੇ ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ" },
      { time: "ਸਵੇਰੇ 10:00", text: "ਸਿਹਤ ਦੀ ਸਿੱਖਿਆ / ਵਿਅਕਤੀਗਤ ਫਿਜ਼ੀਕਲ ਥੈਰੇਪੀ (ਸੋਮ, ਮੰਗਲ, ਸ਼ੁੱਕਰ)" },
      { time: "ਸਵੇਰੇ 10:30", text: "ਮੁੜ-ਵਸੇਬੇ ਦੀ ਕਸਰਤ / ਸੈਰ ਕਲੱਬ / ਸੈਰ-ਸਪਾਟਾ" },
      { time: "ਸਵੇਰੇ 11:00", text: "ਮੁੜ-ਵਸੇਬੇ ਦੀਆਂ ਕਸਰਤਾਂ / ਸਮੂਹਿਕ ਥੈਰੇਪੀ" },
      { time: "ਸਵੇਰੇ 11:30", text: "ਮੁੜ-ਵਸੇਬੇ ਦੀ ਕਸਰਤ / ਯਾਦਦਾਸ਼ਤ ਸਮੂਹ / ਗਤੀਵਿਧੀ ਵਾਲੀ ਖੇਡ / ਅਧਿਆਤਮਕ ਸਮੂਹ" },
      { time: "ਦੁਪਹਿਰ 12:00", text: "ਮਹਿਮਾਨ ਅਤੇ ਬੁਲਾਰੇ / ਵਿਅਕਤੀਗਤ ਫਿਜ਼ੀਕਲ ਥੈਰੇਪੀ (ਸੋਮ, ਮੰਗਲ, ਸ਼ੁੱਕਰ)" },
      { time: "ਦੁਪਹਿਰ 12:30", text: "ਵਿਅਕਤੀਗਤ ਆਕੂਪੇਸ਼ਨਲ ਥੈਰੇਪੀ (ਬੁੱਧ, ਸ਼ੁੱਕਰ)" },
      { time: "ਦੁਪਹਿਰ 1:00", text: "ਦੁਪਹਿਰ ਦਾ ਖਾਣਾ" },
      { time: "ਦੁਪਹਿਰ 1:30", text: "ਫ਼ਿਲਮ / ਚਰਚਾ" },
    ],
    // TODO: translate the English heading and intro below before turning this language on.
    rotatingHeading: "Rotating activities",
    rotatingIntro: "Activities rotate through the week, and some, like bingo, happen more than once a week. Call us for the current schedule.",
    rotatingActivities: [
      "ਯਾਦਦਾਸ਼ਤ ਸੁਧਾਰ ਸਮੂਹ",
      "ਅੰਗਰੇਜ਼ੀ ਦੀ ਕਲਾਸ",
      "ਬਿੰਗੋ",
    ],
    cta: {
      heading: "ਪੱਕਾ ਨਹੀਂ ਪਤਾ ਕਿ ਤੁਹਾਡੇ ਪਿਆਰੇ ਨੂੰ ਕਿਹੜੇ ਹਿੱਸਿਆਂ ਦੀ ਲੋੜ ਹੈ?",
      text: "ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ। ਅਸੀਂ ਕੁਝ ਸਵਾਲ ਪੁੱਛਾਂਗੇ ਅਤੇ ਤੁਹਾਨੂੰ ਸਿੱਧਾ ਜਵਾਬ ਦੇਵਾਂਗੇ।",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "ਆਵਾਜਾਈ",
      description:
        "West Sacramento ਵਿੱਚ Golden Days ਆਉਣ ਲਈ ਸਵਾਰੀ, ਵ੍ਹੀਲਚੇਅਰ ਪਹੁੰਚਯੋਗ ਗੱਡੀਆਂ ਸਮੇਤ।",
    },
    heading: "ਆਵਾਜਾਈ",
    lead: "ਕੇਂਦਰ ਤੱਕ ਪਹੁੰਚਣਾ ਔਖਾ ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ। Golden Days ਲੋੜਵੰਦ ਲੋਕਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮ ਆਉਣ-ਜਾਣ ਦੀ ਸਵਾਰੀ ਦਿੰਦਾ ਹੈ।",
    photo: {
      kind: "bus" as const,
      label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - Golden Days ਦੀ ਬੱਸ ਦੇ ਅੰਦਰ",
      alt: "Golden Days ਦੀ ਬੱਸ ਦੇ ਅੰਦਰ: ਚੌੜੀ ਗਲੀ ਦੇ ਦੋਵੇਂ ਪਾਸੇ ਨੀਲੀਆਂ ਸੀਟਾਂ ਦੀਆਂ ਕਤਾਰਾਂ, ਅਤੇ ਕੰਧ ਉੱਤੇ ਵ੍ਹੀਲਚੇਅਰ ਪਹੁੰਚ ਦੇ ਚਿੰਨ੍ਹ।",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "ਸੇਵਾ ਖੇਤਰ",
        paragraphs: [
          "ਅਸੀਂ West Sacramento ਅਤੇ ਨੇੜਲੇ ਮੁਹੱਲਿਆਂ ਵਿੱਚ ਸਵਾਰੀ ਦਿੰਦੇ ਹਾਂ।",
          "ਇਸ ਖੇਤਰ ਤੋਂ ਬਾਹਰ ਦੇ ਕੁਝ ਪਤੇ ਵੀ ਦਿਨ ਅਤੇ ਰੂਟ ਦੇ ਹਿਸਾਬ ਨਾਲ ਚੱਲ ਸਕਦੇ ਹਨ। ਜੇ ਤੁਹਾਡਾ ਇਲਾਕਾ ਸੂਚੀ ਵਿੱਚ ਨਹੀਂ ਹੈ, ਤਾਂ ਆਪਣੇ ਪਤੇ ਸਮੇਤ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਦੇਖ ਲਵਾਂਗੇ।",
        ],
        list: {
          label: "ਜਿਨ੍ਹਾਂ ਇਲਾਕਿਆਂ ਵਿੱਚ ਅਸੀਂ ਆਮ ਤੌਰ 'ਤੇ ਸੇਵਾ ਦਿੰਦੇ ਹਾਂ:",
          items: [
            "West Sacramento",
            "Bryte ਅਤੇ Broderick",
            "Southport",
            "ਦਰਿਆ ਦੇ ਨੇੜੇ Sacramento ਦੇ ਕੁਝ ਹਿੱਸੇ",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "ਲੈਣ ਆਉਣਾ ਅਤੇ ਛੱਡਣਾ",
        paragraphs: [
          "ਹਰ ਸਵਾਰ ਨੂੰ ਠੀਕ ਮਿੰਟ ਦੀ ਥਾਂ ਲੈਣ ਆਉਣ ਦਾ ਸਮਾਂ-ਦਾਇਰਾ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਕਿਉਂਕਿ ਟਰੈਫ਼ਿਕ ਅਤੇ ਹੋਰ ਸਵਾਰ ਰੂਟ ਬਦਲ ਦਿੰਦੇ ਹਨ।",
          "ਅਸੀਂ ਦਰਵਾਜ਼ੇ ਦੇ ਜਿੰਨੀ ਹੋ ਸਕੇ ਨੇੜੇ ਆਉਂਦੇ ਹਾਂ। ਲੈਣ ਵੇਲੇ, ਭਾਗੀਦਾਰ ਦੀ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲਾ ਵਿਅਕਤੀ ਉਨ੍ਹਾਂ ਨੂੰ ਬੱਸ ਵਿੱਚ ਚੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਡਰਾਈਵਰ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਚੜ੍ਹਨ ਵਿੱਚ ਮਦਦ ਨਹੀਂ ਕਰਦੇ, ਅਤੇ ਉਹ ਕਿਸੇ ਨੂੰ ਚੁੱਕ ਕੇ ਬੱਸ ਵਿੱਚ ਨਹੀਂ ਚੜ੍ਹਾ ਸਕਦੇ।",
          "ਕੇਂਦਰ ਵਿੱਚ, ਡਰਾਈਵਰ ਭਾਗੀਦਾਰਾਂ ਨੂੰ ਬੱਸ ਤੋਂ ਉਤਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹਨ, ਅਤੇ ਇੱਥੇ ਸਾਡੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲੇ ਉਨ੍ਹਾਂ ਨੂੰ ਮਿਲਣ ਲਈ ਤਿਆਰ ਹੁੰਦੇ ਹਨ। ਸਾਡੇ ਦੇਖਭਾਲ ਕਰਨ ਵਾਲੇ ਲੋਕਾਂ ਦੇ ਘਰਾਂ ਵਿੱਚ ਨਹੀਂ ਜਾਂਦੇ।",
          "ਜੇ ਬੱਸ ਦੇਰ ਨਾਲ ਚੱਲ ਰਹੀ ਹੋਵੇ, ਤਾਂ ਅਸੀਂ ਪਰਿਵਾਰ ਨੂੰ ਫ਼ੋਨ ਕਰਦੇ ਹਾਂ।",
        ],
      },
      {
        heading: "ਵ੍ਹੀਲਚੇਅਰ ਅਤੇ ਚੱਲਣ-ਫਿਰਨ ਲਈ ਪਹੁੰਚ",
        paragraphs: [
          "ਸਾਡੀਆਂ ਗੱਡੀਆਂ ਵ੍ਹੀਲਚੇਅਰ, ਵਾਕਰ ਜਾਂ ਸੋਟੀ ਵਰਤਣ ਵਾਲੇ ਸਵਾਰਾਂ ਨੂੰ ਲਿਜਾ ਸਕਦੀਆਂ ਹਨ।",
          "ਗੱਡੀ ਚੱਲਣ ਤੋਂ ਪਹਿਲਾਂ ਵ੍ਹੀਲਚੇਅਰਾਂ ਨੂੰ ਬੰਨ੍ਹ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਹਰ ਸਵਾਰ ਲਈ ਸੀਟ ਬੈਲਟ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।",
          // TODO: translate the English line below before turning this language on.
          "Our buses operate under a permit from the California Public Utilities Commission.",
          "ਆਕਸੀਜਨ, ਇੱਕ ਥਾਂ ਤੋਂ ਦੂਜੀ ਥਾਂ ਬਦਲਣ, ਜਾਂ ਡਰਾਈਵਰ ਨੂੰ ਜਾਣਨ ਵਾਲੀ ਕਿਸੇ ਹੋਰ ਗੱਲ ਬਾਰੇ ਸਾਨੂੰ ਦੱਸੋ, ਅਤੇ ਅਸੀਂ ਉਸ ਦੀ ਤਿਆਰੀ ਕਰ ਲਵਾਂਗੇ।",
        ],
      },
      {
        heading: "ਪਰਿਵਾਰ ਸਵਾਰੀ ਦਾ ਪ੍ਰਬੰਧ ਜਾਂ ਬਦਲਾਅ ਕਿਵੇਂ ਕਰਦੇ ਹਨ",
        paragraphs: [
          "ਸਵਾਰੀ ਦਾ ਪ੍ਰਬੰਧ ਉਦੋਂ ਹੋ ਜਾਂਦਾ ਹੈ ਜਦੋਂ ਤੁਹਾਡੇ ਪਿਆਰੇ ਦਾ ਦਾਖ਼ਲਾ ਹੁੰਦਾ ਹੈ, ਅਤੇ ਸਮਾਂ-ਸਾਰਣੀ ਹਫ਼ਤੇ ਤੋਂ ਹਫ਼ਤੇ ਇੱਕੋ ਜਿਹੀ ਰਹਿੰਦੀ ਹੈ।",
          "ਲੈਣ ਆਉਣ ਦਾ ਪਤਾ ਬਦਲਣ, ਕੋਈ ਦਿਨ ਜੋੜਨ ਜਾਂ ਸਵਾਰੀ ਰੱਦ ਕਰਨ ਲਈ, ਦਫ਼ਤਰ ਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
          "ਉਸੇ ਦਿਨ ਰੱਦ ਕਰਨ ਲਈ, ਜਿੰਨੀ ਜਲਦੀ ਹੋ ਸਕੇ ਫ਼ੋਨ ਕਰੋ ਤਾਂ ਜੋ ਡਰਾਈਵਰ ਰੂਟ ਨੂੰ ਠੀਕ ਕਰ ਸਕੇ।",
        ],
        list: {
          label: "ਸਵਾਰੀ ਬਦਲਣ ਲਈ, ਇਹ ਤਿਆਰ ਰੱਖੋ:",
          items: [
            "ਸਵਾਰ ਦਾ ਨਾਮ",
            "ਬਦਲਣ ਵਾਲੀ ਤਾਰੀਖ਼ ਜਾਂ ਤਾਰੀਖ਼ਾਂ",
            "ਨਵਾਂ ਪਤਾ, ਜੇ ਲੈਣ ਆਉਣ ਦੀ ਥਾਂ ਬਦਲ ਰਹੀ ਹੈ",
            "ਉਸ ਦਿਨ ਸਾਡੇ ਲਈ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਦਾ ਫ਼ੋਨ ਨੰਬਰ",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - Golden Days ਦੀ ਬੱਸ ਉੱਤੇ ਵ੍ਹੀਲਚੇਅਰ ਲਿਫ਼ਟ",
      alt: "Golden Days ਦੀ ਬੱਸ ਦੇ ਪਿੱਛੇ ਵ੍ਹੀਲਚੇਅਰ ਲਿਫ਼ਟ, ਖੁੱਲ੍ਹੇ ਪਿਛਲੇ ਦਰਵਾਜ਼ਿਆਂ ਦੇ ਅੰਦਰ ਉੱਚਾ ਕੀਤਾ ਪਲੇਟਫ਼ਾਰਮ।",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "ਲੈਣ ਆਉਣ ਬਾਰੇ ਸਵਾਲ ਹਨ?",
      text: "ਦਫ਼ਤਰ ਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਆਵਾਜਾਈ ਦੀ ਸਮਾਂ-ਸਾਰਣੀ ਬਾਰੇ ਪੁੱਛੋ।",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "ਦਾਖ਼ਲਾ",
      description:
        "West Sacramento ਵਿੱਚ Golden Days ਲਈ ਕੌਣ ਯੋਗ ਹੈ, ਕੌਣ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ, ਕੀ ਲਿਆਉਣਾ ਹੈ, ਅਤੇ ਦਾਖ਼ਲੇ ਦੇ ਕਦਮ।",
    },
    heading: "ਦਾਖ਼ਲਾ",
    lead: "ਦਾਖ਼ਲੇ ਲਈ ਕੁਝ ਗੱਲਾਂਬਾਤਾਂ ਲੱਗਦੀਆਂ ਹਨ, ਕਾਗਜ਼ਾਂ ਦਾ ਪਹਾੜ ਨਹੀਂ। ਇਹ ਹੈ ਕਿ ਇਹ ਕਿਵੇਂ ਹੁੰਦਾ ਹੈ।",
    qualifies: {
      heading: "ਕੌਣ ਯੋਗ ਹੈ",
      intro: "Golden Days ਆਮ ਤੌਰ 'ਤੇ ਅਜਿਹੇ ਬਾਲਗ ਲਈ ਠੀਕ ਹੈ ਜੋ:",
      items: [
        "ਘਰ ਵਿੱਚ ਜਾਂ ਪਰਿਵਾਰ ਨਾਲ ਰਹਿਣ ਵਾਲਾ ਬਾਲਗ ਹੈ",
        "ਦਿਨ ਵੇਲੇ ਮਦਦ, ਨਿਗਰਾਨੀ ਜਾਂ ਸੰਗਤ ਦੀ ਲੋੜ ਮਹਿਸੂਸ ਕਰਦਾ ਹੈ",
        "ਅਜਿਹੀ ਸਿਹਤ ਸਮੱਸਿਆ ਹੈ ਜਿਸ ਨੂੰ ਨਿਯਮਿਤ ਜਾਂਚ ਤੋਂ ਲਾਭ ਹੁੰਦਾ ਹੈ",
        "ਸਮੂਹਿਕ ਦਿਨ ਦੇ ਪ੍ਰੋਗਰਾਮ ਵਿੱਚ ਹਿੱਸਾ ਲੈ ਸਕਦਾ ਹੈ",
      ],
      note: "ਯੋਗਤਾ ਦਾ ਫ਼ੈਸਲਾ ਮੁਲਾਂਕਣ ਤੋਂ ਬਾਅਦ ਹੁੰਦਾ ਹੈ, ਫ਼ੋਨ ਉੱਤੇ ਨਹੀਂ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਦੱਸਾਂਗੇ ਕਿ ਅਗਲਾ ਕਦਮ ਕੀ ਹੈ।",
    },
    pays: {
      heading: "ਭੁਗਤਾਨ ਕੌਣ ਕਰਦਾ ਹੈ",
      intro: "ਪਰਿਵਾਰ ਆਮ ਤੌਰ 'ਤੇ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕਿਸੇ ਇੱਕ ਤਰੀਕੇ ਨਾਲ ਭੁਗਤਾਨ ਕਰਦੇ ਹਨ:",
      items: [
        {
          title: "Medi-Cal",
          text: "ਅਸੀਂ ਇੰਸ਼ੋਰੈਂਸ ਪਲਾਨ ਦੇ ਨਾਲ Medi-Cal ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ, ਪਰ ਇਕੱਲਾ Medi-Cal ਨਹੀਂ। ਅਸੀਂ ਸਮਝਾ ਸਕਦੇ ਹਾਂ ਕਿ ਪ੍ਰਕਿਰਿਆ ਕਿਹੋ ਜਿਹੀ ਹੈ।",
        },
        {
          title: "ਮੈਨੇਜਡ ਕੇਅਰ ਪਲਾਨ",
          text: "ਕੁਝ ਸਿਹਤ ਪਲਾਨ ਦਿਨ ਦੇ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਕਵਰ ਕਰਦੇ ਹਨ। ਅਸੀਂ ਦੇਖਾਂਗੇ ਕਿ ਤੁਹਾਡਾ ਪਲਾਨ ਕੀ ਕਹਿੰਦਾ ਹੈ।",
        },
        {
          title: "ਆਪਣੀ ਜੇਬ ਤੋਂ ਭੁਗਤਾਨ",
          text: "ਪਰਿਵਾਰ ਸਿੱਧਾ ਭੁਗਤਾਨ ਵੀ ਕਰ ਸਕਦੇ ਹਨ।",
        },
      ],
      note: "ਇਸ ਪੰਨੇ ਉੱਤੇ ਕੁਝ ਵੀ ਕਵਰੇਜ ਜਾਂ ਕੀਮਤ ਦਾ ਵਾਅਦਾ ਨਹੀਂ ਹੈ। ਆਪਣੇ ਹਾਲਾਤ ਬਾਰੇ ਤਾਜ਼ਾ ਜਾਣਕਾਰੀ ਲਈ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
    },
    bring: {
      heading: "ਕੀ ਲਿਆਉਣਾ ਹੈ",
      intro: "ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਹੈ ਉਹ ਲਿਆਓ। ਬਾਕੀ ਵਿੱਚ ਅਸੀਂ ਮਦਦ ਕਰਾਂਗੇ।",
      items: [
        "ਫ਼ੋਟੋ ਵਾਲਾ ਪਛਾਣ-ਪੱਤਰ",
        "ਇੰਸ਼ੋਰੈਂਸ ਕਾਰਡ (ਇਹ ਤੁਸੀਂ ਇਕੱਲਾ ਵੀ ਲਿਆ ਸਕਦੇ ਹੋ)",
        "Medi-Cal ਕਾਰਡ (ਇਹ ਆਪਣੇ ਇੰਸ਼ੋਰੈਂਸ ਕਾਰਡ ਦੇ ਨਾਲ ਲਿਆਓ, ਇਕੱਲਾ ਨਹੀਂ)",
        "ਤੁਹਾਡੇ ਡਾਕਟਰ ਦਾ ਨਾਮ ਅਤੇ ਫ਼ੋਨ ਨੰਬਰ",
        "ਐਮਰਜੈਂਸੀ ਸੰਪਰਕਾਂ ਦੇ ਨਾਮ ਅਤੇ ਨੰਬਰ",
        "ਕੋਈ ਵੀ ਹਾਲੀਆ ਡਾਕਟਰੀ ਕਾਗਜ਼ਾਤ ਜੋ ਤੁਹਾਡੇ ਕੋਲ ਪਹਿਲਾਂ ਹੀ ਹਨ",
      ],
    },
    steps: {
      heading: "ਕਦਮ",
      items: [
        {
          title: "ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਸੁਨੇਹਾ ਭੇਜੋ",
          text: "ਸਾਨੂੰ ਆਪਣੇ ਪਿਆਰੇ ਬਾਰੇ, ਜਿਨ੍ਹਾਂ ਦਿਨਾਂ ਦੀ ਤੁਹਾਨੂੰ ਆਸ ਹੈ ਉਨ੍ਹਾਂ ਬਾਰੇ, ਅਤੇ ਆਪਣੀਆਂ ਚਿੰਤਾਵਾਂ ਬਾਰੇ ਦੱਸੋ। ਇਸ ਫ਼ੋਨ ਵਿੱਚ ਲਗਭਗ ਦਸ ਮਿੰਟ ਲੱਗਦੇ ਹਨ।",
        },
        {
          title: "ਕੇਂਦਰ ਦਾ ਦੌਰਾ ਕਰੋ",
          text: "ਪ੍ਰੋਗਰਾਮ ਦੇ ਸਮੇਂ ਦੌਰਾਨ, ਤਰਜੀਹੀ ਤੌਰ 'ਤੇ ਦੁਪਹਿਰ 1:30 ਤੋਂ ਪਹਿਲਾਂ, ਆਓ ਤਾਂ ਜੋ ਤੁਸੀਂ ਆਮ ਦਿਨ ਦੇਖ ਸਕੋ। ਜੇ ਠੀਕ ਲੱਗੇ ਤਾਂ ਆਪਣੇ ਪਿਆਰੇ ਨੂੰ ਨਾਲ ਲਿਆਓ।",
        },
        {
          title: "ਮੁਲਾਂਕਣ",
          text: "ਸਾਡੀ ਟੀਮ ਸਿਹਤ ਦੇ ਇਤਿਹਾਸ, ਰੋਜ਼ਾਨਾ ਲੋੜਾਂ ਅਤੇ ਟੀਚਿਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰਦੀ ਹੈ ਤਾਂ ਜੋ ਪੱਕਾ ਹੋ ਸਕੇ ਕਿ ਪ੍ਰੋਗਰਾਮ ਠੀਕ ਬੈਠਦਾ ਹੈ।",
        },
        {
          title: "ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਕਵਰੇਜ",
          text: "ਅਸੀਂ ਦਾਖ਼ਲੇ ਦੇ ਫਾਰਮ ਮਿਲ ਕੇ ਭਰਦੇ ਹਾਂ ਅਤੇ ਕਵਰੇਜ ਦੇ ਸਵਾਲ ਹੱਲ ਕਰਦੇ ਹਾਂ।",
        },
        {
          title: "ਪਹਿਲਾ ਦਿਨ",
          text: "ਅਸੀਂ ਸਮਾਂ-ਸਾਰਣੀ ਤੈਅ ਕਰਦੇ ਹਾਂ, ਸਵਾਰੀ ਦਾ ਪ੍ਰਬੰਧ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਤੁਹਾਡੇ ਪਿਆਰੇ ਨੂੰ ਸਟਾਫ਼ ਅਤੇ ਹੋਰ ਭਾਗੀਦਾਰਾਂ ਨਾਲ ਮਿਲਾਉਂਦੇ ਹਾਂ।",
        },
      ],
    },
    faq: {
      heading: "ਆਮ ਸਵਾਲ",
      items: [
        {
          question: "ਮੇਰਾ ਪਿਆਰਾ ਹਫ਼ਤੇ ਵਿੱਚ ਕਿੰਨੇ ਦਿਨ ਆ ਸਕਦਾ ਹੈ?",
          answer: "ਸਮਾਂ-ਸਾਰਣੀ ਹਫ਼ਤੇ ਵਿੱਚ ਇੱਕ ਦਿਨ ਤੋਂ ਪੰਜ ਦਿਨ ਤੱਕ ਹੁੰਦੀ ਹੈ। ਅਸੀਂ ਤੁਹਾਡੇ ਨਾਲ ਮਿਲ ਕੇ ਸਮਾਂ-ਸਾਰਣੀ ਤੈਅ ਕਰਾਂਗੇ।",
        },
        {
          question: "ਦਾਖ਼ਲੇ ਵਿੱਚ ਕਿੰਨਾ ਸਮਾਂ ਲੱਗਦਾ ਹੈ?",
          answer: "ਇਹ ਕਾਗਜ਼ੀ ਕਾਰਵਾਈ ਅਤੇ ਕਵਰੇਜ ਉੱਤੇ ਨਿਰਭਰ ਕਰਦਾ ਹੈ। ਅਸੀਂ ਪਹਿਲੇ ਫ਼ੋਨ ਉੱਤੇ ਤੁਹਾਨੂੰ ਅਸਲੀ ਸਮਾਂ-ਸੀਮਾ ਦੱਸਾਂਗੇ।",
        },
        {
          question: "ਕੀ ਅਸੀਂ ਪਹਿਲਾਂ ਅਜ਼ਮਾ ਕੇ ਦੇਖ ਸਕਦੇ ਹਾਂ?",
          answer: "ਦੌਰੇ ਤੋਂ ਸ਼ੁਰੂ ਕਰੋ। ਜਦੋਂ ਆਓ ਤਾਂ ਸਾਨੂੰ ਇੱਕ ਅਜ਼ਮਾਇਸ਼ੀ ਦਿਨ ਬਾਰੇ ਪੁੱਛੋ।",
        },
        {
          question: "ਜੇ ਮੇਰਾ ਪਿਆਰਾ ਆਉਣਾ ਨਾ ਚਾਹੇ ਤਾਂ?",
          answer: "ਇਹ ਆਮ ਗੱਲ ਹੈ। ਦੌਰਾ ਅਤੇ ਛੋਟਾ ਪਹਿਲਾ ਹਫ਼ਤਾ ਅਕਸਰ ਮਦਦ ਕਰਦੇ ਹਨ। ਅਸੀਂ ਇਹ ਬਹੁਤ ਵਾਰ ਕੀਤਾ ਹੈ।",
        },
      ],
    },
    qualifyPrompt: {
      heading: "ਪੱਕਾ ਨਹੀਂ ਪਤਾ ਕਿ ਇਹ ਠੀਕ ਹੈ?",
      text: "ਪੰਜ ਛੋਟੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਅਗਲੇ ਕਦਮ ਵੱਲ ਇਸ਼ਾਰਾ ਕਰਾਂਗੇ। ਇਸ ਵਿੱਚ ਲਗਭਗ ਇੱਕ ਮਿੰਟ ਲੱਗਦਾ ਹੈ।",
    },
    cta: {
      heading: "ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋ?",
      text: "ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ। ਸਵਾਲ ਪੁੱਛਣ ਦਾ ਕੋਈ ਖਰਚਾ ਨਹੀਂ ਹੈ।",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "ਕੀ ਮੈਂ ਯੋਗ ਹਾਂ?",
      description:
        "ਪੰਜ ਛੋਟੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ ਅਤੇ ਦੇਖੋ ਕਿ West Sacramento ਵਿੱਚ Golden Days ਤੁਹਾਡੇ ਲਈ ਠੀਕ ਹੋ ਸਕਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।",
    },
    intro: {
      heading: "ਦੇਖੋ ਕਿ Golden Days ਤੁਹਾਡੇ ਜਾਂ ਤੁਹਾਡੇ ਪਿਆਰੇ ਲਈ ਠੀਕ ਹੋ ਸਕਦਾ ਹੈ ਜਾਂ ਨਹੀਂ।",
      reassurance:
        "ਇਸ ਵਿੱਚ ਲਗਭਗ ਇੱਕ ਮਿੰਟ ਲੱਗਦਾ ਹੈ। ਇਹ ਅਰਜ਼ੀ ਨਹੀਂ ਹੈ ਅਤੇ ਅੰਤਿਮ ਫ਼ੈਸਲਾ ਵੀ ਨਹੀਂ। ਅਸੀਂ ਤੁਹਾਡਾ ਨਾਮ ਜਾਂ ਸਿਹਤ ਦੀ ਕੋਈ ਜਾਣਕਾਰੀ ਨਹੀਂ ਮੰਗਦੇ, ਅਤੇ ਤੁਹਾਡੇ ਜਵਾਬ ਇਸੇ ਪੰਨੇ ਉੱਤੇ ਰਹਿੰਦੇ ਹਨ। ਅਸੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਇਕੱਠਾ ਜਾਂ ਸਟੋਰ ਨਹੀਂ ਕਰਦੇ।",
      startLabel: "ਸਵਾਲ ਸ਼ੁਰੂ ਕਰੋ",
    },
    progressLabel: "ਸਵਾਲ {current} / {total}",
    progressBarLabel: "ਤੁਸੀਂ ਕਿੱਥੋਂ ਤੱਕ ਪਹੁੰਚੇ ਹੋ",
    backLabel: "ਪਿੱਛੇ ਜਾਓ",
    helpLabel: "ਇਸ ਦਾ ਕੀ ਮਤਲਬ ਹੈ?",
    answers: {
      yes: "ਹਾਂ",
      no: "ਨਹੀਂ",
      notSure: "ਪੱਕਾ ਨਹੀਂ ਪਤਾ",
    },
    answerGroupLabel: "ਇੱਕ ਜਵਾਬ ਚੁਣੋ",
    questions: [
      {
        text: "ਕੀ ਵਿਅਕਤੀ ਦੀ ਉਮਰ 18 ਸਾਲ ਜਾਂ ਵੱਧ ਹੈ?",
        help: "Golden Days ਬਾਲਗਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮ ਹੈ। ਜੇ ਤੁਸੀਂ ਮਾਤਾ-ਪਿਤਾ ਜਾਂ ਜੀਵਨ-ਸਾਥੀ ਲਈ ਪੁੱਛ ਰਹੇ ਹੋ, ਤਾਂ ਉਸ ਵਿਅਕਤੀ ਲਈ ਜਵਾਬ ਦਿਓ।",
      },
      {
        text: "ਕੀ ਉਹ West Sacramento ਜਾਂ ਸਾਡੀ ਸੇਵਾ ਵਾਲੇ ਕਿਸੇ ਨੇੜਲੇ ਇਲਾਕੇ ਵਿੱਚ ਰਹਿੰਦੇ ਹਨ?",
        help: "ਅਸੀਂ West Sacramento ਅਤੇ ਨੇੜਲੇ ਇਲਾਕਿਆਂ ਵਿੱਚ ਸੇਵਾ ਦਿੰਦੇ ਹਾਂ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova ਅਤੇ Antelope ਸ਼ਾਮਲ ਹਨ। ਜੇ ਤੁਹਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ, ਤਾਂ \"ਪੱਕਾ ਨਹੀਂ ਪਤਾ\" ਚੁਣੋ ਅਤੇ ਅਸੀਂ ਦੇਖ ਲਵਾਂਗੇ।",
      },
      {
        text: "ਕੀ ਉਹ ਵਾਕਰ ਜਾਂ ਵ੍ਹੀਲਚੇਅਰ ਨਾਲ ਜਾਂ ਉਸ ਤੋਂ ਬਿਨਾਂ, ਦਿਨ ਵੇਲੇ ਸਮੂਹਿਕ ਗਤੀਵਿਧੀਆਂ ਵਿੱਚ ਹਿੱਸਾ ਲੈ ਸਕਦੇ ਹਨ?",
        help: "ਸਮੂਹਿਕ ਗਤੀਵਿਧੀਆਂ ਵਿੱਚ ਕਸਰਤ, ਸੰਗੀਤ, ਖੇਡਾਂ ਅਤੇ ਮਿਲ ਕੇ ਖਾਣਾ ਸ਼ਾਮਲ ਹਨ। ਲੋਕ ਆਪੋ-ਆਪਣੇ ਢੰਗ ਨਾਲ ਹਿੱਸਾ ਲੈਂਦੇ ਹਨ, ਅਤੇ ਕੁਝ ਨੂੰ ਦਿਨ ਵੇਲੇ ਡਾਕਟਰੀ ਧਿਆਨ ਦੀ ਵੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਜੇ ਤੁਹਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ ਕਿ ਉਹ ਸਮੂਹ ਵਿੱਚ ਨਿਭ ਸਕਣਗੇ, ਤਾਂ \"ਪੱਕਾ ਨਹੀਂ ਪਤਾ\" ਚੁਣੋ।",
      },
      {
        text: "ਕੀ ਉਨ੍ਹਾਂ ਕੋਲ ਕਿਸੇ ਇੰਸ਼ੋਰੈਂਸ ਕੰਪਨੀ ਤੋਂ ਸਿਹਤ ਇੰਸ਼ੋਰੈਂਸ ਹੈ, Medi-Cal ਦੇ ਨਾਲ ਜਾਂ ਬਿਨਾਂ?",
        help: "ਅਸੀਂ ਇੰਸ਼ੋਰੈਂਸ ਸਵੀਕਾਰ ਕਰਦੇ ਹਾਂ, ਅਤੇ ਇੰਸ਼ੋਰੈਂਸ ਦੇ ਨਾਲ Medi-Cal ਵੀ। ਇਕੱਲਾ Medi-Cal ਕਾਫ਼ੀ ਨਹੀਂ ਹੈ। ਜੇ ਤੁਹਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ, ਤਾਂ \"ਪੱਕਾ ਨਹੀਂ ਪਤਾ\" ਚੁਣੋ।",
      },
      {
        text: "ਕੀ ਉਨ੍ਹਾਂ ਦਾ ਕੋਈ ਡਾਕਟਰ ਹੈ ਜੋ ਹਾਲੀਆ ਡਾਕਟਰੀ ਕਾਗਜ਼ਾਤ ਸਾਂਝੇ ਕਰ ਸਕਦਾ ਹੈ?",
        help: "ਅਸੀਂ ਉਨ੍ਹਾਂ ਦੇ ਇੰਸ਼ੋਰੈਂਸ ਦੀ ਜਾਣਕਾਰੀ ਦੇ ਨਾਲ ਉਨ੍ਹਾਂ ਦੇ ਡਾਕਟਰ ਤੋਂ ਹਾਲੀਆ ਡਾਕਟਰੀ ਕਾਗਜ਼ਾਤ ਮੰਗਦੇ ਹਾਂ। ਜੇ ਤੁਹਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ, ਤਾਂ \"ਪੱਕਾ ਨਹੀਂ ਪਤਾ\" ਚੁਣੋ।",
      },
    ],
    results: {
      announcement: "ਇਹ ਹਨ ਤੁਹਾਡੇ ਨਤੀਜੇ।",
      goodFit: {
        heading: "ਚੰਗੀ ਖ਼ਬਰ। Golden Days ਤੁਹਾਡੇ ਲਈ ਠੀਕ ਹੈ।",
        text: "ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ, ਅਤੇ ਅਸੀਂ ਅਗਲੇ ਕਦਮਾਂ ਵਿੱਚ ਮਦਦ ਕਰਾਂਗੇ।",
      },
      notFit: {
        heading: "ਹੋ ਸਕਦਾ ਹੈ Golden Days ਠੀਕ ਨਾ ਹੋਵੇ।",
        text: "ਜਾਂਚ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਜੇ ਤੁਸੀਂ ਇਸ ਬਾਰੇ ਗੱਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਸਾਨੂੰ ਮਦਦ ਕਰਕੇ ਖੁਸ਼ੀ ਹੋਵੇਗੀ।",
      },
      unsure: {
        heading: "ਅਜੇ ਸਾਨੂੰ ਪੱਕਾ ਨਹੀਂ ਪਤਾ, ਅਤੇ ਇਹ ਠੀਕ ਹੈ।",
        text: "ਬਹੁਤ ਸਾਰੇ ਪਰਿਵਾਰਾਂ ਨੂੰ ਸ਼ੁਰੂ ਵਿੱਚ ਪੱਕਾ ਪਤਾ ਨਹੀਂ ਹੁੰਦਾ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਹਾਲਾਤ ਨੂੰ ਮਿਲ ਕੇ ਵਿਚਾਰਾਂਗੇ। ਸਹੀ ਕਾਗਜ਼ਾਤ ਜਾਂ ਕਵਰੇਜ ਨਾਲ ਕੁਝ ਜਵਾਬ ਬਦਲ ਸਕਦੇ ਹਨ। ਜੇ ਹਰ ਜਵਾਬ ਹਾਂ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਠੀਕ ਬੈਠਦੇ ਹੋ।",
      },
      enrollmentLinkLabel: "ਪੜ੍ਹੋ ਕਿ ਦਾਖ਼ਲਾ ਕਿਵੇਂ ਹੁੰਦਾ ਹੈ",
      startOverLabel: "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "ਸੰਪਰਕ",
      description:
        "West Sacramento ਵਿੱਚ Golden Days Adult Day Health Care ਨੂੰ ਫ਼ੋਨ ਕਰੋ, ਸੁਨੇਹਾ ਭੇਜੋ, ਜਾਂ ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ।",
    },
    heading: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
    lead: "ਕੇਂਦਰ ਦੇ ਸਮੇਂ ਦੌਰਾਨ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ, ਜਾਂ ਸੁਨੇਹਾ ਭੇਜੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਜਵਾਬ ਦੇਵਾਂਗੇ।",
    detailsHeading: "ਆਓ ਜਾਂ ਫ਼ੋਨ ਕਰੋ",
    directionsHeading: "ਸਾਨੂੰ ਲੱਭੋ",
    directionsText:
      "ਦਾਖ਼ਲਾ ਜ਼ਮੀਨ ਦੇ ਬਰਾਬਰ ਹੈ ਅਤੇ ਪਾਰਕਿੰਗ ਇਮਾਰਤ ਦੇ ਸਾਹਮਣੇ ਹੈ।",
    photo: {
      kind: "building" as const,
      label: "ਫ਼ੋਟੋ ਲਈ ਥਾਂ - ਇਮਾਰਤ ਦਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ",
      alt: "1215 Merkley Ave ਉੱਤੇ Golden Days ਦਾ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ, ਦਰਵਾਜ਼ੇ ਦੇ ਉੱਪਰ ਬੋਰਡ ਅਤੇ ਰਾਹ ਦੇ ਨਾਲ ਰੱਖੇ ਕੋਨ।",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "ਦੌਰੇ ਦਾ ਸਮਾਂ ਤੈਅ ਕਰੋ",
    tourText:
      "ਦੌਰੇ ਪ੍ਰੋਗਰਾਮ ਦੇ ਸਮੇਂ ਦੌਰਾਨ, ਤਰਜੀਹੀ ਤੌਰ 'ਤੇ ਦੁਪਹਿਰ 1:30 ਤੋਂ ਪਹਿਲਾਂ ਹੁੰਦੇ ਹਨ, ਤਾਂ ਜੋ ਤੁਸੀਂ ਆਮ ਦਿਨ ਦੇਖ ਸਕੋ। ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਜਾਂ ਫਾਰਮ ਵਰਤੋ ਅਤੇ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਦੌਰਾ ਚਾਹੁੰਦੇ ਹੋ।",
  },

  form: {
    heading: "ਸਾਨੂੰ ਸੁਨੇਹਾ ਭੇਜੋ",
    responseTime: "ਸਾਡੀ ਟੀਮ ਦਾ ਇੱਕ ਮੈਂਬਰ ਇੱਕ ਕਾਰੋਬਾਰੀ ਦਿਨ ਦੇ ਅੰਦਰ ਤੁਹਾਨੂੰ ਫ਼ੋਨ ਕਰੇਗਾ।",
    callAlternativeLead: "ਗੱਲ ਕਰਨਾ ਪਸੰਦ ਕਰੋਗੇ?",
    callAlternativeLinkPrefix: "ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ:",
    medicalNote: "ਕਿਰਪਾ ਕਰਕੇ ਇਸ ਫਾਰਮ ਵਿੱਚ ਡਾਕਟਰੀ ਜਾਣਕਾਰੀ ਨਾ ਪਾਓ।",
    fields: {
      name: { label: "ਤੁਹਾਡਾ ਨਾਮ", placeholder: "ਪਹਿਲਾ ਅਤੇ ਆਖ਼ਰੀ ਨਾਮ" },
      phone: { label: "ਫ਼ੋਨ ਨੰਬਰ", placeholder: "(916) 555-0123" },
      email: { label: "ਈਮੇਲ (ਜ਼ਰੂਰੀ ਨਹੀਂ)", placeholder: "you@example.com" },
      message: {
        label: "ਅਸੀਂ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦੇ ਹਾਂ? (ਜ਼ਰੂਰੀ ਨਹੀਂ)",
        placeholder: "ਸਾਨੂੰ ਥੋੜ੍ਹਾ ਦੱਸੋ ਕਿ ਸੰਭਾਲ ਕਿਸ ਲਈ ਚਾਹੀਦੀ ਹੈ।",
      },
      honeypot: { label: "ਇਸ ਖਾਨੇ ਨੂੰ ਖਾਲੀ ਛੱਡੋ" },
    },
    required: "ਜ਼ਰੂਰੀ",
    submit: "ਸੁਨੇਹਾ ਭੇਜੋ",
    submitting: "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ...",
    successHeading: "ਧੰਨਵਾਦ। ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਭੇਜ ਦਿੱਤਾ ਗਿਆ ਹੈ।",
    successText:
      "ਅਸੀਂ ਕੇਂਦਰ ਦੇ ਸਮੇਂ ਦੌਰਾਨ ਤੁਹਾਨੂੰ ਜਵਾਬ ਦੇਵਾਂਗੇ। ਜੇ ਤੁਹਾਨੂੰ ਜਲਦੀ ਜਵਾਬ ਚਾਹੀਦਾ ਹੈ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
    successAgain: "ਇੱਕ ਹੋਰ ਸੁਨੇਹਾ ਭੇਜੋ",
    errorHeading: "ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਨਹੀਂ ਪਹੁੰਚਿਆ।",
    errorText: "ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ, ਜਾਂ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
    notConfiguredHeading: "ਸੁਨੇਹੇ ਵਾਲਾ ਫਾਰਮ ਅਜੇ ਜੋੜਿਆ ਨਹੀਂ ਗਿਆ।",
    notConfiguredText:
      "ਇਸ ਸਾਈਟ ਉੱਤੇ ਫਾਰਮ ਦਾ ਕੋਈ ਪਤਾ ਸੈੱਟ ਨਹੀਂ ਹੈ, ਇਸ ਲਈ ਕੁਝ ਵੀ ਨਹੀਂ ਭੇਜਿਆ ਗਿਆ। ਫਾਰਮ ਚਾਲੂ ਕਰਨ ਲਈ NEXT_PUBLIC_FORM_ENDPOINT ਨੂੰ Formspree ਦੇ ਪਤੇ ਉੱਤੇ ਸੈੱਟ ਕਰੋ। ਉਦੋਂ ਤੱਕ, ਕਿਰਪਾ ਕਰਕੇ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ।",
    validation: {
      name: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਨਾਮ ਲਿਖੋ।",
      phone: "ਕਿਰਪਾ ਕਰਕੇ ਅਜਿਹਾ ਫ਼ੋਨ ਨੰਬਰ ਲਿਖੋ ਜਿਸ ਉੱਤੇ ਅਸੀਂ ਫ਼ੋਨ ਕਰ ਸਕੀਏ।",
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
    label: "ਭਾਸ਼ਾ",
  },

  a11y: {
    stepLabel: "ਕਦਮ {number}: ",
  },

  notFound: {
    metaTitle: "ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
    heading: "ਸਾਨੂੰ ਉਹ ਪੰਨਾ ਨਹੀਂ ਮਿਲਿਆ",
    text: "ਹੋ ਸਕਦਾ ਹੈ ਪੰਨਾ ਹਿਲਾ ਦਿੱਤਾ ਗਿਆ ਹੋਵੇ। ਸਕਰੀਨ ਦੇ ਉੱਪਰ ਦਿੱਤਾ ਮੀਨੂ ਵਰਤੋ, ਜਾਂ ਸਾਨੂੰ ਫ਼ੋਨ ਕਰੋ ਅਤੇ ਅਸੀਂ ਮਦਦ ਕਰਾਂਗੇ।",
    homeLabel: "ਮੁੱਖ ਪੰਨੇ ਉੱਤੇ ਜਾਓ",
  },

  photoPlaceholderNote: "ਨਮੂਨਾ ਤਸਵੀਰ। ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇਸ ਨੂੰ ਅਸਲੀ ਫ਼ੋਟੋ ਨਾਲ ਬਦਲੋ।",
};
