// @ts-nocheck
import { Github, Globe, Instagram, Linkedin, UserRound } from "lucide-react";

type PersonalLink = {
  label: string;
  href: string;
};

export type FooterOneProps = {
  authorName?: string;
  projectName?: string;
  projectPurpose?: string;
  personalLinks?: PersonalLink[];
};

const defaultLinks: PersonalLink[] = [
  { label: "Portfolio", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function FooterOne({
  authorName = "JOSE RAPHAEL PIDO",
  projectName = "Countries I Wanted To Visit",
  projectPurpose = "A personal tourism project about why Maldives is my dream destination, featuring places, food, and island experiences.",
  personalLinks = defaultLinks,
}: FooterOneProps) {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-[#023E8A] via-[#0077B6] to-[#0096C7] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_90%_0%,rgba(255,255,255,0.14),transparent_35%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_0.8fr]">
        <section>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Dream Destination Project</p>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">{projectName}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-cyan-50 md:text-base">{projectPurpose}</p>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-white/15 px-3 py-2 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80"
              alt="Ocean waves"
              className="h-10 w-10 rounded-full border-2 border-white/70 object-cover"
            />
            <span className="text-sm text-cyan-50">Inspired by ocean adventures and island life.</span>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-cyan-50">
            <UserRound className="h-4 w-4" />
            <span>
              Created by <strong>{authorName}</strong>
            </span>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold text-cyan-100">Project Links</p>
            <div className="space-y-2 text-sm">
              <a className="block text-cyan-50 transition hover:translate-x-1 hover:text-white" href="#">Home</a>
              <a className="block text-cyan-50 transition hover:translate-x-1 hover:text-white" href="#">Places To Visit</a>
              <a className="block text-cyan-50 transition hover:translate-x-1 hover:text-white" href="#">Foods and Lifestyle</a>
              <a className="block text-cyan-50 transition hover:translate-x-1 hover:text-white" href="#">Why I Chose This Country</a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-cyan-100">Personal Pages</p>
            <div className="space-y-2 text-sm">
              {personalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-2 text-cyan-50 transition hover:translate-x-1 hover:text-white"
                >
                  {link.label === "Portfolio" && <Globe className="h-4 w-4" />}
                  {link.label === "LinkedIn" && <Linkedin className="h-4 w-4" />}
                  {link.label === "GitHub" && <Github className="h-4 w-4" />}
                  {link.label === "Instagram" && <Instagram className="h-4 w-4" />}
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-cyan-100">Replace link URLs later with your real pages.</p>
          </div>
        </section>
      </div>

      <div className="relative border-t border-white/25 px-6 py-4 text-center text-xs text-cyan-50">
        © 2026 {authorName}. Built to share my Maldives travel dream.
      </div>
    </footer>
  );
}
