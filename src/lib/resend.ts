import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = "Tumbler Talks Website <onboarding@resend.dev>";
export const EMAIL_TO = process.env.CONTACT_EMAIL_TO ?? "info@tumblertalks.com";
