import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/your-logo.png" 
            alt="Your Company Name" 
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-agency-black hover:text-agency-green font-medium transition-colors">Home</Link>
          <Link to="/about" className="text-agency-black hover:text-agency-green font-medium transition-colors">About</Link>
          <Link to="/portfolio" className="text-agency-black hover:text-agency-green font-medium transition-colors">Portfolio</Link>
          <Link to="/contact" className="text-agency-black hover:text-agency-green font-medium transition-colors">Contact</Link>
          <Button asChild className="bg-agency-green hover:bg-agency-darkGreen text-white font-medium transition-all duration-300">
            <Link to="/contact#booking">Book a Meeting</Link>
          </Button>
        </div>

        <button className="md:hidden text-agency-black" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container-custom py-5 flex flex-col space-y-4">
            <Link to="/" className="text-agency-black hover:text-agency-green font-medium transition-colors py-2" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="text-agency-black hover:text-agency-green font-medium transition-colors py-2" onClick={toggleMenu}>About</Link>
            <Link to="/portfolio" className="text-agency-black hover:text-agency-green font-medium transition-colors py-2" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/contact" className="text-agency-black hover:text-agency-green font-medium transition-colors py-2" onClick={toggleMenu}>Contact</Link>
            <Button asChild className="bg-agency-green hover:bg-agency-darkGreen text-white font-medium w-full">
              <Link to="/contact#booking" onClick={toggleMenu}>Book a Meeting</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
