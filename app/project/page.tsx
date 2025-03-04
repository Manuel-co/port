import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { Header } from "../../components/layout/Header"

export default function ProjectPage() {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A responsive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
      // category: "Front-end",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Technical Documentation Portal",
      description: "A comprehensive documentation portal for a SaaS product, featuring interactive tutorials and API references.",
      // category: "Technical Writing",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Docusaurus", "Markdown", "Content Strategy"],
      github: "#",
      demo: "#"
    },
    {
      title: "NFT Marketplace",
      description: "A decentralized marketplace for creating, buying, and selling NFTs with wallet integration and transaction history.",
      // category: "Web3",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Solidity", "Ethers.js", "IPFS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Decentralized Finance Dashboard",
      description: "A comprehensive DeFi dashboard that allows users to track their investments, stake tokens, and participate in liquidity pools across multiple blockchain networks.",
      // category: "Web3",
      image: "/placeholder.svg?height=300&width=600",
      technologies: ["Ethereum", "Solidity", "React", "Web3.js", "MetaMask Integration"],
      github: "#",
      demo: "#"
    },
    {
      title: "NFT Collection",
      description: "A generative art NFT collection with on-chain metadata and rarity attributes.",
      // category: "Web3",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["ERC-721", "IPFS", "OpenSea"],
      github: "#",
      demo: "#"
    },
    {
      title: "DAO Governance Portal",
      description: "A governance portal for DAOs with proposal creation, voting, and execution.",
      // category: "Web3",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Governance", "Voting", "Snapshot"],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <Header />
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Projects</h1>
          <p className="text-gray-400 mb-8">
            A collection of my work in web development, technical writing, and Web3 development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-white overflow-hidden group">
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  {/* <Badge className="bg-white/10">{project.category}</Badge> */}
                </div>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-white/10 text-gray-300">{tech}</Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button asChild size="sm" className="border-white/10 hover:bg-white/5">
                    <Link href={project.github} className="flex items-center">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="hover:bg-white/20">
                    <Link href={project.demo} className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Interested in working together? Feel free to reach out!
          </p>
          <Button asChild className="hover:bg-white/20">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
