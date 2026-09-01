import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { portfolio } from "@/lib/content";

export default function Portfolio() {
  return (
    <section className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
              Portfolio
            </span>
            <h2 className="mt-4 font-display text-3xl font-black uppercase text-navy sm:text-4xl">
              Selected Work
            </h2>
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 font-display text-sm font-semibold uppercase tracking-wide text-navy hover:text-brand-red"
          >
            Explore All
            <ArrowUpRight size={16} />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div className="group relative aspect-3/4 overflow-hidden rounded-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-red">
                    Case Study
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold uppercase leading-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{project.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
