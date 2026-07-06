import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <Link to={`/tin-tuc/${post.slug}`} className="group block h-full">
      <article className="card flex h-full flex-col overflow-hidden">
        <img
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
          src={post.image}
          alt={post.title}
        />
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
            <span className="rounded-full bg-leaf/10 px-3 py-1 text-leaf">{post.category}</span>
            <span className="flex items-center gap-1.5 text-muted">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {post.date}
            </span>
          </div>
          <h2 className="mt-4 text-xl font-bold leading-snug text-navy transition group-hover:text-skybrand">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-7 text-muted">{post.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-skybrand group-hover:text-navy">
            Đọc thêm
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  );
}
