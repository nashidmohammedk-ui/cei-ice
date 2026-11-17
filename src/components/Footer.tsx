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
    <footer className="bg-[#100F0E] border-t border-white/10 pt-20 pb-12 relative text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Badges Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/10">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-[#C5A46D] bg-white/5 shrink-0">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-[#F5F2EB] uppercase font-medium">
                -78.5°C Cryo-Lock Freight
              </h4>
              <p className="text-xs text-white/50 font-light mt-1 leading-relaxed">
                Shipped in solid carbon dioxide cases. Guaranteed -18°C arrival across Kerala & India.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-[#C5A46D] bg-white/5 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-[#F5F2EB] uppercase font-medium">
                Sub-15% Air Overrun
              </h4>
              <p className="text-xs text-white/50 font-light mt-1 leading-relaxed">
                Pure dense cream from Kerala hill pastures, never inflated with commercial air pumps.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-sm border border-white/15 flex items-center justify-center text-[#C5A46D] bg-white/5 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-serif text-sm tracking-widest text-[#F5F2EB] uppercase font-medium">
                Single-Origin Botanicals
              </h4>
              <p className="text-xs text-white/50 font-light mt-1 leading-relaxed">
                Zero artificial emulsifiers, synthetic gums or corn starches. Direct terroir sourcing.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-white/10">
          {/* Brand Manifesto & Emblem */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div>
              <span className="font-serif text-2xl font-semibold tracking-[0.2em] text-[#F5F2EB] block">
                CĒI
              </span>
              <span className="text-[9px] tracking-[0.3em] text-[#C5A46D] uppercase block font-sans font-light">
                Haute Glacerie • Kerala, India
              </span>
            </div>

            <p className="font-serif text-sm text-white/60 italic leading-relaxed pr-6">
              "Where ancient Malabar botanical terroir meets the obsessive precision of micro-batch cold gastronomy."
            </p>

            <div className="pt-2 text-xs text-white/50">
              <span className="text-[#C5A46D] font-medium">Flagship Atelier:</span> 14/128 Parade Ground, Vasco Da Gama Square, Fort Kochi, Kerala 682001, India
            </div>

            {/* Currency Selector */}
            <div className="pt-2 flex items-center space-x-2 text-xs">
              <span className="text-white/40 uppercase tracking-widest text-[10px]">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-[#1A1918] border border-white/15 rounded-sm text-white/80 text-xs px-2.5 py-1 focus:outline-none focus:border-[#C5A46D]"
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
          <div className="lg:col-span-2 flex flex-col space-y-2.5">
            <h5 className="font-serif text-xs tracking-[0.25em] text-[#C5A46D] uppercase font-semibold mb-2">
              Maison
            </h5>
            <button
              onClick={() => onNavigate('home')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Our Story & Philosophy
            </button>
            <button
              onClick={() => onNavigate('flavours')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              All Flavours
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Our Experience & Gallery
            </button>
            <button
              onClick={() => onNavigate('shop')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Shop Collections
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Contact & Boutiques
            </button>
          </div>

          {/* Flavours Collections */}
          <div className="lg:col-span-2 flex flex-col space-y-2.5">
            <h5 className="font-serif text-xs tracking-[0.25em] text-[#C5A46D] uppercase font-semibold mb-2">
              Collections
            </h5>
            <button
              onClick={() => handleCategoryClick('crunch-nuts')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Roasted Nut Shells
            </button>
            <button
              onClick={() => handleCategoryClick('botanical-fruit')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Botanicals & Fruits
            </button>
            <button
              onClick={() => handleCategoryClick('bespoke-petals')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Petals & Drizzles
            </button>
            <button
              onClick={() => handleCategoryClick('gold-reserve')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              24K Gold Reserve
            </button>
            <button
              onClick={() => handleCategoryClick('special-editions')}
              className="text-left text-xs tracking-wider text-white/60 hover:text-[#C5A46D] transition-colors py-0.5"
            >
              Gastronomic Specials
            </button>
          </div>

          {/* Newsletter / Salon Tasting Club */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <h5 className="font-serif text-xs tracking-[0.25em] text-[#C5A46D] uppercase font-semibold">
              The Tasting Salon
            </h5>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Receive private invitations to confidential micro-batch releases, seasonal drops, and master tastings.
            </p>

            {isSubscribed ? (
              <div className="p-3.5 rounded-sm bg-white/5 border border-white/20 flex items-center space-x-2.5 text-[#C5A46D]">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs font-serif italic tracking-wider">
                  You are now enrolled in the CEI Connoisseur Registry. Your welcome code is CEI10.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full bg-[#1A1918] border border-white/15 px-3.5 py-2 text-xs text-white/90 placeholder:text-white/30 focus:outline-none focus:border-[#C5A46D] rounded-l-sm"
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#C5A46D] text-[#121110] hover:brightness-110 transition-all font-semibold rounded-r-sm flex items-center justify-center shrink-0"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-white/35 tracking-wider">
                  Discreet communications only. No spam.
                </span>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-2 flex items-center space-x-5 text-xs tracking-wider text-white/50">
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); onNavigate('experience'); }}
                className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1"
              >
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-[#C5A46D]" />
              </a>
              <a
                href="#journal"
                onClick={(e) => { e.preventDefault(); onNavigate('story'); }}
                className="hover:text-[#C5A46D] transition-colors flex items-center space-x-1"
              >
                <span>Atelier Journal</span>
                <ArrowUpRight className="w-3 h-3 text-[#C5A46D]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 font-light tracking-wider space-y-4 sm:space-y-0">
          <div>
            © {new Date().getFullYear()} CEI Haute Glacerie. All rights reserved. Fort Kochi, Kerala, India.
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
