import { Truck, Recycle, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import serviceTeam from "@/assets/service-team.jpg";
import entulhoService from "@/assets/entulho-service.jpg";

const ServicesSection = () => {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #000000 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow mb-4 sm:mb-6">
            Limpeza de Fossas Profissional
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Evite o mau cheiro e o transbordamento. Nossa equipe realiza a limpeza completa da sua fossa de forma rápida e higiênica, restaurando a normalidade do seu lar ou empresa.
          </p>
        </div>

        {/* Main Service - Limpeza de Fossas */}
        <div className="max-w-6xl mx-auto mb-16">
          <div 
            className="overflow-hidden relative service-card-modern"
          >
            {/* Gradient Top Border */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
            ></div>
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Imagem */}
              <div className="relative overflow-hidden">
                <img
                  src={serviceTeam}
                  alt="Caminhão limpa fossa em operação"
                  className="w-full h-64 sm:h-80 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
                <div className="absolute top-6 left-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    ⭐ Serviço Premium
                  </div>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl mr-4">
                    <Truck className="w-10 h-10 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Limpeza de Fossas</h3>
                    <p className="text-blue-600 font-semibold">Nosso serviço principal</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Realizamos a limpeza completa de fossas sépticas, caixas de gordura e sistemas de esgoto residencial e comercial. Nosso serviço é executado com equipamentos de última geração, garantindo eficiência e limpeza.
                </p>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 block">Equipamentos Modernos</span>
                      <span className="text-gray-600 text-sm">Caminhões especializados com tecnologia avançada</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 block">Sem Sujeira</span>
                      <span className="text-gray-600 text-sm">Procedimentos que mantém o local limpo</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 block">Normas Ambientais</span>
                      <span className="text-gray-600 text-sm">Descarte responsável e licenciado</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900 block">Atendimento Rápido</span>
                      <span className="text-gray-600 text-sm">Serviço ágil no menor tempo possível</span>
                    </div>
                  </div>
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Preços Promocionais</div>
                    <div className="text-3xl font-bold text-blue-600">A partir de R$ 180,00</div>
                    <div className="text-sm text-gray-600">Preço varia conforme o tamanho da fossa e localização</div>
                  </div>
                  <div className="flex flex-col gap-3 w-full sm:w-auto">
                    <a
                      href="https://wa.me/5586999604704?text=Olá! Quero um orçamento para limpeza de fossa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
                    >
                      Orçamento WhatsApp
                    </a>
                    <Link
                      to="/servicos"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
                    >
                      Ligar Agora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outros Serviços - Link para Entulho */}
        <div className="text-center mb-16">
          <div 
            className="p-8 rounded-2xl transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Também oferecemos outros serviços
            </h3>
            <p className="text-gray-600 mb-6">
              Além da limpeza de fossas, também trabalhamos com remoção de entulho e outros serviços especializados.
            </p>
            <Link
              to="/entulho"
              className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 gap-2"
            >
              <Recycle className="w-5 h-5" />
              Ver Remoção de Entulho
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div 
          className="text-white rounded-2xl p-12 shadow-2xl relative overflow-hidden why-choose-modern"
        >
          {/* Background Effects */}
          <div 
            className="absolute inset-0 opacity-30"
          ></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Por que escolher a BIG SUL?
            </h3>
            <p className="text-blue-100 text-lg">
              Anos de experiência em limpeza de fossas com total qualidade e confiança
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div 
              className="text-center p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 feature-card-modern"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Atendimento Rápido</h4>
              <p className="text-blue-100">
                Chegamos ao local rapidamente e executamos o serviço no menor tempo possível, sem comprometer a qualidade.
              </p>
            </div>

            <div 
              className="text-center p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 feature-card-modern"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Total Segurança</h4>
              <p className="text-blue-100">
                Seguimos rigorosamente todas as normas de segurança, meio ambiente e saúde pública em todos os serviços.
              </p>
            </div>

            <div 
              className="text-center p-6 rounded-xl transition-all duration-300 hover:transform hover:-translate-y-2 feature-card-modern"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Qualidade Garantida</h4>
              <p className="text-blue-100">
                Equipamentos de última geração, equipe qualificada e procedimentos que garantem a satisfação total.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;