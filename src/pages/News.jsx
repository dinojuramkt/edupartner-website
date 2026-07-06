import BlogCard from "../components/BlogCard.jsx";
import CTASection from "../components/CTASection.jsx";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";
import { useContent } from "../hooks/useContent.js";

export default function News() {
  const { posts } = useContent();

  return (
    <>
      <SEO
        title="Tin tức giáo dục | Edupartner"
        description="Cập nhật tin tức, kiến thức và kinh nghiệm về chứng chỉ tiếng Anh, tin học, đào tạo ngắn hạn và đào tạo dài hạn."
      />
      <Hero
        compact
        eyebrow="Tin tức & kiến thức"
        title="Tin tức & kiến thức giáo dục"
        description="Cập nhật thông tin về chứng chỉ tiếng Anh, tin học, chương trình bồi dưỡng ngắn hạn, đào tạo dài hạn và kinh nghiệm học tập hiệu quả."
        image="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Bài viết mới</p>
            <h1 className="section-title mt-3">Góc cập nhật dành cho học viên</h1>
            <p className="section-lead">
              Các bài viết giúp người học hiểu rõ hơn về chứng chỉ, lộ trình đào tạo và cách chọn trung tâm tư vấn giáo dục phù hợp.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Cần tư vấn thông tin chứng chỉ hoặc chương trình học?"
        description="Đội ngũ Edupartner sẽ hỗ trợ bạn hiểu rõ yêu cầu, lựa chọn lộ trình và chuẩn bị hồ sơ phù hợp."
        buttonLabel="Liên hệ tư vấn"
      />
    </>
  );
}
