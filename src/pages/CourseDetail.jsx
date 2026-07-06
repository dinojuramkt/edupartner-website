import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  BookOpenCheck,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  MonitorCheck,
  Users,
} from "lucide-react";
import CourseCard from "../components/CourseCard.jsx";
import CTASection from "../components/CTASection.jsx";
import SEO from "../components/SEO.jsx";
import { useContent } from "../hooks/useContent.js";

export default function CourseDetail() {
  const { slug } = useParams();
  const { courses } = useContent();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <>
        <SEO
          title="Không tìm thấy khóa học | Edupartner"
          description="Khóa học bạn đang tìm không tồn tại hoặc đã được cập nhật."
        />
        <section className="section-pad bg-[#F8FCFF]">
          <div className="container-page text-center">
            <h1 className="section-title">Không tìm thấy khóa học</h1>
            <p className="section-lead mx-auto">
              Chương trình có thể đã được cập nhật. Bạn có thể quay lại danh sách khóa học để xem các lựa chọn hiện có.
            </p>
            <Link to="/khoa-hoc" className="btn-primary mt-8">
              Quay lại khóa học
            </Link>
          </div>
        </section>
      </>
    );
  }

  const relatedCourses = courses
    .filter((item) => item.category === course.category && item.id !== course.id)
    .slice(0, 3);

  return (
    <>
      <SEO
        title={`${course.title} | Edupartner`}
        description={`${course.description} Đăng ký tư vấn chương trình ${course.category} tại Edupartner.`}
      />
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover" src={course.image} alt="" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-skybrand/40" />
        </div>
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <Link
            to="/khoa-hoc"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Quay lại khóa học
          </Link>
          <div className="mt-8 max-w-4xl">
            <p className="mb-4 inline-flex rounded-full bg-leaf px-4 py-2 text-sm font-bold text-white">
              {course.category}
            </p>
            <h1 className="text-4xl font-black tracking-normal sm:text-5xl">{course.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              {course.overview}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/lien-he" className="btn-primary gap-2">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
                Đăng ký tư vấn
              </Link>
              <Link to="/khoa-hoc" className="btn-secondary border-white bg-white/10 text-white hover:border-leaf">
                Xem chương trình khác
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div className="rounded-lg border border-slate-100 bg-[#F8FCFF] p-5">
                <Users className="h-7 w-7 text-skybrand" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-navy">Đối tượng phù hợp</p>
                <p className="mt-2 text-sm leading-6 text-muted">{course.audience}</p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-[#F8FCFF] p-5">
                <Clock className="h-7 w-7 text-skybrand" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-navy">Thời lượng</p>
                <p className="mt-2 text-sm leading-6 text-muted">{course.duration}</p>
              </div>
              <div className="rounded-lg border border-slate-100 bg-[#F8FCFF] p-5">
                <MonitorCheck className="h-7 w-7 text-skybrand" aria-hidden="true" />
                <p className="mt-3 text-sm font-bold text-navy">Hình thức học</p>
                <p className="mt-2 text-sm leading-6 text-muted">{course.format}</p>
              </div>
            </div>

            {(course.schedule || course.updateDate || course.students) && (
              <section className="mt-8 rounded-lg border border-slate-100 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-bold text-navy">Thông tin chương trình</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {course.schedule && (
                    <div className="flex gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-navy">Lịch học dự kiến</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{course.schedule}</p>
                      </div>
                    </div>
                  )}
                  {course.updateDate && (
                    <div className="flex gap-3">
                      <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-navy">Ngày cập nhật</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{course.updateDate}</p>
                      </div>
                    </div>
                  )}
                  {course.students && (
                    <div className="flex gap-3">
                      <Users className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-bold text-navy">Sĩ số dự kiến</p>
                        <p className="mt-1 text-sm leading-6 text-muted">{course.students} học viên/lớp</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            )}

            <section className="mt-12">
              <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Mục tiêu chương trình</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">Sau khóa học, học viên có thể</h2>
              <div className="mt-6 grid gap-4">
                {course.outcomes.map((outcome) => (
                  <div className="flex gap-3 rounded-lg border border-slate-100 p-5" key={outcome}>
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden="true" />
                    <p className="text-sm leading-7 text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <p className="text-sm font-bold uppercase tracking-wide text-leaf">Nội dung chính</p>
              <h2 className="mt-3 text-3xl font-bold text-navy">Lộ trình học tập và tư vấn</h2>
              <div className="mt-6 grid gap-4">
                {course.curriculum.map((item, index) => (
                  <div className="flex gap-4 rounded-lg bg-[#F4FBF4] p-5" key={item}>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-leaf text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm font-semibold leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-lg border border-slate-100 bg-white p-6 shadow-soft lg:sticky lg:top-24">
            <BookOpenCheck className="h-10 w-10 text-skybrand" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold text-navy">Quy trình tư vấn</h2>
            <div className="mt-5 grid gap-4">
              {course.consultationSteps.map((step, index) => (
                <div className="flex gap-3" key={step}>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-skybrand/10 text-xs font-black text-skybrand">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-muted">{step}</p>
                </div>
              ))}
            </div>
            <Link to="/lien-he" className="btn-primary mt-6 w-full">
              Nhận tư vấn miễn phí
            </Link>
          </aside>
        </div>
      </section>

      {relatedCourses.length > 0 && (
        <section className="section-pad bg-[#F8FCFF]">
          <div className="container-page">
            <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Có thể bạn quan tâm</p>
            <h2 className="section-title mt-3">Chương trình cùng danh mục</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {relatedCourses.map((item) => (
                <CourseCard key={item.id} course={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Muốn biết khóa học này có phù hợp với bạn không?"
        description="Edupartner sẽ tư vấn dựa trên mục tiêu học tập, thời gian, hồ sơ và điều kiện cá nhân của bạn."
        buttonLabel="Đăng ký tư vấn ngay"
      />
    </>
  );
}
