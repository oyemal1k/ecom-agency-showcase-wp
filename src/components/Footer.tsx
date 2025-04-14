import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agency-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link to="/" className="flex items-center mb-5">
              <span className="text-white font-poppins font-bold text-2xl">EC<span className="text-agency-purple">Commerce</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              Specialized e-commerce services that deliver measurable results for online stores.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-agency-purple p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-agency-purple p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-agency-purple p-2 rounded-full transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-agency-purple p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/contact#booking" className="text-gray-400 hover:text-white transition-colors">Book a Call</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/portfolio?category=ecommerce" className="text-gray-400 hover:text-white transition-colors">E-commerce Development</Link>
              </li>
              <li>
                <Link to="/portfolio?category=ppc" className="text-gray-400 hover:text-white transition-colors">PPC Management</Link>
              </li>
              <li>
                <Link to="/portfolio?category=seo" className="text-gray-400 hover:text-white transition-colors">E-commerce SEO</Link>
              </li>
              <li>
                <Link to="/portfolio?category=content" className="text-gray-400 hover:text-white transition-colors">Content Creation</Link>
              </li>
              <li>
                <Link to="/portfolio?category=tiktok" className="text-gray-400 hover:text-white transition-colors">TikTok Shop Integration</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-agency-purple shrink-0 mt-1" />
                <span className="text-gray-400">123 E-commerce Way, Digital City, DC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-agency-purple" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-agency-purple" />
                <a href="mailto:hello@wpcommerce.com" className="text-gray-400 hover:text-white transition-colors">hello@wpcommerce.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; {currentYear} E-Commerce Agency. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
