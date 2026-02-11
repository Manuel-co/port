"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Search, FolderGit2 } from "lucide-react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedPage, AnimatedSection, AnimatedGrid } from "@/components/ui/animated-page"

export default function ProjectPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      title: "Shax_x Photography Portfolio",
      description: "A modern, professional photography portfolio website built with Next.js 15, featuring stunning animations, responsive design, and a focus on showcasing Nigerian photography excellence.",
      image: "/shax.png?height=200&width=400",
      technologies: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
      github: "https://github.com/Manuel-co/shax_x",
      demo: "https://shax-x.vercel.app/"
    },
    {
      title: "File Sharing App",
      description: "A file sharing app that allows users to share files with each other",
      image: "/share.png?height=200&width=400",
      technologies: [ "Next.js", "Tailwind CSS"],
      github: "https://github.com/Manuel-co/fileshare",
      demo: "https://file-share-nine-pi.vercel.app/"
    },
    // {
    //   title: "E-Commerce Dashboard",
    //   description: "A responsive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["React", "Next.js", "Tailwind CSS"],
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "Technical Documentation Portal",
    //   description: "A comprehensive documentation portal for a SaaS product, featuring interactive tutorials and API references.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["Docusaurus", "Markdown", "Content Strategy"],
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "NFT Marketplace",
    //   description: "A decentralized marketplace for creating, buying, and selling NFTs with wallet integration and transaction history.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["Solidity", "Ethers.js", "IPFS"],
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "Decentralized Finance Dashboard",
    //   description: "A comprehensive DeFi dashboard that allows users to track their investments, stake tokens, and participate in liquidity pools across multiple blockchain networks.",
    //   image: "/placeholder.svg?height=300&width=600",
    //   technologies: ["Ethereum", "Solidity", "React", "Web3.js", "MetaMask Integration"],
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "NFT Collection",
    //   description: "A generative art NFT collection with on-chain metadata and rarity attributes.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["ERC-721", "IPFS", "OpenSea"],
    //   github: "#",
    //   demo: "#"
    // },
    // {
    //   title: "DAO Governance Portal",
    //   description: "A governance portal for DAOs with proposal creation, voting, and execution.",
    //   image: "/placeholder.svg?height=200&width=400",
    //   technologies: ["Governance", "Voting", "Snapshot"],
    //   github: "#",
    //   demo: "#"
    // }
  ];

  const filteredProjects = projects.filter((project) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <FolderGit2 className="h-4 w-4 text-white/70" />
                <span className="text-sm text-white/70">Portfolio</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                Projects
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A collection of my work in web development, technical writing.
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by title, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/20 text-white placeholder-gray-500 transition-all"
                />
              </div>

              {/* Results Count */}
              <motion.p
                key={filteredProjects.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-400"
              >
                {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
              </motion.p>
            </div>
          </AnimatedPage>

          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card 
                    className="bg-white/5 border-white/10 text-white overflow-hidden group hover:border-white/20 transition-colors h-full flex flex-col"
                  >
                    <div className="relative h-48">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h2 className="text-xl font-bold mb-4 group-hover:text-white/90 transition-colors min-h-[3.5rem] flex items-center">
                        {project.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-white/10 text-gray-300 hover:bg-white/5 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-auto">
                        <Button 
                          asChild 
                          size="sm" 
                          className="border-white/10 hover:bg-white/5 transition-colors"
                        >
                          <Link href={project.github} className="flex items-center">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button 
                          asChild 
                          size="sm" 
                          className="hover:bg-white/20 transition-colors"
                        >
                          <Link href={project.demo} className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </AnimatedGrid>

          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <AnimatedSection className="text-center py-12">
                <p className="text-gray-400 mb-4">No projects found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </AnimatedSection>
            )}
          </AnimatePresence>

          <AnimatedSection className="max-w-3xl mx-auto text-center" delay={0.2}>
            <p className="text-gray-400 mb-8">
              Interested in working together? Feel free to reach out!
            </p>
            <Button asChild className="hover:bg-white/20 transition-colors">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}