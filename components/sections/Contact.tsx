"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin } from "lucide-react"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // subject: "",
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
          // subject: formData.subject,
          message: formData.message,
        },
        "fbDuzOWDOGuIi5_JV"
      )

      if (response.status === 200) {
        toast.success("Message sent successfully!")
        setFormData({ name: "", email: "",  message: "" })
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
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-400 mb-6">
              I'm currently available for freelance work, collaborations, and interesting projects. If you have a
              project that needs a developer with my skill set, or if you just want to chat about technology, feel
              free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-400" />
                <Link href="mailto:manuchimsoemmanuel2k@gmail.com" className="hover:text-gray-300 transition-colors">
                  manuchimsoemmanuel2k@gmail.com
                </Link>
              </div>
              <div className="flex items-center">
                <Twitter className="h-5 w-5 mr-3 text-gray-400" />
                <Link
                  href="https://x.com/NwekeManuchimso" 
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  @NwekeManuchimso
                </Link>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 mr-3 text-gray-400" />
                <Link
                   href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" 
                  target="_blank"
                  className="hover:text-gray-300 transition-colors"
                >
                  linkedin.com/in/Nweke-Emmanuel
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
              </div>
              {/* <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div> */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 