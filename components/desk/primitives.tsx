"use client"

import { useEffect, useRef, useState } from "react"
import { animate, motion, useInView } from "framer-motion"
import type { ReactNode } from "react"

export const ease = [0.16, 1, 0.3, 1] as const

/**
 * True only for a real mouse/trackpad. Dragging is enabled just for these — on touch screens
 * a draggable element swallows the swipe and the page stops scrolling.
 */
export function useFinePointer() {
  const [fine, setFine] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)")
    const update = () => setFine(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return fine
}

/** Small two-line annotation with a solid bullet — the clicktokeep corner notes. */
export function Note({
  children,
  align = "left",
  className = "",
  inverse = false,
}: {
  children: ReactNode
  align?: "left" | "right"
  className?: string
  inverse?: boolean
}) {
  const dot = (
    <span className={`mt-[3px] h-2 w-2 shrink-0 rounded-full ${inverse ? "bg-paper" : "bg-ink"}`} />
  )
  return (
    <div className={`flex gap-3 note ${align === "right" ? "flex-row-reverse text-right" : ""} ${className}`}>
      {dot}
      <p className="max-w-[16ch]">{children}</p>
    </div>
  )
}

/** Blue macOS-style folder. */
export function FolderIcon({ className = "w-14" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} aria-hidden>
      <path d="M2 8a4 4 0 0 1 4-4h17l5 5h30a4 4 0 0 1 4 4v3H2z" fill="#5BB4EC" />
      <path d="M2 14a4 4 0 0 1 4-4h52a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" fill="#7DCBF5" />
      <path d="M2 18h60" stroke="#5BB4EC" strokeWidth="1" />
    </svg>
  )
}

/** Plain document icon with a folded corner and a file-extension label. */
export function DocIcon({ ext, className = "w-12" }: { ext: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 60" className={className} aria-hidden>
      <path d="M4 2h28l12 12v42a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" fill="#fff" stroke="#000" strokeWidth="1.2" />
      <path d="M32 2v12h12" fill="none" stroke="#000" strokeWidth="1.2" />
      <text x="23" y="44" textAnchor="middle" fontSize="8" fontWeight="700" fontFamily="Inter Tight, Arial, sans-serif">
        {ext.slice(0, 4).toUpperCase()}
      </text>
    </svg>
  )
}

/** Zero-padded number that counts up once when it enters the viewport. */
export function Counter({ to, pad = 2, suffix = "" }: { to: number; pad?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, to])

  return (
    <span ref={ref} className="tabular-nums">
      {String(value).padStart(pad, "0")}
      {suffix}
    </span>
  )
}

/** A line of giant type that slides up from behind a hairline mask. */
export function RevealLine({
  children,
  className = "",
  delay = 0,
  rule = true,
  inverse = false,
}: {
  children: ReactNode
  className?: string
  delay?: number
  rule?: boolean
  inverse?: boolean
}) {
  return (
    // The observer sits on the mask: the clipped child itself never intersects until it moves.
    <motion.div
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.3 }}
      className={`overflow-hidden ${rule ? `border-b ${inverse ? "border-paper/70" : "border-ink/80"}` : ""}`}
    >
      <motion.div
        variants={{ hidden: { y: "105%" }, shown: { y: "0%" } }}
        transition={{ duration: 0.9, ease, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

/** Section label like "( 02 ) — THE DESKTOP" */
export function Label({ index, children, inverse = false }: { index: string; children: ReactNode; inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-3 note uppercase tracking-wide ${inverse ? "text-paper/70" : "text-ink/60"}`}>
      <span>( {index} )</span>
      <span className={`h-px w-10 ${inverse ? "bg-paper/50" : "bg-ink/40"}`} />
      <span>{children}</span>
    </div>
  )
}
