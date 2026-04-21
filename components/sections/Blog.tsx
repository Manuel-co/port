import Link from "next/link"
import Image from "next/image"
import { Pencil, ArrowRight } from "lucide-react"

const articles = [
  {
    tag: "Tutorial",
    tagColor: "bg-[#6366F1]",
    title: "Building a Next-Generation File Sharing App with Next.js and Permit.io",
    description: "A step-by-step guide to building a secure file-sharing web application using Next.js and Permit.io with role-based access control.",
    href: "https://medium.com/@manuchimsoemmanuel2k/building-a-next-generation-file-sharing-app-with-next-js-and-permit-io-00b8fb7e66bf",
    featured: true,
    image: "/filesahre.png",
  },
  {
    tag: "Tutorial",
    tagColor: "bg-[#2F81F7]",
    title: "Routing in React with React Location",
    description: "Learn how to use React Location to handle routing in a React application by building a food recipe web app.",
    href: "https://blog.openreplay.com/routing-in-react-with-react-location/",
    featured: false,
    image: null,
  },
  {
    tag: "Article",
    tagColor: "bg-[#FF6B7A]",
    title: "HTMX vs. Vue and React",
    description: "A deep dive comparing HTMX with modern JavaScript frameworks — when to use each and why.",
    href: "https://blog.openreplay.com/",
    featured: false,
    image: null,
  },
]

export function Blog() {
  const [featured, ...rest] = articles

  return (
    <section id="writing" className="py-24 bg-[#F5F5F5] text-black">
      <div className="container max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black">
            Articles
          </h2>
          <Link href="/blog"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-bold text-sm border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-zalando">
            <Pencil className="w-4 h-4" /> Browse all articles
          </Link>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-6 items-stretch">
          {/* Featured large card */}
          <Link href={featured.href} target="_blank"
            className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
            <div className={`${featured.tagColor} h-56 relative overflow-hidden flex-shrink-0`}>
              <span className="absolute top-4 right-4 z-10 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg border-2 border-black">
                {featured.tag}
              </span>
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black font-zalando leading-snug group-hover:text-[#6366F1] transition-colors">
                {featured.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{featured.description}</p>
              <div className="flex items-center gap-2 mt-6 text-[#6366F1] font-bold text-sm">
                Read article <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* Smaller cards — stretch to match featured height */}
          <div className="flex flex-col gap-6 h-full">
            {rest.map((article) => (
              <Link key={article.title} href={article.href} target="_blank"
                className="group bg-white border-4 border-black rounded-3xl overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-1">
                <div className={`${article.tagColor} w-3 flex-shrink-0`} />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className={`inline-block ${article.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-black mb-3`}>
                      {article.tag}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-black font-zalando leading-snug mb-2 group-hover:text-[#2F81F7] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.description}</p>
                  </div>
                  <div className="flex items-center gap-1 mt-4 text-gray-400 text-xs font-bold group-hover:text-black transition-colors">
                    Read article <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
