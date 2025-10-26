import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import { SpotifyNowPlaying } from "../SpotifyNowPlaying"

export function Footer() {
  return (
    <footer className="py-8 bg-black text-white border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <Image src="/logo.png" alt="Manuel.code" width={100} height={100} />
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              &copy; {new Date().getFullYear()} Manuel. All rights reserved.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <SpotifyNowPlaying />
          </div>
          <div className="flex space-x-6">
            <Link
              href="https://github.com/Manuel-code"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://x.com/NwekeManuchimso"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">X.com</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/" 
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:manuchimsoemmanuel2k@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 