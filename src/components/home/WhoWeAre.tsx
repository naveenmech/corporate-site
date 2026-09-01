import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { whoWeAre } from "@/lib/content";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <Image
        src="/images/hero/blueprint.webp"
        alt=""
        fill
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 object-cover opacity-[0.04]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-4/3 overflow-hidden rounded-sm">
            <Image
              src="/images/hero/global-standards.webp"
              alt="Structural detailing workflow"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
            {whoWeAre.eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-navy text-balance sm:text-4xl">
            {whoWeAre.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {whoWeAre.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-navy-light">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
