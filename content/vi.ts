/**
 * Vietnamese text for the website. It has the same shape as `en.ts`, so TypeScript
 * reports any string that is missing. When you change wording in `en.ts`, update
 * the matching line here too.
 *
 * Machine-assisted translation: have a fluent Vietnamese speaker read the whole
 * file before launch.
 */

import { phone, type Content } from "./en";

export const vi: Content = {
  site: {
    name: "Golden Days Adult Day Health Care",
    shortName: "Golden Days",
    logoAlt: "Golden Days Adult Day Health Care",
    skipToContent: "Chuyển đến nội dung chính",
  },

  contact: {
    phoneDisplay: phone.display,
    phoneHref: phone.href,
    phoneLabel: "Điện thoại",
    email: "1215goldendays@gmail.com",
    emailHref: "mailto:1215goldendays@gmail.com",
    emailLabel: "Email",
    addressLabel: "Địa chỉ",
    addressLines: ["1215 Merkley Ave", "West Sacramento, CA 95691"],
    addressOneLine: "1215 Merkley Ave, West Sacramento, CA 95691",
    hoursLabel: "Giờ làm việc",
    hours: "Giờ làm việc của cơ sở: Thứ Hai đến Thứ Sáu, từ 8:00 sáng đến 4:30 chiều",
    programHours: "Giờ chương trình: Thứ Hai đến Thứ Sáu, từ 8:00 sáng đến 2:00 chiều",
    hoursNote:
      "Đóng cửa Thứ Bảy và Chủ Nhật. Cũng đóng cửa vào Lễ Tạ Ơn, Lễ Giáng Sinh, Ngày Tết Dương Lịch và Ngày Quốc Khánh Hoa Kỳ (4 tháng 7).",
    mapTitle: "Bản đồ chỉ vị trí của Golden Days Adult Day Health Care",
    directionsLinkLabel: "Xem chỉ đường",
  },

  nav: {
    menuLabel: "Menu",
    closeLabel: "Đóng",
    ariaLabel: "Điều hướng chính",
    links: [
      { href: "/", label: "Trang chủ" },
      { href: "/about", label: "Giới thiệu" },
      { href: "/services", label: "Dịch vụ" },
      { href: "/transportation", label: "Đưa đón" },
      { href: "/qualify", label: "Tôi có đủ điều kiện không?" },
      { href: "/enrollment", label: "Ghi danh" },
      { href: "/contact", label: "Liên hệ" },
    ],
  },

  buttons: {
    call: "Gọi cho chúng tôi",
    callWithNumber: `Gọi ${phone.display}`,
    scheduleTour: "Đặt lịch tham quan",
    doIQualify: "Tôi có đủ điều kiện không?",
    learnMore: "Tìm hiểu thêm",
  },

  footer: {
    aboutHeading: "Golden Days Adult Day Health Care",
    aboutText:
      "Trung tâm chăm sóc sức khỏe ban ngày cho người lớn tại West Sacramento, California. Phục vụ các gia đình địa phương từ năm 2003.",
    contactHeading: "Liên hệ với chúng tôi",
    hoursHeading: "Giờ làm việc",
    copyright: "Golden Days Adult Day Health Care. Bảo lưu mọi quyền.",
    disclaimer:
      "Trang web này là bản nháp. Mọi chi tiết được đánh dấu là nội dung tạm là văn bản mẫu và chưa được xác nhận.",
  },

  // ---------------------------------------------------------------- Home ---
  home: {
    meta: {
      title: "Chăm sóc sức khỏe ban ngày cho người lớn tại West Sacramento",
      description:
        "Golden Days Adult Day Health Care là chương trình chăm sóc ban ngày cho người lớn tại West Sacramento, California. Hãy gọi cho chúng tôi hoặc đặt lịch tham quan.",
    },
    hero: {
      heading: "Chăm sóc ban ngày cho người lớn tại West Sacramento",
      intro:
        "Golden Days là chương trình ban ngày dành cho người lớn và cho các gia đình đang chăm sóc họ.",
      photo: {
        kind: "building" as const,
        label: "Chỗ dành cho ảnh - mặt ngoài tòa nhà",
        alt: "Mặt trước của Trung tâm Golden Days Adult Day Health Care, với bảng hiệu hình mặt trời phía trên lối vào đang mở và tấm biển Welcome to Golden Days ở cửa sổ.",
        src: "/images/hero-building.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "Chúng tôi phục vụ ai",
      paragraphs: [
        "Golden Days đón nhận những người lớn sống tại nhà và cần được hỗ trợ, bầu bạn hoặc giám sát trong ban ngày.",
        "Nhiều người đến với chúng tôi sống cùng một thành viên gia đình đang đi làm, hoặc đơn giản là cần được nghỉ ngơi trong tuần.",
        "Nếu quý vị chưa chắc Golden Days có phù hợp với người thân của mình hay không, xin hãy gọi cho chúng tôi. Chúng tôi sẵn lòng trao đổi, không hề gây áp lực.",
      ],
    },
    services: {
      heading: "Chúng tôi cung cấp gì",
      intro: "Một ngày tại Golden Days có thể bao gồm bất kỳ điều nào dưới đây.",
      linkLabel: "Xem tất cả dịch vụ",
      linkHref: "/services",
      tiles: [
        {
          icon: "nursing" as const,
          title: "Chăm sóc điều dưỡng",
          text: "Đội ngũ điều dưỡng theo dõi nhu cầu sức khỏe trong ngày.",
        },
        {
          icon: "rehabilitation" as const,
          title: "Phục hồi chức năng",
          text: "Các buổi trị liệu giúp tăng sức mạnh, giữ thăng bằng và vận động hằng ngày.",
        },
        {
          icon: "nutrition" as const,
          title: "Dinh dưỡng",
          text: "Bữa sáng và bữa trưa mỗi ngày, do đầu bếp lên thực đơn theo nhu cầu của từng người.",
        },
        {
          icon: "socialWork" as const,
          title: "Công tác xã hội",
          text: "Giúp tìm hiểu về phúc lợi, giấy tờ và các nguồn hỗ trợ trong cộng đồng.",
        },
        {
          icon: "recreation" as const,
          title: "Sinh hoạt giải trí",
          text: "Âm nhạc, trò chơi, thủ công, thể dục, đi chơi xa và thời gian bên những người khác.",
        },
        {
          icon: "transportation" as const,
          title: "Đưa đón",
          text: "Xe đưa đón đến và về từ trung tâm vào những ngày có chương trình.",
        },
      ],
    },
    transportation: {
      heading: "Việc đến được trung tâm cũng là một phần của sự chăm sóc",
      paragraphs: [
        "Golden Days có xe đưa đón đến và về từ trung tâm cho những người tham gia chương trình, kể cả người dùng xe lăn hoặc khung tập đi.",
        "Chúng tôi thống nhất với gia đình quý vị một khoảng thời gian đón, và sẽ gọi nếu lịch cần thay đổi.",
      ],
      linkLabel: "Đọc về dịch vụ đưa đón",
      linkHref: "/transportation",
      photo: {
        kind: "bus" as const,
        label: "Chỗ dành cho ảnh - xe buýt Golden Days",
        alt: "Một chiếc xe buýt màu trắng của Golden Days đậu trước trung tâm, cửa hành khách đang mở.",
        src: "/images/bus.jpg",
        width: 1200,
        height: 900,
      },
    },
    enrollment: {
      heading: "Việc ghi danh diễn ra như thế nào",
      intro: "Bốn bước, và chúng tôi giúp quý vị ở từng bước.",
      steps: [
        {
          title: "Gọi hoặc gửi tin nhắn",
          text: "Cho chúng tôi biết đôi điều về người thân của quý vị và những ngày của họ hiện nay ra sao.",
        },
        {
          title: "Đến thăm trung tâm",
          text: "Đến xem cơ sở, gặp nhân viên và hỏi bất cứ điều gì quý vị muốn.",
        },
        {
          title: "Hoàn tất buổi đánh giá",
          text: "Đội ngũ của chúng tôi xem xét sức khỏe và nhu cầu sinh hoạt hằng ngày để xem chương trình có phù hợp hay không.",
        },
        {
          title: "Bắt đầu tham gia",
          text: "Chúng tôi thống nhất các ngày tham gia, sắp xếp xe đưa đón và chào đón người thân của quý vị.",
        },
      ],
      linkLabel: "Xem hướng dẫn ghi danh đầy đủ",
      linkHref: "/enrollment",
    },
    cost: {
      heading: "Còn chi phí thì sao?",
      text: "Chúng tôi nhận bảo hiểm, và Medi-Cal cùng với một chương trình bảo hiểm. Quý vị cũng có thể tự thanh toán. Hãy gọi cho chúng tôi và chúng tôi sẽ giải thích điều gì áp dụng cho gia đình quý vị.",
    },
    trust: {
      text: "Phục vụ các gia đình West Sacramento từ năm 2003. Cùng các chủ sở hữu từ năm 2007.",
    },
    contact: {
      heading: "Trò chuyện với chúng tôi",
      intro:
        "Hãy gửi tin nhắn và chúng tôi sẽ trả lời, hoặc gọi trong giờ làm việc của cơ sở.",
    },
  },

  // --------------------------------------------------------------- About ---
  about: {
    meta: {
      title: "Giới thiệu về Golden Days",
      description:
        "Golden Days Adult Day Health Care đã phục vụ các gia đình West Sacramento từ năm 2003, với cùng các chủ sở hữu từ năm 2007.",
    },
    heading: "Giới thiệu về Golden Days",
    lead: "Golden Days Adult Day Health Care đã là một phần của West Sacramento từ năm 2003. Cùng các chủ sở hữu điều hành trung tâm từ năm 2007.",
    photo: {
      kind: "interior" as const,
      label: "Chỗ dành cho ảnh - ảnh tập thể nhân viên",
      alt: "Hình ảnh tạm thay cho ảnh chụp tập thể của nhân viên Golden Days",
    },
    story: {
      heading: "Câu chuyện của chúng tôi",
      paragraphs: [
        "Golden Days mở cửa tại West Sacramento vào năm 2003 như một nơi để người lớn trải qua cả ngày với sự chăm sóc luôn ở gần. Cùng các chủ sở hữu điều hành trung tâm từ năm 2007.",
        "Qua những năm đó, chúng tôi đã quen biết nhiều gia đình địa phương. Có người đến với chúng tôi vài ngày mỗi tuần trong nhiều năm, và gia đình họ cũng trở thành một phần của trung tâm.",
        "Khoảng 120 người trải qua một ngày tại trung tâm mỗi ngày, và nhân viên vẫn dành thời gian tìm hiểu tên, thói quen và điều gì khiến mỗi người cảm thấy thoải mái.",
      ],
    },
    values: {
      heading: "Điều chúng tôi coi trọng",
      items: [
        {
          title: "Tôn trọng trước hết",
          text: "Ai đến đây cũng là người trưởng thành, và chúng tôi đối xử với họ như vậy.",
        },
        {
          title: "Trả lời rõ ràng",
          text: "Chúng tôi giải thích chi phí, giấy tờ và lịch trình bằng ngôn ngữ dễ hiểu.",
        },
        {
          title: "Nề nếp ổn định",
          text: "Những gương mặt quen thuộc và một ngày có thể đoán trước giúp mọi người dễ làm quen.",
        },
        {
          title: "Gia đình luôn được biết",
          text: "Chúng tôi gọi khi có điều gì thay đổi, và chúng tôi luôn nghe điện thoại.",
        },
      ],
    },
    team: {
      heading: "Đội ngũ của chúng tôi",
      paragraphs: [
        "Nhân viên của chúng tôi gồm điều dưỡng, nhân viên trị liệu, một nhân viên công tác xã hội, người phụ trách sinh hoạt, tài xế và nhân viên nhà bếp.",
        "Nhiều người trong số họ đã làm việc tại Golden Days nhiều năm và nói được hơn một ngôn ngữ.",
      ],
    },
    center: {
      heading: "Trung tâm",
      paragraphs: [
        "Tòa nhà có phòng sinh hoạt, phòng ăn, các phòng yên tĩnh để nghỉ ngơi, khu trị liệu và nhà vệ sinh dành cho người khuyết tật.",
        "Có chỗ đậu xe phía trước, và lối vào ngang mặt đất, không có bậc thang.",
      ],
      photo: {
        kind: "interior" as const,
        label: "Chỗ dành cho ảnh - phòng ăn",
        alt: "Phòng ăn của Golden Days, với những chiếc bàn tròn đã bày sẵn cho bữa trưa và hoa tươi trên bàn.",
        src: "/images/dining-room.jpg",
        width: 1200,
        height: 900,
      },
    },
    cta: {
      heading: "Hãy đến tận mắt xem",
      text: "Một buổi thăm kéo dài khoảng nửa giờ. Hãy gọi cho chúng tôi và chúng tôi sẽ tìm một thời gian phù hợp.",
    },
  },

  // ------------------------------------------------------------ Services ---
  services: {
    meta: {
      title: "Dịch vụ",
      description:
        "Chăm sóc điều dưỡng, phục hồi chức năng, dinh dưỡng, công tác xã hội, sinh hoạt giải trí và đưa đón tại Golden Days ở West Sacramento.",
    },
    heading: "Dịch vụ",
    lead: "Một ngày tại Golden Days được xây dựng quanh sáu loại hỗ trợ. Các gia đình chọn những ngày phù hợp với mình.",
    items: [
      {
        icon: "nursing" as const,
        title: "Chăm sóc điều dưỡng",
        summary: "Kiểm tra sức khỏe và cho uống thuốc do các điều dưỡng của chúng tôi thực hiện trong ngày.",
        details: [
          "Điều dưỡng kiểm tra các dấu hiệu sinh tồn và đường huyết (lượng đường trong máu).",
          "Điều dưỡng cho uống thuốc theo lịch trong giờ chương trình.",
          "Nếu sức khỏe thay đổi, chúng tôi gọi cho gia đình và văn phòng bác sĩ.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Phục hồi chức năng",
        summary: "Các bài tập và trị liệu hỗ trợ sức mạnh, thăng bằng và vận động.",
        details: [
          "Nhân viên trị liệu giúp cải thiện việc đi lại, thăng bằng và vận động hằng ngày.",
          "Các buổi tập được lên kế hoạch dựa trên mục tiêu của từng người.",
          "Tập thể dục theo nhóm diễn ra hầu hết các buổi sáng cho những ai muốn tham gia.",
        ],
      },
      {
        icon: "nutrition" as const,
        title: "Dinh dưỡng",
        summary: "Bữa sáng và bữa trưa mỗi ngày có chương trình, do đầu bếp lên thực đơn theo nhu cầu của từng người.",
        details: [
          "Bữa sáng và bữa trưa được phục vụ mỗi ngày có chương trình, và thực đơn thay đổi luân phiên.",
          "Một đầu bếp chuyên môn lên thực đơn theo nhu cầu của từng người.",
          "Hãy cho chúng tôi biết về nhu cầu ăn uống, chẳng hạn dị ứng, khó nuốt (chúng tôi có thể cắt nhỏ thức ăn) hoặc ăn chay.",
        ],
      },
      {
        icon: "socialWork" as const,
        title: "Công tác xã hội",
        summary: "Giúp về phúc lợi, giấy tờ và tìm các dịch vụ bên ngoài trung tâm.",
        details: [
          "Nhân viên công tác xã hội của chúng tôi giúp các gia đình hiểu các biểu mẫu và thắc mắc về bảo hiểm.",
          "Chúng tôi có thể hướng dẫn quý vị đến các dịch vụ địa phương như trợ giúp tại nhà hoặc chương trình cung cấp bữa ăn.",
          "Có thể họp cùng gia đình khi cần thay đổi kế hoạch.",
        ],
      },
      {
        icon: "recreation" as const,
        title: "Sinh hoạt giải trí",
        summary: "Âm nhạc, trò chơi, thủ công, thể dục nhẹ và bầu bạn suốt cả ngày.",
        details: [
          "Các hoạt động hằng ngày mà mọi người có thể tham gia hoặc bỏ qua, như âm nhạc, trò chơi, thủ công và thể dục.",
          "Các chuyến đi chơi xa diễn ra trung bình tối đa ba lần một tuần, không tính thêm phí. Người gặp khó khăn về đi lại vẫn có thể cùng đi.",
          "Các ngày lễ và sinh nhật được cùng nhau chúc mừng.",
        ],
      },
      {
        icon: "transportation" as const,
        title: "Đưa đón",
        summary: "Xe đưa đón đến và về từ trung tâm vào những ngày có chương trình.",
        details: [
          "Có xe đưa đón trong khu vực phục vụ của chúng tôi.",
          "Xe của chúng tôi có thể chở người dùng xe lăn hoặc khung tập đi.",
          "Xe buýt chạy đến gần cửa nhất có thể. Tại nhà, người chăm sóc giúp người tham gia lên xe. Tại trung tâm, tài xế giúp người tham gia xuống xe.",
        ],
      },
    ],
    dayHeading: "Một ngày diễn ra như thế nào",
    daySchedule: [
      { time: "8:30 sáng", text: "Chào đón" },
      { time: "9:00 sáng", text: "Bài tập phục hồi chức năng" },
      { time: "9:30 sáng", text: "Bữa sáng / Xem tin tức trên TV" },
      { time: "10:00 sáng", text: "Giáo dục sức khỏe / Vật lý trị liệu cá nhân (Thứ Hai, Thứ Ba, Thứ Sáu)" },
      { time: "10:30 sáng", text: "Bài tập phục hồi chức năng / Câu lạc bộ đi bộ / Đi chơi xa" },
      { time: "11:00 sáng", text: "Bài tập phục hồi chức năng / Trị liệu nhóm" },
      { time: "11:30 sáng", text: "Bài tập phục hồi chức năng / Nhóm cải thiện trí nhớ / Trò chơi sinh hoạt / Nhóm tâm linh" },
      { time: "12:00 trưa", text: "Khách mời và diễn giả / Vật lý trị liệu cá nhân (Thứ Hai, Thứ Ba, Thứ Sáu)" },
      { time: "12:30 chiều", text: "Hoạt động trị liệu cá nhân (Thứ Tư, Thứ Sáu)" },
      { time: "1:00 chiều", text: "Bữa trưa" },
      { time: "1:30 chiều", text: "Xem phim / Thảo luận" },
    ],
    weeklyHeading: "Hoạt động hằng tuần",
    weeklyActivities: [
      { day: "Thứ Ba", text: "Nhóm cải thiện trí nhớ" },
      { day: "Thứ Tư", text: "Lớp tiếng Anh" },
      { day: "Thứ Sáu", text: "Bingo" },
    ],
    cta: {
      heading: "Chưa chắc người thân cần những phần nào?",
      text: "Hãy gọi cho chúng tôi. Chúng tôi sẽ hỏi vài câu và trả lời thẳng thắn cho quý vị.",
    },
  },

  // ------------------------------------------------------ Transportation ---
  transportation: {
    meta: {
      title: "Đưa đón",
      description:
        "Xe đưa đón đến Golden Days ở West Sacramento, bao gồm xe có thể chở xe lăn.",
    },
    heading: "Đưa đón",
    lead: "Việc đến trung tâm không nên là điều khó khăn. Golden Days có xe đưa đón đến và về từ chương trình cho những người cần.",
    photo: {
      kind: "bus" as const,
      label: "Chỗ dành cho ảnh - bên trong xe buýt Golden Days",
      alt: "Bên trong xe buýt Golden Days: những hàng ghế màu xanh dương ở hai bên lối đi rộng, với biểu tượng lối đi cho xe lăn trên tường.",
      src: "/images/bus-inside.jpg",
      width: 1600,
      height: 900,
    },
    sections: [
      {
        heading: "Khu vực phục vụ",
        paragraphs: [
          "Chúng tôi đưa đón tại West Sacramento và các khu phố lân cận.",
          "Một số địa chỉ ngoài khu vực đó vẫn có thể đáp ứng được tùy theo ngày và tuyến đường. Nếu khu vực của quý vị không có trong danh sách, hãy gọi cho chúng tôi kèm địa chỉ và chúng tôi sẽ kiểm tra.",
        ],
        list: {
          label: "Các khu vực chúng tôi thường phục vụ:",
          items: [
            "West Sacramento",
            "Bryte và Broderick",
            "Southport",
            "Một số khu của Sacramento gần sông",
            "Antelope",
            "Elk Grove",
            "Natomas",
            "Carmichael",
            "Rancho Cordova",
          ],
        },
      },
      {
        heading: "Đón và trả",
        paragraphs: [
          "Mỗi hành khách được cho một khoảng thời gian đón chứ không phải một phút chính xác, vì giao thông và các hành khách khác làm thay đổi tuyến đường.",
          "Chúng tôi chạy đến gần cửa nhất có thể. Khi đón, người chăm sóc của người tham gia giúp họ lên xe. Tài xế không giúp người tham gia lên xe, và không thể nhấc ai lên xe.",
          "Tại trung tâm, tài xế có thể giúp người tham gia xuống xe, và nhân viên chăm sóc của chúng tôi ở đây sẵn sàng đón họ. Nhân viên chăm sóc của chúng tôi không đến nhà của mọi người.",
          "Nếu xe buýt đến trễ, chúng tôi sẽ gọi cho gia đình.",
        ],
      },
      {
        heading: "Hỗ trợ xe lăn và người khó đi lại",
        paragraphs: [
          "Xe của chúng tôi có thể chở người dùng xe lăn, khung tập đi hoặc gậy.",
          "Xe lăn được cố định trước khi xe di chuyển, và mọi hành khách đều thắt dây an toàn.",
          "Hãy cho chúng tôi biết về việc dùng oxy, việc chuyển chỗ ngồi hoặc bất cứ điều gì khác tài xế cần biết, và chúng tôi sẽ chuẩn bị.",
        ],
      },
      {
        heading: "Gia đình sắp xếp hoặc thay đổi chuyến xe như thế nào",
        paragraphs: [
          "Chuyến xe được sắp xếp khi người thân của quý vị ghi danh, và lịch giữ nguyên từ tuần này sang tuần khác.",
          "Để đổi địa chỉ đón, thêm một ngày hoặc hủy chuyến xe, hãy gọi cho văn phòng.",
          "Nếu hủy trong ngày, hãy gọi càng sớm càng tốt để tài xế điều chỉnh tuyến đường.",
        ],
        list: {
          label: "Để thay đổi chuyến xe, hãy chuẩn bị sẵn:",
          items: [
            "Tên của hành khách",
            "Ngày hoặc các ngày thay đổi",
            "Địa chỉ mới, nếu nơi đón thay đổi",
            "Số điện thoại để chúng tôi liên lạc với quý vị trong ngày hôm đó",
          ],
        },
      },
    ],
    secondPhoto: {
      kind: "bus" as const,
      label: "Chỗ dành cho ảnh - bệ nâng xe lăn trên xe buýt Golden Days",
      alt: "Bệ nâng xe lăn ở phía sau xe buýt Golden Days, với bệ đã được nâng lên bên trong cửa sau đang mở.",
      src: "/images/wheelchair-lift.jpg",
      width: 1600,
      height: 900,
    },
    cta: {
      heading: "Có câu hỏi về việc đón xe?",
      text: "Hãy gọi cho văn phòng và hỏi về lịch đưa đón.",
    },
  },

  // ---------------------------------------------------------- Enrollment ---
  enrollment: {
    meta: {
      title: "Ghi danh",
      description:
        "Ai đủ điều kiện tham gia Golden Days, ai chi trả, cần mang theo gì và các bước ghi danh tại West Sacramento.",
    },
    heading: "Ghi danh",
    lead: "Ghi danh chỉ cần vài cuộc trò chuyện, không phải một núi giấy tờ. Sau đây là cách thực hiện.",
    qualifies: {
      heading: "Ai đủ điều kiện",
      intro: "Golden Days thường phù hợp với một người lớn:",
      items: [
        "Là người lớn sống tại nhà hoặc với gia đình",
        "Cần được giúp đỡ, giám sát hoặc bầu bạn trong ban ngày",
        "Có tình trạng sức khỏe được lợi từ việc kiểm tra thường xuyên",
        "Có thể tham gia chương trình ban ngày theo nhóm",
      ],
      note: "Việc đủ điều kiện được quyết định sau buổi đánh giá, không phải qua điện thoại. Hãy gọi cho chúng tôi và chúng tôi sẽ cho quý vị biết bước tiếp theo như thế nào.",
    },
    pays: {
      heading: "Ai chi trả",
      intro: "Các gia đình thường chi trả theo một trong những cách sau:",
      items: [
        {
          title: "Medi-Cal",
          text: "Chúng tôi nhận Medi-Cal cùng với một chương trình bảo hiểm, nhưng không nhận riêng Medi-Cal. Chúng tôi có thể giải thích quy trình diễn ra như thế nào.",
        },
        {
          title: "Chương trình chăm sóc có quản lý",
          text: "Một số chương trình bảo hiểm sức khỏe chi trả cho các chương trình ban ngày. Chúng tôi sẽ kiểm tra chương trình của quý vị quy định ra sao.",
        },
        {
          title: "Tự thanh toán",
          text: "Các gia đình cũng có thể thanh toán trực tiếp.",
        },
      ],
      note: "Không có nội dung nào trên trang này là lời cam kết về bảo hiểm chi trả hay về giá. Hãy gọi cho chúng tôi để biết thông tin mới nhất về trường hợp của quý vị.",
    },
    bring: {
      heading: "Cần mang theo gì",
      intro: "Hãy mang những gì quý vị có. Chúng tôi sẽ giúp phần còn lại.",
      items: [
        "Giấy tờ tùy thân có ảnh",
        "Thẻ bảo hiểm (quý vị có thể mang riêng thẻ này)",
        "Thẻ Medi-Cal (mang cùng với thẻ bảo hiểm, không mang riêng)",
        "Tên và số điện thoại của bác sĩ của quý vị",
        "Tên và số điện thoại của người liên lạc khẩn cấp",
        "Bất kỳ giấy tờ y tế gần đây nào quý vị đã có",
      ],
    },
    steps: {
      heading: "Các bước",
      items: [
        {
          title: "Gọi hoặc gửi tin nhắn",
          text: "Cho chúng tôi biết về người thân của quý vị, những ngày quý vị mong muốn và mọi điều lo lắng. Cuộc gọi này mất khoảng mười phút.",
        },
        {
          title: "Tham quan trung tâm",
          text: "Hãy đến trong giờ chương trình, tốt nhất là trước 1:30 chiều, để quý vị thấy một ngày bình thường. Hãy đưa người thân đi cùng nếu họ thấy thoải mái.",
        },
        {
          title: "Đánh giá",
          text: "Đội ngũ của chúng tôi xem xét tiền sử sức khỏe, nhu cầu hằng ngày và mục tiêu để xác nhận chương trình phù hợp.",
        },
        {
          title: "Giấy tờ và bảo hiểm",
          text: "Chúng tôi cùng hoàn tất các biểu mẫu ghi danh và giải quyết các thắc mắc về bảo hiểm.",
        },
        {
          title: "Ngày đầu tiên",
          text: "Chúng tôi sắp xếp lịch, bố trí xe đưa đón và giới thiệu người thân của quý vị với nhân viên và những người tham gia khác.",
        },
      ],
    },
    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          question: "Người thân của tôi có thể đến mấy ngày một tuần?",
          answer: "Lịch có thể từ một ngày đến năm ngày một tuần. Chúng tôi sẽ cùng quý vị sắp xếp lịch.",
        },
        {
          question: "Việc ghi danh mất bao lâu?",
          answer: "Điều đó tùy vào giấy tờ và bảo hiểm. Chúng tôi sẽ cho quý vị biết khoảng thời gian thực tế ngay trong cuộc gọi đầu tiên.",
        },
        {
          question: "Chúng tôi có thể thử trước không?",
          answer: "Hãy bắt đầu bằng một buổi tham quan. Khi đến, quý vị có thể hỏi chúng tôi về một ngày dùng thử.",
        },
        {
          question: "Nếu người thân của tôi không muốn đi thì sao?",
          answer: "Điều đó khá phổ biến. Một buổi tham quan và một tuần đầu ngắn thường giúp ích. Chúng tôi đã làm việc này nhiều lần.",
        },
      ],
    },
    qualifyPrompt: {
      heading: "Chưa chắc có phù hợp không?",
      text: "Hãy trả lời năm câu hỏi ngắn và chúng tôi sẽ chỉ cho quý vị bước tiếp theo. Chỉ mất khoảng một phút.",
    },
    cta: {
      heading: "Sẵn sàng bắt đầu?",
      text: "Hãy gọi cho chúng tôi hoặc đặt lịch tham quan. Đặt câu hỏi không mất phí.",
    },
  },

  // ------------------------------------------------- Do I qualify? check ---
  // Five questions, one per screen. Nothing here is stored or sent anywhere;
  // the answers only live in the browser while the page is open.
  qualify: {
    meta: {
      title: "Tôi có đủ điều kiện không?",
      description:
        "Trả lời năm câu hỏi ngắn để xem Golden Days ở West Sacramento có thể phù hợp hay không.",
    },
    intro: {
      heading: "Xem Golden Days có thể phù hợp với quý vị hoặc người thân hay không.",
      reassurance:
        "Việc này mất khoảng một phút. Đây không phải là đơn đăng ký và không phải quyết định cuối cùng. Chúng tôi không hỏi tên của quý vị hay bất kỳ thông tin sức khỏe nào, và câu trả lời của quý vị chỉ nằm trên trang này. Chúng tôi không thu thập hay lưu trữ chúng.",
      startLabel: "Bắt đầu trả lời câu hỏi",
    },
    progressLabel: "Câu hỏi {current} trên {total}",
    progressBarLabel: "Quý vị đã đi được bao xa",
    backLabel: "Quay lại",
    helpLabel: "Điều này có nghĩa là gì?",
    answers: {
      yes: "Có",
      no: "Không",
      notSure: "Không chắc",
    },
    answerGroupLabel: "Chọn một câu trả lời",
    questions: [
      {
        text: "Người này từ 18 tuổi trở lên phải không?",
        help: "Golden Days là chương trình dành cho người lớn. Nếu quý vị hỏi giúp cha mẹ hoặc vợ chồng, hãy trả lời cho người đó.",
      },
      {
        text: "Họ có sống ở West Sacramento hoặc một khu vực lân cận mà chúng tôi phục vụ không?",
        help: "Chúng tôi phục vụ West Sacramento và các khu vực lân cận, gồm Sacramento, Natomas, Elk Grove, Carmichael, Rancho Cordova và Antelope. Nếu quý vị không chắc, hãy chọn Không chắc và chúng tôi sẽ kiểm tra.",
      },
      {
        text: "Họ có thể tham gia các hoạt động nhóm trong ban ngày, dù có dùng khung tập đi hoặc xe lăn hay không?",
        help: "Các hoạt động nhóm gồm thể dục, âm nhạc, trò chơi và cùng nhau dùng bữa. Mỗi người tham gia theo cách của riêng mình, và một số người còn cần được chăm sóc y tế trong ngày. Nếu quý vị không chắc họ có thể thích ứng với môi trường nhóm, hãy chọn Không chắc.",
      },
      {
        text: "Họ có bảo hiểm y tế từ một công ty bảo hiểm, dù có Medi-Cal hay không?",
        help: "Chúng tôi nhận bảo hiểm, và Medi-Cal cùng với bảo hiểm. Riêng Medi-Cal thì không đủ. Nếu quý vị không chắc, hãy chọn Không chắc.",
      },
      {
        text: "Họ có bác sĩ có thể cung cấp giấy tờ y tế gần đây không?",
        help: "Chúng tôi yêu cầu giấy tờ y tế gần đây từ bác sĩ của họ, cùng với thông tin bảo hiểm. Nếu quý vị không chắc, hãy chọn Không chắc.",
      },
    ],
    results: {
      announcement: "Sau đây là kết quả của quý vị.",
      goodFit: {
        heading: "Tin vui. Quý vị phù hợp với Golden Days.",
        text: "Hãy gọi cho chúng tôi hoặc đặt lịch tham quan, và chúng tôi sẽ giúp quý vị các bước tiếp theo.",
      },
      notFit: {
        heading: "Golden Days có thể chưa phù hợp.",
        text: "Cảm ơn quý vị đã kiểm tra. Nếu quý vị muốn trao đổi thêm, xin hãy gọi cho chúng tôi và chúng tôi sẵn lòng giúp đỡ.",
      },
      unsure: {
        heading: "Hiện chúng tôi chưa chắc, và điều đó không sao.",
        text: "Nhiều gia đình lúc đầu cũng chưa chắc. Hãy gọi cho chúng tôi và chúng tôi sẽ cùng xem xét hoàn cảnh của quý vị. Một số câu trả lời có thể thay đổi nếu có đúng giấy tờ hoặc bảo hiểm. Nếu mọi câu trả lời đều là Có, quý vị phù hợp với chương trình.",
      },
      enrollmentLinkLabel: "Đọc về cách ghi danh",
      startOverLabel: "Bắt đầu lại",
    },
  },

  // ------------------------------------------------------------- Contact ---
  contactPage: {
    meta: {
      title: "Liên hệ",
      description:
        "Gọi cho Golden Days Adult Day Health Care ở West Sacramento, gửi tin nhắn hoặc đặt lịch tham quan.",
    },
    heading: "Liên hệ với chúng tôi",
    lead: "Hãy gọi cho chúng tôi trong giờ làm việc của cơ sở, hoặc gửi tin nhắn và chúng tôi sẽ trả lời quý vị.",
    detailsHeading: "Đến thăm hoặc gọi điện",
    directionsHeading: "Tìm chúng tôi",
    directionsText:
      "Lối vào ngang mặt đất và chỗ đậu xe ở phía trước tòa nhà.",
    photo: {
      kind: "building" as const,
      label: "Chỗ dành cho ảnh - lối vào tòa nhà",
      alt: "Lối vào của Golden Days tại 1215 Merkley Ave, với bảng hiệu phía trên cửa và các cọc tiêu đặt dọc lối đi.",
      src: "/images/building-entrance.jpg",
      width: 1200,
      height: 900,
    },
    tourHeading: "Đặt lịch tham quan",
    tourText:
      "Các buổi tham quan diễn ra trong giờ chương trình, tốt nhất là trước 1:30 chiều, để quý vị thấy một ngày bình thường. Hãy gọi cho chúng tôi hoặc dùng biểu mẫu và cho biết quý vị muốn tham quan.",
  },

  form: {
    heading: "Gửi tin nhắn cho chúng tôi",
    responseTime: "Một thành viên trong đội ngũ của chúng tôi sẽ gọi lại cho quý vị trong vòng một ngày làm việc.",
    callAlternativeLead: "Muốn nói chuyện trực tiếp hơn?",
    callAlternativeLinkPrefix: "Hãy gọi cho chúng tôi theo số",
    medicalNote: "Xin đừng ghi thông tin y tế vào biểu mẫu này.",
    fields: {
      name: { label: "Tên của quý vị", placeholder: "Họ và tên" },
      phone: { label: "Số điện thoại", placeholder: "(916) 555-0123" },
      email: { label: "Email (không bắt buộc)", placeholder: "you@example.com" },
      message: {
        label: "Chúng tôi có thể giúp gì? (không bắt buộc)",
        placeholder: "Hãy cho chúng tôi biết đôi điều về người cần được chăm sóc.",
      },
      honeypot: { label: "Để trống ô này" },
    },
    required: "Bắt buộc",
    submit: "Gửi tin nhắn",
    submitting: "Đang gửi...",
    successHeading: "Cảm ơn quý vị. Tin nhắn của quý vị đã được gửi.",
    successText:
      "Chúng tôi sẽ trả lời quý vị trong giờ làm việc của cơ sở. Nếu quý vị cần câu trả lời sớm hơn, xin hãy gọi cho chúng tôi.",
    successAgain: "Gửi tin nhắn khác",
    errorHeading: "Tin nhắn của quý vị chưa được gửi đi.",
    errorText: "Xin hãy thử lại, hoặc gọi cho chúng tôi.",
    notConfiguredHeading: "Biểu mẫu tin nhắn chưa được kết nối.",
    notConfiguredText:
      "Trang web này chưa đặt địa chỉ biểu mẫu, nên không có gì được gửi đi. Hãy đặt NEXT_PUBLIC_FORM_ENDPOINT thành một địa chỉ Formspree để bật biểu mẫu. Trong thời gian đó, xin hãy gọi cho chúng tôi.",
    validation: {
      name: "Xin vui lòng nhập tên của quý vị.",
      phone: "Xin vui lòng nhập số điện thoại để chúng tôi gọi lại.",
    },
  },

  language: {
    label: "Ngôn ngữ",
  },

  a11y: {
    stepLabel: "Bước {number}: ",
  },

  notFound: {
    metaTitle: "Không tìm thấy trang",
    heading: "Chúng tôi không tìm thấy trang đó",
    text: "Có thể trang đã được chuyển đi. Hãy thử menu ở đầu màn hình, hoặc gọi cho chúng tôi và chúng tôi sẽ giúp.",
    homeLabel: "Về trang chủ",
  },

  photoPlaceholderNote: "Hình ảnh tạm. Hãy thay bằng ảnh thật trước khi ra mắt.",
};
