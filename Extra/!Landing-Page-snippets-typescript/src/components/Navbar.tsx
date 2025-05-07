import React, { useState, useEffect } from 'react';
import { Menu, X, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">TalentSphere</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors">
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col space-y-4 pb-4">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setIsOpen(false)}>Contact</a>
            <a 
              href="#contact" 
              className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors inline-block w-fit"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;