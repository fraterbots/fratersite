
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5538988358431"; // Número do WhatsApp
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
      size="icon"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="sr-only">Fale no WhatsApp</span>
    </Button>
  );
};

export default FloatingWhatsAppButton;
