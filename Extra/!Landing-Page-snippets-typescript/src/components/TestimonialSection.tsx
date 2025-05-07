import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "TalentSphere transformed our hiring process. They found exceptional candidates who perfectly aligned with our company culture and technical requirements.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "Working with TalentSphere has been outstanding. Their attention to detail and understanding of our needs helped us build a world-class engineering team.",
    author: "Michael Chen",
    role: "VP of Engineering, InnovateTech",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    quote: "The quality of candidates TalentSphere presented exceeded our expectations. They've become our trusted partner for all our hiring needs.",
    author: "Emily Rodriguez",
    role: "HR Director, Global Solutions",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover how we've helped companies across various industries find their perfect talent match.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="absolute -top-6 left-8 bg-primary-100 p-3 rounded-full">
              <Quote className="w-8 h-8 text-primary-600" />
            </div>
            
            <div className="mt-4">
              <p className="text-gray-700 text-lg italic mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute right-8 bottom-8 flex space-x-2">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full bg-gray-100 hover:bg-primary-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
            
            {/* Indicator dots */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;