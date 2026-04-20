"use client";
import Link from "next/link";
import { Mail, FolderOpen, Github, Twitter, Linkedin } from "lucide-react";
import DotFieldBase from "../DotField";
import type React from "react";

interface DotFieldProps {
  dotRadius?: number; dotSpacing?: number; cursorRadius?: number; cursorForce?: number;
  bulgeOnly?: boolean; bulgeStrength?: number; glowRadius?: number; sparkle?: boolean;
  waveAmplitude?: number; gradientFrom?: string; gradientTo?: string; glowColor?: string;
}
const DotField = DotFieldBase as React.FC<DotFieldProps>;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle dot bg */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <DotField dotRadius={1.2} dotSpacing={18} bulgeStrength={50} glowRadius={120}
            sparkle={false} waveAmplitude={0} cursorRadius={400} cursorForce={0.08}
            bulgeOnly gradientFrom="#6366F1" gradientTo="#A855F7" glowColor="#f5f5f5" />
        </div>
      </div>

      <div className="container relative z-10 px-4 pt-36 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Available badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FCD34D] text-black font-bold text-sm border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.2] text-center mb-6 font-zalando text-black">
            <span className="block mb-3">I'm{" "}
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Nweke Manuchimso
              </span>
            </span>
            <span className="block mb-3">a{" "}
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Front-End Developer
              </span>
            </span>
            <span className="block">&amp;{" "}
              <span className="bg-[#6366F1] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Technical Writer
              </span>
            </span>
          </h1>

          <p className="text-center text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-zalando">
            Building modern web experiences and turning complex tech into clear, readable content.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <Mail className="w-5 h-5" /> Get in Touch
            </Link>
            <Link href="/project"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold text-base border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,0.15)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <FolderOpen className="w-5 h-5" /> View My Work
            </Link>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-3">
            {[
              { href: "https://github.com/Manuel-co", icon: Github, label: "GitHub", bg: "bg-black", text: "text-white" },
              { href: "https://x.com/NwekeManuchimso", icon: Twitter, label: "X", bg: "bg-[#2F81F7]", text: "text-white" },
              { href: "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/", icon: Linkedin, label: "LinkedIn", bg: "bg-[#6366F1]", text: "text-white" },
            ].map(({ href, icon: Icon, label, bg, text }) => (
              <Link key={href} href={href} target="_blank" aria-label={label}
                className={`w-11 h-11 flex items-center justify-center ${bg} ${text} border-4 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
