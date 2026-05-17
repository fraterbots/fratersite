
import { Bot, MessageCircle, Cog, ChevronRight, Instagram, Sparkles, Brain, Link as LinkIcon, Globe, Palette, BarChart3, Users } from "lucide-react";

const services = [
  {
    number: "01",
    icon: MessageCircle,
    secondIcon: Bot,
    title: "Chatbots Inteligentes",
    description: "Automação de atendimento no WhatsApp e Instagram com IA para escalar sua operação sem escalar sua equipe",
    items: [
      "Atendimento 24/7 no WhatsApp e Instagram",
      "Integração com WhatsApp Business API",
      "Respostas personalizadas com IA generativa",
      "Captação e qualificação automática de leads",
    ],
    borderColor: "border-t-primary",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    numberColor: "text-primary/30",
  },
  {
    number: "02",
    icon: Globe,
    secondIcon: Sparkles,
    title: "Sites & Plataformas Digitais",
    description: "Desenvolvimento de sites institucionais, e-commerces e plataformas sob medida com foco em performance e experiência do usuário",
    items: [
      "Sites institucionais e corporativos",
      "E-commerce e lojas virtuais",
      "Plataformas SaaS e portais web",
      "Design responsivo e SEO otimizado",
    ],
    borderColor: "border-t-sky-400",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-400",
    numberColor: "text-sky-400/30",
  },
  {
    number: "03",
    icon: Palette,
    secondIcon: BarChart3,
    title: "Landing Pages de Alta Conversão",
    description: "Páginas estratégicas projetadas para transformar visitantes em clientes, integradas a chatbots e ferramentas de marketing",
    items: [
      "Design orientado a conversão",
      "Integração com chatbots e CRM",
      "Analytics e rastreamento de eventos",
      "Testes e otimização contínua",
    ],
    borderColor: "border-t-amber-400",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    numberColor: "text-amber-400/30",
  },
  {
    number: "04",
    icon: Users,
    secondIcon: Brain,
    title: "CRM & Automação de Vendas",
    description: "Implantação e personalização de CRM com fluxos de automação para nutrir leads, fechar mais vendas e fidelizar clientes",
    items: [
      "Implantação e configuração de CRM",
      "Funis de vendas automatizados",
      "Gestão de leads e oportunidades",
      "Dashboards e relatórios em tempo real",
    ],
    borderColor: "border-t-purple-400",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    numberColor: "text-purple-400/30",
  },
  {
    number: "05",
    icon: BarChart3,
    secondIcon: Sparkles,
    title: "Marketing Digital com IA",
    description: "Estratégias e campanhas de marketing potencializadas por inteligência artificial para alcançar o público certo na hora certa",
    items: [
      "Estratégia e conteúdo gerado por IA",
      "Automação de campanhas multicanal",
      "Segmentação inteligente de audiências",
      "Análise de dados e otimização de ROI",
    ],
    borderColor: "border-t-rose-400",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    numberColor: "text-rose-400/30",
  },
  {
    number: "06",
    icon: LinkIcon,
    secondIcon: Globe,
    title: "Integrações & APIs",
    description: "Conectamos todos os seus sistemas e ferramentas para criar um ecossistema digital fluido e sem retrabalho",
    items: [
      "APIs personalizadas e webhooks",
      "Integração entre plataformas e ERPs",
      "Automações entre ferramentas",
      "Sincronização e centralização de dados",
    ],
    borderColor: "border-t-teal-400",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-400",
    numberColor: "text-teal-400/30",
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
            Do site ao CRM, do chatbot ao marketing — soluções digitais completas com inteligência artificial para fazer seu negócio crescer
          </p>
          <p className="mt-3 text-primary font-semibold text-sm">
            💡 Combine serviços e ganhe um desconto especial!
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
