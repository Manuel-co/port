import Image from "next/image"
import Link from "next/link"
import { User } from "lucide-react"

export function About() {
  const stats = [
    { value: "3+", label: "Years experience", color: "bg-[#6366F1]" },
    { value: "10+", label: "Projects shipped", color: "bg-[#FF6B7A]" },
    { value: "15+", label: "Articles published", color: "bg-[#FCD34D]", textColor: "text-black" },
  ]

  return (
    <section id="about" className="py-24 bg-white text-black">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square border-4 border-black rounded-3xl overflow-hidden bg-[#FF6B7A] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
                alt="Nweke Manuchimso"
                fill className="object-contain p-6" priority
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-zalando text-black">
              Who's behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                great work?
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              I'm a Next.js and React Developer based in Nigeria with a focus on responsive web design, web performance optimization, and technical writing. I build fast, accessible web applications and write content that helps developers ship better products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, label, color, textColor }) => (
                <div key={label} className={`${color} border-4 border-black rounded-2xl p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <div className={`text-2xl font-bold ${textColor ?? "text-white"}`}>{value}</div>
                  <div className={`text-xs mt-1 leading-tight font-semibold ${textColor ?? "text-white/80"}`}>{label}</div>
                </div>
              ))}
            </div>

            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <User className="w-5 h-5" /> More about me
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
