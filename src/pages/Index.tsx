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
