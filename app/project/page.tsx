"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink, Search, FolderGit2 } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const accentColors = [
  "bg-[#6366F1]",
  "bg-[#FF6B7A]",
  "bg-[#2F81F7]",
  "bg-[#FCD34D]",
  "bg-[#34D399]",
  "bg-[#F97316]",
  "bg-[#A855F7]",
];

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "Shax_x Photography Portfolio",
      description: "A modern, professional photography portfolio website built with Next.js 15, featuring stunning animations, responsive design, and a focus on showcasing Nigerian photography excellence.",
      image: "/shax.png",
      technologies: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "https://github.com/Manuel-co/shax_x",
      demo: "https://shax-x.vercel.app/",
    },
    {
      title: "File Sharing App",
      description: "A file sharing app that allows users to share files with each other using cloud storage and role-based access control.",
      image: "/share.png",
      technologies: ["Next.js", "Tailwind CSS", "AWS", "Permit.io", "Firebase"],
      github: "https://github.com/Manuel-co/files-share-permit.io",
      demo: "https://file-share-nine-pi.vercel.app/",
    },
    {
      title: "AniNews",
      description: "A Next.js anime discovery site powered by the Anime News Network encyclopedia API.",
      image: "/aninews.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Zustand", "shadcn"],
      github: "https://github.com/Manuel-co/aninews",
      demo: "https://aninews-blond.vercel.app/",
    },
    {
      title: "Anime News",
      description: "A landing page that helps developers discover and use the Anime News Network Encyclopedia API — free, no auth, no API keys required.",
      image: "/news.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn"],
      github: "https://github.com/Manuel-co/news-anime",
      demo: "https://news-anime.vercel.app/",
    },
    {
      title: "Subtitle Translator",
      description: "A simple subtitle translator app that converts SRT files to different languages using the LibreTranslate API.",
      image: "/trans.png",
      technologies: ["React.js", "LibreTranslate API"],
      github: "https://github.com/Manuel-co/subtitle-translator",
      demo: "https://subtitle-translator.vercel.app/",
    },
    {
      title: "PH Estate",
      description: "A real estate listing site for properties in Port Harcourt, Nigeria.",
      image: "/phlist.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn"],
      github: "https://github.com/Manuel-co/phestate",
      demo: "https://phestate.vercel.app/",
    },
    {
      title: "Ziron Projects",
      description: "A professional website for Ziron Projects Limited — an engineering group in the Niger Delta specialising in EPC services, civil engineering, fabrication, procurement, and environmental solutions across Nigeria since 2010.",
      image: "/ziron.png",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "https://zironprojects.com/",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const q = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container max-w-6xl mx-auto px-4">

          {/* Page header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FCD34D] text-black font-bold text-sm border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
              <FolderGit2 className="w-4 h-4" /> Portfolio
            </div>
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
              <input
                type="text"
                placeholder="Search by title, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border-4 border-black rounded-2xl text-black placeholder-black/30 font-medium focus:outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-0.5 focus:translate-y-0.5 transition-all"
              />
            </div>
            <p className="text-center text-sm font-bold text-black/40 mt-4">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div key={project.title}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="h-full">
                  <div className="h-full flex flex-col bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    {/* Image */}
                    <div className={`relative h-48 shrink-0 ${accentColors[index % accentColors.length]}`}>
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="text-base font-bold text-black mb-2 leading-snug line-clamp-2 min-h-[2.5rem]">
                        {project.title}
                      </h2>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-black/5 border-2 border-black/15 font-bold text-black/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto flex gap-3">
                        <Link href={project.github} target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 bg-black text-white border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                          <Github className="w-4 h-4" /> Code
                        </Link>
                        <Link href={project.demo} target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-bold px-4 py-2.5 bg-white text-black border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                          <ExternalLink className="w-4 h-4" /> Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-black/40 font-bold mb-4">No projects found.</p>
              <button onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-black text-white font-bold border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                Clear Search
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
