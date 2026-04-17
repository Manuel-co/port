"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import { SpotifyNowPlaying } from "../SpotifyNowPlaying"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

const socials = [
  { href: "https://github.com/Manuel-co", icon: Github, label: "GitHub" },
  { href: "https://x.com/NwekeManuchimso", icon: Twitter, label: "X / Twitter" },
  { href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:manuchimsoemmanuel2k@gmail.com", icon: Mail, label: "Email" },
]

export function Footer() {
  return (
    <footer
      style={{
        background: "rgb(5,5,5)",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "32px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, border: "1.5px solid rgba(255,255,255,0.12)", overflow: "hidden", position: "relative", flexShrink: 0 }}>
            <Image src="/logo.png" alt="Nweke Manuchimso" fill className="object-cover" />
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "-0.02em" }}>
            Manuchimso
          </span>
        </Link>

        {/* Nav */}
        <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px 24px" }}>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ fontSize: 13.5, color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Spotify */}
        <SpotifyNowPlaying />

        {/* Socials */}
        <div style={{ display: "flex", gap: 12 }}>
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              aria-label={label}
              style={{
                width: 34, height: 34, borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
              }}
            >
              <Icon style={{ width: 15, height: 15 }} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", margin: 0, textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Nweke Manuchimso Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
