import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="bg-brand-red py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-black uppercase leading-tight text-white text-balance sm:text-4xl">
            Ready to Build? Seeking a Better Detailing Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">
            Contact our team to explore how we can help you deliver your next project on
            schedule, with quality and absolute efficiency.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-white px-8 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-brand-red transition-transform hover:scale-105"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
