"use client";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Mail, FolderOpen, Github, Twitter, Linkedin } from "lucide-react";

const tickerWords = ["FRONTEND DEVELOPER", "TECHNICAL WRITER", "OPEN TO WORK", "NEXT.JS", "REACT"];
const tickerItems = [...tickerWords, ...tickerWords, ...tickerWords];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="container relative z-10 px-4 pt-36 pb-16 w-full">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-black font-bold text-xs tracking-[0.2em] border-4 border-black rounded-none font-mono shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 rounded-none bg-[#34D399] animate-pulse" />
              AVAILABLE FOR WORK
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[1.1] text-center mb-6 font-zalando text-black">
            <motion.span variants={item} className="block mb-3">
              I&apos;m{" "}
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                Nweke Manuchimso
              </span>
            </motion.span>
            <motion.span variants={item} className="block mb-3">
              a{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Front-End Developer
              </span>
            </motion.span>
            <motion.span variants={item} className="block">
              &amp;{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] rotate-1">
                Technical Writer
              </span>
            </motion.span>
          </h1>

          <motion.p variants={item} className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-zalando">
            Next.js &amp; React Developer based in Nigeria, building performant, responsive web experiences and writing technical content that developers actually use.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <Mail className="w-5 h-5" /> Get in Touch
            </Link>
            <Link href="/project"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-base border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <FolderOpen className="w-5 h-5" /> View My Work
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex justify-center gap-3">
            {[
              { href: "https://github.com/Manuel-co", icon: Github, label: "GitHub", bg: "bg-black" },
              { href: "https://x.com/NwekeManuchimso", icon: Twitter, label: "X", bg: "bg-[#2F81F7]" },
              { href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", icon: Linkedin, label: "LinkedIn", bg: "bg-[#6366F1]" },
            ].map(({ href, icon: Icon, label, bg }) => (
              <Link key={href} href={href} target="_blank" aria-label={label}
                className={`w-11 h-11 flex items-center justify-center ${bg} text-white border-4 border-black rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

            
    </section>
  );
}
