import React from 'react';
import { Smile, Sparkles, Activity, LineChart, CheckCircle2, Star, Scan, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { services } from '../data/mock';

const iconMap = {
  Smile,
  Sparkles,
  Activity,
  LineChart,
  CheckCircle2,
  Star,
  Scan,
  Shield
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-[#F0F3FA] to-[#D5DEEF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-[#8AAEE0] to-[#B1C9EF] text-white rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços ortodônticos com tecnologia 
            moderna e atendimento personalizado
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div 
                key={service.id}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#B1C9EF] hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-[#395886]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#395886] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* WhatsApp Button */}
                <Button
                  onClick={() => window.open(`https://wa.me/5511997203335?text=Olá! Gostaria de saber mais sobre ${service.title}.`, '_blank')}
                  variant="outline"
                  className="w-full border-[#395886] text-[#395886] hover:bg-[#395886] hover:text-white transition-all duration-300"
                >
                  Saber Mais
                </Button>

                {/* Decorative gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F0F3FA]/0 to-[#D5DEEF]/0 group-hover:from-[#F0F3FA]/10 group-hover:to-[#D5DEEF]/10 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Não encontrou o tratamento que procura?
          </p>
          <Button 
            onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Tenho dúvidas sobre tratamentos ortodônticos.", '_blank')}
            className="bg-gradient-to-r from-[#395886] to-[#638ECB] hover:from-[#638ECB] hover:to-[#395886] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Entre em Contato pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
