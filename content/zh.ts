/**
 * Chinese text for the website, in Traditional characters (繁體中文), which is what
 * Medi-Cal and California county materials use for Chinese readers. It has the same
 * shape as `en.ts`, so TypeScript reports any string that is missing. When you
 * change wording in `en.ts`, update the matching line here too.
 *
 * Machine-assisted translation: have a fluent Chinese reader check the whole file
 * before launch. If many families read Simplified characters instead, add a
 * separate `zh-Hans` language rather than changing this one.
 */

import { phone, type Content } from "./en";

export const zh: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "跳到主要內容",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "電話",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "電子郵件",
    addressLabel: "地址",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "開放時間",
    hours: "中心開放時間：星期一至星期五，上午 8:00 至下午 4:30",
    programHours: "活動時間：星期一至星期五，上午 8:00 至下午 2:00",
    hoursNote:
      "星期六和星期日休息。感恩節、聖誕節（12 月 25 日）、元旦（1 月 1 日）和美國獨立紀念日（7 月 4 日）也休息。",
    mapTitle: "Golden Days Adult Day Health Care 位置地圖",
    directionsLinkLabel: "取得路線",
    languagesLabel: "語言",
    languagesLine: "我們會說英語、俄語和烏克蘭語，也可提供中文口譯。",
  },

  nav: {
    menuLabel: "選單",
    closeLabel: "關閉",
    ariaLabel: "主要導覽",
    links: [
      { href: "/", label: "首頁" },
      { href: "/about", label: "關於我們" },
      { href: "/services", label: "服務項目" },
      { href: "/transportation", label: "交通接送" },
      { href: "/qualify", label: "我適合嗎？" },
      { href: "/enrollment", label: "如何報名" },
      { href: "/contact", label: "聯絡我們" },
    ],
  },

  buttons: {
    call: "打電話給我們",
    callWithNumber: `致電 ${phone.display}`,
    scheduleTour: "預約參觀",
    doIQualify: "我適合嗎？",
    learnMore: "了解更多",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "位於加州 West Sacramento 的成人日間健康照護中心。自 2003 年起，我們一直照顧附近的家庭。",
    contactHeading: "聯絡我們",
    hoursHeading: "開放時間",
    copyright: "Golden Days Adult Day Health Care。版權所有。",
    privacyLabel: "隱私權",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "West Sacramento 成人日間照護中心",
      description:
        "Golden Days Adult Day Health Care 是位於加州 West Sacramento 的成人日間照護中心。歡迎致電或預約參觀。",
    },
    hero: {
      heading: "West Sacramento 的成人日間照護",
      intro:
        "Golden Days 為成年人提供日間照護，也為照顧他們的家人提供支持。",
      photo: {
        kind: "building" as const,
        label: "照片位置 — 中心外觀",
        alt: "Golden Days Adult Day Health Care 的外觀：敞開的入口上方有太陽標誌，窗上貼著 Welcome to Golden Days 的歡迎字樣。",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "我們服務的對象",
      paragraphs: [
        "Golden Days 接待住在家中、白天需要協助、陪伴或看顧的成年人。",
        "許多參加者與需要上班的家人同住，或是家人需要在一週中休息一下。",
        "如果您不確定 Golden Days 是否適合您的家人，請打電話給我們。我們很樂意與您談談，不會給您任何壓力。",
      ],
    },
    services: {
      heading: "我們提供的服務",
      intro: "在 Golden Days 的一天可以包括以下任何項目。",
      linkLabel: "查看所有服務",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "護理照護",
          text: "我們的護理師在白天關注每位參加者的健康狀況。",
        },
        {
          icon: "rehabilitation" as const,
          title: "復健",
          text: "幫助保持力量、平衡和活動能力的治療與運動。",
        },
        {
          icon: "nutrition" as const,
          title: "營養",
          text: "每天提供早餐和午餐。廚師會配合每個人的需要。",
        },
        {
          icon: "socialWork" as const,
          title: "社工服務",
          text: "協助處理福利、文件和當地資源的問題。",
        },
        {
          icon: "recreation" as const,
          title: "休閒活動",
          text: "音樂、遊戲、手工藝、運動、外出活動，以及與其他人相處。",
        },
        {
          icon: "transportation" as const,
          title: "交通接送",
          text: "在活動日接送往返。",
        },
      ],
    },
    transportation: {
      heading: "路程也是照護的一部分",
      paragraphs: [
        "Golden Days 為參加者安排往返中心的接送，包括使用輪椅或助行器的人。",
        "我們會與您的家人確認接送時段，行程有變動時也會打電話通知。",
      ],
      linkLabel: "了解交通接送",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "照片位置 — Golden Days 巴士",
        alt: "停在中心外面的白色 Golden Days 巴士，乘客車門敞開。",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "如何報名",
      intro: "只需四個步驟，每一步我們都會協助您。",
      steps: [
        {
          title: "打電話或留言給我們",
          text: "簡單告訴我們您的家人和他目前一天的生活情況。",
        },
        {
          title: "來中心看看",
          text: "參觀中心、認識工作人員，並提出任何問題。",
        },
        {
          title: "接受評估",
          text: "我們的團隊會了解健康狀況和日常需要，以確認這個活動是否合適。",
        },
        {
          title: "開始參加",
          text: "我們會安排參加的日子和接送，並熱情迎接您的家人。",
        },
      ],
      linkLabel: "了解報名詳情",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "費用方面呢？",
      text: "我們接受保險，也接受 Medi-Cal 加上保險。也可以自費。請打電話給我們，我們會說明適合您家庭的方式。",
    },
    trust: {
      text: "自 2003 年起，我們一直照顧 West Sacramento 的家庭。自 2007 年起由同一批業主經營。",
    },
    contact: {
      heading: "與我們聯絡",
      intro:
        "請留言，我們會回覆您，或在中心開放時間內打電話給我們。",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "關於 Golden Days",
      description:
        "自 2003 年起，Golden Days Adult Day Health Care 一直照顧 West Sacramento 的家庭，自 2007 年起由同一批業主經營。",
    },
    heading: "關於 Golden Days",
    lead: "Golden Days Adult Day Health Care 自 2003 年起在 West Sacramento 服務。自 2007 年起由同一批業主經營。",
    photo: {
      kind: "interior" as const,
      label: "照片位置 — 中心工作人員",
      alt: "Golden Days 工作人員團體照的暫用圖片",
    },
    story: {
      heading: "我們的故事",
      paragraphs: [
        "Golden Days 於 2003 年在 West Sacramento 成立，讓成年人白天有一個受到細心照顧的地方。自 2007 年起由同一批業主經營。",
        "這些年來，我們認識了許多附近的家庭。有些人多年來每週來好幾天，他們的家人也成為中心的一份子。",
        "每天大約有 120 人在這裡度過一天，工作人員仍然花時間了解每個人的名字、習慣，以及怎樣讓他們覺得舒適。",
      ],
    },
    values: {
      heading: "我們重視的事",
      items: [
        {
          title: "先有尊重",
          text: "來到這裡的都是成年人，我們也這樣對待他們。",
        },
        {
          title: "清楚直接的答案",
          text: "我們用簡單的語言說明費用、文件和行程。",
        },
        {
          title: "穩定的作息",
          text: "熟悉的面孔和固定的日程，讓人更容易安頓下來。",
        },
        {
          title: "讓家人隨時知情",
          text: "有變動時我們會打電話通知，電話也一定有人接聽。",
        },
      ],
    },
    team: {
      heading: "我們的團隊",
      paragraphs: [
        "我們的團隊包括護理師、復健人員、社工、活動帶領人、司機和廚房人員。",
        "其中許多人已在 Golden Days 工作多年，並且會說多種語言。",
      ],
    },
    center: {
      heading: "我們的中心",
      paragraphs: [
        "中心內有活動室、餐廳、安靜的休息室、治療區和無障礙洗手間。",
        "停車場在大樓前面，入口與地面同高，沒有台階。",
      ],
      photo: {
        kind: "interior" as const,
        label: "照片位置 — 餐廳",
        alt: "Golden Days 的餐廳：圓桌已擺好午餐餐具，桌上放著鮮花。",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    cta: {
      heading: "歡迎來親自看看",
      text: "參觀大約需要半小時。請打電話給我們，我們會安排時間。",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "服務項目",
      description:
        "Golden Days（West Sacramento）提供護理照護、復健、營養、社工服務、休閒活動和交通接送。",
    },
    heading: "服務項目",
    lead: "Golden Days 的一天圍繞六種支持而安排。家庭可以選擇適合自己的日子。",
    items: [
      {
        icon: "nursing" as const,
        title: "護理照護",
        summary: "我們的護理師在白天檢查健康狀況並協助用藥。",
        details: [
          "護理師會測量生命徵象和血糖。",
          "護理師會在活動時間內按時協助用藥。",
          "如果健康狀況有變化，我們會打電話給家人和醫生的診所。",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "復健",
        summary: "保持力量、平衡和活動能力的運動與治療。",
        details: [
          "復健人員會針對行走、平衡和日常動作進行訓練。",
          "活動會根據每個人的目標來安排。",
          "大多數早上有團體運動，歡迎想參加的人加入。",
          "持有執照的治療師提供按摩治療和石蠟療法，參加者不需額外付費。",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "營養",
        summary: "每個活動日提供早餐和午餐。廚師會配合每個人的需要。",
        details: [
          "每個活動日都提供早餐和午餐，菜單會輪換。",
          "專門的廚師會依每個人的需要準備餐點。",
          "請告訴我們飲食方面的需要，例如過敏、吞嚥困難（我們可以把食物切碎）或素食。",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "社工服務",
        summary: "協助處理福利、文件，以及尋找中心以外的服務。",
        details: [
          "我們的社工會協助家庭了解表格和保險給付的問題。",
          "我們可以介紹當地的服務，例如居家協助或送餐服務。",
          "如果需要調整計劃，可以與家人會面討論。",
        ],
      },
      {
        icon: "recreation" as const,
        title: "休閒活動",
        summary: "白天有音樂、遊戲、手工藝、輕度運動和聊天交流。",
        details: [
          "每天都有可以參加或不參加的活動：音樂、遊戲、手工藝和運動。",
          "外出活動平均每週最多三次，不另收費。行動不便的人也可以參加。",
          "節日和生日我們會一起慶祝。",
        ],
      },
      {
        icon: "transportation" as const,
        title: "交通接送",
        summary: "在活動日接送往返。",
        details: [
          "我們服務範圍內提供接送。",
          "我們的車輛可載送使用輪椅或助行器的人。",
          "巴士會盡量停靠在離門口最近的地方。在家中，由陪同人員協助參加者上車。到了中心，司機會協助參加者下車。",
        ],
      },
    ],
    dayHeading: "一天的行程",
    daySchedule: [
      { time: "上午 8:30", text: "迎接與問候" },
      { time: "上午 9:00", text: "復健運動" },
      { time: "上午 9:30", text: "早餐／電視新聞" },
      { time: "上午 10:00", text: "健康講座／個別物理治療（星期一、二、五）" },
      { time: "上午 10:30", text: "復健運動／健走社／外出活動" },
      { time: "上午 11:00", text: "復健運動／團體治療" },
      { time: "上午 11:30", text: "復健運動／記憶小組／遊戲與活動／心靈小組" },
      { time: "中午 12:00", text: "訪客與特邀講者／個別物理治療（星期一、二、五）" },
      { time: "下午 12:30", text: "個別職能治療（星期三、五）" },
      { time: "下午 1:00", text: "午餐" },
      { time: "下午 1:30", text: "電影／討論" },
    ],
    weeklyHeading: "每週活動",
    weeklyActivities: [
      { day: "星期二", text: "記憶小組" },
      { day: "星期三", text: "英語課" },
      { day: "星期五", text: "賓果" },
    ],
    cta: {
      heading: "不確定您的家人需要哪些服務？",
      text: "請打電話給我們。我們會問幾個問題，並給您誠實的答覆。",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "交通接送",
      description:
        "Golden Days（West Sacramento）的接送服務，包括可載輪椅的車輛。",
    },
    heading: "交通接送",
    lead: "前往中心不應該是件難事。Golden Days 為有需要的人安排往返活動的接送。",
    photo: {
      kind: "bus" as const,
      label: "照片位置 — Golden Days 巴士內部",
      alt: "Golden Days 巴士內部：寬闊走道兩側是成排的藍色座椅，牆上有輪椅無障礙標誌。",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "服務範圍",
        paragraphs: [
          "我們提供 West Sacramento 及附近地區的接送。",
          "此範圍以外的部分地址也可能可以接送，要看日期和路線。如果您的地區不在名單上，請打電話告訴我們地址，我們會幫您確認。",
        ],
        list: {
          label: "我們通常服務的地區：",
          items: [
            "West Sacramento",
            "Bryte 和 Broderick",
            "Southport",
            "Sacramento 靠河的部分地區",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "上車與下車",
        paragraphs: [
          "每位乘客會得到一個接送時段，而不是確切的分鐘，因為交通狀況和其他乘客會影響路線。",
          "我們會盡量停靠在離門口最近的地方。上車時，由參加者的陪同人員協助他們上車。司機不會協助參加者上車，也無法把人抬上巴士。",
          "到了中心，司機可以協助參加者下車，我們的照護人員也會在那裡迎接。我們的照護人員不會到家中接人。",
          "如果巴士延誤，我們會打電話通知家人。",
        ],
      },
      {
        heading: "輪椅與行動不便的乘客",
        paragraphs: [
          "我們的車輛可載送使用輪椅、助行器或拐杖的人。",
          "輪椅在車輛行駛前會被固定好，所有乘客都會繫上安全帶。",
          "如果有氧氣設備、轉位需要，或其他司機應該知道的事，請告訴我們，我們會事先準備。",
        ],
      },
      {
        heading: "如何安排或更改接送",
        paragraphs: [
          "接送在您的家人報名時安排，之後每週的時間都相同。",
          "如要更改上車地址、增加日子或取消接送，請打電話到辦公室。",
          "如果是當天取消，請盡早來電，讓司機有時間調整路線。",
        ],
        list: {
          label: "更改接送時，請準備好：",
          items: [
            "乘客姓名",
            "要更改的日期",
            "如果上車地點改變，請提供新地址",
            "當天可以聯絡到您的電話號碼",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "照片位置 — Golden Days 巴士的輪椅升降台",
      alt: "Golden Days 巴士後部的輪椅升降台：平台升起在敞開的後門內。",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "對接送有疑問？",
      text: "請打電話到辦公室，詢問接送時間表。",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "如何報名",
      description:
        "了解誰可以參加 Golden Days、費用由誰支付、需要帶什麼，以及如何在 West Sacramento 報名。",
    },
    heading: "如何報名",
    lead: "報名只需要幾次談話，不需要一大堆文件。以下是過程。",
    qualifies: {
      heading: "誰可以參加",
      intro: "Golden Days 通常適合符合以下條件的成年人：",
      items: [
        "住在家中或與家人同住",
        "白天需要協助、看顧或陪伴",
        "有健康狀況，定期檢查對其有幫助",
        "能夠參加團體日間活動",
      ],
      note: "是否符合資格，是在評估之後決定的，不是在電話中決定。請打電話給我們，我們會告訴您下一步怎麼做。",
    },
    pays: {
      heading: "費用由誰支付",
      intro: "家庭通常用以下方式之一支付：",
      items: [
        {
          title: "Medi-Cal",
          text: "我們接受 Medi-Cal 加上保險計劃，但不接受單獨的 Medi-Cal。我們可以向您說明流程。",
        },
        {
          title: "管理式醫療計劃",
          text: "有些醫療保險計劃會給付日間照護。我們會幫您查詢您的計劃有哪些給付。",
        },
        {
          title: "自費",
          text: "家庭也可以直接付費。",
        },
      ],
      note: "本頁的任何內容都不是給付承諾或價格。請打電話給我們，了解您目前的情況。",
    },
    bring: {
      heading: "需要帶什麼",
      intro: "請帶上您現有的東西，其他的我們會協助。",
      items: [
        "附照片的證件",
        "保險卡（可以單獨帶來）",
        "Medi-Cal 卡（請與保險卡一起帶來，不要單獨帶）",
        "醫生的姓名和電話號碼",
        "緊急聯絡人的姓名和電話號碼",
        "您已有的近期醫療記錄",
      ],
    },
    steps: {
      heading: "步驟",
      items: [
        {
          title: "打電話或留言給我們",
          text: "告訴我們您的家人、您希望選擇的日子，以及您的擔心。這次談話大約十分鐘。",
        },
        {
          title: "參觀中心",
          text: "請在活動時間內前來，最好在下午 1:30 之前，這樣可以看到平常的一天。如果您的家人覺得自在，請帶他一起來。",
        },
        {
          title: "評估",
          text: "我們的團隊會了解健康史、日常需要和目標，確認這個活動是否合適。",
        },
        {
          title: "文件與保險給付",
          text: "我們會一起填寫報名文件，並處理保險給付的問題。",
        },
        {
          title: "第一天",
          text: "我們會安排行程和接送，並介紹您的家人認識工作人員和其他參加者。",
        },
      ],
    },
    faq: {
      heading: "常見問題",
      items: [
        {
          question: "我的家人每週可以來幾天？",
          answer: "可以安排每週一到五天。我們會與您一起訂出行程。",
        },
        {
          question: "報名需要多久？",
          answer: "這取決於文件和保險給付。第一次通話時，我們會告訴您實際的時間。",
        },
        {
          question: "可以先試試看嗎？",
          answer: "請先來參觀。您來的時候，可以問我們有沒有試參加的日子。",
        },
        {
          question: "如果我的家人不想來怎麼辦？",
          answer: "這很常見。先參觀一次，第一週先短時間參加，通常會有幫助。我們已經處理過很多次了。",
        },
      ],
    },
    qualifyPrompt: {
      heading: "不確定是否適合？",
      text: "回答五個簡短的問題，我們會告訴您下一步。大約只需要一分鐘。",
    },
    cta: {
      heading: "準備好開始了嗎？",
      text: "請打電話給我們或預約參觀。提問不收費。",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "我適合嗎？",
      description:
        "回答五個簡短的問題，看看 Golden Days（West Sacramento）是否適合您。",
    },
    intro: {
      heading: "看看 Golden Days 是否適合您或您的家人。",
      reassurance:
        "大約只需要一分鐘。這不是申請，也不是最終決定。我們不會詢問您的姓名或健康資料，您的答案只會留在這個頁面上。我們不會收集或儲存。",
      startLabel: "開始回答問題",
    },
    progressLabel: "第 {current} 題，共 {total} 題",
    progressBarLabel: "您的進度",
    backLabel: "返回",
    helpLabel: "這是什麼意思？",
    answers: {
      yes: "是",
      no: "否",
      notSure: "不確定",
    },
    answerGroupLabel: "請選擇一個答案",
    questions: [
      {
        text: "這個人是否年滿 18 歲？",
        help: "Golden Days 是為成年人設立的活動。如果您是在為父母或配偶回答，請以他們的情況為準。",
      },
      {
        text: "這個人是否住在 West Sacramento 或我們服務的附近地區？",
        help: "我們服務 West Sacramento 及附近地區，包括 Sacramento、Natomas、Elk Grove、Carmichael、Rancho Cordova 和 Antelope。如果您不確定，請選擇「不確定」，我們會幫您確認。",
      },
      {
        text: "這個人白天能參加團體活動嗎？無論是否使用助行器或輪椅都可以。",
        help: "團體活動包括運動、音樂、遊戲和一起用餐。每個人參加的方式不同，有些人白天也需要護理協助。如果您不確定這個人在團體中是否適應，請選擇「不確定」。",
      },
      {
        text: "這個人是否有保險公司提供的醫療保險？有沒有 Medi-Cal 都可以。",
        help: "我們接受保險，也接受 Medi-Cal 加上保險。只有 Medi-Cal 不行。如果您不確定，請選擇「不確定」。",
      },
      {
        text: "這個人是否有醫生可以提供近期的醫療記錄？",
        help: "我們會請您提供醫生開立的近期醫療記錄，以及保險資料。如果您不確定，請選擇「不確定」。",
      },
    ],
    results: {
      announcement: "這是您的結果。",
      goodFit: {
        heading: "好消息。Golden Days 很適合您。",
        text: "請打電話給我們或預約參觀，我們會協助您完成後續步驟。",
      },
      notFit: {
        heading: "Golden Days 可能不太適合。",
        text: "謝謝您的查詢。如果您想談談，請打電話給我們，我們很樂意協助。",
      },
      unsure: {
        heading: "我們目前還不確定，這很正常。",
        text: "許多家庭一開始都不確定。請打電話給我們，我們會與您一起檢視您的情況。有些答案在備齊文件或保險後可能會改變。如果所有問題您都回答「是」，Golden Days 就很適合您。",
      },
      enrollmentLinkLabel: "了解報名過程",
      startOverLabel: "重新開始",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "聯絡我們",
      description:
        "致電 West Sacramento 的 Golden Days Adult Day Health Care、留言或預約參觀。",
    },
    heading: "聯絡我們",
    lead: "請在中心開放時間內打電話給我們，或留言，我們會回覆您。",
    detailsHeading: "來訪或來電",
    directionsHeading: "如何找到我們",
    directionsText:
      "入口與地面同高，停車場在大樓前面。",
    photo: {
      kind: "building" as const,
      label: "照片位置 — 大樓入口",
      alt: "1215 Merkley Ave 的 Golden Days 入口：門上方有招牌，步道旁有交通錐。",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "預約參觀",
    tourText:
      "參觀安排在活動時間內，最好在下午 1:30 之前，這樣您可以看到平常的一天。請打電話給我們，或使用表格並告訴我們您想參觀。",
  },

  form: {
    heading: "傳送訊息給我們",
    responseTime: "我們的團隊成員會在一個工作天內打電話給您。",
    callAlternativeLead: "想直接講電話嗎？",
    callAlternativeLinkPrefix: "請打電話給我們：",
    medicalNote: "請不要在此表格中填寫醫療資料。",
    fields: {
      name: { label: "您的姓名", placeholder: "姓名" },
      phone: { label: "電話號碼", placeholder: "(916) 555-0123" },
      email: { label: "電子郵件（選填）", placeholder: "you@example.com" },
      message: {
        label: "我們可以怎樣幫助您？（選填）",
        placeholder: "簡單告訴我們需要照顧的人的情況。",
      },
      honeypot: { label: "請將此欄位留空" },
    },
    required: "必填",
    submit: "傳送訊息",
    submitting: "傳送中...",
    successHeading: "謝謝您。您的訊息已送出。",
    successText:
      "我們會在中心開放時間內回覆您。如果您需要更快得到回覆，請打電話給我們。",
    successAgain: "再傳送一則訊息",
    errorHeading: "您的訊息未能送出。",
    errorText: "請再試一次，或打電話給我們。",
    notConfiguredHeading: "訊息表格尚未連接。",
    notConfiguredText:
      "本網站尚未設定表格地址，所以沒有送出任何內容。請在 NEXT_PUBLIC_FORM_ENDPOINT 填入 Formspree 地址以啟用表格。在此之前，請打電話給我們。",
    validation: {
      name: "請輸入您的姓名。",
      phone: "請輸入我們可以打給您的電話號碼。",
    },
  },

  privacy: {
    meta: {
      title: "隱私權",
      description: "Golden Days 網站會如何使用、以及不會如何使用您的資料。",
    },
    heading: "隱私權",
    lead: "本頁用簡單的話說明，本網站會如何處理您的資料。",
    updated: "最後更新：2026 年 10 月",
    sections: [
      {
        heading: "如果您傳送訊息給我們",
        paragraphs: [
          "聯絡表格需要填寫您的姓名和電話號碼。電子郵件地址和訊息內容可填可不填。我們只會用您提供的資料回覆您，不會出售。",
          "訊息由 Formspree 傳送到我們中心的電子郵件。Formspree 是處理網站表格的服務。",
          "請不要在表格中填寫健康或醫療資料。請改為打電話給我們。",
        ],
      },
      {
        heading: "「我適合嗎？」問題",
        paragraphs: [
          "頁面開啟時，您的答案只會留在您的瀏覽器中。我們不會收集、傳送或儲存。",
        ],
      },
      {
        heading: "訪客人數統計",
        paragraphs: [
          "我們使用 Vercel Analytics 來統計訪問次數。它會記錄瀏覽了哪些頁面、訪客所在的國家、裝置和瀏覽器的類型，以及訪客是從哪個網站過來的。它不使用 cookie，不顯示廣告，也不會跟著您到其他網站。",
        ],
      },
      {
        heading: "地圖與 cookie",
        paragraphs: [
          "首頁和聯絡頁面會顯示 Google 地圖。地圖載入時，Google 可能會取得您的 IP 位址，也可能會設定 cookie，這適用 Google 自己的隱私權政策。本網站自己不會設定任何其他 cookie。",
        ],
      },
      {
        heading: "我們不會出售您的資料",
        paragraphs: [
          "我們不會出售您的資料，也不會為了廣告而與他人分享。",
        ],
      },
      {
        heading: "疑問或要求",
        paragraphs: [
          "如果您想請我們刪除您傳送的訊息，或對本頁有任何疑問，請打電話或寄電子郵件給我們。我們的電話和電子郵件在每一頁的最下方。",
          "如果本網站處理資料的方式有改變，我們會更新本頁。",
        ],
      },
    ],
  },

  language: {
    label: "語言",
  },

  a11y: {
    stepLabel: "第 {number} 步：",
  },

  notFound: {
    metaTitle: "找不到頁面",
    heading: "我們找不到這個頁面",
    text: "這個頁面可能已經移動。請使用螢幕上方的選單，或打電話給我們，我們會協助您。",
    homeLabel: "前往首頁",
  },

  photoPlaceholderNote: "暫用圖片。網站上線前請換成真正的照片。",
};
