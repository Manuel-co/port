"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";
import BlurText from "@/components/BlurText";
// import LightRays from "../LightRays";
// import Prism from "@/components/Prism";
import FloatingLines from "../FloatingLines";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-60 md:opacity-100">
        {/* <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0,_rgba(0,0,0,0)_70%)]"></div> */}
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={[5, 5, 5]}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={[5, 5, 5]}
            bendRadius={5.0}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
            linesGradient={undefined}
            topWavePosition={undefined}
            middleWavePosition={undefined}
          />
        </div>
      </div>
      <div className="container relative z-10 flex flex-col items-center text-center px-4 py-20 md:py-0">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-zalando leading-tight w-full">
          <span className="block mb-2">Hello, I'm</span>

          <span className="block relative z-20 w-full">
            <BlurText
              text="Nweke Manuchimso"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 font-zalando"
            />
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mb-8 md:mb-10 font-zalando px-4">
          Front-End Developer | Technical Writer 
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mb-10 md:mb-12">
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-zalando rounded-full px-8 py-6 text-base w-full sm:w-auto"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button 
            asChild 
            variant="secondary" 
            className="font-zalando bg-gray-900/30 border-2 border-gray-400 text-gray-400 hover:bg-gray-900/50 hover:border-gray-300 hover:text-gray-300 rounded-full px-8 py-6 text-base w-full sm:w-auto"
          >
            <Link href="/project">View My Work</Link>
          </Button>
        </div>
        <div className="flex space-x-8 md:space-x-6">
          <Link
            href="https://github.com/Manuel-co"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-6 w-6 md:h-7 md:w-7" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/NwekeManuchimso"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-6 w-6 md:h-7 md:w-7" />
            <span className="sr-only">X.com</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-6 w-6 md:h-7 md:w-7" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
     
    </section>
  );
}
