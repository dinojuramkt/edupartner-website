import { useEffect, useMemo, useState } from "react";
import { courses as defaultCourses } from "../data/courses.js";
import { posts as defaultPosts } from "../data/posts.js";
import { getCustomCourses, getCustomPosts, UPDATE_EVENT } from "../utils/contentStorage.js";
import { createCoursePosts } from "../utils/coursePostFactory.js";

const defaultConsultationSteps = [
  "Gửi thông tin tư vấn cho Edupartner.",
  "Trao đổi mục tiêu học tập, thời gian và điều kiện cá nhân.",
  "Nhận đề xuất lộ trình và hình thức học phù hợp.",
  "Được hướng dẫn đăng ký và theo dõi quá trình học.",
];

function enrichCourse(course) {
  return {
    ...course,
    overview:
      course.overview ||
      `${course.description} Edupartner sẽ tư vấn lộ trình học, hình thức học và hồ sơ cần chuẩn bị dựa trên nhu cầu cá nhân của học viên.`,
    outcomes: course.outcomes?.length
      ? course.outcomes
      : [
          "Hiểu rõ mục tiêu, yêu cầu và đối tượng phù hợp của chương trình.",
          "Nắm các nội dung trọng tâm để áp dụng vào học tập hoặc công việc.",
          "Được tư vấn lộ trình học, hồ sơ và hình thức học phù hợp.",
        ],
    curriculum: course.curriculum?.length
      ? course.curriculum
      : [
          "Tiếp nhận nhu cầu học tập và kiểm tra điều kiện hiện tại.",
          "Tư vấn chương trình, thời lượng, hình thức học và lịch khai giảng.",
          "Hướng dẫn chuẩn bị thông tin, hồ sơ và tài liệu học tập.",
          "Theo dõi quá trình học và hỗ trợ hoàn thiện chứng chỉ hoặc hồ sơ.",
        ],
    consultationSteps: course.consultationSteps?.length
      ? course.consultationSteps
      : defaultConsultationSteps,
  };
}

function enrichPost(post) {
  return {
    ...post,
    content: post.content?.length
      ? post.content
      : [
          {
            heading: "Nội dung chính",
            paragraphs: [post.description],
          },
        ],
  };
}

export function useContent() {
  const [customCourses, setCustomCourses] = useState(() => getCustomCourses());
  const [customPosts, setCustomPosts] = useState(() => getCustomPosts());

  useEffect(() => {
    function reload() {
      setCustomCourses(getCustomCourses());
      setCustomPosts(getCustomPosts());
    }

    window.addEventListener("storage", reload);
    window.addEventListener(UPDATE_EVENT, reload);

    return () => {
      window.removeEventListener("storage", reload);
      window.removeEventListener(UPDATE_EVENT, reload);
    };
  }, []);

  const courses = useMemo(
    () => [...customCourses.map(enrichCourse), ...defaultCourses.map(enrichCourse)],
    [customCourses],
  );

  const posts = useMemo(
    () => [
      ...customPosts.map(enrichPost),
      ...createCoursePosts(courses).map(enrichPost),
      ...defaultPosts.map(enrichPost),
    ],
    [courses, customPosts],
  );

  return {
    courses,
    posts,
    customCourses,
    customPosts,
  };
}
