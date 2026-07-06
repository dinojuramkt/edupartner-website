import { Clock, Globe2, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm.jsx";
import Hero from "../components/Hero.jsx";
import SEO from "../components/SEO.jsx";
import { contactDetails } from "../data/contact.js";

const contactInfo = [
  { label: "Địa chỉ", value: contactDetails.address, icon: MapPin },
  { label: "Số điện thoại", value: contactDetails.phone, href: contactDetails.phoneHref, icon: Phone },
  { label: "Email", value: contactDetails.email, href: contactDetails.emailHref, icon: Mail },
  { label: "Website", value: contactDetails.website, href: contactDetails.websiteHref, icon: Globe2 },
  { label: "Thời gian làm việc", value: contactDetails.workingHours, icon: Clock },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Liên hệ Edupartner | Tư vấn chương trình học"
        description="Liên hệ Edupartner để được tư vấn chương trình tiếng Anh, tin học, đào tạo ngắn hạn và dài hạn phù hợp với nhu cầu của bạn."
      />
      <Hero
        compact
        eyebrow="Liên hệ Edupartner"
        title="Liên hệ Edupartner"
        description="Để lại thông tin để Edupartner tư vấn chương trình học phù hợp với nhu cầu học tập, chứng chỉ và định hướng nghề nghiệp của bạn."
        image="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1800&q=80"
      />
      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-skybrand">Thông tin liên hệ</p>
            <h1 className="section-title mt-3">Trung tâm tư vấn và phát triển giáo dục Edupartner</h1>
            <p className="section-lead">
              Gửi thông tin tư vấn để đội ngũ Edupartner hỗ trợ lựa chọn chương trình tiếng Anh, khóa học tin học, đào tạo ngắn hạn hoặc đào tạo dài hạn phù hợp.
            </p>
            <div className="mt-8 grid gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="rounded-lg border border-slate-100 bg-[#F8FCFF] p-5" key={item.label}>
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-skybrand/10 text-skybrand">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-bold text-navy">{item.label}</p>
                        {item.href ? (
                          <a
                            className="mt-1 inline-flex text-sm text-muted transition hover:text-skybrand"
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-sm text-muted">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="pb-20">
        <div className="container-page">
          <div className="overflow-hidden rounded-lg border border-slate-100 bg-[#EAF7FD] shadow-soft">
            <div className="flex min-h-80 items-center justify-center p-8 text-center">
              <div>
                <MapPin className="mx-auto h-12 w-12 text-skybrand" aria-hidden="true" />
                <h2 className="mt-4 text-2xl font-bold text-navy">Địa chỉ Edupartner</h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-muted">
                  {contactDetails.address}
                </p>
                <a
                  className="btn-primary mt-5"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Xem trên Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
