export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm tracking-wide">
          &copy; {currentYear} Tofunmi Adeniyi. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://www.github.com/atevadd" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors text-sm font-medium tracking-widest"
          >
            GITHUB
          </a>
          <a 
            href="mailto:adeniyitofunmi@gmail.com" 
            className="text-muted-foreground hover:text-white transition-colors text-sm font-medium tracking-widest"
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
