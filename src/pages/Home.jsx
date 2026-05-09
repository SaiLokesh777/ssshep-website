import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Heart, Stethoscope, BookOpen, UtensilsCrossed, Users, ArrowRight, Star } from 'lucide-react';
import { useApp } from '../AppContext';

const iconMap = {
  Droplets: Droplets,
  Heart: Heart,
  Stethoscope: Stethoscope,
  BookOpen: BookOpen,
  UtensilsCrossed: UtensilsCrossed,
};

const colorMap = {
  blue: 'bg-blue-50 text-blue-600 border-blue-100',
  red: 'bg-red-50 text-red-600 border-red-100',
  green: 'bg-green-50 text-green-600 border-green-100',
  saffron: 'bg-saffron-50 text-saffron-600 border-saffron-100',
  orange: 'bg-orange-50 text-orange-600 border-orange-100',
};

const impactColorMap = {
  '#3b82f6': 'from-blue-400 to-blue-600',
  '#ef4444': 'from-red-400 to-red-600',
  '#22c55e': 'from-green-400 to-green-600',
  '#f97316': 'from-orange-400 to-orange-600',
  '#eab308': 'from-yellow-400 to-yellow-500',
};

const Home = () => {
  const { services, impact } = useApp();

  // Duplicate for infinite carousel
  const carouselItems = [...impact, ...impact];

  return (
    <div className="page-transition">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pattern-bg overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-saffron-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sacred-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-400/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-saffron-500/20 border border-saffron-400/30 rounded-full text-saffron-300 text-sm font-medium mb-6">
              <Star size={13} fill="currentColor" />
              Serving Humanity Since 2010
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Seva is our
              <span className="block gradient-text">Highest Dharma</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Sri Sathya Sai Prema Seva Sadan — where every act of service becomes a prayer. Touching lives through water, health, education, and nourishment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-semibold rounded-xl hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-lg shadow-saffron-500/30"
              >
                Our Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '51,250+', label: 'Lives Touched', icon: '🙏' },
              { number: '14+', label: 'Years of Service', icon: '⭐' },
              { number: '5', label: 'Core Services', icon: '💛' },
              { number: '100%', label: 'Volunteer Driven', icon: '❤️' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-display text-2xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 30C480 50 240 0 0 30L0 80Z" fill="#fdfaf5"/>
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 bg-[#fdfaf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-saffron-600 font-semibold tracking-widest text-xs uppercase mb-3">Who We Are</p>
              <h2 className="font-display text-4xl font-bold text-navy-900 mb-6 leading-tight">
                A Family United by the Spirit of Service
              </h2>
              <div className="divider-saffron ml-0"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sri Sathya Sai Prema Seva Sadan (SSSHEP) is a humanitarian organization based in Vanasthalipuram, Hyderabad, dedicated to uplifting the lives of the underprivileged through selfless service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Inspired by the teachings of Sri Sathya Sai Baba — <em>"Love All, Serve All"</em> — our volunteers work tirelessly to ensure that no one in our community goes without clean water, healthcare, education, or food.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Community Driven', 'No Discrimination', 'Transparent Operations', 'All Faiths Welcome'].map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-saffron-50 text-saffron-700 text-sm rounded-full border border-saffron-200 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-saffron-50 to-sacred-50 rounded-3xl p-10 border border-saffron-100">
                <div className="text-center mb-8">
                  <div className="font-accent text-saffron-600 text-2xl font-bold">ॐ</div>
                  <p className="text-navy-800 font-display text-xl mt-2 italic">"Love All, Serve All"</p>
                  <p className="text-gray-500 text-sm mt-1">— Sri Sathya Sai Baba</p>
                </div>
                {/* <div className="space-y-4">
                  {[
                    { label: 'Founded', value: '2010' },
                    { label: 'Location', value: 'Vanasthalipuram, Hyderabad' },
                    { label: 'Volunteers', value: '200+ Active' },
                  ].map(item => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-saffron-100 last:border-0">
                      <span className="text-gray-500 text-sm">{item.label}</span>
                      <span className="text-navy-900 font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-saffron-600 font-semibold tracking-widest text-xs uppercase mb-3">What We Do</p>
            <h2 className="font-display text-4xl font-bold text-navy-900 mb-3">Our Core Services</h2>
            <div className="divider-saffron"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Heart;
              const colorClass = colorMap[service.color] || colorMap.saffron;
              return (
                <div key={service.id} className="card-hover group bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${colorClass} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} />
                  </div>
                  <h3 className="font-display font-semibold text-navy-900 text-base mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-medium rounded-xl hover:bg-navy-800 transition-colors"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* OUR IMPACT - Carousel */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <p className="text-saffron-400 font-semibold tracking-widest text-xs uppercase mb-3">Our Reach</p>
            <h2 className="font-display text-4xl font-bold text-white mb-3">Our Impact</h2>
            <div className="divider-saffron"></div>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Every number represents a life touched, a burden eased, a smile restored.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="carousel-track">
            {carouselItems.map((item, idx) => {
              const gradientClass = impactColorMap[item.color] || 'from-saffron-400 to-saffron-600';
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 mx-4 w-72 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors"
                >
                  {/* Image */}
                  <div className={`h-44 bg-gradient-to-br ${gradientClass} relative flex items-center justify-center`}>
                    {item.image ? (
                      <img src={item.image} alt={item.serviceName} className="w-full h-full object-cover absolute inset-0" />
                    ) : (
                      <div className="text-white/30 text-6xl font-display font-bold">
                        {item.serviceName.charAt(0)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-white text-lg mb-1">{item.serviceName}</h3>
                    <div className="flex items-end gap-1">
                      <span className="font-bold text-3xl text-saffron-400">{item.peopleServed.toLocaleString()}</span>
                      <span className="text-gray-400 text-sm mb-1">people served</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-saffron-500 to-saffron-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Join Us in Our Mission</h2>
          <p className="text-saffron-100 mb-8">
            Whether you wish to volunteer, donate, or simply spread the word — every contribution makes a difference.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-saffron-600 font-bold rounded-xl hover:bg-saffron-50 transition-colors shadow-lg"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
