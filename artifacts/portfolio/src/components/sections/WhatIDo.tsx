import { motion } from "framer-motion";
import { MonitorSmartphone, Ruler, Eye } from "lucide-react";

const qualities = [
  {
    title: "Responsive",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    description: "I build websites that adapt to any screen size, presenting content in the best possible way.",
  },
  {
    title: "Pixel Perfect",
    icon: <Ruler className="w-8 h-8" />,
    description: "When collaborating with designers, I recreate designs exactly as presented — no guessing, no approximations.",
  },
  {
    title: "Accessible",
    icon: <Eye className="w-8 h-8" />,
    description: "I create experiences that are attractive to users using the right colors, typography, and icons that represent the vision of the individual or business.",
  }
];

export default function WhatIDo() {
  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {qualities.map((quality, index) => (
            <motion.div
              key={quality.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="mb-6 inline-flex p-4 border border-border bg-background group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                {quality.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{quality.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
