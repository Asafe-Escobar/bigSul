import { Phone, MessageCircle, Recycle, Truck, Shield, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GTM from "@/components/GTM";
import entulhoService from "@/assets/entulho-service.jpg";

const Entulho = () => {
  useEffect(() => {
    GTM.trackPageView('Entulho');
  }, []);

  const services = [
    {
      title: "Entulho de Construção",
      description: "Remoção de restos de obra, tijolos, concreto, cerâmica",
      items: ["Tijolos e blocos", "Concreto e argamassa", "Cerâmica e azulejos", "Madeira de construção"]
    },
    {
      title: "Móveis e Eletrodomésticos",
      description: "Descarte responsável de móveis antigos e aparelhos",
      items: ["Móveis usados", "Eletrodomésticos", "Colchões", "Sofás e poltronas"]
    },
    {
      title: "Limpeza de Terrenos",
      description: "Limpeza completa de terrenos e áreas externas",
      items: ["Galhos e folhas", "Terra e entulho", "Limpeza geral", "Preparação do terreno"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={entulhoService}
            alt="Serviço profissional de remoção de entulho"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-smooth">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Remoção de
              <span className="block text-warning">ENTULHO</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              Sua obra acabou, mas a bagunça ficou? Não deixe que restos de construção, entulho e móveis velhos tragam desorganização para seu espaço. Recupere seu ambiente de forma rápida e segura. Removemos tudo para você, deixando o local limpo e livre para ser aproveitado.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20remoção%20de%20entulho.%20Podem%20me%20passar%20um%20orçamento?"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button text-xl px-12 py-6 transform hover:scale-105 transition-smooth"
              >
                <FaWhatsapp className="w-6 h-6" />
                Orçamento WhatsApp
              </a>
              <a
                href="tel:+5586999604704"
                className="phone-button text-xl px-12 py-6 transform hover:scale-105 transition-smooth"
              >
                <Phone className="w-6 h-6" />
                Ligar: (86) 9960-4704
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Tipos de Entulho que Removemos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trabalhamos com todos os tipos de entulho, sempre seguindo as normas ambientais 
              e fazendo o descarte adequado em locais licenciados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="bg-warning/10 p-4 rounded-lg mb-6 w-16 h-16 flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-warning" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-foreground text-white rounded-2xl p-12 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Como Funciona Nosso Serviço
              </h3>
              <p className="text-white/80 text-lg">
                Processo simples e eficiente em 3 passos
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-warning" />
                </div>
                <h4 className="text-xl font-bold mb-3">1. Contato</h4>
                <p className="text-white/80">
                  Entre em contato pelo WhatsApp ou telefone para solicitar orçamento
                </p>
              </div>

              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-warning" />
                </div>
                <h4 className="text-xl font-bold mb-3">2. Coleta</h4>
                <p className="text-white/80">
                  Nossa equipe vai até o local com caminhão adequado para retirar o entulho
                </p>
              </div>

              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-warning" />
                </div>
                <h4 className="text-xl font-bold mb-3">3. Descarte</h4>
                <p className="text-white/80">
                  Fazemos o descarte responsável em locais licenciados pela prefeitura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Orçamento Personalizado */}
      <section className="py-20 bg-gradient-to-br from-foreground to-foreground/90">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Orçamento Gratuito e Personalizado
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Cada situação é única! Enviamos nossa equipe para avaliar o volume de entulho 
              e fornecer o melhor preço para seu caso específico.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12 text-white">
              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Entre em Contato</h3>
                <p className="text-white/80">
                  WhatsApp ou telefone - atendemos rapidamente
                </p>
              </div>

              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Avaliação Gratuita</h3>
                <p className="text-white/80">
                  Nossa equipe vai até o local avaliar
                </p>
              </div>

              <div className="text-center">
                <div className="bg-warning/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-warning" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Melhor Preço</h3>
                <p className="text-white/80">
                  Orçamento personalizado e justo
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20um%20orçamento%20personalizado%20para%20remoção%20de%20entulho.%20Podem%20fazer%20uma%20avaliação?"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <FaWhatsapp className="w-6 h-6" />
                Solicitar Avaliação Gratuita
              </a>
              <a
                href="tel:+5586999604704"
                className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Ligar: (86) 9960-4704
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Por que Escolher Nosso Serviço?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Licenciado</h3>
              <p className="text-muted-foreground leading-relaxed">
                Possuímos todas as licenças necessárias para coleta e descarte de entulho. 
                Você não precisa se preocupar com multas ou problemas ambientais.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Agilidade</h3>
              <p className="text-muted-foreground leading-relaxed">
                Atendimento rápido e eficiente. Na maioria dos casos, conseguimos 
                fazer a coleta no mesmo dia ou no dia seguinte ao contato.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-warning/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Sustentável</h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos a única empresa da região com aterro próprio para o descarte correto de resíduos. Contratando a Big Sul, você tem a certeza de um serviço completo e ecologicamente correto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Entulho;