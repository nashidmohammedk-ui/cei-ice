import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Film,
  ShoppingBag,
  Star,
  ShieldCheck,
  ThermometerSnowflake,
  Award,
  Sparkles,
  Wand2,
  Check,
  MapPin
} from 'lucide-react';
import { PRODUCTS, TASTING_FLIGHTS, BOUTIQUES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { TastingVideoModal } from '../components/TastingVideoModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface HomeProps {
  onNavigate: (page: string) => void;
  onFilterCategory?: (categoryId: string) => void;
  onQuickView?: (product: Product) => void;
}

// 4 Signature Luxury Couture Bars for the Hero Carousel
const LUXURY_HERO_BARS = [
  {
    id: 'chuao',
    productId: 'cei-bar-chuao-caramel',
    name: 'Chuao Dark Chocolate & Salted Caramel Bar',
    subtitle: '78% Single-Origin Venezuelan Criollo & Slow-Roasted Hazelnuts',
    number: '01 / 04',
    image: '/images/hero-ice-cream-bar.jpg',
    provenance: 'Chuao Valley, Venezuela & Langhe Hills, Italy',
    notes: '78% Criollo Dark Chocolate, Fleur de Sel Caramel, Tahitensis Vanilla'
  },
  {
    id: 'rose',
    productId: 'cei-bar-rose-pistachio',
    name: 'Damask Rose & Bronte Pistachio Couture Bar',
    subtitle: 'Crystallised Damask Rose Petals, Sicilian Pistachios & White Chocolate Seal',
    number: '02 / 04',
    image: '/images/cei-rose-pistachio-bar.jpg',
    provenance: 'Kashan, Iran & Mount Etna, Sicily',
    notes: 'Damask Rose Petals, DOP Bronte Pistachio, Ivory White Chocolate'
  },
  {
    id: 'vanilla',
    productId: 'cei-bar-white-macadamia',
    name: 'Tahitian Vanilla & Macadamia Crunch Bar',
    subtitle: 'Wayanad Orchid Caviar & Golden Roasted Macadamias',
    number: '03 / 04',
    image: '/images/cei-white-chocolate-macadamia.jpg',
    provenance: 'Wayanad, Kerala & Queensland, Australia',
    notes: 'Ivory Cocoa Butter, Orchid Vanilla Bean, Roasted Macadamia'
  },
  {
    id: 'gold',
    productId: 'cei-bar-gold-truffle',
    name: '24K Gold Leaf & Belgian Dark Truffle Bar',
    subtitle: 'Hand-Adorned 24K Edible Gold Leaf & Grand Cru Truffle Ganache',
    number: '04 / 04',
    image: '/images/cei-gold-truffle-bar.jpg',
    provenance: 'Brussels, Belgium & Florence, Italy',
    notes: '24K Edible Gold, 80% Belgian Dark Chocolate, Fleur de Sel'
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onFilterCategory, onQuickView }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [heroIndex, setHeroIndex] = useState(0);
  const activeBar = LUXURY_HERO_BARS[heroIndex];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Hero section view mode: 'video' (Cinematic Film) or 'bar' (Handheld Couture Bar)
  const [heroView, setHeroView] = useState<'video' | 'bar'>('video');
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const [isHeroAudioPlaying, setIsHeroAudioPlaying] = useState(false);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);

  const toggleHeroPlay = () => {
    if (heroVideoRef.current) {
      if (isHeroVideoPlaying) {
        heroVideoRef.current.pause();
        setIsHeroVideoPlaying(false);
      } else {
        heroVideoRef.current.play();
        setIsHeroVideoPlaying(true);
      }
    } else {
      setIsHeroVideoPlaying(!isHeroVideoPlaying);
    }
  };

  const toggleHeroAudio = () => {
    const next = !isHeroAudioPlaying;
    setIsHeroAudioPlaying(next);
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !next;
    }
  };

  // Dipping ritual step (0 to 3)
  const [spotlightStep, setSpotlightStep] = useState(1);

  // Section: Bespoke Atelier customizer state
  const [customGelato, setCustomGelato] = useState('Tahitian Vanilla');
  const [customDip, setCustomDip] = useState('78% Chuao Dark');
  const [customTopping, setCustomTopping] = useState('Damask Rose Petals');
  const [isSurpriseActive, setIsSurpriseActive] = useState(false);

  const getCustomizerPhoto = () => {
    if (customTopping === 'Damask Rose Petals' || customTopping === 'Bronte Pistachios') {
      return '/images/cei-rose-pistachio-bar.jpg';
    }
    if (customTopping === '24K Gold Leaf Flakes') {
      return '/images/cei-gold-truffle-bar.jpg';
    }
    if (customDip === 'Ivory White Velvet' || customTopping === 'French Sablé Crumble') {
      return '/images/cei-white-chocolate-macadamia.jpg';
    }
    return '/images/hero-ice-cream-bar.jpg';
  };

  const gelatoOptions = [
    { name: 'Tahitian Vanilla', color: '#FBF8F1' },
    { name: 'Etna Pistachio', color: '#B5C99A' },
    { name: 'Wild Strawberry', color: '#F5A3B7' },
    { name: 'Alphonso Mango', color: '#FFBF00' },
    { name: 'Chuao Chocolate', color: '#523428' }
  ];

  const dipOptions = ['78% Chuao Dark', 'Silky Milk Chocolate', 'Ivory White Velvet'];
  const toppingOptions = [
    'Damask Rose Petals',
    'Roasted Hazelnuts',
    'Bronte Pistachios',
    '24K Gold Leaf Flakes',
    'French Sablé Crumble',
    'Breton Caramel Shards'
  ];

  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % LUXURY_HERO_BARS.length);
  };

  const handlePrevHero = () => {
    setHeroIndex((prev) => (prev - 1 + LUXURY_HERO_BARS.length) % LUXURY_HERO_BARS.length);
  };

  const handleSurpriseMe = () => {
    setIsSurpriseActive(true);
    const g = gelatoOptions[Math.floor(Math.random() * gelatoOptions.length)].name;
    const d = dipOptions[Math.floor(Math.random() * dipOptions.length)];
    const t = toppingOptions[Math.floor(Math.random() * toppingOptions.length)];
    setTimeout(() => {
      setCustomGelato(g);
      setCustomDip(d);
      setCustomTopping(t);
      setIsSurpriseActive(false);
    }, 400);
  };

  const handleBookCustomBar = () => {
    const customProd: Product = {
      id: `custom-couture-bar-${Date.now()}`,
      name: `Bespoke Couture Bar (${customGelato})`,
      frenchName: 'Bâtonnet Sur Mesure Atelier Dipping Salon',
      collection: 'bespoke-petals' as any,
      collectionTitle: 'Bespoke Couture Creation',
      tagline: `${customGelato} gelato dipped in ${customDip} with ${customTopping}.`,
      price: 490,
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Atelier Sur Mesure',
      image: getCustomizerPhoto(),
      secondaryImage: '/images/reference-couture-bar.jpg',
      notes: { top: customTopping, heart: customDip, base: customGelato },
      provenance: { region: 'CEI Fort Kochi Atelier Dipping Salon', country: 'Kerala, India', source: 'Hand-dipped to order' },
      details: {
        description: `Custom formulated haute couture ice cream bar: ${customGelato} gelato freshly dipped in ${customDip} and adorned with ${customTopping} on engraved birchwood stick.`,
        tastingRitual: 'Serve in cold presentation tray.',
        sommelierPairing: 'Brut Champagne or Single Origin Espresso.',
        overrun: '11% micro-density',
        dietary: ['Vegetarian', 'Gluten-Free'],
        allergens: ['Milk'],
        nutrition: { servingSize: '95ml (1 Bar)', calories: 290, fat: '18g', sugars: '21g', protein: '4.7g' }
      }
    };
    addToCart(customProd, 1, 'single-pint');
    setIsCartOpen(true);
  };

  // Curated Signature Couture Bars featuring the 8 authentic products
  const featuredProductIds = [
    'cei-bar-utopia-double-hazelnut',
    'cei-bar-utopia-double-cherry',
    'cei-bar-raspberry-ribbon',
    'cei-bar-strawberry-shortcake',
    'cei-bar-midnight-cookies-cream',
    'cei-bar-nordic-blueberry',
    'cei-bar-chuao-caramel',
    'cei-bar-rose-pistachio'
  ];

  const featuredProducts: Product[] = featuredProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  return (
    <div className="relative bg-[#121110] text-[#F5F2EB]">
      {/* Video Tasting Film Modal */}
      <TastingVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* ========================================================
          1. EDITORIAL MINIMAL HERO SECTION
         ======================================================== */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 lg:px-16 border-b border-white/10 bg-[#121110]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-1 my-auto">
          {/* Left Column: Quiet Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            {/* Origin Monogram Tag */}
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-[#C5A46D]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-sans font-medium">
                Fort Kochi, Kerala • Est. 2024
              </span>
            </div>

            {/* Architectural Headline */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F5F2EB] tracking-tight leading-[1.08]">
                An Adventure in
                <span className="block italic text-[#C5A46D] font-light">
                  Haute Glacerie.
                </span>
              </h1>
            </div>

            {/* Editorial Subtitle */}
            <p className="font-serif text-base sm:text-xl text-white/70 max-w-lg font-light leading-relaxed">
              Where Malabar botanical terroir meets the exacting physics of French cold gastronomy. Single-origin chocolate enrobed over sub-15% overrun cream on laser-engraved birchwood sticks.
            </p>

            {/* Minimalist Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById('flavours');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('flavours');
                }}
                className="px-8 py-3.5 bg-[#C5A46D] text-[#121110] hover:brightness-110 transition-all font-sans text-xs tracking-[0.2em] font-semibold uppercase rounded-sm"
              >
                Explore Flavours
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('story');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('story');
                }}
                className="px-7 py-3.5 border border-white/20 text-white/80 hover:text-white hover:border-white transition-all font-sans text-xs tracking-[0.2em] uppercase rounded-sm font-medium"
              >
                Our Story
              </button>
            </div>
          </motion.div>

          {/* Right Column: Clean Cinematic Player / Couture Showcase */}
          <div className="lg:col-span-6 flex flex-col items-center">
            {/* Clean Understated Mode Switcher */}
            <div className="mb-4 flex items-center space-x-1 p-1 rounded-sm bg-white/5 border border-white/10 text-xs tracking-widest uppercase font-sans">
              <button
                type="button"
                onClick={() => setHeroView('video')}
                className={`px-4 py-1.5 rounded-sm transition-all ${
                  heroView === 'video'
                    ? 'bg-[#C5A46D] text-[#121110] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Flavour Film
              </button>
              <button
                type="button"
                onClick={() => setHeroView('bar')}
                className={`px-4 py-1.5 rounded-sm transition-all ${
                  heroView === 'bar'
                    ? 'bg-[#C5A46D] text-[#121110] font-semibold'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Couture Bar
              </button>
            </div>

            {heroView === 'video' ? (
              <motion.div
                key="minimal-video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[580px] flex flex-col items-center"
              >
                {/* Clean Frame 16:9 Widescreen */}
                <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-white/15 bg-black shadow-2xl group">
                  <video
                    ref={heroVideoRef}
                    src="/videos/cei-flavour-transformation.mp4"
                    autoPlay
                    loop
                    muted={!isHeroAudioPlaying}
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={toggleHeroPlay}
                  />

                  {/* Top Subtle Label */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-sm bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] tracking-widest font-sans uppercase">
                    Transformation Film
                  </div>

                  {/* Minimal Floating Controls Bottom-Right */}
                  <div className="absolute bottom-3 right-3 flex items-center space-x-2 z-20">
                    <button
                      type="button"
                      onClick={toggleHeroPlay}
                      aria-label={isHeroVideoPlaying ? 'Pause video' : 'Play video'}
                      className="p-2 rounded-sm bg-black/70 backdrop-blur-sm border border-white/15 text-white/90 hover:text-[#C5A46D] transition-colors"
                    >
                      {isHeroVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                    </button>
                    <button
                      type="button"
                      onClick={toggleHeroAudio}
                      aria-label={isHeroAudioPlaying ? 'Mute audio' : 'Unmute audio'}
                      className="p-2 rounded-sm bg-black/70 backdrop-blur-sm border border-white/15 text-white/90 hover:text-[#C5A46D] transition-colors flex items-center space-x-1.5 text-[10px] font-sans tracking-wider"
                    >
                      {isHeroAudioPlaying ? <Volume2 className="w-3.5 h-3.5 text-[#C5A46D]" /> : <VolumeX className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      title="Fullscreen Theater"
                      className="p-2 rounded-sm bg-black/70 backdrop-blur-sm border border-white/15 text-white/90 hover:text-[#C5A46D] transition-colors"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-[11px] font-sans uppercase tracking-[0.2em] text-white/50 text-center font-light">
                  Hand-Dipped at 42°C • Acoustic Single-Origin Shell
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="minimal-bar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-center select-none"
              >
                <div className="relative py-4">
                  <img
                    src={activeBar.image}
                    alt={activeBar.name}
                    className="w-[280px] sm:w-[340px] max-h-[460px] object-contain drop-shadow-2xl"
                  />
                </div>

                <div className="text-center mt-2">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A46D] font-sans block mb-1">
                    {activeBar.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F2EB] font-medium">
                    {activeBar.name}
                  </h3>
                  <p className="text-xs text-white/60 font-light italic mt-1 max-w-sm">
                    {activeBar.subtitle}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Minimal Bottom Status Bar */}
        <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/60 font-light">
          {/* Connoisseur Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-[#C5A46D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#C5A46D] text-[#C5A46D]" />
              ))}
            </div>
            <span className="hidden sm:inline font-sans text-[11px] tracking-wider text-white/50">
              Kerala Flagship • 4.98 Rating
            </span>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-3">
            <span className="text-[11px] tracking-[0.2em] uppercase font-sans text-[#C5A46D]">
              {activeBar.number}
            </span>
            <button
              onClick={handlePrevHero}
              className="p-2 border border-white/15 hover:border-[#C5A46D] text-white/70 hover:text-white rounded-sm transition-colors"
              aria-label="Previous"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleNextHero}
              className="p-2 border border-white/15 hover:border-[#C5A46D] text-white/70 hover:text-white rounded-sm transition-colors"
              aria-label="Next"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR STORY & MALABAR TERROIR (Warm Linen #F9F7F2)
         ======================================================== */}
      <section id="story" className="py-28 px-4 sm:px-8 lg:px-16 bg-[#F9F7F2] text-[#1E1C1A] border-b border-[#E5E0D7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#E5E0D7] shadow-xl bg-white">
              <img
                src="/images/cei-rose-pistachio-bar.jpg"
                alt="CEI Fort Kochi Atelier Bar"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md border border-[#E5E0D7] rounded-sm">
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#9E824C] font-sans font-semibold block mb-0.5">
                  Fort Kochi, Kerala
                </span>
                <span className="font-serif text-lg text-[#1E1C1A]">
                  The Atelier of Handheld Gastronomy
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-[1px] bg-[#9E824C]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#9E824C] font-sans font-semibold">
                Maison Heritage & Terroir
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1C1A] leading-[1.15]">
              The Alchemy of Cold & Botanical Terroir
            </h2>

            <p className="text-sm text-[#1E1C1A]/80 leading-relaxed font-light">
              For over two thousand years, the Malabar Coast of Kerala was celebrated as the spice treasury of the world. While commercial ice cream surrendered to industrial shortcuts—50% pumped atmospheric air, artificial emulsifiers, and synthetic extracts—CEI was born to restore unyielding reverence to frozen gastronomy.
            </p>

            <p className="text-sm text-[#1E1C1A]/80 leading-relaxed font-light">
              Trained under French pastry masters and generational Italian gelatieri, our atelier unites classical cold churn technique with Kerala's most noble botanicals: Wayanad orchid vanilla, Malabar roast cacao, Idukki wild hill honey, and pure dairy cream from hill pastures.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[#E5E0D7]">
              <div>
                <span className="font-serif text-2xl font-semibold text-[#1E1C1A] block">Sub-15%</span>
                <span className="text-[10px] uppercase tracking-wider text-[#1E1C1A]/60 font-sans mt-0.5 block">
                  Micro-Density
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold text-[#1E1C1A] block">72 Hours</span>
                <span className="text-[10px] uppercase tracking-wider text-[#1E1C1A]/60 font-sans mt-0.5 block">
                  Cold Infusion
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold text-[#1E1C1A] block">100% Pure</span>
                <span className="text-[10px] uppercase tracking-wider text-[#1E1C1A]/60 font-sans mt-0.5 block">
                  Zero Gums
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onNavigate('story');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3.5 bg-[#1E1C1A] text-[#F9F7F2] hover:bg-[#9E824C] hover:text-white transition-all text-xs tracking-[0.2em] uppercase font-semibold rounded-sm"
              >
                Read Full Heritage
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SIGNATURE BAR FLAVOURS (Matte Charcoal Noir #141312)
         ======================================================== */}
      <section id="flavours" className="py-28 px-4 sm:px-8 lg:px-16 bg-[#141312] text-[#F5F2EB] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-sans font-semibold block mb-2">
                Handheld Couture Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB]">
                The Eight Signature Flavours
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('flavours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 text-xs tracking-[0.2em] uppercase text-[#C5A46D] hover:text-white transition-colors flex items-center space-x-2 font-medium"
            >
              <span>View All Flavours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Clean 4-Column Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView || (() => {})}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. THE DIPPING RITUAL ("From Terroir to Acoustic Snap")
         ======================================================== */}
      <section id="spotlight" className="py-28 px-4 sm:px-8 lg:px-16 bg-[#100F0E] text-[#F5F2EB] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#C5A46D] font-semibold block mb-2">
              The Atelier Process
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB]">
              From Terroir to Acoustic Snap
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Step Selection Tabs */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {[
                { step: 0, num: '01', title: 'TERROIR BOTANICALS' },
                { step: 1, num: '02', title: '42°C CHOCOLATE ENROBING' },
                { step: 2, num: '03', title: 'HAND-GARNISHED TOPPINGS' },
                { step: 3, num: '04', title: 'THE ACOUSTIC SNAP' }
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setSpotlightStep(item.step)}
                  className={`flex items-center space-x-4 px-5 py-3.5 rounded-sm border text-left transition-all ${
                    spotlightStep === item.step
                      ? 'bg-white/10 text-[#C5A46D] border-[#C5A46D] font-semibold'
                      : 'bg-white/5 text-white/60 border-white/10 hover:border-white/30'
                  }`}
                >
                  <span className="font-mono text-xs opacity-60">{item.num}</span>
                  <span className="text-xs uppercase tracking-wider font-sans">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Ice Cream Bar Photo Display */}
            <div className="lg:col-span-4 flex items-center justify-center min-h-[440px]">
              <motion.div
                key={spotlightStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative flex flex-col items-center"
              >
                <img
                  src={
                    spotlightStep === 0
                      ? '/images/cei-white-chocolate-macadamia.jpg'
                      : spotlightStep === 1
                      ? '/images/hero-ice-cream-bar.jpg'
                      : spotlightStep === 2
                      ? '/images/cei-rose-pistachio-bar.jpg'
                      : '/images/hero-ice-cream-bar.jpg'
                  }
                  alt="CEI Dipping Bar"
                  className="w-[280px] sm:w-[320px] max-h-[460px] object-contain drop-shadow-2xl"
                />

                <span className="mt-4 text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans">
                  {spotlightStep === 0 && 'Step 01: Wayanad Orchid & Jersey Cream'}
                  {spotlightStep === 1 && 'Step 02: 42°C Grand Cru Criollo Dip'}
                  {spotlightStep === 2 && 'Step 03: Damask Rose & Pistachio Shower'}
                  {spotlightStep === 3 && 'Step 04: The Acoustic Cacao Shell Shatter'}
                </span>
              </motion.div>
            </div>

            {/* Editorial Description */}
            <div className="lg:col-span-4 flex flex-col space-y-5 text-left">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F5F2EB] leading-tight mb-3">
                  {spotlightStep === 0 && 'Single-Origin Farm Terroir.'}
                  {spotlightStep === 1 && 'Dipped at Exactly 42°C.'}
                  {spotlightStep === 2 && 'Toppings, by the Handful.'}
                  {spotlightStep === 3 && 'The Pure Acoustic Snap.'}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-light">
                  {spotlightStep === 0 &&
                    'Sub-15% air overrun gelato slow-churned with pure Kerala farm cream and direct-trade Wayanad orchid vanilla.'}
                  {spotlightStep === 1 &&
                    '78% single-origin Venezuelan Criollo chocolate is warmed to 42°C, creating an ultra-crisp, crystalized outer shell.'}
                  {spotlightStep === 2 &&
                    'Crystallised Damask rose petals, Langhe hazelnuts, and Bronte pistachios showered by hand before chocolate sets.'}
                  {spotlightStep === 3 &&
                    'A gentle bite shatters the crackled chocolate shell to release molten golden caramel and dense, silky gelato.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 border border-white/25 text-white/90 hover:border-[#C5A46D] hover:text-[#C5A46D] transition-all text-xs uppercase tracking-widest font-semibold rounded-sm"
                >
                  Custom Atelier Bar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. THREE UNCOMPROMISING PILLARS
         ======================================================== */}
      <section id="mission" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#141312] text-[#F5F2EB] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-sans font-semibold block mb-2">
              Three Guiding Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB]">
              Our Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-[#161514] border border-white/10 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-7 h-7 text-[#C5A46D] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F5F2EB] mb-2">
                  Terroir-First Purity
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Direct agricultural partnerships with spice estates in Wayanad, Idukki, Chuao, and Sicily. Zero synthetic gums, palm oils, or artificial stabilizers.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-[#161514] border border-white/10 flex flex-col justify-between">
              <div>
                <ThermometerSnowflake className="w-7 h-7 text-[#C5A46D] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F5F2EB] mb-2">
                  -78.5°C Cryo-Lock Transit
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Dispatched in solid carbon dioxide insulated cases. Guaranteed rock-solid -18°C arrival anywhere across Kerala and India.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-[#161514] border border-white/10 flex flex-col justify-between">
              <div>
                <Award className="w-7 h-7 text-[#C5A46D] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F5F2EB] mb-2">
                  Haute Gastronomie Standard
                </h3>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  Formulated to the uncompromising micro-overrun standards of Michelin-star pastry kitchens and private coastal salons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. "PICK. DIP. TOP." BESPOKE ATELIER DIPPING SALON (Warm Cream #F5F2EB)
         ======================================================== */}
      <section id="customizer" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#F5F2EB] text-[#1E1C1A] border-b border-[#E5E0D7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9E824C] font-semibold block mb-2">
              Atelier Sur Mesure
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1E1C1A]">
              Craft Your Bespoke Couture Bar
            </h2>
            <p className="text-xs sm:text-sm text-[#1E1C1A]/70 font-light mt-2 max-w-xl mx-auto">
              Select your slow-churned gelato core, warm grand cru chocolate enrobing, and hand-adorned botanicals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Real Bar Preview */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="p-8 rounded-sm bg-white border border-[#E5E0D7] shadow-xl w-full flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${customGelato}-${customDip}-${customTopping}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="relative py-4"
                  >
                    <img
                      src={getCustomizerPhoto()}
                      alt="Custom CEI Bar"
                      className="w-56 sm:w-64 max-h-72 object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="text-center pt-4 border-t border-[#E5E0D7] w-full">
                  <span className="text-[9px] tracking-widest uppercase text-[#9E824C] font-sans block mb-1">
                    Bespoke Formulation
                  </span>
                  <h4 className="font-serif text-lg text-[#1E1C1A] font-medium">
                    {customGelato} & {customDip}
                  </h4>
                  <p className="text-xs text-[#1E1C1A]/60 font-light italic mt-0.5">
                    Garnished with {customTopping}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Tactile Minimal Selectors */}
            <div className="lg:col-span-7 space-y-6">
              {/* 1. Gelato Base */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A]/60 block mb-2">
                  1. Select Gelato Base:
                </span>
                <div className="flex flex-wrap gap-2">
                  {gelatoOptions.map((opt) => (
                    <button
                      key={opt.name}
                      onClick={() => setCustomGelato(opt.name)}
                      className={`px-4 py-2 rounded-sm text-xs font-medium transition-all ${
                        customGelato === opt.name
                          ? 'bg-[#1E1C1A] text-white'
                          : 'bg-white border border-[#E5E0D7] text-[#1E1C1A] hover:border-[#1E1C1A]'
                      }`}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Chocolate Enrobing */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A]/60 block mb-2">
                  2. Select Warm Chocolate Enrobing (42°C):
                </span>
                <div className="flex flex-wrap gap-2">
                  {dipOptions.map((dip) => (
                    <button
                      key={dip}
                      onClick={() => setCustomDip(dip)}
                      className={`px-4 py-2 rounded-sm text-xs font-medium transition-all ${
                        customDip === dip
                          ? 'bg-[#1E1C1A] text-white'
                          : 'bg-white border border-[#E5E0D7] text-[#1E1C1A] hover:border-[#1E1C1A]'
                      }`}
                    >
                      {dip}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Hand-Garnished Topping */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1E1C1A]/60 block mb-2">
                  3. Select Hand-Garnished Topping:
                </span>
                <div className="flex flex-wrap gap-2">
                  {toppingOptions.map((top) => (
                    <button
                      key={top}
                      onClick={() => setCustomTopping(top)}
                      className={`px-4 py-2 rounded-sm text-xs font-medium transition-all ${
                        customTopping === top
                          ? 'bg-[#1E1C1A] text-white'
                          : 'bg-white border border-[#E5E0D7] text-[#1E1C1A] hover:border-[#1E1C1A]'
                      }`}
                    >
                      {top}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBookCustomBar}
                  className="px-8 py-3.5 bg-[#1E1C1A] text-white hover:bg-[#9E824C] transition-all text-xs font-semibold uppercase tracking-widest rounded-sm flex items-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Craft & Add To Case • ₹490</span>
                </button>

                <button
                  onClick={handleSurpriseMe}
                  className="px-6 py-3.5 bg-white border border-[#E5E0D7] text-[#1E1C1A] hover:border-[#1E1C1A] transition-all text-xs font-medium uppercase tracking-wider rounded-sm flex items-center space-x-1.5"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Surprise Me</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CURATED TASTING FLIGHT HAMPERS (Shop Preview)
         ======================================================== */}
      <section id="shop" className="py-24 px-4 sm:px-8 lg:px-16 bg-[#141312] text-[#F5F2EB] border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-sans font-semibold block mb-2">
                Presentation Hampers & Flights
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB]">
                Curated Gift Boxes
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 text-xs tracking-[0.2em] uppercase text-[#C5A46D] hover:text-white transition-colors flex items-center space-x-1.5 font-semibold"
            >
              <span>View Full Shop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TASTING_FLIGHTS.map((flight) => (
              <div
                key={flight.id}
                className="p-8 rounded-sm bg-[#161514] border border-white/10 hover:border-[#C5A46D]/60 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <span className="text-[9px] tracking-widest uppercase text-[#C5A46D] font-semibold block mb-1">
                    {flight.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#F5F2EB] mb-2">
                    {flight.name}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    {flight.description}
                  </p>

                  <div className="space-y-1.5 mb-6 text-xs text-white/80 font-light">
                    {flight.items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="font-serif text-2xl font-semibold text-[#C5A46D]">
                    ₹{flight.price.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => {
                      addToCart(PRODUCTS[0], 1, 'tasting-flight', flight.name);
                      setIsCartOpen(true);
                    }}
                    className="px-6 py-2.5 bg-[#C5A46D] text-[#121110] hover:brightness-110 text-xs uppercase tracking-wider font-semibold rounded-sm transition-all"
                  >
                    Add Presentation Box
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. ATELIER SALONS INVITATION SECTION (Connecting to Footer)
         ======================================================== */}
      <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#100F0E] text-[#F5F2EB]">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A46D] font-sans font-semibold mb-3">
            Kerala & India Boutiques
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5F2EB] mb-4">
            Visit the Flagship Tasting Salons
          </h2>
          <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg mb-10 leading-relaxed">
            Experience our grand cru cold enrobing counter, sommelier tea pairings, and custom flight cases.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mb-12">
            {BOUTIQUES.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-sm bg-[#161514] border border-white/10 text-left flex flex-col justify-between space-y-3"
              >
                <div>
                  <h4 className="font-serif text-base text-[#F5F2EB] font-medium mb-0.5">
                    {b.city}
                  </h4>
                  <span className="text-[10px] tracking-wider text-[#C5A46D] uppercase block mb-2">
                    {b.district}
                  </span>
                  <div className="flex items-start space-x-2 text-xs text-white/60 font-light">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{b.address}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="pt-2 text-[10px] uppercase tracking-wider text-[#C5A46D] hover:underline text-left font-sans"
                >
                  Reserve Tasting →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
