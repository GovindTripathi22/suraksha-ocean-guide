import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Globe } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">SurakshaNet</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </a>
            <Button variant="outline" size="sm" className="glass-card border-primary/30">
              <Globe className="w-4 h-4 mr-2" />
              EN
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-glow text-foreground">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground/80 hover:text-primary transition-colors px-2">
                Features
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-colors px-2">
                About
              </a>
              <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors px-2">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button variant="outline" size="sm" className="glass-card border-primary/30 justify-start">
                  <Globe className="w-4 h-4 mr-2" />
                  English
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary-glow text-foreground justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};