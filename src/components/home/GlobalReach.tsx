import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { globalStats } from "@/lib/content";

export default function GlobalReach() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
            Global Reach
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase text-navy sm:text-4xl">
            Global Operations, Synced Precision
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-navy-light">
            We operate around the clock across time zones to meet project deadlines worldwide.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {globalStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-black text-brand-red sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-display text-xs font-semibold uppercase tracking-widest text-navy-light">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
