import React from 'react';
import { Sparkles, Eye, Clock, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const TeensAdults = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Praticamente Invisível",
      description: "Alinhadores transparentes que ninguém percebe"
    },
    {
      icon: Clock,
      title: "Rápido e Eficiente",
      description: "Resultados visíveis em poucos meses"
    },
    {
      icon: Sparkles,
      title: "Conforto Superior",
      description: "Sem fios ou brackets metálicos"
    },
    {
      icon: TrendingUp,
      title: "Resultados Previsíveis",
      description: "Planejamento digital 3D do seu novo sorriso"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#F0F3FA]/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D5DEEF]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1590062033099-a43ac5f82979?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwzfHxpbnZpc2libGUlMjBhbGlnbmVyc3xlbnwwfHx8fDE3NzU3MzY1MzV8MA&ixlib=rb-4.1.0&q=85"
                alt="Alinhadores invisíveis"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-8 h-8 text-[#395886]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Tecnologia</div>
                    <div className="text-xs text-gray-600">Moderna</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image decoration */}
            <div className="absolute bottom-8 left-8 bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-6 shadow-xl text-white max-w-xs">
              <p className="font-semibold mb-1">Sorriso dos Sonhos</p>
              <p className="text-sm text-white/90">Conquiste a confiança que você sempre quis</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                Para Adolescentes e Adultos
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Sorria com confiança usando{' '}
                <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
                  alinhadores invisíveis
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transforme seu sorriso de forma discreta e confortável. Perfeito para quem 
                busca estética e resultados profissionais sem comprometer a aparência.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#395886]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="bg-white border-2 border-[#D5DEEF] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Agende uma Avaliação Gratuita
              </h3>
              <p className="text-gray-600 mb-6">
                Descubra como os alinhadores invisíveis podem transformar seu sorriso. 
                Primeira consulta sem compromisso!
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre alinhadores invisíveis.", '_blank')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero Saber Mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeensAdults;
