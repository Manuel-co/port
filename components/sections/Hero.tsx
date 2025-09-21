"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";
import BlurText from "@/components/BlurText";
// import LightRays from "../LightRays";
// import Prism from "@/components/Prism";
import LightRays from "../LightRays";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_rgba(0,0,0,0)_70%)]"></div> */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={3}
            lightSpread={1.9}
            rayLength={3}
            fadeDistance={1}
            followMouse={true}
            saturation={0}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
          />
        </div>
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-zalando">
          <span className="block">Hello, I'm</span>

          <span className="block mt-2">
            <BlurText
              text="Nweke Manuchimso"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-zalando"
            />
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 font-zalando">
          Front-End Developer | Technical Writer | Web3 Developer
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-zalando"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="secondary" className="font-zalando">
            <Link href="/project">View My Work</Link>
          </Button>
        </div>
        <div className="flex space-x-4 mt-12">
          <Link
            href="https://github.com/Manuel-co"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/NwekeManuchimso"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">X.com</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          <span className="sr-only">Scroll Down</span>
        </Link>
      </div>
    </section>
  );
}
