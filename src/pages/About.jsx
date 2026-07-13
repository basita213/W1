import { Heart, Users, Award, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '13K+', label: 'Abonnes Instagram' },
  { icon: Award, value: '186+', label: 'Publications' },
  { icon: Heart, value: '3,4K+', label: 'Favoris' },
  { icon: Star, value: '100%', label: 'Passion' },
];

const values = [
  { title: 'Style Unique', desc: 'Nous selectionnons chaque piece avec soin pour vous offrir des looks uniques et tendance, a la pointe de la mode.', emoji: '✨' },
  { title: 'Qualite Premium', desc: 'Des matieres soigneusement choisies pour vous garantir confort et durabilite au quotidien.', emoji: '💎' },
  { title: 'Prix Accessibles', desc: 'La mode ne doit pas etre un luxe. Nous proposons des prix justes pour tous.', emoji: '💝' },
  { title: 'Service Personnalise', desc: 'Notre equipe est toujours disponible pour vous conseiller et vous accompagner dans vos choix.', emoji: '🤗' },
];

export default function About() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="py-16 sm:py-24 bg-gradient-to-br from-brand-50 via-white to-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Notre Histoire</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-5 sm:mb-6">
                La Mode a <span className="text-brand italic">Oran</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                Moda Via est ne d'une passion pour la mode et le style. Depuis Oran, nous offrons aux femmes et aux enfants d'Algerie une selection unique de vetements, chaussures et accessoires qui subliment la beaute au quotidien.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
                Notre boutique Instagram est devenue une truefere reference pour celles qui cherchent du style, de la qualite et des prix accessibles. Chaque jour, nous parcourons les dernieres tendances pour vous apporter le meilleur.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Que ce soit pour une robe d'ete, des chaussures elegantes ou des petits tenues pour vos enfants, Moda Via est la pour vous accompagner avec passion et devouement.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-200 to-brand-400 rounded-3xl rotate-3 opacity-30" />
                <div className="relative bg-gradient-to-br from-brand-300 to-brand-500 rounded-3xl p-8 sm:p-12 flex items-center justify-center shadow-2xl shadow-brand/20 aspect-square">
                  <img src="/logo.webp" alt="Moda Via" className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-brand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center text-white">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <s.icon size={22} className="sm:w-7 sm:h-7" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-1 sm:mb-2">{s.value}</p>
                <p className="text-white/70 text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Nos Valeurs</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4">Ce Qui Nous Definit</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center hover:bg-brand-50 transition-colors duration-300 group">
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block group-hover:scale-110 transition-transform">{v.emoji}</span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-brand transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Mission</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-6 sm:mb-8">
            Rendre la Mode Accessible a Toutes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Chez Moda Via, nous croyons que chaque femme merite de se sentir belle et confiante.
            Notre mission est de vous offrir des vetements de qualite, suivant les dernieres tendances,
            a des prix qui ne vident pas votre portefeuille. Bienvenue dans votre boutique de confiance a Oran.
          </p>
        </div>
      </section>
    </div>
  );
}
