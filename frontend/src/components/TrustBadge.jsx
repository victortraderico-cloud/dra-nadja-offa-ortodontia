import React from 'react';
import { Star, MapPin, Award, Clock } from 'lucide-react';

const TrustBadge = () => {
  return (
    <section className="relative py-12 bg-gradient-to-r from-[#395886] to-[#638ECB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Rating */}
          <div className="text-center">
            <div className="flex justify-center items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-300 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-white mb-1">5.0</div>
            <div className="text-white/90 text-sm">85 avaliações</div>
          </div>

          {/* Location */}
          <div className="text-center">
            <MapPin className="w-8 h-8 text-white/90 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">São Paulo</div>
            <div className="text-white/90 text-sm">Limão e Santana</div>
          </div>

          {/* Specialty */}
          <div className="text-center">
            <Award className="w-8 h-8 text-white/90 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">Especialista</div>
            <div className="text-white/90 text-sm">Ortodontia Infantil</div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <Clock className="w-8 h-8 text-white/90 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white mb-1">Até 20h</div>
            <div className="text-white/90 text-sm">Horário flexível</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadge;
