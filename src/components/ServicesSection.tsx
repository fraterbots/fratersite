
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageCircle, Cog, ChevronRight, Instagram, Sparkles, Brain, Link as LinkIcon, Zap, Globe, Palette } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-16 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(129,214,55,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
            <Cog className="inline mr-3 h-8 w-8 text-primary animate-spin" />
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-200 mb-4">
            Soluções completas em automação e chatbots para WhatsApp, Instagram e outras plataformas
          </p>
          <p className="text-lg text-primary font-semibold">
            💡 Podemos integrar todos os serviços oferecidos com um desconto especial!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="hover-lift transition-all duration-300 bg-card border-primary/30 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2 text-white">
                <Bot className="h-5 w-5 text-primary" />
                Chatbots para WhatsApp
              </CardTitle>
              <CardDescription className="text-gray-200">
                Chatbots inteligentes e personalizados para automatizar seu atendimento no WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Atendimento 24/7 automatizado</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Integração com WhatsApp Business</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Respostas inteligentes personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Integração com as principais IA's</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 bg-card border-primary/30 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <Instagram className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2 text-white">
                <Sparkles className="h-5 w-5 text-primary" />
                Automação para Instagram
              </CardTitle>
              <CardDescription className="text-gray-200">
                Automatize respostas e interações no Instagram para aumentar o engajamento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Resposta automática em Direct</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Comentários automatizados</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Captação de leads via stories</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Integração com catálogo</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 bg-card border-primary/30 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <LinkIcon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2 text-white">
                <Brain className="h-5 w-5 text-primary" />
                Integrações Avançadas
              </CardTitle>
              <CardDescription className="text-gray-200">
                Conecte seus sistemas e ferramentas para máxima eficiência operacional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">CRM e sistemas de gestão</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">E-commerce e marketplaces</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">APIs personalizadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Sincronização de dados</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover-lift transition-all duration-300 bg-card border-primary/30 group">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:animate-pulse">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2 text-white">
                <Globe className="h-5 w-5 text-primary" />
                Criação de Landing Pages
              </CardTitle>
              <CardDescription className="text-gray-200">
                Desenvolva páginas otimizadas para conversão e integradas aos seus chatbots
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Design responsivo e moderno</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Otimização para conversão</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Integração com chatbots</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span className="text-sm text-gray-200">Analytics e acompanhamento</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
