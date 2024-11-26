import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-gray-800 py-20 px-4 md:px-8 scroll-mt-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">contact@agmprod.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-blue-400 mr-4" />
              <span className="text-gray-300">123 Business Avenue, New York, NY 10001</span>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}