"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FolderIcon, Note, RevealLine, ease } from "../desk/primitives";

const questions = [
  { text: "How fast does your site really load?", align: "left" as const },
  { text: "When did someone last read your docs?", align: "right" as const },
  { text: "Did you really need another template?", align: "left" as const },
  { text: "Ready to ship something that lasts?", align: "right" as const },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col px-4 md:px-6 pt-20 pb-6 overflow-hidden">
      {/* Corner questions */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
        className="grid grid-cols-2 gap-y-8 md:gap-y-14"
      >
        {questions.map(({ text, align }) => (
          <motion.div
            key={text}
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            className={align === "right" ? "justify-self-end" : ""}
          >
            <Note align={align}>{text}</Note>
          </motion.div>
        ))}
      </motion.div>

      {/* Name */}
      <h1 className="mt-auto pt-16">
        <RevealLine className="display-xl" delay={0.1}>Nweke</RevealLine>
        <RevealLine className="display-xl whitespace-nowrap text-[clamp(2.5rem,13.4vw,15rem)]" delay={0.22}>
          Manuchimso
        </RevealLine>
        <span className="sr-only"> — Front-End Developer &amp; Technical Writer</span>
      </h1>

      {/* Bottom bar */}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 items-end gap-4">
        <p className="note max-w-[34ch]">
          Front-end developer &amp; technical writer based in Nigeria. Building fast, accessible
          Next.js &amp; React experiences — currently open to work.
        </p>
        <p className="note hidden md:block text-center uppercase tracking-wide">( Scroll )</p>
        <Link href="#about" className="justify-self-end flex flex-col items-center gap-1 group" aria-label="About me">
          <motion.span whileHover={{ y: -4 }} transition={{ duration: 0.3, ease }}>
            <FolderIcon className="w-12 md:w-14" />
          </motion.span>
          <span className="note uppercase tracking-wide text-ink/60 group-hover:text-ink">Info</span>
        </Link>
      </div>
    </section>
  );
}
