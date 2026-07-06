import { PhoneCall } from "lucide-react";
import { contactDetails } from "../data/contact.js";

const contactActions = [
  {
    label: "Gọi Edupartner",
    href: contactDetails.phoneHref,
    className: "bg-skybrand text-white hover:bg-navy",
    icon: PhoneCall,
  },
  {
    label: "Chat Zalo",
    href: contactDetails.zaloHref,
    className: "bg-white hover:bg-slate-50",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg",
  },
  {
    label: "Facebook Edupartner",
    href: contactDetails.facebookHref,
    className: "bg-white hover:bg-slate-50",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      {contactActions.map((action) => {
        const Icon = action.icon;

        return (
          <a
            aria-label={action.label}
            className={[
              "group flex h-12 w-12 items-center justify-center rounded-full shadow-lg ring-1 ring-white/70 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-skybrand sm:h-14 sm:w-14",
              action.className,
            ].join(" ")}
            href={action.href}
            key={action.label}
            rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            target={action.href.startsWith("http") ? "_blank" : undefined}
            title={action.label}
          >
            {Icon ? (
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            ) : action.logo ? (
              <img className="h-9 w-9 rounded-full object-contain sm:h-11 sm:w-11" src={action.logo} alt="" aria-hidden="true" />
            ) : (
              <span className="pb-1 font-serif text-3xl font-black leading-none" aria-hidden="true">
                {action.text}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
