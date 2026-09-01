"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import type { openPositions } from "@/lib/content";

type Job = (typeof openPositions)[number];

export default function JobModal({
  job,
  onClose,
}: {
  job: Job | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!job) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [job]);

  return (
    <AnimatePresence>
      {job && (
        <motion.div
          key="job-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            key={job.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sm bg-white"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 text-white/70 transition-colors hover:text-white"
            >
              <X size={20} />
            </button>

            <JobModalContent job={job} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function JobModalContent({ job }: { job: Job }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  return (
    <div className="flex flex-col">
      <div className="bg-navy p-10 text-white">
        <p className="font-display text-[10px] font-black uppercase tracking-[0.4em] text-brand-red">
          Position Details
        </p>
        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.85] tracking-tight sm:text-5xl">
          {job.title}
        </h2>
        <div className="mt-6 flex items-center gap-4 font-display text-sm font-bold uppercase tracking-widest">
          <span className="bg-brand-red px-3 py-1">Vacancies: {job.vacancies}</span>
          <span className="text-white/50">{job.type}</span>
        </div>
      </div>

      <div className="p-10">
        {status === "sent" ? (
          <div className="flex flex-col items-center gap-3 rounded-sm border border-border bg-muted p-10 text-center">
            <CheckCircle2 className="text-brand-red" size={36} />
            <p className="font-display text-lg font-bold uppercase text-navy">
              Application Sent
            </p>
            <p className="max-w-sm text-sm text-navy-light">
              Thanks for applying for the {job.title} position — our team will review your
              application and get back to you within a few business days.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <div>
              <h4 className="w-fit border-b-2 border-brand-red pb-2 font-display text-sm font-bold uppercase tracking-widest text-navy">
                Required Skills
              </h4>
              <ul className="mt-4 space-y-3">
                {[
                  `Type: ${job.type}`,
                  `Location: ${job.location}`,
                  `Experience: ${job.experience}`,
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm font-medium text-navy-light">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="w-fit border-b-2 border-brand-red pb-2 font-display text-sm font-bold uppercase tracking-widest text-navy">
                Apply for this position
              </h4>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                      Full Name *
                    </span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full border-0 bg-muted p-4 text-sm text-navy outline-none transition-all focus:ring-2 focus:ring-brand-red/20"
                    />
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                      Mobile Number *
                    </span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="w-full border-0 bg-muted p-4 text-sm text-navy outline-none transition-all focus:ring-2 focus:ring-brand-red/20"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                      Email Address *
                    </span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border-0 bg-muted p-4 text-sm text-navy outline-none transition-all focus:ring-2 focus:ring-brand-red/20"
                    />
                  </label>
                  <label className="block space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                      LinkedIn URL (Optional)
                    </span>
                    <input
                      type="url"
                      name="linkedin"
                      className="w-full border-0 bg-muted p-4 text-sm text-navy outline-none transition-all focus:ring-2 focus:ring-brand-red/20"
                    />
                  </label>
                </div>

                <div className="space-y-4 pt-2">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                    Experience *
                  </span>
                  <div className="flex gap-8">
                    {["Fresher", "Experienced"].map((option) => (
                      <label
                        key={option}
                        className="group flex cursor-pointer items-center gap-3"
                      >
                        <input
                          required
                          type="radio"
                          name="experienceType"
                          value={option.toLowerCase()}
                          className="h-4 w-4 cursor-pointer border-border text-brand-red focus:ring-brand-red"
                        />
                        <span className="font-display text-sm font-bold uppercase tracking-widest text-navy transition-colors group-hover:text-brand-red">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <label className="block space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-navy-light/70">
                    Upload Resume (PDF/DOC) *
                  </span>
                  <input
                    required
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full cursor-pointer border-0 bg-muted p-4 text-xs text-navy outline-none transition-all focus:ring-2 focus:ring-brand-red/20"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-navy py-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-brand-red disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Submit Application"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
