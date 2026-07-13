import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 bg-brand/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 bg-brand/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-brand/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span>Nouvelle Collection 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-heading text-gray-900 leading-[1.1] mb-5 sm:mb-6">
            Style & <br />
            <span className="text-brand italic">Elegance</span> <br />
            a Oran
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Decouvrez notre collection unique de vetements, chaussures et accessoires pour femmes et enfants. La mode au quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Link
              to="/boutique"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/30 hover:-translate-y-0.5"
            >
              Voir la Collection
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand text-brand px-7 py-3.5 sm:px-8 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-brand hover:text-white transition-all duration-300"
            >
              Notre Histoire
            </Link>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-200 to-brand-400 rounded-3xl rotate-3 sm:rotate-6 opacity-30" />
            <div className="relative bg-gradient-to-br from-brand-300 to-brand-500 rounded-3xl overflow-hidden shadow-2xl shadow-brand/20 aspect-square flex items-center justify-center">
              <img src="/logo.webp" alt="Moda Via" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 to-transparent p-5 sm:p-8">
                <p className="text-white/90 text-xs sm:text-sm font-medium tracking-wider uppercase">Boutique de Mode</p>
                <p className="text-white text-xl sm:text-2xl font-heading font-bold">Moda Via</p>
                <p className="text-white/70 text-xs sm:text-sm">Oran, Algerie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
