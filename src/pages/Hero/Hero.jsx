import { useEffect } from "react";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import HeroImg from "@/assets/images/hero.jpg";

// Grid Background
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function HeroAbout() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <main className="bg-[#020617] text-white min-h-screen relative">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-16">
        {/* Background */}
        <GridBackground />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Name and Image */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Name (single line) */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-center lg:text-left flex flex-col lg:flex-row lg:justify-start lg:items-baseline">
  <span className="flex items-baseline">
    <SparklesText text="Hello" />
    <span className="ml-2">I&apos;m</span>
    <span className="typing-effect gradient-text ml-2">Vanaja Nannepaga</span>
  </span>
</h1>


            {/* Hero Image */}
          <div className="relative w-64 h-64 rounded-full shadow-[0_0_30px_rgba(0,255,255,0.6)] overflow-hidden">
              <img
                src={HeroImg}
                className="w-full h-full object-cover rounded-full"
                alt="Vanaja Nannepaga"
              />
            </div>
          </div>

          {/* Right side - Description */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Hello! I&apos;m Vanaja Nannepaga, a Computer Science undergraduate at
              IIT Bhilai with a strong interest in software development,
              full-stack engineering, and machine learning. I enjoy turning
              complex problems into simple, efficient solutions and thrive on
              continuously learning new technologies.
            </p>
            <p>
              What excites me the most is the opportunity to build applications
              that are not only technically sound but also meaningful and
              impactful for end users. I see myself growing into a role where I
              can contribute to innovative projects, collaborate with diverse
              teams, and deliver solutions that create real value.
            </p>
          
         
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="https://github.com/Vanaja-Nannepaga"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/vanaja-nannepaga-45a197263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:vanaja.nannepaga2002@gmail.com"
                className="text-red-400 hover:text-red-500 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
           </div>
        </div>
      </section>
    </main>
  );
}

