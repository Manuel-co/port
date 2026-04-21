"use client";

import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Skills } from "../components/sections/Skills"
import { Projects } from "../components/sections/Projects"
import { Blog } from "../components/sections/Blog"
import { Contact } from "../components/sections/Contact"
import DotFieldBase from "../components/DotField"
import type React from "react"

interface DotFieldProps {
  dotRadius?: number; dotSpacing?: number; cursorRadius?: number; cursorForce?: number;
  bulgeOnly?: boolean; bulgeStrength?: number; glowRadius?: number; sparkle?: boolean;
  waveAmplitude?: number; gradientFrom?: string; gradientTo?: string; glowColor?: string;
}
const DotField = DotFieldBase as React.FC<DotFieldProps>;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black relative">
      {/* Full-page dot field — fixed, behind everything, hover via window events */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.18,
        }}
      >
        <DotField
          dotRadius={1.5}
          dotSpacing={16}
          bulgeStrength={70}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#6366F1"
          gradientTo="#A855F7"
          glowColor="#f0f0f0"
        />
      </div>

      {/* Page content sits above the dot field */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
