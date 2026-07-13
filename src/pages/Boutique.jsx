import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const allProducts = [
  { id: 1, name: 'Robe Fleurie Ete', category: 'Robes', price: '3,500', badge: 'Nouveau' },
  { id: 2, name: 'T-Shirt Barbie Rose', category: 'Tops', price: '1,850', oldPrice: '2,200' },
  { id: 3, name: 'Ensemble Enfant Rose', category: 'Enfants', price: '2,450', badge: '-30%' },
  { id: 4, name: 'Sac a Main Elégant', category: 'Accessoires', price: '2,900' },
  { id: 5, name: 'Jupe Plissée Verte', category: 'Jupes', price: '1,990' },
  { id: 6, name: 'Chaussures Talons', category: 'Chaussures', price: '4,500' },
  { id: 7, name: 'Top Crochet Coloré', category: 'Tops', price: '1,750', badge: 'Tendance' },
  { id: 8, name: 'Robe d\'Soirée', category: 'Robes', price: '5,900' },
  { id: 9, name: 'Pantalon Large', category: 'Jupes', price: '2,200' },
  { id: 10, name: 'Body Bebe Pink', category: 'Enfants', price: '1,200' },
  { id: 11, name: 'Sandales Plateforme', category: 'Chaussures', price: '3,800' },
  { id: 12, name: 'Echarpe Soie', category: 'Accessoires', price: '1,500' },
  { id: 13, name: 'Robe Maxi Eté', category: 'Robes', price: '4,200', badge: 'Populaire' },
  { id: 14, name: 'T-Shirt Manches Longues', category: 'Tops', price: '1,950' },
  { id: 15, name: 'Robe Enfant Floral', category: 'Enfants', price: '2,100' },
  { id: 16, name: 'Mocassins Cuir', category: 'Chaussures', price: '3,400' },
];

const filters = ['Tout', 'Robes', 'Tops', 'Enfants', 'Chaussures', 'Accessoires', 'Jupes'];

export default function Boutique() {
  const [activeFilter, setActiveFilter] = useState('Tout');

  const filtered = activeFilter === 'Tout'
    ? allProducts
    : allProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Collection</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4">Notre Boutique</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Parcourez notre selection complete de vetements, chaussures et accessoires.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <SlidersHorizontal size={16} className="text-gray-400 mr-1 sm:mr-2" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? 'bg-brand text-white shadow-lg shadow-brand/30'
                  : 'bg-white text-gray-600 hover:bg-brand-50 hover:text-brand border border-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 sm:py-20">
            <p className="text-gray-400 text-base sm:text-lg">Aucun produit dans cette categorie.</p>
          </div>
        )}
      </div>
    </div>
  );
}
