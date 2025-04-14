
import { CheckCircle, Award, Users, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const stats = [
  { label: "Years of Experience", value: "8+" },
  { label: "Successful Projects", value: "200+" },
  { label: "E-commerce Stores", value: "150+" },
  { label: "Expert Team Members", value: "15" }
];

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about-section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Our E-commerce Agency</h2>
            <p className="text-agency-gray mb-6">
              We're a specialized agency focused exclusively on helping e-commerce businesses grow and thrive in the competitive online landscape.
            </p>
            <p className="text-agency-gray mb-6">
              Our team of experts combines technical e-commerce knowledge with deep marketing expertise to create solutions that don't just look good, but actually drive sales and revenue.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                <p className="text-agency-gray">E-commerce specialists with technical expertise</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                <p className="text-agency-gray">Data-driven approach to maximize your ROI</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                <p className="text-agency-gray">Comprehensive services from development to marketing</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                <p className="text-agency-gray">Proven track record of delivering measurable results</p>
              </div>
            </div>
            
            <Button asChild className="bg-agency-purple hover:bg-agency-darkPurple text-white font-medium transition-all duration-300">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4">
                    {index === 0 ? (
                      <Award className="w-12 h-12 text-agency-purple" />
                    ) : index === 1 ? (
                      <Briefcase className="w-12 h-12 text-agency-purple" />
                    ) : index === 2 ? (
                      <div className="w-12 h-12 flex items-center justify-center text-agency-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5Z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                      </div>
                    ) : (
                      <Users className="w-12 h-12 text-agency-purple" />
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-agency-black mb-1">{stat.value}</h3>
                  <p className="text-agency-gray">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-agency-purple to-agency-blue text-white p-6 rounded-xl mt-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">Our Agency Mission</h3>
              <p className="mb-0">
                To help WordPress-powered e-commerce businesses achieve sustainable growth through specialized services, technical excellence, and data-driven strategies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
