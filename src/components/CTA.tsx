
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-16 bg-agency-purple text-white" id="cta">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your WordPress Store?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Let's discuss how our specialized e-commerce services can help your business achieve its growth goals. Schedule a no-obligation strategy call today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-white hover:bg-gray-100 text-agency-purple font-medium py-6 px-8 rounded-md transition-all duration-300">
                <Link to="/contact#booking" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Your Call
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-6 px-8 rounded-md transition-all duration-300">
                <Link to="/contact" className="flex items-center">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">What You'll Get on Your Call:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-white/20 p-1 rounded mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>A deep dive into your current WordPress store and business goals</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 p-1 rounded mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Identification of key improvement opportunities and growth levers</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 p-1 rounded mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Custom recommendations tailored to your specific situation</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 p-1 rounded mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>A clear action plan to improve your store's performance</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white/20 p-1 rounded mr-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No pressure, just expert advice you can implement immediately</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
