"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion as m } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  Rocket,
  PlayCircle,
  Building2,
} from "lucide-react";

// Personal Landing Page for Daniel "Danny" Quinonez — Blue/Yellow theme
// Next.js (App Router). TailwindCSS utilities only — no custom config required.

// Brand palette (soft, eye‑friendly)
// bg: deep blue #0B1220
// card: blue gray rgba(147, 197, 253, 0.06) (tailwind sky-300 ~)
// accent: warm yellow #F4D35E
// accent-2: soft sky #93C5FD

const ACCENT = "#F4D35E"; // yellow
const ACCENT_SOFT = "#93C5FD"; // soft sky

const socials = [
  { href: "https://linkedin.com/in/dannyquinonez", label: "LinkedIn", Icon: Linkedin },
  { href: "https://github.com/Daniel-Quinonez", label: "GitHub", Icon: Github },
  { href: "mailto:da336798@ucf.edu", label: "Email", Icon: Mail },
];

const projects = [
  {
    title: "Blnd",
    emoji: "🎧",
    time: "Oct 2024 – Present",
    stack: ["TypeScript", "React", "TailwindCSS", "Spotify API", "Last.fm"],
    blurb:
      "Blend playlists with friends by combining music tastes, then share the mix.",
    image: "/blnd.png", // Put blnd.png in public/
    links: [{ href: "https://blnd.vercel.app/", label: "Live Demo" }],
  },
  {
    title: "FitKnight",
    emoji: "🏋️‍♂️",
    time: "Oct 2024 – Dec 2024",
    stack: ["TypeScript", "React", "TailwindCSS"],
    blurb:
      "Gamified fitness tracker with daily/weekly challenges and streak mechanics.",
    image: "/fitknight.png", // Put fitknight.png in public/
    links: [{ href: "https://fitness-trading-project.vercel.app/", label: "Case Study" }],
  },
];

const experiences = [
  {
    org: "Lockheed Martin",
    role: "CWEP Software Engineer Intern",
    time: "Sep 2025 – Present",
    logo: "/lockheed.png", // put lockheed.png in public/
    points: [
      "Contributing across the SDLC for mission‑critical software.",
      "Working across Windows, Linux, and Unix targets for embedded & enterprise apps.",
      "Collaborating on cross‑functional defense & aerospace systems.",
    ],
  },
  {
    org: "Knights Experimental Rocketry (UCF)",
    role: "Avionics & Ground Systems",
    time: "Aug 2022 – Sep 2023",
    logo: "/kxr.png", // put kxr.png in public/
    points: [
      "Designed a flight computer for a 5k‑class SRAD rocket.",
      "C/C++ avionics (Arduino), LoRa telemetry, and live ground station visualization.",
      "Mechanical design with CREO CAD for motor casing and structures.",
    ],
  },
  {
    org: "Paper",
    role: "STEM & Spanish Tutor",
    time: "Feb 2023 – Dec 2023",
    logo: "/paper.png", // put paper.png in public/
    points: [
      "Tutored K‑12 students across STEM disciplines and Spanish.",
      "Adapted explanations to a wide range of ages and skill levels.",
    ],
  },
];

const skills = [
  "Java",
  "Python",
  "C/C++",
  "SQL",
  "TypeScript",
  "JavaScript",
  "HTML/CSS",
  "React",
  "TailwindCSS",
  "Node.js",
  "Express",
  "Git",
  "Docker",
  "AWS",
  "VS Code",
  "Bash",
  "pandas",
  "NumPy",
  "Matplotlib",
  "OpenCV",
  "pthreads",
];

// ===== Parallax Hero (Apple-like) =====
function ParallaxHero() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden h-[86vh] md:h-[92vh]">
      {/* Soft radial glow */}
      <m.div style={{ y }} className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl opacity-30" style={{ background: ACCENT }} />
        <div className="absolute top-1/3 right-10 h-56 w-56 rounded-full blur-2xl opacity-25" style={{ background: ACCENT_SOFT }} />
      </m.div>

      <div className="mx-auto max-w-6xl px-4 h-full grid place-items-center">
        <m.div style={{ scale, opacity }} className="text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest" style={{ borderColor: "rgba(244,211,94,0.25)", background: "rgba(244,211,94,0.06)", color: ACCENT }}>
            <Rocket className="h-3.5 w-3.5" /> UCF • Orlando, FL
          </p>
          <m.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Daniel Quinonez
          </m.h1>
          <m.p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Software engineer attending the University of Central Florida focused on obtaining a job that revolves around my interests.
          </m.p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition" style={{ borderColor: "rgba(147,197,253,0.25)", background: "rgba(147,197,253,0.08)" }}>
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}

// ===== Sticky Timeline (scrollytelling) =====
function StickyTimeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-28">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Experience</h2>
          <m.div style={{ scale: progress }} className="origin-right text-xs rounded-full px-2 py-0.5" style={{ border: "1px solid rgba(147,197,253,0.25)", background: "rgba(147,197,253,0.08)" }}>
            Scrolling timeline
          </m.div>
        </div>
        <div ref={ref} className="relative grid md:grid-cols-[340px_1fr] gap-8">
          <div className="md:sticky md:top-24 md:self-start">
            <m.div style={{ scale: progress }} className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(147,197,253,0.15)" }}>
              <m.div style={{ width: useTransform(progress, (v) => `${v * 100}%`), background: ACCENT }} className="h-full" />
            </m.div>
            <p className="mt-3 text-slate-400 text-sm">Scroll to progress through roles</p>
          </div>
          <ul className="space-y-10">
            {experiences.map((exp, i) => (
              <m.li key={exp.org} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl p-5" style={{ border: "1px solid rgba(147,197,253,0.2)", background: "rgba(147,197,253,0.06)" }}>
                <div className="flex flex-wrap items-center gap-3">
                  {/* Logo + org */}
                  {exp.logo ? (
                    <Image src={exp.logo} alt={`${exp.org} logo`} width={56} height={56} className="h-25 w-25 md:h-15 md:w-15 rounded-md object-contain ring-1 " />
                  ) : (
                    <span className="grid place-items-center h-10 w-10 md:h-12 md:w-12 rounded-md ring-1 ring-white/10 shrink-0"><Building2 className="h-5 w-5" /></span>
                  )}
                  <h3 className="font-semibold">{exp.role}</h3>
                  <span className="text-slate-400">@ {exp.org}</span>
                  <span className="ml-auto text-xs rounded-full px-2 py-0.5" style={{ border: "1px solid rgba(244,211,94,0.35)", background: "rgba(244,211,94,0.08)", color: ACCENT }}>
                    {exp.time}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-slate-300 list-disc list-inside">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </m.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ===== Tilt Card (Projects) with animated gradient border =====
function TiltCard({ children }: { children: React.ReactNode }) {
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 10; // tilt degrees
        const y = ((e.clientY - r.top) / r.height - 0.5) * -10;
        setT({ x, y });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className="[perspective:1100px]"
    >
      <m.div style={{ rotateX: t.y, rotateY: t.x }} className="relative rounded-2xl p-[1px]">
        {/* animated gradient border */}
        <m.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `conic-gradient(from 180deg at 50% 50%, ${ACCENT}33, ${ACCENT_SOFT}66, transparent 60%)`,
            filter: "blur(10px)",
            opacity: 0.7,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="relative rounded-2xl p-5 backdrop-blur-sm"
          style={{ border: "1px solid rgba(147,197,253,0.2)", background: "rgba(147,197,253,0.06)" }}
        >
          {children}
        </div>
      </m.div>
    </div>
  );
}


// ===== Dev Smoke Tests (run only in development) =====
function runSmokeTests() {
  console.assert(socials.length >= 1, "Expected at least 1 social link");
  console.assert(projects.length >= 1, "Expected at least 1 project");
  console.assert(experiences.length >= 1, "Expected at least 1 experience");
  console.assert("/Daniel_QuinonezResume.pdf".endsWith(".pdf"), "Resume link should point to a PDF");
}

// ===== Scroll progress (flashy but subtle) =====
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      style={{ scaleX: scrollYProgress, originX: 0, background: ACCENT }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full"
      aria-hidden
    />
  );
}

// ===== Mouse spotlight (cursor-follow glow) =====
function MouseSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  return (
    <div onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })} className="pointer-events-none fixed inset-0 z-[40]" aria-hidden>
      <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-2xl" style={{ left: pos.x, top: pos.y, width: 240, height: 240, background: ACCENT_SOFT }} />
    </div>
  );
}
// ===== Particles background =====
function Particles() {
  const COUNT = 64;
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {Array.from({ length: COUNT }).map((_, i) => {
        const size = i % 10 === 0 ? 4 : 2;                // a few slightly bigger dots
        const left = (i * 137) % 100;                     // pseudo-random spread
        const top = (i * 53) % 100;
        const color = i % 3 === 0 ? ACCENT : ACCENT_SOFT; // alternate yellow/sky
        return (
          <m.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: color,
              opacity: 0.25,
              filter: i % 10 === 0 ? "blur(1px)" : undefined,
            }}
            animate={{ y: [0, -1200], opacity: [0, 0.8, 0] }}
            transition={{
              duration: 20 + (i % 12),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}


export default function Page() {
  if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
    try { runSmokeTests(); } catch (e) { console.warn("Smoke tests failed:", e); }
  }

  return (
    <main className="min-h-screen text-slate-100 selection:text-slate-900" style={{ backgroundColor: "#0B1220", caretColor: ACCENT }}>
      {/* Particles background */}
      <Particles />

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur border-b" style={{ background: "rgba(11,18,32,0.6)", borderColor: "rgba(147,197,253,0.2)" }}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">DQ</a>
          <nav className="hidden md:flex gap-6 text-sm">
            {[ ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"] ].map(([label, href]) => (
              <a key={label} href={href} className="opacity-80 hover:opacity-100 transition">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="/Daniel_QuinonezResume.pdf" className="inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm" style={{ border: "1px solid rgba(244,211,94,0.35)", background: "rgba(244,211,94,0.08)", color: ACCENT }} aria-label="Download resume">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Mouse spotlight */}
      <MouseSpotlight />

      {/* Parallax Hero */}
      <ParallaxHero />

      {/* About */}
      <section id="about" className="border-t" style={{ borderColor: "rgba(147,197,253,0.15)" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">About Me</h2>
            <m.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-300"
            >
              I’m a Computer Science student at the University of Central Florida (Grad. 2026). I am dedicated to learning new fields in the computer science industry and would like to specialize in Cybersecurity, Analytics, Defense, and SWE.
            </m.p>
            <div className="flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4" /> Orlando, FL</div>
            <div className="flex items-center gap-2 text-sm text-slate-400"><GraduationCap className="h-4 w-4" /> B.S. in Computer Science — UCF (2022–2026)</div>
          </div>
          <ul className="space-y-3 text-slate-300">
            {["Passionate about clean design, performance, and strong UI/UX.", "Comfortable across the stack: TS/JS, React, Node, and C/C++ for embedded.", "Willing to learn any technological field that'll broaden my knowledge."].map((t, i) => (
              <m.li key={t} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex gap-3">
                <span className="mt-1.5">•</span>{t}
              </m.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sticky Timeline Experience */}
      <StickyTimeline />

      {/* Projects with images + emojis */}
      <section id="projects" className="border-t" style={{ borderColor: "rgba(147,197,253,0.15)" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Projects</h2>
            <a href="https://github.com/Daniel-Quinonez" target="_blank" rel="noreferrer" className="text-sm opacity-80 hover:opacity-100">View GitHub →</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((proj, i) => (
              <m.article key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-20%" }} transition={{ delay: i * 0.05 }}>
                <TiltCard>
                  {proj.image && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                      {/* If using Next.js, Image optimizes automatically */}
                      <Image src={proj.image} alt={`${proj.title} screenshot`} width={1200} height={720} className="w-full h-48 object-cover" />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold flex items-center gap-2"><span className="text-2xl" aria-hidden>{proj.emoji}</span>{proj.title}</h3>
                    <span className="text-xs" style={{ color: ACCENT }}>{proj.time}</span>
                  </div>
                  <p className="mt-2 text-slate-300">{proj.blurb}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {proj.stack.map((s) => (
                      <span key={s} className="text-xs rounded-full px-2 py-1 opacity-90" style={{ border: "1px solid rgba(147,197,253,0.25)", background: "rgba(147,197,253,0.08)" }}>{s}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    {proj.links.map((l) => (
                      <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm hover:underline">
                        <PlayCircle className="h-4 w-4" /> {l.label}
                      </a>
                    ))}
                  </div>
                </TiltCard>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-t" style={{ borderColor: "rgba(147,197,253,0.15)" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <m.span key={skill} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }} className="rounded-xl px-3 py-1.5 text-sm opacity-90" style={{ border: "1px solid rgba(147,197,253,0.25)", background: "rgba(147,197,253,0.08)" }}>
                {skill}
              </m.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t" style={{ borderColor: "rgba(147,197,253,0.15)" }}>
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl font-bold">Let’s build something</h2>
          <m.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-3 max-w-2xl text-slate-300">
            I’m open to new grad and internship opportunities. If you’ve got an idea, a role, or a problem that needs shipping — I’d love to chat.
          </m.p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="mailto:da336798@ucf.edu?subject=Opportunity%20for%20Daniel%20Quinonez" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-slate-900 hover:opacity-95" style={{ background: ACCENT }}>
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a href="https://linkedin.com/in/dannyquinonez" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm" style={{ border: "1px solid rgba(147,197,253,0.25)", background: "rgba(147,197,253,0.08)" }}>
              <Linkedin className="h-4 w-4" /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t" style={{ borderColor: "rgba(147,197,253,0.15)" }}>
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center gap-2 md:justify-between">
          <div className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> Actively seeking opportunities</div>
          <p>© {new Date().getFullYear()} Daniel Quinonez.</p>
        </div>
      </footer>
    </main>
  );
}
