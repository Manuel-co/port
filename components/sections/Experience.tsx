"use client"

import { Briefcase, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "100Pay",
    role: "Frontend Developer",
    period: "Aug 2024 — Dec 2025",
    type: "Full-time",
    color: "bg-[#6366F1]",
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
    color: "bg-[#FF6B7A]",
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
    color: "bg-[#2F81F7]",
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
    <section id="experience" className="py-24 bg-white text-black">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left sticky */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:sticky md:top-28"
          >
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-black/40 mb-3 uppercase">
              Track Record — 04
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black mb-6 leading-tight">
              Where I&apos;ve{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                shipped work
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              I've worked with startups and product teams across web development and digital finance, shipping real products used by real people.
            </p>
            <div className="flex items-center gap-3 px-5 py-3 bg-[#FCD34D] border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit">
              <Briefcase className="w-5 h-5 text-black" />
              <span className="font-bold text-black text-sm">3+ Years Experience</span>
            </div>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <motion.div key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border-4 border-black rounded-none overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-5 border-b-4 border-black">
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 ${exp.color} border-2 border-black rounded-none flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      <Briefcase className="w-5 h-5 text-white" />
                    </span>
                    <div>
                      <p className="font-bold text-black text-base leading-tight">{exp.company}</p>
                      <p className="text-xs text-black/40 font-semibold uppercase tracking-widest">{exp.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-black/50">{exp.period}</span>
                    {exp.url && (
                      <Link href={exp.url} target="_blank"
                        className="w-8 h-8 flex items-center justify-center bg-black text-white border-2 border-black rounded-none shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex-shrink-0">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                  <span className={`${exp.color} text-white text-xs font-bold px-3 py-1 rounded-none border-2 border-black inline-block mb-4`}>
                    {exp.role}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className={`w-2 h-2 ${exp.color} border-2 border-black rounded-none flex-shrink-0 mt-1.5`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
