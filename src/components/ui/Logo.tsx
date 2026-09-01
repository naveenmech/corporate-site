import clsx from "clsx";
import { siteConfig } from "@/lib/content";

export default function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx("font-display font-black uppercase tracking-tight", className)}
    >
      {siteConfig.shortName}
      <span className="text-brand-red">.</span>
    </span>
  );
}
