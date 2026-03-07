import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  metadataBase: new URL('https://manuchim.site'),
  title: {
    default: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    template: "%s | Nweke Manuchimso"
  },
  description:
    "Professional portfolio of Nweke Manuchimso - Front-End Developer and Technical Writer specializing in React, Next.js, and modern web development. Explore my projects, blog posts, and technical articles.",
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
    "Manuchimso Nweke",
    "Emmanuel Nweke",
    "Software Engineer",
    "Web Developer Nigeria",
    "Frontend Engineer"
  ],
  authors: [{ 
    name: "Nweke Manuchimso Emmanuel", 
    url: "https://manuchim.site" 
  }],
  creator: "Nweke Manuchimso Emmanuel",
  publisher: "Nweke Manuchimso Emmanuel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manuchim.site",
    title: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    description: "Professional portfolio showcasing web development projects, technical articles, and expertise in React, Next.js, and modern web technologies.",
    siteName: "Nweke Manuchimso Portfolio",
    images: [
      {
        url: "/og-image.png", // Create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: "Nweke Manuchimso - Front-End Developer & Technical Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nweke Manuchimso | Front-End Developer & Technical Writer",
    description: "Professional portfolio showcasing web development projects and technical articles.",
    creator: "@NwekeManuchimso",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nweke Manuchimso Emmanuel",
    "alternateName": [
      "Nweke Manuchimso",
      "Nweke Emmanuel Manuchimso",
      "Manuchimso Nweke",
      "Emmanuel Nweke"
    ],
    "url": "https://manuchim.site",
    "jobTitle": "Front-End Developer & Technical Writer",
    "description": "Professional Front-End Developer and Technical Writer specializing in React, Next.js, and modern web development",
    "sameAs": [
      "https://github.com/Manuel-co",
      "https://twitter.com/NwekeManuchimso",
      "https://www.linkedin.com/in/nweke-emmanuel-435a3923b/",
      "https://medium.com/@manuchimsoemmanuel2k"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Technical Writing",
      "Frontend Development"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-zalando">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}