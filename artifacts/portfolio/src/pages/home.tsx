import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import AboutMe from "@/components/sections/AboutMe";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollProgress from "@/components/ui/scroll-progress";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background selection:bg-primary selection:text-white">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <WhatIDo />
      <AboutMe />
      <FeaturedProjects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
