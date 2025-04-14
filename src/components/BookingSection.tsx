
import { Calendar, Check } from 'lucide-react';

const BookingSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="booking">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Book Your Strategy Call</h2>
            <p className="text-agency-gray mb-6">
              Schedule a 30-minute consultation with one of our WordPress e-commerce experts to discuss your business goals and how we can help you achieve them.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-sm mb-6 border border-gray-100">
              <h3 className="text-lg font-semibold mb-4 flex items-center text-agency-black">
                <Calendar className="mr-2 h-5 w-5 text-agency-purple" />
                What to Expect on Your Call
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-agency-purple shrink-0 mr-3 mt-0.5" />
                  <span className="text-agency-gray">A deep analysis of your current WordPress store</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-agency-purple shrink-0 mr-3 mt-0.5" />
                  <span className="text-agency-gray">Identification of growth opportunities and optimizations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-agency-purple shrink-0 mr-3 mt-0.5" />
                  <span className="text-agency-gray">Specific recommendations for your business</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-agency-purple shrink-0 mr-3 mt-0.5" />
                  <span className="text-agency-gray">Actionable next steps to improve performance</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-agency-purple shrink-0 mr-3 mt-0.5" />
                  <span className="text-agency-gray">Clear pricing and timeline for potential projects</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-agency-purple/10 p-6 rounded-xl">
              <p className="text-agency-gray italic mb-0">
                "The strategy call with WPCommerce was eye-opening. They spotted critical issues with our store that we'd never noticed and gave us a clear roadmap for fixing them. Highly recommend booking a call!"
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                  className="w-10 h-10 rounded-full mr-3 border-2 border-white"
                />
                <div>
                  <p className="font-medium text-agency-black">Robert Chen</p>
                  <p className="text-sm text-agency-gray">CEO, Urban Style Co.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-center text-agency-black">Book Your Call Now</h3>
              
              {/* Calendly inline widget */}
              <div className="calendly-inline-widget rounded-lg overflow-hidden" data-url="https://calendly.com/your-calendly-link" style={{ minWidth: '320px', height: '630px' }}>
                <iframe 
                  src="https://calendly.com/d/yco-p2p-k4c" 
                  frameBorder="0" 
                  scrolling="no" 
                  width="100%" 
                  height="100%"
                  title="Schedule a meeting"
                ></iframe>
              </div>
              
              <p className="text-sm text-center text-agency-gray mt-4">
                No credit card required. This is a free consultation call to determine if we're a good fit for each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
