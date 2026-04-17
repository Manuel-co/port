import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import { DotFieldBackground } from "@/components/DotFieldBackground"

export const metadata: Metadata = {
  metadataBase: new URL("https://manuchim.site"),
  title: {
    default: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    template: "%s | Nweke Manuchimso",
  },
  description:
    "Front-End Developer & Technical Writer specializing in React, Next.js, and modern web development. Explore my projects and technical articles.",
  keywords: [
    "Front-End Developer",
    "Technical Writer",
    "React Developer",
    "Next.js",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Nweke Manuchimso",
    "Nweke Manuchimso Emmanuel",
    "Nweke Emmanuel Manuchimso",
    "Nweke Emmanuel Nweke Manuchimso",
    "Manuchimso Nweke",
    "Emmanuel Nweke",
    "Nweke Emmanuel",
    "Software Engineer",
    "Web Developer Nigeria",
    "Frontend Engineer",
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
    title: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    description:
      "Front-End Developer & Technical Writer specializing in React, Next.js, and modern web development. Explore my projects and technical articles.",
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
    title: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    description:
      "Front-End Developer & Technical Writer specializing in React, Next.js, and modern web development.",
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
    jobTitle: "Front-End Developer & Technical Writer",
    description:
      "Professional Front-End Developer and Technical Writer specializing in React, Next.js, and modern web development.",
    email: "manuchimsoemmanuel2k@gmail.com",
    sameAs: [
      "https://github.com/Manuel-co",
      "https://twitter.com/NwekeManuchimso",
      "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/",
      "https://medium.com/@manuchimsoemmanuel2k",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Technical Writing",
      "Frontend Development",
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
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-zalando">
        <DotFieldBackground />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
