"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import JobModal from "@/components/careers/JobModal";
import { openPositions } from "@/lib/content";

export default function CareersOpenings() {
  const [selectedJob, setSelectedJob] = useState<(typeof openPositions)[number] | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl">
          <span className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
            Opportunities
          </span>
          <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight text-navy sm:text-4xl">
            Our Current Openings
          </h2>
          <p className="mt-3 text-sm text-navy-light">
            Join a team of elite engineers and detailers shaping the global infrastructure.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {openPositions.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.08}>
              <div className="group flex h-full flex-col items-center border-2 border-border bg-muted p-10 text-center transition-all duration-500 hover:bg-navy">
                <h3 className="font-display text-xl font-black uppercase tracking-wide text-navy group-hover:text-white">
                  {job.title}
                </h3>
                <p className="mt-3 font-display text-xs font-bold uppercase tracking-widest text-brand-red">
                  Vacancy — {job.vacancies}
                </p>
                <button
                  type="button"
                  onClick={() => setSelectedJob(job)}
                  className="mt-auto rounded-full bg-navy px-6 py-2 font-display text-[10px] font-bold uppercase tracking-widest text-white transition-colors group-hover:bg-brand-red"
                >
                  View Details
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </section>
  );
}
