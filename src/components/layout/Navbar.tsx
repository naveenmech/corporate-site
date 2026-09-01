"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import { navLinks, trustBadges } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 flex h-20 items-center bg-white transition-shadow duration-300",
        scrolled && "shadow-md"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          <Logo className="text-base text-navy sm:text-lg lg:text-xl" />
          <div className="flex items-center gap-1 border-l border-navy/10 pl-2 sm:gap-2 sm:pl-3">
            {trustBadges.map((src) => (
              <Image
                key={src}
                src={src}
                alt=""
                width={40}
                height={40}
                className="h-5 w-auto object-contain sm:h-7 lg:h-9"
              />
            ))}
          </div>
        </Link>

        <nav className="hidden items-center xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "group relative px-4 py-2 font-display text-xs font-bold uppercase tracking-wider text-navy/70 transition-colors hover:text-navy",
                pathname === link.href && "text-navy"
              )}
            >
              {link.label}
              <span
                className={clsx(
                  "absolute inset-x-4 bottom-1 h-px scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100",
                  pathname === link.href && "scale-x-100"
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-sm bg-navy px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-navy-light sm:flex lg:px-8"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-navy xl:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-navy/10 bg-white shadow-lg xl:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 font-display text-base font-bold uppercase tracking-wide text-navy/80"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-sm bg-navy px-5 py-3 text-center font-display text-sm font-semibold uppercase tracking-wide text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
