"use client";

import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { Contact } from "../../components/sections/Contact"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ink text-paper">
      <Header />
      <main>
        <Contact
          as="h1"
          label="Contact"
          lines={["Let's build", "something", "worth keeping."]}
          notes={["Open to freelance, full-time & collaborations.", "Or just say hello — the inbox is open."]}
        />
      </main>
      <Footer />
    </div>
  )
}
