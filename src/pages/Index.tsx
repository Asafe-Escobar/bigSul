import { Phone, MessageCircle } from "lucide-react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import GTM from "@/components/GTM";

const Index = () => {
  useEffect(() => {
    GTM.trackPageView('Home');
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        
        {/* Mobile-First Image Gallery */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Nosso Trabalho em Ação
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Veja nossos equipamentos modernos e equipe especializada trabalhando
              </p>
            </div>
            
            {/* Mobile-optimized grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
              {/* Imagem 1 - Caminhão */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/hero-real-1.jpg" 
                  alt="Caminhão limpa fossa Big Sul em operação"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg mb-1">Equipamentos Modernos</h3>
                  <p className="text-sm text-white/90">Caminhões especializados para limpeza</p>
                </div>
              </div>

              {/* Imagem 2 - Equipe trabalhando */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src="/servico-fossa-real.jpg" 
                  alt="Equipe Big Sul realizando limpeza de fossa"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg mb-1">Equipe Especializada</h3>
                  <p className="text-sm text-white/90">Profissionais treinados e experientes</p>
                </div>
              </div>

              {/* Imagem 3 - Trabalho em execução */}
              <div className="relative group overflow-hidden rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1">
                <img 
                  src="/hero-real-3.jpeg" 
                  alt="Processo de limpeza de fossa em andamento"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="font-bold text-lg mb-1">Trabalho Limpo</h3>
                  <p className="text-sm text-white/90">Sem sujeira, sem complicações</p>
                </div>
              </div>
            </div>

            {/* CTA móvel otimizado */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                Quer ver nosso trabalho de perto? Entre em contato!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a
                  href="https://wa.me/5586999604704?text=Olá!%20Gostaria%20de%20ver%20mais%20sobre%20seus%20serviços"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button text-base px-8 py-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ver Mais Trabalhos
                </a>
                <a
                  href="tel:+5586999604704"
                  className="phone-button text-base px-8 py-3"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">O que dizem nossos clientes</h2>
              <p className="text-xl text-foreground/80 leading-relaxed">Prova social para reforçar confiança (exemplos ilustrativos)</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="rounded-2xl p-7 sm:p-8 bg-white shadow-elegant border border-black/5 max-w-md mx-auto">
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-2">Chegaram rápido e resolveram tudo sem sujeira. Recomendo!</p>
                <p className="text-muted-foreground">Carlos M., Teresina</p>
              </div>
              <div className="rounded-2xl p-7 sm:p-8 bg-white shadow-elegant border border-black/5 max-w-md mx-auto">
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-2">Preço justo e equipe atenciosa. Serviço excelente.</p>
                <p className="text-muted-foreground">Marina S., Timon</p>
              </div>
              <div className="rounded-2xl p-7 sm:p-8 bg-white shadow-elegant border border-black/5 max-w-md mx-auto">
                <div className="flex items-center mb-3">
                  <span className="text-yellow-400 text-2xl">★★★★★</span>
                </div>
                <p className="text-foreground text-lg leading-relaxed mb-2">Fizeram a limpeza da fossa rapidamente. Voltarei a contratar.</p>
                <p className="text-muted-foreground">Djalma P., Teresina</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contato" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Precisa de nossos serviços? Entre em contato agora mesmo e receba 
                um orçamento personalizado sem compromisso.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://wa.me/5586999604704?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button text-xl px-12 py-6"
                >
                  <MessageCircle className="w-6 h-6" />
                  Orçamento via WhatsApp
                </a>
                <a
                  href="tel:+5586999604704"
                  className="phone-button text-xl px-12 py-6"
                >
                  <Phone className="w-6 h-6" />
                  Ligar: (86) 9960-4704
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
