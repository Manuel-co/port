import { Badge } from "@/components/ui/badge"
import { Code, FileText, Wallet } from "lucide-react"

export function Skills() {
  return (
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
  )
} 