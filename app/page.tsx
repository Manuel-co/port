import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"
import { Hero } from "../components/sections/Hero"
import { About } from "../components/sections/About"
import { Skills } from "../components/sections/Skills"
import { Projects } from "../components/sections/Projects"
import { Blog } from "../components/sections/Blog"
import { Contact } from "../components/sections/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
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
  )
}

