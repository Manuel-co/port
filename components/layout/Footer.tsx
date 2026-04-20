"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { SpotifyNowPlaying } from "../SpotifyNowPlaying"

const socials = [
  { href: "https://github.com/Manuel-co", icon: Github, label: "GitHub", color: "bg-black" },
  { href: "https://x.com/NwekeManuchimso", icon: Twitter, label: "X", color: "bg-[#2F81F7]" },
  { href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", icon: Linkedin, label: "LinkedIn", color: "bg-[#6366F1]" },
  { href: "mailto:manuchimsoemmanuel2k@gmail.com", icon: Mail, label: "Email", color: "bg-[#FF6B7A]" },
]

export function Footer() {
  return (
    <footer className="bg-white text-black border-t-4 border-black font-zalando">
      <div className="container max-w-6xl mx-auto px-4 py-12 flex flex-col items-center gap-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="relative w-10 h-10 rounded-xl border-2 border-black overflow-hidden bg-black">
            <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
          </div>
          <span className="font-bold text-black text-base">Manuchimso</span>
        </Link>

        {/* Spotify */}
        <SpotifyNowPlaying />

        {/* Socials */}
        <div className="flex gap-3">
          {socials.map(({ href, icon: Icon, label, color }) => (
            <Link key={href} href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              aria-label={label}
              className={`w-10 h-10 flex items-center justify-center ${color} border-2 border-black rounded-xl text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
              <Icon className="w-4 h-4" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold text-sm border-4 border-black rounded-xl shadow-[5px_5px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
          Available for work <ArrowUpRight className="w-4 h-4" />
        </Link>

        {/* Copyright */}
        <p className="text-xs text-black/30 text-center">
          &copy; {new Date().getFullYear()} Nweke Manuchimso Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
