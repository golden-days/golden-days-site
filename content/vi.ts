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
    hours: "Giờ làm việc của cơ sở: Thứ Hai đến Thứ Sáu, từ 8:00 sáng đến 3:00 chiều",
    programHours: "Giờ chương trình: Thứ Hai đến Thứ Sáu, từ 8:00 sáng đến 2:00 chiều",
    hoursNote:
      "Đóng cửa Thứ Bảy và Chủ Nhật. Cũng đóng cửa vào Lễ Tạ Ơn, Lễ Giáng Sinh, Ngày Tết Dương Lịch và Ngày Quốc Khánh Hoa Kỳ (4 tháng 7).",
    mapTitle: "Bản đồ chỉ vị trí của Golden Days Adult Day Health Care",
    directionsLinkLabel: "Xem chỉ đường",
    languagesLabel: "Ngôn ngữ",
    languagesLine: "Chúng tôi nói tiếng Anh, tiếng Nga và tiếng Ukraina, và có thông dịch viên tiếng Trung.",
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
    privacyLabel: "Quyền riêng tư",
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
        alt: "Mặt trước của Trung tâm Golden Days Adult Day Health Care, với bảng hiệu hình mặt trời phía trên lối vào và tấm biển Welcome to Golden Days ở cửa sổ.",
        src: "/images/hero-front.jpg",
        width: 1600,
        height: 900,
      },
    },
    whoWeServe: {
      heading: "Chúng tôi phục vụ ai",
      paragraphs: [
        "Các chương trình chăm sóc sức khỏe ban ngày cho người lớn phục vụ người cao tuổi yếu sức và người lớn trẻ hơn mắc các bệnh mạn tính gây suy giảm chức năng về thể chất, nhận thức hoặc sức khỏe tâm thần, có nguy cơ phải vào cơ sở chăm sóc. Golden Days phục vụ người lớn từ 18 tuổi trở lên.",
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
          text: "Đánh giá, lập kế hoạch chăm sóc, bênh vực quyền lợi và nguồn lực cộng đồng vì phúc lợi của người tham gia.",
        },
        {
          icon: "recreation" as const,
          title: "Sinh hoạt giải trí",
          text: "Âm nhạc, trò chơi, thủ công, các chuyến đi chơi và thời gian bên người khác.",
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
          text: "Đội ngũ của chúng tôi xem xét sức khỏe và nhu cầu hằng ngày để biết chương trình có phù hợp hay không. Chỉ có thể thực hiện đánh giá khi được bác sĩ chấp thuận.",
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
      text: "Chúng tôi nhận Medi-Cal. Quý vị cũng có thể tự thanh toán. Hãy gọi cho chúng tôi, chúng tôi sẽ giải thích điều gì áp dụng cho gia đình quý vị.",
    },
    trust: {
      text: "Phục vụ các gia đình West Sacramento từ năm 2003. Doanh nghiệp gia đình từ năm 2007.",
      licenseText: "Được Sở Y tế Công cộng California cấp phép. Số giấy phép 070000633.",
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
        "Golden Days Adult Day Health Care đã phục vụ các gia đình West Sacramento từ năm 2003, và do cùng các chủ sở hữu điều hành từ năm 2007.",
    },
    heading: "Giới thiệu về Golden Days",
    lead: "Golden Days Adult Day Health Care đã là một phần của West Sacramento từ năm 2003. Các chủ sở hữu hiện nay đã điều hành trung tâm từ năm 2007.",
    photo: {
      kind: "interior" as const,
      label: "Chỗ dành cho ảnh - ảnh tập thể nhân viên",
      alt: "Hình ảnh tạm thay cho ảnh chụp tập thể của nhân viên Golden Days",
    },
    story: {
      heading: "Câu chuyện của chúng tôi",
      paragraphs: [
        "Golden Days mở cửa tại West Sacramento vào năm 2003 như một nơi để người lớn trải qua cả ngày với sự chăm sóc luôn ở gần. Các chủ sở hữu hiện nay đã điều hành trung tâm từ năm 2007.",
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
          text: "Nếu có điều gì thay đổi, chúng tôi sẽ gọi cho quý vị. Nếu quý vị có câu hỏi, hãy gọi cho chúng tôi trong giờ hoạt động của trung tâm.",
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
    licensing: {
      heading: "Được cấp phép tại California",
      text: "Golden Days được Sở Y tế Công cộng California (California Department of Public Health) cấp phép hoạt động như một trung tâm chăm sóc sức khỏe ban ngày cho người lớn (Adult Day Health Center) và có giấy phép kinh doanh của thành phố West Sacramento.",
      items: [
        "Giấy phép tiểu bang: Sở Y tế Công cộng California, Adult Day Health Center, số giấy phép 070000633",
        "Giấy phép kinh doanh thành phố West Sacramento, số 12046",
      ],
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
        summary: "Bộ phận điều dưỡng của chúng tôi nỗ lực thúc đẩy sức khỏe, sự an toàn, phẩm giá, tính tự lập và phúc lợi chung của người tham gia thông qua các dịch vụ điều dưỡng phối hợp, cá nhân hóa và dựa trên bằng chứng.",
        details: [
          "Kiểm tra dấu hiệu sinh tồn, huyết áp và đường huyết (đối với người tham gia bị tiểu đường).",
          "Theo dõi và quản lý các tình trạng sức khỏe.",
          "Giáo dục và tư vấn về sức khỏe.",
        ],
      },
      {
        icon: "rehabilitation" as const,
        title: "Phục hồi chức năng",
        summary: "Liệu pháp tập luyện hằng ngày theo nhóm giúp cải thiện khả năng vận động, độ linh hoạt của khớp, sức mạnh, thăng bằng, sự phối hợp và sức bền.",
        details: [
          "Các chuyên viên vật lý trị liệu và hoạt động trị liệu có giấy phép đưa ra khuyến nghị và hướng dẫn riêng khi cần, gồm các bài tập tại nhà và nguồn trang thiết bị, nhằm tối đa hóa tính tự lập và an toàn.",
          "Liệu pháp xoa bóp và liệu pháp sáp paraffin được cung cấp miễn phí cho những người tham gia phù hợp, sau khi chuyên viên trị liệu đánh giá mức độ phù hợp.",
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
        summary: "Nhân viên xã hội là nhân sự cốt lõi, phụ trách đánh giá tâm lý xã hội, lập kế hoạch chăm sóc, bênh vực quyền lợi và điều phối nguồn lực cộng đồng để hỗ trợ sức khỏe, sự an toàn và phúc lợi của người tham gia.",
        details: [],
      },
      {
        icon: "recreation" as const,
        title: "Sinh hoạt giải trí",
        summary: "Âm nhạc, trò chơi, thủ công và sự đồng hành suốt cả ngày.",
        details: [
          "Các hoạt động hằng ngày mà mọi người có thể tham gia hoặc bỏ qua, như âm nhạc, trò chơi và thủ công.",
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
    glanceHeading: "Dịch vụ tóm tắt",
    glanceIntro: "Mục tiêu của chúng tôi là giữ sức khỏe của quý vị ở mức tốt nhất có thể. Đội ngũ chuyên viên chăm sóc sức khỏe của chúng tôi cung cấp các dịch vụ như:",
    glanceItems: [
      "Thẩm định và đánh giá",
      "Tư vấn dinh dưỡng",
      "Điều dưỡng và chăm sóc cá nhân",
      "Theo dõi tình trạng sức khỏe",
      "Hỗ trợ dùng thuốc",
      "Vật lý trị liệu",
      "Tập thể dục nhóm và nhóm đi bộ",
      "Âm ngữ trị liệu",
      "Hoạt động trị liệu",
      "Tư vấn với nhân viên xã hội",
      "Đánh giá tâm lý",
      "Bữa sáng và bữa trưa nóng",
      "Các chuyến đi chơi",
      "Kỷ niệm các ngày lễ",
      "Trò chơi trên bàn và các lớp học",
      "Đưa đón đến và từ trung tâm",
    ],
    dayHeading: "Một ngày diễn ra như thế nào",
    daySchedule: [
      { time: "8:30 sáng", text: "Chào đón" },
      { time: "9:00 sáng", text: "Bài tập phục hồi chức năng" },
      { time: "9:30 sáng", text: "Bữa sáng / Xem tin tức trên TV" },
      { time: "10:00 sáng", text: "Giáo dục sức khỏe / Vật lý trị liệu cá nhân" },
      { time: "10:30 sáng", text: "Bài tập phục hồi chức năng / Câu lạc bộ đi bộ / Đi chơi xa" },
      { time: "11:00 sáng", text: "Bài tập phục hồi chức năng / Trị liệu nhóm" },
      { time: "11:30 sáng", text: "Bài tập phục hồi chức năng / Nhóm cải thiện trí nhớ / Trò chơi sinh hoạt / Nhóm tâm linh" },
      { time: "12:00 trưa", text: "Khách mời và diễn giả / Vật lý trị liệu cá nhân" },
      { time: "12:30 chiều", text: "Hoạt động trị liệu cá nhân" },
      { time: "1:00 chiều", text: "Bữa trưa" },
      { time: "1:30 chiều", text: "Xem phim / Thảo luận" },
    ],
    rotatingHeading: "Hoạt động luân phiên",
    rotatingIntro: "Các hoạt động được luân phiên trong tuần. Bingo diễn ra nhiều lần mỗi tuần, và chúng tôi có các chuyến đi đến cửa hàng, chợ và công viên địa phương.",
    rotatingActivities: [
      "Lớp tiếng Anh",
      "Bingo",
      "Đi chơi đến cửa hàng, chợ và công viên",
      "Mừng sinh nhật",
    ],
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
        heading: "Đón và đưa về",
        paragraphs: [
          "Ở nhà, người chăm sóc giúp người tham gia lên xe, và tại trung tâm, tài xế của chúng tôi giúp họ xuống xe.",
        ],
      },
      {
        heading: "Hỗ trợ xe lăn và người khó đi lại",
        paragraphs: [
          "Xe của chúng tôi có thể chở những người tham gia sử dụng xe lăn, khung tập đi hoặc gậy.",
        ],
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
      purpose: "Chúng tôi ở đây để giúp cải thiện sức khỏe của người tham gia, cả về thể chất lẫn tinh thần. Chúng tôi không cung cấp dịch vụ chăm sóc một kèm một.",
      intro: "Golden Days thường phù hợp với người lớn từ 18 tuổi trở lên:",
      items: [
        "Có tình trạng bệnh lý cần điều trị hoặc phục hồi chức năng theo chỉ định của bác sĩ",
        "Có suy giảm về thể chất hoặc tâm thần nhưng không cần được chăm sóc liên tục",
        "Có nguy cơ cần được chăm sóc nhiều hơn",
        "Có thể tham gia chương trình ban ngày theo nhóm",
      ],
      note: "Chỉ có thể thực hiện đánh giá khi được bác sĩ chấp thuận. Hãy gọi cho chúng tôi, chúng tôi sẽ cho quý vị biết bước tiếp theo.",
    },
    pays: {
      heading: "Ai chi trả",
      intro: "Các gia đình thường chi trả theo một trong những cách sau:",
      value: "Chăm sóc sức khỏe ban ngày cho người lớn thường tốn kém ít hơn nhiều so với nằm viện về sau, vì vậy đăng ký sớm có thể có lợi.",
      items: [
        {
          title: "Medi-Cal",
          text: "Chúng tôi nhận Medi-Cal. Chúng tôi có thể giải thích quy trình.",
        },
        {
          title: "Tự thanh toán",
          text: "Các gia đình cũng có thể thanh toán trực tiếp.",
        },
      ],
      note: "Medicare không chi trả cho chương trình này. Không nội dung nào trên trang này là cam kết chi trả hoặc báo giá. Hãy gọi cho chúng tôi để biết thông tin hiện tại về trường hợp của quý vị.",
    },
    bring: {
      heading: "Cần mang theo gì",
      intro: "Hãy mang những gì quý vị có. Chúng tôi sẽ giúp phần còn lại.",
      items: [
        "Giấy tờ tùy thân có ảnh",
        "Thẻ Medi-Cal",
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
      text: "Trả lời bốn câu hỏi ngắn và chúng tôi sẽ cho quý vị biết bước tiếp theo. Chỉ mất khoảng một phút.",
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
        "Trả lời bốn câu hỏi ngắn để xem Golden Days ở West Sacramento có thể phù hợp hay không.",
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
        text: "Họ có thể tham gia các hoạt động nhóm trong ngày mà không cần người kèm riêng không?",
        help: "Các hoạt động nhóm gồm âm nhạc, trò chơi và cùng nhau dùng bữa. Chúng tôi không cung cấp dịch vụ chăm sóc một kèm một. Mỗi người tham gia theo cách riêng, và một số người cũng cần được chăm sóc y tế trong ngày. Nếu quý vị không chắc họ có thể thích nghi với môi trường nhóm, hãy chọn Không chắc.",
      },
      {
        text: "Họ có Medi-Cal không?",
        help: "Chúng tôi nhận Medi-Cal. Quý vị cũng có thể tự thanh toán, vì vậy nếu họ không có Medi-Cal, hãy chọn Không và gọi cho chúng tôi để trao đổi. Nếu quý vị không chắc, hãy chọn Không chắc.",
      },
    ],
    results: {
      announcement: "Sau đây là kết quả của quý vị.",
      goodFit: {
        heading: "Tin vui. Quý vị phù hợp với Golden Days.",
        text: "Hãy gọi cho chúng tôi hoặc đặt lịch tham quan, và chúng tôi sẽ giúp quý vị thực hiện các bước tiếp theo.",
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
      alt: "Lối vào của Golden Days tại 1215 Merkley Ave, với bảng hiệu phía trên cửa và lối đi bằng phẳng phía trước.",
      src: "/images/entrance-front.jpg",
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

  // ------------------------------------------------------------- Privacy ---
  privacy: {
    meta: {
      title: "Quyền riêng tư",
      description:
        "Trang web Golden Days làm gì và không làm gì với thông tin của quý vị.",
    },
    heading: "Quyền riêng tư",
    lead: "Trang này giải thích bằng lời đơn giản về việc trang web này làm gì với thông tin của quý vị.",
    updated: "Cập nhật lần cuối: tháng 10 năm 2026",
    sections: [
      {
        heading: "Nếu quý vị gửi tin nhắn cho chúng tôi",
        paragraphs: [
          "Biểu mẫu liên hệ yêu cầu tên và số điện thoại của quý vị. Địa chỉ email và nội dung tin nhắn là không bắt buộc. Chúng tôi chỉ dùng những gì quý vị gửi để trả lời quý vị. Chúng tôi không bán thông tin đó.",
          "Tin nhắn được chuyển đến email của trung tâm qua Formspree, một dịch vụ xử lý các biểu mẫu trên trang web.",
          "Xin đừng ghi thông tin sức khỏe hay y tế vào biểu mẫu. Thay vào đó, xin hãy gọi cho chúng tôi.",
        ],
      },
      {
        heading: "Các câu hỏi “Tôi có đủ điều kiện không?”",
        paragraphs: [
          "Câu trả lời của quý vị chỉ nằm trong trình duyệt của quý vị khi trang đang mở. Chúng tôi không thu thập, không gửi đi và không lưu lại.",
        ],
      },
      {
        heading: "Đếm lượt truy cập",
        paragraphs: [
          "Chúng tôi dùng Vercel Analytics để đếm lượt truy cập. Công cụ này ghi lại những trang đã được xem, quốc gia, loại thiết bị và trình duyệt, và trang web nào đã đưa khách đến. Công cụ này không dùng cookie, không hiển thị quảng cáo và không theo dõi quý vị sang các trang web khác.",
        ],
      },
      {
        heading: "Bản đồ và cookie",
        paragraphs: [
          "Trang chủ và trang liên hệ có hiển thị Google Map. Khi bản đồ tải lên, Google có thể nhận địa chỉ IP của quý vị và có thể đặt cookie, theo chính sách quyền riêng tư của Google. Trang web này không đặt thêm cookie nào khác của riêng mình.",
        ],
      },
      {
        heading: "Chúng tôi không bán thông tin của quý vị",
        paragraphs: [
          "Chúng tôi không bán thông tin của quý vị và không chia sẻ để quảng cáo.",
        ],
      },
      {
        heading: "Câu hỏi hoặc yêu cầu",
        paragraphs: [
          "Nếu quý vị muốn nhờ chúng tôi xóa một tin nhắn đã gửi, hoặc có bất kỳ câu hỏi nào về trang này, xin hãy gọi điện hoặc gửi email cho chúng tôi. Số điện thoại và email của chúng tôi ở cuối mỗi trang.",
          "Nếu chúng tôi thay đổi cách trang web này sử dụng thông tin, chúng tôi sẽ cập nhật trang này.",
        ],
      },
    ],
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
