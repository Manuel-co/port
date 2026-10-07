"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { DocIcon, Label, Note, RevealLine, ease } from "../desk/primitives"

const articles = [
  {
    tag: "Tutorial",
    file: "FILE_SHARING_WITH_PERMIT_IO.MD",
    title: "Building a Next-Generation File Sharing App with Next.js and Permit.io",
    description: "A step-by-step guide to building a secure file-sharing web application using Next.js and Permit.io with role-based access control.",
    href: "https://medium.com/@manuchimsoemmanuel2k/building-a-next-generation-file-sharing-app-with-next-js-and-permit-io-00b8fb7e66bf",
    source: "Medium",
  },
  {
    tag: "Tutorial",
    file: "ROUTING_WITH_REACT_LOCATION.MD",
    title: "Routing in React with React Location",
    description: "Learn how to use React Location to handle routing in a React application by building a food recipe web app.",
    href: "https://blog.openreplay.com/routing-in-react-with-react-location/",
    source: "OpenReplay",
  },
  {
    tag: "Article",
    file: "HTMX_VS_VUE_AND_REACT.MD",
    title: "HTMX vs. Vue and React",
    description: "A deep dive comparing HTMX with modern JavaScript frameworks — when to use each and why.",
    href: "https://blog.openreplay.com/",
    source: "OpenReplay",
  },
]

export function Blog() {
  return (
    <section id="writing" className="px-4 md:px-6 py-28 md:py-36">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Label index="05">Writing</Label>
        <Note align="right">Only the useful parts. Revisited often.</Note>
      </div>

      <RevealLine className="display-lg">Notes</RevealLine>
      <RevealLine className="display-lg" delay={0.08}>I left open</RevealLine>

      <div className="mt-16 grid md:grid-cols-3 gap-px bg-ink/80 border border-ink/80">
        {articles.map((a, i) => (
          <motion.div
            key={a.href + a.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            className="bg-paper"
          >
            <Link href={a.href} target="_blank" className="group flex h-full flex-col p-6 md:p-8 transition-colors hover:bg-ink hover:text-paper">
              <div className="flex items-start justify-between">
                <DocIcon ext="md" className="w-10 transition-transform duration-300 group-hover:-rotate-6" />
                <span className="note uppercase tracking-wide opacity-60">{a.tag} / {a.source}</span>
              </div>
              <p className="mt-6 text-[10px] tracking-wide opacity-60 break-all">{a.file}</p>
              <h3 className="mt-2 font-display font-semibold uppercase tracking-[-0.025em] leading-[1] text-2xl md:text-[1.75rem]">
                {a.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed opacity-70">{a.description}</p>
              <span className="mt-auto pt-8 note uppercase tracking-wide">Open file →</span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link href="/blog" className="pill">Browse all articles</Link>
      </div>
    </section>
  )
}
