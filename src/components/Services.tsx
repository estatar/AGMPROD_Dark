import React from 'react';
import { Globe2, ShieldCheck, Truck, LineChart, Store } from 'lucide-react';

export function Services() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Global Product Sourcing */}
          <div id="global-sourcing" className="group bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 scroll-mt-20 border border-gray-700/30 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Globe2 className="w-8 h-8 text-blue-400 mr-4 group-hover:text-blue-300" />
              <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300">Global Product Sourcing</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&q=80"
              alt="Luxury Cosmetics"
              className="w-full h-48 object-cover rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/20"
            />
            <p className="text-gray-300 leading-relaxed">
              We identify and source premium cosmetics from trusted manufacturers worldwide. As a Netherlands-based company, we leverage Europe's strategic location to connect you with quality products tailored to your market.
            </p>
          </div>

          {/* Regulatory Compliance */}
          <div id="regulatory-compliance" className="group bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 scroll-mt-20 border border-gray-700/30 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-400 mr-4 group-hover:text-blue-300" />
              <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300">Regulatory Compliance and Documentation</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80"
              alt="Quality Control"
              className="w-full h-48 object-cover rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/20"
            />
            <p className="text-gray-300 leading-relaxed">
              Navigating international trade regulations is complex. Our expertise ensures your cosmetic products comply with European and global standards, including labeling, certifications, and customs requirements.
            </p>
          </div>

          {/* Logistics Management */}
          <div id="logistics-management" className="group bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 scroll-mt-20 border border-gray-700/30 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Truck className="w-8 h-8 text-blue-400 mr-4 group-hover:text-blue-300" />
              <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300">International Logistics Management</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80"
              alt="Cosmetics Logistics"
              className="w-full h-48 object-cover rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/20"
            />
            <p className="text-gray-300 leading-relaxed">
              From factory to shelves, we handle the entire logistics process. With expertise in shipping, warehousing, and distribution, we ensure your cosmetics reach their destination safely and on time.
            </p>
          </div>

          {/* Market Entry Strategies */}
          <div id="market-entry" className="group bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 scroll-mt-20 border border-gray-700/30 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <LineChart className="w-8 h-8 text-blue-400 mr-4 group-hover:text-blue-300" />
              <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300">Market Entry Strategies</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80"
              alt="Cosmetics Market"
              className="w-full h-48 object-cover rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/20"
            />
            <p className="text-gray-300 leading-relaxed">
              Expanding to new markets? We provide tailored market research, competitor analysis, and distribution strategies to maximize your success in global cosmetic markets.
            </p>
          </div>

          {/* Wholesale and Distribution */}
          <div id="wholesale-distribution" className="group bg-gray-800/30 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 scroll-mt-20 border border-gray-700/30 hover:border-blue-400/50 hover:shadow-blue-400/20 hover:shadow-xl">
            <div className="flex items-center mb-6">
              <Store className="w-8 h-8 text-blue-400 mr-4 group-hover:text-blue-300" />
              <h2 className="text-xl font-bold text-gray-100 group-hover:text-blue-300">Wholesale and Distribution</h2>
            </div>
            <img
              src="https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80"
              alt="Wholesale Distribution"
              className="w-full h-48 object-cover rounded-lg mb-6 group-hover:shadow-lg group-hover:shadow-blue-400/20"
            />
            <p className="text-gray-300 leading-relaxed">
              As a trusted Netherlands-based company, we leverage our network of global partners to connect you with reliable buyers and distributors, ensuring maximum exposure for your products.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-300 text-lg italic">
            AGMPROD is your trusted partner in navigating international markets and achieving growth. Let's work together to make your business thrive on a global scale.
          </p>
        </div>
      </div>
    </section>
  );
}