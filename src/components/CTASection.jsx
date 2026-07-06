import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection({ title, description, buttonLabel }) {
  return (
    <section className="bg-gradient-to-r from-navy to-skybrand">
      <div className="container-page py-14">
        <div className="flex flex-col items-start justify-between gap-8 text-white lg:flex-row lg:items-center">
          <div>
            <h2 className="max-w-3xl text-3xl font-black tracking-normal sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/80">{description}</p>
          </div>
          <Link to="/lien-he" className="btn-secondary shrink-0 border-white bg-white text-navy hover:border-leaf">
            {buttonLabel}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
