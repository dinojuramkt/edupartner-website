import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Tag } from "lucide-react";
import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import SEO from "../components/SEO.jsx";
import { useContent } from "../hooks/useContent.js";

export default function PostDetail() {
  const { slug } = useParams();
  const { posts } = useContent();
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <SEO
          title="Không tìm thấy bài viết | Edupartner"
          description="Bài viết bạn đang tìm không tồn tại hoặc đã được cập nhật."
        />
        <section className="section-pad bg-[#F8FCFF]">
          <div className="container-page text-center">
            <h1 className="section-title">Không tìm thấy bài viết</h1>
            <p className="section-lead mx-auto">
              Nội dung có thể đã được cập nhật. Bạn có thể quay lại trang tin tức để xem các bài viết hiện có.
            </p>
            <Link to="/tin-tuc" className="btn-primary mt-8">
              Quay lại tin tức
            </Link>
          </div>
        </section>
      </>
    );
  }

  const relatedPosts = posts.filter((item) => item.id !== post.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${post.title} | Edupartner`}
        description={post.description}
      />
      <article>
        <section className="bg-[#F8FCFF]">
          <div className="container-page py-12 sm:py-16">
            <Link
              to="/tin-tuc"
              className="inline-flex items-center gap-2 text-sm font-bold text-skybrand hover:text-navy"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Quay lại tin tức
            </Link>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <span className="inline-flex items-center gap-2 rounded-full bg-leaf/10 px-4 py-2 text-leaf">
                    <Tag className="h-4 w-4" aria-hidden="true" />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-muted shadow-sm">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {post.date}
                  </span>
                </div>
                <h1 className="mt-6 text-4xl font-black tracking-normal text-navy sm:text-5xl">
                  {post.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                  {post.description}
                </p>
              </div>
              <img
                className="h-72 w-full rounded-lg object-cover shadow-soft lg:h-96"
                src={post.image}
                alt={post.title}
              />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-page">
            <div className="mx-auto max-w-3xl">
              {post.content.map((section) => (
                <section className="mb-10" key={section.heading}>
                  <h2 className="text-2xl font-bold text-navy">{section.heading}</h2>
                  <div className="mt-4 grid gap-4">
                    {section.paragraphs.map((paragraph) => (
                      <p className="text-base leading-8 text-slate-700" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
              <div className="rounded-lg bg-[#F4FBF4] p-6">
                <h2 className="text-xl font-bold text-navy">Cần tư vấn thêm?</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Nếu bạn đang phân vân về chứng chỉ, khóa học hoặc lộ trình đào tạo, Edupartner có thể hỗ trợ phân tích nhu cầu và đề xuất lựa chọn phù hợp.
                </p>
                <Link to="/lien-he" className="btn-primary mt-5">
                  Liên hệ Edupartner
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="section-pad bg-[#F8FCFF]">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Bài viết liên quan</p>
          <h2 className="section-title mt-3">Đọc thêm từ Edupartner</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <BlogCard key={item.id} post={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Cần định hướng chương trình học phù hợp?"
        description="Để lại thông tin để Edupartner tư vấn chương trình tiếng Anh, tin học, đào tạo ngắn hạn hoặc đào tạo dài hạn đúng nhu cầu."
        buttonLabel="Nhận tư vấn"
      />
    </>
  );
}
