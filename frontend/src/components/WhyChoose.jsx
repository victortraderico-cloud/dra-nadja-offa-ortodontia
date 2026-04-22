import React from 'react';
import { whyChoose } from '../data/mock';

const WhyChoose = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F0F3FA] via-white to-[#D5DEEF]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#B1C9EF] to-[#8AAEE0] text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Diferenciais
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Por que escolher a Dra. Nadja Offa?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cuidado especializado que faz toda a diferença na saúde e beleza do seu sorriso
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChoose.map((item, index) => (
            <div 
              key={item.id}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-white to-[#F0F3FA]/30 rounded-2xl p-8 h-full border-2 border-[#D5DEEF]/50 hover:border-[#638ECB] transition-all duration-300 hover:shadow-xl">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#395886] to-[#638ECB] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#395886] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl relative">
          <img 
            src="https://images.unsplash.com/photo-1588979355313-6711a095465f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGZhbWlseXxlbnwwfHx8fDE3NzU3MzY1Mzl8MA&ixlib=rb-4.1.0&q=85"
            alt="Família feliz"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#395886]/90 to-[#638ECB]/90 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Seu sorriso é nossa prioridade
              </h3>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                Junte-se a centenas de famílias que confiam em nosso trabalho
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
