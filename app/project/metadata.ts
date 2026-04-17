import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web development projects by Nweke Manuchimso — Next.js apps, React components, and full-stack solutions with live demos and source code.",
  keywords: [
    "Web Development Projects",
    "React Projects",
    "Next.js Portfolio",
    "JavaScript Projects",
    "Frontend Projects",
    "Open Source Projects",
    "GitHub Portfolio",
    "Nweke Manuchimso Projects",
    "Nweke Emmanuel Portfolio",
  ],
  openGraph: {
    title: "Projects | Nweke Manuchimso",
    description: "Web development projects — Next.js apps, React components, and full-stack solutions with live demos.",
    type: "website",
    url: "https://manuchim.site/project",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nweke Manuchimso Projects" }],
  },
  alternates: {
    canonical: "https://manuchim.site/project",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Nweke Manuchimso",
    description: "Web development projects — Next.js apps, React components, and full-stack solutions.",
    creator: "@NwekeManuchimso",
    images: ["/og-image.png"],
  },
};
