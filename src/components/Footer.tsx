
import { Bot, Mail, Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    window.open(`https://wa.me/5538991003466?text=${message}`, '_blank');
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Interesse nos serviços da FraterBots");
    const body = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    window.open(`mailto:fraterbots@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleMapsClick = () => {
    window.open("https://www.google.com/maps/place/15%C2%B049'18.4%22S+43%C2%B018'50.9%22W/@-15.8217726,-43.3167138,1055m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-15.8217778!4d-43.3141389?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D", '_blank');
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 pt-1">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <img
              src="/lovable-uploads/357358c2-8fb6-4288-b5d9-dd92bb3c9f7c.png"
              alt="FraterBots Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Revolucionando o atendimento empresarial com chatbots inteligentes para WhatsApp e Instagram.
            </p>
            <a
              href="https://www.instagram.com/frater.bots?igsh=MWF2Y2phbWJ1dTZnaQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              @frater.bots
            </a>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
              <Bot className="h-4 w-4 text-primary" />
              Serviços
            </h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              {["Chatbots para WhatsApp", "Chatbots para Instagram", "Automação de Atendimento", "Integração com Sistemas", "Suporte Técnico"].map((s) => (
                <li key={s} className="hover:text-gray-200 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <button onClick={handleEmailClick} className="flex items-center gap-2.5 hover:text-primary transition-colors group">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  fraterbots@gmail.com
                </button>
              </li>
              <li>
                <button onClick={handleWhatsAppClick} className="flex items-center gap-2.5 hover:text-primary transition-colors group">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  +55 (38) 99100-3466
                </button>
              </li>
              <li>
                <button onClick={handleMapsClick} className="flex items-start gap-2.5 hover:text-primary transition-colors text-left group">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  Rua Adelino Dantas de Queiroz, 481, Planalto, Janaúba-MG
                </button>
              </li>
            </ul>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Informações Legais</h3>
            <ul className="space-y-2.5 text-gray-400 text-sm">
              <li>
                <Link to="/termos-de-uso" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FraterBots. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Uma solução Frater Bots — inovação e performance em atendimento digital.
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-200"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
