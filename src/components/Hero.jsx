import { Link } from "react-router-dom";

export default function Hero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  image,
  compact = false,
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" src={image} alt="" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-skybrand/40" />
      </div>
      <div className="container-page relative">
        <div className={compact ? "py-16 sm:py-20" : "py-24 sm:py-28 lg:py-32"}>
          <div className="max-w-4xl">
            {eyebrow && (
              <p className="mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                {eyebrow}
              </p>
            )}
            <h1 className="max-w-5xl text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
              {description}
            </p>
            {(primary || secondary) && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {primary && (
                  <Link to={primary.to} className="btn-primary">
                    {primary.label}
                  </Link>
                )}
                {secondary && (
                  <Link to={secondary.to} className="btn-secondary border-white bg-white/10 text-white hover:border-leaf">
                    {secondary.label}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
