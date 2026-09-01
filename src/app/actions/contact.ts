"use server";

import { resend, EMAIL_FROM, EMAIL_TO, isEmailConfigured } from "@/lib/resend";

export async function sendEnquiry(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const company = String(formData.get("company") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const message = String(formData.get("message") ?? "");
  const driveLink = String(formData.get("driveLink") ?? "");

  if (!name || !email || !company || !phone || !message) {
    return { success: false, error: "Missing required fields." };
  }

  if (!isEmailConfigured()) {
    console.error("RESEND_API_KEY is not set on this environment.");
    return { success: false, error: "Email service is not configured yet. Please try again later." };
  }

  try {
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Project Enquiry — ${name}`,
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        ${driveLink ? `<p><strong>Project Files:</strong> <a href="${escapeHtml(driveLink)}">${escapeHtml(driveLink)}</a></p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Could not send your enquiry. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Enquiry send failed:", err);
    return { success: false, error: "Could not send your enquiry. Please try again." };
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
