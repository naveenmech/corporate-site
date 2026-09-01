import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { services } from "@/lib/content";

export default function ServiceRow({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <div className="border-b border-border py-16">
      <div
        className={`mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:items-start ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <Reveal>
          <div className="relative aspect-4/3 overflow-hidden rounded-sm">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="font-display text-[10px] font-bold uppercase tracking-widest text-brand-red">
                {service.division}
              </span>
              <p className="mt-1 font-display text-xs font-semibold uppercase tracking-widest text-white/70">
                LOD 400 · Quality Verified
              </p>
            </div>
          </div>

          <h3 className="mt-6 font-display text-3xl font-black uppercase leading-tight text-navy">
            {service.title}
          </h3>
          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-navy-light"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote className="border-l-2 border-brand-red pl-5 font-display text-lg leading-snug text-navy text-balance">
            &ldquo;{service.quote}&rdquo;
          </blockquote>
          <div className="mt-5 space-y-4">
            {service.paragraphs.map((p) => (
              <p key={p} className="text-sm leading-relaxed text-navy-light">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
