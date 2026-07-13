import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CategoryCard({ category }) {
  return (
    <Link to="/boutique" className="group relative block overflow-hidden rounded-2xl aspect-[3/4] sm:aspect-[4/5]">
      <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-transform duration-700 group-hover:scale-110`} />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6">
        <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110">{category.emoji}</span>
        <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-1 sm:mb-2">{category.name}</h3>
        <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">{category.count} articles</p>
        <span className="inline-flex items-center gap-1 text-white text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Decouvrir <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
