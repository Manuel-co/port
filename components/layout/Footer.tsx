"use client"

import Link from "next/link"
import { SpotifyNowPlaying } from "../SpotifyNowPlaying"

const socials = [
  { href: "https://github.com/Manuel-co", label: "GitHub" },
  { href: "https://x.com/NwekeManuchimso", label: "X / Twitter" },
  { href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", label: "LinkedIn" },
  { href: "mailto:manuchimsoemmanuel2k@gmail.com", label: "Email" },
]

const pages = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bleed-ink bg-ink text-paper px-4 md:px-6 pt-10 pb-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-paper/30 pt-8">
        <p className="note col-span-2 md:col-span-1 max-w-[30ch] text-paper/70">
          This site was designed &amp; built by Nweke Manuchimso Emmanuel with Next.js, Tailwind and Framer Motion.
        </p>
        <nav className="flex flex-col md:gap-1.5">
          {pages.map(({ href, label }) => (
            <Link key={href} href={href} className="note uppercase tracking-wide py-2.5 md:py-0 hover:underline underline-offset-4">{label}</Link>
          ))}
        </nav>
        <nav className="flex flex-col md:gap-1.5">
          {socials.map(({ href, label }) => (
            <Link key={href} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
              className="note uppercase tracking-wide py-2.5 md:py-0 hover:underline underline-offset-4">{label} ↗</Link>
          ))}
        </nav>
        <div className="col-span-2 md:col-span-1 md:justify-self-end">
          <SpotifyNowPlaying />
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row justify-between gap-2 note uppercase tracking-wide text-paper/50">
        <span>&copy; {new Date().getFullYear()} Nweke Manuchimso</span>
        <span>Port Harcourt, Nigeria — Available for work</span>
      </div>
    </footer>
  )
}
