import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServiceSection from './components/ServiceSection';
import StatsSection from './components/StatsSection';
import TestimonialSection from './components/TestimonialSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = 'TalentSphere | Expert Recruitment Services';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <StatsSection />
      <TestimonialSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;