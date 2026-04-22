import React from 'react';
import { Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/hj2b9ws5_536783298_18121488607488456_8900293716311899703_n.jpg"
                alt="Dra. Nadja Offa"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#B1C9EF]/30 to-[#638ECB]/30 rounded-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                Sobre a Doutora
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Dra. Nadja Offa
              </h2>
              <p className="text-xl text-[#395886] font-semibold mb-6">
                Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
              </p>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Com mais de 10 anos de experiência, a Dra. Nadja Offa dedica-se a proporcionar 
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

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-[#F0F3FA]/50 rounded-2xl">
                <Heart className="w-8 h-8 text-[#395886] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">Cuidado</div>
                <div className="text-sm text-gray-600">Atencioso e Humanizado</div>
              </div>
              
              <div className="text-center p-4 bg-[#F0F3FA]/50 rounded-2xl">
                <Award className="w-8 h-8 text-[#395886] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">Expertise</div>
                <div className="text-sm text-gray-600">Especialista Certificada</div>
              </div>
              
              <div className="text-center p-4 bg-[#F0F3FA]/50 rounded-2xl">
                <Users className="w-8 h-8 text-[#395886] mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">Confiança</div>
                <div className="text-sm text-gray-600">5.0 de 85 avaliações</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
