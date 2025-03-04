import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function Blog() {
  return (
    <section id="writing" className="py-20 bg-black text-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Latest Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Writing Sample 1 */}
          <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
            <CardContent className="p-6">
              <Badge className="mb-4">Tutorial</Badge>
              <h3 className="text-xl font-bold mb-2">
                Translate Subtitles using the LibreTranslate API
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                In this article, we will focus on building a subtitle translator, an app that can translate subtitle files, with the SRT extension, to a different language.
              </p>
              <Button asChild>
                <Link href="https://blog.openreplay.com/translate-subtitles-using-the-libre-translate-api/" className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Writing Sample 2 */}
          <Card className="bg-white/5 border-white/10 text-white overflow-hidden">
            <CardContent className="p-6">
              <Badge className="mb-4">Tutorial</Badge>
              <h3 className="text-xl font-bold mb-2">Routing in React with React Location</h3>
              <p className="text-gray-400 mb-4 line-clamp-2">
                In this tutorial, you will learn how to use React Location to handle routing in a React application. You should be familiar with React and have Node installed in your system. We will start by introducing React Location, what it is, and its benefits, then we will learn how to use React Location in a real-world case by building a food recipe web application.
              </p>
              <Button asChild>
                <Link href="https://blog.openreplay.com/routing-in-react-with-react-location/" className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Read Article
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="hover:bg-white/20">
            <Link href="/blog">View All Blog Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 