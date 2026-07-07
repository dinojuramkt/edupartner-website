const DEFAULT_COURSE_POST_DATE = "06/07/2026";

function sentence(value) {
  if (!value) return "";
  const trimmed = String(value).trim();
  if (!trimmed) return "";
  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

function listOrFallback(items, fallback) {
  return Array.isArray(items) && items.length ? items.map(sentence).filter(Boolean) : fallback;
}

export function createCoursePost(course) {
  const title = `Tìm hiểu ${course.title}: đối tượng, lộ trình và nội dung chương trình`;
  const scheduleText = course.schedule ? `Lịch học: ${course.schedule}.` : "Lịch học được Edupartner tư vấn theo từng đợt khai giảng.";
  const audienceText = course.audience
    ? `Chương trình phù hợp với ${course.audience.charAt(0).toLowerCase()}${course.audience.slice(1)}`
    : "Chương trình phù hợp với học viên cần được tư vấn lộ trình học rõ ràng theo mục tiêu cá nhân.";

  return {
    id: `course-post-${course.slug}`,
    slug: `khoa-hoc-${course.slug}`,
    title,
    category: course.category,
    date: course.updateDate || DEFAULT_COURSE_POST_DATE,
    image: course.image,
    courseSlug: course.slug,
    coursePost: true,
    description: `Bài viết giúp học viên hiểu rõ ${course.title}, đối tượng phù hợp, nội dung học và cách Edupartner tư vấn lộ trình đăng ký.`,
    content: [
      {
        heading: "Tổng quan chương trình",
        paragraphs: [
          sentence(course.overview || course.description),
          sentence(audienceText),
        ].filter(Boolean),
      },
      {
        heading: "Kết quả học viên hướng tới",
        paragraphs: listOrFallback(course.outcomes, [
          `Hiểu rõ mục tiêu và yêu cầu chính của chương trình ${course.title}.`,
          "Có định hướng học tập phù hợp với nhu cầu cá nhân, công việc hoặc hồ sơ chứng chỉ.",
          "Được tư vấn thông tin cần chuẩn bị trước khi tham gia chương trình.",
        ]),
      },
      {
        heading: "Nội dung và lộ trình học",
        paragraphs: listOrFallback(course.curriculum, [
          "Tiếp nhận nhu cầu học tập và kiểm tra điều kiện hiện tại.",
          "Tư vấn chương trình, thời lượng, hình thức học và lịch khai giảng.",
          "Hướng dẫn chuẩn bị thông tin, hồ sơ và tài liệu học tập.",
          "Theo dõi quá trình học và hỗ trợ hoàn thiện chứng chỉ hoặc hồ sơ.",
        ]),
      },
      {
        heading: "Thông tin học tập và tư vấn",
        paragraphs: [
          `Thời lượng: ${course.duration || "Theo lộ trình tư vấn"}.`,
          `Hình thức học: ${course.format || "Online / Offline"}.`,
          scheduleText,
          "Edupartner hỗ trợ học viên rà soát nhu cầu, lựa chọn chương trình phù hợp và chuẩn bị các bước đăng ký cần thiết.",
        ],
      },
    ],
  };
}

export function createCoursePosts(courses) {
  return courses
    .filter((course) => course?.slug && course?.title)
    .map(createCoursePost);
}
