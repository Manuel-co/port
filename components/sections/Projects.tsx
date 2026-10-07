"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"
import { projects, projectsSorted } from "@/lib/projects"
import { Label, Note, RevealLine, ease } from "../desk/primitives"

const featured = projectsSorted.slice(0, 6)
const strip = [...projectsSorted, ...projectsSorted]

const fileName = (title: string) =>
  title.split("—")[0].trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "") + ".PNG"

export function Projects() {
  const [hovered, setHovered] = useState<string | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 })
  const sy = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 })
  const active = featured.find((p) => p.slug === hovered)

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="px-4 md:px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <Label index="03">Selected work</Label>
          <Note align="right">This folder holds {projects.length} different builds.</Note>
        </div>
        <RevealLine className="display-lg">See what</RevealLine>
        <RevealLine className="display-lg" delay={0.08}>I built</RevealLine>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-12 overflow-hidden border-y border-ink/80 py-3">
        <div className="flex gap-3 w-max animate-marquee hover:[animation-play-state:paused]">
          {strip.map((p, i) => (
            <Link key={`${p.slug}-${i}`} href={`/project/${p.slug}`} className="group w-48 md:w-64 shrink-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image src={p.image} alt={p.title} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-1.5 text-[10px] tracking-wide truncate">{fileName(p.title)}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Project rows */}
      <div
        className="mt-16 px-4 md:px-6"
        onMouseMove={(e) => { x.set(e.clientX); y.set(e.clientY) }}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="border-t border-ink/80">
          {featured.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease, delay: i * 0.04 }}
            >
              <Link
                href={`/project/${p.slug}`}
                onMouseEnter={(e) => {
                  // Jump (not spring) to the cursor on first entry so the preview doesn't fly in from 0,0
                  if (!hovered) { sx.jump(e.clientX); sy.jump(e.clientY) }
                  x.set(e.clientX); y.set(e.clientY)
                  setHovered(p.slug)
                }}
                className="group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[4rem_1.4fr_1fr_auto] items-baseline gap-4 border-b border-ink/80 py-5 md:py-7"
              >
                <span className="note">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display font-semibold uppercase tracking-[-0.03em] leading-[0.95] text-[clamp(1.6rem,4vw,3.6rem)] transition-transform duration-500 group-hover:translate-x-3">
                  {p.title.split("—")[0].trim()}
                </span>
                <span className="note hidden md:block text-ink/60">{p.technologies.slice(0, 4).join(" · ")}</span>
                <span className="text-xl md:text-2xl transition-transform duration-300 group-hover:-rotate-45">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/project" className="pill">All projects ({projects.length})</Link>
        </div>
      </div>

      {/* Cursor-following preview (desktop only) */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="preview"
            style={{ left: sx, top: sy, x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none fixed z-40 hidden md:block w-[340px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-white">
              <Image key={active.slug} src={active.image} alt="" fill className="object-cover object-top" />
            </div>
            <p className="mt-1 text-[10px] tracking-wide">{fileName(active.title)}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
