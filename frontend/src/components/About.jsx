import React from 'react';
import { Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content Only - No Image */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Sobre a Doutora
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Dra. Nadja Offa
            </h2>
            <p className="text-xl text-[#395886] font-semibold mb-6">
              Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
            </p>
            <div className="inline-flex items-center bg-gradient-to-r from-[#395886] to-[#638ECB] text-white rounded-full px-6 py-3 text-lg font-bold mb-8">
              <Award className="w-5 h-5 mr-2" />
              30 anos de experiência
            </div>
          </div>

          <div className="space-y-4 text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              Com mais de 30 anos de experiência, a Dra. Nadja Offa dedica-se a proporcionar 
              sorrisos saudáveis e bonitos através de tratamentos ortodônticos personalizados 
              e humanizados.
            </p>
            <p>
              Especialista em <strong className="text-gray-900">ortodontia infantil</strong> e 
              <strong className="text-gray-900"> ortopedia funcional dos maxilares</strong>, 
              atende principalmente crianças de 5 a 12 anos com uma abordagem 
              acolhedora, especialmente desenvolvida para crianças com medo de dentista.
            </p>
            <p>
              Além do cuidado infantil, também oferece tratamentos modernos para adolescentes 
              e adultos, incluindo <strong className="text-gray-900">alinhadores invisíveis</strong> e 
              soluções estéticas de alta qualidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
