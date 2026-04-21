"use client";

import Link from "next/link";
import { ExternalLink, Search, Filter, BookOpen } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categoryColors: Record<string, string> = {
  Tutorial: "bg-[#6366F1]",
  "Technical Blog": "bg-[#2F81F7]",
};

const cardAccents = [
  "border-l-[#6366F1]",
  "border-l-[#FF6B7A]",
  "border-l-[#2F81F7]",
  "border-l-[#FCD34D]",
  "border-l-[#34D399]",
  "border-l-[#F97316]",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      link: "#",
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

  const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  const filtered = articles.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchSearch = a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.category.toLowerCase().includes(q);
    const matchCat = selectedCategory === "All" || a.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container max-w-6xl mx-auto px-4">

          {/* Page header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F81F7] text-white font-bold text-sm border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <BookOpen className="w-4 h-4" /> Writing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-zalando text-black">
              Articles &amp;{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                News
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Technical articles, tutorials, and insights about web development, React, and more.
            </p>
          </div>

          {/* Search + Filter */}
          <div className="mb-12 space-y-5 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-4 border-black rounded-2xl text-black placeholder-black/30 font-medium focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-0.5 focus:translate-y-0.5 transition-all"
              />
            </div>

            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-black/40" />
              {categories.map((cat) => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm font-bold border-4 border-black rounded-xl transition-all ${
                    selectedCategory === cat
                      ? "bg-black text-white shadow-[3px_3px_0px_0px_rgba(99,102,241,1)]"
                      : "bg-white text-black/50 hover:text-black hover:bg-black/5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
                  }`}>
                  {cat}
                </button>
              ))}
            </div>

            <p className="text-center text-sm font-bold text-black/40">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence>
              {filtered.map((article, index) => (
                <motion.div key={article.title}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="h-full">
                  <div className={`h-full flex flex-col bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 border-l-8 ${cardAccents[index % cardAccents.length]}`}>
                    <div className="flex flex-col flex-1 p-6">
                      <span className={`inline-block ${categoryColors[article.category] ?? "bg-black"} text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-black mb-4 w-fit`}>
                        {article.category}
                      </span>
                      <h2 className="text-base font-bold text-black mb-3 leading-snug line-clamp-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-6">
                        {article.description}
                      </p>
                      <div className="mt-auto">
                        <Link href={article.link} target="_blank"
                          className={`inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 w-full border-4 border-black rounded-xl transition-all ${
                            article.link === "#"
                              ? "bg-black/10 text-black/30 cursor-not-allowed pointer-events-none"
                              : "bg-black text-white shadow-[3px_3px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                          }`}>
                          <ExternalLink className="w-4 h-4" /> Read Article
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-black/40 font-bold mb-4">No articles found.</p>
              <button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                className="px-6 py-3 bg-black text-white font-bold border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                Clear Filters
              </button>
            </div>
          )}

          {/* Platforms CTA */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-center mb-8 font-zalando">
              Read more on these{" "}
              <span className="bg-[#FCD34D] text-black px-2 py-0.5 inline-block border-4 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                platforms
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                { name: "OpenReplay", url: "https://blog.openreplay.com/", color: "bg-[#FF6B7A]" },
                { name: "Medium", url: "https://medium.com/@manuchimsoemmanuel2k", color: "bg-[#6366F1]" },
                { name: "Dev.to", url: "https://dev.to/", color: "bg-[#2F81F7]" },
              ].map(({ name, url, color }) => (
                <Link key={name} href={url} target="_blank"
                  className={`${color} text-white font-bold text-center py-5 px-6 border-4 border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-2`}>
                  {name} <ExternalLink className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
