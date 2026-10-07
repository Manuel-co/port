"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import { Counter, Label, Note, ease, useFinePointer } from "../desk/primitives"

// Each line of the statement is offset differently, like the scattered copy on clicktokeep.
const statement: { text: string; indent: string; light?: boolean }[] = [
  { text: "Step into a desk", indent: "md:pl-0" },
  { text: "where every click", indent: "md:pl-[18%]", light: true },
  { text: "uncovers", indent: "md:pl-[8%]" },
  { text: "fast pages,", indent: "md:pl-[42%]" },
  { text: "clear docs", indent: "md:pl-[22%]", light: true },
  { text: "and interfaces", indent: "md:pl-[4%]" },
  { text: "people actually use.", indent: "md:pl-[30%]" },
]

const stats = [
  { to: 3, suffix: "+", top: "I've spent", bottom: "years shipping front-ends." },
  { to: projects.length, suffix: "", top: "This desk holds", bottom: "projects built & deployed." },
  { to: 15, suffix: "+", top: "I've published", bottom: "technical articles so far." },
]

export function About() {
  const canDrag = useFinePointer()
  return (
    <section id="about" className="relative px-4 md:px-6 py-28 md:py-40">
      <Label index="01">About</Label>

      <div className="mt-14 grid md:grid-cols-[1fr_auto] gap-12">
        <div>
          {statement.map(({ text, indent, light }, i) => (
            <motion.div key={text} className="overflow-hidden" initial="hidden" whileInView="shown" viewport={{ once: true, amount: 0.5 }}>
              <motion.p
                variants={{ hidden: { y: "100%" }, shown: { y: 0 } }}
                transition={{ duration: 0.8, ease, delay: i * 0.05 }}
                className={`display-md ${indent} ${light ? "text-ink/35" : ""}`}
              >
                {text}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Memoji as a file on the desk */}
        <motion.figure
          drag={canDrag}
          dragSnapToOrigin
          whileDrag={{ scale: 1.05, rotate: -3 }}
          initial={{ opacity: 0, rotate: 4 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className={`self-end justify-self-start md:justify-self-end w-40 md:w-48 select-none ${canDrag ? "cursor-grab active:cursor-grabbing" : ""}`}
        >
          <div className="relative aspect-[4/5] bg-white border border-ink overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
              alt="Nweke Manuchimso"
              fill
              draggable={false}
              className="object-contain p-4"
            />
          </div>
          <figcaption className="note uppercase tracking-wide mt-2 text-center">Manuchimso.svg</figcaption>
        </motion.figure>
      </div>

      <div className="mt-20 grid md:grid-cols-[1fr_1.4fr] gap-10">
        <Note>Next.js &amp; React developer. Technical writer. Based in Nigeria.</Note>
        <p className="text-base md:text-lg leading-relaxed max-w-[52ch]">
          I focus on responsive web design, web performance and accessibility — and I write the kind
          of technical content that helps other developers ship better products.{" "}
          <Link href="/contact" className="underline underline-offset-4 decoration-1 hover:no-underline">
            Let&apos;s talk.
          </Link>
        </p>
      </div>

      {/* Counters */}
      <div className="mt-20 grid md:grid-cols-3 border-t border-ink/80">
        {stats.map(({ to, suffix, top, bottom }) => (
          <div key={bottom} className="border-b md:border-b-0 md:border-r last:border-r-0 border-ink/80 py-8 md:px-6 first:md:pl-0">
            <p className="note">{top}</p>
            <p className="font-display font-semibold tracking-[-0.04em] leading-none text-[clamp(4rem,10vw,9rem)]">
              <Counter to={to} suffix={suffix} />
            </p>
            <p className="note">{bottom}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
