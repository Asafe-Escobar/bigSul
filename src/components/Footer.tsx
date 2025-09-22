import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">BS</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">BIG SUL</h3>
                <p className="text-sm text-white/70">Serviços Especializados</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Há mais de 5 anos no mercado, oferecendo serviços de limpeza de fossas 
              com qualidade, rapidez e responsabilidade ambiental.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5586995182182"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth"
              >
                <FaWhatsapp className="w-5 h-5 text-primary" />
              </a>
              <a
                href="tel:+5586995182182"
                className="bg-primary/20 hover:bg-primary/30 p-2 rounded-lg transition-smooth"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Limpeza de Fossas
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Desentupimento
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
                  Limpeza de Entulho
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-primary transition-colors">
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
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+5586995182182"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  (86) 99518-2182
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/5586995182182"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@bigsul.com.br"
                  className="text-white/80 hover:text-primary transition-colors"
                >
                  contato@bigsul.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
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
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Segunda a Sexta</p>
                  <p className="text-white font-medium">07:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm">Sábado</p>
                  <p className="text-white font-medium">07:00 - 12:00</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary/20 rounded-lg">
                <p className="text-primary font-semibold text-sm">
                  🚨 Atendimento de emergência 24h
                </p>
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
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
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