import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/Icons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoye ! Nous vous repondrons tres bientot.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-brand text-xs sm:text-sm font-medium tracking-widest uppercase">Contact</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mt-2 sm:mt-3 mb-3 sm:mb-4">Parlons Mode</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Une question, une suggestion ou besoin d'un conseil ? Nous sommes la pour vous.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-brand sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Adresse</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Oran, Algerie</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-brand sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Telephone</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">+213 XX XX XX XX</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-brand sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">moda_via_oran@email.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-50 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-brand sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 mb-0.5 sm:mb-1 text-sm sm:text-base">Horaires</h3>
                  <p className="text-gray-500 text-xs sm:text-sm">Sam - Jeu: 9h00 - 21h00</p>
                  <p className="text-gray-500 text-xs sm:text-sm">Ven: Ferme</p>
                </div>
              </div>
            </div>

            <div className="bg-brand rounded-2xl p-5 sm:p-6">
              <h3 className="font-heading font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Suivez-nous</h3>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/moda_via_oran/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors">
                  <Instagram size={20} className="text-white sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-colors">
                  <MessageCircle size={20} className="text-white sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm">
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 mb-5 sm:mb-6">Envoyez-nous un message</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Nom</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                    placeholder="Votre email"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 sm:mb-4">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Sujet</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                  placeholder="Sujet du message"
                  required
                />
              </div>
              <div className="mb-5 sm:mb-6">
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all resize-none text-sm"
                  placeholder="Votre message..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-brand-dark transition-all duration-300 hover:shadow-lg hover:shadow-brand/30"
              >
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
