import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white text-black">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto group">
            <div className="absolute inset-0 rounded-full "></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Male%20Memojis-Bs1QqTa06Ao8hBOm0sQZ3XkeNeen0m.svg"
              alt="Your Memoji"
              width={400}
              height={400}
              className="relative z-10 object-contain animate-pulse-slow transition-all duration-300 ease-in-out group-hover:rotate-[5deg]"
              priority
            />
            <div className="absolute inset-0 rounded-full border-4 border-white"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate front-end developer, technical writer, and web3 enthusiast with a keen eye for design
              and a love for creating seamless user experiences. With expertise spanning traditional web development
              and blockchain technologies, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-700 mb-6">
              My journey in tech began with front-end development, where I honed my skills in creating responsive,
              accessible, and performant web applications. As I grew as a developer, I discovered my talent for
              explaining complex technical concepts, which led me to technical writing.
            </p>
            <p className="text-gray-700">
              Most recently, I've been exploring the exciting world of web3 development, building decentralized
              applications and smart contracts that push the boundaries of what's possible on the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 