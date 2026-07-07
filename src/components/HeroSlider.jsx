import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetUrl } from "../utils/assetUrl.js";

const heroSlides = [
  {
    title: "Luyện thi chứng chỉ tiếng Anh VEPT Pearson cùng Edupartner",
    description:
      "Edupartner đồng hành cùng học viên trong quá trình tư vấn, ôn luyện và chuẩn bị cho bài thi Versant English Placement Test của Pearson, giúp bạn nâng cao năng lực tiếng Anh và tự tin đạt mục tiêu.",
    primaryButtonText: "Đăng ký tư vấn miễn phí",
    secondaryButtonText: "Tìm hiểu VEPT",
    primaryTo: "/lien-he",
    secondaryTo: "/khoa-hoc/luyen-thi-chung-chi-tieng-anh",
    image: "images/student-vept.png",
    imageAlt: "Học viên trẻ đang học tiếng Anh cùng tài liệu ôn luyện",
    accent: "from-skybrand/20 via-white to-leaf/10",
  },
  {
    title: "Tin học cơ bản và kỹ năng văn phòng cho học tập, công việc",
    description:
      "Khóa học giúp học viên nắm vững kỹ năng tin học nền tảng, sử dụng thành thạo các công cụ văn phòng và ứng dụng công nghệ thông tin hiệu quả trong học tập, công việc hằng ngày.",
    primaryButtonText: "Đăng ký tư vấn miễn phí",
    secondaryButtonText: "Xem chương trình tin học",
    primaryTo: "/lien-he",
    secondaryTo: "/khoa-hoc/chung-chi-ung-dung-cong-nghe-thong-tin",
    image: "images/student-computer.png",
    imageAlt: "Học viên trẻ sử dụng laptop trong môi trường học tập hiện đại",
    accent: "from-leaf/15 via-white to-skybrand/20",
  },
  {
    title: "Bồi dưỡng chuẩn chức danh nghề nghiệp giáo viên",
    description:
      "Edupartner tư vấn và đồng hành cùng giáo viên trong quá trình tham gia các chương trình bồi dưỡng chuẩn chức danh nghề nghiệp, giúp hoàn thiện điều kiện chuyên môn và phát triển nghề nghiệp bền vững.",
    primaryButtonText: "Đăng ký tư vấn miễn phí",
    secondaryButtonText: "Xem chương trình bồi dưỡng",
    primaryTo: "/lien-he",
    secondaryTo: "/khoa-hoc/chuan-chuc-danh-nghe-nghiep-giao-vien",
    image: "images/teacher-training.png",
    imageAlt: "Giáo viên chuyên nghiệp thân thiện trong lĩnh vực giáo dục",
    accent: "from-skybrand/15 via-[#F3FBF1] to-white",
  },
];

const AUTO_PLAY_DELAY = 4500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, AUTO_PLAY_DELAY);

    return () => window.clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF7FD] via-white to-[#F3FBF1]">
      <div className="hero-slider-inner container-page relative flex min-h-[calc(100vh-80px)] flex-col justify-end pb-0 pt-10 sm:pt-14 lg:min-h-[82vh] lg:justify-center lg:pb-0 lg:pt-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] xl:gap-14">
          <div className="relative z-10 max-w-3xl text-left">
            <p className="inline-flex rounded-full border border-skybrand/20 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wide text-skybrand shadow-sm">
              Chương trình nổi bật Edupartner
            </p>

            <div className="relative mt-6 min-h-[300px] sm:min-h-[285px] lg:min-h-[330px]">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <div
                    className={[
                      "pointer-events-none absolute inset-0 z-10 transition-all duration-700 ease-out",
                      isActive ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                    ].join(" ")}
                    key={slide.title}
                    aria-hidden={!isActive}
                  >
                    <h1 className="hero-slider-title max-w-3xl text-[2rem] font-extrabold leading-[1.18] tracking-normal text-navy sm:text-[2.6rem] sm:leading-[1.14] lg:text-[3.25rem] lg:leading-[1.1] xl:text-[3.65rem]">
                      {slide.title}
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                      {slide.description}
                    </p>
                    <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link className="btn-primary" to={slide.primaryTo}>
                        {slide.primaryButtonText}
                      </Link>
                      <Link className="btn-secondary bg-white/70" to={slide.secondaryTo}>
                        {slide.secondaryButtonText}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hero-slider-visual relative mx-auto w-full max-w-[520px] lg:absolute lg:bottom-0 lg:right-8 lg:top-0 lg:mx-0 lg:flex lg:w-[48%] lg:max-w-[700px] lg:items-end lg:justify-center xl:right-10 xl:w-[50%]">
            <div
              className={`absolute inset-x-4 bottom-4 top-8 rounded-[48%_52%_42%_58%/56%_44%_56%_44%] bg-gradient-to-br ${activeSlide.accent} shadow-soft transition-colors duration-700 lg:bottom-16 lg:top-auto lg:h-[70%] xl:h-[74%]`}
            />
            <div className="absolute inset-x-10 bottom-5 h-16 rounded-full bg-navy/10 blur-2xl lg:bottom-3 lg:h-20" />

            <div className="hero-slider-stage relative min-h-[330px] sm:min-h-[430px] lg:h-full lg:min-h-0 lg:w-full">
              {heroSlides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <img
                    className={[
                      "hero-slider-image absolute bottom-0 left-1/2 h-[330px] w-auto max-w-[92%] -translate-x-1/2 object-contain transition-all duration-700 ease-out sm:h-[430px] lg:h-[620px] lg:max-h-[92%] lg:max-w-[112%] xl:h-[700px] xl:max-w-[118%]",
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                    ].join(" ")}
                    key={slide.image}
                    src={assetUrl(slide.image)}
                    alt={slide.imageAlt}
                    aria-hidden={!isActive}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-slider-controls absolute inset-x-4 bottom-4 z-30 mt-0 flex justify-center sm:bottom-6 lg:inset-x-8 lg:bottom-8">
          <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/85 px-3 py-2 shadow-soft backdrop-blur">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-skybrand hover:text-skybrand"
              onClick={goToPrevious}
              aria-label="Chuyển về slide trước"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2" aria-label="Chọn slide">
              {heroSlides.map((slide, index) => (
                <button
                  type="button"
                  className={[
                    "h-3 rounded-full transition-all duration-300",
                    index === activeIndex ? "w-9 bg-skybrand" : "w-3 bg-slate-300 hover:bg-leaf",
                  ].join(" ")}
                  key={slide.title}
                  onClick={() => goToSlide(index)}
                  aria-label={`Chuyển đến slide ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-navy shadow-sm transition hover:border-skybrand hover:text-skybrand"
              onClick={goToNext}
              aria-label="Chuyển đến slide tiếp theo"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
