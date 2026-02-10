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
    <section className="relative min-h-screen h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
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
      <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl w-full">
        <h1 className="text-[1.5rem] min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-zalando px-3 sm:px-4 leading-tight w-full">
          <span className="block text-lg min-[400px]:text-xl sm:text-3xl md:text-4xl lg:text-5xl">Hello, I'm</span>

          <span className="block mt-2 break-words hyphens-auto max-w-full overflow-hidden" lang="en">
            <BlurText
              text="Nweke Manuchimso"
              delay={100}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 font-zalando break-words leading-tight max-w-full"
            />
          </span>
        </h1>
        <p className="text-sm min-[400px]:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-6 sm:mb-8 font-zalando px-3 sm:px-4 w-full">
          Front-End Developer | Technical Writer 
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto px-3 sm:px-4 max-w-md sm:max-w-none">
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 font-zalando rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild variant="secondary" className="font-zalando bg-gray-900/30 border-2 border-gray-400 text-gray-400 hover:bg-gray-900/30 hover:border-gray-400 hover:text-gray-400 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto">
            <Link href="/project">View My Work</Link>
          </Button>
        </div>
        <div className="flex space-x-6 sm:space-x-4 mt-8 sm:mt-12">
          <Link
            href="https://github.com/Manuel-co"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/NwekeManuchimso"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">X.com</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nweke-emmanuel-435a3923b/"
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
      
    </section>
  );
}
