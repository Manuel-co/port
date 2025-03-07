import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white text-black">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <Card className="bg-white border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <Image src="/share.png?height=200&width=400" alt="Project 1" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">File Sharing App</h3>
                {/* <Badge>Front-end</Badge> */}
              </div>
              <p className="text-gray-600 mb-4">
                A file sharing app that allows users to share files with each other.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {/* <Badge variant="outline">React</Badge> */}
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
              </div>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com/Manuel-co/fileshare" className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="https://file-share-nine-pi.vercel.app/" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="bg-white border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Technical Documentation Portal</h3>
                {/* <Badge>Technical Writing</Badge> */}
              </div>
              <p className="text-gray-600 mb-4">
                A comprehensive documentation portal for a SaaS product, featuring interactive tutorials and API
                references.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Docusaurus</Badge>
                <Badge variant="outline">Markdown</Badge>
                <Badge variant="outline">Content Strategy</Badge>
              </div>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="bg-white border-gray-200 overflow-hidden">
            <div className="relative h-48">
              <Image src="/placeholder.svg?height=200&width=400" alt="Project 3" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">NFT Marketplace</h3>
                {/* <Badge>Web3</Badge> */}
              </div>
              <p className="text-gray-400 mb-4">
                A decentralized marketplace for creating, buying, and selling NFTs with wallet integration and
                transaction history.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">Solidity</Badge>
                <Badge variant="outline">Ethers.js</Badge>
                <Badge variant="outline">IPFS</Badge>
              </div>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="#" className="flex items-center">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#" className="flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-white/10 hover:bg-white/5">
            <Link href="/project">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 