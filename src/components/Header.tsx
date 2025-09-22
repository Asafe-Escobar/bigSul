import { Phone, MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import bigSulLogo from "@/assets/big-sul-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServicesDropdown = () => setIsServicesDropdownOpen(!isServicesDropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover-scale">
                        <img 
              src="/src/assets/big-sul-logo.png" 
              alt="Big Sul Serviços" 
              className="h-20 sm:h-24 md:h-24 lg:h-28 xl:h-32 w-auto object-contain filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 hover:scale-105" 
            />
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground">Big Sul</h1>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">Serviços Especializados</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Início
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleServicesDropdown}
                className="flex items-center text-foreground hover:text-primary transition-smooth font-medium"
              >
                Serviços
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isServicesDropdownOpen && (
                <div className="dropdown-menu">
                  <Link
                    to="/servicos"
                    className="dropdown-item"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Limpa Fossas
                  </Link>
                  <Link
                    to="/entulho"
                    className="dropdown-item"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Limpa Entulho
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Contact Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+5586995182182"
              className="phone-button"
            >
              <Phone className="w-4 h-4" />
              (86) 99518-2182
            </a>
            <a
              href="https://wa.me/5586995182182?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-primary transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <div>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center text-foreground hover:text-primary transition-smooth font-medium w-full text-left"
                >
                  Serviços
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {isServicesDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link
                      to="/servicos"
                      className="block text-foreground hover:text-primary transition-smooth"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Limpa Fossas
                    </Link>
                    <Link
                      to="/entulho"
                      className="block text-foreground hover:text-primary transition-smooth"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsServicesDropdownOpen(false);
                      }}
                    >
                      Limpa Entulho
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Contact Buttons */}
              <div className="flex flex-col space-y-3 pt-4">
                <a
                  href="tel:+5586995182182"
                  className="phone-button justify-center"
                >
                  <Phone className="w-4 h-4" />
                  (86) 99518-2182
                </a>
                <a
                  href="https://wa.me/5586995182182?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button justify-center"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;