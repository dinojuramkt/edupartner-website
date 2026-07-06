import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock, GraduationCap, MonitorCheck, Users } from "lucide-react";

export default function CourseCard({ course }) {
  const navigate = useNavigate();
  const detailPath = `/khoa-hoc/${course.slug}`;

  function openDetail() {
    navigate(detailPath);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetail();
    }
  }

  return (
    <article
      className="card group flex h-full cursor-pointer flex-col overflow-hidden"
      role="link"
      tabIndex={0}
      aria-label={`Xem chi tiết ${course.title}`}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
    >
      <img
        className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
        src={course.image}
        alt={course.title}
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 w-fit rounded-full bg-skybrand/10 px-3 py-1 text-xs font-bold text-skybrand">
          {course.category}
        </span>
        <h2 className="text-xl font-bold text-navy transition group-hover:text-skybrand">
          {course.title}
        </h2>
        <p className="mt-3 flex-1 text-sm leading-7 text-muted">{course.description}</p>
        <div className="mt-5 grid gap-3 text-sm text-slate-600">
          <p className="flex gap-3">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
            {course.audience}
          </p>
          <p className="flex gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
            {course.duration}
          </p>
          <p className="flex gap-3">
            <MonitorCheck className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
            {course.format}
          </p>
          {course.updateDate && (
            <p className="flex gap-3">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
              Cập nhật: {course.updateDate}
            </p>
          )}
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <span className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-skybrand px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-navy">
            Xem chi tiết
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
          <Link
            to="/lien-he"
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-leaf px-5 py-3 text-sm font-semibold text-leaf transition hover:bg-leaf hover:text-white"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
            Tư vấn
          </Link>
        </div>
      </div>
    </article>
  );
}
