"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, FolderGit2, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsSorted } from "@/lib/projects";

const PER_PAGE = 6;

const accentColors = [
  "bg-[#6366F1]", "bg-[#FF6B7A]", "bg-[#2F81F7]", "bg-[#FCD34D]",
  "bg-[#34D399]", "bg-[#F97316]", "bg-[#A855F7]",
];

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

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container max-w-6xl mx-auto px-4">

          {/* Page header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FCD34D] text-black font-bold text-sm border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <FolderGit2 className="w-4 h-4" /> Portfolio
            </div> */}
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-zalando text-black">
              My{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Projects
              </span>
            </h1>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              A collection of my work in web development and technical writing.
            </p>
          </div>

          {/* Search */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/40" />
              <input type="text" placeholder="Search by title, description, or technology..."
                value={searchQuery} onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-4 border-black rounded-2xl text-black placeholder-black/30 font-medium focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-0.5 focus:translate-y-0.5 transition-all" />
            </div>
            <p className="text-center text-sm font-bold text-black/40 mt-4">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <AnimatePresence mode="wait">
              {paginated.map((project, index) => (
                <motion.div key={project.slug}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="h-full">
                  <Link href={`/project/${project.slug}`}
                    className="h-full flex flex-col bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    <div className={`relative h-48 shrink-0 ${accentColors[index % accentColors.length]}`}>
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-base font-bold text-black mb-2 leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-[#6366F1] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-black/5 border-2 border-black/15 font-bold text-black/60">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-black/5 border-2 border-black/15 font-bold text-black/40">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-black/40 font-bold mb-4">No projects found.</p>
              <button onClick={() => handleSearch("")}
                className="px-6 py-3 bg-black text-white font-bold border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                Clear Search
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mb-16">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-11 h-11 flex items-center justify-center bg-white border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <ChevronLeft className="w-5 h-5" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button key={n} onClick={() => setPage(n)}
                  className={`w-11 h-11 flex items-center justify-center font-bold text-sm border-4 border-black rounded-xl transition-all ${
                    n === page
                      ? "bg-black text-white shadow-[3px_3px_0px_0px_rgba(99,102,241,1)]"
                      : "bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5"
                  }`}>
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-11 h-11 flex items-center justify-center bg-white border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-[#FCD34D] border-4 border-black rounded-3xl p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-black font-bold text-lg mb-4">Interested in working together?</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-zalando">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
