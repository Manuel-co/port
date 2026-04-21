const techLogos = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", alt: "Firebase" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", alt: "AWS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", alt: "Solidity" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg", alt: "Markdown" },
]

// Quadruple for seamless infinite loop
const marqueeItems = [...techLogos, ...techLogos, ...techLogos, ...techLogos]

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#F5F5F5] text-black overflow-hidden">
      <div className="container max-w-6xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-zalando text-black">
            My broad{" "}
            <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              set of skills
            </span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-xl mx-auto">
            Technologies and tools I work with every day.
          </p>
        </div>
      </div>

      {/* Marquee strip — rotated like Paperfolio X */}
      <div className="relative overflow-hidden -rotate-[3deg] bg-black py-6 min-w-[120vw] -mx-[10vw]" style={{ boxShadow: "0 4px 0 0 #000, 0 -4px 0 0 #000" }}>
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <img
                src={item.src}
                alt={item.alt}
                className="h-10 w-10 object-contain"
                style={{ filter: item.alt === "Next.js" || item.alt === "GitHub" || item.alt === "Markdown" ? "invert(1)" : "none" }}
              />
              <span className="text-white font-bold text-sm tracking-wide">{item.alt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill cards */}
      <div className="container max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              color: "bg-[#6366F1]",
              title: "Front-End Development",
              tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX", "Accessibility"],
              desc: "Building modern, responsive web applications with a focus on performance, accessibility, and user experience.",
            },
            {
              color: "bg-[#FF6B7A]",
              title: "Technical Writing",
              tags: ["Documentation", "Tutorials", "API Docs", "Technical Blogs", "User Guides", "Content Strategy", "Markdown"],
              desc: "Transforming complex technical concepts into clear, concise, and engaging content.",
            },
            {
              color: "bg-[#FCD34D]",
              title: "Web3 Development",
              tags: ["Ethereum", "Solidity", "Smart Contracts", "DApps", "Web3.js", "Ethers.js", "Hardhat", "IPFS"],
              desc: "Building decentralized applications and smart contracts that push the boundaries of the web.",
              textColor: "text-black",
              tagStyle: "bg-black/15 border-black/20 text-black",
              descColor: "text-black/70",
            },
          ].map(({ color, title, tags, desc, textColor, tagStyle, descColor }) => (
            <div key={title}
              className={`${color} border-4 border-black rounded-3xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}>
              <h3 className={`text-xl font-bold font-zalando ${textColor ?? "text-white"}`}>{title}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 border rounded-full text-xs font-bold ${tagStyle ?? "bg-black/20 border-black/20 text-white"}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={`text-sm leading-relaxed mt-auto font-medium ${descColor ?? "text-white/80"}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
