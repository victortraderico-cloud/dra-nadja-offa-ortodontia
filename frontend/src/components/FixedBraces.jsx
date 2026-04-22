import React from 'react';
import { Shield, Zap, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';

const FixedBraces = () => {
  const bracesTypes = [
    {
      icon: Shield,
      title: "Metálico Tradicional",
      description: "Fio preso ao braquete por ligaduras elásticas (borrachinhas)"
    },
    {
      icon: Zap,
      title: "Metálico Autoligado",
      description: "Fio preso ao braquete por um clip, movimentos mais eficientes e resultados mais rápidos"
    },
    {
      icon: Award,
      title: "Estético Cerâmico",
      description: "Aspecto translúcido e de menor tamanho, mais discreto"
    },
    {
      icon: Clock,
      title: "Estético de Safira",
      description: "Versão mais discreta do metálico, sendo transparente, opaco e próximo à coloração do dente"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D5DEEF]/20 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div>
              <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                Tratamento Ortodôntico Completo
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Aparelhos fixos para{' '}
                <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
                  resultados duradouros
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Oferecemos diferentes tipos de aparelhos ortodônticos fixos, desde o tradicional 
                metálico até opções estéticas mais discretas, sempre com foco em resultados 
                excepcionais e conforto durante o tratamento.
              </p>
            </div>

            {/* Types Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {bracesTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-[#395886]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{type.title}</h3>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Section */}
            <div className="bg-white border-2 border-[#D5DEEF] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Qual aparelho é ideal para você?
              </h3>
              <p className="text-gray-600 mb-6">
                Agende uma avaliação e descubra qual tipo de aparelho ortodôntico 
                é mais adequado para o seu caso. Primeira consulta sem compromisso!
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre aparelhos ortodônticos fixos.", '_blank')}
                className="w-full sm:w-auto bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero Saber Mais
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/gtsyieev_655167334_18110998492687860_2576208548805245955_n%20%281%29.jpg"
                alt="Tipos de aparelhos ortodônticos"
                className="w-full h-[500px] object-contain bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF]"
              />
              
              {/* Floating badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-[#395886]" />
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Qualidade</div>
                    <div className="text-xs text-gray-600">Garantida</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image decoration */}
            <div className="absolute bottom-8 left-8 bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-6 shadow-xl text-white max-w-xs">
              <p className="font-semibold mb-1">Transformação Completa</p>
              <p className="text-sm text-white/90">Aparelhos de última geração para resultados incríveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedBraces;
