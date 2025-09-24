import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import GTM from "@/components/GTM";
// Voltando para as imagens corretas de caminhões de limpeza de fossas
// Substituído para usar imagens reais no diretório public (adicione os arquivos mencionados em /public)
// Nomes sugeridos (coloque suas fotos reais):
//  - /hero-real-1.jpg  (caminhão frente - foto 1)
//  - /hero-real-2.jpg  (rua com caminhões - foto 3)
//  - /hero-real-3.jpg  (trabalho em execução - foto 4 recortada)
//  - /hero-real-4.jpg  (opcional: outra variação ou repetir a 1)
// Mantivemos imports antigos como fallback caso as novas não existam ainda.
import heroTruck1 from "@/assets/hero-truck.jpg"; // fallback
import heroTruck2 from "@/assets/hero-truck-2.jpg"; // fallback
import heroTruck3 from "@/assets/hero-truck-3.jpg"; // fallback
import heroTruck4 from "@/assets/hero-truck-4.jpg"; // fallback

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Imagens corretas de caminhões de limpeza de fossas
  const cacheBuster = "?v=2"; // atualiza cache para novas imagens reais
  const backgroundImages = [
    { primary: `/hero-real-1.jpg${cacheBuster}`, fallback: heroTruck1, alt: 'Caminhão limpa fossa Big Sul em operação (frontal)' },
    { primary: `/hero-real-2.jpg${cacheBuster}`, fallback: heroTruck2, alt: 'Fila de caminhões de limpeza prontos para atendimento' },
    { primary: `/hero-real-3.jpg${cacheBuster}`, fallback: heroTruck3, alt: 'Equipe realizando sucção em fossa' },
    { primary: `/hero-real-4.jpg${cacheBuster}`, fallback: heroTruck4, alt: 'Outro ângulo de caminhão limpa fossa Big Sul' },
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
              data-index={index}
              className={`absolute inset-0 hero-slide transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.primary}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = image.fallback; }}
                alt={image.alt}
                className="w-full h-full object-cover hero-mobile-optimized"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-700 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-radial from-purple-500 via-transparent to-transparent animate-pulse"></div>
          
          {/* Professional mesh overlay */}
          <div className="absolute inset-0 mesh-background opacity-20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 sm:mb-12">
              <div className="flex flex-col items-center mb-6 sm:mb-8">
                <span className="inline-block glass-effect text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg lg:text-xl font-bold shadow-glow animate-float backdrop-blur-md">
                  🚛 Solicitar Atendimento Imediato
                </span>
              </div>
              <h1 className="text-center mb-6 sm:mb-8">
                <div className="hero-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white drop-shadow-lg text-gradient leading-none">BIG SUL</div>
                <div className="hero-subtitle text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mt-2 text-shadow-lg">SERVIÇOS</div>
              </h1>
              <p className="hero-description text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/95 leading-relaxed max-w-4xl mx-auto text-shadow-lg px-4">
                🏆 Limpeza de Fossas, Desentupimento e Tira entulho - Atendimento Imediato e Preço Justo.<br/>
                <span className="text-accent-light font-semibold text-sm sm:text-base md:text-lg lg:text-xl">Equipamentos modernos • Equipe especializada</span>
              </p>
            </div>

            {/* Enhanced Interactive Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '0s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">+1000</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Clientes Satisfeitos</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '0.5s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">Imediato</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Atendimento Rápido</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-smooth hover-scale animate-float" style={{animationDelay: '1s'}}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent mb-2 sm:mb-3">R$ 180</div>
                <div className="text-white/90 font-medium text-sm sm:text-base">Preço a partir de</div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 px-4">
              <a
                href="https://wa.me/5586999604704?text=Olá!%20Preciso%20de%20atendimento%20imediato%20para%20limpeza%20de%20fossa"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => GTM.trackContact('whatsapp', 'limpeza-fossa')}
                className="whatsapp-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-bounce shadow-glow animate-pulse-glow"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                💬 Solicitar Atendimento Imediato
              </a>
              <a
                href="tel:+5586999604704"
                onClick={() => GTM.trackContact('phone', 'limpeza-fossa')}
                className="phone-button text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-bounce"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                📞 Ligar: (86) 9960-4704
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
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/5586999604704?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => GTM.trackContact('whatsapp', 'floating-button')}
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