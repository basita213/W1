import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.webp" alt="Moda Via" className="h-16 w-16 sm:h-20 sm:w-20 object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Votre destination mode a Oran. Style, elegance et tendance pour femmes et enfants.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/moda_via_oran/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors text-gray-300 hover:text-white">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-base sm:text-lg font-semibold mb-4 sm:mb-6">Navigation</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Boutique', path: '/boutique' },
                { name: 'A propos', path: '/a-propos' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-brand transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base sm:text-lg font-semibold mb-4 sm:mb-6">Categories</h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {['Robes', 'Tops & T-shirts', 'Enfants', 'Chaussures', 'Accessoires'].map((item) => (
                <li key={item}>
                  <Link to="/boutique" className="text-gray-400 hover:text-brand transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <MapPin size={16} className="text-brand mt-0.5 shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-gray-400 text-sm">Oran, Algerie</span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Phone size={16} className="text-brand shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-gray-400 text-sm">+213 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2.5 sm:gap-3">
                <Mail size={16} className="text-brand shrink-0 sm:w-[18px] sm:h-[18px]" />
                <span className="text-gray-400 text-sm break-all">moda_via_oran@email.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; 2026 Moda Via. Tous droits reserves.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1">
            Fait avec <Heart size={12} className="text-brand fill-brand sm:w-3.5 sm:h-3.5" /> a Oran
          </p>
        </div>
      </div>
    </footer>
  );
}
