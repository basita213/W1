import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Heart } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Boutique', path: '/boutique' },
    { name: 'A propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img src="/logo.webp" alt="Moda Via" className="h-10 w-10 sm:h-12 sm:w-12 object-contain transition-transform group-hover:scale-105" />
            <div className="flex items-baseline">
              <span className="text-lg sm:text-xl font-bold font-heading text-brand tracking-wide">MODA</span>
              <span className="text-lg sm:text-xl font-light font-heading text-brand-dark ml-1">VIA</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium tracking-wider uppercase transition-colors rounded-lg ${
                  location.pathname === link.path
                    ? 'text-brand bg-brand-50'
                    : 'text-gray-600 hover:text-brand hover:bg-brand-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://www.instagram.com/moda_via_oran/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-brand hover:bg-brand-50 transition-all">
              <Instagram size={18} />
            </a>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-brand hover:bg-brand-50 transition-all relative">
              <Heart size={18} />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-brand hover:bg-brand-50 transition-all relative">
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-80 border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-sm font-medium tracking-wider uppercase py-3 px-4 rounded-lg transition-colors ${
                location.pathname === link.path ? 'text-brand bg-brand-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-3 pt-3 mt-2 border-t border-gray-100 px-4">
            <a href="https://www.instagram.com/moda_via_oran/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-brand hover:bg-brand-50 transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
