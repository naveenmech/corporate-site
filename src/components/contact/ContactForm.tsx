"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: true },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-sm border border-border bg-muted p-10 text-center">
        <CheckCircle2 className="text-brand-red" size={36} />
        <p className="font-display text-lg font-bold uppercase text-navy">Enquiry Sent</p>
        <p className="max-w-sm text-sm text-navy-light">
          Thanks for reaching out — a member of our team will get back to you within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="font-display text-xs font-bold uppercase tracking-widest text-brand-red">
        Project Enquiry
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="font-display text-xs font-semibold uppercase tracking-wide text-navy-light">
              {field.label} {field.required && <span className="text-brand-red">*</span>}
            </span>
            <input
              required={field.required}
              type={field.type}
              name={field.name}
              className="mt-2 w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-red"
            />
          </label>
        ))}
      </div>

      <label className="block">
        <span className="font-display text-xs font-semibold uppercase tracking-wide text-navy-light">
          Tell Us About Your Project <span className="text-brand-red">*</span>
        </span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-none rounded-sm border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-red"
        />
      </label>

      <label className="block">
        <span className="font-display text-xs font-semibold uppercase tracking-wide text-navy-light">
          Project Files (Google Drive Link)
          <span className="ml-1 normal-case text-navy-light/70">optional</span>
        </span>
        <input
          type="url"
          name="driveLink"
          placeholder="https://drive.google.com/..."
          className="mt-2 w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-brand-red"
        />
        <span className="mt-1 block text-xs text-navy-light">
          Upload your drawings/folders to Google Drive and paste the shareable link here.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex items-center gap-2 rounded-sm bg-brand-red px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Submit Enquiry"}
        <ArrowRight size={16} />
      </button>
    </form>
  );
}
