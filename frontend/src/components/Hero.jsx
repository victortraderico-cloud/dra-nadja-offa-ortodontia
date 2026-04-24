import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const whatsappLink = "https://wa.me/5511997203335?text=Olá! Gostaria de agendar uma consulta.";

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F0F3FA] via-[#D5DEEF] to-white"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#B1C9EF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#638ECB]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border border-[#D5DEEF]/50">
              <Sparkles className="w-4 h-4 text-[#395886] mr-2" />
              <span className="text-sm font-medium text-gray-700">Especialista em Ortodontia Infantil</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Sorrisos </span>
              <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">saudáveis</span>
              <br />
              <span className="text-gray-900">começam aqui</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
              Cuidado especializado e acolhedor em ortodontia para crianças, 
              adolescentes e adultos. Transforme seu sorriso com tecnologia moderna 
              e atendimento personalizado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                className="bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => window.open(whatsappLink, '_blank')}
                size="lg"
                variant="outline"
                className="border-2 border-[#395886] text-[#395886] hover:bg-[#395886]/10 px-8 py-6 rounded-full transition-all duration-300 text-lg"
              >
                WhatsApp
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">5.0</span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">85+</span> avaliações
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">São Paulo</span> - Limão
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:ml-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/nbwfxfaj_WhatsApp%20Image%202026-04-14%20at%2010.42.59.jpeg"
                alt="Dra. Nadja Offa"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-[#D5DEEF]/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#395886]">30+</div>
                <div className="text-xs text-gray-600 mt-1">Anos de<br/>Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
};

export default Hero;
