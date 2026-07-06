const basePosts = [
  {
    id: 1,
    title: "Nên chọn chứng chỉ tiếng Anh nào phù hợp với mục tiêu học tập?",
    category: "Tiếng Anh",
    date: "20/06/2026",
    description:
      "Gợi ý cách lựa chọn chứng chỉ tiếng Anh dựa trên nhu cầu học tập, công việc và yêu cầu của từng đơn vị.",
    image:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Chứng chỉ tin học có vai trò gì trong học tập và công việc?",
    category: "Tin học",
    date: "12/06/2026",
    description:
      "Tìm hiểu tầm quan trọng của kỹ năng tin học và chứng chỉ công nghệ thông tin trong môi trường hiện nay.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Chuẩn chức danh nghề nghiệp giáo viên là gì?",
    category: "Bồi dưỡng",
    date: "03/06/2026",
    description:
      "Tổng quan về chương trình bồi dưỡng chuẩn chức danh nghề nghiệp dành cho giáo viên.",
    image:
      "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Chứng chỉ nghiệp vụ sư phạm THCS, THPT phù hợp với ai?",
    category: "Nghiệp vụ sư phạm",
    date: "28/05/2026",
    description:
      "Những đối tượng nên tham gia khóa bồi dưỡng nghiệp vụ sư phạm và lợi ích của chương trình.",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Nên học Trung cấp, Cao đẳng hay Đại học?",
    category: "Đào tạo dài hạn",
    date: "16/05/2026",
    description:
      "Phân tích các lựa chọn đào tạo dài hạn để người học chọn lộ trình phù hợp.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Kinh nghiệm lựa chọn đơn vị tư vấn giáo dục uy tín",
    category: "Tư vấn giáo dục",
    date: "05/05/2026",
    description:
      "Các tiêu chí giúp học viên lựa chọn nơi tư vấn và đồng hành học tập đáng tin cậy.",
    image:
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=900&q=80",
  },
];

const postDetailsById = {
  1: {
    slug: "nen-chon-chung-chi-tieng-anh-nao-phu-hop",
    content: [
      {
        heading: "Bắt đầu từ mục tiêu sử dụng chứng chỉ",
        paragraphs: [
          "Không có một chứng chỉ tiếng Anh phù hợp với tất cả mọi người. Học viên nên bắt đầu bằng câu hỏi chứng chỉ dùng để xét tốt nghiệp, nộp hồ sơ tuyển dụng, bổ sung điều kiện học tập hay đánh giá năng lực cá nhân.",
          "Với từng mục tiêu, Edupartner sẽ tư vấn lộ trình ôn tập, thời gian chuẩn bị và dạng chứng chỉ phù hợp để tránh học lan man hoặc đăng ký sai nhu cầu.",
        ],
      },
      {
        heading: "Những tiêu chí cần cân nhắc",
        paragraphs: [
          "Học viên nên xem xét yêu cầu của đơn vị tiếp nhận, thời hạn cần có chứng chỉ, trình độ hiện tại, hình thức thi và khả năng sắp xếp thời gian ôn luyện.",
          "Nếu cần hoàn thiện hồ sơ trong thời gian ngắn, lộ trình học nên ưu tiên các kỹ năng trọng tâm và luyện đề có phản hồi thường xuyên.",
        ],
      },
      {
        heading: "Edupartner hỗ trợ như thế nào?",
        paragraphs: [
          "Edupartner tiếp nhận thông tin đầu vào, phân tích mục tiêu và đề xuất chương trình tiếng Anh phù hợp. Học viên được định hướng cách học, thời lượng ôn tập và các bước chuẩn bị trước kỳ thi.",
        ],
      },
    ],
  },
  2: {
    slug: "chung-chi-tin-hoc-co-vai-tro-gi",
    content: [
      {
        heading: "Kỹ năng tin học là năng lực nền tảng",
        paragraphs: [
          "Trong học tập và công việc hiện nay, kỹ năng tin học không chỉ là điều kiện hồ sơ mà còn ảnh hưởng trực tiếp đến hiệu suất xử lý tài liệu, dữ liệu và giao tiếp công việc.",
          "Một khóa học tin học phù hợp giúp học viên sử dụng máy tính tự tin hơn, giảm lỗi thao tác và làm việc chuyên nghiệp hơn.",
        ],
      },
      {
        heading: "Khi nào cần chứng chỉ tin học?",
        paragraphs: [
          "Chứng chỉ tin học thường được yêu cầu trong hồ sơ học tập, tuyển dụng, nâng ngạch, xét điều kiện tốt nghiệp hoặc hoàn thiện tiêu chuẩn vị trí việc làm.",
          "Học viên nên xác định rõ yêu cầu của đơn vị tiếp nhận để chọn đúng chương trình và tránh mất thời gian bổ sung nhiều lần.",
        ],
      },
      {
        heading: "Lộ trình học nên có gì?",
        paragraphs: [
          "Một lộ trình hiệu quả nên gồm đánh giá kỹ năng hiện tại, ôn tập kiến thức máy tính cơ bản, thực hành phần mềm văn phòng và hướng dẫn hoàn thiện hồ sơ chứng chỉ theo nhu cầu.",
        ],
      },
    ],
  },
  3: {
    slug: "chuan-chuc-danh-nghe-nghiep-giao-vien-la-gi",
    content: [
      {
        heading: "Tổng quan về chuẩn chức danh nghề nghiệp giáo viên",
        paragraphs: [
          "Chuẩn chức danh nghề nghiệp giáo viên là nhóm yêu cầu gắn với năng lực chuyên môn, nghiệp vụ và quá trình phát triển nghề nghiệp của giáo viên.",
          "Các chương trình bồi dưỡng giúp giáo viên cập nhật kiến thức, hoàn thiện điều kiện cần thiết và chủ động hơn trong kế hoạch nghề nghiệp.",
        ],
      },
      {
        heading: "Ai nên tìm hiểu chương trình này?",
        paragraphs: [
          "Giáo viên đang cần bổ sung chứng chỉ, hoàn thiện hồ sơ nghề nghiệp hoặc cập nhật yêu cầu theo vị trí công tác nên được tư vấn kỹ trước khi đăng ký.",
          "Việc xác định đúng nhóm đối tượng giúp lựa chọn chương trình phù hợp và chuẩn bị thông tin học tập hiệu quả hơn.",
        ],
      },
      {
        heading: "Vai trò của đơn vị tư vấn",
        paragraphs: [
          "Edupartner hỗ trợ học viên rà soát nhu cầu, giải thích nhóm chương trình, tư vấn thời lượng, hình thức học và các bước cần chuẩn bị trong quá trình tham gia.",
        ],
      },
    ],
  },
  4: {
    slug: "chung-chi-nghiep-vu-su-pham-thcs-thpt-phu-hop-voi-ai",
    content: [
      {
        heading: "Đối tượng phù hợp",
        paragraphs: [
          "Chứng chỉ nghiệp vụ sư phạm THCS, THPT phù hợp với người có định hướng giảng dạy, cần bổ sung nền tảng nghiệp vụ sư phạm hoặc hoàn thiện điều kiện theo yêu cầu công tác.",
          "Trước khi đăng ký, học viên nên được tư vấn về đối tượng tham gia, mục tiêu sử dụng chứng chỉ và hình thức học phù hợp.",
        ],
      },
      {
        heading: "Nội dung thường được quan tâm",
        paragraphs: [
          "Người học thường cần tìm hiểu về phương pháp dạy học, thiết kế bài giảng, tổ chức lớp học, kiểm tra đánh giá và xử lý tình huống sư phạm.",
          "Các nội dung này giúp người học có cái nhìn thực tế hơn về hoạt động giảng dạy ở bậc THCS, THPT.",
        ],
      },
      {
        heading: "Cách Edupartner đồng hành",
        paragraphs: [
          "Edupartner tư vấn chương trình phù hợp, hướng dẫn thông tin đăng ký và hỗ trợ học viên theo dõi các mốc quan trọng trong quá trình học.",
        ],
      },
    ],
  },
  5: {
    slug: "nen-hoc-trung-cap-cao-dang-hay-dai-hoc",
    content: [
      {
        heading: "Mỗi hệ đào tạo phù hợp với một mục tiêu khác nhau",
        paragraphs: [
          "Trung cấp, Cao đẳng và Đại học đều có giá trị riêng nếu được lựa chọn đúng với mục tiêu nghề nghiệp, nền tảng học tập và điều kiện thời gian của người học.",
          "Thay vì chọn theo cảm tính, học viên nên phân tích mục tiêu dài hạn, yêu cầu bằng cấp và khả năng duy trì việc học.",
        ],
      },
      {
        heading: "Cách so sánh lộ trình",
        paragraphs: [
          "Trung cấp thường phù hợp với nhu cầu học nghề hoặc bổ sung bằng cấp chuyên môn trong thời gian hợp lý. Cao đẳng cân bằng giữa thực hành và phát triển nghề nghiệp. Đại học phù hợp với mục tiêu nâng cao trình độ, liên thông hoặc mở rộng cơ hội dài hạn.",
          "Sự phù hợp còn phụ thuộc vào ngành học, hình thức đào tạo, hồ sơ đầu vào và kế hoạch cá nhân.",
        ],
      },
      {
        heading: "Tư vấn trước khi quyết định",
        paragraphs: [
          "Edupartner hỗ trợ người học đối chiếu nhu cầu với các chương trình đào tạo dài hạn, từ đó chọn hướng đi rõ ràng hơn và chuẩn bị hồ sơ đúng ngay từ đầu.",
        ],
      },
    ],
  },
  6: {
    slug: "kinh-nghiem-lua-chon-don-vi-tu-van-giao-duc-uy-tin",
    content: [
      {
        heading: "Đơn vị tư vấn uy tín giúp tiết kiệm thời gian",
        paragraphs: [
          "Một đơn vị tư vấn giáo dục đáng tin cậy không chỉ giới thiệu khóa học mà còn giúp học viên hiểu đúng nhu cầu, điều kiện tham gia và lộ trình phù hợp.",
          "Điều này đặc biệt quan trọng với các chương trình chứng chỉ, bồi dưỡng ngắn hạn và đào tạo dài hạn có nhiều nhóm đối tượng khác nhau.",
        ],
      },
      {
        heading: "Tiêu chí nên xem xét",
        paragraphs: [
          "Học viên nên ưu tiên đơn vị tư vấn rõ ràng về chương trình, thời lượng, hình thức học, đối tượng phù hợp và quy trình hỗ trợ sau đăng ký.",
          "Cách tư vấn cũng cần thực tế, không hứa hẹn quá mức và luôn dựa trên mục tiêu cá nhân của người học.",
        ],
      },
      {
        heading: "Giá trị Edupartner hướng tới",
        paragraphs: [
          "Edupartner tập trung vào tư vấn đúng nhu cầu, cung cấp thông tin dễ hiểu và đồng hành trong quá trình học tập, ôn luyện, hoàn thiện thông tin cần thiết.",
        ],
      },
    ],
  },
};

export const posts = basePosts.map((post) => ({
  ...post,
  ...postDetailsById[post.id],
}));
