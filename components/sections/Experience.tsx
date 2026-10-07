"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Label, Note, RevealLine, ease } from "../desk/primitives"

const experiences = [
  {
    company: "100Pay",
    role: "Frontend Developer",
    period: "Aug 2024 — Dec 2025",
    type: "Full-time",
    url: "https://100pay.co",
    description: "Worked on the frontend of Africa's largest digital currency infrastructure, building interfaces for payments, developer tools, and the 100Pay ecosystem used by 100K+ developers and businesses globally.",
    bullets: [
      "Built and maintained responsive web interfaces for the 100Pay dashboard and developer portal using Next.js and Tailwind CSS.",
      "Collaborated with the design and backend teams to implement payment flows, SDK documentation pages, and user-facing finance tools.",
      "Optimized Core Web Vitals and frontend performance across key product pages.",
    ],
  },
  {
    company: "Texa Devs",
    role: "Frontend Developer",
    period: "2022 — 2024",
    type: "Full-time",
    url: null,
    description: "Developed and shipped web applications for clients across various industries, focusing on responsive design, performance, and clean UI implementation.",
    bullets: [
      "Built client-facing web applications using React and Next.js with a focus on accessibility and responsive design.",
      "Translated Figma designs into pixel-perfect, production-ready components.",
      "Maintained and improved existing codebases, reducing load times and improving overall UX.",
    ],
  },
  {
    company: "OpenReplay",
    role: "Technical Writer",
    period: "Jul 2022 — Apr 2024",
    type: "Freelance",
    url: "https://blog.openreplay.com/authors/nweke-emmanuel-manuchimso/",
    description: "Wrote in-depth technical articles and tutorials for OpenReplay's engineering blog, covering React, JavaScript, CSS, and modern frontend development topics.",
    bullets: [
      "Published 10+ technical articles including tutorials on React performance, CSS animations, Alpine.js, HTMX, and JavaScript animation libraries.",
      "Wrote beginner-to-intermediate guides that helped developers understand and implement complex frontend concepts.",
      "Consistently delivered well-researched, accurate content that ranked in search results and drove organic traffic.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 md:px-6 py-28 md:py-36">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Label index="04">Track record</Label>
        <Note align="right">Startups &amp; product teams. Real products, real people.</Note>
      </div>

      <RevealLine className="display-lg">A breath.</RevealLine>
      <RevealLine className="display-lg text-ink/35" delay={0.08}>Take a look.</RevealLine>

      <div className="mt-16">
        {experiences.map((exp, i) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease, delay: i * 0.05 }}
            className="grid md:grid-cols-[12rem_1fr_1.2fr] gap-6 md:gap-10 border-b border-ink/80 py-10 first:border-t"
          >
            <div className="note uppercase tracking-wide">
              <p>{exp.period}</p>
              <p className="text-ink/50">{exp.type}</p>
            </div>

            <div>
              <h3 className="display-md">
                {exp.url ? (
                  <Link href={exp.url} target="_blank" className="hover:underline decoration-2 underline-offset-[0.12em]">
                    {exp.company} ↗
                  </Link>
                ) : (
                  exp.company
                )}
              </h3>
              <p className="mt-3 inline-flex rounded-full border border-ink px-3 py-1 text-xs">{exp.role}</p>
            </div>

            <div>
              <p className="text-base leading-relaxed mb-5">{exp.description}</p>
              <ul className="space-y-3">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
