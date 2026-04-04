import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://github.com/Galuh80" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/galuh-esa-ibrahim/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
