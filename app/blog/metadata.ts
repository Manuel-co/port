import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and tutorials on React, Next.js, JavaScript, and modern web development by Nweke Manuchimso.",
  keywords: [
    "Web Development Blog",
    "React Tutorials",
    "Next.js Articles",
    "JavaScript Tips",
    "Technical Writing",
    "Programming Tutorials",
    "Frontend Development",
    "Nweke Manuchimso Blog",
    "Nweke Emmanuel",
  ],
  openGraph: {
    title: "Blog | Nweke Manuchimso",
    description: "Technical articles and tutorials on React, Next.js, JavaScript, and modern web development.",
    type: "website",
    url: "https://manuchim.site/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nweke Manuchimso Blog" }],
  },
  alternates: {
    canonical: "https://manuchim.site/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Nweke Manuchimso",
    description: "Technical articles and tutorials on React, Next.js, and modern web development.",
    creator: "@NwekeManuchimso",
    images: ["/og-image.png"],
  },
};
