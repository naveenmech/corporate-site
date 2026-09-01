import Reveal from "@/components/ui/Reveal";
import { testimonial } from "@/lib/content";

export default function Testimonial() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
            Client Testimonials
          </span>
          <p className="mt-6 font-display text-2xl font-medium leading-snug text-balance sm:text-3xl">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm uppercase tracking-wide text-white/50">
            {testimonial.attribution}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
