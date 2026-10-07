"use client";

import Link from "next/link";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { PageHero } from "@/components/desk/PageHero";
import { DocIcon, Label, Note, RevealLine } from "@/components/desk/primitives";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PER_PAGE = 8;

const articles = [
  {
    title: "Building a Next-Generation File Sharing App with Next.js and Permit.io",
    description: "A step-by-step guide to building a secure file-sharing web application using Next.js and Permit.io with role-based access control.",
    category: "Tutorial",
    link: "https://medium.com/@manuchimsoemmanuel2k/building-a-next-generation-file-sharing-app-with-next-js-and-permit-io-00b8fb7e66bf",
  },
  {
    title: "Translate Subtitles using the LibreTranslate API",
    description: "Build a subtitle translator app that can translate SRT files to different languages using the LibreTranslate API.",
    category: "Tutorial",
    link: "https://blog.openreplay.com/translate-subtitles-using-the-libre-translate-api/",
  },
  {
    title: "Creating Stunning Particle Animations with React and TsParticles",
    description: "React TsParticles is a popular open-source library that enables you to integrate particle animations into your React applications easily.",
    category: "Tutorial",
    link: "https://blog.openreplay.com/particle-animations-with-react-tsparticles/",
  },
  {
    title: "Routing in React with React Location",
    description: "Learn how to use React Location to handle routing in a React application by building a food recipe web app.",
    category: "Tutorial",
    link: "https://blog.openreplay.com/routing-in-react-with-react-location/",
  },
  {
    title: "HTMX vs. Vue and React — Pros and Cons",
    description: "A deep dive comparing HTMX with modern JavaScript frameworks — when to use each and why.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/htmx-vs-vue-and-react--pros-and-cons/",
  },
  {
    title: "Optimizing React's Performance",
    description: "Application performance optimization is crucial for maintaining a pleasant user experience. Learn key techniques to speed up your React apps.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/optimizing-reacts-performance/",
  },
  {
    title: "Five Alternatives to GitHub Copilot",
    description: "GitHub Copilot isn't the only AI coding tool available. Here are five alternatives worth trying.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/five-alternatives-to-github-copilot/",
  },
  {
    title: "Five Headless CMS to try in 2023",
    description: "A roundup of five headless CMS platforms worth exploring for your next project.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/five-headless-cms-to-try-in-2023/",
  },
  {
    title: "Implementing CSS for Older Browsers",
    description: "How to write CSS that gracefully degrades for older browsers while still using modern features.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/implementing-css-for-older-browsers/",
  },
  {
    title: "Getting Started with Alpine.js",
    description: "Alpine.js is a lightweight JavaScript framework for adding reactive behavior to HTML. Here's how to get started.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/getting-started-with-alpine-js/",
  },
  {
    title: "Five JavaScript Animation Libraries to Try Out",
    description: "A curated list of five JavaScript animation libraries to add visual interest to your web projects.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/five-javascript-animation-libraries-to-try-out/",
  },
  {
    title: "All About CSS Animations",
    description: "A comprehensive guide to CSS animations — keyframes, transitions, timing functions, and practical examples.",
    category: "Technical Blog",
    link: "https://blog.openreplay.com/all-about-css-animations/",
  },
];

const platforms = [
  { name: "OpenReplay", url: "https://blog.openreplay.com/authors/nweke-emmanuel-manuchimso/" },
  { name: "Medium", url: "https://medium.com/@manuchimsoemmanuel2k" },
  { name: "Dev.to", url: "https://dev.to/" },
];

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

const fileName = (title: string) =>
  title.toUpperCase().replace(/[^A-Z0-9]+/g, "_").replace(/^_|_$/g, "").slice(0, 40) + ".MD";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = articles.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchSearch = a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    const matchCat = selectedCategory === "All" || a.category === selectedCategory;
    return matchSearch && matchCat;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleSearch = (q: string) => { setSearchQuery(q); setPage(1); };
  const handleCategory = (cat: string) => { setSelectedCategory(cat); setPage(1); };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <PageHero
          lines={["Notes", "I left open"]}
          notes={["Tutorials and essays on React, CSS and the web.", <>{articles.length} files across OpenReplay &amp; Medium.</>]}
          back={{ href: "/", label: "Home" }}
        />

        <section className="px-4 md:px-6 mt-16">
          {/* Search + filters */}
          <div className="grid md:grid-cols-[1fr_auto] items-end gap-6 border-b border-ink/80">
            <label className="block">
              <span className="sr-only">Search articles</span>
              <input
                type="text"
                placeholder="Search the notes…"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent py-4 font-display font-semibold uppercase tracking-[-0.03em] text-[clamp(1.5rem,4vw,3rem)] outline-none placeholder:text-ink/25"
              />
            </label>
            <div className="flex flex-wrap gap-2 pb-5">
              {categories.map((cat) => (
                <button key={cat} onClick={() => handleCategory(cat)}
                  className={`rounded-full border border-ink px-4 py-1.5 text-xs transition-colors ${
                    selectedCategory === cat ? "bg-ink text-paper" : "hover:bg-ink/5"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-3 note uppercase tracking-wide text-ink/50 tabular-nums">
            {String(filtered.length).padStart(2, "0")} article{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Rows */}
          <div className="mt-8 border-t border-ink/80">
            <AnimatePresence mode="popLayout">
              {paginated.map((article, index) => (
                <motion.div
                  key={article.title}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                >
                  <Link href={article.link} target="_blank"
                    className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[3rem_auto_1.6fr_1fr_auto] items-center gap-4 md:gap-6 border-b border-ink/80 py-5 md:py-6 transition-colors hover:bg-ink hover:text-paper md:px-2">
                    <span className="note hidden md:block tabular-nums opacity-60">
                      {String((page - 1) * PER_PAGE + index + 1).padStart(2, "0")}
                    </span>
                    <DocIcon ext="md" className="w-8 md:w-9 transition-transform duration-300 group-hover:-rotate-6" />
                    <div className="min-w-0">
                      <p className="text-[10px] tracking-wide opacity-50 truncate">{fileName(article.title)}</p>
                      <h2 className="mt-1 font-display font-semibold uppercase tracking-[-0.025em] leading-[1] text-lg md:text-2xl">
                        {article.title}
                      </h2>
                    </div>
                    <p className="hidden md:block text-sm leading-relaxed opacity-70 line-clamp-2">{article.description}</p>
                    <span className="flex items-center gap-4">
                      <span className="note uppercase tracking-wide hidden lg:inline opacity-60">{article.category}</span>
                      <span className="text-xl transition-transform duration-300 group-hover:-rotate-45">→</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="py-20 flex flex-col items-center gap-5">
              <Note>No notes match that search.</Note>
              <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="pill">Clear filters</button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-between note uppercase tracking-wide">
              <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}
                className="hover:underline underline-offset-4 disabled:opacity-30">← Prev</button>
              <div className="flex gap-4">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <button key={n} onClick={() => setPage(n)}
                    className={`tabular-nums ${n === page ? "underline underline-offset-4" : "text-ink/40 hover:text-ink"}`}>
                    {String(n).padStart(2, "0")}
                  </button>
                ))}
              </div>
              <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                className="hover:underline underline-offset-4 disabled:opacity-30">Next →</button>
            </div>
          )}
        </section>

        {/* Platforms */}
        <section className="mt-28 bg-ink text-paper px-4 md:px-6 pt-20 pb-10">
          <Label index="→" inverse>Read more on</Label>
          <div className="mt-8">
            {platforms.map(({ name, url }, i) => (
              <Link key={name} href={url} target="_blank" className="group block">
                <RevealLine inverse className="display-lg" delay={i * 0.08}>
                  <span className="inline-flex items-baseline gap-[0.2em] transition-transform duration-500 group-hover:translate-x-4">
                    {name} <span className="transition-transform duration-500 group-hover:-rotate-45">↗</span>
                  </span>
                </RevealLine>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
