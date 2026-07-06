import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, FileCheck2, HeartHandshake, Layers3, Quote, Route, Star, Target, UsersRound } from "lucide-react";
import BlogCard from "../components/BlogCard.jsx";
import CourseCard from "../components/CourseCard.jsx";
import CTASection from "../components/CTASection.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import SEO from "../components/SEO.jsx";
import { courseGroups } from "../data/courses.js";
import { useContent } from "../hooks/useContent.js";

const aboutPoints = [
  "Tư vấn lộ trình học phù hợp",
  "Chương trình đa dạng, thực tiễn",
  "Đồng hành trong quá trình học tập và hoàn thiện hồ sơ",
];

const reasons = [
  {
    title: "Chương trình đa dạng",
    description:
      "Cung cấp nhiều lựa chọn học tập từ tiếng Anh, tin học đến đào tạo ngắn hạn và dài hạn.",
    icon: Layers3,
  },
  {
    title: "Tư vấn đúng nhu cầu",
    description:
      "Hỗ trợ học viên chọn chương trình phù hợp với mục tiêu, trình độ và điều kiện cá nhân.",
    icon: Target,
  },
  {
    title: "Lộ trình rõ ràng",
    description:
      "Định hướng từng bước từ tư vấn, đăng ký, học tập đến hoàn thiện chứng chỉ hoặc hồ sơ.",
    icon: Route,
  },
  {
    title: "Đồng hành tận tâm",
    description:
      "Luôn hỗ trợ học viên trong quá trình học tập, ôn luyện và xử lý thông tin cần thiết.",
    icon: HeartHandshake,
  },
];

const process = [
  {
    title: "Tiếp nhận nhu cầu",
    description: "Học viên gửi thông tin, mục tiêu học tập, chứng chỉ cần hoàn thiện hoặc định hướng nghề nghiệp mong muốn.",
    meta: "Ngày 1",
    icon: HeartHandshake,
  },
  {
    title: "Phân tích lộ trình",
    description: "Edupartner rà soát nền tảng hiện tại, thời gian học, điều kiện tham gia và mức độ ưu tiên của từng mục tiêu.",
    meta: "Tư vấn 1:1",
    icon: Target,
  },
  {
    title: "Thiết kế kế hoạch",
    description: "Đề xuất chương trình, hình thức học, tài liệu cần chuẩn bị và các mốc quan trọng trong quá trình học.",
    meta: "Roadmap cá nhân",
    icon: Route,
  },
  {
    title: "Đăng ký & đồng hành",
    description: "Hướng dẫn đăng ký, theo dõi tiến độ, nhắc lịch học và hỗ trợ học viên hoàn thiện thông tin cần thiết.",
    meta: "Bắt đầu học",
    icon: ClipboardCheck,
  },
];

const testimonials = [
  {
    name: "Nguyễn Thu Hà",
    role: "Học viên luyện thi chứng chỉ tiếng Anh",
    content:
      "Edupartner tư vấn rất rõ lộ trình, giúp mình biết nên bắt đầu từ đâu và cần tập trung kỹ năng nào trước kỳ thi. Các bước đăng ký, ôn tập và chuẩn bị hồ sơ đều được hướng dẫn cụ thể.",
  },
  {
    name: "Trần Minh Quân",
    role: "Học viên chương trình tin học văn phòng",
    content:
      "Điều mình thích nhất là nội dung học thực tế, dễ áp dụng vào công việc. Sau khóa học, mình tự tin hơn khi xử lý bảng tính, văn bản và các tác vụ văn phòng hằng ngày.",
  },
  {
    name: "Lê Phương Anh",
    role: "Học viên bồi dưỡng nghiệp vụ",
    content:
      "Đội ngũ tư vấn theo sát từ lúc chọn chương trình đến khi hoàn thiện thông tin học tập. Mình tiết kiệm được rất nhiều thời gian vì mọi yêu cầu đều được giải thích dễ hiểu.",
  },
];

export default function Home() {
  const { courses, posts } = useContent();

  return (
    <>
      <SEO
        title="Edupartner | Trung tâm tư vấn và phát triển giáo dục"
        description="Edupartner cung cấp chương trình tiếng Anh, tin học, đào tạo ngắn hạn và đào tạo dài hạn, hỗ trợ học viên lựa chọn lộ trình học phù hợp."
      />
      <HeroSlider />

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Về Edupartner</p>
            <h2 className="section-title mt-3">Công ty Tư vấn và Phát triển Giáo dục Edupartner</h2>
            <p className="section-lead">
              Edupartner là đơn vị tư vấn và phát triển giáo dục, tập trung hỗ trợ học viên lựa chọn chương trình học phù hợp với mục tiêu cá nhân, yêu cầu công việc và định hướng phát triển lâu dài.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {aboutPoints.map((point) => (
              <div className="card p-5" key={point}>
                <CheckCircle2 className="h-9 w-9 text-leaf" aria-hidden="true" />
                <p className="mt-4 font-bold leading-6 text-navy">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FCFF]">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Nhóm chương trình</p>
            <h2 className="section-title mt-3">Các chương trình đào tạo tại Edupartner</h2>
            <p className="section-lead">
              Từ chương trình tiếng Anh, khóa học tin học đến đào tạo ngắn hạn và đào tạo dài hạn, Edupartner giúp học viên chọn đúng lộ trình ngay từ đầu.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {courseGroups.map((group) => (
              <article className="card p-6" key={group.title}>
                <BookOpen className="h-10 w-10 text-skybrand" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-navy">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{group.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700">
                  {group.examples.map((example) => (
                    <li className="flex gap-2" key={example}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-leaf">Vì sao chọn Edupartner?</p>
            <h2 className="section-title mt-3">Đáng tin cậy, rõ lộ trình, sát nhu cầu</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article className="card p-6" key={reason.title}>
                  <Icon className="h-10 w-10 text-leaf" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-navy">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FCFF]">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Feedback học viên</p>
              <h2 className="section-title mt-3">Học viên nói gì về Edupartner?</h2>
              <p className="section-lead">
                Những phản hồi tiêu biểu từ học viên đã được Edupartner tư vấn lộ trình, hỗ trợ chọn chương trình và đồng hành trong quá trình học tập.
              </p>
            </div>
            <div className="flex w-fit items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-bold text-navy shadow-soft">
              <Star className="h-5 w-5 fill-leaf text-leaf" aria-hidden="true" />
              4.9/5 mức độ hài lòng
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article className="card flex h-full flex-col p-6" key={item.name}>
                <Quote className="h-9 w-9 text-skybrand" aria-hidden="true" />
                <div className="mt-5 flex gap-1 text-leaf" aria-label="Đánh giá 5 sao">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star className="h-4 w-4 fill-current" key={star} aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 flex-1 text-sm leading-7 text-slate-700">“{item.content}”</p>
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-bold text-navy">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F4FBF4]">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wide text-leaf">Quy trình đăng ký</p>
              <h2 className="section-title mt-3">Bốn bước để bắt đầu chương trình phù hợp</h2>
              <p className="section-lead">
                Roadmap tư vấn giúp học viên nhìn rõ từng mốc cần đi qua, từ lúc gửi nhu cầu đến khi chính thức bắt đầu học và được đồng hành theo tiến độ.
              </p>
            </div>
            <Link to="/lien-he" className="inline-flex items-center gap-2 font-bold text-skybrand hover:text-navy">
              Nhận tư vấn ngay
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 rounded-lg border border-leaf/15 bg-white p-5 shadow-soft sm:p-6 lg:p-8">
            <div className="relative">
              <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-skybrand via-leaf to-navy md:left-0 md:right-0 md:top-[3.25rem] md:mx-auto md:block md:h-1 md:w-[76%]" />
              <div className="grid gap-5 md:grid-cols-4">
                {process.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <article
                      className="relative grid min-h-[260px] gap-4 rounded-lg border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
                      key={step.title}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-soft ring-8 ring-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-leaf">
                          {step.meta}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-black uppercase tracking-wide text-skybrand">
                          Bước {index + 1}
                        </p>
                        <h3 className="mt-2 text-xl font-bold leading-snug text-navy">{step.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="mt-6 grid gap-3 rounded-lg bg-[#F8FCFF] p-5 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-leaf/10 text-leaf">
                <FileCheck2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-navy">Kết quả sau roadmap</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  Học viên có kế hoạch học tập rõ ràng, biết chương trình phù hợp, hồ sơ cần chuẩn bị và các mốc cần theo dõi.
                </p>
              </div>
              <Link to="/lien-he" className="btn-secondary justify-self-start md:justify-self-end">
                Lập lộ trình
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Chương trình nổi bật</p>
              <h2 className="section-title mt-3">Khóa học được quan tâm tại Edupartner</h2>
            </div>
            <Link to="/khoa-hoc" className="btn-secondary">Xem tất cả khóa học</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {courses.slice(0, 6).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#F8FCFF]">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Tin tức mới nhất</p>
              <h2 className="section-title mt-3">Kiến thức giáo dục và chứng chỉ</h2>
            </div>
            <Link to="/tin-tuc" className="btn-secondary">Xem tin tức</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="container-page grid gap-4 md:grid-cols-3">
          {[
            { label: "Lộ trình học rõ ràng", icon: ClipboardCheck },
            { label: "Hồ sơ, chứng chỉ được hỗ trợ", icon: FileCheck2 },
            { label: "Đội ngũ tư vấn tận tâm", icon: UsersRound },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-4" key={item.label}>
                <Icon className="h-6 w-6 text-leaf" aria-hidden="true" />
                <p className="font-bold text-navy">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Bạn cần tư vấn chương trình học phù hợp?"
        description="Để lại thông tin, Edupartner sẽ hỗ trợ bạn lựa chọn chương trình tiếng Anh, tin học, đào tạo ngắn hạn hoặc dài hạn phù hợp với nhu cầu."
        buttonLabel="Đăng ký tư vấn ngay"
      />
    </>
  );
}
