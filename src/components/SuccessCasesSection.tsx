import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Trophy, Sparkles, Bot, MessageCircle, Cpu, Settings, Zap, Target, Globe, Sun, Heart, Scissors, Smile, Users } from "lucide-react";

const SuccessCasesSection = () => {
  const successCases = [
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Loja de Roupas",
      category: "Varejo de Moda",
      categoryIcon: Bot,
      description: "Implementamos um chatbot no WhatsApp que automatizou vendas e catálogo de produtos, aumentando as conversões significativamente.",
      techIcon: Cpu,
      metrics: [
        { value: "+250%", label: "Vendas WhatsApp" },
        { value: "-60%", label: "Tempo de resposta" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Restaurante Local",
      category: "Alimentação",
      categoryIcon: MessageCircle,
      description: "Automatizamos pedidos pelo WhatsApp e Instagram, melhorando a experiência do cliente e agilizando entregas.",
      techIcon: Settings,
      metrics: [
        { value: "+180%", label: "Pedidos online" },
        { value: "-40%", label: "Erros em pedidos" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Zap,
      title: "Prestação de Serviços",
      category: "Serviços Gerais",
      categoryIcon: Target,
      description: "Criamos um assistente virtual para agendamento de serviços e qualificação de leads via WhatsApp e Instagram.",
      techIcon: Globe,
      metrics: [
        { value: "+300%", label: "Agendamentos" },
        { value: "+150%", label: "Leads qualificados" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Empresa de Energia Solar",
      category: "Energia Renovável",
      categoryIcon: Sun,
      description: "Automatizamos o processo de orçamento e agendamento de visitas técnicas, acelerando o ciclo de vendas.",
      techIcon: Zap,
      metrics: [
        { value: "+220%", label: "Orçamentos gerados" },
        { value: "-50%", label: "Tempo de resposta" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Clínica Médica",
      category: "Saúde",
      categoryIcon: Heart,
      description: "Criamos um sistema de agendamento automático e lembretes de consultas, reduzindo faltas e melhorando a gestão.",
      techIcon: Bot,
      metrics: [
        { value: "+160%", label: "Agendamentos" },
        { value: "-35%", label: "Faltas em consultas" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Clínica Odontológica",
      category: "Odontologia",
      categoryIcon: Smile,
      description: "Implementamos chatbot para triagem de pacientes e agendamento de procedimentos, otimizando o atendimento.",
      techIcon: Settings,
      metrics: [
        { value: "+190%", label: "Agendamentos" },
        { value: "+120%", label: "Eficiência triagem" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Salão de Beleza",
      category: "Beleza & Estética",
      categoryIcon: Scissors,
      description: "Automatizamos agendamentos e confirmações de horários, além de campanhas promocionais personalizadas.",
      techIcon: Globe,
      metrics: [
        { value: "+210%", label: "Agendamentos" },
        { value: "+80%", label: "Retenção clientes" }
      ]
    },
    {
      icon: Trophy,
      sparkle: Sparkles,
      title: "Influencer Digital",
      category: "Criador de Conteúdo",
      categoryIcon: Users,
      description: "Automatizamos respostas a seguidores e gerenciamento de parcerias, liberando tempo para criação de conteúdo.",
      techIcon: Bot,
      metrics: [
        { value: "+400%", label: "Interações respondidas" },
        { value: "+200%", label: "Parcerias gerenciadas" }
      ]
    }
  ];

  return (
    <section id="casos" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(25,20,61,0.1),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in text-white">
            <Trophy className="inline mr-3 h-8 w-8 text-primary animate-float" />
            Transforme Seu Atendimento
          </h2>
          <p className="text-xl text-gray-200">
            Resultados reais de pequenas e médias empresas que transformaram seus negócios conosco
          </p>
        </div>

        {/* Ajustando o container para evitar corte lateral */}
        <div className="pb-8 pt-4 px-4 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {successCases.map((case_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="py-3 px-2 h-full">
                    <Card className="transition-all duration-300 bg-card group border-primary/30 h-full min-h-[320px] flex flex-col hover:transform hover:translate-y-[-8px] hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20">
                      <CardHeader className="flex-shrink-0 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <case_.icon className="h-8 w-8 text-primary animate-float" />
                            <case_.sparkle className="absolute -top-1 -right-1 h-4 w-4 text-primary animate-pulse" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-white">{case_.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-gray-200">
                              <case_.categoryIcon className="h-4 w-4 text-primary" />
                              {case_.category}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col pt-0 pb-4">
                        <p className="text-sm text-gray-200 mb-4 flex-1">
                          <case_.techIcon className="inline mr-2 h-4 w-4 text-primary" />
                          {case_.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {case_.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center group-hover:animate-pulse">
                              <div className="text-2xl font-bold text-primary">{metric.value}</div>
                              <div className="text-xs text-gray-200">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 h-12 w-12 bg-primary/20 border-primary/50 hover:bg-primary/30 hover:border-primary text-primary shadow-lg backdrop-blur-sm" />
            <CarouselNext className="hidden md:flex -right-12 h-12 w-12 bg-primary/20 border-primary/50 hover:bg-primary/30 hover:border-primary text-primary shadow-lg backdrop-blur-sm" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;
