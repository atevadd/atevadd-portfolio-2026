import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary/5 border-t border-primary/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-sm font-mono text-primary tracking-[0.3em] mb-6">LET'S GET STARTED</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
            Need a Responsive, User-friendly, Pixel-perfect website?
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:adeniyitofunmi@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-5 text-lg font-semibold tracking-wider hover:bg-white hover:text-background transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              SEND ME AN EMAIL
            </a>

            <a
              href="/Tofunmi-resume.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-3 border border-border bg-background text-foreground px-8 py-5 text-lg font-semibold tracking-wider hover:border-primary hover:text-primary transition-all duration-300 group"
            >
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              DOWNLOAD RESUME
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
