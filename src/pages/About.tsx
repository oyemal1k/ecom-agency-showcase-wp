
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Award, Briefcase, Map, CheckCircle, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CTA from '@/components/CTA';

const teamMembers = [
  {
    name: "David Johnson",
    position: "Founder & CEO",
    bio: "WordPress specialist with 12+ years of experience building high-converting e-commerce sites.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    position: "Head of Marketing",
    bio: "Digital marketing expert specializing in PPC and conversion optimization for e-commerce.",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    bio: "Full-stack developer with deep expertise in WordPress, WooCommerce and custom plugin development.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "SEO Specialist",
    bio: "E-commerce SEO expert who has helped 50+ WordPress stores achieve first-page rankings.",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    name: "Chris Taylor",
    position: "Content Director",
    bio: "Former Amazon content manager who specializes in creating high-converting A+ content.",
    image: "https://randomuser.me/api/portraits/men/79.jpg"
  },
  {
    name: "Jessica Lee",
    position: "Client Success Manager",
    bio: "Dedicated to ensuring smooth project execution and exceptional client experiences.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const values = [
  {
    title: "Results-Driven",
    description: "We're focused on metrics that matter to your business – revenue, conversion rates, and ROI."
  },
  {
    title: "Technical Excellence",
    description: "Our team stays at the cutting edge of WordPress development and e-commerce best practices."
  },
  {
    title: "Transparent Communication",
    description: "We believe in clear, honest communication about what's working and what needs improvement."
  },
  {
    title: "Data-Informed Decisions",
    description: "Every recommendation we make is backed by data and proven strategies, not guesswork."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-r from-agency-purple/10 to-agency-blue/5">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-agency-black mb-6">About Our WordPress E-commerce Agency</h1>
              <p className="text-lg text-agency-gray mb-8">
                We're a specialized team of WordPress experts dedicated to helping e-commerce businesses grow through technical excellence and data-driven strategies.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Our Company Story</h2>
                <p className="text-agency-gray mb-4">
                  Founded in 2015, WPCommerce Agency began with a simple mission: to help WordPress store owners overcome technical challenges and achieve their business goals.
                </p>
                <p className="text-agency-gray mb-4">
                  What started as a small WordPress development shop has grown into a full-service e-commerce agency with a team of specialists across development, marketing, and creative services.
                </p>
                <p className="text-agency-gray mb-4">
                  Today, we're proud to have helped over 200 WordPress-based e-commerce businesses achieve meaningful growth through our specialized services and data-driven approach.
                </p>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center">
                    <Award className="w-10 h-10 text-agency-purple mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-agency-black">8+</p>
                      <p className="text-sm text-agency-gray">Years Experience</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-10 h-10 text-agency-purple mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-agency-black">200+</p>
                      <p className="text-sm text-agency-gray">Projects Completed</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-10 h-10 text-agency-purple mr-3" />
                    <div>
                      <p className="text-2xl font-bold text-agency-black">15</p>
                      <p className="text-sm text-agency-gray">Team Members</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Team working together"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle mx-auto">The principles that guide everything we do for our clients</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 bg-agency-purple/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-agency-purple">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-agency-black">{value.title}</h3>
                  <p className="text-agency-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Meet Our Team</h2>
              <p className="section-subtitle mx-auto">The WordPress and e-commerce experts behind our success stories</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group border border-gray-100">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-agency-black group-hover:text-agency-purple transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-agency-purple font-medium mb-3">{member.position}</p>
                    <p className="text-agency-gray">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="section-title">Where We're Located</h2>
                <p className="text-agency-gray mb-6">
                  Our main office is located in Digital City, but we work with WordPress e-commerce businesses all over the world.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <Map className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-agency-black mb-1">Main Office</h4>
                      <p className="text-agency-gray">123 E-commerce Way, Digital City, DC 12345</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-agency-black mb-1">Phone</h4>
                      <p className="text-agency-gray">
                        <a href="tel:+15551234567" className="hover:text-agency-purple transition-colors">+1 (555) 123-4567</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-agency-purple mr-3 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-agency-black mb-1">Email</h4>
                      <p className="text-agency-gray">
                        <a href="mailto:hello@wpcommerce.com" className="hover:text-agency-purple transition-colors">hello@wpcommerce.com</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="bg-agency-purple hover:bg-agency-darkPurple text-white font-medium transition-all duration-300">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md h-[400px]">
                {/* This would be a Google Map, but adding a placeholder */}
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Office location"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle mx-auto">What makes our WordPress e-commerce agency different</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-agency-purple/5 to-agency-blue/5 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-agency-black">WordPress Specialization</h3>
                <p className="text-agency-gray mb-4">
                  Unlike general web agencies, we focus exclusively on WordPress and WooCommerce, giving us deeper expertise.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Advanced technical knowledge</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Platform-specific optimizations</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Faster problem resolution</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-agency-purple/5 to-agency-blue/5 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-agency-black">E-commerce Focus</h3>
                <p className="text-agency-gray mb-4">
                  We understand the unique challenges of selling online and build solutions specifically for conversions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Conversion-optimized designs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Sales-focused functionality</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Revenue growth strategies</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-agency-purple/5 to-agency-blue/5 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-agency-black">Proven Results</h3>
                <p className="text-agency-gray mb-4">
                  Our track record of success with WordPress stores speaks for itself through measurable outcomes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Documented case studies</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Transparent reporting</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-agency-purple mr-2 shrink-0" />
                    <span className="text-agency-gray">Long-term client relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
