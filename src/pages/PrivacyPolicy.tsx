
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("privacidade");
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
              <Shield className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-white">Política de Privacidade</h1>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-200">
              <p className="text-sm text-gray-300">
                Última atualização: {new Date().toLocaleDateString('pt-BR')}
              </p>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">1. Informações que Coletamos</h2>
                <p>Coletamos as seguintes informações quando você utiliza nosso site:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Informações de contato:</strong> Nome, email, telefone/WhatsApp, empresa</li>
                  <li><strong>Informações de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas</li>
                  <li><strong>Informações de comunicação:</strong> Mensagens enviadas através de formulários de contato</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">2. Como Usamos suas Informações</h2>
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responder às suas solicitações e fornecer demonstrações dos nossos serviços</li>
                  <li>Entrar em contato sobre nossos produtos e serviços</li>
                  <li>Melhorar nosso site e experiência do usuário</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">3. Compartilhamento de Informações</h2>
                <p>
                  Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Podemos compartilhar informações apenas nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos ajudam a operar o site (sob acordos de confidencialidade)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">4. Segurança dos Dados</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">5. Retenção de Dados</h2>
                <p>
                  Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">6. Seus Direitos</h2>
                <p>Você tem o direito de:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acessar suas informações pessoais que possuímos</li>
                  <li>Solicitar a correção de informações imprecisas</li>
                  <li>Solicitar a exclusão de suas informações</li>
                  <li>Opor-se ao uso de suas informações para marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
                <p>
                  Nosso site pode usar cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a entender como você usa o site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">8. Alterações nesta Política</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política no site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-3">9. Contato</h2>
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais, entre em contato conosco:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Email: fraterbots@gmail.com</li>
                  <li>Telefone: +55 (38) 98835-8431</li>
                  <li>Endereço: Janaúba, MG - Norte de Minas Gerais</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
