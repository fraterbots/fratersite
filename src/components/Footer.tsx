
import { Bot, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/5538991003466?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    const email = "fraterbots@gmail.com";
    const subject = encodeURIComponent("Interesse nos serviços da FraterBots");
    const body = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/place/15%C2%B049'18.4%22S+43%C2%B018'50.9%22W/@-15.8217726,-43.3167138,1055m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-15.8217778!4d-43.3141389?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapsUrl, '_blank');
  };

  return (
    <footer className="bg-slate-950 border-t border-primary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/357358c2-8fb6-4288-b5d9-dd92bb3c9f7c.png" 
                alt="FraterBots Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Revolucionando o atendimento empresarial com chatbots inteligentes para WhatsApp e Instagram.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/frater.bots?igsh=MWF2Y2phbWJ1dTZnaQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Serviços
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Chatbots para WhatsApp</li>
              <li>Chatbots para Instagram</li>
              <li>Automação de Atendimento</li>
              <li>Integração com Sistemas</li>
              <li>Suporte Técnico</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <button 
                  onClick={handleEmailClick}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  fraterbots@gmail.com
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  +55 (38) 99100-3466
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <button 
                  onClick={handleMapsClick}
                  className="hover:text-primary transition-colors cursor-pointer text-left"
                >
                  Rua Adelino Dantas de Queiroz, 481, Planalto, Janaúba-MG
                </button>
              </li>
            </ul>
          </div>

          {/* Links Legais */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informações Legais</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link 
                  to="/termos-de-uso" 
                  className="hover:text-primary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link 
                  to="/politica-de-privacidade" 
                  className="hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/30 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} FraterBots. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Desenvolvido com ❤️ para revolucionar seu atendimento digital.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
