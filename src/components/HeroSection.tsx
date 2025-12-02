import { motion } from "framer-motion";
import { Hero3D } from "./Hero3D";
import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { displayedText: categoryText } = useTypewriter(
    "Civil Engineering × Technology",
    80,
    500
  );
  
  const { displayedText: quoteText } = useTypewriter(
    "Building structures & exploring technology—one idea at a time.",
    40,
    2000
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="text-sm font-display uppercase tracking-widest text-primary animate-glow">
                {categoryText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
            >
              <span className="text-gradient">Nirdip Sijapati</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-muted-foreground"
            >
              Civil Engineering (Undergraduate) | Tech Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-foreground/80 max-w-xl"
            >
              "{quoteText}"
              <span className="animate-pulse ml-1">|</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan font-display"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-display"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[400px] md:h-[600px]"
          >
            <div className="absolute inset-0 glow-cyan rounded-full blur-3xl opacity-20" />
            <Hero3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
