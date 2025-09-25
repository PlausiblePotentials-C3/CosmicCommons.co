import { useState, useEffect } from "react";
import { Menu, X, Book } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onGlossaryOpen?: (term?: string) => void;
}

export default function Navigation({ onGlossaryOpen }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Foundational Pillars" },
    { id: "how-it-works", label: "How It Works" },
    { id: "economy", label: "Economy" },
    { id: "onboarding", label: "Join Alliance" },
    { id: "rights-governance", label: "Rights & Governance" },
    { id: "infrastructure", label: "Infrastructure" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold gradient-text"
            data-testid="logo-button"
          >
            C3 Alliance
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-accent"
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Glossary Button */}
            {onGlossaryOpen && (
              <button
                onClick={() => onGlossaryOpen()}
                className="flex items-center gap-2 px-3 py-2 text-sm bg-primary/10 hover:bg-primary/20 rounded-lg transition-all duration-200 text-accent hover:text-white"
                data-testid="nav-glossary"
              >
                <Book size={16} />
                Glossary
              </button>
            )}
          </div>
          
          {/* Mobile Menu Button and Glossary */}
          <div className="lg:hidden flex items-center gap-3">
            {onGlossaryOpen && (
              <button
                onClick={() => onGlossaryOpen()}
                className="p-2 text-accent hover:text-white transition-colors duration-200"
                data-testid="mobile-glossary"
              >
                <Book size={20} />
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-accent"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-accent"
                  }`}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
