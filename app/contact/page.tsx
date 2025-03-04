"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { AnimatedPage, AnimatedSection } from "@/components/ui/animated-page"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await emailjs.send(
        "service_r2qxwiz",
        "template_pk6b3r9",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "fbDuzOWDOGuIi5_JV"
      )

      if (response.status === 200) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Failed to send email:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 mb-8">
              I'm currently available for freelance work, collaborations, and interesting projects. Let's work together!
            </p>
          </AnimatedPage>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection>
              <Card className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                      required
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full hover:bg-white/20" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Mail className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="mailto:manuchimsoemmanuel2k@gmail.com" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        manuchimsoemmanuel2k@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Social Media</h2>
                  <div className="space-y-4">
                    <div className="flex items-center group">
                      <Github className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://github.com/Manuel-co" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        github.com/Manuel-co
                      </Link>
                    </div>
                    <div className="flex items-center group">
                      <Twitter className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://x.com/NwekeManuchimso" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        @NwekeManuchimso
                      </Link>
                    </div>
                    <div className="flex items-center group">
                      <Linkedin className="h-5 w-5 mr-3 text-gray-400 group-hover:text-white transition-colors" />
                      <Link 
                        href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" 
                        target="_blank" 
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        linkedin.com/in/Nweke Emmanuel
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                  <p className="text-gray-400">
                    Monday - Friday<br />
                    9:00 AM - 5:00 PM WAT
                  </p>
                </div> */}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
