import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getProjectBySlug, projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Project`,
    description: project.description,
  };
}

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container max-w-5xl mx-auto px-4">

          {/* Back */}
          <Link href="/project"
            className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-black mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-zalando text-black mb-10 leading-tight">
            {project.title}
          </h1>

          {/* Browser mockup preview */}
          <div className="border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
            {/* Browser chrome */}
            <div className="bg-[#F5F5F5] border-b-4 border-black px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF6B7A] border-2 border-black" />
                <span className="w-3 h-3 rounded-full bg-[#FCD34D] border-2 border-black" />
                <span className="w-3 h-3 rounded-full bg-[#34D399] border-2 border-black" />
              </div>
              <div className="flex-1 bg-white border-2 border-black rounded-lg px-3 py-1 text-xs font-bold text-black/40 truncate">
                {project.demo}
              </div>
              <Link href={project.demo} target="_blank"
                className="flex items-center gap-1 text-xs font-bold text-black/50 hover:text-black transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
            {/* Screenshot */}
            <div className="relative w-full aspect-video bg-[#6366F1]">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-[1fr_280px] gap-8">

            {/* Left — About + CTA */}
            <div className="space-y-6">
              <div className="bg-white border-4 border-black rounded-2xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold font-zalando mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed">{project.longDescription}</p>
              </div>

              <div className="bg-[#FCD34D] border-4 border-black rounded-2xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-xl font-bold font-zalando text-black mb-2">Want to build something similar?</h2>
                <p className="text-black/70 text-sm mb-6">
                  I'm available for freelance projects. Let's talk about your idea.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-zalando">
                  <Mail className="w-4 h-4" /> Get in Touch
                </Link>
              </div>
            </div>

            {/* Right — Technologies + Links */}
            <div className="space-y-6">
              <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech}
                      className="px-3 py-1.5 bg-[#6366F1] text-white text-xs font-bold border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border-4 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4">Links</h3>
                <div className="flex flex-col gap-3">
                  <Link href={project.demo} target="_blank"
                    className="flex items-center gap-3 px-4 py-3 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(99,102,241,1)] hover:shadow-[1px_1px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
