import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-gray-300">
          Manuel.code
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/project" className="text-gray-300 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-300 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] bg-black/90 backdrop-blur-sm border-white/10">
            <DropdownMenuItem asChild>
              <Link href="/project" className="w-full text-white hover:text-gray-300">Projects</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/blog" className="w-full text-white hover:text-gray-300">Blog</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/contact" className="w-full text-white hover:text-gray-300">Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 