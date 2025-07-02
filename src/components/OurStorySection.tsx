
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Target, Handshake } from "lucide-react";

const OurStorySection = () => {
  return (
    <section id="nossa-historia" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(25,20,61,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
            <Heart className="inline mr-3 h-8 w-8 text-primary animate-float" />
            Nossa História
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Somos uma empresa nascida da paixão por tecnologia e do desejo de ajudar empresas a crescerem através da automação inteligente
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover-lift bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Target className="h-5 w-5 text-primary animate-pulse" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200">
                  Democratizar o acesso à tecnologia de chatbots, permitindo que pequenas e médias empresas 
                  ofereçam um atendimento de qualidade 24/7, aumentem suas vendas e melhorem a satisfação dos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Handshake className="h-5 w-5 text-primary animate-pulse" />
                  Nossos Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-200 space-y-2">
                  <li>• Foco no cliente e resultados reais</li>
                  <li>• Transparência em todos os processos</li>
                  <li>• Inovação constante e adaptação</li>
                  <li>• Suporte próximo e personalizado</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="hover-lift bg-card border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">O Futuro que Construímos Juntos</h3>
                <p className="text-gray-200">
                  Cada cliente que atendemos é uma nova oportunidade de aprender e evoluir. 
                  Nosso compromisso é continuar inovando para oferecer as melhores soluções 
                  em automação de atendimento, sempre focando no crescimento do seu negócio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
