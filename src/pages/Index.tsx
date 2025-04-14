
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutSection />
        <Results />
        <PortfolioSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
