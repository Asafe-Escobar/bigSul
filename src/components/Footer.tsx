import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// Usando a logo da pasta public
const bigSulNewLogo = "/Bigsul2 (1).png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={bigSulNewLogo} 
                alt="Big Sul Serviços" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4">
              Há mais de 15 anos no mercado, oferecendo serviços de limpeza de fossas 
              com qualidade, rapidez e responsabilidade ambiental.
            </p>
            <div className="flex space-x-4">
              <a
                href="hhttps://wa.me/5586999604704"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600/20 hover:bg-blue-600/30 p-2 rounded-lg transition-smooth"
              >
                <FaWhatsapp className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="tel:+5586999604704"
                className="bg-blue-600/20 hover:bg-blue-600/30 p-2 rounded-lg transition-smooth"
              >
                <Phone className="w-5 h-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="/servicos" className="text-white/80 hover:text-blue-400 transition-colors">
                  Limpeza de Fossas
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-white/80 hover:text-blue-400 transition-colors">
                  Desentupimento
                </a>
              </li>
              <li>
                <a href="/entulho" className="text-white/80 hover:text-blue-400 transition-colors">
                  Limpeza de Entulho
                </a>
              </li>
              <li>
                <a href="/servicos" className="text-white/80 hover:text-blue-400 transition-colors">
                  Manutenção Preventiva
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+5586999604704"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  (86) 9960-4704
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="https://wa.me/5586999604704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:sulentulho@gmail.com"
                  className="text-white/80 hover:text-blue-400 transition-colors"
                >
                  sulentulho@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-white/80">
                  Teresina - PI e Região
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Funcionamento</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Segunda a Sexta</p>
                  <p className="text-white font-medium">07:30 - 17:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Sábado</p>
                  <p className="text-white font-medium">07:30 - 16:00</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 BIG SUL. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;