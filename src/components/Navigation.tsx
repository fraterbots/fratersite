
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X, MessageCircle } from "lucide-react";
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

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar com o FraterAssist sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/5538991003466?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img 
                src="/lovable-uploads/f692b86b-94dc-495a-a72c-ed2327a6fe03.png" 
                alt="FraterBots Logo" 
                className="h-12 md:h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {["home", "sobre", "servicos", "casos", "contato"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link text-sm font-medium transition-all duration-300 ease-out hover:text-primary hover:scale-105 active:scale-95 ${
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
            onClick={handleWhatsAppClick} 
            className="btn-smooth animate-glow hidden md:flex bg-primary hover:bg-primary/90 text-black font-bold transition-all duration-300 ease-out"
            size="sm"
          >
            <MessageCircle className="mr-2 h-4 w-4 text-black transition-all duration-200" />
            <span className="hidden lg:inline">Converse com nosso assistente virtual FraterAssist</span>
            <span className="lg:hidden">FraterAssist</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-200 hover:text-primary transition-all duration-300 ease-out hover:scale-110 active:scale-95"
          >
            {isMobileMenuOpen ? 
              <X className="h-6 w-6 transition-all duration-200" /> : 
              <Menu className="h-6 w-6 transition-all duration-200" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-3 pt-4">
              {["home", "sobre", "servicos", "casos", "contato"].map((section) => (
                <button
                  key={section}
                  onClick={() => handleMenuClick(section)}
                  className={`text-left text-sm font-medium transition-all duration-300 ease-out hover:text-primary hover:translate-x-2 active:scale-95 px-2 py-1 ${
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
                onClick={handleWhatsAppClick} 
                className="mt-4 w-full bg-primary hover:bg-primary/90 text-black font-bold btn-smooth"
                size="sm"
              >
                <MessageCircle className="mr-2 h-4 w-4 text-black transition-all duration-200" />
                Converse com nosso assistente virtual FraterAssist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
