"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Search } from "lucide-react";
import { Header } from "../../components/layout/Header";
import { Footer } from "../../components/layout/Footer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedPage, AnimatedSection, AnimatedGrid } from "@/components/ui/animated-page";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [
    {
      title: "Translate Subtitles using the LibreTranslate API",
      description:
        "In this article, we will focus on building a subtitle translator, an app that can translate subtitle files, with the SRT extension, to a different language.",
      category: "Tutorial",
      link: "https://blog.openreplay.com/translate-subtitles-using-the-libre-translate-api/",
    },
    {
      title: "Creating Stunning Particle Animations with React and TsParticles",
      description:
        "React TsParticles is a popular open-source library that enables you to integrate particle animations into your React applications easily. It is built on top of the TsParticles library, which provides a flexible and customizable way to create various particle effects and animations.",
      category: "Tutorial",
      link: "#",
    },
    {
      title: "Routing in React with React Location",
      description:
        "In this tutorial, you will learn how to use React Location to handle routing in a React application. You should be familiar with React and have Node installed in your system. We will start by introducing React Location, what it is, and its benefits, then we will learn how to use React Location in a real-world case by building a food recipe web application.",
      category: "Tutorial",
      link: "https://blog.openreplay.com/routing-in-react-with-react-location/",
    },
    {
      title: "HTMX vs. Vue and React -- Pros and Cons",
      description:
        "HTMX is a lightweight JavaScript library for building interactive web applications. It leverages HTML attributes, making its syntax more easily learned than alternate JavaScript frameworks. This article compares HTMX, Vue, and the React JavaScript frameworks and provides use cases that would influence a developer's choice of JavaScript frameworks.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/htmx-vs-vue-and-react--pros-and-cons/",
    },
    {
      title: "Optimizing React's Performance",
      description:
        "Application performance optimization is crucial for developers concerned about maintaining a pleasant user experience to keep users engaged. According to Akamai's research, developers must build apps optimized for speed; every additional second of load time can lead to a 7% drop in conversions.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/optimizing-reacts-performance/",
    },
    {
      title: "Five Alternatives to GitHub Copilot",
      description:
        "GitHub Copilot is an AI-powered pair programming tool developed by Microsoft that helps developers write code more efficiently and accurately. It does this by providing autocomplete-style suggestions as you code based on the context of the file you are working on and related files. However, it's not the only available AI tool you can use, and this article will show you five other options.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/five-alternatives-to-github-copilot/",
    },
    {
      title: "Five Headless CMS to try in 2023",
      description:
        "A CMS, or content management system, enables users to control and arrange digital information on a website or other online platform, including text, photos, and videos. The user-friendly interface of these systems often enables users to create, modify, and publish material without being familiar with HTML or other computer languages. Tools for managing users, permissions, and different website or digital platform facets are also frequently included. This article will introduce five important packages that you should consider in 2023.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/five-headless-cms-to-try-in-2023/",
    },
    {
      title: "Implementing CSS for Older Browsers",
      description:
        "CSS is a style sheet language used to describe the presentation of a document written in HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/implementing-css-for-older-browsers/",
    },
    {
      title: "Getting Started with Alpine.js",
      description:
        "Alpine.js is a lightweight, robust, and modern JavaScript framework that allows you to add reactive behavior to your HTML elements. It is a modern, lightweight, and robust JavaScript framework that allows you to add reactive behavior to your HTML elements.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/getting-started-with-alpine-js/",
    },
    {
      title: "Five JavaScript Animation Libraries to Try Out",
      description:
        "Animation is a powerful tool for creating engaging and interactive web experiences. It can be used to make static content more dynamic, to add visual interest to a website, or to create a more seamless user experience. This article will introduce five important packages that you should consider in 2023.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/five-javascript-animation-libraries-to-try-out/",
    },
    {
      title: "All About CSS Animations",
      description:
        "CSS animations are a powerful way to add visual interest to a website. They can be used to create a more engaging and interactive user experience, or to add visual interest to a website. This article will introduce five important packages that you should consider in 2023.",
      category: "Technical Blog",
      link: "https://blog.openreplay.com/all-about-css-animations/",
    },
    {
      title: "Building a Next Generation File Sharing App with Next.js and Permit.io",
      description:
        "In this tutorial, you will learn how to build a next generation file sharing app with Next.js and Permit.io. You will learn how to use Next.js and Permit.io to build a file sharing app that allows you to share files with your friends and family.",
      category: "Tutorial",
      link: "https://medium.com/@manuchimsoemmanuel2k/building-a-next-generation-file-sharing-app-with-next-js-and-permit-io-00b8fb7e66bf",
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.description.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">Blog Posts</h1>
            <p className="text-gray-400 mb-8">
              Technical articles, tutorials, and insights about web development,
              React, and more.
            </p>

            {/* Search Input */}
            <div className="relative mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400"
              />
            </div>

            {/* Search Results Count */}
            <p className="text-gray-400 mb-8">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
            </p>
          </AnimatedPage>

          <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <AnimatePresence>
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="bg-white/5 border-white/10 text-white overflow-hidden group hover:border-white/20 transition-colors h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      <Badge className="mb-4 w-fit">{article.category}</Badge>
                      <h2 className="text-xl font-bold mb-2 group-hover:text-white/90 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
                        {article.description}
                      </p>
                      <Button asChild className="group-hover:bg-white/20 transition-colors mt-auto">
                        <Link
                          href={article.link}
                          className="flex items-center"
                          target="_blank"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Read Article
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </AnimatedGrid>

          <AnimatePresence>
            {filteredArticles.length === 0 && (
              <AnimatedSection className="text-center py-12">
                <p className="text-gray-400 mb-4">No articles found matching your search.</p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </AnimatedSection>
            )}
          </AnimatePresence>

          <AnimatedSection className="max-w-3xl mx-auto text-center" delay={0.2}>
            <p className="text-gray-400 mb-8">
              Want to read more? Check out my latest articles on various
              platforms.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild >
                <Link href="https://hashnode.com/" target="_blank">
                Hashnode
                </Link>
              </Button>
              <Button asChild >
                <Link href="https://dev.to/" target="_blank">
                  Dev.to
                </Link>
              </Button>
              <Button asChild >
                <Link href="https://medium.com/" target="_blank">
                  Medium
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}