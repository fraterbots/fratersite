
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("termos");
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-background dark overflow-x-hidden">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline" 
            className="mb-6 border-primary/30 text-white hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Site
          </Button>

          <div className="bg-card rounded-lg p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-white">Termos de Uso</h1>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-200">
              <p className="text-sm text-gray-300">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o website da FraterBots, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não use nosso site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Descrição do Serviço</h2>
                <p>
                  A FraterBots oferece soluções de automação através de chatbots para WhatsApp e Instagram, visando melhorar o atendimento ao cliente e aumentar a eficiência das comunicações empresariais.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Uso Aceitável</h2>
                <p>Você concorda em usar nosso site apenas para fins legais e de acordo com estes Termos. Você não pode:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usar o site de qualquer forma que viole leis locais, estaduais, nacionais ou internacionais</li>
                  <li>Transmitir ou enviar material não autorizado, incluindo spam ou vírus</li>
                  <li>Tentar obter acesso não autorizado ao site ou sistemas relacionados</li>
                  <li>Interferir ou interromper o funcionamento do site</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, imagens e software, é propriedade da FraterBots e está protegido por leis de direitos autorais e propriedade intelectual.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Limitação de Responsabilidade</h2>
                <p>
                  A FraterBots não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar nosso site ou serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Modificações dos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As modificações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através do email: fraterbots@gmail.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
