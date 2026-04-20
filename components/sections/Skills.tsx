import { Code, FileText, Wallet } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Front-End Development",
    color: "bg-[#6366F1]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX", "Accessibility"],
    description: "Building modern, responsive web applications with a focus on performance, accessibility, and user experience.",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    color: "bg-[#FF6B7A]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    tags: ["Documentation", "Tutorials", "API Docs", "Technical Blogs", "User Guides", "Content Strategy", "Markdown", "Technical Editing"],
    description: "Transforming complex technical concepts into clear, concise, and engaging content.",
  },
  {
    icon: Wallet,
    title: "Web3 Development",
    color: "bg-[#FCD34D]",
    shadow: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
    tags: ["Ethereum", "Solidity", "Smart Contracts", "DApps", "Web3.js", "Ethers.js", "Hardhat", "IPFS", "NFTs"],
    description: "Building decentralized applications and smart contracts that push the boundaries of the web.",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F5F5F5] text-black">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black">
            My broad{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              set of skills
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, color, shadow, tags, description }) => (
            <div key={title}
              className={`${color} border-4 border-black rounded-3xl p-8 flex flex-col gap-6 hover:-translate-y-1 transition-transform ${shadow}`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-black/20 border-2 border-black/30 rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white font-zalando">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black/20 border border-black/20 rounded-full text-xs font-bold text-white">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white/85 text-sm leading-relaxed mt-auto font-medium">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
