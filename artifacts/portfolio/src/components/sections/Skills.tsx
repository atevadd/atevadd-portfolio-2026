import { motion } from "framer-motion";

const skills = [
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Vue 3", "Nuxt.js"]
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "SCSS/CSS", "CSS Animations"]
  },
  {
    category: "State Management",
    items: ["Zustand", "Pinia", "Vuex"]
  },
  {
    category: "Tools & APIs",
    items: ["Vite", "Git", "REST APIs", "WebSockets"]
  },
  {
    category: "Practices",
    items: ["Responsive Design", "Pixel-Perfect", "Accessibility", "Performance Optimization"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="flex-1 h-px bg-border mr-4 hidden md:block" />
            Technical Arsenal
            <span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border bg-card/30 p-8 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-white tracking-wide border-b border-border/50 pb-4">
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground group-hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-primary/80" />
                    <span className="font-light tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
