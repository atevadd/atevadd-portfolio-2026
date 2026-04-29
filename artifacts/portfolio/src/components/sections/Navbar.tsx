import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="group flex items-center justify-center w-12 h-12 border-2 border-primary bg-background relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <svg viewBox="0 0 40 40" className="w-8 h-8 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="8" y="28" fontFamily="Playfair Display" fontStyle="italic" fontSize="24" fill="white">T</text>
            <text x="18" y="28" fontFamily="Playfair Display" fontSize="24" fill="white">A</text>
          </svg>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium tracking-wider text-muted-foreground hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href="/assets/Tofunmi-Adeniyi-CV.pdf"
            download
            className="px-6 py-2 border border-primary text-primary text-sm font-semibold tracking-wider hover:bg-primary hover:text-white transition-all duration-300"
          >
            RESUME
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isMobileMenuOpen ? "auto" : 0, opacity: isMobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-background border-b border-border/50"
      >
        <nav className="flex flex-col items-center py-8 gap-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-lg font-medium tracking-wider text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/assets/Tofunmi-Adeniyi-CV.pdf"
            download
            className="px-8 py-3 border border-primary text-primary font-semibold tracking-wider hover:bg-primary hover:text-white transition-all mt-4"
          >
            DOWNLOAD RESUME
          </a>
        </nav>
      </motion.div>
    </header>
  );
}
