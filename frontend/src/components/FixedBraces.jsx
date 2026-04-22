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
            {/* Clean Professional Braces Display */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-[#F0F3FA] p-12">
              <div className="grid grid-cols-2 gap-8">
                {/* Metálico Tradicional */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8AAEE0] to-[#638ECB] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Metálico<br/>Tradicional</h4>
                </div>

                {/* Autoligado */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#B1C9EF] to-[#8AAEE0] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Metálico<br/>Autoligado</h4>
                </div>

                {/* Estético Cerâmico */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D5DEEF] to-[#B1C9EF] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Estético<br/>Cerâmico</h4>
                </div>

                {/* Estético Safira */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-10 h-10 text-[#395886]" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Estético<br/>de Safira</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FixedBraces;
