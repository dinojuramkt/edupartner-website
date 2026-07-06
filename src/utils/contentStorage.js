const COURSE_KEY = "edupartner_custom_courses";
const POST_KEY = "edupartner_custom_posts";
const UPDATE_EVENT = "edupartner-content-updated";

function readList(key) {
  if (typeof window === "undefined") return [];

  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

function writeList(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new CustomEvent(UPDATE_EVENT));
}

export function createSlug(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function uniqueSlug(text, existingItems) {
  const base = createSlug(text) || "noi-dung-moi";
  const existingSlugs = new Set(existingItems.map((item) => item.slug));
  if (!existingSlugs.has(base)) return base;

  let index = 2;
  while (existingSlugs.has(`${base}-${index}`)) {
    index += 1;
  }

  return `${base}-${index}`;
}

export function splitLines(value) {
  return value
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getCustomCourses() {
  return readList(COURSE_KEY);
}

export function getCustomPosts() {
  return readList(POST_KEY);
}

export function addCustomCourse(course, existingCourses) {
  const courses = getCustomCourses();
  const newCourse = {
    ...course,
    id: `custom-course-${Date.now()}`,
    slug: uniqueSlug(course.title, [...existingCourses, ...courses]),
    custom: true,
  };

  writeList(COURSE_KEY, [newCourse, ...courses]);
  return newCourse;
}

export function addCustomPost(post, existingPosts) {
  const posts = getCustomPosts();
  const newPost = {
    ...post,
    id: `custom-post-${Date.now()}`,
    slug: uniqueSlug(post.title, [...existingPosts, ...posts]),
    custom: true,
  };

  writeList(POST_KEY, [newPost, ...posts]);
  return newPost;
}

export function deleteCustomCourse(id) {
  writeList(
    COURSE_KEY,
    getCustomCourses().filter((course) => course.id !== id),
  );
}

export function deleteCustomPost(id) {
  writeList(
    POST_KEY,
    getCustomPosts().filter((post) => post.id !== id),
  );
}

export { UPDATE_EVENT };
