import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 relative"
          >
            {/* Abstract Placeholder for Photo */}
            <div className="aspect-[4/5] relative bg-card border border-border overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-700" />
              
              {/* Geometric pattern instead of photo */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
              
              <div className="absolute bottom-6 left-6 right-6 border border-primary/30 bg-background/80 backdrop-blur-sm p-4">
                <div className="text-sm font-mono text-primary mb-1">LOCATION</div>
                <div className="font-medium tracking-wider">Lagos, Nigeria</div>
              </div>
            </div>
            
            {/* Decorative box behind */}
            <div className="absolute -inset-4 border border-border -z-10 translate-x-4 translate-y-4" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
              About Me
              <span className="flex-1 h-px bg-border ml-4" />
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                I'm a frontend developer currently living in Lagos, Nigeria. I started my coding journey some years back and it has been an amazing journey. Over the years, I've worked on different types of websites — from ecommerce platforms, to landing pages, to corporate sites.
              </p>
              <p>
                I've collaborated with UI designers and backend developers to bring these projects to life. I help individuals sell themselves to companies by building websites that align with their goals and send a clear message.
              </p>
              <p>
                I also help businesses reach customers by giving them an online platform to showcase what they do. When I'm not coding, I enjoy reading, teaching, and taking long walks.
              </p>
              <p className="text-white font-medium border-l-2 border-primary pl-4 py-1 mt-8">
                I freelance and I'm also available to work.
              </p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
