import Reveal from "@/components/ui/Reveal";
import { qualityPillars } from "@/lib/content";

export default function PolicyCards() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {qualityPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12}>
              <div className="h-full rounded-sm border border-border p-8 transition-shadow hover:shadow-xl">
                <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
                  {pillar.title}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-navy-light">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
