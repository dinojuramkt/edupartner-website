export const categories = [
  "Tất cả",
  "Tiếng Anh",
  "Tin học",
  "Kế toán - Tài chính",
  "Giáo dục",
  "Y tế",
  "Bất động sản",
  "Du lịch",
  "Hành chính - Văn thư",
  "Đào tạo ngắn hạn",
  "Đào tạo dài hạn",
  "Khác",
];

export const courseGroups = [
  {
    title: "Chương trình tiếng Anh",
    category: "Tiếng Anh",
    description:
      "Các khóa học tiếng Anh phục vụ học tập, công việc, thi chứng chỉ và nâng cao năng lực sử dụng tiếng Anh.",
    examples: [
      "Luyện thi chứng chỉ tiếng Anh",
      "Tiếng Anh giao tiếp",
      "Tiếng Anh đầu vào / đầu ra",
      "Luyện thi VEPT Pearson",
    ],
  },
  {
    title: "Chương trình tin học",
    category: "Tin học",
    description:
      "Các khóa học tin học giúp học viên hoàn thiện kỹ năng công nghệ thông tin phục vụ học tập, công việc và yêu cầu chứng chỉ.",
    examples: [
      "Tin học cơ bản",
      "Tin học văn phòng",
      "Chứng chỉ ứng dụng công nghệ thông tin",
      "Kỹ năng sử dụng phần mềm văn phòng",
    ],
  },
  {
    title: "Chương trình đào tạo ngắn hạn",
    category: "Đào tạo ngắn hạn",
    description:
      "Các khóa bồi dưỡng, chứng chỉ nghiệp vụ và chương trình ngắn hạn dành cho người học cần hoàn thiện điều kiện nghề nghiệp.",
    examples: [
      "Chuẩn chức danh nghề nghiệp giáo viên",
      "Chuẩn chức danh nghề nghiệp ngành y tế",
      "Chứng chỉ nghiệp vụ sư phạm THCS, THPT",
      "Các chương trình bồi dưỡng ngắn hạn khác",
    ],
  },
  {
    title: "Chương trình đào tạo dài hạn",
    category: "Đào tạo dài hạn",
    description:
      "Tư vấn các chương trình đào tạo dài hạn phù hợp với nhu cầu học tập, nâng cao trình độ và phát triển nghề nghiệp.",
    examples: [
      "Trung cấp",
      "Cao đẳng",
      "Đại học",
      "Liên thông, văn bằng và đào tạo theo nhu cầu",
    ],
  },
];

const baseCourses = [
  {
    id: 1,
    title: "Luyện thi chứng chỉ tiếng Anh",
    category: "Tiếng Anh",
    description:
      "Chương trình giúp học viên củng cố kiến thức, luyện kỹ năng và chuẩn bị cho các kỳ thi chứng chỉ tiếng Anh.",
    audience: "Học sinh, sinh viên, người đi làm cần chứng chỉ tiếng Anh.",
    duration: "Theo lộ trình tư vấn",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Luyện thi VEPT Pearson",
    category: "Tiếng Anh",
    description:
      "Ôn luyện trọng tâm cho bài thi Versant English Placement Test với lộ trình rõ mục tiêu.",
    audience:
      "Người cần đánh giá năng lực tiếng Anh theo bài thi Versant English Placement Test.",
    duration: "10 buổi trọng tâm",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Tiếng Anh giao tiếp nền tảng",
    category: "Tiếng Anh",
    description:
      "Rèn phản xạ giao tiếp, phát âm và vốn từ nền tảng cho học tập, công việc hằng ngày.",
    audience: "Người mất gốc hoặc muốn cải thiện giao tiếp cơ bản.",
    duration: "8-12 buổi",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Tin học văn phòng",
    category: "Tin học",
    description:
      "Trang bị kỹ năng sử dụng máy tính, phần mềm văn phòng và ứng dụng công nghệ thông tin trong công việc.",
    audience:
      "Học sinh, sinh viên, người đi làm cần kỹ năng tin học phục vụ công việc.",
    duration: "Theo chương trình",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Chứng chỉ ứng dụng công nghệ thông tin",
    category: "Tin học",
    description:
      "Hỗ trợ học viên hoàn thiện kỹ năng tin học và chứng chỉ công nghệ thông tin theo yêu cầu.",
    audience:
      "Người cần hoàn thiện chứng chỉ tin học theo yêu cầu học tập hoặc công việc.",
    duration: "Theo lộ trình tư vấn",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Chuẩn chức danh nghề nghiệp giáo viên",
    category: "Đào tạo ngắn hạn",
    description:
      "Khóa bồi dưỡng dành cho giáo viên có nhu cầu hoàn thiện điều kiện theo tiêu chuẩn chức danh nghề nghiệp.",
    audience:
      "Giáo viên cần bồi dưỡng, hoàn thiện điều kiện chức danh nghề nghiệp.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 7,
    title: "Chuẩn chức danh nghề nghiệp ngành y tế",
    category: "Đào tạo ngắn hạn",
    description:
      "Chương trình bồi dưỡng dành cho nhân sự ngành y tế cần bổ sung chứng chỉ theo yêu cầu vị trí công tác.",
    audience:
      "Cán bộ, nhân sự ngành y tế cần bổ sung chứng chỉ theo yêu cầu nghề nghiệp.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 8,
    title: "Chứng chỉ nghiệp vụ sư phạm THCS, THPT",
    category: "Đào tạo ngắn hạn",
    description:
      "Khóa học dành cho người có nhu cầu bổ sung chứng chỉ nghiệp vụ sư phạm theo định hướng giảng dạy.",
    audience:
      "Người cần bổ sung chứng chỉ nghiệp vụ sư phạm phục vụ công tác giảng dạy.",
    duration: "Theo chương trình",
    format: "Online / Offline",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 9,
    title: "Các chương trình đào tạo ngắn hạn khác",
    category: "Đào tạo ngắn hạn",
    description:
      "Tư vấn các khóa bồi dưỡng, chứng chỉ chuyên môn và chương trình ngắn hạn được cập nhật theo nhu cầu.",
    audience: "Học viên có nhu cầu bổ sung chứng chỉ chuyên môn, nghiệp vụ.",
    duration: "Cập nhật sau",
    format: "Cập nhật sau",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 10,
    title: "Chương trình Trung cấp",
    category: "Đào tạo dài hạn",
    description:
      "Hỗ trợ lựa chọn ngành học, hệ đào tạo và lộ trình Trung cấp phù hợp mục tiêu cá nhân.",
    audience:
      "Người học có nhu cầu lấy bằng Trung cấp hoặc nâng cao trình độ chuyên môn.",
    duration: "Theo ngành và hệ đào tạo",
    format: "Tư vấn theo chương trình",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 11,
    title: "Chương trình Cao đẳng",
    category: "Đào tạo dài hạn",
    description:
      "Tư vấn chương trình Cao đẳng theo định hướng nghề nghiệp, điều kiện cá nhân và nhu cầu học tập.",
    audience:
      "Học viên muốn học tập, nâng cao trình độ và mở rộng cơ hội nghề nghiệp.",
    duration: "Theo ngành và hệ đào tạo",
    format: "Tư vấn theo chương trình",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 12,
    title: "Chương trình Đại học",
    category: "Đào tạo dài hạn",
    description:
      "Hỗ trợ người học lựa chọn chương trình Đại học, liên thông, văn bằng hoặc nâng cao trình độ.",
    audience:
      "Người học có nhu cầu học Đại học, liên thông, văn bằng hoặc nâng cao trình độ.",
    duration: "Theo ngành và hệ đào tạo",
    format: "Tư vấn theo chương trình",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
  },
];

const supplementalCourses = [
  {
    id: "ke-toan-truong",
    slug: "chung-chi-ke-toan-truong",
    title: "Chứng chỉ kế toán trưởng Doanh nghiệp - Hành chính sự nghiệp",
    category: "Kế toán - Tài chính",
    description:
      "Chương trình bồi dưỡng giúp học viên đáp ứng điều kiện bổ nhiệm kế toán trưởng, nắm nghiệp vụ tài chính, thuế, kế toán và tổ chức bộ máy kế toán.",
    audience:
      "Kế toán viên, kế toán tổng hợp, cán bộ tài chính - kế toán và người có kinh nghiệm kế toán muốn thăng tiến.",
    duration: "120 phút/buổi; chương trình 192-288 giờ theo loại hình đơn vị",
    format: "Online qua Zoom/LMS hoặc lớp liên kết",
    schedule: "Lớp tối Thứ 2-4-6 hoặc Thứ 3-5-7, có lớp cuối tuần",
    updateDate: "22/06/2026",
    students: 15,
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa chứng chỉ kế toán trưởng được Edupartner tư vấn cho học viên cần hoàn thiện điều kiện bổ nhiệm hoặc nâng cao năng lực quản trị tài chính - kế toán. Nội dung chương trình tập trung vào pháp lý, nghiệp vụ, thuế, ngân sách và kiểm soát chi phí.",
    outcomes: [
      "Nắm kiến thức pháp lý, nghiệp vụ và kỹ năng đảm nhiệm chức vụ kế toán trưởng.",
      "Hiểu quy định quản lý tài chính, thuế, kế toán theo từng loại hình đơn vị.",
      "Biết tổ chức bộ máy kế toán, lập báo cáo tài chính, phân tích và kiểm soát chi phí.",
    ],
    curriculum: [
      "Khung pháp lý về kế toán, thuế, tài chính và trách nhiệm kế toán trưởng.",
      "Quản lý tài chính, ngân sách, báo cáo và kiểm soát nội bộ.",
      "Nghiệp vụ kế toán trong doanh nghiệp và đơn vị hành chính sự nghiệp.",
      "Tư vấn điều kiện bổ nhiệm, hồ sơ học và lộ trình chứng chỉ phù hợp.",
    ],
  },
  {
    id: "moi-gioi-bds",
    slug: "chung-chi-hanh-nghe-moi-gioi-bat-dong-san",
    title: "Chứng chỉ hành nghề môi giới bất động sản",
    category: "Bất động sản",
    description:
      "Chương trình ngắn hạn hỗ trợ học viên đủ điều kiện dự thi sát hạch và cấp chứng chỉ hành nghề môi giới bất động sản.",
    audience:
      "Cá nhân đang môi giới BĐS, nhân sự sàn giao dịch, người muốn khởi nghiệp hoặc chuyển hướng nghề nghiệp sang bất động sản.",
    duration: "120 phút/buổi; kiến thức cơ sở, chuyên môn, thực hành và kiểm tra",
    format: "Online / Offline",
    schedule: "Khai giảng hằng tuần hoặc hằng tháng, có lớp tối, cuối tuần và cấp tốc",
    updateDate: "15/06/2026",
    students: 15,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa chứng chỉ hành nghề môi giới bất động sản phù hợp với học viên cần bổ sung điều kiện hành nghề, cập nhật quy định pháp luật và luyện kỹ năng giao dịch thực tế. Edupartner hỗ trợ tư vấn đối tượng, lịch học và lộ trình chuẩn bị hồ sơ.",
    outcomes: [
      "Nắm quy định pháp luật và nguyên tắc hành nghề môi giới bất động sản.",
      "Hiểu quy trình giao dịch, ký kết hợp đồng, công bố và kiểm tra thông tin dự án.",
      "Rèn kỹ năng tư vấn, đàm phán, xử lý tình huống và ôn cấu trúc đề thi chứng chỉ.",
    ],
    curriculum: [
      "Kiến thức pháp luật kinh doanh bất động sản và đạo đức hành nghề.",
      "Quy trình môi giới, giao dịch, hợp đồng và kiểm tra pháp lý dự án.",
      "Kỹ năng tư vấn khách hàng, đàm phán và xử lý tình huống.",
      "Ôn luyện sát hạch và hướng dẫn chuẩn bị hồ sơ chứng chỉ.",
    ],
  },
  {
    id: "thong-tin-thu-vien",
    slug: "chung-chi-thong-tin-thu-vien",
    title: "Chứng chỉ thông tin thư viện",
    category: "Hành chính - Văn thư",
    description:
      "Khóa bồi dưỡng kiến thức và kỹ năng quản lý thư viện, lưu trữ học liệu, ứng dụng CNTT và nghiệp vụ thông tin.",
    audience:
      "Cán bộ thư viện, trung tâm thông tin, trường học, viện nghiên cứu, công chức, viên chức và sinh viên định hướng lĩnh vực thư viện.",
    duration: "120 phút/buổi",
    format: "Online / Offline",
    schedule: "Lớp tối Thứ 2-4-6 hoặc Thứ 3-5-7, 20:00-22:00",
    updateDate: "11/06/2026",
    students: 15,
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ thông tin thư viện giúp học viên bổ sung nghiệp vụ tổ chức, quản lý, lưu trữ và khai thác tài nguyên thông tin. Chương trình phù hợp với nhân sự làm việc trong thư viện, trung tâm thông tin và các đơn vị giáo dục, nghiên cứu.",
    outcomes: [
      "Nắm nghiệp vụ tổ chức, quản lý, lưu trữ và khai thác tài nguyên thông tin - thư viện.",
      "Ứng dụng công nghệ thông tin trong quản lý và tra cứu dữ liệu thư viện.",
      "Hiểu tiêu chuẩn chức danh, kỹ năng phục vụ người đọc và phổ biến thông tin.",
    ],
    curriculum: [
      "Cơ sở nghiệp vụ thông tin thư viện và quản lý tài nguyên học liệu.",
      "Ứng dụng CNTT trong thư viện, tra cứu và tổ chức dữ liệu.",
      "Kỹ năng phục vụ, tư vấn người đọc và phổ biến thông tin.",
      "Tư vấn hồ sơ, lịch học và quyền lợi chứng chỉ.",
    ],
  },
  {
    id: "tu-van-du-hoc",
    slug: "boi-duong-chung-chi-tu-van-du-hoc",
    title: "Bồi dưỡng chứng chỉ tư vấn du học",
    category: "Giáo dục",
    description:
      "Chương trình bồi dưỡng nghiệp vụ tư vấn du học theo định hướng quy định hiện hành, phù hợp người làm dịch vụ tư vấn giáo dục quốc tế.",
    audience:
      "Nhân sự trung tâm tư vấn du học, cán bộ tuyển sinh quốc tế, người muốn mở hoặc làm việc trong lĩnh vực tư vấn du học.",
    duration: "Khoảng 10 tín chỉ, 230 tiết",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa bồi dưỡng chứng chỉ tư vấn du học giúp học viên hiểu quy trình tư vấn, hồ sơ, đạo đức nghề nghiệp và các yêu cầu khi hỗ trợ người học lựa chọn chương trình quốc tế. Edupartner tư vấn lộ trình và hình thức học phù hợp với nhu cầu cá nhân.",
    outcomes: [
      "Hiểu quy trình tư vấn du học, chọn trường, chọn ngành và định hướng hồ sơ.",
      "Nắm các yêu cầu về nghiệp vụ, pháp lý và đạo đức trong tư vấn du học.",
      "Có kỹ năng tiếp nhận nhu cầu, tư vấn lộ trình và hỗ trợ người học.",
    ],
    curriculum: [
      "Tổng quan hoạt động tư vấn du học và quy định liên quan.",
      "Kỹ năng tư vấn chương trình, hồ sơ, tài chính và lộ trình học.",
      "Thực hành tình huống tư vấn và chăm sóc người học.",
      "Hướng dẫn đăng ký, lịch học và chuẩn bị hồ sơ chứng chỉ.",
    ],
  },
  {
    id: "quan-ly-giao-duc-truong-hoc",
    slug: "nghiep-vu-quan-ly-giao-duc-va-quan-tri-truong-hoc",
    title: "Nghiệp vụ quản lý giáo dục và quản trị trường học",
    category: "Giáo dục",
    description:
      "Chương trình bồi dưỡng kiến thức quản lý giáo dục, kỹ năng quản trị nhà trường và điều hành hoạt động giáo dục.",
    audience:
      "Cán bộ quản lý trường học, tổ trưởng chuyên môn, giáo viên quy hoạch vị trí quản lý và nhân sự giáo dục.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chương trình nghiệp vụ quản lý giáo dục và quản trị trường học hỗ trợ học viên bổ sung kiến thức chung về quản lý, kỹ năng điều hành, quản trị nhân sự, chất lượng và hoạt động nhà trường.",
    outcomes: [
      "Nắm nền tảng quản lý giáo dục và quản trị trường học hiện đại.",
      "Phát triển kỹ năng lập kế hoạch, điều hành, giám sát và đánh giá hoạt động giáo dục.",
      "Biết vận dụng kiến thức quản trị vào tình huống thực tế trong nhà trường.",
    ],
    curriculum: [
      "Kiến thức chung về quản lý giáo dục và chính sách nhà trường.",
      "Quản trị nhân sự, chuyên môn, chất lượng và truyền thông trường học.",
      "Kỹ năng lãnh đạo, điều hành, xử lý tình huống quản lý.",
      "Tư vấn hồ sơ, điều kiện tham gia và lịch học phù hợp.",
    ],
  },
  {
    id: "cap-cuu-co-ban",
    slug: "khoa-hoc-cap-cuu-co-ban",
    title: "Khóa học cấp cứu cơ bản",
    category: "Y tế",
    description:
      "Khóa học giúp học viên hiểu nguyên tắc cấp cứu cơ bản, xử lý tình huống ban đầu và chuẩn bị hồ sơ học phù hợp.",
    audience:
      "Nhân viên y tế, người làm trong môi trường cần kỹ năng sơ cấp cứu, cán bộ cơ sở và cá nhân có nhu cầu bổ sung kỹ năng an toàn.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa cấp cứu cơ bản tập trung vào nhận diện tình huống khẩn cấp, nguyên tắc xử trí ban đầu và phối hợp hỗ trợ người bệnh trước khi có can thiệp chuyên sâu.",
    outcomes: [
      "Hiểu nguyên tắc an toàn và đánh giá ban đầu trong tình huống cấp cứu.",
      "Nắm các thao tác hỗ trợ cơ bản theo hướng dẫn chương trình.",
      "Biết cách phối hợp, báo cáo và chuẩn bị thông tin khi cần hỗ trợ y tế.",
    ],
    curriculum: [
      "Nguyên tắc cấp cứu cơ bản và an toàn người hỗ trợ.",
      "Nhận diện một số tình huống cấp cứu thường gặp.",
      "Thực hành quy trình hỗ trợ ban đầu theo chương trình.",
      "Tư vấn hình thức học, lịch khai giảng và hồ sơ tham gia.",
    ],
  },
  {
    id: "kiem-soat-nhiem-khuan",
    slug: "khoa-hoc-kiem-soat-nhiem-khuan",
    title: "Khóa học kiểm soát nhiễm khuẩn",
    category: "Y tế",
    description:
      "Khóa bồi dưỡng kiểm soát nhiễm khuẩn dành cho nhóm ngành y tế, hỗ trợ cập nhật kiến thức phòng ngừa và quản lý nguy cơ.",
    audience:
      "Nhân viên y tế, cán bộ kiểm soát nhiễm khuẩn, điều dưỡng, kỹ thuật viên và nhân sự cơ sở khám chữa bệnh.",
    duration: "48 tiết",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "11/05/2026",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa kiểm soát nhiễm khuẩn giúp học viên cập nhật quy trình phòng ngừa, giám sát và kiểm soát nguy cơ lây nhiễm trong môi trường y tế.",
    outcomes: [
      "Nắm nguyên tắc kiểm soát nhiễm khuẩn trong cơ sở y tế.",
      "Hiểu quy trình vệ sinh, khử khuẩn, phòng ngừa và giám sát nguy cơ.",
      "Biết vận dụng kiến thức vào hoạt động chuyên môn tại đơn vị.",
    ],
    curriculum: [
      "Tổng quan kiểm soát nhiễm khuẩn và an toàn người bệnh.",
      "Quy trình vệ sinh tay, khử khuẩn, tiệt khuẩn và quản lý chất thải.",
      "Giám sát nguy cơ, phòng ngừa lây nhiễm và báo cáo sự cố.",
      "Tư vấn hồ sơ, lịch học và yêu cầu chứng chỉ.",
    ],
  },
  {
    id: "quan-ly-dieu-duong",
    slug: "chung-chi-quan-ly-dieu-duong",
    title: "Chứng chỉ quản lý điều dưỡng",
    category: "Y tế",
    description:
      "Khóa quản lý điều dưỡng tổ chức linh hoạt online/offline, hỗ trợ học viên cập nhật kiến thức quản lý, tài liệu và chứng chỉ.",
    audience:
      "Điều dưỡng trưởng, điều dưỡng viên, cán bộ quản lý khoa/phòng và nhân sự y tế cần bổ sung năng lực quản lý điều dưỡng.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "06/07/2025",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ quản lý điều dưỡng phù hợp với nhân sự y tế cần nâng cao kỹ năng tổ chức, phân công, giám sát, đánh giá và cải tiến chất lượng chăm sóc người bệnh.",
    outcomes: [
      "Nắm nguyên tắc quản lý hoạt động điều dưỡng tại khoa/phòng.",
      "Phát triển kỹ năng lãnh đạo nhóm, phân công công việc và giám sát chất lượng.",
      "Biết áp dụng công cụ quản lý, báo cáo và cải tiến quy trình chăm sóc.",
    ],
    curriculum: [
      "Cơ sở quản lý điều dưỡng và tổ chức hoạt động chăm sóc.",
      "Quản lý nhân sự, ca trực, hồ sơ và chất lượng điều dưỡng.",
      "Kỹ năng lãnh đạo, giao tiếp, đào tạo và kiểm tra nội bộ.",
      "Hướng dẫn đăng ký, tài liệu học và nhận chứng chỉ.",
    ],
  },
  {
    id: "dinh-duong-tiet-che",
    slug: "khoa-hoc-dinh-duong-tiet-che",
    title: "Khóa học dinh dưỡng tiết chế",
    category: "Y tế",
    description:
      "Chương trình chuyên sâu về tư vấn, xây dựng chế độ ăn phù hợp nhóm bệnh lý, trẻ em, người cao tuổi, phụ nữ mang thai và bệnh mạn tính.",
    audience:
      "Nhân viên y tế, cán bộ dinh dưỡng, điều dưỡng, người làm trong cơ sở chăm sóc sức khỏe và học viên quan tâm tư vấn dinh dưỡng.",
    duration: "Theo chương trình chuyên đề",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "21/07/2025",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa dinh dưỡng tiết chế hỗ trợ học viên hiểu nguyên tắc đánh giá nhu cầu dinh dưỡng, xây dựng khẩu phần và tư vấn chế độ ăn cho từng nhóm đối tượng hoặc bệnh lý.",
    outcomes: [
      "Nắm nguyên tắc dinh dưỡng, tiết chế và xây dựng khẩu phần.",
      "Biết tư vấn chế độ ăn cho trẻ em, người cao tuổi, phụ nữ mang thai và bệnh mạn tính.",
      "Có khả năng áp dụng kiến thức vào hoạt động chăm sóc, tư vấn sức khỏe.",
    ],
    curriculum: [
      "Cơ sở dinh dưỡng học và đánh giá tình trạng dinh dưỡng.",
      "Dinh dưỡng theo nhóm tuổi, tình trạng sức khỏe và bệnh lý.",
      "Thực hành xây dựng thực đơn, khẩu phần và tư vấn người bệnh.",
      "Tư vấn lịch học, hình thức học và hồ sơ tham gia.",
    ],
  },
  {
    id: "cme-duoc",
    slug: "chung-chi-cme-duoc",
    title: "Chứng chỉ CME Dược",
    category: "Y tế",
    description:
      "Bồi dưỡng ngắn hạn cho dược sĩ và người hành nghề dược cập nhật kiến thức chuyên môn liên tục, đáp ứng yêu cầu CME.",
    audience:
      "Dược sĩ, người hành nghề dược, nhân sự nhà thuốc, cơ sở dược và học viên cần cập nhật kiến thức chuyên môn liên tục.",
    duration: "Theo chuyên đề CME",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "31/10/2025",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ CME Dược giúp học viên cập nhật kiến thức chuyên môn, quy định hành nghề và kỹ năng thực hành trong lĩnh vực dược theo nhu cầu đào tạo liên tục.",
    outcomes: [
      "Cập nhật kiến thức chuyên môn và quy định liên quan đến hành nghề dược.",
      "Bổ sung năng lực tư vấn, sử dụng thuốc an toàn và quản lý hoạt động dược.",
      "Hoàn thiện yêu cầu đào tạo liên tục theo nhóm đối tượng phù hợp.",
    ],
    curriculum: [
      "Tổng quan yêu cầu CME và cập nhật chuyên môn dược.",
      "An toàn thuốc, tư vấn sử dụng thuốc và quản lý nhà thuốc.",
      "Chuyên đề thực hành theo nhóm nghề nghiệp.",
      "Tư vấn hồ sơ, lịch học và chứng nhận hoàn thành.",
    ],
  },
  {
    id: "ky-nang-lanh-dao-y-te",
    slug: "ky-nang-lanh-dao-va-quan-ly-y-te",
    title: "Kỹ năng lãnh đạo và quản lý y tế",
    category: "Y tế",
    description:
      "Chương trình đào tạo ngắn hạn cho cán bộ đang giữ hoặc chuẩn bị giữ vị trí lãnh đạo trong hệ thống y tế.",
    audience:
      "Lãnh đạo khoa/phòng, cán bộ quản lý y tế, nhân sự quy hoạch vị trí điều hành trong cơ sở y tế.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "16/07/2025",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa kỹ năng lãnh đạo và quản lý y tế giúp học viên phát triển tư duy quản trị, kỹ năng điều hành, giao tiếp, ra quyết định và cải tiến chất lượng trong môi trường y tế.",
    outcomes: [
      "Nâng cao năng lực lãnh đạo, điều hành và quản trị đội ngũ y tế.",
      "Phát triển kỹ năng giao tiếp, ra quyết định và xử lý tình huống.",
      "Biết áp dụng công cụ quản lý chất lượng và cải tiến hoạt động đơn vị.",
    ],
    curriculum: [
      "Tư duy lãnh đạo và quản trị trong lĩnh vực y tế.",
      "Quản lý nhân sự, quy trình, chất lượng và an toàn người bệnh.",
      "Kỹ năng giao tiếp, điều hành cuộc họp và xử lý xung đột.",
      "Tư vấn hình thức học, lịch học và hồ sơ tham gia.",
    ],
  },
  {
    id: "ke-toan-thue",
    slug: "chung-chi-ke-toan-thue",
    title: "Chứng chỉ kế toán thuế",
    category: "Kế toán - Tài chính",
    description:
      "Khóa học trang bị kiến thức hệ thống thuế Việt Nam, thực hành khai báo và quyết toán thuế GTGT, TNCN, TNDN trên HTKK, Excel.",
    audience:
      "Kế toán viên, sinh viên kế toán, người phụ trách thuế tại doanh nghiệp và học viên muốn bổ sung nghiệp vụ kế toán thuế.",
    duration: "Theo chương trình thực hành",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "20/09/2025",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ kế toán thuế phù hợp với học viên cần nắm quy định thuế, thực hành kê khai, xử lý chứng từ và quyết toán các sắc thuế phổ biến trong doanh nghiệp.",
    outcomes: [
      "Nắm hệ thống thuế Việt Nam và trách nhiệm kê khai của doanh nghiệp.",
      "Thực hành khai báo thuế GTGT, TNCN, TNDN trên công cụ thông dụng.",
      "Biết xử lý chứng từ, sổ sách và tình huống thuế cơ bản.",
    ],
    curriculum: [
      "Tổng quan chính sách thuế và hồ sơ khai thuế doanh nghiệp.",
      "Thực hành thuế GTGT, TNCN, TNDN và quyết toán cuối kỳ.",
      "Ứng dụng HTKK, Excel và kiểm tra số liệu thuế.",
      "Tư vấn lộ trình học, tài liệu và hồ sơ chứng chỉ.",
    ],
  },
  {
    id: "tham-dinh-gia",
    slug: "chung-chi-tham-dinh-gia",
    title: "Chứng chỉ thẩm định giá",
    category: "Kế toán - Tài chính",
    description:
      "Khóa bồi dưỡng thẩm định giá tài sản và doanh nghiệp, phù hợp người học thuộc khối kinh tế, tài chính, kế toán, ngân hàng, quản trị và kỹ thuật.",
    audience:
      "Cử nhân kinh tế, tài chính, kế toán, ngân hàng, quản trị kinh doanh, xây dựng, kỹ thuật và người muốn làm lĩnh vực thẩm định giá.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ thẩm định giá giúp học viên tiếp cận phương pháp xác định giá trị tài sản, doanh nghiệp và ứng dụng kết quả thẩm định trong hoạt động tài chính, đầu tư, tín dụng hoặc quản trị.",
    outcomes: [
      "Hiểu nguyên tắc, quy trình và đạo đức nghề nghiệp thẩm định giá.",
      "Nắm các phương pháp thẩm định giá tài sản, bất động sản và doanh nghiệp.",
      "Biết chuẩn bị hồ sơ, báo cáo và vận dụng kết quả thẩm định.",
    ],
    curriculum: [
      "Cơ sở pháp lý và tiêu chuẩn thẩm định giá.",
      "Phương pháp thẩm định giá tài sản, bất động sản, doanh nghiệp.",
      "Lập báo cáo, phân tích số liệu và xử lý tình huống thực tế.",
      "Tư vấn điều kiện học, lịch khai giảng và hồ sơ chứng chỉ.",
    ],
  },
  {
    id: "chuyen-vien",
    slug: "chung-chi-chuyen-vien",
    title: "Chứng chỉ chuyên viên",
    category: "Hành chính - Văn thư",
    description:
      "Khóa quản lý nhà nước ngạch chuyên viên, trang bị kiến thức quản lý nhà nước, kỹ năng thực thi công vụ và chuẩn hóa ngạch chuyên viên.",
    audience:
      "Cán bộ, công chức, viên chức, nhân sự hành chính và người cần bổ sung chứng chỉ quản lý nhà nước ngạch chuyên viên.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ chuyên viên hỗ trợ học viên chuẩn hóa kiến thức quản lý nhà nước, kỹ năng tham mưu, soạn thảo, giao tiếp hành chính và thực thi công vụ.",
    outcomes: [
      "Nắm kiến thức nền tảng về quản lý nhà nước và hành chính công.",
      "Phát triển kỹ năng tham mưu, soạn thảo văn bản, giao tiếp và phối hợp công vụ.",
      "Hoàn thiện điều kiện chứng chỉ theo nhu cầu vị trí việc làm.",
    ],
    curriculum: [
      "Tổng quan quản lý nhà nước và tổ chức bộ máy hành chính.",
      "Kỹ năng tham mưu, văn bản, giao tiếp và xử lý tình huống công vụ.",
      "Đạo đức công vụ, cải cách hành chính và chuyển đổi số.",
      "Hướng dẫn hồ sơ, lịch học và thông tin chứng chỉ.",
    ],
  },
  {
    id: "van-thu-luu-tru",
    slug: "chung-chi-van-thu-luu-tru",
    title: "Chứng chỉ văn thư lưu trữ",
    category: "Hành chính - Văn thư",
    description:
      "Khóa bồi dưỡng nghiệp vụ văn thư lưu trữ, phù hợp học viên cần kỹ năng quản lý hồ sơ, văn bản, tài liệu và lưu trữ cơ quan.",
    audience:
      "Nhân sự hành chính, văn phòng, văn thư, lưu trữ, cán bộ trường học, cơ quan, doanh nghiệp và người cần bổ sung nghiệp vụ.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ văn thư lưu trữ giúp học viên nắm quy trình quản lý văn bản, hồ sơ, tài liệu, lập hồ sơ công việc và tổ chức lưu trữ trong môi trường cơ quan, trường học hoặc doanh nghiệp.",
    outcomes: [
      "Nắm nguyên tắc quản lý văn bản đi, đến, hồ sơ và tài liệu lưu trữ.",
      "Biết lập hồ sơ công việc, phân loại, bảo quản và khai thác tài liệu.",
      "Ứng dụng công nghệ thông tin trong quản lý văn thư, lưu trữ.",
    ],
    curriculum: [
      "Cơ sở nghiệp vụ văn thư, lưu trữ và quản lý tài liệu.",
      "Quy trình tiếp nhận, phát hành, lập hồ sơ và bảo quản văn bản.",
      "Ứng dụng phần mềm, số hóa và tra cứu tài liệu.",
      "Tư vấn hồ sơ học, lịch khai giảng và chứng chỉ.",
    ],
  },
  {
    id: "nghiep-vu-bao-chi",
    slug: "boi-duong-nghiep-vu-bao-chi",
    title: "Bồi dưỡng nghiệp vụ báo chí",
    category: "Khác",
    description:
      "Khóa học cung cấp kiến thức nền tảng báo chí hiện đại, phù hợp học viên đang đi làm hoặc cần học online linh hoạt.",
    audience:
      "Người làm truyền thông, cộng tác viên báo chí, nhân sự nội dung, cán bộ phụ trách truyền thông và học viên muốn bổ sung nghiệp vụ báo chí.",
    duration: "Theo chuyên đề bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "09/04/2025",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa bồi dưỡng nghiệp vụ báo chí giúp học viên tiếp cận kiến thức nền tảng về thu thập thông tin, viết tin bài, biên tập nội dung và đạo đức nghề nghiệp trong môi trường truyền thông hiện đại.",
    outcomes: [
      "Hiểu quy trình sản xuất tin, bài và tiêu chuẩn nội dung báo chí.",
      "Rèn kỹ năng khai thác thông tin, phỏng vấn, viết và biên tập.",
      "Nắm nguyên tắc đạo đức nghề nghiệp và xử lý thông tin có trách nhiệm.",
    ],
    curriculum: [
      "Tổng quan báo chí hiện đại và môi trường truyền thông số.",
      "Kỹ năng tìm đề tài, phỏng vấn, viết tin, bài và biên tập.",
      "Đạo đức báo chí, kiểm chứng thông tin và xử lý khủng hoảng.",
      "Tư vấn hình thức học và hồ sơ tham gia.",
    ],
  },
  {
    id: "huong-dan-vien-du-lich",
    slug: "chung-chi-huong-dan-vien-du-lich",
    title: "Chứng chỉ hướng dẫn viên du lịch nội địa, quốc tế",
    category: "Du lịch",
    description:
      "Khóa chứng chỉ hướng dẫn viên du lịch nội địa và quốc tế, hỗ trợ học viên bổ sung nghiệp vụ và điều kiện hành nghề.",
    audience:
      "Người muốn làm hướng dẫn viên du lịch, nhân sự lữ hành, sinh viên du lịch và người cần bổ sung chứng chỉ nghiệp vụ.",
    duration: "120 phút/buổi",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ hướng dẫn viên du lịch giúp học viên củng cố nghiệp vụ hướng dẫn, kiến thức tuyến điểm, kỹ năng thuyết minh, tổ chức đoàn và xử lý tình huống trong hoạt động du lịch.",
    outcomes: [
      "Nắm nghiệp vụ hướng dẫn du lịch nội địa, quốc tế và quy trình phục vụ đoàn.",
      "Rèn kỹ năng thuyết minh, giao tiếp, tổ chức lịch trình và xử lý tình huống.",
      "Được tư vấn điều kiện chứng chỉ và hồ sơ hành nghề phù hợp.",
    ],
    curriculum: [
      "Tổng quan ngành du lịch, tuyến điểm và pháp luật liên quan.",
      "Kỹ năng hướng dẫn, thuyết minh, giao tiếp và quản lý đoàn.",
      "Xử lý tình huống, chăm sóc khách và an toàn hành trình.",
      "Tư vấn hồ sơ, hình thức học và lịch khai giảng.",
    ],
  },
  {
    id: "an-toan-thuc-pham",
    slug: "chung-chi-an-toan-thuc-pham",
    title: "Chứng chỉ an toàn thực phẩm",
    category: "Y tế",
    description:
      "Khóa chứng chỉ an toàn thực phẩm tổ chức linh hoạt online/offline, phù hợp người cần chứng chỉ hợp pháp và lịch học linh hoạt.",
    audience:
      "Nhân sự cơ sở sản xuất, kinh doanh thực phẩm, bếp ăn, nhà hàng, trường học, doanh nghiệp và người phụ trách an toàn thực phẩm.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "04/10/2025",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ an toàn thực phẩm hỗ trợ học viên nắm các yêu cầu vệ sinh, kiểm soát nguy cơ, lấy mẫu, bảo quản và vận hành quy trình an toàn trong sản xuất, kinh doanh thực phẩm.",
    outcomes: [
      "Hiểu nguyên tắc vệ sinh, an toàn và kiểm soát nguy cơ thực phẩm.",
      "Nắm quy trình bảo quản, chế biến, vận chuyển và lưu mẫu phù hợp.",
      "Được tư vấn hồ sơ, lịch học và điều kiện chứng chỉ theo nhu cầu.",
    ],
    curriculum: [
      "Quy định pháp lý và nguyên tắc an toàn thực phẩm.",
      "Nhận diện nguy cơ, vệ sinh cơ sở, thiết bị và người lao động.",
      "Bảo quản, chế biến, lưu mẫu và xử lý sự cố an toàn thực phẩm.",
      "Hướng dẫn hồ sơ, hình thức học và chứng chỉ.",
    ],
  },
  {
    id: "ky-thuat-lay-mau-atp",
    slug: "ky-thuat-lay-mau-kiem-tra-chat-luong-an-toan-thuc-pham",
    title: "Kỹ thuật lấy mẫu kiểm tra chất lượng an toàn thực phẩm",
    category: "Y tế",
    description:
      "Khóa học tập trung kỹ thuật lấy mẫu kiểm tra chất lượng và an toàn thực phẩm, phù hợp nhân sự giám sát, kiểm nghiệm, quản lý chất lượng.",
    audience:
      "Nhân viên kiểm nghiệm, quản lý chất lượng, cán bộ an toàn thực phẩm, nhân sự cơ sở sản xuất, kinh doanh thực phẩm.",
    duration: "120 phút/buổi",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa kỹ thuật lấy mẫu an toàn thực phẩm giúp học viên hiểu nguyên tắc lấy mẫu, bảo quản mẫu, ghi nhận thông tin và phối hợp kiểm tra chất lượng trong quy trình giám sát thực phẩm.",
    outcomes: [
      "Hiểu nguyên tắc lấy mẫu và bảo quản mẫu kiểm tra chất lượng thực phẩm.",
      "Biết chuẩn bị dụng cụ, ghi nhãn, lưu thông tin và chuyển mẫu.",
      "Nắm quy trình phối hợp kiểm tra và báo cáo kết quả theo yêu cầu.",
    ],
    curriculum: [
      "Tổng quan kiểm tra chất lượng và an toàn thực phẩm.",
      "Kỹ thuật lấy mẫu, bảo quản, ghi nhãn và vận chuyển mẫu.",
      "Quản lý hồ sơ, biên bản và phối hợp kiểm nghiệm.",
      "Tư vấn hình thức học, lịch học và hồ sơ tham gia.",
    ],
  },
  {
    id: "a2-vstep",
    slug: "luyen-thi-chung-chi-tieng-anh-a2-vstep",
    title: "Luyện thi chứng chỉ tiếng Anh A2 VSTEP",
    category: "Tiếng Anh",
    description:
      "Luyện thi A2 VSTEP chuẩn định dạng 4 kỹ năng Nghe, Nói, Đọc, Viết; hệ thống hóa kiến thức trình độ A2 và kỹ thuật làm bài.",
    audience:
      "Học sinh, sinh viên, giáo viên, cán bộ, người đi làm cần chứng chỉ tiếng Anh A2 theo yêu cầu học tập hoặc công việc.",
    duration: "Theo lộ trình ôn luyện",
    format: "Online / Offline",
    schedule: "Lớp tối hoặc cuối tuần theo lịch tư vấn",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa luyện thi tiếng Anh A2 VSTEP giúp học viên củng cố kiến thức nền tảng, làm quen cấu trúc bài thi 4 kỹ năng và xây dựng chiến lược ôn tập phù hợp với thời gian cần chứng chỉ.",
    outcomes: [
      "Nắm yêu cầu trình độ A2 và cấu trúc bài thi VSTEP.",
      "Củng cố ngữ pháp, từ vựng và kỹ năng làm bài 4 kỹ năng.",
      "Có kế hoạch luyện đề và cải thiện lỗi thường gặp trước kỳ thi.",
    ],
    curriculum: [
      "Đánh giá đầu vào và xây dựng mục tiêu A2.",
      "Ôn ngữ pháp, từ vựng, nghe, đọc, viết, nói theo chủ điểm.",
      "Luyện đề, chữa lỗi và rèn kỹ thuật làm bài.",
      "Tư vấn lịch thi, hồ sơ và kế hoạch ôn tập cuối khóa.",
    ],
  },
  {
    id: "b2-vstep",
    slug: "luyen-thi-chung-chi-tieng-anh-b2-vstep",
    title: "Luyện thi chứng chỉ tiếng Anh B2 VSTEP",
    category: "Tiếng Anh",
    description:
      "Luyện thi B2 VSTEP, nâng cao kỹ năng nghe hiểu, đọc hiểu, xử lý thông tin trong ngữ cảnh học thuật và thực tiễn.",
    audience:
      "Học viên cần chứng chỉ B2 phục vụ học tập sau đại học, xét chuẩn đầu ra, hồ sơ nghề nghiệp hoặc yêu cầu vị trí công tác.",
    duration: "Theo lộ trình ôn luyện",
    format: "Online / Offline",
    schedule: "Lớp tối hoặc cuối tuần theo lịch tư vấn",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa luyện thi tiếng Anh B2 VSTEP tập trung nâng cao năng lực ngôn ngữ, chiến thuật xử lý đề và kỹ năng diễn đạt trong ngữ cảnh học thuật, công việc, đời sống.",
    outcomes: [
      "Hiểu tiêu chí trình độ B2 và yêu cầu của bài thi VSTEP.",
      "Nâng cao kỹ năng đọc, nghe, viết, nói với nội dung học thuật và thực tiễn.",
      "Rèn chiến thuật phân bổ thời gian, lập luận và xử lý thông tin trong bài thi.",
    ],
    curriculum: [
      "Đánh giá trình độ và lập lộ trình đạt mục tiêu B2.",
      "Ôn ngữ pháp nâng cao, từ vựng học thuật và kỹ năng đọc nghe.",
      "Luyện viết luận, nói theo chủ đề và phản hồi lỗi cá nhân.",
      "Thi thử, phân tích kết quả và tư vấn thời điểm đăng ký thi.",
    ],
  },
  {
    id: "nghiep-vu-su-pham-tieu-hoc",
    slug: "nghiep-vu-su-pham-tieu-hoc",
    title: "Chứng chỉ nghiệp vụ sư phạm tiểu học",
    category: "Giáo dục",
    description:
      "Khóa bồi dưỡng nghiệp vụ sư phạm tiểu học, phù hợp người có bằng cử nhân chuyên ngành phù hợp và muốn trở thành giáo viên tiểu học.",
    audience:
      "Người có bằng cử nhân phù hợp, giáo viên cần bổ sung nghiệp vụ, học viên định hướng giảng dạy bậc tiểu học.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ nghiệp vụ sư phạm tiểu học giúp học viên bổ sung kiến thức tâm lý, giáo dục học, phương pháp dạy học và kỹ năng tổ chức hoạt động cho học sinh tiểu học.",
    outcomes: [
      "Hiểu đặc điểm tâm lý, giáo dục học và phương pháp dạy học bậc tiểu học.",
      "Biết thiết kế hoạt động học tập, kiểm tra đánh giá và quản lý lớp.",
      "Được tư vấn hồ sơ, điều kiện tham gia và lộ trình chứng chỉ.",
    ],
    curriculum: [
      "Cơ sở giáo dục học, tâm lý học tiểu học.",
      "Phương pháp dạy học, thiết kế bài học và tổ chức hoạt động.",
      "Đánh giá học sinh, phối hợp phụ huynh và xử lý tình huống sư phạm.",
      "Tư vấn hình thức học, lịch học và hồ sơ chứng chỉ.",
    ],
  },
  {
    id: "truong-phong-giao-duc",
    slug: "chung-chi-boi-duong-truong-phong-giao-duc",
    title: "Bồi dưỡng trưởng phòng giáo dục",
    category: "Giáo dục",
    description:
      "Chương trình bồi dưỡng tiêu chuẩn chức danh lãnh đạo, quản lý trong ngành giáo dục; chứng chỉ có giá trị sử dụng theo quy định hiện hành.",
    audience:
      "Cán bộ quản lý giáo dục, chuyên viên phòng giáo dục, nhân sự quy hoạch chức danh lãnh đạo, quản lý trong ngành giáo dục.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "27/06/2025",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
    overview:
      "Khóa bồi dưỡng trưởng phòng giáo dục hỗ trợ học viên cập nhật năng lực quản lý, lãnh đạo, tham mưu, điều hành và tổ chức hoạt động giáo dục ở cấp phòng, đơn vị.",
    outcomes: [
      "Nắm tiêu chuẩn chức danh và yêu cầu quản lý trong ngành giáo dục.",
      "Phát triển kỹ năng tham mưu, điều hành, giám sát và đánh giá hoạt động giáo dục.",
      "Hoàn thiện thông tin chứng chỉ phục vụ nhu cầu nghề nghiệp.",
    ],
    curriculum: [
      "Quản lý nhà nước về giáo dục và chức năng phòng giáo dục.",
      "Kỹ năng lãnh đạo, tham mưu, quản trị chất lượng và nhân sự.",
      "Xử lý tình huống quản lý, truyền thông và cải tiến hoạt động giáo dục.",
      "Tư vấn điều kiện học, hồ sơ và lịch khai giảng.",
    ],
  },
  {
    id: "quan-ly-giao-duc-nghe-nghiep",
    slug: "chung-chi-quan-ly-giao-duc-nghe-nghiep",
    title: "Chứng chỉ quản lý giáo dục nghề nghiệp",
    category: "Giáo dục",
    description:
      "Khóa bồi dưỡng quản lý giáo dục nghề nghiệp, phù hợp cán bộ quản lý, giảng viên, nhân sự cơ sở giáo dục nghề nghiệp.",
    audience:
      "Cán bộ quản lý, giáo viên, giảng viên, nhân sự tuyển sinh, đào tạo tại cơ sở giáo dục nghề nghiệp.",
    duration: "Theo chương trình bồi dưỡng",
    format: "Online / Offline",
    schedule: "Tư vấn theo lớp khai giảng",
    updateDate: "22/08/2025",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    overview:
      "Chứng chỉ quản lý giáo dục nghề nghiệp giúp học viên cập nhật kiến thức quản trị chương trình, tổ chức đào tạo, đảm bảo chất lượng và quản lý người học trong môi trường giáo dục nghề nghiệp.",
    outcomes: [
      "Hiểu hệ thống giáo dục nghề nghiệp và yêu cầu quản lý đào tạo.",
      "Nắm kỹ năng lập kế hoạch, tổ chức lớp, đánh giá và đảm bảo chất lượng.",
      "Biết vận dụng kiến thức quản lý vào hoạt động tại đơn vị.",
    ],
    curriculum: [
      "Tổng quan chính sách và quản lý giáo dục nghề nghiệp.",
      "Quản trị chương trình, đào tạo, tuyển sinh và người học.",
      "Đảm bảo chất lượng, kiểm tra đánh giá và hợp tác doanh nghiệp.",
      "Tư vấn hồ sơ, lịch học và chứng chỉ.",
    ],
  },
];

const courseDetailsById = {
  1: {
    slug: "luyen-thi-chung-chi-tieng-anh",
    overview:
      "Khóa luyện thi chứng chỉ tiếng Anh được thiết kế cho học viên cần hệ thống lại nền tảng, rèn kỹ năng theo định dạng bài thi và có lộ trình ôn luyện rõ ràng. Edupartner tư vấn đầu vào để xác định mục tiêu, thời gian học và chứng chỉ phù hợp với yêu cầu học tập hoặc công việc.",
    outcomes: [
      "Nắm cấu trúc đề thi và chiến lược làm bài theo từng kỹ năng.",
      "Củng cố ngữ pháp, từ vựng và kỹ năng đọc, nghe, viết, nói.",
      "Có kế hoạch ôn tập cá nhân hóa trước kỳ thi chứng chỉ.",
    ],
    curriculum: [
      "Đánh giá năng lực đầu vào và xác định mục tiêu chứng chỉ.",
      "Ôn tập kiến thức nền tảng theo nhóm kỹ năng.",
      "Luyện đề, chữa lỗi và tối ưu chiến thuật làm bài.",
      "Theo dõi tiến độ và tư vấn thời điểm đăng ký thi phù hợp.",
    ],
  },
  2: {
    slug: "luyen-thi-vept-pearson",
    overview:
      "Chương trình luyện thi VEPT Pearson tập trung vào các kỹ năng cần thiết cho bài thi Versant English Placement Test. Học viên được làm quen định dạng câu hỏi, luyện phản xạ ngôn ngữ và cải thiện độ chính xác khi trả lời.",
    outcomes: [
      "Hiểu cấu trúc và yêu cầu của bài thi VEPT Pearson.",
      "Tăng phản xạ nghe, nói, đọc và xử lý câu hỏi trong thời gian giới hạn.",
      "Có bộ kỹ thuật ôn tập trọng tâm cho 10 buổi học.",
    ],
    curriculum: [
      "Giới thiệu bài thi và tiêu chí đánh giá.",
      "Luyện phát âm, nghe hiểu và phản xạ trả lời.",
      "Thực hành dạng câu hỏi thường gặp trong VEPT.",
      "Thi thử, phân tích kết quả và điều chỉnh chiến lược.",
    ],
  },
  3: {
    slug: "tieng-anh-giao-tiep-nen-tang",
    overview:
      "Khóa tiếng Anh giao tiếp nền tảng phù hợp với người mất gốc hoặc muốn tự tin hơn trong các tình huống giao tiếp cơ bản. Nội dung học ưu tiên phát âm, mẫu câu thực tế và khả năng phản xạ hằng ngày.",
    outcomes: [
      "Tự tin sử dụng các mẫu câu giao tiếp thông dụng.",
      "Cải thiện phát âm, nghe hiểu và vốn từ nền tảng.",
      "Xây dựng thói quen luyện nói đều đặn sau khóa học.",
    ],
    curriculum: [
      "Kiểm tra nền tảng và xác định tình huống giao tiếp cần ưu tiên.",
      "Luyện phát âm, nhấn trọng âm và ngữ điệu cơ bản.",
      "Thực hành hội thoại trong học tập, công việc và đời sống.",
      "Ôn tập theo chủ đề và phản hồi lỗi cá nhân.",
    ],
  },
  4: {
    slug: "tin-hoc-van-phong",
    overview:
      "Khóa tin học văn phòng giúp học viên sử dụng máy tính và các phần mềm văn phòng hiệu quả hơn trong học tập, hành chính và công việc. Chương trình ưu tiên thao tác thực hành và xử lý tình huống thường gặp.",
    outcomes: [
      "Sử dụng thành thạo các thao tác văn phòng thiết yếu.",
      "Tạo, định dạng và quản lý tài liệu, bảng tính, trình chiếu.",
      "Ứng dụng công nghệ thông tin vào công việc hằng ngày.",
    ],
    curriculum: [
      "Kỹ năng máy tính, quản lý tệp và làm việc an toàn.",
      "Soạn thảo văn bản, định dạng tài liệu và biểu mẫu.",
      "Bảng tính, công thức cơ bản và xử lý dữ liệu.",
      "Trình chiếu, lưu trữ và chia sẻ tài liệu.",
    ],
  },
  5: {
    slug: "chung-chi-ung-dung-cong-nghe-thong-tin",
    overview:
      "Chương trình chứng chỉ ứng dụng công nghệ thông tin hỗ trợ học viên hoàn thiện kiến thức và kỹ năng theo yêu cầu học tập hoặc công việc. Edupartner tư vấn lộ trình phù hợp với nền tảng hiện tại của từng học viên.",
    outcomes: [
      "Nắm các nhóm kỹ năng công nghệ thông tin cần thiết.",
      "Chuẩn bị tốt hơn cho yêu cầu chứng chỉ tin học.",
      "Biết cách ôn tập và hoàn thiện hồ sơ theo hướng dẫn.",
    ],
    curriculum: [
      "Tư vấn yêu cầu chứng chỉ và kiểm tra năng lực hiện tại.",
      "Ôn kiến thức máy tính, mạng, bảo mật và phần mềm văn phòng.",
      "Thực hành bài tập theo nhóm kỹ năng ứng dụng.",
      "Hướng dẫn hoàn thiện thông tin đăng ký và lộ trình tiếp theo.",
    ],
  },
  6: {
    slug: "chuan-chuc-danh-nghe-nghiep-giao-vien",
    overview:
      "Khóa chuẩn chức danh nghề nghiệp giáo viên dành cho giáo viên cần bồi dưỡng, cập nhật kiến thức và hoàn thiện điều kiện theo tiêu chuẩn chức danh nghề nghiệp. Edupartner đồng hành từ tư vấn điều kiện đến định hướng hồ sơ.",
    outcomes: [
      "Hiểu mục tiêu và yêu cầu của chương trình bồi dưỡng.",
      "Bổ sung kiến thức nghề nghiệp, quản lý lớp học và phát triển chuyên môn.",
      "Được tư vấn thông tin cần chuẩn bị trong quá trình học.",
    ],
    curriculum: [
      "Tư vấn nhóm đối tượng và điều kiện tham gia.",
      "Cập nhật kiến thức nghề nghiệp và quy định liên quan.",
      "Trao đổi tình huống thực tiễn trong môi trường giáo dục.",
      "Hướng dẫn theo dõi tiến độ và hoàn thiện thông tin sau khóa học.",
    ],
  },
  7: {
    slug: "chuan-chuc-danh-nghe-nghiep-nganh-y-te",
    overview:
      "Chương trình chuẩn chức danh nghề nghiệp ngành y tế hỗ trợ cán bộ, nhân sự ngành y bổ sung chứng chỉ theo yêu cầu vị trí công tác. Nội dung tư vấn tập trung vào đúng đối tượng, đúng lộ trình và thời gian phù hợp.",
    outcomes: [
      "Xác định chương trình bồi dưỡng phù hợp vị trí công tác.",
      "Nắm các nhóm kiến thức nghề nghiệp cần hoàn thiện.",
      "Được hỗ trợ thông tin học tập và hồ sơ liên quan.",
    ],
    curriculum: [
      "Tư vấn nhu cầu, vị trí công tác và điều kiện tham gia.",
      "Bồi dưỡng kiến thức nghề nghiệp và kỹ năng chuyên môn bổ trợ.",
      "Cập nhật yêu cầu về chứng chỉ theo từng nhóm đối tượng.",
      "Theo dõi tiến độ và hướng dẫn các bước hoàn thiện sau học.",
    ],
  },
  8: {
    slug: "chung-chi-nghiep-vu-su-pham-thcs-thpt",
    overview:
      "Khóa chứng chỉ nghiệp vụ sư phạm THCS, THPT phù hợp với người có định hướng giảng dạy và cần bổ sung nghiệp vụ sư phạm. Edupartner tư vấn chương trình, hình thức học và các thông tin cần chuẩn bị.",
    outcomes: [
      "Hiểu nền tảng nghiệp vụ sư phạm cho cấp THCS, THPT.",
      "Bổ sung kỹ năng thiết kế bài dạy, tổ chức lớp học và đánh giá học sinh.",
      "Có định hướng rõ hơn cho lộ trình giảng dạy.",
    ],
    curriculum: [
      "Tư vấn đối tượng phù hợp và điều kiện tham gia.",
      "Kiến thức giáo dục học, tâm lý học và phương pháp dạy học.",
      "Thực hành thiết kế hoạt động dạy học, kiểm tra, đánh giá.",
      "Hướng dẫn hoàn thiện thông tin học tập và chứng chỉ.",
    ],
  },
  9: {
    slug: "cac-chuong-trinh-dao-tao-ngan-han-khac",
    overview:
      "Các chương trình đào tạo ngắn hạn khác được Edupartner cập nhật theo nhu cầu chứng chỉ chuyên môn, nghiệp vụ của học viên. Đội ngũ tư vấn sẽ rà soát mục tiêu và đề xuất lựa chọn phù hợp nhất tại thời điểm đăng ký.",
    outcomes: [
      "Xác định đúng nhóm chứng chỉ hoặc khóa bồi dưỡng cần tham gia.",
      "Tiết kiệm thời gian tìm kiếm thông tin từ nhiều nguồn khác nhau.",
      "Có kế hoạch học tập linh hoạt theo điều kiện cá nhân.",
    ],
    curriculum: [
      "Tiếp nhận nhu cầu học tập và yêu cầu chứng chỉ.",
      "Đối chiếu chương trình hiện có với mục tiêu của học viên.",
      "Tư vấn thời lượng, hình thức học và hồ sơ cần chuẩn bị.",
      "Cập nhật chương trình mới khi có thông tin phù hợp.",
    ],
  },
  10: {
    slug: "chuong-trinh-trung-cap",
    overview:
      "Tư vấn chương trình Trung cấp dành cho người học muốn lấy bằng, chuyển hướng nghề nghiệp hoặc nâng cao trình độ chuyên môn. Edupartner hỗ trợ lựa chọn ngành, hệ đào tạo và lộ trình theo điều kiện cá nhân.",
    outcomes: [
      "Hiểu sự khác nhau giữa các ngành và hệ đào tạo Trung cấp.",
      "Chọn được lộ trình phù hợp mục tiêu nghề nghiệp.",
      "Được hướng dẫn thông tin hồ sơ và kế hoạch học tập.",
    ],
    curriculum: [
      "Tư vấn mục tiêu học tập, ngành học và điều kiện đầu vào.",
      "Giới thiệu hệ đào tạo, thời gian và hình thức phù hợp.",
      "Định hướng kế hoạch học, thực hành và hoàn thiện bằng cấp.",
      "Hỗ trợ thông tin đăng ký theo chương trình được chọn.",
    ],
  },
  11: {
    slug: "chuong-trinh-cao-dang",
    overview:
      "Tư vấn chương trình Cao đẳng phù hợp với học viên muốn nâng cao trình độ, mở rộng cơ hội nghề nghiệp và có lộ trình học thực tiễn. Edupartner đồng hành trong quá trình chọn ngành, hệ học và thông tin đăng ký.",
    outcomes: [
      "Nắm các lựa chọn ngành học và hệ đào tạo Cao đẳng.",
      "Xây dựng lộ trình học phù hợp với thời gian và mục tiêu cá nhân.",
      "Được tư vấn cơ hội liên thông, văn bằng hoặc định hướng nghề nghiệp.",
    ],
    curriculum: [
      "Phân tích nhu cầu học tập và mục tiêu nghề nghiệp.",
      "Tư vấn ngành học, thời lượng và hình thức đào tạo.",
      "Lập kế hoạch học tập dài hạn và các mốc cần lưu ý.",
      "Hướng dẫn hồ sơ, đăng ký và bước chuẩn bị ban đầu.",
    ],
  },
  12: {
    slug: "chuong-trinh-dai-hoc",
    overview:
      "Tư vấn chương trình Đại học, liên thông hoặc văn bằng cho người học cần nâng cao trình độ và mở rộng cơ hội phát triển nghề nghiệp. Edupartner giúp học viên xác định lựa chọn phù hợp với nền tảng hiện tại.",
    outcomes: [
      "Hiểu các hướng học Đại học, liên thông và văn bằng phù hợp.",
      "Chọn được ngành học, hệ đào tạo và kế hoạch học rõ ràng.",
      "Được hỗ trợ thông tin hồ sơ, thời gian và điều kiện đăng ký.",
    ],
    curriculum: [
      "Rà soát bằng cấp, kinh nghiệm và mục tiêu học tập.",
      "Tư vấn ngành học, hệ đào tạo và phương án liên thông nếu phù hợp.",
      "Xác định thời lượng, hình thức học và kế hoạch hoàn thành.",
      "Hướng dẫn chuẩn bị hồ sơ và theo dõi thông tin đăng ký.",
    ],
  },
};

export const courses = [...baseCourses, ...supplementalCourses].map((course) => {
  const detail = courseDetailsById[course.id] || {};

  return {
    ...course,
    ...detail,
    overview:
      detail.overview ||
      course.overview ||
      `${course.description} Edupartner tư vấn đối tượng phù hợp, hình thức học, lịch khai giảng và hồ sơ cần chuẩn bị để học viên lựa chọn lộ trình hiệu quả.`,
    outcomes: detail.outcomes || course.outcomes || [
      "Hiểu rõ mục tiêu, yêu cầu và đối tượng phù hợp của chương trình.",
      "Nắm các nội dung trọng tâm để áp dụng vào học tập hoặc công việc.",
      "Được tư vấn lộ trình học, hồ sơ và hình thức học phù hợp.",
    ],
    curriculum: detail.curriculum || course.curriculum || [
      "Tiếp nhận nhu cầu học tập và kiểm tra điều kiện hiện tại.",
      "Tư vấn chương trình, thời lượng, hình thức học và lịch khai giảng.",
      "Hướng dẫn chuẩn bị thông tin, hồ sơ và tài liệu học tập.",
      "Theo dõi quá trình học và hỗ trợ hoàn thiện chứng chỉ hoặc hồ sơ.",
    ],
    consultationSteps: [
      "Gửi thông tin tư vấn cho Edupartner.",
      "Trao đổi mục tiêu học tập, thời gian và điều kiện cá nhân.",
      "Nhận đề xuất lộ trình và hình thức học phù hợp.",
      "Được hướng dẫn đăng ký và theo dõi quá trình học.",
    ],
  };
});
