import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute w-full h-full bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Find the <span className="text-primary-600">perfect talent</span> for your team
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              We connect exceptional professionals with forward-thinking companies. Our expert recruiting team makes hiring simple, fast, and effective.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-all transform hover:-translate-y-1 flex items-center gap-2 shadow-md"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </a>
              <a 
                href="#services" 
                className="bg-white text-primary-600 border border-primary-600 px-6 py-3 rounded-md hover:bg-primary-50 transition-all transform hover:-translate-y-1 flex items-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-slideInRight">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Diverse team in a modern office" 
                className="w-full h-auto object-cover rounded-lg" 
              />
              <div className="absolute inset-0 bg-primary-900 opacity-10"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-32 animate-float">
              <p className="text-primary-600 font-bold text-xl">95%</p>
              <p className="text-gray-700 text-sm">Success Rate</p>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-40 animate-float-delay">
              <p className="text-primary-600 font-bold text-xl">2,500+</p>
              <p className="text-gray-700 text-sm">Placements Made</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;