import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Twitter, Linkedin, Mail, ExternalLink, Code, FileText, Wallet } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Dev Portfolio
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#about" className="hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-gray-300 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-gray-300 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#writing" className="hover:text-gray-300 transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="#web3" className="hover:text-gray-300 transition-colors">
                  Web3
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_rgba(0,0,0,0)_70%)]"></div>
          </div>
          <div className="container relative z-10 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block">Hello, I'm</span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Your Name
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              Front-End Developer | Technical Writer | Web3 Developer
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild className="bg-white text-black hover:bg-gray-200">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#projects">View My Work</Link>
              </Button>
            </div>
            <div className="mt-8 relative w-48 h-48 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-100/10 to-gray-900/10 animate-pulse"></div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
                alt="Your Memoji"
                width={192}
                height={192}
                className="relative z-10 object-contain animate-floating transition-transform duration-300 ease-in-out group-hover:scale-110"
                priority
              />
            </div>
            <div className="flex space-x-4 mt-12">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
              <span className="sr-only">Scroll Down</span>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white text-black">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square max-w-md mx-auto group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-100 to-gray-200"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
                  alt="Your Memoji"
                  width={400}
                  height={400}
                  className="relative z-10 object-contain animate-pulse-slow transition-all duration-300 ease-in-out group-hover:rotate-[5deg]"
                  priority
                />
                <div className="absolute inset-0 rounded-full border-4 border-white"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-700 mb-6">
                  I'm a passionate front-end developer, technical writer, and web3 enthusiast with a keen eye for design
                  and a love for creating seamless user experiences. With expertise spanning traditional web development
                  and blockchain technologies, I bring a unique perspective to every project.
                </p>
                <p className="text-gray-700 mb-6">
                  My journey in tech began with front-end development, where I honed my skills in creating responsive,
                  accessible, and performant web applications. As I grew as a developer, I discovered my talent for
                  explaining complex technical concepts, which led me to technical writing.
                </p>
                <p className="text-gray-700">
                  Most recently, I've been exploring the exciting world of web3 development, building decentralized
                  applications and smart contracts that push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-black text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">My Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Front-end Development */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <Code className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">Front-end Development</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">HTML5</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">CSS3</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">JavaScript</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">TypeScript</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">React</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Next.js</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Tailwind CSS</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Responsive Design</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">UI/UX</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Accessibility</Badge>
                </div>
                <p className="text-gray-400">
                  I specialize in building modern, responsive web applications with a focus on performance,
                  accessibility, and user experience.
                </p>
              </div>

              {/* Technical Writing */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">Technical Writing</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Documentation</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Tutorials</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">API Docs</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Technical Blogs</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">User Guides</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Content Strategy</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Markdown</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Technical Editing</Badge>
                </div>
                <p className="text-gray-400">
                  I transform complex technical concepts into clear, concise, and engaging content that helps users
                  understand and implement technologies effectively.
                </p>
              </div>

              {/* Web3 Development */}
              <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-6">
                  <Wallet className="h-8 w-8 mr-4" />
                  <h3 className="text-2xl font-bold">Web3 Development</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Ethereum</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Solidity</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Smart Contracts</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">DApps</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Web3.js</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Ethers.js</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">Hardhat</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">IPFS</Badge>
                  <Badge className="bg-white/10 hover:bg-white/20 text-white">NFTs</Badge>
                </div>
                <p className="text-gray-400">
                  I build decentralized applications and smart contracts, bridging the gap between traditional web
                  development and blockchain technologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white text-black">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <Card className="bg-white border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Project 1" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">E-Commerce Dashboard</h3>
                    <Badge>Front-end</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
                    A responsive dashboard for e-commerce businesses with real-time analytics, inventory management, and
                    order processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
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

              {/* Project 2 */}
              <Card className="bg-white border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image src="/placeholder.svg?height=200&width=400" alt="Project 2" fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Technical Documentation Portal</h3>
                    <Badge>Technical Writing</Badge>
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
                    <Badge>Web3</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">
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
              <Button asChild variant="outline">
                <Link href="#">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Writing Samples Section */}
        <section id="writing" className="py-20 bg-black text-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Writing Samples</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Writing Sample 1 */}
              <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
                <CardContent className="p-6">
                  <Badge className="mb-4">Tutorial</Badge>
                  <h3 className="text-xl font-bold mb-2">
                    Building Accessible React Components: A Comprehensive Guide
                  </h3>
                  <p className="text-gray-400 mb-4">
                    A deep dive into creating React components that are accessible to all users, covering ARIA
                    attributes, keyboard navigation, and screen reader compatibility.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Writing Sample 2 */}
              <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
                <CardContent className="p-6">
                  <Badge className="mb-4">Technical Guide</Badge>
                  <h3 className="text-xl font-bold mb-2">
                    Understanding Smart Contract Security: Best Practices and Common Pitfalls
                  </h3>
                  <p className="text-gray-400 mb-4">
                    An in-depth exploration of security considerations when developing smart contracts, including code
                    examples and real-world case studies.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Writing Sample 3 */}
              <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
                <CardContent className="p-6">
                  <Badge className="mb-4">API Documentation</Badge>
                  <h3 className="text-xl font-bold mb-2">The Complete Guide to RESTful API Design</h3>
                  <p className="text-gray-400 mb-4">
                    A comprehensive guide to designing RESTful APIs that are intuitive, efficient, and
                    developer-friendly, with practical examples and best practices.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Writing Sample 4 */}
              <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
                <CardContent className="p-6">
                  <Badge className="mb-4">Technical Blog</Badge>
                  <h3 className="text-xl font-bold mb-2">
                    Demystifying Web3: A Beginner's Guide to the Decentralized Web
                  </h3>
                  <p className="text-gray-400 mb-4">
                    An accessible introduction to Web3 concepts, technologies, and applications, designed to help
                    newcomers understand the potential of decentralized technologies.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Article
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Web3 Work Section */}
        <section id="web3" className="py-20 bg-white text-black">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Web3 Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Web3 Project"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div>
                <Badge className="mb-4">Featured Project</Badge>
                <h3 className="text-2xl font-bold mb-4">Decentralized Finance Dashboard</h3>
                <p className="text-gray-700 mb-6">
                  A comprehensive DeFi dashboard that allows users to track their investments, stake tokens, and
                  participate in liquidity pools across multiple blockchain networks.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline">Ethereum</Badge>
                  <Badge variant="outline">Solidity</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Web3.js</Badge>
                  <Badge variant="outline">MetaMask Integration</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button asChild variant="outline">
                    <Link href="#" className="flex items-center">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="#" className="flex items-center">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Web3 Project 1 */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">NFT Collection</h3>
                  <p className="text-gray-600 mb-4">
                    A generative art NFT collection with on-chain metadata and rarity attributes.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">ERC-721</Badge>
                    <Badge variant="outline">IPFS</Badge>
                    <Badge variant="outline">OpenSea</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Web3 Project 2 */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">DAO Governance Portal</h3>
                  <p className="text-gray-600 mb-4">
                    A governance portal for DAOs with proposal creation, voting, and execution.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Governance</Badge>
                    <Badge variant="outline">Voting</Badge>
                    <Badge variant="outline">Snapshot</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Web3 Project 3 */}
              <Card className="bg-white border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Token Swap Interface</h3>
                  <p className="text-gray-600 mb-4">
                    A clean, intuitive interface for swapping tokens across multiple blockchain networks.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">DEX</Badge>
                    <Badge variant="outline">AMM</Badge>
                    <Badge variant="outline">Cross-chain</Badge>
                  </div>
                  <Button asChild variant="outline" size="sm">
                    <Link href="#">View Project</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
                    <Link href="mailto:your.email@example.com" className="hover:text-gray-300 transition-colors">
                      your.email@example.com
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Twitter className="h-5 w-5 mr-3 text-gray-400" />
                    <Link
                      href="https://twitter.com/yourusername"
                      target="_blank"
                      className="hover:text-gray-300 transition-colors"
                    >
                      @yourusername
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="h-5 w-5 mr-3 text-gray-400" />
                    <Link
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      className="hover:text-gray-300 transition-colors"
                    >
                      linkedin.com/in/yourusername
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
                      rows="4"
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
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold">
                Dev Portfolio
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

