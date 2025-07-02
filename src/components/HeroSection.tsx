
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bot, ChevronRight, Sparkles, Target, Eye, Brain, Cpu, Zap, MessageCircle, ArrowDown } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de conversar com o FraterAssist sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/5538991003466?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-80"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-float opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-90" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-primary/70 rounded-full animate-float opacity-70" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float opacity-50" style={{animationDelay: '4s'}}></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full blur-3xl animate-float"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(129,214,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(129,214,55,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col justify-center">
        {/* Top Badge - Movido mais para baixo */}
        <div className="text-center mb-8 animate-slide-up pt-20 md:pt-24">
          <Badge variant="outline" className="border-primary/80 text-primary bg-primary/10 backdrop-blur-sm px-6 py-2 text-sm animate-bounce-in">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse text-primary" />
            <Zap className="mr-2 h-3 w-3 text-primary" />
            Converse. Encante. Converta.
          </Badge>
        </div>

        {/* Main Hero Content - Centered */}
        <div className="text-center space-y-8 max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="block text-white animate-slide-up mb-4">
                O Futuro da
              </span>
              <span className="block text-primary animate-fade-in font-extrabold text-shadow-lg">
                Automação
              </span>
              <span className="block text-white animate-slide-up mt-4" style={{animationDelay: '1s'}}>
                Chegou
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '1.5s'}}>
            <Bot className="inline mr-3 h-8 w-8 text-primary animate-float" />
            Transformamos sua empresa com chatbots inteligentes que revolucionam 
            <span className="text-primary font-semibold"> a comunicação empresarial</span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in" style={{animationDelay: '2s'}}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection("casos")}
              className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-600 text-black font-bold shadow-2xl hover:shadow-primary/25 hover-lift group border-0 px-12 py-6 text-lg rounded-full"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform text-black" />
              Transforme Seu Atendimento
              <ChevronRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform text-black" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => scrollToSection("servicos")} 
              className="border-2 border-primary/80 bg-primary/10 hover:bg-primary/20 hover:border-primary text-white hover-lift backdrop-blur-sm px-12 py-6 text-lg font-semibold rounded-full"
            >
              <Eye className="mr-3 h-6 w-6 text-primary" />
              Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Floating Chat Components - Better positioned */}
        <div className="absolute top-32 left-4 animate-float hidden xl:block">
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-4 border border-primary/30 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-green-400 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-black" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">WhatsApp Bot</p>
                <p className="text-primary text-xs font-semibold">Online</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm">
              ✨ Automatize 95% do seu atendimento
            </p>
          </div>
        </div>

        <div className="absolute top-32 right-4 animate-float hidden xl:block" style={{animationDelay: '1.5s'}}>
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-4 border border-accent/30 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">IA Avançada</p>
                <p className="text-primary text-xs font-semibold">Aprendendo</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm">
              🚀 Respostas inteligentes 24/7
            </p>
          </div>
        </div>

        <div className="absolute bottom-60 left-4 animate-float hidden xl:block" style={{animationDelay: '3s'}}>
          <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-2xl p-4 border border-primary/30 shadow-xl max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-primary rounded-full flex items-center justify-center">
                <Cpu className="h-4 w-4 text-black" />
              </div>
              <div>
                <p className="text-white text-sm font-medium">Automação</p>
                <p className="text-primary text-xs font-semibold">Ativo</p>
              </div>
            </div>
            <p className="text-gray-200 text-sm">
              ⚡ Eficiência aumentada em 300%
            </p>
          </div>
        </div>

        {/* Scroll Indicator - Movido para cima para não sobrepor os botões */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("sobre")}
            className="text-primary hover:text-green-400 transition-colors group"
          >
            <ArrowDown className="h-8 w-8 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
