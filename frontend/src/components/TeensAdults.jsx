import React from 'react';
import { Eye, Clock, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const TeensAdults = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Praticamente Invisível",
      description: "Alinhadores transparentes que ninguém percebe durante o tratamento"
    },
    {
      icon: Clock,
      title: "Rápido e Eficiente",
      description: "Resultados visíveis em poucos meses com tecnologia avançada"
    },
    {
      icon: Sparkles,
      title: "Conforto Superior",
      description: "Sem fios ou brackets metálicos, totalmente removível"
    },
    {
      icon: TrendingUp,
      title: "Resultados Previsíveis",
      description: "Planejamento digital 3D do seu novo sorriso antes de começar"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-[#F0F3FA] to-[#D5DEEF]/30 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8AAEE0]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#B1C9EF]/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Título + Descrição */}
        <div className="mb-12">
          <div className="inline-block bg-gradient-to-r from-[#8AAEE0] to-[#638ECB] text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Para Adolescentes e Adultos
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Alinhadores{' '}
            <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
              Invisíveis
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            Transforme seu sorriso de forma discreta e confortável. Perfeito para quem 
            busca estética e resultados profissionais sem comprometer a aparência.
          </p>
        </div>

        {/* Imagem */}
        <div className="relative mb-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img 
              src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/n617929r_WhatsApp%20Image%202026-04-23%20at%2014.14.43%20%281%29.jpeg"
              alt="Alinhadores Invisíveis"
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -top-6 right-8 bg-white rounded-2xl p-6 shadow-xl border border-[#D5DEEF]/50">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-[#395886]" />
              <div>
                <div className="text-sm font-semibold text-gray-900">Tecnologia</div>
                <div className="text-xs text-gray-600">Moderna</div>
              </div>
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
            Agende uma Avaliação Gratuita
          </h3>
          <p className="mb-6 text-white/90 leading-relaxed">
            Descubra como os alinhadores invisíveis podem transformar seu sorriso. 
            Primeira consulta sem compromisso!
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre alinhadores invisíveis.", '_blank')}
            className="bg-white text-[#395886] hover:bg-gray-50 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeensAdults;
