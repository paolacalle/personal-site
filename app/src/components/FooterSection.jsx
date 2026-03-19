import { Github } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="py-8 mt-16">
      <div className="container flex flex-col items-center justify-center gap-1 text-center text-sm text-muted-foreground">
        
        <a
          href="https://github.com/paolacalle/personal-site"
          target="_blank"
          rel="noreferrer"
          aria-label="View source code on GitHub"
          className="footer-button group"
        >
          <Github className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
          <span>Source Code</span>
        </a>

        <p>This Site was built with React, Tailwind CSS, and Vite. &copy; {new Date().getFullYear()} Paola Calle. All rights reserved.</p>
      </div>
    </footer>
  );
};