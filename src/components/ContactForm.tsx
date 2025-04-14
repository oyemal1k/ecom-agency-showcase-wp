
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
        variant: "default",
      });
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: ''
      });
    }, 1000);
  };

  return (
    <section className="section-padding bg-white" id="contact-form">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">Have questions or ready to start your project? Reach out to us!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-r from-agency-purple/10 to-agency-blue/5 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-agency-black">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-agency-purple mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-agency-black mb-1">Office Location</h4>
                    <p className="text-agency-gray">123 E-commerce Way, Digital City, DC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-agency-purple mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-agency-black mb-1">Phone Number</h4>
                    <p className="text-agency-gray">
                      <a href="tel:+15551234567" className="hover:text-agency-purple transition-colors">+1 (555) 123-4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-agency-purple mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-medium text-agency-black mb-1">Email Address</h4>
                    <p className="text-agency-gray">
                      <a href="mailto:hello@wpcommerce.com" className="hover:text-agency-purple transition-colors">hello@wpcommerce.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-agency-black">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-agency-gray">Monday - Friday:</span>
                  <span className="font-medium text-agency-black">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-agency-gray">Saturday:</span>
                  <span className="font-medium text-agency-black">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-agency-gray">Sunday:</span>
                  <span className="font-medium text-agency-black">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-medium text-agency-black mb-2">Prefer a scheduled call?</h4>
                <p className="text-agency-gray mb-4">Book a time that works best for you using our calendar.</p>
                <Button asChild className="bg-agency-purple hover:bg-agency-darkPurple text-white font-medium transition-all duration-300">
                  <a href="#booking">Schedule a Call</a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-agency-black">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-agency-gray mb-1">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-agency-gray mb-1">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-agency-gray mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-agency-gray mb-1">Your Website</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                    placeholder="https://"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-agency-gray mb-1">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all appearance-none bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="WordPress Development">WordPress Development</option>
                  <option value="PPC Management">PPC Management</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="TikTok Shop">TikTok Shop</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-agency-gray mb-1">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-agency-purple focus:border-agency-purple transition-all"
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-agency-purple hover:bg-agency-darkPurple text-white font-medium py-3 transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
