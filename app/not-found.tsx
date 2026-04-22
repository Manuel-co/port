"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home, ArrowLeft, FolderGit2, BookOpen, Mail } from "lucide-react";

export default function NotFound() {
  const links = [
    { href: "/", label: "Home", icon: Home, color: "bg-[#6366F1]" },
    { href: "/project", label: "Projects", icon: FolderGit2, color: "bg-[#FF6B7A]" },
    { href: "/blog", label: "Blog", icon: BookOpen, color: "bg-[#2F81F7]" },
    { href: "/contact", label: "Contact", icon: Mail, color: "bg-[#FCD34D]", textColor: "text-black" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main className="pt-36 pb-24">
        <div className="container max-w-3xl mx-auto px-4 text-center">

          {/* Big 404 */}
          <div className="relative mb-8">
            <span className="text-[10rem] md:text-[14rem] font-bold text-black/5 leading-none select-none block font-zalando">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-[#FF6B7A] border-4 border-black rounded-2xl px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="text-white font-bold text-xl font-zalando">Page Not Found</span>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-lg mb-12 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-base border-4 border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(99,102,241,1)] hover:shadow-[2px_2px_0px_0px_rgba(99,102,241,1)] hover:translate-x-1 hover:translate-y-1 transition-all font-zalando">
              <Home className="w-5 h-5" /> Go Home
            </Link>
           
          </div>

        
        </div>
      </main>
      <Footer />
    </div>
  );
}
