"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { projectsSorted } from "@/lib/projects"

const accents = ["bg-[#6366F1]", "bg-[#2F81F7]", "bg-[#FF6B7A]", "bg-[#FCD34D]"]
const featured = projectsSorted.slice(0, 4)

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white text-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-black/40 mb-3 uppercase">
            Case Studies — 03
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black">
            Selected{" "}
            <span className="bg-[#FCD34D] text-black px-3 py-1 inline-block border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              case studies
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6 mb-12">
          {featured.map((project, i) => {
            const accent = accents[i % accents.length]
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid md:grid-cols-2 bg-white border-4 border-black rounded-none overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300"
              >
                {/* Content */}
                <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-3xl font-bold text-black/10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`inline-block ${accent} text-white text-xs font-bold px-4 py-1.5 rounded-none border-2 border-black w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      Case Study
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black font-zalando leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-black/5 border-2 border-black/20 rounded-none text-xs font-bold text-black/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={`/project/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-bold text-sm border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                      View case study <ArrowRight className="w-4 h-4" />
                    </Link>
                    {project.demo !== "#" && (
                      <Link href={project.demo} target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                        <ExternalLink className="w-4 h-4" /> Live
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image */}
                <Link href={`/project/${project.slug}`}
                  className={`relative min-h-[240px] md:min-h-[360px] block ${accent} ${i % 2 === 1 ? "md:order-1" : ""} border-l-4 border-black`}>
                  <Image src={project.image} alt={project.title} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="flex justify-center">
          <Link href="/project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
            Browse all projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
