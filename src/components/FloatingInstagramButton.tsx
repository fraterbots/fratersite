
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const FloatingInstagramButton = () => {
  const handleInstagramClick = () => {
    const instagramUrl = "https://www.instagram.com/frater.bots/?igsh=MWF2Y2phbWJ1dTZnaQ%3D%3D#";
    window.open(instagramUrl, '_blank');
  };

  return (
    <Button
      onClick={handleInstagramClick}
      className="fixed bottom-6 left-6 z-50 h-16 w-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 hover:from-pink-600 hover:via-purple-600 hover:to-orange-500 shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:shadow-pink-500/25 animate-pulse hover:animate-none group active:scale-95"
      style={{
        animationDuration: '3s'
      }}
      size="icon"
    >
      <div className="relative">
        <Instagram className="h-8 w-8 text-white transition-all duration-300 ease-out group-hover:scale-110 group-active:scale-95" />
        
        {/* Efeito de ondas com transições suaves */}
        <div className="absolute inset-0 rounded-full bg-pink-400 opacity-30 animate-ping transition-all duration-300" style={{animationDuration: '3s'}}></div>
        <div className="absolute inset-0 rounded-full bg-purple-400 opacity-20 animate-ping transition-all duration-300" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
      </div>
      
      <span className="sr-only">Siga no Instagram</span>
    </Button>
  );
};

export default FloatingInstagramButton;
