import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Next.js & React Developer Portfolio",
  description: "Next.js Portfolio Projects by Nweke Manuchimso — Frontend Developer Nigeria. Custom websites, React apps, and full-stack solutions with live demos and source code.",
  keywords: [
    "Next.js Portfolio Projects",
    "React Developer Portfolio",
    "Frontend Developer Portfolio",
    "Custom Website Developer",
    "Build responsive website",
    "Next.js Developer Nigeria",
    "Web Developer Nigeria",
    "Fullstack Developer Portfolio Next.js",
    "Nweke Manuchimso Projects",
  ],
  openGraph: {
    title: "Projects — Next.js & React Developer Portfolio | Nweke Manuchimso",
    description: "Next.js and React projects by Nweke Manuchimso — Frontend Developer Nigeria. Live demos and source code.",
    type: "website",
    url: "https://manuchim.site/project",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nweke Manuchimso Projects" }],
  },
  alternates: { canonical: "https://manuchim.site/project" },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Next.js & React Developer Portfolio | Nweke Manuchimso",
    description: "Next.js and React projects by Nweke Manuchimso — Frontend Developer Nigeria.",
    creator: "@NwekeManuchimso",
    images: ["/og-image.png"],
  },
};
