import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#F0F3FA]/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#F0F3FA] text-[#395886] rounded-full px-4 py-2 text-sm font-semibold mb-4">
            Depoimentos
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            O que nossos pacientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiências reais de famílias que transformaram seus sorrisos
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#F0F3FA] to-[#D5DEEF] rounded-full flex items-center justify-center text-[#395886] font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Banner */}
        <div className="bg-gradient-to-r from-[#395886] to-[#638ECB] rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <div className="flex items-center justify-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
                ))}
              </div>
              <div className="text-5xl font-bold mb-2">5.0</div>
              <div className="text-white/90 text-lg">Média de avaliações</div>
            </div>
            
            <div className="w-px h-20 bg-white/30 hidden md:block"></div>
            
            <div>
              <div className="text-5xl font-bold mb-2">85+</div>
              <div className="text-white/90 text-lg">Avaliações verificadas</div>
            </div>

            <div className="w-px h-20 bg-white/30 hidden md:block"></div>

            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-white/90 text-lg">Satisfação garantida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
