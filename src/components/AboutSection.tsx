
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Cpu, Settings, Sparkles, Eye, Brain, Zap, Target, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(25,20,61,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
            <Shield className="inline mr-3 h-8 w-8 text-primary animate-float" />
            Nossa História
          </h2>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto">
            Em 2024, dois irmãos com talentos complementares decidiram transformar a forma como pequenas e médias empresas acessam a tecnologia.
          </p>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mt-4">
            Gustavo, com sua mente analítica e domínio da engenharia, uniu forças com Marcelo, um criativo nato apaixonado por design. Da união entre lógica e imaginação, nasceu a Frater Bots — uma empresa com a missão de democratizar a automação inteligente.
          </p>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mt-4">
            Mais do que criar sistemas automatizados e chatbots personalizados, eles ajudam empreendedores a ganhar tempo, eficiência e liberdade para focar no que realmente importa: fazer seus negócios crescerem.
          </p>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto mt-4 font-semibold text-primary">
            Na Frater Bots, automatizar é libertar o potencial humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover-lift bg-card border-primary/30">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-black">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center animate-float">
                  <Cpu className="h-8 w-8 text-black" />
                </div>
                <div>
                  <CardTitle className="text-xl text-black">Gustavo Ruas Caires</CardTitle>
                  <CardDescription className="text-black/80 flex items-center gap-2">
                    <Settings className="h-4 w-4 text-black" />
                    Co-fundador & Desenvolvedor
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-200">
                <Brain className="inline mr-2 h-5 w-5 text-primary animate-pulse" />
                O cérebro técnico da FraterBots, Gustavo é responsável por toda a arquitetura 
                e desenvolvimento dos chatbots. Sua expertise em programação e integrações com 
                WhatsApp e Instagram permite criar soluções robustas que realmente funcionam. 
                Ele acredita que a tecnologia deve ser acessível e transformadora para todos os negócios.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card border-primary/30">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-black">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-black/20 rounded-full flex items-center justify-center animate-float">
                  <Sparkles className="h-8 w-8 text-black" />
                </div>
                <div>
                  <CardTitle className="text-xl text-black">Marcelo Ruas Caires</CardTitle>
                  <CardDescription className="text-black/80 flex items-center gap-2">
                    <Eye className="h-4 w-4 text-black" />
                    Co-fundador & Designer
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-200">
                <Zap className="inline mr-2 h-5 w-5 text-primary animate-pulse" />
                O visionário criativo da dupla, Marcelo transforma ideias complexas em experiências 
                intuitivas e visualmente impactantes. Ele cuida de toda a identidade visual e 
                experiência do usuário, garantindo que cada chatbot não seja apenas funcional, 
                mas também uma extensão autêntica da personalidade de cada cliente.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-3 text-white">
            <Target className="h-6 w-6 text-primary animate-pulse" />
            Nossa Missão
          </h3>
          <p className="text-lg text-gray-200 max-w-4xl mx-auto">
            Nascemos da convicção de que todo empresário do norte de Minas Gerais merece ter acesso 
            às mesmas ferramentas tecnológicas dos grandes centros. Nossa missão é democratizar a 
            automação inteligente, transformando a maneira como pequenas e médias empresas se 
            comunicam com seus clientes através de chatbots personalizados para WhatsApp, Instagram 
            e outras plataformas.
          </p>
          <Badge variant="outline" className="text-primary border-primary animate-pulse bg-primary/10">
            <Globe className="mr-2 h-4 w-4 text-primary" />
            Atendemos todo o norte de Minas Gerais • Desde 2024
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
