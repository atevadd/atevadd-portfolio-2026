import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block text-primary font-mono tracking-widest text-sm mb-6 border border-primary/30 px-3 py-1 bg-primary/5">
              PRINCIPAL ENGINEER (FRONTEND)
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-4"
          >
            Tofunmi Adeniyi<span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-4xl text-muted-foreground font-light mb-8"
          >
            Building with <span className="text-white font-medium">React/Next</span>, <span className="text-white font-medium">Vue/Nuxt</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed mb-12"
          >
            I build pixel perfect, responsive, user-friendly, high-performance websites that are accessible to all — helping individuals and businesses achieve their goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/Tofunmi-resume.pdf"
              download
              className="group flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold tracking-wider hover:bg-white hover:text-background transition-all duration-300"
            >
              DOWNLOAD RESUME
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center justify-center px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 tracking-wider font-semibold"
            >
              VIEW WORK
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12 flex flex-col items-center gap-4"
      >
        <span className="text-xs tracking-[0.3em] font-mono text-muted-foreground rotate-180" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
