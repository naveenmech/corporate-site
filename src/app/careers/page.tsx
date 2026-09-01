import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import CareersOpenings from "@/components/careers/CareersOpenings";
import { careersIntro, siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `Careers — ${siteConfig.name}`,
  description: "Current job openings at " + siteConfig.name + ".",
};

export default function CareersPage() {
  return (
    <>
      <section className="bg-navy-dark pt-40 pb-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
              {careersIntro.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-balance sm:text-5xl">
              {careersIntro.heading}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/70">{careersIntro.body}</p>
          </Reveal>
        </div>
      </section>

      <CareersOpenings />
    </>
  );
}
