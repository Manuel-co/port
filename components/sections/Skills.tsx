"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"
import { AnimatePresence, motion, useAnimationControls } from "framer-motion"
import { FolderIcon, Label, Note, RevealLine, ease, useFinePointer } from "../desk/primitives"

const BASE = "https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons"

type FolderName = "FRONTEND" | "WRITING" | "WEB3" | "SECURITY"

// Desktop files. x / y are the "messy" percentage positions on md+ screens; mobile falls back to a grid.
// Each file lives in a folder, so hovering a folder highlights its files and clicking a file opens its folder.
const files: { name: string; src: string; folder: FolderName; x: number; y: number }[] = [
  { name: "REACT.TSX", src: `${BASE}/react/react-original.svg`, folder: "FRONTEND", x: 3, y: 6 },
  { name: "NEXT.JS", src: `${BASE}/nextjs/nextjs-original.svg`, folder: "FRONTEND", x: 17, y: 24 },
  { name: "TYPESCRIPT.TS", src: `${BASE}/typescript/typescript-original.svg`, folder: "FRONTEND", x: 31, y: 5 },
  { name: "JAVASCRIPT.JS", src: `${BASE}/javascript/javascript-original.svg`, folder: "FRONTEND", x: 6, y: 44 },
  { name: "TAILWIND.CSS", src: `${BASE}/tailwindcss/tailwindcss-original.svg`, folder: "FRONTEND", x: 44, y: 26 },
  { name: "HTML5.HTML", src: `${BASE}/html5/html5-original.svg`, folder: "FRONTEND", x: 27, y: 50 },
  { name: "FIGMA.FIG", src: `${BASE}/figma/figma-original.svg`, folder: "FRONTEND", x: 41, y: 66 },
  { name: "NODE.JS", src: `${BASE}/nodejs/nodejs-original.svg`, folder: "FRONTEND", x: 57, y: 6 },
  { name: "GIT.LOG", src: `${BASE}/git/git-original.svg`, folder: "FRONTEND", x: 70, y: 30 },
  { name: "FIREBASE.JSON", src: `${BASE}/firebase/firebase-plain.svg`, folder: "FRONTEND", x: 3, y: 76 },
  { name: "AWS.YML", src: `${BASE}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, folder: "FRONTEND", x: 56, y: 48 },
  { name: "README.MD", src: `${BASE}/markdown/markdown-original.svg`, folder: "WRITING", x: 74, y: 70 },
  { name: "CONTRACT.SOL", src: `${BASE}/solidity/solidity-original.svg`, folder: "WEB3", x: 62, y: 74 },
  { name: "SCAN.PY", src: `${BASE}/python/python-original.svg`, folder: "SECURITY", x: 16, y: 64 },
  { name: "RECON.SH", src: `${BASE}/bash/bash-original.svg`, folder: "SECURITY", x: 29, y: 80 },
  { name: "KALI.ISO", src: `${BASE}/linux/linux-original.svg`, folder: "SECURITY", x: 48, y: 84 },
  { name: "TRAFFIC.PCAP", src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg", folder: "SECURITY", x: 73, y: 6 },
]

const folders: { name: FolderName; title: string; tags: string[]; desc: string }[] = [
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

const filesIn = (folder: FolderName) => files.filter((f) => f.folder === folder)

// "Clean up" grid: 6 columns across the area left of the folder column, sorted by folder.
const TIDY_COLS = 6
const tidyOrder = [...files].sort((a, b) => folders.findIndex((f) => f.name === a.folder) - folders.findIndex((f) => f.name === b.folder))
const tidyPos = Object.fromEntries(
  tidyOrder.map((f, i) => [f.name, { x: 3 + (i % TIDY_COLS) * 13.5, y: 6 + Math.floor(i / TIDY_COLS) * 30 }])
)

/** A page with a folded corner, drawn as SVG so the fold keeps its outline, plus the tool's logo. */
function FileIcon({ src, size = "md" }: { src: string; size?: "sm" | "md" }) {
  return (
    <span className={`relative block drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)] ${size === "md" ? "w-14 h-[70px]" : "w-9 h-[45px]"}`}>
      <svg viewBox="0 0 56 70" className="absolute inset-0 h-full w-full" aria-hidden>
        <path d="M1.5 1.5h37l16 16v51h-53z" fill="#fff" stroke="#000" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        <path d="M38.5 1.5v16h16" fill="#ececec" stroke="#000" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      </svg>
      <img
        src={src}
        alt=""
        draggable={false}
        className={`absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 object-contain ${size === "md" ? "w-8 h-8" : "w-5 h-5"}`}
      />
    </span>
  )
}

/** Live date + HH:MM for the menu bar — rendered after mount so server and client markup match. */
function Clock() {
  const [now, setNow] = useState<Date | null>(null)
  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 15000)
    return () => clearInterval(id)
  }, [])
  if (!now) return null
  return (
    <span className="tabular-nums">
      <span className="hidden sm:inline text-ink/50 mr-3">
        {now.toLocaleDateString([], { weekday: "short", day: "numeric", month: "short" })}
      </span>
      {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </span>
  )
}

// A small, stable tilt per file for the "messy" desk (−4° … +4°); cleaned up, everything sits straight.
const tilt = (i: number) => ((i * 37) % 9) - 4

type Box = { x0: number; y0: number; x1: number; y1: number }

export function Skills() {
  const desk = useRef<HTMLDivElement>(null)
  // Open windows in stacking order — the last name is the front-most window.
  const [open, setOpen] = useState<FolderName[]>([])
  const focus = (name: FolderName) => setOpen((o) => [...o.filter((n) => n !== name), name])
  const close = (name: FolderName) => setOpen((o) => o.filter((n) => n !== name))
  const canDrag = useFinePointer()

  const [tidy, setTidy] = useState(false)
  const [hoverFolder, setHoverFolder] = useState<FolderName | null>(null)
  const [hoverFile, setHoverFile] = useState<string | null>(null)
  const activeFolder = hoverFolder ?? files.find((f) => f.name === hoverFile)?.folder ?? null

  // Resets every file's drag offset so "Clean up" lands them exactly on the grid.
  const fileControls = useAnimationControls()
  const toggleTidy = () => {
    fileControls.start({ x: 0, y: 0, transition: { duration: 0.6, ease } })
    setTidy((t) => !t)
  }

  // macOS-style rubber-band selection on empty desk space (mouse only).
  const fileEls = useRef<Record<string, HTMLDivElement | null>>({})
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [box, setBox] = useState<Box | null>(null)

  const deskPoint = (e: React.PointerEvent) => {
    const r = desk.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }
  const onDeskDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!canDrag || e.target !== e.currentTarget || e.button !== 0) return
    const p = deskPoint(e)
    e.currentTarget.setPointerCapture(e.pointerId)
    setBox({ x0: p.x, y0: p.y, x1: p.x, y1: p.y })
    setSelected(new Set())
  }
  const onDeskMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!box) return
    const p = deskPoint(e)
    const next = { ...box, x1: p.x, y1: p.y }
    setBox(next)
    const d = desk.current!.getBoundingClientRect()
    const [l, r] = [Math.min(next.x0, next.x1), Math.max(next.x0, next.x1)]
    const [t, b] = [Math.min(next.y0, next.y1), Math.max(next.y0, next.y1)]
    const hit = new Set<string>()
    for (const [name, el] of Object.entries(fileEls.current)) {
      if (!el) continue
      const fr = el.getBoundingClientRect()
      const fl = fr.left - d.left, ft = fr.top - d.top
      if (fl < r && fl + fr.width > l && ft < b && ft + fr.height > t) hit.add(name)
    }
    setSelected(hit)
  }
  const onDeskUp = () => setBox(null)

  return (
    <section id="skills" className="px-4 md:px-6 py-28 md:py-36">
      <div className="flex items-end justify-between gap-6 mb-10">
        <Label index="02">The desktop</Label>
        <Note align="right" className="hidden md:flex">Drag the files. Open a folder.</Note>
      </div>

      <RevealLine className="display-lg">Everything</RevealLine>
      <RevealLine className="display-lg" delay={0.08}>I keep close</RevealLine>

      <div className="mt-12 border border-ink/80 bg-paper">
        {/* Menu bar */}
        <div className="flex items-center justify-between gap-4 border-b border-ink/80 px-3 md:px-4 h-9 note uppercase tracking-wide">
          <div className="flex items-center gap-4 md:gap-6 min-w-0">
            <span className="h-2 w-2 rounded-full bg-ink" aria-hidden />
            <span className="font-semibold">Desk</span>
            <span className="hidden md:inline text-ink/50">File</span>
            <span className="hidden md:inline text-ink/50">Edit</span>
            <span className="hidden md:inline text-ink/50">View</span>
            <span className="text-ink/50 truncate md:pl-6 md:border-l md:border-ink/20">
              {selected.size > 0 ? `${selected.size} of ${files.length} selected` : `${files.length} items · ${folders.length} folders`}
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleTidy}
              className="hidden md:inline-flex items-center gap-2 -my-2 py-2 hover:underline underline-offset-4"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${tidy ? "bg-ink" : "border border-ink"}`} />
              {tidy ? "Scatter" : "Clean up"}
            </button>
            <Clock />
          </div>
        </div>

        <div
          ref={desk}
          onPointerDown={onDeskDown}
          onPointerMove={onDeskMove}
          onPointerUp={onDeskUp}
          onPointerCancel={onDeskUp}
          // Dot-grid "wallpaper"
          style={{
            backgroundImage: "radial-gradient(rgba(0,0,0,0.13) 1px, transparent 1.3px)",
            backgroundSize: "22px 22px",
          }}
          className="relative grid grid-cols-3 sm:grid-cols-4 gap-y-8 gap-x-4 p-4 md:block md:p-0 md:h-[620px] select-none"
        >
          {/* Rubber-band selection box */}
          {box && (
            <div
              className="pointer-events-none absolute z-20 border border-[#2F6BFF] bg-[#2F6BFF]/10"
              style={{
                left: Math.min(box.x0, box.x1),
                top: Math.min(box.y0, box.y1),
                width: Math.abs(box.x1 - box.x0),
                height: Math.abs(box.y1 - box.y0),
              }}
            />
          )}

          {files.map(({ name, src, folder, x, y }, i) => {
            const pos = tidy ? tidyPos[name] : { x, y }
            const dimmed = activeFolder !== null && activeFolder !== folder
            const isSelected = selected.has(name)
            const lit = activeFolder === folder || isSelected
            return (
              <motion.div
                key={name}
                ref={(el) => { fileEls.current[name] = el }}
                drag={canDrag}
                dragConstraints={desk}
                dragElastic={0.15}
                dragMomentum={false}
                whileDrag={{ scale: 1.08, zIndex: 30 }}
                animate={fileControls}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: i * 0.03 }}
                onTap={() => { setSelected(new Set([name])); focus(folder) }}
                onHoverStart={() => setHoverFile(name)}
                onHoverEnd={() => setHoverFile(null)}
                style={{ ["--x" as string]: `${pos.x}%`, ["--y" as string]: `${pos.y}%` }}
                className={`w-28 justify-self-center select-none md:absolute md:left-[var(--x)] md:top-[var(--y)] md:transition-[left,top] md:duration-700 md:ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  canDrag ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                }`}
                aria-label={`${name} — in ${folder}`}
              >
                {/* Dimming + tilt live on this inner wrapper: framer-motion owns the outer element's inline opacity/transform */}
                <span
                  style={{ rotate: `${tidy ? 0 : tilt(i)}deg` }}
                  className={`group/file flex flex-col items-center gap-1.5 transition-[opacity,rotate] duration-500 ${dimmed ? "md:opacity-25" : ""}`}
                >
                  <span className={`rounded-md p-1.5 transition-colors ${isSelected ? "bg-ink/10" : "md:group-hover/file:bg-ink/5"}`}>
                    <FileIcon src={src} />
                  </span>
                  <span className={`rounded-[4px] text-[11px] tracking-wide text-center leading-tight px-1.5 py-0.5 transition-colors ${lit ? "bg-[#2F6BFF] text-white" : ""}`}>
                    {name}
                  </span>
                </span>
              </motion.div>
            )
          })}

          {/* Folders — first on mobile, since they hold the real content */}
          <div className="col-span-full order-first md:order-none grid grid-cols-4 gap-2 pb-6 mb-2 border-b border-ink/80 md:pb-0 md:mb-0 md:border-0 md:absolute md:right-4 md:top-5 md:flex md:flex-col md:gap-5">
            <p className="col-span-full note text-ink/60 mb-1 md:hidden">Tap a folder — or any file — to open it.</p>
            {folders.map(({ name }) => {
              const lit = open.includes(name) || activeFolder === name
              return (
                <button
                  key={name}
                  onClick={() => focus(name)}
                  onMouseEnter={() => setHoverFolder(name)}
                  onMouseLeave={() => setHoverFolder(null)}
                  aria-pressed={open.includes(name)}
                  className="group flex flex-col items-center gap-1 py-2 md:py-0"
                >
                  <motion.span whileHover={{ y: -3 }} whileTap={{ scale: 0.92 }}>
                    <FolderIcon className="w-12 md:w-16" />
                  </motion.span>
                  <span className={`rounded-[4px] text-[11px] tracking-wide px-1.5 py-0.5 transition-colors ${lit ? "bg-[#2F6BFF] text-white" : ""}`}>
                    {name}
                  </span>
                  <span className="text-[10px] text-ink/50">
                    {filesIn(name).length} item{filesIn(name).length !== 1 ? "s" : ""}
                  </span>
                </button>
              )
            })}
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
                  drag={canDrag}
                  dragConstraints={desk}
                  dragMomentum={false}
                  onPointerDown={() => !isFront && focus(folder.name)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 24 }}
                  transition={{ duration: 0.35, ease }}
                  style={{ zIndex: 40 + layer, ["--o" as string]: `${i * 32}px` }}
                  // Mobile: a sheet pinned to the bottom of the screen, right under the thumb.
                  // Desktop: a cascaded, draggable window on the desk.
                  className={`fixed inset-x-3 bottom-[calc(0.75rem+var(--o)/4)] max-h-[70svh] overflow-y-auto md:overflow-visible md:max-h-none md:absolute md:bottom-auto md:inset-x-auto md:left-[calc(14%+var(--o)*1.6)] md:top-[calc(6%+var(--o))] md:w-[min(520px,58%)] bg-paper border border-ink transition-shadow ${
                    canDrag ? "cursor-grab active:cursor-grabbing" : ""
                  } ${isFront ? "shadow-[0_24px_60px_-20px_rgba(0,0,0,0.4)]" : "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.3)]"}`}
                >
                  <div className={`sticky top-0 bg-paper flex items-center gap-2 border-b border-ink px-3 py-2 ${isFront ? "" : "opacity-60"}`}>
                    <button
                      onClick={(e) => { e.stopPropagation(); close(folder.name) }}
                      onPointerDown={(e) => e.stopPropagation()}
                      aria-label={`Close ${folder.name} window`}
                      className="relative h-3 w-3 rounded-full bg-[#FF5F57] border border-black/20 after:absolute after:-inset-3"
                    />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-black/20" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840] border border-black/20" />
                    <span className="ml-2 note uppercase tracking-wide truncate">~/desk/{folder.name.toLowerCase()}</span>
                    <button
                      onClick={(e) => { e.stopPropagation(); close(folder.name) }}
                      onPointerDown={(e) => e.stopPropagation()}
                      className="md:hidden ml-auto -my-2 -mr-3 px-4 py-3 note uppercase tracking-wide"
                      tabIndex={-1}
                      aria-hidden
                    >
                      Close ✕
                    </button>
                  </div>
                  <div className="p-5 md:p-6 cursor-auto">
                    <p className="display-md !text-[clamp(1.6rem,3vw,2.4rem)] mb-3">{folder.title}</p>
                    <p className="text-sm leading-relaxed mb-5 max-w-[46ch]">{folder.desc}</p>

                    {/* The files that live in this folder */}
                    <div className="flex flex-wrap gap-x-3 gap-y-3 mb-5 pb-5 border-b border-ink/20">
                      {filesIn(folder.name).map((f) => (
                        <div key={f.name} className="flex flex-col items-center gap-1 w-16">
                          <FileIcon src={f.src} size="sm" />
                          <span className="text-[9px] tracking-wide text-center leading-tight break-all">{f.name}</span>
                        </div>
                      ))}
                    </div>

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
      </div>
    </section>
  )
}
