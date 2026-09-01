import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import Logo from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/content";

const socials = [
  { href: siteConfig.social.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: siteConfig.social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.social.youtube, icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <Logo className="mb-4 text-xl text-white" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand-red hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Mail size={15} className="text-brand-red" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.phones.map((p) => (
              <li key={p.number} className="flex items-center gap-2">
                <Phone size={15} className="text-brand-red" />
                <a href={`tel:${p.number.replace(/[^+\d]/g, "")}`} className="hover:text-white">
                  {p.number}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/50">
            Offices
          </h3>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            {siteConfig.offices.map((office) => (
              <li key={office.country}>
                <p className="font-medium text-white/90">{office.country}</p>
                <p>{office.lines.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
