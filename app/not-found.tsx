"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedPage } from "@/components/ui/animated-page";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white  py-24">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-3xl mx-auto text-center">
            <div className="relative">
              <h1 className="text-9xl font-bold mb-4 text-white/10 absolute top-0 left-1/2 -translate-x-1/2 -z-10">
                404
              </h1>
              <h2 className="text-4xl font-bold mb-4 relative">Oops! Page Not Found</h2>
              <p className="text-gray-400 mb-12 max-w-md mx-auto relative">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                variant="outline" 
                className="group hover:bg-white/10 transition-all duration-300"
              >
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Go Back
                </Link>
              </Button>
              <Button 
                asChild 
                className="bg-white text-black hover:bg-white/90 transition-all duration-300"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Home Page
                </Link>
              </Button>
            </div>

            <div className="mt-16 p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-4">
                If you believe this is a mistake or need assistance, feel free to contact us.
              </p>
              <Button 
                asChild 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </AnimatedPage>
        </div>
      </main>
      <Footer />
    </div>
  );
} 