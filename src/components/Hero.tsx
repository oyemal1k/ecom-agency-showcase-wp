
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-agency-purple/10 to-agency-blue/5 pt-32 pb-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-black leading-tight mb-6 animate-fade-in">
            Transform Your <span className="text-agency-purple">E-commerce</span> Store Into a Revenue Machine
          </h1>
          <p className="text-lg text-agency-gray mb-8 md:pr-10 animate-fade-in delay-1">
            We help e-commerce businesses like yours achieve extraordinary results through specialized e-commerce services, data-driven strategies, and proven systems that deliver measurable ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in delay-2">
            <Button asChild className="bg-agency-purple hover:bg-agency-darkPurple text-white font-medium py-6 px-8 rounded-md transition-all duration-300">
              <Link to="/contact#booking" className="flex items-center">
                Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-agency-purple text-agency-purple hover:bg-agency-purple/5 font-medium py-6 px-8 rounded-md transition-all duration-300">
              <Link to="/portfolio">
                Explore Our Work
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-4 items-center animate-fade-in delay-3">
            <div className="flex -space-x-4">
              <img src="https://randomuser.me/api/portraits/women/12.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
              <img src="https://randomuser.me/api/portraits/men/67.jpg" className="w-10 h-10 rounded-full border-2 border-white" alt="Client" />
            </div>
            <p className="text-sm text-agency-gray">
              <span className="font-semibold">Trusted by 50+</span> E-commerce store owners
            </p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 transform hidden lg:block w-2/5 h-3/4 bg-white/50 rounded-l-3xl shadow-xl backdrop-blur-md animate-fade-in">
        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="E-commerce dashboard" className="w-full h-full object-cover rounded-l-3xl opacity-90" />
      </div>
    </section>
  );
};

export default Hero;
