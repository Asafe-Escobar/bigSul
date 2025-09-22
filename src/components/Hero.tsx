import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// Voltando para as imagens corretas de caminhões de limpeza de fossas
import heroTruck1 from "@/assets/hero-truck.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroTruck3 from "@/assets/hero-truck-3.jpg";
import heroTruck4 from "@/assets/hero-truck-4.jpg";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Imagens corretas de caminhões de limpeza de fossas
  const backgroundImages = [
    heroTruck1,
    heroTruck2,
    heroTruck3,
    heroTruck4,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  return (
    <>
      {/* Main Hero Section with Background Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-professional">
        {/* Background com Imagens de Caminhões de Limpeza de Fossas */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Imagem visível em TODAS as telas (mobile e desktop) */}
              <img
                src={image}
                alt={`Caminhão de limpeza de fossas profissional ${index + 1}`}
                className="w-full h-full object-cover hero-mobile-optimized"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/75 to-primary/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent"></div>
          {/* Enhanced animated overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-transparent to-transparent animate-pulse-glow"></div>
          
          {/* Professional mesh overlay */}
          <div className="absolute inset-0 mesh-background opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <span className="inline-block glass-effect text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-glow animate-float backdrop-blur-md">
                  🚛 Atendimento 24h • Orçamento Gratuito
                </span>
              </div>
              <h1 className="text-center mb-6 sm:mb-8">
                <div className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white drop-shadow-lg text-gradient leading-none">BIG SUL</div>
                <div className="hero-subtitle text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-2 text-shadow-lg">SERVIÇOS</div>
              </h1>
              <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/95 leading-relaxed max-w-4xl mx-auto text-shadow-lg px-4">
                🏆 Limpeza de Fossas, Desentupimento e Sistema Vácuo<br/>
                <span className="text-accent-light font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Equipamentos modernos • Equipe especializada • Preço justo</span>
              </p>
            </div>

            {/* Enhanced Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '0s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">+1000</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Clientes Satisfeitos</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '0.5s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">24h</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Atendimento Disponível</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '1s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">R$ 159</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Preço a partir de</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 px-4">
              <a
                href="https://wa.me/5586995182182?text=Olá!%20Preciso%20de%20limpeza%20de%20fossa%20urgente!"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-bounce shadow-glow animate-pulse-glow"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                💬 Orçamento WhatsApp
              </a>
              <a
                href="tel:+5586995182182"
                className="phone-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-bounce"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                📞 Ligar: (86) 99518-2182
              </a>
            </div>

            {/* Enhanced Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
              <div className="flex items-center space-x-3 glass-effect px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Licença Ambiental</span>
              </div>
              <div className="flex items-center space-x-3 glass-effect px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Equipe Treinada</span>
              </div>
              <div className="flex items-center space-x-3 glass-effect px-6 py-3 rounded-full">
                <CheckCircle className="w-6 h-6 text-accent" />
                <span className="font-medium">Garantia de Serviço</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/5586995182182?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button p-5 rounded-full shadow-elegant hover:shadow-glow transform hover:scale-110 transition-bounce flex items-center justify-center group animate-float"
          title="Fale conosco no WhatsApp"
        >
          <FaWhatsapp className="w-10 h-10" />
          <span className="absolute right-full mr-4 glass-effect text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 font-medium">
            💬 Fale conosco!
          </span>
          {/* Pulse animation ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
        </a>
      </div>
    </>
  );
};

export default Hero;