import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, ThermometerSnowflake, Sparkles, Send } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onFilterCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onFilterCategory }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currency, setCurrency] = useState('INR (₹)');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  const handleCategoryClick = (catId: string) => {
    onNavigate('flavours');
    if (onFilterCategory) {
      onFilterCategory(catId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cei-dark border-t border-cei-gold/20 pt-20 pb-12 relative overflow-hidden text-cei-cream/80">
      {/* Decorative Gold Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-cei-gold/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Feature Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 border-b border-cei-gold/15">
          <div className="flex items-center space-x-4 p-4 rounded-sm bg-cei-surface/40 border border-cei-gold/10">
            <div className="w-12 h-12 rounded-full border border-cei-gold/30 flex items-center justify-center text-cei-gold bg-cei-dark/60 shrink-0">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-cei-cream uppercase font-medium">
                -78.5°C Cryo-Lock Delivery
              </h4>
              <p className="text-xs text-cei-cream/60 font-light mt-0.5">
                Packed with solid carbon dioxide for 48-hour frozen arrival.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-sm bg-cei-surface/40 border border-cei-gold/10">
            <div className="w-12 h-12 rounded-full border border-cei-gold/30 flex items-center justify-center text-cei-gold bg-cei-dark/60 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-cei-cream uppercase font-medium">
                Sub-15% Air Overrun
              </h4>
              <p className="text-xs text-cei-cream/60 font-light mt-0.5">
                Pure dense cream, never inflated with commercial air pumps.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-sm bg-cei-surface/40 border border-cei-gold/10">
            <div className="w-12 h-12 rounded-full border border-cei-gold/30 flex items-center justify-center text-cei-gold bg-cei-dark/60 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-cei-cream uppercase font-medium">
                Direct Terroir Sourcing
              </h4>
              <p className="text-xs text-cei-cream/60 font-light mt-0.5">
                Zero artificial emulsifiers, synthetic gums or corn starches.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-cei-gold/15">
          {/* Brand Manifesto & Emblem */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-cei-gold flex items-center justify-center bg-cei-dark">
                <span className="font-display text-base font-bold tracking-widest text-cei-gold pl-0.5">
                  CEI
                </span>
              </div>
              <div>
                <span className="font-display text-xl tracking-[0.2em] font-bold text-cei-cream block">
                  CEI
                </span>
                <span className="text-[10px] tracking-[0.3em] text-cei-gold uppercase block -mt-1 font-light">
                  Haute Glacerie Internationale
                </span>
              </div>
            </div>

            <p className="font-serif text-sm text-cei-cream/70 italic leading-relaxed pr-6">
              "A new adventure in every bite. Where ancient botanical terroir meets the obsessive precision of micro-batch cold gastronomy."
            </p>

            <div className="pt-2 text-xs text-cei-cream/60">
              <span className="text-cei-gold font-medium">Flagship Atelier:</span> 14/128 Parade Ground, Vasco Da Gama Square, Fort Kochi, Kerala 682001, India
            </div>

            {/* Currency Selector */}
            <div className="pt-2 flex items-center space-x-2 text-xs">
              <span className="text-cei-cream/50 uppercase tracking-widest text-[10px]">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-cei-surface border border-cei-gold/30 rounded-sm text-cei-cream text-xs px-2.5 py-1 focus:outline-none focus:border-cei-gold"
              >
                <option value="INR (₹)">INR (₹) — India</option>
                <option value="USD ($)">USD ($) — United States</option>
                <option value="EUR (€)">EUR (€) — European Union</option>
                <option value="GBP (£)">GBP (£) — United Kingdom</option>
                <option value="AED (د.إ)">AED (د.إ) — UAE</option>
              </select>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h5 className="font-serif text-sm tracking-[0.25em] text-cei-gold uppercase font-semibold mb-2">
              Maison
            </h5>
            <button
              onClick={() => onNavigate('home')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Our Story & Philosophy
            </button>
            <button
              onClick={() => onNavigate('flavours')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              All Flavours
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Our Experience & Gallery
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Shop Collection
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Contact & Boutiques
            </button>
          </div>

          {/* Flavours Collections */}
          <div className="lg:col-span-2 flex flex-col space-y-3">
            <h5 className="font-serif text-sm tracking-[0.25em] text-cei-gold uppercase font-semibold mb-2">
              Collections
            </h5>
            <button
              onClick={() => handleCategoryClick('chocolate')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Grand Cru Chocolate
            </button>
            <button
              onClick={() => handleCategoryClick('vanilla')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Rare Vanilla Orchids
            </button>
            <button
              onClick={() => handleCategoryClick('pistachio')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Etna Bronte Pistachio
            </button>
            <button
              onClick={() => handleCategoryClick('fruit')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Tropical Fruit Sorbets
            </button>
            <button
              onClick={() => handleCategoryClick('special-editions')}
              className="text-left text-xs tracking-wider text-cei-cream/70 hover:text-cei-gold transition-colors py-1"
            >
              Gastronomic Specials
            </button>
          </div>

          {/* Newsletter / Salon Tasting Club */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h5 className="font-serif text-sm tracking-[0.25em] text-cei-gold uppercase font-semibold">
              The Tasting Salon
            </h5>
            <p className="text-xs text-cei-cream/70 leading-relaxed font-light">
              Receive private invitations to confidential micro-batch releases, secret seasonal drops, and master gelatiere tastings.
            </p>

            {isSubscribed ? (
              <div className="p-4 rounded-sm bg-cei-surface border border-cei-gold/40 flex items-center space-x-3 text-cei-gold">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-serif italic tracking-wider">
                  You are now enrolled in the CEI Connoisseur Registry. Your welcome code is CEI10.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2.5">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your private email..."
                    className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 text-xs text-cei-cream placeholder:text-cei-cream/35 focus:outline-none focus:border-cei-gold rounded-l-sm"
                  />
                  <button
                    type="submit"
                    className="px-5 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 transition-all font-semibold rounded-r-sm flex items-center justify-center shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-cei-cream/40 tracking-wider">
                  Discreet communications only. No marketing clutter.
                </span>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-5 text-xs tracking-widest text-cei-cream/60">
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); onNavigate('experience'); }}
                className="hover:text-cei-gold transition-colors flex items-center space-x-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-cei-gold" />
              </a>
              <a
                href="#pinterest"
                onClick={(e) => { e.preventDefault(); onNavigate('experience'); }}
                className="hover:text-cei-gold transition-colors flex items-center space-x-1"
              >
                <span>Pinterest</span>
                <ArrowUpRight className="w-3 h-3 text-cei-gold" />
              </a>
              <a
                href="#journal"
                onClick={(e) => { e.preventDefault(); onNavigate('story'); }}
                className="hover:text-cei-gold transition-colors flex items-center space-x-1"
              >
                <span>Atelier Journal</span>
                <ArrowUpRight className="w-3 h-3 text-cei-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-cei-cream/40 font-light tracking-wider space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} CEI Haute Glacerie S.A. All rights reserved. Worldwide protected trademark.
          </div>
          <div className="flex items-center space-x-6">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Cold-Chain Terms</span>
            <span>•</span>
            <span>Botanical Transparency</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
