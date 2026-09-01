"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { preloaderSlides } from "@/lib/content";

const STORAGE_KEY = "tt-preloader-shown";
const RADIUS_DESKTOP = 220;
const RADIUS_MOBILE = 125;

export default function Preloader() {
  const [phase, setPhase] = useState(-2);
  const [visible, setVisible] = useState(false);
  const [radius, setRadius] = useState(RADIUS_DESKTOP);

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

    const updateRadius = () => setRadius(window.innerWidth < 640 ? RADIUS_MOBILE : RADIUS_DESKTOP);
    updateRadius();
    window.addEventListener("resize", updateRadius);

    const timers = [
      setTimeout(() => setPhase(-1), 2500),
      setTimeout(() => setPhase(0), 3200),
      setTimeout(() => setPhase(1), 3800),
      setTimeout(() => setPhase(2), 4400),
      setTimeout(() => setPhase(3), 5000),
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = "";
        try {
          sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          /* sessionStorage unavailable */
        }
      }, 5500),
    ];

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("resize", updateRadius);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] flex items-center justify-center bg-white transition-opacity duration-500 ${
        phase === 3 ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {phase < 0 && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              phase === -1 ? "scale-50 opacity-0" : "scale-100 opacity-100"
            }`}
            style={{ animation: "orbit-spin 15s linear infinite" }}
          >
            {preloaderSlides.map((slide, i) => {
              const angle = (i * 360) / preloaderSlides.length - 90;
              return (
                <div
                  key={slide.label}
                  className="absolute opacity-0"
                  style={
                    {
                      "--angle": `${angle}deg`,
                      "--radius": `${radius}px`,
                      animation: "orbit-dial-in 0.5s ease-out forwards",
                      animationDelay: `${i * 0.3}s`,
                    } as CSSProperties
                  }
                >
                  <div
                    className="flex flex-col items-center gap-1 sm:gap-2"
                    style={{ animation: "orbit-spin-reverse 15s linear infinite" }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white p-2 shadow-lg sm:h-20 sm:w-20 sm:p-3">
                      <Image
                        src={slide.image}
                        alt={slide.label}
                        width={80}
                        height={80}
                        priority
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="whitespace-nowrap rounded-md bg-white/80 px-1.5 py-0.5 font-display text-[9px] font-semibold uppercase tracking-wider text-navy sm:px-2 sm:py-1 sm:text-xs">
                      {slide.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="relative flex h-24 items-center sm:h-32">
          <div
            className={`transition-all duration-500 ease-in-out ${
              phase === 0
                ? "scale-150"
                : phase < 0
                  ? "scale-100"
                  : "scale-100 -translate-x-[70px] sm:-translate-x-[100px]"
            }`}
          >
            <Image
              src="/images/logo/favicon.png"
              alt="Tumbler Talks"
              width={112}
              height={112}
              priority
              className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
            />
          </div>

          <div
            className={`absolute left-[20px] overflow-hidden whitespace-nowrap transition-opacity duration-500 sm:left-[30px] ${
              phase >= 1 ? "opacity-100" : "opacity-0"
            }`}
            style={phase >= 1 ? { animation: "reveal-wipe 0.8s forwards ease-out" } : undefined}
          >
            <div className="flex flex-col">
              <span className="font-display text-4xl font-black tracking-tight text-brand-red sm:text-6xl">
                Tumbler
              </span>
              <span className="flex justify-center font-display text-xl font-medium tracking-wide text-navy/90 sm:text-4xl">
                Talks
              </span>
            </div>
          </div>
        </div>

        <div
          className={`mt-6 text-center transition-all duration-700 ${
            phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ marginLeft: phase >= 1 ? "70px" : "0" }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-navy/80 sm:text-lg">
            Stands For Trust
          </p>
          <div className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-brand-red shadow-[0_0_10px_rgba(200,32,46,0.3)]" />
        </div>
      </div>
    </div>
  );
}
