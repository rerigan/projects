import React from 'react';
import { Search, UserCheck, Briefcase, Award, BarChart, UserPlus } from 'lucide-react';

const serviceItems = [
  {
    icon: <Search className="w-10 h-10 text-primary-600" />,
    title: 'Talent Sourcing',
    description: 'We identify and attract top-tier candidates from diverse backgrounds to match your specific needs.'
  },
  {
    icon: <UserCheck className="w-10 h-10 text-primary-600" />,
    title: 'Candidate Screening',
    description: 'Our thorough vetting process ensures only the most qualified candidates reach your interview stage.'
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary-600" />,
    title: 'Executive Search',
    description: 'Specialized recruitment for C-level and leadership positions across various industries.'
  },
  {
    icon: <Award className="w-10 h-10 text-primary-600" />,
    title: 'Culture Matching',
    description: 'We find candidates who align with your company values and contribute to your workplace culture.'
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary-600" />,
    title: 'Market Analysis',
    description: 'Comprehensive insights on talent trends, salary benchmarks, and competitive positioning.'
  },
  {
    icon: <UserPlus className="w-10 h-10 text-primary-600" />,
    title: 'Onboarding Support',
    description: 'Assistance with seamless integration of new hires into your organization.'
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recruitment Services</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We offer comprehensive recruitment solutions tailored to your company's unique needs, helping you build exceptional teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4 p-3 bg-primary-50 rounded-full w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors shadow-md"
          >
            Discuss Your Hiring Needs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;