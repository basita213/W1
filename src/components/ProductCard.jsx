import { Heart, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
          <span className="text-5xl sm:text-6xl font-heading font-bold text-brand/20">{product.name.charAt(0)}</span>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 flex flex-col gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand hover:text-white transition-colors text-gray-600">
            <Heart size={14} />
          </button>
          <button className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-brand hover:text-white transition-colors text-gray-600">
            <ShoppingBag size={14} />
          </button>
        </div>
        {product.badge && (
          <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-brand text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-3 sm:p-4 lg:p-5 flex flex-col flex-1">
        <p className="text-[10px] sm:text-xs text-brand font-medium tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2 group-hover:text-brand transition-colors line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2 mt-auto">
          <span className="text-base sm:text-lg lg:text-xl font-bold text-brand">{product.price} DA</span>
          {product.oldPrice && (
            <span className="text-xs sm:text-sm text-gray-400 line-through">{product.oldPrice} DA</span>
          )}
        </div>
      </div>
    </div>
  );
}
