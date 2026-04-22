import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Frontend Performance, Next.js & React Tutorials",
  description: "Technical articles on Next.js, React performance, Core Web Vitals, and frontend development by Nweke Manuchimso — Frontend Developer Nigeria.",
  keywords: [
    "Next.js tutorials",
    "React Developer blog",
    "Frontend Performance Optimization",
    "Core Web Vitals optimization",
    "How to build a Next.js portfolio website",
    "Next.js vs React performance",
    "Improve Core Web Vitals Next.js",
    "How to optimize frontend performance",
    "Server-side rendering Next.js",
    "Nweke Manuchimso blog",
  ],
  openGraph: {
    title: "Blog — Frontend Performance, Next.js & React Tutorials | Nweke Manuchimso",
    description: "Technical articles on Next.js, React, Core Web Vitals, and frontend development.",
    type: "website",
    url: "https://manuchim.site/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nweke Manuchimso Blog" }],
  },
  alternates: { canonical: "https://manuchim.site/blog" },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Frontend Performance, Next.js & React Tutorials | Nweke Manuchimso",
    description: "Technical articles on Next.js, React, and frontend performance.",
    creator: "@NwekeManuchimso",
    images: ["/og-image.png"],
  },
};
