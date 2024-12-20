import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Home } from 'lucide-react';
import { Dropdown } from './Dropdown';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (id: string) => void;
}

export function Navigation({ isMenuOpen, setIsMenuOpen, scrollToSection }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const serviceItems = [
    { id: 'global-sourcing', label: 'Global Product Sourcing' },
    { id: 'regulatory-compliance', label: 'Regulatory Compliance' },
    { id: 'logistics-management', label: 'Logistics Management' },
    { id: 'market-entry', label: 'Market Entry' },
    { id: 'wholesale-distribution', label: 'Wholesale & Distribution' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={scrollToTop}
            className="flex-shrink-0 font-bold text-xl text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            AGMPROD
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <Dropdown items={serviceItems} onSelect={scrollToSection} />
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900 shadow-lg border-t border-gray-800">
          {/* Home Button */}
          <button
            onClick={() => {
              scrollToTop();
              setIsMenuOpen(false);
            }}
            className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800"
          >
            <Home className="h-5 w-5 mr-2" />
            <span>Home</span>
          </button>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800"
            >
              <span>Services</span>
              {isServicesOpen ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            
            {/* Services submenu */}
            <div className={`${isServicesOpen ? 'block' : 'hidden'} pl-4 pb-2`}>
              {serviceItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                    setIsServicesOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              scrollToSection('contact');
              setIsMenuOpen(false);
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-800"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}