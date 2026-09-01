import Image from "next/image";
import Marquee from "@/components/ui/Marquee";
import { softwarePartners } from "@/lib/content";

export default function Partners() {
  return (
    <section className="border-y border-border bg-muted py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-display text-xs font-bold uppercase tracking-widest text-navy-light">
          Powered By Industry-Leading Software
        </p>
        <Marquee className="mt-8">
          {softwarePartners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 w-40 items-center justify-center grayscale transition-all hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={140}
                height={50}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
