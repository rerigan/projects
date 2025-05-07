import React from 'react';

const stats = [
  { number: '98%', description: 'Client satisfaction rate' },
  { number: '3,500+', description: 'Successful placements' },
  { number: '150+', description: 'Partner companies' },
  { number: '45 days', description: 'Average time to hire' }
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary-600 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="animate-fadeIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <p className="text-primary-100">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;