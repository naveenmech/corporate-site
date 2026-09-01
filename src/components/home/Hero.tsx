"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-dark">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero/hero-steel.webp"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/40" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-20 text-white sm:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand-red"
        >
          {siteConfig.name}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 font-display text-6xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
        >
          Precision
          <br />
          Structural
          <br />
          Detailing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-white/70"
        >
          Delivering structural excellence with unparalleled accuracy. Your trusted partner in
          high-precision structural steel detailing and engineering solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-sm bg-brand-red px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark"
          >
            Get a Quote
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-white/70"
          />
        </div>
      </motion.div>
    </section>
  );
}
