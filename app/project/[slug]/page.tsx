import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageHero } from "@/components/desk/PageHero";
import { Label, RevealLine } from "@/components/desk/primitives";
import { getProjectBySlug, projects, projectsSorted } from "@/lib/projects";

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

const shortTitle = (title: string) => title.split("—")[0].trim();

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const index = projectsSorted.findIndex((p) => p.slug === project.slug);
  const next = projectsSorted[(index + 1) % projectsSorted.length];
  const hasSource = project.github && project.github !== "#";

  const specs: { label: string; value: ReactNode }[] = [
    { label: "File", value: `${String(index + 1).padStart(2, "0")} / ${String(projectsSorted.length).padStart(2, "0")}` },
    { label: "Stack", value: project.technologies.join(", ") },
    {
      label: "Live",
      value: (
        <Link href={project.demo} target="_blank" className="underline underline-offset-4 hover:no-underline break-all">
          {project.demo.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
        </Link>
      ),
    },
    ...(hasSource
      ? [{
          label: "Source",
          value: (
            <Link href={project.github} target="_blank" className="underline underline-offset-4 hover:no-underline">
              GitHub ↗
            </Link>
          ),
        }]
      : []),
  ];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <PageHero
          lines={[shortTitle(project.title)]}
          notes={[project.description, <>{project.technologies.slice(0, 3).join(" · ")}</>]}
          back={{ href: "/project", label: "All projects" }}
        />

        {/* Screenshot in a desktop window */}
        <section className="px-4 md:px-6 mt-12">
          <div className="border border-ink bg-paper shadow-[0_30px_80px_-30px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-2 border-b border-ink px-3 py-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57] border border-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#28C840] border border-black/20" />
              <Link href={project.demo} target="_blank"
                className="ml-3 flex-1 truncate rounded-full border border-ink/30 px-3 py-0.5 note text-ink/60 hover:text-ink">
                {project.demo}
              </Link>
            </div>
            <div className="relative aspect-video bg-white">
              <Image src={project.image} alt={project.title} fill className="object-cover object-top" priority />
            </div>
          </div>
        </section>

        {/* About + specs */}
        <section className="px-4 md:px-6 mt-24 grid lg:grid-cols-[1.5fr_1fr] gap-14">
          <div>
            <Label index="A">About the project</Label>
            <p className="mt-8 text-xl md:text-2xl leading-snug tracking-[-0.01em] max-w-[44ch]">
              {project.longDescription}
            </p>
          </div>
          <dl className="border-t border-ink/80 self-start">
            {specs.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-ink/80 py-4">
                <dt className="note uppercase tracking-wide text-ink/50">{label}</dt>
                <dd className="text-sm leading-relaxed">{value}</dd>
              </div>
            ))}
            <div className="pt-6 flex flex-wrap gap-3">
              <Link href={project.demo} target="_blank" className="pill">Open live site ↗</Link>
              <Link href="/contact" className="pill">Build something similar</Link>
            </div>
          </dl>
        </section>

        {/* Next */}
        <section className="mt-32 bg-ink text-paper px-4 md:px-6 pt-16 pb-10">
          <Label index="→" inverse>Next file</Label>
          <Link href={`/project/${next.slug}`} className="group mt-8 block">
            <RevealLine inverse className="display-lg">
              <span className="inline-flex items-baseline gap-[0.2em]">
                {shortTitle(next.title)}
                <span className="transition-transform duration-500 group-hover:translate-x-4">→</span>
              </span>
            </RevealLine>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
