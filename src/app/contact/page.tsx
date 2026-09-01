import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: "Get in touch for a structural steel detailing quote.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-dark pt-40 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
              Let&apos;s Talk
            </span>
            <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-balance sm:text-5xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Have a project in mind? Our team is ready to provide high-precision structural
              detailing and engineering solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
              Reach Our Team
            </span>
            <p className="mt-4 text-sm leading-relaxed text-navy-light">
              Every enquiry is an opportunity to create value. Our team carefully evaluates each
              requirement to provide well-structured, competitive quotations aligned with your
              project goals.
            </p>

            <div className="mt-8 flex items-center gap-2 font-display text-sm font-semibold text-navy">
              <Mail size={16} className="text-brand-red" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-red">
                {siteConfig.email}
              </a>
            </div>

            <div className="mt-10 space-y-6">
              {siteConfig.offices.map((office) => (
                <div key={office.country} className="rounded-sm border border-border p-5">
                  <p className="font-display text-xs font-bold uppercase tracking-widest text-navy-light">
                    {office.flag} {office.country}
                  </p>
                  <p className="mt-2 font-display text-sm font-bold uppercase text-navy">
                    {office.company}
                  </p>
                  <p className="mt-1 text-sm text-navy-light">{office.lines.join(", ")}</p>
                  <p className="mt-1 text-sm text-navy-light">{office.phone}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
