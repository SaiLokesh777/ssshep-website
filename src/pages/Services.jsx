import React from 'react';
import { Droplets, Heart, Stethoscope, BookOpen, UtensilsCrossed, Sparkles } from 'lucide-react';
import { useApp } from '../AppContext';

const iconMap = { Droplets, Heart, Stethoscope, BookOpen, UtensilsCrossed };
const colorMap = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', badge: 'bg-blue-100 text-blue-700', accent: '#3b82f6' },
  red: { bg: 'bg-red-50', border: 'border-red-100', icon: 'text-red-600', badge: 'bg-red-100 text-red-700', accent: '#ef4444' },
  green: { bg: 'bg-green-50', border: 'border-green-100', icon: 'text-green-600', badge: 'bg-green-100 text-green-700', accent: '#22c55e' },
  saffron: { bg: 'bg-saffron-50', border: 'border-saffron-100', icon: 'text-saffron-600', badge: 'bg-saffron-100 text-saffron-700', accent: '#ff7d0a' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-orange-600', badge: 'bg-orange-100 text-orange-700', accent: '#f97316' },
};

const Services = () => {
  const { services } = useApp();

  return (
    <div className="page-transition pt-20 min-h-screen bg-[#fdfaf5]">
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/10 to-sacred-400/10"></div>
        <div className="relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-saffron-500/20 border border-saffron-400/30 mb-4">
            <Sparkles size={28} className="text-saffron-400" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Our Services</h1>
          <div className="divider-saffron"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            Five pillars of service through which SSSHEP touches lives every single day.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Heart;
            const colors = colorMap[service.color] || colorMap.saffron;
            return (
              <div key={service.id} className="card-hover bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group">
                {/* Image area */}
                {service.image ? (
                  <div className="h-48 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className={`h-48 ${colors.bg} ${colors.border} border-b flex items-center justify-center`}>
                    <Icon size={56} className={`${colors.icon} opacity-30`} />
                  </div>
                )}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className={colors.icon} />
                  </div>
                  <h3 className="font-display font-bold text-navy-900 text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="px-6 pb-5">
                  <div className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${colors.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.accent }}></span>
                    Active Program
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
