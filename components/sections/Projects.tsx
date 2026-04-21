import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Shax_x Photography Portfolio",
    description: "A modern photography portfolio with stunning animations, responsive design, and showcasing Nigerian photography excellence.",
    image: "/shax.png",
    tags: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Manuel-co/shax_x",
    demo: "https://shax-x.vercel.app/",
    accent: "bg-[#6366F1]",
  },
  {
    title: "File Sharing App",
    description: "A file sharing app that allows users to securely share files with each other using cloud storage.",
    image: "/share.png",
    tags: ["Next.js", "Tailwind CSS", "AWS", "Firebase"],
    github: "https://github.com/Manuel-co/fileshare",
    demo: "https://file-share-nine-pi.vercel.app/",
    accent: "bg-[#2F81F7]",
  },
  {
    title: "AniNews",
    description: "An anime discovery site powered by the Anime News Network encyclopedia API with search and filtering.",
    image: "/placeholder.svg",
    tags: ["Next.js", "TypeScript", "Zustand", "shadcn"],
    github: "https://github.com/Manuel-co/aninews",
    demo: "https://aninews-blond.vercel.app/",
    accent: "bg-[#FF6B7A]",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white text-black">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black">
            Take a look at my{" "}
            <span className="bg-[#FCD34D] text-black px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              design portfolio
            </span>
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {projects.map((project, i) => (
            <div key={project.title}
              className="group grid md:grid-cols-2 bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              {/* Content */}
              <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <span className={`inline-block ${project.accent} text-white text-xs font-bold px-4 py-1.5 rounded-full border-2 border-black mb-6 w-fit shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  Featured Project
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black font-zalando leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-black/8 border-2 border-black/20 rounded-full text-xs font-bold text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link href={project.github} target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    <Github className="w-4 h-4" /> Code
                  </Link>
                  <Link href={project.demo} target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className={`relative min-h-[240px] md:min-h-[360px] ${project.accent} ${i % 2 === 1 ? "md:order-1" : ""} border-l-4 border-black`}>
                <Image src={project.image} alt={project.title} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/project"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
            Browse all projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
