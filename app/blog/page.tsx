import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { Header } from "../../components/layout/Header"


export default function BlogPage() {
  const articles = [
    {
      title: "Translate Subtitles using the LibreTranslate API",
      description: "In this article, we will focus on building a subtitle translator, an app that can translate subtitle files, with the SRT extension, to a different language.",
      category: "Tutorial",
      link: "https://blog.openreplay.com/translate-subtitles-using-the-libre-translate-api/",
    },
    {
      title: "Creating Stunning Particle Animations with React and TsParticles",
      description: "React TsParticles is a popular open-source library that enables you to integrate particle animations into your React applications easily. It is built on top of the TsParticles library, which provides a flexible and customizable way to create various particle effects and animations.",
      category: "Tutorial",
      link: "#",
    },
    {
      title: "Routing in React with React Location",
      description: "In this tutorial, you will learn how to use React Location to handle routing in a React application. You should be familiar with React and have Node installed in your system. We will start by introducing React Location, what it is, and its benefits, then we will learn how to use React Location in a real-world case by building a food recipe web application.",
      category: "Tutorial",
      link: "https://blog.openreplay.com/routing-in-react-with-react-location/",
    },
    {
      title: "Optimizing React's Performance",
      description: "Application performance optimization is crucial for developers concerned about maintaining a pleasant user experience to keep users engaged. According to Akamai's research, developers must build apps optimized for speed; every additional second of load time can lead to a 7% drop in conversions.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/optimizing-reacts-performance/",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24">
            <Header />

      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
          <p className="text-gray-400 mb-8">
            Technical articles, tutorials, and insights about web development, React, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <Card key={index} className="bg-white/5 border-white/10 text-white overflow-hidden">
              <CardContent className="p-6">
                <Badge className="mb-4">{article.category}</Badge>
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {article.description}
                </p>
                <Button asChild>
                  <Link href={article.link} className="flex items-center" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Article
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-400 mb-8">
            Want to read more? Check out my latest articles on various platforms.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="https://blog.openreplay.com/" target="_blank">
                OpenReplay Blog
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://dev.to/" target="_blank">
                Dev.to
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://medium.com/" target="_blank">
                Medium
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
