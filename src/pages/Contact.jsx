import React from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useApp } from '../AppContext';

const Contact = () => {
  const { contact } = useApp();

  return (
    <div className="page-transition pt-20 min-h-screen bg-[#fdfaf5]">
      <div className="bg-gradient-to-br from-navy-900 to-navy-800 py-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-saffron-500/10 to-sacred-400/10"></div>
        <div className="relative">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-saffron-500/20 border border-saffron-400/30 mb-4">
            <Navigation size={28} className="text-saffron-400" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Contact Us</h1>
          <div className="divider-saffron"></div>
          <p className="text-gray-400 max-w-xl mx-auto mt-3">
            Reach out to us — we'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-1">Get in Touch</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-saffron-500 to-sacred-400 rounded mb-4"></div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We welcome volunteers, donors, well-wishers, and anyone who wants to be part of our mission of service.
              </p>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-saffron-50 border border-saffron-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-saffron-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                  <address className="text-gray-600 text-sm not-italic leading-relaxed">
                    Sri Sathya Sai Prema Seva Sadan<br />
                    Flat No: 201, Second Floor<br />
                    Opp Karthik Diagnostic Center<br />
                    Near Ganesh Temple<br />
                    Vanasthalipuram<br />
                    Hyderabad 500070, Telangana
                  </address>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-0.5">Phone</h4>
                  <a href={`tel:${contact.phone}`} className="text-gray-600 text-sm hover:text-saffron-600 transition-colors">
                    {contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900 mb-0.5">Email</h4>
                  <a href={`mailto:${contact.email}`} className="text-gray-600 text-sm hover:text-saffron-600 transition-colors">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-navy-900 flex items-center gap-2">
                  <MapPin size={16} className="text-saffron-500" /> Location Map
                </h3>
              </div>
              <div className="h-80">
                <iframe
                  title="SSSHEP Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.421!2d78.5480!3d17.3616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99cb7d18ec1b%3A0x7f17a66b7a3f4a35!2sVanasthalipuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Directions button */}
            <a
              href="https://maps.google.com/?q=Vanasthalipuram+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-medium rounded-xl hover:from-saffron-600 hover:to-saffron-700 transition-all shadow-sm"
            >
              <Navigation size={16} /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
