import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCw, Heart } from 'lucide-react';

const featuredProducts = [
  { id: 1, name: 'Robe Fleurie Ete', category: 'Robes', price: '3,500', badge: 'Nouveau' },
  { id: 2, name: 'T-Shirt Barbie Rose', category: 'Tops', price: '1,850', oldPrice: '2,200' },
  { id: 3, name: 'Ensemble Enfant Rose', category: 'Enfants', price: '2,450', badge: '-30%' },
  { id: 4, name: 'Sac a Main Elégant', category: 'Accessoires', price: '2,900' },
  { id: 5, name: 'Jupe Plissée Verte', category: 'Jupes', price: '1,990' },
  { id: 6, name: 'Chaussures Talons', category: 'Chaussures', price: '4,500' },
  { id: 7, name: 'Top Crochet Coloré', category: 'Tops', price: '1,750', badge: 'Tendance' },
  { id: 8, name: 'Robe d\'Soirée', category: 'Robes', price: '5,900' },
];

const categories = [
  { name: 'Robes', emoji: '👗', count: 45, gradient: 'from-pink-400 to-rose-600' },
  { name: 'Enfants', emoji: '👶', count: 32, gradient: 'from-purple-400 to-indigo-600' },
  { name: 'Chaussures', emoji: '👠', count: 28, gradient: 'from-amber-400 to-orange-600' },
  { name: 'Accessoires', emoji: '👜', count: 20, gradient: 'from-teal-400 to-cyan-600' },
];

const features = [
  { icon: Truck, title: 'Livraison', desc: 'Livraison rapide a Oran et dans toute l\'Algerie' },
  { icon: Shield, title: 'Qualite', desc: 'Des produits selectionnes avec soin pour vous' },
  { icon: RefreshCw, title: 'Echange', desc: 'Echange facile sous 48h' },
  { icon: Heart, title: 'Service', desc: 'Une equipe a votre ecoute' },
];

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Nos Categories</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4">Explorez Notre Univers</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">Des collections soigneusement composees pour sublimer votre style au quotidien.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.name} category={cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 sm:mb-16 gap-3 sm:gap-4">
            <div>
              <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Selection</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-2 sm:mt-3">Nos Coups de Coeur</h2>
            </div>
            <Link to="/boutique" className="inline-flex items-center gap-2 text-brand font-medium text-sm sm:text-base hover:gap-3 transition-all shrink-0">
              Voir tout <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-brand relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 sm:mb-6">Suivez-Nous sur Instagram</h2>
          <p className="text-white/80 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
            Rejoignez notre communaute de 13K+ abonnes pour decouvrir nos nouveautes et promotions exclusives.
          </p>
          <a
            href="https://www.instagram.com/moda_via_oran/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            @moda_via_oran
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((f) => (
              <div key={f.title} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-brand-50 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                  <f.icon size={20} className="text-brand group-hover:text-white transition-colors sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">{f.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
