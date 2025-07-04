
import { Button } from "@/components/ui/button";

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5538991003466";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:shadow-green-500/25 animate-pulse hover:animate-none group active:scale-95"
      style={{
        animationDuration: '3s'
      }}
      size="icon"
    >
      <div className="relative">
        {/* Ícone do WhatsApp personalizado */}
        <svg 
          className="h-8 w-8 text-white transition-all duration-300 ease-out group-hover:scale-110 group-active:scale-95" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.785"/>
        </svg>
        
        {/* Efeito de ondas com transições suaves */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping transition-all duration-300" style={{animationDuration: '3s'}}></div>
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping transition-all duration-300" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
      </div>
      
      <span className="sr-only">Fale no WhatsApp</span>
    </Button>
  );
};

export default FloatingWhatsAppButton;
