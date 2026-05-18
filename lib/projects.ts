export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    slug: "shax-x-photography",
    title: "Shax_x Photography Portfolio",
    description: "A modern, professional photography portfolio website built with Next.js 15, featuring stunning animations, responsive design, and a focus on showcasing Nigerian photography excellence.",
    longDescription: "Shax_x is a professional photography portfolio built to showcase the work of a Nigerian photographer. The site features smooth page transitions, a masonry gallery layout, and a fully responsive design optimized for all screen sizes. Built with Next.js 15 and Framer Motion for fluid animations, it delivers a premium visual experience that puts the photography front and center.",
    image: "/shax.png",
    technologies: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/Manuel-co/shax_x",
    demo: "https://shax-x.vercel.app/",
  },
  {
    slug: "file-sharing-app",
    title: "File Sharing App",
    description: "A file sharing app that allows users to share files with each other using cloud storage and role-based access control.",
    longDescription: "A secure file sharing web application built with Next.js and Permit.io. Users can upload, share, edit, and manage files with fine-grained role-based access control (Admin, Editor, Viewer). Files are stored on AWS S3 with metadata in Google Firestore. Permit.io enforces permissions at the API level, ensuring users can only access what they're authorized for.",
    image: "/share.png",
    technologies: ["Next.js", "Tailwind CSS", "AWS S3", "Permit.io", "Firebase"],
    github: "https://github.com/Manuel-co/files-share-permit.io",
    demo: "https://file-share-nine-pi.vercel.app/",
  },
  {
    slug: "aninews",
    title: "AniNews",
    description: "A Next.js anime discovery site powered by the Anime News Network encyclopedia API.",
    longDescription: "AniNews is an anime discovery platform that pulls live data from the Anime News Network Encyclopedia API — no auth, no API keys required. Users can search, filter, and explore anime titles with detailed information. Built with Zustand for state management and shadcn/ui for the component library.",
    image: "/aninews.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Zustand", "shadcn/ui"],
    github: "https://github.com/Manuel-co/aninews",
    demo: "https://aninews-blond.vercel.app/",
  },
  {
    slug: "anime-news-landing",
    title: "Anime News Landing",
    description: "A landing page that helps developers discover and use the Anime News Network Encyclopedia API — free, no auth, no API keys required.",
    longDescription: "A developer-focused landing page documenting the Anime News Network Encyclopedia API. The page explains the API's capabilities, shows example requests and responses, and helps developers get started quickly without needing to sign up or obtain API keys.",
    image: "/news.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    github: "https://github.com/Manuel-co/news-anime",
    demo: "https://news-anime.vercel.app/",
  },
  {
    slug: "subtitle-translator",
    title: "Subtitle Translator",
    description: "A simple subtitle translator app that converts SRT files to different languages using the LibreTranslate API.",
    longDescription: "A web app that lets users upload SRT subtitle files and translate them into any supported language using the free LibreTranslate API. The app parses the SRT format, sends text blocks to the translation API, and reassembles the translated file for download — all in the browser.",
    image: "/trans.png",
    technologies: ["React.js", "LibreTranslate API"],
    github: "https://github.com/Manuel-co/subtitle-translator",
    demo: "https://subtitle-translator.vercel.app/",
  },
  {
    slug: "ph-estate",
    title: "PH Estate",
    description: "A real estate listing site for properties in Port Harcourt, Nigeria.",
    longDescription: "PH Estate is a real estate listing platform for properties in Port Harcourt, Nigeria. Users can browse listings, filter by property type and price range, and view detailed property pages. Built with Next.js and shadcn/ui for a clean, professional interface.",
    image: "/phlist.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
    github: "https://github.com/Manuel-co/phestate",
    demo: "https://phestate.vercel.app/",
  },
  {
    slug: "ziron-projects",
    title: "Ziron Projects",
    description: "A professional website for Ziron Projects Limited — an engineering group in the Niger Delta specialising in EPC services, civil engineering, fabrication, procurement, and environmental solutions across Nigeria since 2010.",
    longDescription: "A corporate website for Ziron Projects Limited, an engineering group based in the Niger Delta. The site showcases their EPC services, civil engineering capabilities, fabrication, procurement, and environmental solutions. Features a clean professional design with project showcases, service listings, and contact information.",
    image: "/ziron.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://zironprojects.com/",
  },
  {
    slug: "wamze",
    title: "wamzé",
    description: "A luxury fragrance e-commerce experience — discover and shop a curated collection of premium scents with a sleek, immersive UI.",
    longDescription: "wamzé is a luxury fragrance brand website with an immersive shopping experience. The site features a curated collection of premium scents with rich product pages, smooth animations, and a sleek dark aesthetic that matches the brand's premium positioning.",
    image: "/wamze.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://www.xn--wamz-epa.com/",
  },
  {
    slug: "assemblies-of-god-church",
    title: "Assemblies of God Church",
    description: "A modern church website for Assemblies of God Choba 2, Port Harcourt — a Spirit-filled community serving 1,200+ members across 40+ nations for over 18 years.",
    longDescription: "A modern church website for Assemblies of God Choba 2, a Spirit-filled community in Port Harcourt, Nigeria. The site features service times, a word for today section, mission statement, and community information. Designed to be welcoming and accessible to both existing members and newcomers across their 40+ nations reach.",
    image: "/ag2.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://ag2choba.org/",
  },
  {
    slug: "fusion-app",
    title: "Fusion",
    description: "A freelance job board app for discovering and posting web design, UI/UX, and development opportunities.",
    longDescription: "Fusion is a freelance job board application that aggregates web design, UI/UX, and development job listings. Users can browse fixed-price and hourly projects, filter by skill level and budget, and view detailed job descriptions including client ratings, total spend, and proposal counts. Built to help freelancers quickly find relevant opportunities in the design and development space.",
    image: "/texa.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "https://fusion-app-drab.vercel.app/",
  },
 
    {
    slug: "avulex-technology",
    title: "Avulex Technology",
    description: "A forward-thinking technology company website dedicated to delivering innovative digital solutions that empower businesses to thrive in the digital age.",
    longDescription: "Avulex Technology is a forward-thinking technology company dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. The website bridges the gap between cutting-edge technology and real-world business needs, showcasing services such as custom web development, highly interactive web experiences, and scalable digital infrastructure.",
    image: "/avulex.png",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    github: "#",
    demo: "https://avulextech.site/",
  },
  {
    slug: "manuchim-dev-blog",
    title: "Nweke Manuchimso — Developer & Writer Blog",
    description: "A personal blog covering web development, cybersecurity, and technical writing — built with a neo-brutalist design aesthetic and a full CMS.",
    longDescription: "A full-featured personal blog built with Next.js 16 App Router and Supabase. Features a public-facing site with article pages, text-to-speech, dynamic OG image generation, full SEO (sitemap, robots.txt, JSON-LD structured data), and a newsletter. The admin dashboard (/admin) is protected by Supabase Auth and supports creating, editing, and publishing articles with a rich text/markdown editor, featured image uploads to Supabase Storage, and a security center with MFA status and session info. View counts are bot-protected with UA checks, referer validation, rate limiting, and session deduplication.",
    image: "/blog.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "PostgreSQL", "Supabase Auth", "Lexical", "Vercel"],
    github: "https://github.com/Manuel-co/newblog",
    demo: "https://blog.manuchim.site",
  },
   {
    slug: "job-scraper",
    title: "Job Finder",
    description: "A full-stack remote job board that automatically scrapes listings from multiple job boards and ATS public APIs, with full-text search and smart deduplication.",
    longDescription: "A full-stack remote job board built with Next.js and FastAPI. It automatically scrapes listings every 6 hours from Remotive, Arbeitnow, Himalayas, Jobicy, Remote OK, We Work Remotely, and ATS providers (Greenhouse, Lever, Ashby, SmartRecruiters, Workable). Features smart deduplication so the same job from multiple sources is stored once, full-text search across title, company, description and tags, filters by job type/source/location, structured descriptions with HTML stripped into readable sections, real company logos via Google's favicon service, a stats page with source breakdowns, and an admin dashboard with JWT auth for managing scrapes.",
    image: "/jobs.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "APScheduler"],
    github: "https://github.com/Manuel-co/job-scraper",
    demo: "https://job-scraper-nu-nine.vercel.app/",
  },

];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Newest first (reverse of declaration order)
export const projectsSorted = [...projects].reverse();
