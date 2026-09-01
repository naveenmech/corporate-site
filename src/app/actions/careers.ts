"use server";

import { resend, EMAIL_FROM, EMAIL_TO } from "@/lib/resend";

const MAX_RESUME_BYTES = 8 * 1024 * 1024; // 8MB

export async function sendJobApplication(formData: FormData) {
  const jobTitle = String(formData.get("jobTitle") ?? "");
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const linkedin = String(formData.get("linkedin") ?? "");
  const experienceType = String(formData.get("experienceType") ?? "");
  const resume = formData.get("resume");

  if (!jobTitle || !name || !email || !phone || !experienceType) {
    return { success: false, error: "Missing required fields." };
  }

  const attachments: { filename: string; content: Buffer }[] = [];

  if (resume instanceof File && resume.size > 0) {
    if (resume.size > MAX_RESUME_BYTES) {
      return { success: false, error: "Resume file is too large (max 8MB)." };
    }
    const buffer = Buffer.from(await resume.arrayBuffer());
    attachments.push({ filename: resume.name, content: buffer });
  }

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Job Application — ${jobTitle}`,
      html: `
        <h2>New Job Application: ${escapeHtml(jobTitle)}</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Experience:</strong> ${escapeHtml(experienceType)}</p>
        ${linkedin ? `<p><strong>LinkedIn:</strong> <a href="${escapeHtml(linkedin)}">${escapeHtml(linkedin)}</a></p>` : ""}
        <p><strong>Resume attached:</strong> ${attachments.length > 0 ? "Yes" : "No"}</p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Could not send your application. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Job application send failed:", err);
    return { success: false, error: "Could not send your application. Please try again." };
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
