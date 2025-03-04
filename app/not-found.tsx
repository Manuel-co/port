"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedPage } from "@/components/ui/animated-page";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-24">
        <div className="container">
          <AnimatedPage className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-400 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="hover:bg-white/20 transition-colors">
              <Link href="/">Go Back Home</Link>
            </Button>
          </AnimatedPage>
        </div>
      </main>
      <Footer />
    </div>
  );
} 