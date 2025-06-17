
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (section: string) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/357358c2-8fb6-4288-b5d9-dd92bb3c9f7c.png" 
                alt="FraterBots Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {["home", "sobre", "servicos", "casos", "contato"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 ${
                  activeSection === section ? "text-primary" : "text-gray-200"
                }`}
              >
                {section === "home" && "Home"}
                {section === "sobre" && "Sobre"}
                {section === "servicos" && "Serviços"}
                {section === "casos" && "Transforme Seu Atendimento"}
                {section === "contato" && "Contato"}
              </button>
            ))}
          </div>
          
          {/* Desktop CTA Button */}
          <Button 
            onClick={() => scrollToSection("contato")} 
            className="hover-lift animate-glow hidden md:flex bg-primary hover:bg-primary/90 text-black font-bold"
            size="sm"
          >
            <Rocket className="mr-2 h-4 w-4 text-black" />
            <span className="hidden lg:inline">Solicite uma demonstração grátis</span>
            <span className="lg:hidden">Demo grátis</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-200 hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-3 pt-4">
              {["home", "sobre", "servicos", "casos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleMenuClick(section)}
                  className={`text-left text-sm font-medium transition-all duration-300 hover:text-primary px-2 py-1 ${
                    activeSection === section ? "text-primary" : "text-gray-200"
                  }`}
                >
                  {section === "home" && "Home"}
                  {section === "sobre" && "Sobre"}
                  {section === "servicos" && "Serviços"}
                  {section === "casos" && "Transforme Seu Atendimento"}
                  {section === "contato" && "Contato"}
                </button>
              ))}
              <Button 
                onClick={() => handleMenuClick("contato")} 
                className="mt-4 w-full bg-primary hover:bg-primary/90 text-black font-bold"
                size="sm"
              >
                <Rocket className="mr-2 h-4 w-4 text-black" />
                Solicite uma demonstração grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
