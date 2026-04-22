import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  metadataBase: new URL("https://manuchim.site"),
  title: {
    default: "Nweke Manuchimso | Next.js Developer & Frontend Developer Nigeria",
    template: "%s | Nweke Manuchimso",
  },
  description:
    "Next.js Developer and Frontend Developer in Nigeria specializing in React, responsive web design, and web performance optimization. Available for hire — freelance and full-time.",
  keywords: [
    // Core
    "Next.js Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "UI Engineer",
    "Web Performance Optimization",
    "Responsive Web Design",
    // Money keywords
    "Hire Frontend Developer",
    "Freelance Web Developer",
    "Next.js Developer for hire",
    "Frontend Developer Nigeria",
    "Web Developer Nigeria",
    "Custom Website Developer",
    "Build responsive website",
    // Low competition
    "Frontend Developer Portfolio",
    "Next.js Portfolio Website",
    "React Developer Portfolio",
    "Junior Frontend Developer Nigeria",
    "Fullstack Developer Portfolio Next.js",
    // Advanced
    "Component Architecture React",
    "Accessibility a11y frontend",
    "Server-side rendering Next.js",
    "Progressive Web Apps PWA",
    "Core Web Vitals optimization",
    // Name variations
    "Nweke Manuchimso",
    "Nweke Manuchimso Emmanuel",
    "Nweke Emmanuel Manuchimso",
    "Nweke Emmanuel Nweke Manuchimso",
    "Manuchimso Nweke",
    "Technical Writer",
  ],
  authors: [{ name: "Nweke Manuchimso Emmanuel", url: "https://manuchim.site" }],
  creator: "Nweke Manuchimso Emmanuel",
  publisher: "Nweke Manuchimso Emmanuel",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manuchim.site",
    title: "Nweke Manuchimso | Next.js Developer & Frontend Developer Nigeria",
    description:
      "Next.js Developer and Frontend Developer in Nigeria specializing in React, responsive web design, and web performance optimization. Available for hire.",
    siteName: "Nweke Manuchimso",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nweke Manuchimso – Front-End Developer & Technical Writer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nweke Manuchimso | Next.js Developer & Frontend Developer Nigeria",
    description:
      "Next.js Developer and Frontend Developer in Nigeria. React, responsive web design, web performance optimization. Available for hire.",
    creator: "@NwekeManuchimso",
    site: "@NwekeManuchimso",
    images: [{ url: "/og-image.png", alt: "Nweke Manuchimso – Front-End Developer & Technical Writer" }],
  },
  alternates: {
    canonical: "https://manuchim.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://manuchim.site/#person",
    name: "Nweke Manuchimso Emmanuel",
    alternateName: [
      "Nweke Manuchimso",
      "Nweke Emmanuel Manuchimso",
      "Nweke Emmanuel Nweke Manuchimso",
      "Manuchimso Nweke",
      "Emmanuel Nweke",
    ],
    url: "https://manuchim.site",
    image: "https://manuchim.site/logo.png",
    jobTitle: "Next.js Developer & Frontend Developer",
    description:
      "Next.js Developer and Frontend Developer in Nigeria specializing in React, responsive web design, web performance optimization, and technical writing. Available for hire — freelance and full-time.",
    email: "manuchimsoemmanuel2k@gmail.com",
    sameAs: [
      "https://github.com/Manuel-co",
      "https://twitter.com/NwekeManuchimso",
      "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/",
      "https://medium.com/@manuchimsoemmanuel2k",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "Web Performance Optimization",
      "Responsive Web Design",
      "Core Web Vitals",
      "Server-side Rendering",
      "Progressive Web Apps",
      "Component Architecture",
      "Accessibility",
      "Technical Writing",
      "UI Engineering",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://manuchim.site/#website",
    name: "Nweke Manuchimso",
    url: "https://manuchim.site",
    description:
      "Portfolio of Nweke Manuchimso Emmanuel – Front-End Developer & Technical Writer.",
    author: { "@id": "https://manuchim.site/#person" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://manuchim.site/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded&display=swap" rel="stylesheet" />
        {/* LLMs.txt — AI crawler discovery */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-zalando bg-white text-black">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
