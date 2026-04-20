"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Search } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedPage, AnimatedSection } from "@/components/ui/animated-page";

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "Shax_x Photography Portfolio",
      description:
        "A modern, professional photography portfolio website built with Next.js 15, featuring stunning animations, responsive design, and a focus on showcasing Nigerian photography excellence.",
      image: "/shax.png?height=200&width=400",
      technologies: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "https://github.com/Manuel-co/shax_x",
      demo: "https://shax-x.vercel.app/",
    },
    {
      title: "File Sharing App",
      description: "A file sharing app that allows users to share files with each other.",
      image: "/share.png?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "AWS", "Permit.io", "FireBase"],
      github: "https://github.com/Manuel-co/files-share-permit.io",
      demo: "https://file-share-nine-pi.vercel.app/",
    },
    {
      title: "AniNews",
      description:
        "A Next.js anime discovery site powered by the Anime News Network encyclopedia API.",
      image: "/aninews.png?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "fast-xml-parser", "Zustand", "API", "shadcn"],
      github: "https://github.com/Manuel-co/aninews",
      demo: "https://aninews-blond.vercel.app/",
    },
    {
      title: "Anime News",
      description:
        "A landing page that helps developers discover and use the Anime News Network Encyclopedia API — free, no auth, no API keys required.",
      image: "/news.png?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn"],
      github: "https://github.com/Manuel-co/news-anime",
      demo: "https://news-anime.vercel.app/",
    },
    {
      title: "Subtitle Translator",
      description: "A Simple Subtitle Translator.",
      image: "/trans.png?height=200&width=400",
      technologies: ["React.js", "Libral Translate API"],
      github: "https://github.com/Manuel-co/subtitle-translator",
      demo: "https://subtitle-translator.vercel.app/",
    },
    {
      title: "PH ESTATE",
      description: "A Real Estate Listing Site.",
      image: "/phlist.png?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn"],
      github: "https://github.com/Manuel-co/phestate",
      demo: "https://phestate.vercel.app/",
    },
    {
      title: "Ziron Projects",
      description: "A professional website for Ziron Projects Limited.",
      image: "/ziron.png?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript",],
      github: "#",
      demo: "https://zironprojects.com/",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Projects
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A collection of my work in web development, technical writing.
              </p>
            </div>

            {/* Search Section */}
            <div className="mb-12 space-y-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by title, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 text-white placeholder-gray-500 transition-all"
                />
              </div>

              <motion.p
                key={filteredProjects.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-400"
              >
                {filteredProjects.length} project
                {filteredProjects.length !== 1 ? "s" : ""} found
              </motion.p>
            </div>
          </AnimatedPage>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  className="h-full"
                >
                  <div className="h-full flex flex-col rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative h-48 w-full shrink-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-col flex-1 p-6">
                      {/* Title */}
                      <h2 className="text-base font-semibold text-white mb-2 leading-snug line-clamp-2 min-h-[2.75rem] flex items-start">
                        {project.title}
                      </h2>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-auto flex gap-3">
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                          <Github className="h-4 w-4 shrink-0" />
                          Code
                        </Link>
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4 shrink-0" />
                          Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <AnimatedSection className="text-center py-12">
                <p className="text-gray-400 mb-4">No projects found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </AnimatedSection>
            )}
          </AnimatePresence>

          <AnimatedSection className="max-w-3xl mx-auto text-center" delay={0.2}>
            <p className="text-gray-400 mb-8">
              Interested in working together? Feel free to reach out!
            </p>
            <Button asChild className="hover:bg-white/20 transition-colors">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}