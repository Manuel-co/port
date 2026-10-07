"use client"

import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FolderIcon, Label, Note, RevealLine, ease } from "../desk/primitives"

const BASE = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons"

// Desktop files. x / y are percentage positions on md+ screens; mobile falls back to a grid.
const files = [
  { name: "REACT.TSX", src: `${BASE}/react/react-original.svg`, x: 2, y: 4 },
  { name: "NEXT.JS", src: `${BASE}/nextjs/nextjs-original.svg`, x: 16, y: 18 },
  { name: "TYPESCRIPT.TS", src: `${BASE}/typescript/typescript-original.svg`, x: 33, y: 2 },
  { name: "JAVASCRIPT.JS", src: `${BASE}/javascript/javascript-original.svg`, x: 6, y: 40 },
  { name: "TAILWIND.CSS", src: `${BASE}/tailwindcss/tailwindcss-original.svg`, x: 47, y: 20 },
  { name: "HTML5.HTML", src: `${BASE}/html5/html5-original.svg`, x: 26, y: 46 },
  { name: "NODE.JS", src: `${BASE}/nodejs/nodejs-original.svg`, x: 60, y: 4 },
  { name: "GIT.LOG", src: `${BASE}/git/git-original.svg`, x: 70, y: 34 },
  { name: "FIGMA.FIG", src: `${BASE}/figma/figma-original.svg`, x: 40, y: 58 },
  { name: "FIREBASE.JSON", src: `${BASE}/firebase/firebase-plain.svg`, x: 2, y: 74 },
  { name: "AWS.YML", src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, x: 56, y: 48 },
  { name: "PYTHON.PY", src: `${BASE}/python/python-original.svg`, x: 18, y: 66 },
  { name: "SOLIDITY.SOL", src: `${BASE}/solidity/solidity-original.svg`, x: 64, y: 72 },
  { name: "BASH.SH", src: `${BASE}/bash/bash-original.svg`, x: 32, y: 80 },
  { name: "LINUX.ISO", src: `${BASE}/linux/linux-original.svg`, x: 50, y: 82 },
  { name: "WIRESHARK.PCAP", src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg", x: 76, y: 6 },
]

const folders = [
  {
    name: "FRONTEND",
    title: "Front-End Development",
    tags: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Responsive Design", "UI/UX", "Accessibility"],
    desc: "Building modern, responsive web applications with a focus on performance, accessibility, and user experience.",
  },
  {
    name: "WRITING",
    title: "Technical Writing",
    tags: ["Documentation", "Tutorials", "API Docs", "Technical Blogs", "User Guides", "Content Strategy", "Markdown"],
    desc: "Transforming complex technical concepts into clear, concise, and engaging content.",
  },
  {
    name: "WEB3",
    title: "Web3 Development",
    tags: ["Ethereum", "Solidity", "Smart Contracts", "DApps", "Web3.js", "Ethers.js", "Hardhat", "IPFS"],
    desc: "Building decentralized applications and smart contracts that push the boundaries of the web.",
  },
  {
    name: "SECURITY",
    title: "Cybersecurity",
    tags: ["Linux", "Ubuntu", "Kali Linux", "Bash", "Nmap", "Wireshark", "Wazuh", "Metasploit", "Burp Suite", "Penetration Testing"],
    desc: "Learning offensive and defensive security — network analysis, vulnerability scanning, and ethical hacking fundamentals.",
  },
]

export function Skills() {
  const desk = useRef<HTMLDivElement>(null)
  // Open windows in stacking order — the last name is the front-most window.
  const [open, setOpen] = useState<string[]>([])
  const focus = (name: string) => setOpen((o) => [...o.filter((n) => n !== name), name])
  const close = (name: string) => setOpen((o) => o.filter((n) => n !== name))

  return (
    <section id="skills" className="px-4 md:px-6 py-28 md:py-36">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Label index="02">The desktop</Label>
        <Note align="right" className="hidden md:flex">Drag the files. Open a folder.</Note>
      </div>

      <RevealLine className="display-lg">Everything</RevealLine>
      <RevealLine className="display-lg" delay={0.08}>I keep close</RevealLine>

      <div
        ref={desk}
        className="relative mt-12 grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4 md:block md:h-[640px] md:border-b border-ink/80"
      >
        {files.map(({ name, src, x, y }, i) => (
          <motion.div
            key={name}
            drag
            dragConstraints={desk}
            dragElastic={0.15}
            dragMomentum={false}
            whileDrag={{ scale: 1.08, zIndex: 30 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease, delay: i * 0.03 }}
            style={{ ["--x" as string]: `${x}%`, ["--y" as string]: `${y}%` }}
            className="flex flex-col items-center gap-2 w-24 justify-self-center cursor-grab active:cursor-grabbing select-none touch-none md:absolute md:left-[var(--x)] md:top-[var(--y)]"
          >
            <span
              className="relative grid place-items-center w-12 h-[60px] bg-white border border-ink"
              style={{ clipPath: "polygon(0 0, 72% 0, 100% 22%, 100% 100%, 0 100%)" }}
            >
              <img src={src} alt="" draggable={false} className="w-7 h-7 object-contain" />
            </span>
            <span className="text-[10px] tracking-wide text-center leading-tight">{name}</span>
          </motion.div>
        ))}

        {/* Folders */}
        <div className="col-span-full grid grid-cols-4 gap-4 mt-4 md:mt-0 md:absolute md:right-0 md:top-0 md:flex md:flex-col md:gap-6">
          {folders.map(({ name }) => (
            <button
              key={name}
              onClick={() => focus(name)}
              aria-pressed={open.includes(name)}
              className="group flex flex-col items-center gap-1"
            >
              <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>
                <FolderIcon className="w-12 md:w-14" />
              </motion.span>
              <span className={`text-[10px] tracking-wide px-1 ${open.includes(name) ? "bg-[#2F6BFF] text-white" : ""}`}>
                {name}
              </span>
            </button>
          ))}
        </div>

        {/* Folder windows — several can be open; clicking one brings it to the front */}
        <AnimatePresence>
          {folders.map((folder, i) => {
            const layer = open.indexOf(folder.name)
            if (layer === -1) return null
            const isFront = layer === open.length - 1
            return (
            <motion.div
              key={folder.name}
              drag
              dragConstraints={desk}
              dragMomentum={false}
              onPointerDown={() => !isFront && focus(folder.name)}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease }}
              style={{ zIndex: 40 + layer, ["--o" as string]: `${i * 32}px` }}
              className={`absolute inset-x-0 top-[var(--o)] md:inset-x-auto md:left-[calc(14%+var(--o)*1.6)] md:top-[calc(6%+var(--o))] md:w-[min(500px,58%)] bg-paper border border-ink cursor-grab active:cursor-grabbing transition-shadow ${
                isFront ? "shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]" : "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.3)]"
              }`}
            >
              <div className={`flex items-center gap-2 border-b border-ink px-3 py-2 ${isFront ? "" : "opacity-60"}`}>
                <button
                  onClick={(e) => { e.stopPropagation(); close(folder.name) }}
                  onPointerDown={(e) => e.stopPropagation()}
                  aria-label={`Close ${folder.name} window`}
                  className="h-3 w-3 rounded-full bg-[#FF5F57] border border-black/20"
                />
                <span className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-black/20" />
                <span className="h-3 w-3 rounded-full bg-[#28C840] border border-black/20" />
                <span className="ml-2 note uppercase tracking-wide">~/desk/{folder.name.toLowerCase()}</span>
              </div>
              <div className="p-5 md:p-6 cursor-auto">
                <p className="display-md !text-[clamp(1.6rem,3vw,2.4rem)] mb-3">{folder.title}</p>
                <p className="text-sm leading-relaxed mb-5 max-w-[46ch]">{folder.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {folder.tags.map((t) => (
                    <span key={t} className="rounded-full border border-ink px-3 py-1 text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </section>
  )
}
