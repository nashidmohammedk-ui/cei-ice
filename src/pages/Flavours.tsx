import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Filter, SlidersHorizontal, Wand2, Check, ShoppingBag, Eye, Volume2, ArrowDown, Award, Layers, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface FlavoursProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
  onQuickView: (product: Product) => void;
}

export const Flavours: React.FC<FlavoursProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView,
}) => {
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'rating' | 'price-asc' | 'price-desc'>('featured');
  const [showBespokeBuilder, setShowBespokeBuilder] = useState(false);

  // Couture Bar Introduction Animation State
  const [introBar, setIntroBar] = useState<'rose' | 'chuao' | 'gold'>('rose');
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [snapTriggered, setSnapTriggered] = useState(false);

  const playChocolateSnap = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const bufferSize = Math.floor(ctx.sampleRate * 0.08);
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1600, ctx.currentTime);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.7, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start();

      setSnapTriggered(true);
      setTimeout(() => setSnapTriggered(false), 900);
    } catch {
      // Audio fallback
    }
  };

  // Bespoke Dipping Bar Customizer state
  const [customBase, setCustomBase] = useState('Madagascar Bourbon Vanilla');
  const [customDip, setCustomDip] = useState('75% Dark Venezuelan Chuao');
  const [customToppings, setCustomToppings] = useState<string[]>([
    'Crystallised Damask Rose Petals',
    'Crushed Sicilian Bronte Pistachios'
  ]);
  const [customDrizzle, setCustomDrizzle] = useState('Ivory White Chocolate Velvet');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'all' || product.collection === selectedCategory;

      // Search match (name, tagline, notes, provenance)
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(query) ||
        product.frenchName.toLowerCase().includes(query) ||
        product.tagline.toLowerCase().includes(query) ||
        product.notes.top.toLowerCase().includes(query) ||
        product.notes.heart.toLowerCase().includes(query) ||
        product.notes.base.toLowerCase().includes(query) ||
        product.provenance.country.toLowerCase().includes(query);

      // Dietary match
      const matchesDietary =
        dietaryFilter === 'all' ||
        product.details.dietary.some((d) =>
          d.toLowerCase().includes(dietaryFilter.toLowerCase())
        );

      return matchesCategory && matchesSearch && matchesDietary;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return 0; // featured default
    });
  }, [selectedCategory, searchQuery, dietaryFilter, sortBy]);

  const activeCategoryObj =
    CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  const handleToggleTopping = (top: string) => {
    if (customToppings.includes(top)) {
      setCustomToppings(customToppings.filter((t) => t !== top));
    } else {
      if (customToppings.length < 3) {
        setCustomToppings([...customToppings, top]);
      }
    }
  };

  const handleAddCustomBar = () => {
    const customBarProduct: Product = {
      id: `custom-bar-${Date.now()}`,
      name: `Bespoke Couture Bar (${customBase.split(' ')[0]})`,
      frenchName: 'Bâtonnet Sur Mesure Atelier Dipping Salon',
      collection: 'bespoke-petals' as any,
      collectionTitle: 'Bespoke Couture Creation',
      tagline: `${customDip} dipped with ${customToppings.join(' & ')} and ${customDrizzle} on CEI birchwood stick.`,
      price: 490,
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Bespoke Atelier Creation',
      image: '/images/cei-rose-pistachio-bar.jpg',
      secondaryImage: '/images/cei-rose-pistachio-macro.jpg',
      notes: {
        top: customToppings.join(', '),
        heart: `${customDip}, ${customDrizzle}`,
        base: customBase
      },
      provenance: {
        region: 'CEI Fort Kochi Atelier Dipping Bar',
        country: 'Kerala, India',
        source: 'Handcrafted to order'
      },
      details: {
        description: `Custom formulated haute couture ice cream bar on laser-engraved birchwood stick. Hand-dipped in warm ${customDip}, garnished with ${customToppings.join(', ')} and crowned with ${customDrizzle} and white chocolate CEI seal.`,
        tastingRitual: 'Enjoy immediately in its gold foil presentation tray.',
        sommelierPairing: 'Artisan sparkling tea or Brut Champagne.',
        overrun: '11% micro-density',
        dietary: ['Vegetarian', 'Gluten-Free'],
        allergens: ['Milk'],
        nutrition: {
          servingSize: '95ml (1 Bar)',
          calories: 295,
          fat: '19g',
          sugars: '22g',
          protein: '4.6g'
        }
      }
    };

    addToCart(customBarProduct, 1, 'single-pint');
    setShowBespokeBuilder(false);
  };

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24 min-h-screen">
      {/* ========================================================
          1. COUTURE BAR INTRODUCTION SECTION (Minimal & Clean)
         ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-6 pb-20 border-b border-white/10 bg-[#121110]">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-white/15 bg-white/5 mb-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-medium font-sans">
                Collection Introduction • L'Atelier Bâtonnet
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F5F2EB] mb-3">
              The Architecture of Haute Glacerie
            </h1>

            <p className="font-serif text-sm sm:text-lg text-white/70 max-w-2xl mx-auto font-light italic leading-relaxed">
              Every CEI bar is hand-dipped in grand cru single-origin chocolate with sub-15% overrun slow-churned cream on laser-engraved birchwood sticks.
            </p>

            {/* Signature Bar Switcher Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
              {[
                { id: 'rose', label: '01 / Damask Rose & Pistachio', price: '₹450' },
                { id: 'chuao', label: '02 / Chuao Caramel Hazelnut', price: '₹380' },
                { id: 'gold', label: '03 / 24K Gold & Black Truffle', price: '₹750' }
              ].map((bar) => (
                <button
                  key={bar.id}
                  onClick={() => {
                    setIntroBar(bar.id as any);
                    setActiveHotspot(null);
                  }}
                  className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase transition-all duration-300 font-sans ${
                    introBar === bar.id
                      ? 'bg-[#C5A46D] text-[#121110] font-semibold'
                      : 'border border-white/15 bg-white/5 text-white/70 hover:text-white hover:border-white/30'
                  }`}
                >
                  <span>{bar.label}</span>
                  <span className="ml-1.5 opacity-80 text-[10px]">{bar.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Bar Showcase with Entrance Animation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-6">
            {/* Left Column: Interactive Anatomy Callouts */}
            <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
              <div
                onMouseEnter={() => setActiveHotspot(1)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  activeHotspot === 1
                    ? 'border-cei-gold bg-cei-gold/15 shadow-[0_0_25px_rgba(213,183,122,0.25)] translate-x-1'
                    : 'border-cei-gold/20 bg-cei-card/60 hover:border-cei-gold/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-cei-gold mb-1">
                  <span className="w-5 h-5 rounded-full border border-cei-gold flex items-center justify-center text-[10px] font-bold">1</span>
                  <span className="text-xs font-serif font-bold tracking-wider uppercase">1.8mm Grand Cru Shell</span>
                </div>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Tempered Ecuadorian 75% dark chocolate or pure ivory cocoa butter with zero palm oils for an acoustic, clean snap.
                </p>
              </div>

              <div
                onMouseEnter={() => setActiveHotspot(2)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  activeHotspot === 2
                    ? 'border-cei-gold bg-cei-gold/15 shadow-[0_0_25px_rgba(213,183,122,0.25)] translate-x-1'
                    : 'border-cei-gold/20 bg-cei-card/60 hover:border-cei-gold/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-cei-gold mb-1">
                  <span className="w-5 h-5 rounded-full border border-cei-gold flex items-center justify-center text-[10px] font-bold">2</span>
                  <span className="text-xs font-serif font-bold tracking-wider uppercase">Micro-Overrun Core</span>
                </div>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Sub-15% air overrun slow-churned in French copper pots with organic Jersey cream for an ultra-dense, lingering melt.
                </p>
              </div>
            </div>

            {/* Center Column: The Animated Floating Couture Bar */}
            <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2 py-4">
              {/* Concentric Golden Rotating Rings */}
              <div className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] rounded-full border border-cei-gold/20 animate-[spin_55s_linear_infinite] pointer-events-none" />
              <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] rounded-full border border-cei-gold/10 border-dashed pointer-events-none" />

              <motion.div
                key={introBar}
                initial={{ opacity: 0, scale: 0.85, y: 50, rotate: -3 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: [-10, 10, -10],
                  rotate: [-1, 1, -1]
                }}
                transition={{
                  opacity: { duration: 0.8 },
                  scale: { duration: 0.8 },
                  y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="relative cursor-pointer select-none group"
                onClick={playChocolateSnap}
              >
                {/* Free Floating Seamless Image */}
                <div className="relative overflow-visible [mask-image:radial-gradient(ellipse_at_center,black_75%,transparent_100%)]">
                  <img
                    src={
                      introBar === 'rose'
                        ? '/images/cei-rose-pistachio-bar.jpg'
                        : introBar === 'chuao'
                        ? '/images/hero-ice-cream-bar.jpg'
                        : '/images/cei-gold-truffle-bar.jpg'
                    }
                    alt="CEI Couture Stick Bar"
                    className="w-[300px] sm:w-[380px] lg:w-[420px] max-h-[500px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Snap Ripple Visual Effect */}
                {snapTriggered && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 1.4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 border-2 border-cei-gold rounded-full pointer-events-none shadow-[0_0_30px_#D5B77A]"
                  />
                )}
              </motion.div>

              {/* Interactive Acoustic Snap Tester Button */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={playChocolateSnap}
                  className="px-5 py-2.5 rounded-full border border-cei-gold/60 bg-cei-surface/80 text-cei-gold hover:bg-cei-gold hover:text-cei-dark text-xs tracking-wider uppercase font-medium transition-all shadow-xl flex items-center space-x-2"
                >
                  <Volume2 className="w-4 h-4 text-cei-gold animate-bounce" />
                  <span>{snapTriggered ? '⚡ Acoustic Crack!' : 'Hear Acoustic Chocolate Snap'}</span>
                </button>

                <button
                  onClick={() => {
                    const productMap: Record<string, string> = {
                      rose: 'cei-bar-rose-pistachio',
                      chuao: 'cei-bar-chuao-caramel',
                      gold: 'cei-bar-gold-truffle'
                    };
                    const targetProduct = PRODUCTS.find((p) => p.id === productMap[introBar]) || PRODUCTS[0];
                    addToCart(targetProduct, 1, 'single-pint');
                  }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark text-xs tracking-wider font-bold uppercase shadow-xl hover:brightness-110 flex items-center space-x-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add This Bar to Box</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hotspots 3 & 4 */}
            <div className="lg:col-span-3 space-y-4 order-3">
              <div
                onMouseEnter={() => setActiveHotspot(3)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  activeHotspot === 3
                    ? 'border-cei-gold bg-cei-gold/15 shadow-[0_0_25px_rgba(213,183,122,0.25)] -translate-x-1'
                    : 'border-cei-gold/20 bg-cei-card/60 hover:border-cei-gold/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-cei-gold mb-1">
                  <span className="w-5 h-5 rounded-full border border-cei-gold flex items-center justify-center text-[10px] font-bold">3</span>
                  <span className="text-xs font-serif font-bold tracking-wider uppercase">Artisanal Terroir Garnish</span>
                </div>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Crystallised Persian Damask rose petals, sea-salt roasted Langhe hazelnuts, and Sicilian Bronte pistachios.
                </p>
              </div>

              <div
                onMouseEnter={() => setActiveHotspot(4)}
                onMouseLeave={() => setActiveHotspot(null)}
                className={`p-4 rounded-sm border transition-all cursor-pointer ${
                  activeHotspot === 4
                    ? 'border-cei-gold bg-cei-gold/15 shadow-[0_0_25px_rgba(213,183,122,0.25)] -translate-x-1'
                    : 'border-cei-gold/20 bg-cei-card/60 hover:border-cei-gold/40'
                }`}
              >
                <div className="flex items-center space-x-2 text-cei-gold mb-1">
                  <span className="w-5 h-5 rounded-full border border-cei-gold flex items-center justify-center text-[10px] font-bold">4</span>
                  <span className="text-xs font-serif font-bold tracking-wider uppercase">FSC Birchwood Stick</span>
                </div>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Scandinavian smooth birchwood laser-etched with the Maison CEI monogram. Non-conductive and tactile.
                </p>
              </div>

              {/* Bespoke Salon Dipping Trigger */}
              <button
                onClick={() => setShowBespokeBuilder(!showBespokeBuilder)}
                className="w-full p-4 rounded-sm border border-cei-gold/40 bg-cei-surface/50 text-cei-gold hover:bg-cei-gold hover:text-cei-dark text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 shadow-lg font-medium"
              >
                <Wand2 className="w-4 h-4" />
                <span>{showBespokeBuilder ? 'Close Dipping Salon' : 'Design Dipped Bar'}</span>
              </button>
            </div>
          </div>

          {/* Smooth Scroll Arrow to Full Flavour Grid */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                const el = document.getElementById('flavours-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 text-xs tracking-[0.25em] uppercase text-cei-gold/80 hover:text-cei-gold transition-colors font-sans"
            >
              <span>Explore All 12 Signature Flavours Below</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Anchor for catalogue grid */}
      <div id="flavours-catalog" />

      {/* Interactive Bespoke Dipping Salon Bar Builder */}
      {showBespokeBuilder && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
          <div className="p-8 rounded-sm bg-gradient-to-br from-cei-surface via-cei-card to-cei-surface border border-cei-gold/40 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cei-gold/20 pb-4">
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-light block mb-0.5">
                  Private Salon Experience
                </span>
                <h3 className="font-serif text-2xl font-medium text-cei-cream">
                  Atelier Bespoke Dipping Counter
                </h3>
              </div>
              <span className="text-xs text-cei-gold/80 italic font-serif mt-1 sm:mt-0">
                Formulated fresh in our cryogenic kitchen
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-light">
              {/* Step 1: Base Gelato */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-semibold block">
                  1. Gelato Core
                </span>
                {[
                  'Madagascar Bourbon Vanilla',
                  'Sicilian Bronte Pistachio',
                  'Chuao 78% Dark Ganache',
                  'Alphonso Mango Nectar'
                ].map((base) => (
                  <button
                    key={base}
                    type="button"
                    onClick={() => setCustomBase(base)}
                    className={`w-full p-2.5 rounded-sm border text-left transition-all ${
                      customBase === base
                        ? 'border-cei-gold bg-cei-gold/15 text-cei-gold font-medium'
                        : 'border-cei-gold/15 bg-cei-dark/60 text-cei-cream/70 hover:border-cei-gold/30'
                    }`}
                  >
                    {base}
                  </button>
                ))}
              </div>

              {/* Step 2: Dipping Shell */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-semibold block">
                  2. Chocolate Dip
                </span>
                {[
                  '75% Dark Venezuelan Chuao',
                  'Pure Ivory White Cocoa Butter',
                  'Golden Salted Caramel Dip',
                  'Matcha Green Tea Chocolate'
                ].map((dip) => (
                  <button
                    key={dip}
                    type="button"
                    onClick={() => setCustomDip(dip)}
                    className={`w-full p-2.5 rounded-sm border text-left transition-all ${
                      customDip === dip
                        ? 'border-cei-gold bg-cei-gold/15 text-cei-gold font-medium'
                        : 'border-cei-gold/15 bg-cei-dark/60 text-cei-cream/70 hover:border-cei-gold/30'
                    }`}
                  >
                    {dip}
                  </button>
                ))}
              </div>

              {/* Step 3: Artisan Toppings */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-semibold block">
                  3. Toppings (Select up to 3)
                </span>
                {[
                  'Crystallised Damask Rose Petals',
                  'Crushed Sicilian Bronte Pistachios',
                  'Roasted Caramelized Hazelnuts',
                  'Dark Brownie Cookie Crumble',
                  '24K Edible Gold Flakes',
                  'Caramelized Macadamia Shards'
                ].map((top) => {
                  const isChecked = customToppings.includes(top);
                  return (
                    <button
                      key={top}
                      type="button"
                      onClick={() => handleToggleTopping(top)}
                      className={`w-full p-2.5 rounded-sm border text-left transition-all flex items-center justify-between ${
                        isChecked
                          ? 'border-cei-gold bg-cei-gold/15 text-cei-gold font-medium'
                          : 'border-cei-gold/15 bg-cei-dark/60 text-cei-cream/70 hover:border-cei-gold/30'
                      }`}
                    >
                      <span className="line-clamp-1">{top}</span>
                      {isChecked && <Check className="w-3.5 h-3.5 text-cei-gold shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>

              {/* Step 4: Drizzle & Crown */}
              <div className="space-y-2">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-semibold block">
                  4. Drizzle & Seal
                </span>
                {[
                  'Ivory White Chocolate Velvet',
                  'Sicilian Pistachio Cream Drizzle',
                  'Salted Brittany Caramel Ribbons',
                  'Ruby Wild Berry Reduction'
                ].map((drizzle) => (
                  <button
                    key={drizzle}
                    type="button"
                    onClick={() => setCustomDrizzle(drizzle)}
                    className={`w-full p-2.5 rounded-sm border text-left transition-all ${
                      customDrizzle === drizzle
                        ? 'border-cei-gold bg-cei-gold/15 text-cei-gold font-medium'
                        : 'border-cei-gold/15 bg-cei-dark/60 text-cei-cream/70 hover:border-cei-gold/30'
                    }`}
                  >
                    {drizzle}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Bar Preview & Order Action */}
            <div className="pt-6 border-t border-cei-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-xs">
                <img
                  src="/images/cei-rose-pistachio-bar.jpg"
                  alt="Custom Bar Preview"
                  className="w-14 h-14 object-cover rounded-sm border border-cei-gold/30"
                />
                <div>
                  <span className="text-[10px] text-cei-gold uppercase tracking-wider block font-semibold">
                    Your Bespoke Bar
                  </span>
                  <p className="font-serif text-sm text-cei-cream font-medium">
                    {customDip} with {customToppings.join(', ')}
                  </p>
                  <span className="text-[10px] text-cei-cream/60">
                    Crowned with CEI white chocolate medallion seal
                  </span>
                </div>
              </div>

              <button
                onClick={handleAddCustomBar}
                className="w-full sm:w-auto px-8 py-3 bg-[#C5A46D] text-[#121110] font-sans text-xs tracking-widest font-semibold uppercase rounded-sm shadow-lg hover:brightness-110 flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Craft & Add To Case • ₹490</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 gap-2 border-b border-white/10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2 text-xs tracking-[0.15em] uppercase font-sans rounded-sm transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C5A46D] text-[#121110] font-semibold'
                    : 'bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-white/25'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Search, Dietary & Sorting Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 p-4 rounded-sm bg-cei-surface/40 border border-cei-gold/15">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-cei-gold/70 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search: rose, pistachio, hazelnut, gold, truffle..."
              className="w-full bg-cei-dark border border-cei-gold/25 pl-9 pr-4 py-2 text-xs text-cei-cream placeholder:text-cei-cream/40 focus:outline-none focus:border-cei-gold rounded-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            {/* Dietary Filter */}
            <div className="flex items-center space-x-1.5 text-xs text-cei-cream/70 font-light">
              <Filter className="w-3.5 h-3.5 text-cei-gold" />
              <span>Dietary:</span>
              <select
                value={dietaryFilter}
                onChange={(e) => setDietaryFilter(e.target.value)}
                className="bg-cei-dark border border-cei-gold/25 text-cei-cream text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-cei-gold"
              >
                <option value="all">All Diets</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="gluten-free">Gluten-Free</option>
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center space-x-1.5 text-xs text-cei-cream/70 font-light">
              <SlidersHorizontal className="w-3.5 h-3.5 text-cei-gold" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-cei-dark border border-cei-gold/25 text-cei-cream text-xs px-2.5 py-1.5 rounded-sm focus:outline-none focus:border-cei-gold"
              >
                <option value="featured">Featured Curations</option>
                <option value="rating">Highest Rated</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-cei-cream/50 tracking-wider uppercase font-light mt-4 mb-8">
          Showing {filteredProducts.length} of {PRODUCTS.length} Handcrafted Couture Bars
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 space-y-4">
            <h3 className="font-serif text-2xl text-cei-cream">No Bar Flavours Match Your Criteria</h3>
            <p className="text-xs text-cei-cream/50">Try clearing search terms or resetting dietary filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                onSelectCategory('all');
              }}
              className="px-6 py-2 border border-cei-gold text-cei-gold text-xs uppercase tracking-widest rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
