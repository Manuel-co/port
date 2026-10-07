"use client";

import Link from "next/link";
import Image from "next/image";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "@/components/desk/PageHero";
import { Note, RevealLine } from "@/components/desk/primitives";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsSorted } from "@/lib/projects";

const PER_PAGE = 6;

const fileName = (title: string) =>
  title.split("—")[0].trim().toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "") + ".PNG";

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return projectsSorted.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setPage(1);
  };

  const goTo = (n: number) => {
    setPage(n);
    document.getElementById("folder")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <PageHero
          lines={["Every", "project", "I kept"]}
          notes={["Web development & technical writing, newest first.", <>This folder holds {projectsSorted.length} builds.</>]}
          back={{ href: "/", label: "Home" }}
        />

        {/* Search */}
        <section id="folder" className="px-4 md:px-6 mt-16 scroll-mt-20">
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 border-b border-ink/80">
            <label className="block">
              <span className="sr-only">Search projects</span>
              <input
                type="text"
                placeholder="Search the folder…"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent py-4 font-display font-semibold uppercase tracking-[-0.03em] text-[clamp(1.5rem,4vw,3rem)] outline-none placeholder:text-ink/25"
              />
            </label>
            <p className="note uppercase tracking-wide pb-5 tabular-nums">
              {String(filtered.length).padStart(2, "0")} item{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Grid of files */}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/80 border border-ink/80">
            <AnimatePresence mode="popLayout">
              {paginated.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-paper"
                >
                  <Link href={`/project/${project.slug}`} className="group flex h-full flex-col p-4 md:p-5">
                    <div className="relative aspect-[4/3] overflow-hidden bg-white">
                      <Image src={project.image} alt={project.title} fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="mt-3 flex justify-between gap-4 text-[10px] tracking-wide">
                      <span className="truncate">{fileName(project.title)}</span>
                      <span className="text-ink/50">
                        {String((page - 1) * PER_PAGE + index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display font-semibold uppercase tracking-[-0.03em] leading-[0.95] text-2xl md:text-3xl group-hover:underline decoration-2 underline-offset-4">
                      {project.title.split("—")[0].trim()}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70 line-clamp-3">{project.description}</p>
                    <p className="mt-auto pt-6 note text-ink/50">
                      {project.technologies.slice(0, 4).join(" · ")}
                      {project.technologies.length > 4 && ` +${project.technologies.length - 4}`}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="py-20 flex flex-col items-center gap-5">
              <Note>Nothing saved under that name.</Note>
              <button onClick={() => handleSearch("")} className="pill">Clear search</button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between note uppercase tracking-wide">
              <button onClick={() => goTo(Math.max(1, page - 1))} disabled={page === 1}
                className="py-3 hover:underline underline-offset-4 disabled:opacity-30">← Prev</button>
              <div className="flex gap-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => goTo(n)}
                    className={`tabular-nums px-2 py-3 ${n === page ? "underline underline-offset-4" : "text-ink/40 hover:text-ink"}`}>
                    {String(n).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <button onClick={() => goTo(Math.min(totalPages, page + 1))} disabled={page === totalPages}
                className="py-3 hover:underline underline-offset-4 disabled:opacity-30">Next →</button>
            </div>
          )}
        </section>

        {/* CTA */}
        <section className="bleed-ink mt-28 bg-ink text-paper px-4 md:px-6 pt-20 pb-10">
          <Link href="/contact" className="group block">
            <RevealLine inverse className="display-lg">Want one</RevealLine>
            <RevealLine inverse className="display-lg" delay={0.08}>
              <span className="inline-flex items-baseline gap-[0.2em]">
                of your own? <span className="transition-transform duration-500 group-hover:-rotate-45">→</span>
              </span>
            </RevealLine>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
