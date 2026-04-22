import React from 'react';
import { AlertCircle, Utensils, MessageCircle, Zap, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { parentConcerns } from '../data/mock';

const iconMap = {
  AlertCircle,
  Utensils,
  MessageCircle,
  Zap
};

const ParentSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#B1C9EF]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#638ECB]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
                Para Pais e Responsáveis
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Seu filho merece o melhor cuidado ortodôntico
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Entendemos suas preocupações. Como especialista em ortodontia infantil, 
                oferecemos soluções personalizadas para os desafios mais comuns enfrentados 
                pelas famílias.
              </p>
            </div>

            {/* Concerns Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {parentConcerns.map((concern) => {
                const IconComponent = iconMap[concern.icon];
                return (
                  <div 
                    key={concern.id}
                    className="bg-gradient-to-br from-[#F0F3FA]/40 to-white p-6 rounded-2xl border border-[#D5DEEF]/50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-[#395886] mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {concern.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {concern.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Aparelhos Personalizados */}
            <div className="bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF]/30 rounded-2xl p-8 border border-[#B1C9EF]/50">
              <div className="flex items-start gap-4 mb-4">
                <Palette className="w-8 h-8 text-[#395886] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Aparelhos Personalizados para Crianças
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Tornamos o tratamento ortodôntico mais divertido e especial para as crianças com opções de personalização:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#638ECB] rounded-full"></span>
                      <span>Aparelhos com <strong>nome da criança</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#638ECB] rounded-full"></span>
                      <span>Decorados com <strong>desenhos favoritos</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#638ECB] rounded-full"></span>
                      <span>Temas de <strong>times de futebol</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
              <img 
                src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/8r1uc0sz_2025-07-03.webp"
                alt="Aparelhos personalizados"
                className="w-full h-48 object-contain rounded-xl mt-4"
              />
            </div>

            {/* Reassurance Box */}
            <div className="bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Atendimento Especializado para Crianças com Medo
              </h3>
              <p className="mb-6 text-white/90 leading-relaxed">
                Utilizamos técnicas de adaptação gradual, ambiente acolhedor e uma 
                abordagem gentil e paciente. A primeira consulta é focada em criar 
                confiança e deixar a criança confortável.
              </p>
              <Button 
                onClick={() => window.open("https://wa.me/5511997203335?text=Olá! Meu filho tem medo de dentista. Como funciona o atendimento?", '_blank')}
                className="bg-white text-[#395886] hover:bg-gray-50 rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Saiba Como Ajudamos Seu Filho
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_ortho-premium-sp/artifacts/egsq4t18_ChatGPT%20Image%2022%20de%20abr.%20de%202026%2C%2012_58_29.png"
                alt="Dra. Nadja Offa com paciente infantil"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Glassmorphism overlay card - MOVIDO DA SEÇÃO HERO */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50">
                <p className="text-gray-900 font-semibold text-lg mb-2">
                  Atendimento especializado para crianças
                </p>
                <p className="text-gray-600 text-sm">
                  Ambiente acolhedor e técnicas gentis para crianças com medo de dentista
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-[#638ECB]/30 to-[#B1C9EF]/30 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentSection;
