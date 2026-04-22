import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { clinicInfo } from '../data/mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-[#395886] to-[#638ECB] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para transformar seu sorriso?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende sua consulta hoje mesmo e dê o primeiro passo para um sorriso saudável e confiante
          </p>
          <button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de agendar uma consulta.", '_blank')}
            className="bg-white text-[#395886] hover:bg-gray-50 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Agendar pelo WhatsApp
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#B1C9EF] to-[#638ECB] bg-clip-text text-transparent mb-4">
              Dra. Nadja Offa
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Especialista em Ortodontia e Ortopedia Funcional dos Maxilares. 
              Cuidado personalizado para sorrisos saudáveis.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-[#B1C9EF] transition-colors">
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-[#B1C9EF] transition-colors">
                  Serviços
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-[#B1C9EF] transition-colors">
                  Depoimentos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-[#B1C9EF] transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-[#B1C9EF] flex-shrink-0 mt-1" />
                <div>
                  <a href={`https://wa.me/${clinicInfo.whatsapp}`} className="hover:text-[#B1C9EF] transition-colors">
                    {clinicInfo.phone}
                  </a>
                  <div className="text-xs text-gray-500">WhatsApp</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-[#B1C9EF] flex-shrink-0 mt-1" />
                <a href="mailto:contato@dranadjaoffa.com.br" className="hover:text-[#B1C9EF] transition-colors">
                  contato@dranadjaoffa.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#B1C9EF] flex-shrink-0 mt-1" />
                <span>{clinicInfo.hours}</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold text-lg mb-4">Localização</h4>
            <div className="flex items-start gap-2 text-gray-400 mb-4">
              <MapPin className="w-5 h-5 text-[#B1C9EF] flex-shrink-0 mt-1" />
              <div>
                <p className="leading-relaxed">{clinicInfo.address}</p>
                <p className="text-sm text-gray-500 mt-1">{clinicInfo.building}</p>
              </div>
            </div>
            <a 
              href={clinicInfo.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#B1C9EF] hover:text-[#638ECB] transition-colors font-semibold"
            >
              Ver no mapa
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5676!2d-46.6825!3d-23.5089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzMyLjAiUyA0NsKwNDAnNTcuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica"
          ></iframe>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2025 Dra. Nadja Offa. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#B1C9EF] transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-[#B1C9EF] transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
