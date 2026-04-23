import React from 'react';
import { Smile, Palette, Trophy, Users } from 'lucide-react';
import { Button } from './ui/button';

const ParentSection = () => {
  const benefits = [
    {
      icon: Smile,
      title: "Atendimento Especializado",
      description: "Ambiente acolhedor e técnicas gentis para crianças com medo de dentista"
    },
    {
      icon: Palette,
      title: "Aparelhos Personalizados",
      description: "Com nome da criança, desenhos favoritos e times de futebol"
    },
    {
      icon: Trophy,
      title: "Motivação Constante",
      description: "Sistema de recompensas que torna o tratamento divertido"
    },
    {
      icon: Users,
      title: "Suporte aos Pais",
      description: "Orientação completa para acompanhamento em casa"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F0F3FA] via-white to-[#D5DEEF]/30 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#B1C9EF]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#8AAEE0]/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Título + Descrição */}
        <div className="mb-12">
          <div className="inline-block bg-gradient-to-r from-[#B1C9EF] to-[#8AAEE0] text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Para Pais e Responsáveis
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ortodontia{' '}
            <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
              Infantil
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            Cuidado especializado e acolhedor para crianças de 5 a 12 anos, 
            com aparelhos personalizados que tornam o tratamento mais divertido.
          </p>
        </div>

        {/* Imagem */}
        <div className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/ithxaj94_WhatsApp%20Image%202026-04-23%20at%2009.45.31%20%281%29.jpeg"
              alt="Ortodontia Infantil - Dra. Nadja Offa"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
          {/* Floating stats */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-6 shadow-xl border border-[#D5DEEF]/50">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#395886] mb-1">95%</div>
              <div className="text-sm text-gray-600">Crianças superam o medo na 1ª consulta</div>
            </div>
          </div>
        </div>

        {/* 4 Caixinhas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#D5DEEF]/50">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#395886]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Azul */}
        <div className="bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Seu filho merece o melhor cuidado ortodôntico
          </h3>
          <p className="mb-6 text-white/90 leading-relaxed">
            Agende uma avaliação e descubra como podemos ajudar seu filho 
            a ter um sorriso saudável e bonito. Primeira consulta sem compromisso!
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre ortodontia infantil.", '_blank')}
            className="bg-white text-[#395886] hover:bg-gray-50 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
