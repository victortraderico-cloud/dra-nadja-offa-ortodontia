import React from 'react';
import { Shield, Zap, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';

const FixedBraces = () => {
  const types = [
    {
      icon: Shield,
      title: "Metálico Tradicional",
      description: "Fio preso ao braquete por ligaduras elásticas (borrachinhas coloridas)"
    },
    {
      icon: Zap,
      title: "Metálico Autoligado",
      description: "Fio preso por clip, movimentos mais eficientes e resultados rápidos"
    },
    {
      icon: Award,
      title: "Estético Cerâmico",
      description: "Aspecto translúcido e de menor tamanho, mais discreto e elegante"
    },
    {
      icon: Clock,
      title: "Estético de Safira",
      description: "Versão transparente e opaca, próximo à coloração natural do dente"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#D5DEEF]/30 via-white to-[#F0F3FA] relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#638ECB]/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#B1C9EF]/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge + Título + Descrição */}
        <div className="mb-12">
          <div className="inline-block bg-gradient-to-r from-[#638ECB] to-[#395886] text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Tratamento Ortodôntico Completo
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Aparelhos{' '}
            <span className="bg-gradient-to-r from-[#395886] to-[#638ECB] bg-clip-text text-transparent">
              Fixos
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl">
            Oferecemos diferentes tipos de aparelhos ortodônticos fixos, desde o tradicional 
            metálico até opções estéticas discretas, sempre com resultados excepcionais.
          </p>
        </div>

        {/* Imagem */}
        <div className="mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
            <img 
              src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/2ubcxjds_ChatGPT%20Image%2022%20de%20abr.%20de%202026%2C%2013_30_42.png"
              alt="Tipos de Aparelhos Fixos"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* 4 Caixinhas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {types.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-[#D5DEEF]/50">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-xl flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-[#395886]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Azul */}
        <div className="bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-8 text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            Qual aparelho é ideal para você?
          </h3>
          <p className="mb-6 text-white/90 leading-relaxed">
            Agende uma avaliação e descubra qual tipo de aparelho ortodôntico 
            é mais adequado para o seu caso. Primeira consulta sem compromisso!
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre aparelhos fixos.", '_blank')}
            className="bg-white text-[#395886] hover:bg-gray-50 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FixedBraces;
