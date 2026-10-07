"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FolderIcon, Note, RevealLine, ease } from "@/components/desk/primitives";

const links = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main className="min-h-[100svh] flex flex-col px-4 md:px-6 pt-20 pb-10">
        <div className="flex justify-between gap-6">
          <Note>This file was moved, deleted, or never saved.</Note>
          <Note align="right">Error 404 — not found.</Note>
        </div>

        <h1 className="mt-auto pt-16">
          <RevealLine className="display-xl">404</RevealLine>
          <RevealLine className="display-lg" delay={0.1}>Lost file</RevealLine>
        </h1>

        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <nav className="flex flex-wrap gap-3">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="pill">{label}</Link>
            ))}
          </nav>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, -6, 4, 0] }}
            transition={{ duration: 1.2, ease, delay: 0.6 }}
            className="flex flex-col items-center gap-1"
          >
            <FolderIcon className="w-14" />
            <span className="note uppercase tracking-wide text-ink/50">Empty</span>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
