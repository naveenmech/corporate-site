"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { preloaderSlides } from "@/lib/content";

const STORAGE_KEY = "tt-preloader-shown";
const STEP_MS = 650;
const START_DELAY_MS = 900;

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    // Reads sessionStorage (an external system) on mount to decide whether to run
    // the one-time entrance sequence -- not state derived from props/prior state.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    document.body.style.overflow = "hidden";

    const timers: ReturnType<typeof setTimeout>[] = [];
    preloaderSlides.forEach((_, i) => {
      if (i === 0) return;
      timers.push(setTimeout(() => setIndex(i), START_DELAY_MS + i * STEP_MS));
    });

    const total = START_DELAY_MS + preloaderSlides.length * STEP_MS;
    timers.push(setTimeout(() => setFading(true), total));
    timers.push(
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* sessionStorage unavailable */
        }
      }, total + 500)
    );

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  const slide = preloaderSlides[index];

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-navy-dark transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.label}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image src={slide.image} alt="" fill priority className="object-cover opacity-30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center text-white">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-2xl font-black uppercase tracking-widest sm:text-4xl"
          >
            {slide.label}
          </motion.span>
        </AnimatePresence>
        <div className="flex gap-2">
          {preloaderSlides.map((s, i) => (
            <span
              key={s.label}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                i === index ? "bg-brand-red" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
