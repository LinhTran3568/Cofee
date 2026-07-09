export const presentationData = {
  hero: {
    title: "Lợi ích kinh tế và",
    highlightTitle: "Quan hệ lợi ích kinh tế",
    subtitle: "Từ vườn cà phê Đắk Lắk đến ly cà phê 85.000đ tại Highlands",
  },
  story: {
    farmer: {
      name: "Anh Khánh (Nông dân Đắk Lắk)",
      description: "Thức dậy lúc 5 giờ sáng ở Đắk Lắk, hái từng hạt cà phê rồi bán cho thương lái với giá 40.000đ/kg. Anh Khánh chỉ nhận về 9,4% tổng lợi nhuận chuỗi — trong khi bỏ ra 3-5 năm lao động cực nhọc và gánh chịu rủi ro lớn nhất từ thiên nhiên và giá cả thị trường.",
      image: "/assets/raw_beans.png"
    },
    retail: {
      name: "Highlands Coffee (Bán lẻ)",
      description: "Cùng ngày hôm đó, tại TP.HCM, một ly cà phê từ chính hạt đó được Highlands bán với giá 85.000đ. Sở hữu thương hiệu mạnh, họ thu về lợi nhuận 85.000đ/ly (1kg = 40-50 ly) — chiếm 64,7% tổng lợi nhuận chuỗi mặc dù thời gian lao động đầu tư ngắn hơn nhiều.",
      image: "/assets/premium_cup.png"
    },
  },
  concept: {
    title: "Khái Niệm & Không Gian Tương Tác",
    subtitle: "(Mục 5.3.1.2 - Giáo trình Kinh tế chính trị Mác - Lênin)",
    definition: "Lý thuyết giáo trình: Quan hệ lợi ích kinh tế là sự thiết lập những tương tác giữa các chủ thể nhằm mục tiêu xác lập các lợi ích kinh tế. Quan hệ này biểu hiện qua hai chiều: Chiều dọc (giữa các cấp bậc trong tổ chức hoặc chuỗi giá trị) và Chiều ngang (giữa các chủ thể ngang hàng).",
    dimensions: [
      {
        title: "Quan hệ Chiều dọc",
        desc: "Là sự liên kết từ Anh Khánh (Nông dân) → Thương lái → Nhà rang xay → Highland Coffee (Bán lẻ). Trong đó, Highland ở vị thế cao nhất, kiểm soát luật chơi của cả chuỗi."
      },
      {
        title: "Quan hệ Chiều ngang",
        desc: "Là sự cạnh tranh giữa anh Khánh với các hộ nông dân khác tại Đắk Lắk, hoặc giữa Highland với các đối thủ như Starbucks, Trung Nguyên."
      }
    ],
    relations: {
      unity: "Tính thống nhất (Cùng cần nhau): Anh Khánh cần Highland để tiêu thụ sản phẩm; Highland cần anh Khánh để có nguồn nguyên liệu đầu vào. Nếu một bên gặp sự cố, bên kia sẽ bị ảnh hưởng trực tiếp.",
      conflict: "Tính mâu thuẫn (Tranh chấp phần bánh lợi nhuận): Highland ký hợp đồng giá cố định để bảo đảm lợi nhuận. Khi giá thế giới giảm, anh Khánh phải chịu lỗ trực tiếp, trong khi Highland vẫn duy trì được lãi. Đây là mâu thuẫn điển hình khi các chủ thể tối ưu hóa lợi ích riêng bằng những phương thức đối lập."
    },
    roleTitle: "Vai Trò Của Lợi Ích (Mục III)",
    roles: [
      {
        title: "Là động lực trực tiếp",
        desc: "Khi lợi ích không được đảm bảo, động lực sẽ mất đi. Khi giá cà phê thế giới giảm mạnh (2012–2013), hàng nghìn nông dân Tây Nguyên bỏ vườn. Không phải vì lười biếng — mà vì lợi ích kinh tế không còn đủ để duy trì động lực canh tác."
      },
      {
        title: "Là cơ sở phát triển các lợi ích khác",
        desc: "C.Mác khẳng định: 'Cội nguồn phát triển của xã hội không phải là quá trình nhận thức, mà là các quan hệ của đời sống vật chất, tức là các lợi ích kinh tế'. Thu nhập bấp bênh → toàn bộ các lợi ích khác (y tế, giáo dục cho con cái) đều bị kéo xuống theo."
      }
    ]
  },
  valueChain: {
    title: "Phân Phối Lợi Ích (Ai nhận được gì?)",
    subtitle: "Mỗi chủ thể nhận lợi ích tương ứng với vai trò của mình. Tuy nhiên, sự phân phối hiện tại không phản ánh đúng đóng góp lao động thực tế:",
    steps: [
      { id: 1, name: "Nông dân", percent: 9.4, effort: "Lao động 3-5 năm / vụ", role: "Trồng trọt" },
      { id: 2, name: "Thương lái", percent: 9.4, effort: "Lao động 1-2 ngày / chuyến", role: "Thu mua" },
      { id: 3, name: "Nhà rang xay", percent: 16.5, effort: "Lao động 2-3 ngày / lô", role: "Chế biến" },
      { id: 4, name: "Chuỗi bán lẻ", percent: 64.7, effort: "Vận hành liên tục", role: "Thương hiệu" },
    ],
    update2024: "Cập nhật Tháng 5/2024 (VICOFA): Dù giá cà phê nhân xô tại Tây Nguyên đạt mức kỷ lục trên 120.000đ/kg do thiếu hụt nguồn cung toàn cầu, bản chất quan hệ lợi ích vẫn không thay đổi: Lợi nhuận bền vững và lớn nhất vẫn nằm ở các khâu chế biến sâu và sở hữu thương hiệu bán lẻ, không phải ở túi tiền của người sản xuất thô."
  },
  causes: {
    title: "4 Nhân Tố Ảnh Hưởng",
    subtitle: "Tại sao Anh Khánh thua thiệt? (Lý giải từ giáo trình)",
    items: [
      { title: "Trình độ phát triển của Lực lượng sản xuất", desc: "Anh Khánh canh tác thủ công, quy mô nhỏ lẻ, năng suất thấp dẫn đến giá thành cao nhưng giá trị gia tăng lại thấp nhất chuỗi." },
      { title: "Địa vị trong hệ thống Quan hệ sản xuất", desc: "Anh Khánh là hộ nông dân đơn lẻ, không có tổ chức đại diện (như hợp tác xã), dẫn đến sức đàm phán thấp nhất. Ngược lại, Highland nắm giữ thương hiệu và kênh phân phối nên có quyền áp đặt giá bán." },
      { title: "Chính sách phân phối thu nhập", desc: "Hiện nay, việc thiếu các cơ chế bảo vệ như giá sàn thu mua khiến nông dân hoàn toàn bị động và chịu thiệt thòi trước sự biến động của thị trường tự do." },
      { title: "Hội nhập kinh tế quốc tế", desc: "Giá cà phê của anh Khánh phụ thuộc trực tiếp vào sàn giao dịch ICE London. Các tập đoàn lớn như Highland có các công cụ tài chính để phòng ngừa rủi ro, còn người nông dân phải gánh chịu trực tiếp mọi cú sốc từ thị trường thế giới." },
    ]
  },
  stateRole: {
    title: "Vai Trò Của Nhà Nước",
    subtitle: "Trong chuỗi giá trị cà phê, lợi ích bị lệch pha nghiêm trọng. Kinh tế thị trường tự do không tự giải quyết được bất công này, Nhà nước bắt buộc phải can thiệp.",
    preventive: {
      title: "Kiểm soát, ngăn ngừa (Mục 5.3.2.3)",
      desc: "Để ngăn chặn thương lái và doanh nghiệp lớn 'bắt chẹt' nông dân, Nhà nước cần triển khai 3 biện pháp phòng ngừa:",
      items: [
        { title: "Minh bạch thông tin giá", desc: "Nhà nước cần đẩy mạnh hoạt động của Sàn giao dịch cà phê Buôn Ma Thuột (BCEC) kết hợp với các ứng dụng di động cập nhật giá ICE London real-time. Khi anh Khánh nắm được giá thực tế toàn cầu, thương lái sẽ mất đi vũ khí 'bưng bít thông tin' để ép giá." },
        { title: "Gia tăng giá trị qua chứng nhận quốc tế", desc: "Nhà nước hỗ trợ các Hợp tác xã đạt chuẩn Fair Trade (Thương mại công bằng) hoặc 4C. Việc này mang về phần premium (thưởng thêm) 200–300 USD/tấn. Đây là cơ chế trực tiếp chống lại sự bóc lột, đưa lợi tức gia tăng thẳng vào tay nông dân." },
        { title: "Hỗ trợ nền tảng sản xuất", desc: "Tiêu biểu như Đề án tái canh cà phê (2014–2020), Nhà nước hỗ trợ nông dân vốn và kỹ thuật để thay vườn già cỗi, giúp giảm giá thành, tăng năng suất, từ đó nới rộng biên lợi nhuận cho anh Khánh." }
      ]
    },
    resolution: {
      title: "Giải quyết mâu thuẫn (Mục 5.3.2.4)",
      desc: "Bài học lịch sử 2012–2013, giá cà phê chạm đáy ~30.000đ/kg. Hàng loạt nông dân Tây Nguyên phẫn nộ và tuyệt vọng đã chặt bỏ vườn cà phê. Nhà nước lúc đó phản ứng chậm, hệ quả là nguồn cung bị đứt gãy. Khi khủng hoảng xảy ra, Nhà nước không thể dùng mệnh lệnh hành chính ép doanh nghiệp chịu lỗ, mà phải đứng ra làm trọng tài, tổ chức đàm phán 3 bên: Hợp tác xã đại diện anh Khánh + Doanh nghiệp (Highlands/Thương lái) + Cơ quan quản lý Nhà nước. Doanh nghiệp cần chấp nhận giảm một phần biên lợi nhuận, chia sẻ rủi ro mua hỗ trợ nông dân thay vì dồn toàn bộ thiệt hại về mắt xích yếu nhất là anh Khánh."
    }
  },
  conclusion: {
    message: "Sự thua thiệt của anh Khánh chính là minh chứng sống động cho mâu thuẫn lợi ích khi trình độ sản xuất thấp và địa vị đàm phán yếu thế.",
    quotes: [
      "Nước độc lập mà dân không được hưởng ấm no, hạnh phúc thì độc lập cũng không có ý nghĩa gì. — Hồ Chí Minh",
      "Coi lợi ích kinh tế là động lực của các hoạt động kinh tế; phải tôn trọng lợi ích cá nhân chính đáng. — Văn kiện Đại hội XII, ĐCSVN"
    ],
    buttonText: "Bắt đầu Thảo Luận"
  }
};
