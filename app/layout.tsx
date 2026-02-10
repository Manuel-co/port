import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Dev Portfolio | Front-End Developer | Technical Writer",
  description:
    "Professional portfolio showcasing my work as a front-end developer, technical writer, and web3 developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zalando+Sans+Expanded&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-zalando">
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  )
}