"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Note, RevealLine, ease } from "./primitives"

/** Top of an inner page: back link + corner notes, then giant title lines on hairlines. */
export function PageHero({
  lines,
  notes,
  back,
  children,
}: {
  lines: string[]
  notes: [ReactNode, ReactNode]
  back?: { href: string; label: string }
  children?: ReactNode
}) {
  return (
    <section className="px-4 md:px-6 pt-20 md:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        className="flex items-start justify-between gap-6"
      >
        {back ? (
          <Link href={back.href} className="note uppercase tracking-wide hover:underline underline-offset-4">
            ← {back.label}
          </Link>
        ) : (
          <Note>{notes[0]}</Note>
        )}
        <Note align="right">{notes[1]}</Note>
      </motion.div>

      <h1 className="mt-16 md:mt-24">
        {lines.map((line, i) => (
          <RevealLine key={line} className="display-lg" delay={0.08 * i}>
            {line}
          </RevealLine>
        ))}
      </h1>

      {children}
    </section>
  )
}
