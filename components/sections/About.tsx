import Image from "next/image"
import Link from "next/link"
import { User } from "lucide-react"
import { motion } from "framer-motion"

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
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square border-4 border-black rounded-none overflow-hidden bg-[#FF6B7A] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
                alt="Nweke Manuchimso"
                fill className="object-contain p-6" priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className="inline-block font-mono text-xs font-bold tracking-[0.2em] text-black/40 mb-3 uppercase">
              About — 01
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-zalando text-black">
              Who&apos;s behind all this{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-4 border-black rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                great work?
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              I&apos;m a Next.js and React Developer based in Nigeria with a focus on responsive web design, web performance optimization, and technical writing. I build fast, accessible web applications and write content that helps developers ship better products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ value, label, color, textColor }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
                  className={`${color} border-4 border-black rounded-none p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
                >
                  <div className={`text-2xl font-bold ${textColor ?? "text-white"}`}>{value}</div>
                  <div className={`text-xs mt-1 leading-tight font-semibold ${textColor ?? "text-white/80"}`}>{label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-none shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <User className="w-5 h-5" /> More about me
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
