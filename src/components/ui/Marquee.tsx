import type { ReactNode } from "react";
import clsx from "clsx";

export default function Marquee({
  children,
  speed = "normal",
  className,
}: {
  children: ReactNode;
  speed?: "normal" | "fast";
  className?: string;
}) {
  return (
    <div className={clsx("group overflow-hidden", className)}>
      <div
        className={clsx(
          "flex w-max items-center gap-12 group-hover:[animation-play-state:paused]",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        <div className="flex items-center gap-12">{children}</div>
        <div className="flex items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
