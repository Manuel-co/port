import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Twitter, Linkedin, Github } from "lucide-react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-gray-400 mb-12">
              I'm currently available for freelance work, collaborations, and interesting projects. Let's work together!
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <Card className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
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
                        type="email"
                        className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
                      required
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full hover:bg-white/20">
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
