import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ServiceRow from "@/components/services/ServiceRow";
import { services, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Services — ${siteConfig.name}`,
  description: "Core structural steel detailing and engineering services.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-dark pt-40 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
              Core Expertise
            </span>
            <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-balance sm:text-5xl">
              Services
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              Providing the technical backbone for ambitious structures through precision-driven
              steel detailing and BIM integration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        {services.map((service, i) => (
          <ServiceRow key={service.title} service={service} index={i} />
        ))}
      </section>

      <section className="bg-brand-red py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-white/80">
              Contact Us
            </span>
            <h2 className="mt-4 font-display text-3xl font-black uppercase text-white sm:text-4xl">
              Ready to Start Your Next Project?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">
              Send us your drawings — our team will respond within one business day with a
              comprehensive quote.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-brand-red hover:scale-105 transition-transform"
              >
                Get a Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
