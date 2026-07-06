import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import CategoryTabs from "../components/CategoryTabs.jsx";
import CourseCard from "../components/CourseCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";
import { categories } from "../data/courses.js";
import { useContent } from "../hooks/useContent.js";

export default function Courses() {
  const { courses } = useContent();
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCourses = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesCategory = activeCategory === "Tất cả" || course.category === activeCategory;
      const searchableText = [
        course.title,
        course.category,
        course.description,
        course.audience,
        course.duration,
        course.format,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedSearch || searchableText.includes(normalizedSearch));
    });
  }, [activeCategory, searchTerm]);

  return (
    <>
      <SEO
        title="Khóa học Edupartner | Tiếng Anh, Tin học, Đào tạo ngắn hạn và dài hạn"
        description="Khám phá các khóa học tiếng Anh, tin học, chuẩn chức danh nghề nghiệp, nghiệp vụ sư phạm, Trung cấp, Cao đẳng và Đại học tại Edupartner."
      />
      <Hero
        compact
        eyebrow="Khóa học Edupartner"
        title="Khóa học & chương trình đào tạo tại Edupartner"
        description="Khám phá các chương trình tiếng Anh, tin học, đào tạo ngắn hạn và đào tạo dài hạn được Edupartner tư vấn, định hướng và đồng hành cùng học viên."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Danh mục khóa học</p>
              <h1 className="section-title mt-3">Chọn chương trình theo nhu cầu</h1>
              <p className="section-lead">
                Bộ lọc giúp bạn nhanh chóng xem chương trình tiếng Anh, khóa học tin học, đào tạo ngắn hạn hoặc đào tạo dài hạn.
              </p>
            </div>
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
          <div className="mt-8 flex flex-col gap-3 rounded-lg border border-slate-100 bg-[#F8FCFF] p-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-skybrand" aria-hidden="true" />
              <input
                className="min-h-12 w-full rounded-full border border-slate-200 bg-white pl-12 pr-4 text-sm text-ink placeholder:text-slate-400 focus:border-skybrand"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Tìm kiếm theo tên khóa học, nhóm ngành hoặc nhu cầu học..."
                aria-label="Tìm kiếm khóa học"
              />
            </div>
            <p className="text-sm font-semibold text-muted">
              {filteredCourses.length} chương trình phù hợp
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          {filteredCourses.length === 0 && (
            <div className="mt-10 rounded-lg border border-slate-100 bg-white p-8 text-center shadow-soft">
              <h2 className="text-2xl font-bold text-navy">Chưa tìm thấy chương trình phù hợp</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">
                Bạn có thể thử từ khóa khác hoặc để lại thông tin để Edupartner tư vấn chương trình phù hợp với nhu cầu.
              </p>
            </div>
          )}
        </div>
      </section>
      <CTASection
        title="Chưa biết nên chọn chương trình nào?"
        description="Edupartner sẽ tư vấn dựa trên nhu cầu học tập, mục tiêu nghề nghiệp và điều kiện cá nhân của bạn."
        buttonLabel="Nhận tư vấn miễn phí"
      />
    </>
  );
}
