import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Gopaddi",
    image: "https://atevadd.netlify.app/img/projects/gopaddi.png",
    description: "A social commerce application covering flights, hotels, and a social hub. One platform. Infinite possibilities.",
    tech: "Next.js, Tailwind CSS, Zustand, Websockets, Real-time",
    link: "https://gopaddi.com/",
    featured: true
  },
  {
    title: "Supplier hub",
    image: "https://atevadd.netlify.app/img/projects/goagent.png",
    description: "Dashboard for travel agencies, hotels, nightlife, and restaurants to reach a vast market.",
    tech: "React, Tailwind CSS, Zustand, Websockets, Real-time",
    link: "https://supplier.gopaddi.com/",
    featured: true
  },
  {
    title: "Iworkplacelearning",
    image: "https://atevadd.netlify.app/img/projects/iwork.png",
    description: "A platform for professional learning, problem-solving, and coaching.",
    tech: "React, Tailwind, Zustand, Vite",
    link: "https://iworkplacelearning.com/",
    featured: false
  },
  {
    title: "Corporate Ewa",
    image: "https://atevadd.netlify.app/img/projects/corporate-ewa.jpg",
    description: "Web application for a Lagos food company — meal plans, custom menus, delivery, and payments.",
    tech: "Vue 3, SCSS, Laravel, Vite",
    link: "https://corporateewa.com/",
    featured: false
  },
  {
    title: "GPT3 Landing Page",
    image: "https://atevadd.netlify.app/img/projects/gpt3.png",
    description: "A sleek landing page built with React, CSS, and beautiful gradients.",
    tech: "React, CSS, Gradients, Vite",
    link: "https://gpt3-landingg.netlify.app/",
    featured: false
  },
  {
    title: "Hoobank",
    image: "https://atevadd.netlify.app/img/projects/hoobank.png",
    description: "A modern business landing page with great imagery and gradient blur.",
    tech: "React, Tailwind CSS, Vite",
    link: "https://hoobankk-landing.netlify.app/",
    featured: false
  },
  {
    title: "Quiett",
    image: "https://atevadd.netlify.app/img/projects/quiett-thumbnail.png",
    description: "Receive and give anonymous feedback through a single shareable link.",
    tech: "Vue 3, Pinia, SCSS, REST API",
    link: "https://quiett.fun/",
    featured: false
  },
  {
    title: "Codedevents",
    image: "https://atevadd.netlify.app/img/projects/codedevents-thumbnail.png",
    description: "A digital event platform for organizing events efficiently and cost-effectively.",
    tech: "Vue 3, Pinia, SCSS, REST API",
    link: "https://codedvents.com/",
    featured: false
  },
  {
    title: "Movie-bloc",
    image: "https://atevadd.netlify.app/img/projects/Movie-bloc.png",
    description: "An entertainment app built with Nuxt JS.",
    tech: "Nuxt JS, Vue, CSS",
    link: "https://movie-bloc.netlify.app/",
    featured: false
  },
  {
    title: "Gittly",
    image: "https://atevadd.netlify.app/img/projects/Gitly%20_%20A%20github%20finder%20that%20lets%20you%20search%20for%20user%20on%20github.png",
    description: "A GitHub user finder with real-time search.",
    tech: "Vue, Vue Router, GitHub API",
    link: "https://gitlly.netlify.app/",
    featured: false
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-32 bg-card/20 border-y border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A collection of robust web applications and interfaces, built for performance and user experience.
          </p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-32">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`group flex flex-col ${project.featured ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className={`w-full ${project.featured ? 'md:w-7/12' : 'md:w-5/12'} relative`}>
                <div className="aspect-[16/10] overflow-hidden border border-border bg-background relative">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
                
              <div className={`w-full ${project.featured ? 'md:w-5/12' : 'md:w-7/12'}`}>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map(tech => (
                    <span key={tech} className="text-xs font-mono tracking-wider border border-border px-3 py-1 bg-background text-foreground/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <a 
            href="https://www.github.com/atevadd" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-white border-b border-transparent hover:border-primary pb-1 transition-all tracking-wider font-medium"
          >
            See more on GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
