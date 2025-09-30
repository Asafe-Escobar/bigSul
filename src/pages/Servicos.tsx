import { ArrowLeft, Truck, Recycle, CheckCircle, Phone, MessageCircle, Clock, Shield, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from "@/components/GTM";
import serviceTeam from "@/assets/service-team.jpg";
import entulhoService from "@/assets/entulho-service.jpg";

const Servicos = () => {
  useEffect(() => {
    GTM.trackPageView('Servicos');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="py-24 section-professional">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary-glow transition-smooth mb-8 glass-effect px-6 py-3 rounded-full"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar ao início
              </Link>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-8 leading-tight">
                Nossos Serviços
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Oferecemos soluções completas e profissionais para limpeza de fossas 
                e remoção de entulho, com equipamentos modernos e equipe especializada.
              </p>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-24 section-professional">
          <div className="container mx-auto px-4">
            {/* Limpeza de Fossas */}
            <div className="max-w-6xl mx-auto mb-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-8">
                    <div className="primary-gradient p-6 rounded-2xl mr-6 shadow-elegant">
                      <Truck className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                        Limpeza de Fossas
                      </h2>
                      <p className="text-primary font-semibold text-lg">Nosso serviço principal</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Realizamos a limpeza completa de fossas sépticas, caixas de gordura e 
                    sistemas de esgoto residencial e comercial. Nosso serviço é executado 
                    com equipamentos de última geração, garantindo eficiência e limpeza.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Equipamentos Modernos</h4>
                        <p className="text-sm text-muted-foreground">Caminhões especializados com tecnologia avançada</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Sem Sujeira</h4>
                        <p className="text-sm text-muted-foreground">Procedimentos que mantêm o local limpo</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Normas Ambientais</h4>
                        <p className="text-sm text-muted-foreground">Descarte responsável seguindo legislação</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Atendimento Rápido</h4>
                        <p className="text-sm text-muted-foreground">Serviço executado no menor tempo possível</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-3">Preços Promocionais</h4>
                    <div className="text-3xl font-bold text-primary mb-2">
                      A partir de R$ 180
                    </div>
                    <p className="text-muted-foreground">
                      *Preço varia conforme o tamanho da fossa e localização
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20atendimento%20imediato%20para%20limpeza%20de%20fossa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-button"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Solicitar Atendimento Imediato
                    </a>
                    <a
                      href="tel:+5586999604704"
                      className="phone-button"
                    >
                      <Phone className="w-5 h-5" />
                      Ligar Agora (+55 86)
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={serviceTeam}
                      alt="Equipe profissional executando limpeza de fossa"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-primary text-foreground p-4 rounded-xl shadow-button">
                    <div className="text-center">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm">Anos de experiência</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Limpeza de Entulho */}
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="bg-warning/10 p-4 rounded-xl mr-4">
                      <Recycle className="w-10 h-10 text-warning" />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Limpeza de Entulho
                      </h2>
                      <p className="text-warning font-semibold">Serviço complementar</p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Realizamos a remoção e descarte adequado de entulho, restos de construção, 
                    móveis antigos, galhos de árvores e outros materiais. Tudo com responsabilidade 
                    ambiental e destino correto dos resíduos.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Descarte Responsável</h4>
                        <p className="text-sm text-muted-foreground">Destinação correta conforme regulamentação</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Caminhões Adequados</h4>
                        <p className="text-sm text-muted-foreground">Veículos com capacidade para grandes volumes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Coleta Eficiente</h4>
                        <p className="text-sm text-muted-foreground">Remoção rápida sem danificar propriedade</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-foreground">Preço Justo</h4>
                        <p className="text-sm text-muted-foreground">Orçamento personalizado por volume</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-warning/10 rounded-xl p-6 mb-8">
                    <h4 className="text-xl font-bold text-foreground mb-3">Orçamento Personalizado</h4>
                    <div className="text-2xl font-bold text-warning mb-2">
                      Preço conforme volume
                    </div>
                    <p className="text-muted-foreground">
                      Entre em contato para avaliarmos seu caso e darmos o melhor preço
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20remoção%20de%20entulho%20imediata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-button"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Solicitar Atendimento Imediato
                    </a>
                    <a
                      href="tel:+5586999604704"
                      className="phone-button"
                    >
                      <Phone className="w-5 h-5" />
                      Ligar Agora (+55 86)
                    </a>
                  </div>
                </div>

                <div className="lg:order-1 relative">
                  <div className="rounded-2xl overflow-hidden shadow-elegant">
                    <img
                      src={entulhoService}
                      alt="Caminhão removendo entulho de construção"
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-warning text-foreground p-4 rounded-xl shadow-button">
                    <div className="text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-sm">Sustentável</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-First Before/After Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Resultados Reais
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Veja a diferença que nosso trabalho faz. Equipamentos modernos e técnicas avançadas para resultados perfeitos.
              </p>
            </div>

            {/* Mobile-optimized image showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Imagem principal */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <img 
                    src="/servico-fossa-real.jpg" 
                    alt="Serviço de limpeza de fossa Big Sul"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Equipe Profissional</h3>
                    <p className="text-muted-foreground">Trabalho executado com precisão e limpeza</p>
                  </div>
                </div>
              </div>

              {/* Segunda imagem */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <img 
                    src="/hero-real-2.jpg" 
                    alt="Caminhões Big Sul prontos para atendimento"
                    className="w-full h-64 md:h-80 object-cover rounded-xl"
                    loading="lazy"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Frota Completa</h3>
                    <p className="text-muted-foreground">Caminhões sempre prontos para atender</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Destaques móveis */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-foreground font-semibold mb-1">Anos</div>
                <div className="text-sm text-muted-foreground">De experiência</div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">1000+</div>
                <div className="text-foreground font-semibold mb-1">Clientes</div>
                <div className="text-sm text-muted-foreground">Satisfeitos</div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24h</div>
                <div className="text-foreground font-semibold mb-1">Disponível</div>
                <div className="text-sm text-muted-foreground">Para emergências</div>
              </div>
              
              <div className="text-center bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-foreground font-semibold mb-1">Limpo</div>
                <div className="text-sm text-muted-foreground">Sem sujeira</div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Por que escolher nossos serviços?
              </h2>
              <p className="text-xl text-muted-foreground">
                Nossa experiência e compromisso com a qualidade nos tornam a melhor escolha
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Agilidade</h3>
                <p className="text-muted-foreground">
                  Atendimento rápido e serviço executado no menor tempo possível
                </p>
              </div>

              <div className="text-center">
                <div className="bg-success/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Segurança</h3>
                <p className="text-muted-foreground">
                  Seguimos todas as normas de segurança e proteção ambiental
                </p>
              </div>

              <div className="text-center">
                <div className="bg-warning/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-warning" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Experiência</h3>
                <p className="text-muted-foreground">
                  Mais de 15 anos de experiência com equipe altamente qualificada
                </p>
              </div>

              <div className="text-center">
                <div className="bg-destructive/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Qualidade</h3>
                <p className="text-muted-foreground">
                  Equipamentos modernos e procedimentos que garantem excelência
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Precisa de nossos serviços agora?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Fale conosco e tenha atendimento imediato via WhatsApp ou telefone. Resposta rápida e equipe pronta para agir.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20atendimento%20imediato"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button text-xl px-12 py-6"
              >
                <FaWhatsapp className="w-6 h-6" />
                Atendimento Imediato
              </a>
              <a
                href="tel:+5586999604704"
                className="phone-button text-xl px-12 py-6"
              >
                <Phone className="w-6 h-6" />
                Ligar: +55 (86) 9960-4704
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Servicos;