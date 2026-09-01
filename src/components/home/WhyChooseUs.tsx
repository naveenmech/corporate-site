import Image from "next/image";
import {
  Target,
  Boxes,
  Zap,
  ShieldCheck,
  Globe2,
  Lightbulb,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { whyChooseUs } from "@/lib/content";

const icons = [Target, Boxes, Zap, ShieldCheck, Globe2, Lightbulb];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy-dark py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Built for Precision, Scaled for Global Projects
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="group relative h-full min-h-[220px] overflow-hidden bg-navy-dark p-8">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/40" />
                  <div className="relative">
                    <Icon className="text-brand-red" size={28} strokeWidth={1.5} />
                    <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
