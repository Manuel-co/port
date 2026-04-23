// components/Skills.tsx
"use client"

const BASE = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons"

const techLogos = [
  { src: `${BASE}/react/react-original.svg`,                                           alt: "React" },
  { src: `${BASE}/nextjs/nextjs-original.svg`,                                         alt: "Next.js",      invert: true },
  { src: `${BASE}/typescript/typescript-original.svg`,                                  alt: "TypeScript" },
  { src: `${BASE}/javascript/javascript-original.svg`,                                  alt: "JavaScript" },
  { src: `${BASE}/tailwindcss/tailwindcss-original.svg`,                               alt: "Tailwind CSS" },
  { src: `${BASE}/html5/html5-original.svg`,                                            alt: "HTML5" },
  { src: `${BASE}/css3/css3-original.svg`,                                              alt: "CSS3" },
  { src: `${BASE}/nodejs/nodejs-original.svg`,                                          alt: "Node.js" },
  { src: `${BASE}/git/git-original.svg`,                                                alt: "Git" },
  { src: `${BASE}/github/github-original.svg`,                                          alt: "GitHub",       invert: true },
  { src: `${BASE}/figma/figma-original.svg`,                                            alt: "Figma" },
  { src: `${BASE}/firebase/firebase-plain.svg`,                                         alt: "Firebase" },
  { src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`,              alt: "AWS",          invert: true },
  { src: `${BASE}/linux/linux-original.svg`,                                            alt: "Linux" },
  { src: `${BASE}/ubuntu/ubuntu-original.svg`,                                          alt: "Ubuntu" },
  { 
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg", 
  alt: "Kali Linux" 
},
  { src: `${BASE}/bash/bash-original.svg`,                                              alt: "Bash",         invert: true },
  { src: `${BASE}/python/python-original.svg`,                                          alt: "Python" },
  { src: `${BASE}/solidity/solidity-original.svg`,                                      alt: "Solidity",     invert: true },
  { src: `${BASE}/markdown/markdown-original.svg`,                                      alt: "Markdown",     invert: true },
  { src: "https://nmap.org/images/nmap-logo-256x256.png",                              alt: "Nmap" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg",    alt: "Wireshark" },
  { src: "/wazuh.png", alt: "Wazuh" },
  { src: null, alt: "Metasploit" },
  { src: null, alt: "Burp Suite" },
]

const marqueeItems = [...techLogos, ...techLogos]

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

      <div
        className="relative overflow-hidden -rotate-[3deg] bg-black py-5 min-w-[120vw] -mx-[10vw]"
        style={{ boxShadow: "0 4px 0 0 #000, 0 -4px 0 0 #000" }}
      >
        <div className="flex items-center gap-10 animate-marquee w-max">
          {marqueeItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-9 w-9 object-contain"
                  style={{ filter: item.invert ? "invert(1)" : "none" }}
                />
              ) : (
                <span className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-lg text-white text-[10px] font-bold border border-white/20 flex-shrink-0">
                  {item.alt.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="text-white font-bold text-sm tracking-wide whitespace-nowrap">
                {item.alt}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skill cards */}
      {/* <div className="container max-w-6xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            {
              color: "bg-[#0F172A]",
              title: "Cybersecurity",
              tags: ["Linux", "Ubuntu", "Kali Linux", "Bash", "Nmap", "Wireshark", "Wazuh", "Metasploit", "Burp Suite", "Penetration Testing"],
              desc: "Learning offensive and defensive security — network analysis, vulnerability scanning, and ethical hacking fundamentals.",
              tagStyle: "bg-white/10 border-white/20 text-white",
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
      </div> */}
    </section>
  )
}