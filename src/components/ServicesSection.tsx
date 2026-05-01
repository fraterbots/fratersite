
import { Bot, MessageCircle, Cog, ChevronRight, Instagram, Sparkles, Brain, Link as LinkIcon, Zap, Globe, Palette } from "lucide-react";

const services = [
  {
    number: "01",
    icon: MessageCircle,
    secondIcon: Bot,
    title: "Chatbots para WhatsApp",
    description: "Chatbots inteligentes e personalizados para automatizar seu atendimento no WhatsApp",
    items: [
      "Atendimento 24/7 automatizado",
      "Integração com WhatsApp Business",
      "Respostas inteligentes personalizadas",
      "Integração com as principais IAs",
    ],
    borderColor: "border-t-primary",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    numberColor: "text-primary/30",
  },
  {
    number: "02",
    icon: Instagram,
    secondIcon: Sparkles,
    title: "Automação para Instagram",
    description: "Automatize respostas e interações no Instagram para aumentar o engajamento",
    items: [
      "Resposta automática em Direct",
      "Comentários automatizados",
      "Captação de leads via stories",
      "Integração com catálogo",
    ],
    borderColor: "border-t-purple-400",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    numberColor: "text-purple-400/30",
  },
  {
    number: "03",
    icon: LinkIcon,
    secondIcon: Brain,
    title: "Integrações Avançadas",
    description: "Conecte seus sistemas e ferramentas para máxima eficiência operacional",
    items: [
      "CRM e sistemas de gestão",
      "E-commerce e marketplaces",
      "APIs personalizadas",
      "Sincronização de dados",
    ],
    borderColor: "border-t-sky-400",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    numberColor: "text-sky-400/30",
  },
  {
    number: "04",
    icon: Palette,
    secondIcon: Globe,
    title: "Criação de Landing Pages",
    description: "Desenvolva páginas otimizadas para conversão e integradas aos seus chatbots",
    items: [
      "Design responsivo e moderno",
      "Otimização para conversão",
      "Integração com chatbots",
      "Analytics e acompanhamento",
    ],
    borderColor: "border-t-amber-400",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    numberColor: "text-amber-400/30",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(129,214,55,0.07),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(25,20,61,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Cog className="h-4 w-4 text-primary" />
            <span className="text-primary text-sm font-semibold">O que fazemos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Soluções completas em automação e chatbots para WhatsApp, Instagram e outras plataformas
          </p>
          <p className="mt-3 text-primary font-semibold text-sm">
            💡 Combine serviços e ganhe um desconto especial!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className={`group relative bg-card rounded-xl border border-primary/20 border-t-2 ${service.borderColor} hover-lift overflow-hidden flex flex-col`}
            >
              {/* Number watermark */}
              <span className={`absolute top-3 right-4 text-5xl font-extrabold ${service.numberColor} select-none pointer-events-none leading-none`}>
                {service.number}
              </span>

              <div className="p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className={`w-14 h-14 ${service.iconBg} rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base mb-2 flex items-center gap-2">
                  <service.secondIcon className={`h-4 w-4 ${service.iconColor} flex-shrink-0`} />
                  {service.title}
                </h3>

                {/* Description */}
                <p className={`text-sm text-gray-400 mb-5 leading-relaxed`}>
                  {service.description}
                </p>

                {/* Items */}
                <ul className="space-y-2 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ChevronRight className={`h-4 w-4 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
