import { Phone, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
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
                  href="https://wa.me/5586995182182?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button text-xl px-12 py-6"
                >
                  <MessageCircle className="w-6 h-6" />
                  Orçamento via WhatsApp
                </a>
                <a
                  href="tel:+5586995182182"
                  className="phone-button text-xl px-12 py-6"
                >
                  <Phone className="w-6 h-6" />
                  Ligar: (86) 99518-2182
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
