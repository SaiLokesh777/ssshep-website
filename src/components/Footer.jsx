import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-saffron-500 to-sacred-500 flex items-center justify-center">
                <span className="text-white font-accent font-bold text-sm">SS</span>
              </div>
              <div>
                <div className="font-accent font-bold text-white text-base tracking-wide">SSSHEP</div>
                <div className="text-xs text-gray-400">Sri Sathya Sai Prema Seva</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Dedicated to serving humanity through compassion, education, and care. Every act of service is an offering to the Divine.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/students', label: 'Students' },
                { to: '/alumni', label: 'Alumni' },
                { to: '/services', label: 'Our Services' },
                { to: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-saffron-400 transition-colors duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-saffron-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Flat No: 201, Second Floor, Near Ganesh Temple, Vanasthalipuram, Hyderabad 500070
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-saffron-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-saffron-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">contact@ssshep.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} SSSHEP — Sri Sathya Sai Prema Seva Sadan. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            Made with <Heart size={11} className="text-saffron-400 fill-saffron-400" /> for humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
