
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Rocket, Users, Phone, Settings, MessageCircle, Bot, ChevronRight, Brain, Shield, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    company: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailClick = () => {
    const email = "fraterbots@gmail.com";
    const subject = encodeURIComponent("Interesse nos serviços da FraterBots");
    const body = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
    window.open(mailtoUrl, '_blank');
  };

  const handleWhatsAppClick = () => {
    const whatsappNumber = "5538991003466";
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os chatbots da FraterBots!");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapsClick = () => {
    const mapsUrl = "https://www.google.com/maps/place/15%C2%B049'18.4%22S+43%C2%B018'50.9%22W/@-15.8217726,-43.3167138,1055m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-15.8217778!4d-43.3141389?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D";
    window.open(mapsUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.whatsapp || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios (Nome, WhatsApp e Como podemos ajudar).",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Enviando dados para webhook:", formData);

    try {
      const response = await fetch("https://webhookinova.fraterbots.com.br/webhook/fraterbots-site", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          company: formData.company || "Não informado",
          message: formData.message,
          timestamp: new Date().toISOString(),
          source: "FraterBots Website"
        }),
      });

      toast({
        title: "Solicitação Enviada!",
        description: "Sua solicitação foi enviada com sucesso. Entraremos em contato em breve!",
      });

      // Limpar formulário após envio
      setFormData({
        name: "",
        whatsapp: "",
        company: "",
        message: ""
      });

    } catch (error) {
      console.error("Erro ao enviar webhook:", error);
      toast({
        title: "Erro no Envio",
        description: "Não foi possível enviar sua solicitação. Tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="py-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,214,55,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
              <Mail className="inline mr-3 h-8 w-8 text-primary animate-float" />
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-200">
              Pronto para transformar seu negócio? Solicite contato de um de nossos especialistas!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover-lift bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Rocket className="h-5 w-5 text-primary animate-pulse" />
                  Solicite contato de um de nossos especialistas
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Vamos mostrar como nossos chatbots podem revolucionar seu atendimento no WhatsApp e Instagram
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-100">
                      <Users className="h-4 w-4 text-primary" />
                      Nome completo *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background hover:border-primary transition-colors text-white"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-100">
                      <Phone className="h-4 w-4 text-primary" />
                      WhatsApp *
                    </label>
                    <input 
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background hover:border-primary transition-colors text-white"
                      placeholder="(38) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-100">
                      <Settings className="h-4 w-4 text-primary" />
                      Empresa (opcional)
                    </label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background hover:border-primary transition-colors text-white"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium flex items-center gap-2 text-gray-100">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      Como podemos ajudar? *
                    </label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background hover:border-primary transition-colors text-white"
                      rows={3}
                      placeholder="Descreva suas necessidades..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold hover-lift animate-glow" 
                    size="lg"
                  >
                    <Bot className="mr-2 h-4 w-4 text-black" />
                    {isLoading ? "Enviando..." : "Solicitar contato"}
                    <ChevronRight className="ml-2 h-4 w-4 text-black" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover-lift bg-card border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                    <Brain className="h-5 w-5 text-primary animate-pulse" />
                    Fale Conosco
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <button 
                        onClick={handleEmailClick}
                        className="hover:text-primary transition-colors cursor-pointer text-gray-200"
                      >
                        fraterbots@gmail.com
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <button 
                        onClick={handleWhatsAppClick}
                        className="hover:text-primary transition-colors cursor-pointer text-gray-200"
                      >
                        +55 (38) 99100-3466
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <button 
                        onClick={handleMapsClick}
                        className="hover:text-primary transition-colors cursor-pointer text-gray-200 text-left"
                      >
                        Rua Adelino Dantas de Queiroz, 481, Planalto, Janaúba-MG
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                    <Shield className="h-5 w-5 text-primary animate-pulse" />
                    Por que escolher a FraterBots?
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-200">Demonstração gratuita sem compromisso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-200">Especialistas em WhatsApp e Instagram</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-200">Foco em pequenas e médias empresas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-200">Atendimento em todo norte de Minas Gerais</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
