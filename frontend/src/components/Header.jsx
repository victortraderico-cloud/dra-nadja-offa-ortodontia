import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://wa.me/5511997203335?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-[#D5DEEF]/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
              Dra. Nadja Offa
            </h1>
            <p className="text-xs text-gray-600">Ortodontista Especialista</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#395886] transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#395886] transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#395886] transition-colors font-medium">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-[#395886] transition-colors font-medium">
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-[#395886] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#D5DEEF]/30">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-[#395886] transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-[#395886] transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-[#395886] transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="block w-full text-left py-2 text-gray-700 hover:text-[#395886] transition-colors font-medium"
            >
              FAQ
            </button>
            <Button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="w-full bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white rounded-full shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
