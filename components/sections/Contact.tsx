import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin } from "lucide-react"

export function Contact() {
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
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
                    type="email"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 