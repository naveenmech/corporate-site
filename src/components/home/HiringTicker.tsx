import Link from "next/link";
import Marquee from "@/components/ui/Marquee";
import { openPositions } from "@/lib/content";

export default function HiringTicker() {
  return (
    <div className="flex items-center gap-6 border-y border-border bg-muted py-3">
      <span className="shrink-0 pl-6 font-display text-xs font-bold uppercase tracking-widest text-brand-red">
        Hiring Now
      </span>
      <Marquee speed="fast" className="flex-1">
        {openPositions.map((role) => (
          <Link
            key={role.title}
            href="/careers"
            className="flex items-center gap-2 whitespace-nowrap font-display text-sm font-medium uppercase tracking-wide text-navy"
          >
            {role.title}
            <span className="text-border">|</span>
            <span className="text-navy-light">{role.type}</span>
            <span className="text-border">|</span>
            <span className="text-navy-light">{role.experience}</span>
            <span className="text-border">|</span>
            <span className="text-navy-light">{role.location}</span>
            <span className="ml-4 text-border">•</span>
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
