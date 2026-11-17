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
  Calendar,
  Instagram,
  Facebook,
  Youtube,
  Layers,
  Flame,
  Check
} from 'lucide-react';
import { PRODUCTS, TASTING_FLIGHTS, REVIEWS, BOUTIQUES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { TastingVideoModal } from '../components/TastingVideoModal';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface HomeProps {
  onNavigate: (page: string) => void;
  onFilterCategory?: (categoryId: string) => void;
  onQuickView?: (product: Product) => void;
}

// 4 Signature Luxury Couture Bars for the Animated Hero Carousel
const LUXURY_HERO_BARS = [
  {
    id: 'chuao',
    productId: 'cei-bar-chuao-caramel',
    name: 'Chuao Dark Chocolate & Salted Caramel Bar',
    subtitle: '78% Single-Origin Venezuelan Criollo & Roasted Hazelnuts',
    watermark: 'CHUAO CARAMEL',
    number: '01 / 04',
    bgTheme: '#07140E', // Deep Forest Green
    image: '/images/hero-ice-cream-bar.jpg',
    provenance: 'Chuao Valley, Venezuela & Langhe Hills, Italy',
    notes: '78% Criollo Dark Chocolate, Fleur de Sel Caramel, Tahitensis Vanilla'
  },
  {
    id: 'rose',
    productId: 'cei-bar-rose-pistachio',
    name: 'Damask Rose & Bronte Pistachio Couture Bar',
    subtitle: 'Edible Pink Rose Petals, Sicilian Pistachios & White Chocolate Medallion',
    watermark: 'DAMASK ROSE',
    number: '02 / 04',
    bgTheme: '#381016', // Deep Velvet Burgundy
    image: '/images/cei-rose-pistachio-bar.jpg',
    provenance: 'Kashan, Iran & Mount Etna, Sicily',
    notes: 'Damask Rose Petals, DOP Bronte Pistachio, Ivory White Chocolate'
  },
  {
    id: 'vanilla',
    productId: 'cei-bar-white-macadamia',
    name: 'Tahitian Vanilla & Macadamia Crunch Bar',
    subtitle: 'Pure Tahitensis Orchid Caviar & Roasted Hawaiian Macadamias',
    watermark: 'TAHITIAN CRUNCH',
    number: '03 / 04',
    bgTheme: '#1C1917', // Rich Charcoal Black
    image: '/images/cei-white-chocolate-macadamia.jpg',
    provenance: 'Raiatea, French Polynesia & Hawaii',
    notes: 'Ivory Cocoa Butter, Tahitian Vanilla Caviar, Roasted Macadamia'
  },
  {
    id: 'gold',
    productId: 'cei-bar-gold-truffle',
    name: '24K Gold Leaf & Belgian Dark Truffle Bar',
    subtitle: 'Hand-Adorned 24K Edible Gold Leaf & Grand Cru Truffle Ganache',
    watermark: '24K GOLD RESERVE',
    number: '04 / 04',
    bgTheme: '#09261E', // Imperial Dark Emerald
    image: '/images/cei-gold-truffle-bar.jpg',
    provenance: 'Brussels, Belgium & Golden Triangle',
    notes: '24K Edible Gold, 80% Belgian Dark Chocolate, Fleur de Sel'
  }
];

export const Home: React.FC<HomeProps> = ({ onNavigate, onFilterCategory, onQuickView }) => {
  const { addToCart, setIsCartOpen } = useCart();
  const [heroIndex, setHeroIndex] = useState(0);
  const activeBar = LUXURY_HERO_BARS[heroIndex];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Hero section view mode: 'video' (Cinematic Vertical 9:16 Film) or 'bar' (3D Interactive Stick Bar)
  const [heroView, setHeroView] = useState<'video' | 'bar'>('video');
  const [isHeroVideoPlaying, setIsHeroVideoPlaying] = useState(true);
  const [isHeroAudioPlaying, setIsHeroAudioPlaying] = useState(false);
  const heroVideoRef = React.useRef<HTMLVideoElement>(null);
  const heroAudioRef = React.useRef<HTMLAudioElement>(null);

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
    if (heroAudioRef.current) {
      if (next) {
        heroAudioRef.current.play().catch(() => {});
      } else {
        heroAudioRef.current.pause();
      }
    }
  };

  // Hero stick bar mouse hover state for toppings & fillings animation
  const [isHeroBarHovered, setIsHeroBarHovered] = useState(false);

  // Spotlight dipping step (0 to 3)
  const [spotlightStep, setSpotlightStep] = useState(2);

  // Section 6 Pick. Dip. Top. customizer state
  const [customGelato, setCustomGelato] = useState('Tahitian Vanilla');
  const [customDip, setCustomDip] = useState('78% Chuao Dark');
  const [customTopping, setCustomTopping] = useState('Damask Rose Petals');
  const [isSurpriseActive, setIsSurpriseActive] = useState(false);

  // Get real photo for the Customizer based on chosen topping & dip
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
      price: 10.5,
      rating: 5.0,
      reviewsCount: 1,
      badge: 'Atelier Sur Mesure',
      image: getCustomizerPhoto(),
      secondaryImage: '/images/reference-couture-bar.jpg',
      notes: { top: customTopping, heart: customDip, base: customGelato },
      provenance: { region: 'CEI Atelier Dipping Salon', country: 'Paris & Worldwide', source: 'Hand-dipped to order' },
      details: {
        description: `Custom formulated haute couture ice cream bar: ${customGelato} gelato freshly dipped in ${customDip} and adorned with ${customTopping} on engraved birchwood stick.`,
        tastingRitual: 'Serve in cold gold-foil presentation tray.',
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

  // Curated Signature Couture Bars featuring the user's authentic CEI-branded uploaded collection
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
    <div className="relative overflow-hidden bg-[#07140E] text-[#F4EBD8]">
      {/* Video Tasting Film Modal */}
      <TastingVideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      {/* ========================================================
          1. CINEMATIC HERO SECTION
          - Minimal clean editorial typography on the left (Reduced text clutter)
          - Deep Luxury Palette (#07140E / #381016 / #1C1917 / #09261E)
          - INTERACTIVE MOUSE HOVER ANIMATION ON THE STICK BAR:
            When mouse touches/hovers, toppings, caramel fillings, roasted nut shards,
            and anatomy callouts gracefully burst and animate onto the bar!
         ======================================================== */}
      <section
        className="relative min-h-[96vh] flex flex-col justify-between pt-28 pb-0 px-4 sm:px-8 lg:px-14 overflow-hidden transition-colors duration-700"
        style={{ backgroundColor: activeBar.bgTheme }}
      >
        {/* Giant Watermark Typography in Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
          <AnimatePresence mode="wait">
            <motion.h2
              key={activeBar.watermark}
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 0.12, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -30 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-[15vw] font-black uppercase text-[#D5B77A] whitespace-nowrap tracking-tight leading-none text-center"
            >
              {activeBar.watermark}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Ambient Warm Golden Aura */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] sm:w-[700px] h-[550px] sm:h-[700px] rounded-full bg-[#D5B77A]/12 blur-[160px] pointer-events-none" />

        {/* Main Hero Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          {/* Left Column: Clean Minimal Typography (No Clutter, Exactly as requested) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start space-y-7 text-left text-[#F4EBD8]"
          >
            {/* Main Headline: 3 Lines, Large, Gold Sheen */}
            <div className="space-y-1">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.98] uppercase">
                <span className="block bg-gradient-to-b from-[#FFF5DE] via-[#D5B77A] to-[#8C6D34] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(213,183,122,0.4)]">
                  A NEW
                </span>
                <span className="block bg-gradient-to-b from-[#FFF5DE] via-[#D5B77A] to-[#8C6D34] bg-clip-text text-transparent drop-shadow-[0_4px_25px_rgba(213,183,122,0.4)] mt-1">
                  ADVENTURE
                </span>
                <span className="block font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-[#F4EBD8] tracking-normal mt-2 drop-shadow-md">
                  IN ICE CREAM.
                </span>
              </h1>
            </div>

            {/* Subtitle (Clean & Minimal) */}
            <p className="font-serif text-lg sm:text-2xl text-[#F4EBD8]/85 max-w-md font-light italic leading-relaxed">
              Taking you to a place a little wilder than the everyday...
            </p>

            {/* Single Clean Action Button */}
            <div className="pt-2 flex items-center space-x-6">
              <button
                onClick={() => {
                  const el = document.getElementById('story');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('story');
                }}
                className="px-9 py-3.5 border border-[#D5B77A] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all duration-300 font-sans text-xs tracking-[0.25em] font-semibold uppercase rounded-sm shadow-[0_0_20px_rgba(213,183,122,0.2)]"
              >
                ABOUT US
              </button>

              <div className="text-xs font-mono uppercase tracking-widest text-[#D5B77A]/80 flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#D5B77A] animate-pulse" />
                <span>{activeBar.number} • {activeBar.name.split(' ')[0]} {activeBar.name.split(' ')[1]}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Video Film or 3D Slanted Floating Bars */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[500px] select-none pt-4 lg:pt-0">
            {/* Mode Switcher Pill */}
            <div className="mb-4 z-30 flex items-center p-1 rounded-full bg-black/60 border border-[#D5B77A]/40 backdrop-blur-md shadow-xl">
              <button
                type="button"
                onClick={() => setHeroView('video')}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2 ${
                  heroView === 'video'
                    ? 'bg-[#D5B77A] text-[#07140E] font-bold shadow-[0_0_15px_rgba(213,183,122,0.6)]'
                    : 'text-[#D5B77A]/75 hover:text-[#D5B77A]'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>FLAVOUR TRANSFORMATION</span>
              </button>
              <button
                type="button"
                onClick={() => setHeroView('bar')}
                className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 flex items-center space-x-2 ${
                  heroView === 'bar'
                    ? 'bg-[#D5B77A] text-[#07140E] font-bold shadow-[0_0_15px_rgba(213,183,122,0.6)]'
                    : 'text-[#D5B77A]/75 hover:text-[#D5B77A]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D COUTURE BAR</span>
              </button>
            </div>

            {heroView === 'video' ? (
              <motion.div
                key="hero-video-frame"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.5 }}
                className="relative z-20 flex flex-col items-center w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[640px]"
              >
                {/* Ambient Golden Halo Behind Video */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#D5B77A]/25 via-transparent to-[#FFE8A3]/20 rounded-[36px] blur-2xl pointer-events-none" />

                {/* Luxury Cinema 16:9 Widescreen Frame */}
                <div className="relative w-full p-1.5 rounded-[26px] sm:rounded-[30px] bg-gradient-to-b from-[#FFF5DE]/50 via-[#D5B77A]/60 to-[#6E4F18]/50 border border-[#D5B77A]/60 shadow-[0_30px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(213,183,122,0.3)]">
                  <div className="relative w-full aspect-video rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black shadow-inner">
                    {/* The Hero Video: Ice Cream Flavour Transformation */}
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

                    {/* Subtle Dark Vignette Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none" />

                    {/* Top Status Bar Over Video */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                      <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D5B77A]/40 text-[#D5B77A] text-[10px] tracking-widest font-mono uppercase">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span>CEI CINEMA • 1080P MASTER</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-[#D5B77A]/20 border border-[#D5B77A]/40 text-[#F4EBD8] text-[10px] tracking-widest font-mono">
                        FLAVOUR TRANSFORMATION
                      </span>
                    </div>

                    {/* Center Click-to-Play Indicator if Paused */}
                    {!isHeroVideoPlaying && (
                      <div
                        onClick={toggleHeroPlay}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer z-20"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#D5B77A] text-[#07140E] flex items-center justify-center shadow-[0_0_30px_#D5B77A] transform hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 fill-current ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Bottom Floating Glass Controls */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-2.5 sm:p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-[#D5B77A]/40 z-20 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={toggleHeroPlay}
                          aria-label={isHeroVideoPlaying ? 'Pause video' : 'Play video'}
                          className="p-2 rounded-full bg-[#D5B77A]/20 border border-[#D5B77A]/60 text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all"
                        >
                          {isHeroVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>
                        <button
                          type="button"
                          onClick={toggleHeroAudio}
                          aria-label={isHeroAudioPlaying ? 'Mute audio' : 'Unmute audio'}
                          className={`px-3 py-1.5 rounded-full border text-xs font-mono tracking-wider flex items-center space-x-1.5 transition-all ${
                            isHeroAudioPlaying
                              ? 'bg-[#D5B77A] text-[#07140E] border-[#D5B77A] font-bold shadow-[0_0_15px_rgba(213,183,122,0.8)]'
                              : 'bg-black/50 text-[#D5B77A] border-[#D5B77A]/40 hover:border-[#D5B77A]'
                          }`}
                        >
                          {isHeroAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                          <span>{isHeroAudioPlaying ? 'SOUND ON' : 'UNMUTE'}</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => setIsVideoModalOpen(true)}
                        title="Expand Cinematic Theater"
                        className="p-2 rounded-full bg-[#D5B77A]/20 border border-[#D5B77A]/60 text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Caption under video */}
                <div className="mt-3 text-center">
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#D5B77A]/80">
                    Artisanal Flavour Transformation • 1080p Cinema Master
                  </p>
                </div>
              </motion.div>
            ) : (
              <div className="relative w-full flex flex-col items-center">
                {/* Background Slanted Bar 3 */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [16, 20, 16]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-4 sm:right-10 top-4 w-28 sm:w-36 h-56 sm:h-72 opacity-35 filter blur-[1px] pointer-events-none rounded-sm overflow-hidden border border-[#D5B77A]/20 shadow-2xl"
                >
                  <img
                    src="/images/cei-gold-truffle-bar.jpg"
                    alt="CEI Bar 3"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Background Slanted Bar 2 */}
                <motion.div
                  animate={{
                    y: [8, -8, 8],
                    rotate: [10, 14, 10]
                  }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-14 sm:right-24 top-10 w-32 sm:w-40 h-64 sm:h-80 opacity-70 pointer-events-none rounded-sm overflow-hidden border border-[#D5B77A]/30 shadow-2xl"
                >
                  <img
                    src="/images/cei-rose-pistachio-bar.jpg"
                    alt="CEI Bar 2"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Main Interactive Floating Bar with MOUSE HOVER ANIMATION */}
                <div
                  className="relative z-20 flex flex-col items-center cursor-pointer group select-none"
                  onMouseEnter={() => setIsHeroBarHovered(true)}
                  onMouseLeave={() => setIsHeroBarHovered(false)}
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  {/* Floating Anatomy Tooltips */}
                  <AnimatePresence>
                    {isHeroBarHovered && (
                      <>
                        {/* Tooltip 1: Top-Left (Vanilla Core) */}
                        <motion.div
                          initial={{ opacity: 0, x: -30, y: -20, scale: 0.8 }}
                          animate={{ opacity: 1, x: -90, y: -40, scale: 1 }}
                          exit={{ opacity: 0, x: -30, y: -20, scale: 0.8 }}
                          transition={{ duration: 0.35 }}
                          className="absolute top-12 left-0 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#07140E]/95 border border-[#D5B77A] text-[#F4EBD8] shadow-2xl z-40 backdrop-blur-md whitespace-nowrap pointer-events-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A]" />
                          <span className="text-[11px] font-sans font-medium tracking-wide">
                            Tahitensis Orchid Vanilla Core
                          </span>
                        </motion.div>

                        {/* Tooltip 2: Top-Right (Chocolate Shell) */}
                        <motion.div
                          initial={{ opacity: 0, x: 30, y: -20, scale: 0.8 }}
                          animate={{ opacity: 1, x: 90, y: -20, scale: 1 }}
                          exit={{ opacity: 0, x: 30, y: -20, scale: 0.8 }}
                          transition={{ duration: 0.35, delay: 0.05 }}
                          className="absolute top-20 right-0 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#07140E]/95 border border-[#D5B77A] text-[#F4EBD8] shadow-2xl z-40 backdrop-blur-md whitespace-nowrap pointer-events-none"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A]" />
                          <span className="text-[11px] font-sans font-medium tracking-wide">
                            78% Venezuelan Chuao Shell
                          </span>
                        </motion.div>

                        {/* Tooltip 3: Center-Right (Molten Salted Caramel) */}
                        <motion.div
                          initial={{ opacity: 0, x: 30, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, x: 100, y: 70, scale: 1 }}
                          exit={{ opacity: 0, x: 30, y: 20, scale: 0.8 }}
                          transition={{ duration: 0.35, delay: 0.1 }}
                          className="absolute top-44 right-0 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#D5B77A] text-[#07140E] font-bold shadow-2xl z-40 whitespace-nowrap pointer-events-none"
                        >
                          <Flame className="w-3.5 h-3.5 fill-current" />
                          <span className="text-[11px] font-sans tracking-wide">
                            Molten Fleur de Sel Caramel Ribbon
                          </span>
                        </motion.div>

                        {/* Tooltip 4: Bottom-Left (Roasted Hazelnuts) */}
                        <motion.div
                          initial={{ opacity: 0, x: -30, y: 20, scale: 0.8 }}
                          animate={{ opacity: 1, x: -100, y: 130, scale: 1 }}
                          exit={{ opacity: 0, x: -30, y: 20, scale: 0.8 }}
                          transition={{ duration: 0.35, delay: 0.15 }}
                          className="absolute top-52 left-0 hidden sm:flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#07140E]/95 border border-[#D5B77A] text-[#D5B77A] shadow-2xl z-40 backdrop-blur-md whitespace-nowrap pointer-events-none"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span className="text-[11px] font-sans font-medium tracking-wide">
                            Slow-Roasted Langhe Hazelnuts
                          </span>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>

                  {/* Dynamic Toppings & Fillings Particles */}
                  <AnimatePresence>
                    {isHeroBarHovered && (
                      <div className="absolute inset-0 pointer-events-none z-30">
                        {/* Golden Caramel Droplets Flying In */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, y: -40, x: -20 }}
                          animate={{ opacity: 1, scale: [1, 1.3, 1], y: 10, x: 5 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-28 left-8 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFD27D] to-[#D59836] shadow-[0_0_20px_#FFD27D] border border-white/60"
                        />

                        {/* Roasted Hazelnut Shard 1 */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, x: 50, y: -30, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, x: 12, y: 8, rotate: 45 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.45 }}
                          className="absolute top-20 right-10 w-6 h-4 bg-[#A36A3B] rounded-sm shadow-xl border border-[#D5B77A]/50"
                        />

                        {/* Roasted Hazelnut Shard 2 */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, x: -60, y: 40, rotate: 0 }}
                          animate={{ opacity: 1, scale: 1, x: -8, y: -5, rotate: -25 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.08 }}
                          className="absolute bottom-36 left-12 w-5 h-5 bg-[#8C582B] rounded-sm shadow-xl border border-[#D5B77A]/40"
                        />

                        {/* Crunchy Dark Chocolate Flakes */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0, y: -60 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute top-12 left-24 w-4 h-3 bg-[#1A0E0A] rounded-sm shadow-md"
                        />
                        <motion.div
                          initial={{ opacity: 0, scale: 0, y: 60 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4, delay: 0.12 }}
                          className="absolute bottom-44 right-16 w-5 h-3.5 bg-[#26150E] rounded-sm shadow-md"
                        />

                        {/* Gold Leaf Sparkle Dust */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: [0, 1, 0.8], scale: [0.5, 1.5, 1] }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="absolute top-36 right-8 w-4 h-4 bg-[#FFE8A3] rounded-full blur-[1px] shadow-[0_0_15px_#FFE8A3]"
                        />
                      </div>
                    )}
                  </AnimatePresence>

                  {/* The Active Ice Cream Bar */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBar.id}
                      initial={{ opacity: 0, scale: 0.88, y: 40 }}
                      animate={{
                        opacity: 1,
                        scale: isHeroBarHovered ? 1.08 : 1,
                        y: isHeroBarHovered ? 0 : [-12, 12, -12],
                        rotate: isHeroBarHovered ? 0 : [6, 10, 6]
                      }}
                      exit={{ opacity: 0, scale: 0.88, y: -40, rotate: 16 }}
                      transition={{
                        opacity: { duration: 0.5 },
                        scale: { duration: 0.4 },
                        y: isHeroBarHovered ? { duration: 0.3 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' },
                        rotate: isHeroBarHovered ? { duration: 0.3 } : { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      className="relative select-none"
                    >
                      <img
                        src={activeBar.image}
                        alt={activeBar.name}
                        className="w-[300px] sm:w-[380px] lg:w-[420px] max-h-[560px] object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.92)] transition-all duration-500"
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Interactive Hover Guidance Below Bar */}
                  <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsVideoModalOpen(true)}
                      className="px-4 py-1.5 rounded-full bg-[#07140E]/80 border border-[#D5B77A]/40 hover:border-[#D5B77A] text-[#D5B77A] text-[11px] font-sans tracking-[0.2em] uppercase flex items-center space-x-2 transition-all duration-300 hover:bg-[#D5B77A] hover:text-[#07140E] shadow-lg"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>PLAY TASTING FILM</span>
                    </button>

                    <div className="px-3.5 py-1.5 rounded-full bg-black/40 border border-[#D5B77A]/25 text-[10px] tracking-[0.2em] text-[#D5B77A]/90 uppercase font-mono shadow-md flex items-center space-x-2 pointer-events-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] animate-ping" />
                      <span>HOVER TO REVEAL TOPPINGS</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            Bottom Wave Section & Controls (Video Animation)
           ======================================================== */}
        <div className="relative w-full z-20 mt-8">
          {/* Organic Cream SVG Wave */}
          <div className="w-full overflow-hidden leading-none">
            <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path
                d="M0,45 C320,10 680,85 1040,30 C1220,10 1360,35 1440,45 L1440,90 L0,90 Z"
                fill="#F4EBD8"
              />
            </svg>
          </div>

          {/* Controls Bar on the Cream Surface */}
          <div className="bg-[#F4EBD8] px-4 sm:px-8 lg:px-14 py-4 -mt-1 text-[#242321]">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Left: Connoisseur Rating Proof */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center text-[#D5B77A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A46D] text-[#C5A46D]" />
                  ))}
                </div>
                <span className="hidden sm:inline text-xs font-serif italic text-[#242321]/80">
                  Loved by Connoisseurs Worldwide • 4.98★
                </span>
              </div>

              {/* Center: Circular Carousel Navigation Arrows (Video Animation) */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handlePrevHero}
                  className="w-10 h-10 rounded-full border border-[#242321]/30 hover:border-[#242321] hover:bg-[#242321] hover:text-[#F4EBD8] transition-all flex items-center justify-center text-[#242321]"
                  aria-label="Previous Flavor"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextHero}
                  className="w-10 h-10 rounded-full border border-[#242321]/30 hover:border-[#242321] hover:bg-[#242321] hover:text-[#F4EBD8] transition-all flex items-center justify-center text-[#242321]"
                  aria-label="Next Flavor"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Right: Quick Brand Jump */}
              <div className="flex items-center space-x-3 text-xs tracking-wider uppercase font-sans text-[#242321]/70">
                <span className="hidden md:inline font-mono text-[11px]">
                  CEI MAISON GLACÉE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR STORY SECTION (Matching Navbar: OUR STORY)
          - Warm Cream Editorial Background (#F4EBD8)
          - Rue Saint-Honoré Paris & Ginza Tokyo Heritage
         ======================================================== */}
      <section id="story" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#F4EBD8] text-[#242321] relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#C5A46D]/40 shadow-2xl bg-[#242321]">
              <img
                src="/images/cei-rose-pistachio-bar.jpg"
                alt="CEI Couture Bar Creation"
                className="w-full h-[460px] object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242321] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest uppercase text-[#C5A46D] font-medium block">
                  Rue Saint-Honoré, Paris & Ginza, Tokyo
                </span>
                <span className="font-serif text-2xl text-[#F4EBD8]">
                  The Atelier of Handheld Gastronomy
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-[#8A3038] font-bold">
              Maison Heritage & Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#242321] leading-tight">
              Our Story: The Alchemy of Cold
            </h2>
            <div className="w-16 h-[2px] bg-[#C5A46D]" />
            <p className="text-sm text-[#242321]/80 leading-relaxed font-normal">
              Commercial ice cream hides behind 50% pumped atmospheric air, artificial gums, and synthetic extracts. CEI was founded to restore absolute reverence to frozen gastronomy.
            </p>
            <p className="text-sm text-[#242321]/80 leading-relaxed font-normal">
              Each bar is hand-dipped in single-origin grand cru chocolate, slow-churned in French pots with sub-15% air overrun, and served on custom engraved birchwood sticks. What reaches your palate is pure, unyielding luxury.
            </p>

            <button
              onClick={() => {
                onNavigate('story');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-2 self-start px-8 py-3.5 border-2 border-[#242321] text-[#242321] hover:bg-[#242321] hover:text-[#F4EBD8] transition-all text-xs tracking-[0.2em] uppercase font-bold rounded-sm shadow-md"
            >
              Read Full Heritage
            </button>
          </div>
        </div>
      </section>

      {/* Wavy Transition: Cream -> Charcoal */}
      <div className="w-full overflow-hidden leading-none bg-[#F4EBD8]">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0,45 C420,15 820,95 1180,35 C1310,15 1390,30 1440,40 L1440,90 L0,90 Z" fill="#171916" />
        </svg>
      </div>

      {/* ========================================================
          3. FLAVOURS SECTION (Matching Navbar: FLAVOURS)
          - Charcoal Black Background (#171916)
          - 3D Breakout Cards where bars tilt out on hover!
         ======================================================== */}
      <section id="flavours" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#171916] text-[#F4EBD8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#D5B77A] font-light block mb-2">
                Handheld Couture Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#F4EBD8]">
                Signature Bar Flavours
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('flavours');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 text-xs tracking-[0.2em] uppercase text-[#D5B77A] hover:text-[#FFF4DC] transition-colors flex items-center space-x-2 font-semibold"
            >
              <span>Explore All Flavours</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 3D Breakout Product Cards Grid */}
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

      {/* Wavy Transition: Charcoal -> Forest Green */}
      <div className="w-full overflow-hidden leading-none bg-[#171916]">
        <svg viewBox="0 0 1440 90" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
          <path d="M0,50 C320,10 680,95 1040,40 C1240,10 1360,40 1440,50 L1440,90 L0,90 Z" fill="#07140E" />
        </svg>
      </div>

      {/* ========================================================
          4. FLAVOR SPOTLIGHT & PROCESS DIPPING RITUAL
          "From Terroir to Acoustic Snap"
          - RESTORED REAL LUXURY ICE CREAM BAR PHOTOGRAPHY!
          - Real, mouth-watering photos corresponding to each step
         ======================================================== */}
      <section id="spotlight" className="relative py-28 px-4 sm:px-8 lg:px-14 bg-[#07140E] text-[#F4EBD8] overflow-hidden">
        {/* Giant Faint Background Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-display text-[22vw] font-black uppercase text-[#D5B77A]/5 leading-none whitespace-nowrap">
            ATELIER
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#D5B77A]">
              THE CEI DIPPING RITUAL
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#F4EBD8] mt-2">
              From Terroir to Acoustic Snap
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: 4-Step Ritual Navigation Pills */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              {[
                { step: 0, num: '01', title: 'TERROIR INGREDIENTS' },
                { step: 1, num: '02', title: '42°C CHOCOLATE DIP' },
                { step: 2, num: '03', title: 'HAND-GARNISHED TOPPINGS' },
                { step: 3, num: '04', title: 'ACOUSTIC SNAP' }
              ].map((item) => (
                <button
                  key={item.step}
                  onClick={() => setSpotlightStep(item.step)}
                  className={`flex items-center space-x-3 px-5 py-3.5 rounded-sm border text-left transition-all ${
                    spotlightStep === item.step
                      ? 'bg-[#D5B77A] text-[#07140E] border-[#D5B77A] font-bold shadow-lg scale-102'
                      : 'bg-white/5 text-[#F4EBD8]/70 border-white/10 hover:border-[#D5B77A]/40'
                  }`}
                >
                  <span className="font-mono text-xs opacity-75">{item.num}</span>
                  <span className="text-xs uppercase tracking-wider">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Center: REAL LUXURY ICE CREAM BAR PHOTOGRAPHY (RESTORED AS REQUESTED) */}
            <div className="lg:col-span-4 relative flex items-center justify-center min-h-[460px]">
              <motion.div
                key={spotlightStep}
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative flex flex-col items-center select-none"
              >
                {/* 3D Flying Particles Burst (Toppings by the handful) */}
                {spotlightStep >= 2 && (
                  <>
                    <motion.div
                      animate={{ y: [-15, 15, -15], x: [-12, 12, -12], rotate: [0, 90, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-8 -left-10 w-6 h-3 bg-[#D5B77A] rounded-sm shadow-md pointer-events-none z-30 opacity-90"
                    />
                    <motion.div
                      animate={{ y: [12, -12, 12], x: [10, -10, 10], rotate: [30, -30, 30] }}
                      transition={{ duration: 3.5, repeat: Infinity }}
                      className="absolute -top-4 -right-8 w-5 h-2.5 bg-[#8A3038] rounded-sm shadow-md pointer-events-none z-30 opacity-90"
                    />
                    <motion.div
                      animate={{ y: [-10, 15, -10], x: [-8, 12, -8] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute top-24 -left-12 w-4 h-4 rounded-full bg-[#D5B77A]/60 pointer-events-none z-30"
                    />
                  </>
                )}

                {/* REAL ICE CREAM BAR PHOTO */}
                <div className="relative group cursor-pointer">
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
                    alt="CEI Dipping Ritual Bar"
                    className="w-[280px] sm:w-[320px] max-h-[460px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Active Step Status Overlay */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#07140E]/90 border border-[#D5B77A]/60 text-[#D5B77A] text-[10px] font-mono tracking-widest uppercase whitespace-nowrap shadow-xl">
                    {spotlightStep === 0 && '✦ STEP 01: TAHITENSIS VANILLA CORE ✦'}
                    {spotlightStep === 1 && '✦ STEP 02: 42°C DARK CRIOLLO DIP ✦'}
                    {spotlightStep === 2 && '✦ STEP 03: ROSE PETALS & PISTACHIOS ✦'}
                    {spotlightStep === 3 && '✦ STEP 04: ACOUSTIC SHELL SNAP ✦'}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Editorial Process Description */}
            <div className="lg:col-span-4 flex flex-col space-y-6 text-left">
              <div>
                <h3 className="font-serif text-3xl font-medium text-[#F4EBD8] leading-tight mb-2">
                  {spotlightStep === 0 && 'Single-Origin Farm Terroir.'}
                  {spotlightStep === 1 && 'Dipped at Exactly 42°C.'}
                  {spotlightStep === 2 && 'Toppings, by the Handful.'}
                  {spotlightStep === 3 && 'The Pure Acoustic Snap.'}
                </h3>
                <p className="text-sm text-[#F4EBD8]/80 leading-relaxed font-light">
                  {spotlightStep === 0 &&
                    'Sub-15% air overrun gelato churned with fresh double cream and direct-trade Tahitensis orchid beans.'}
                  {spotlightStep === 1 &&
                    '78% single-origin Venezuelan Criollo chocolate creates a crackling acoustic shell.'}
                  {spotlightStep === 2 &&
                    'Candied Damask rose petals, Langhe hazelnuts, and Bronte pistachios showered by hand before setting.'}
                  {spotlightStep === 3 &&
                    'Shattering the crackled chocolate shell reveals luscious Fleur de Sel golden caramel and velvety gelato.'}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3 border border-[#D5B77A] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all text-xs uppercase tracking-widest font-semibold rounded-sm"
                >
                  CUSTOMIZE YOUR BAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. OUR MISSION SECTION (Matching Navbar: OUR MISSION)
          - Deep Forest Green with the 3 Cryogenic / Terroir Pillars
         ======================================================== */}
      <section id="mission" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#04100B] text-[#F4EBD8] border-t border-b border-[#D5B77A]/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-[#D5B77A] font-light block mb-2">
              Three Uncompromising Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#F4EBD8]">
              Our Mission
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EBD8]/70 font-light mt-3">
              Restoring absolute reverence to cold gastronomy from farm terroir to cryogenic case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-[#07140E] border border-[#D5B77A]/25 hover:border-[#D5B77A]/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#D5B77A] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F4EBD8] mb-2">
                  Terroir-First Purity
                </h3>
                <p className="text-xs text-[#F4EBD8]/70 font-light leading-relaxed">
                  Direct trade with family farms in Chuao, Bronte, and Tahiti. Zero artificial gums, palm oils, or chemical stabilizers.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-[#07140E] border border-[#D5B77A]/25 hover:border-[#D5B77A]/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <ThermometerSnowflake className="w-8 h-8 text-[#D5B77A] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F4EBD8] mb-2">
                  -78.5°C Cryo-Lock Box
                </h3>
                <p className="text-xs text-[#F4EBD8]/70 font-light leading-relaxed">
                  Shipped in compostable mycelium packaging with solid carbon dioxide dry ice. Guaranteed -18°C arrival nationwide.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-[#07140E] border border-[#D5B77A]/25 hover:border-[#D5B77A]/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <Award className="w-8 h-8 text-[#D5B77A] mb-4" />
                <h3 className="font-serif text-xl font-medium text-[#F4EBD8] mb-2">
                  Haute Gastronomie Standard
                </h3>
                <p className="text-xs text-[#F4EBD8]/70 font-light leading-relaxed">
                  Collaborations with 3-Michelin-star restaurants, superyacht concierge, and international sommelier societies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. "PICK. DIP. TOP." BESPOKE ATELIER DIPPING SALON
          "Tahitian Vanilla gelato, 78% chuao dark, damask rose petals."
          - RESTORED REAL LUXURY ICE CREAM BAR PHOTO!
          - Specifically displaying the real couture Damask Rose & Pistachio bar
         ======================================================== */}
      <section id="customizer" className="py-24 px-4 sm:px-8 lg:px-14 bg-[#F4EBD8] text-[#242321]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A3038] block mb-2">
              BESPOKE ATELIER DIPPING SALON
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-medium text-[#242321] leading-tight">
              Pick. Dip. Top.
            </h2>
            <p className="text-base font-serif italic text-[#8A3038] mt-2">
              {customGelato} gelato, {customDip.toLowerCase()}, {customTopping.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: REAL LUXURY BAR PHOTO PREVIEW (RESTORED AS REQUESTED) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-white/90 rounded-sm border border-[#D5B77A]/40 shadow-2xl relative min-h-[480px]">
              <span className="absolute top-4 text-[10px] tracking-widest uppercase font-mono text-[#242321]/50">
                ✦ BESPOKE ATELIER CREATION ✦
              </span>

              <motion.div
                key={customTopping + customDip}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: isSurpriseActive ? [1, 1.08, 1] : 1,
                  rotate: isSurpriseActive ? [0, 6, -6, 0] : 0
                }}
                transition={{ duration: 0.45 }}
                className="relative flex flex-col items-center my-auto select-none"
              >
                {/* REAL HIGH-RESOLUTION ICE CREAM BAR PHOTOGRAPHY */}
                <img
                  src={getCustomizerPhoto()}
                  alt="Custom Gelato Bar"
                  className="w-[280px] sm:w-[320px] max-h-[440px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-105"
                />

                {/* Real-time Badge on Photo */}
                <div className="mt-2 px-4 py-1.5 rounded-full bg-[#07140E] text-[#D5B77A] text-[11px] font-sans font-bold uppercase tracking-wider shadow-lg flex items-center space-x-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{customGelato} • {customTopping}</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Interactive Pill Selectors */}
            <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#242321]/60 block mb-2.5">
                  1. SELECT GELATO BASE:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {gelatoOptions.map((g) => (
                    <button
                      key={g.name}
                      onClick={() => setCustomGelato(g.name)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center space-x-2 ${
                        customGelato === g.name
                          ? 'bg-[#07140E] text-[#D5B77A] shadow-md scale-105'
                          : 'bg-white border border-[#242321]/20 text-[#242321] hover:border-[#242321]'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: g.color }} />
                      <span>{g.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#242321]/60 block mb-2.5">
                  2. SELECT CHOCOLATE DIP:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {dipOptions.map((d) => (
                    <button
                      key={d}
                      onClick={() => setCustomDip(d)}
                      className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                        customDip === d
                          ? 'bg-[#07140E] text-[#D5B77A] shadow-md scale-105'
                          : 'bg-white border border-[#242321]/20 text-[#242321] hover:border-[#242321]'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#242321]/60 block mb-2.5">
                  3. SELECT HAND-GARNISHED TOPPING:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {toppingOptions.map((top) => (
                    <button
                      key={top}
                      onClick={() => setCustomTopping(top)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        customTopping === top
                          ? 'bg-[#07140E] text-[#D5B77A] shadow-md scale-105'
                          : 'bg-white border border-[#242321]/20 text-[#242321] hover:border-[#242321]'
                      }`}
                    >
                      {top}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBookCustomBar}
                  className="px-8 py-3.5 bg-[#07140E] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all text-xs font-bold uppercase tracking-widest rounded-sm shadow-xl flex items-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>BOOK THIS BAR ($10.50)</span>
                </button>

                <button
                  onClick={handleSurpriseMe}
                  className="px-6 py-3.5 bg-white border border-[#242321]/30 text-[#242321] hover:bg-[#242321] hover:text-[#F4EBD8] transition-all text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center space-x-1.5"
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>SURPRISE ME</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SHOP SECTION (Matching Navbar: SHOP)
          - Presentation Hampers & Tasting Flights
         ======================================================== */}
      <section id="shop" className="py-24 px-4 sm:px-6 lg:px-12 bg-[#171916] text-[#F4EBD8] border-t border-[#D5B77A]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-[#D5B77A] font-light block mb-2">
                Presentation Hampers & Flights
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#F4EBD8]">
                Shop Gift Collections
              </h2>
            </div>

            <button
              onClick={() => {
                onNavigate('shop');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="mt-4 md:mt-0 text-xs tracking-[0.2em] uppercase text-[#D5B77A] hover:text-[#FFF4DC] transition-colors flex items-center space-x-1.5 font-bold"
            >
              <span>View Full Shop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TASTING_FLIGHTS.map((flight) => (
              <div
                key={flight.id}
                className="p-8 rounded-sm bg-[#07140E] border border-[#D5B77A]/30 hover:border-[#D5B77A] transition-all flex flex-col justify-between shadow-2xl relative"
              >
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-[#D5B77A] font-bold block mb-1">
                    {flight.badge}
                  </span>
                  <h3 className="font-serif text-2xl font-medium text-[#F4EBD8] mb-2">
                    {flight.name}
                  </h3>
                  <p className="text-xs text-[#F4EBD8]/70 font-light leading-relaxed mb-4">
                    {flight.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D5B77A]/15 flex items-center justify-between">
                  <span className="font-serif text-2xl font-bold text-[#D5B77A]">${flight.price}.00</span>
                  <button
                    onClick={() => {
                      addToCart(PRODUCTS[0], 1, 'tasting-flight', flight.name);
                      setIsCartOpen(true);
                    }}
                    className="px-6 py-2.5 bg-[#D5B77A] text-[#07140E] hover:brightness-110 text-xs uppercase tracking-wider font-semibold rounded-sm shadow-xl transition-all"
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
          8. CONTACT & #PICKYOURVIBE CHOCOLATE SPLASH FINALE (Video Animation)
          - Dark Chocolate Swirl Splash Animation wrapping around signature bar
          - VIP Salon Concierge & Boutiques
         ======================================================== */}
      <footer id="contact" className="relative py-24 px-4 sm:px-8 lg:px-14 bg-[#07140E] text-[#F4EBD8] overflow-hidden border-t border-[#D5B77A]/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <span className="text-xs tracking-[0.3em] uppercase text-[#D5B77A] font-light mb-3">
            MAISON CEI SALONS & CONCIERGE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#F4EBD8] tracking-tight mb-6">
            #PICKYOURVIBE
          </h2>

          <p className="text-xs sm:text-sm text-[#F4EBD8]/70 font-light max-w-lg mb-8">
            Ginza Tokyo (Flagship) • Rue Saint-Honoré Paris • Mayfair London • Dubai Mall • Madison Avenue New York
          </p>

          {/* Center 3D Chocolate Splash Bar Showcase (Video Animation) */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center mb-10">
            <div className="absolute inset-0 rounded-full bg-[#D5B77A]/10 blur-[60px] pointer-events-none" />

            {/* Rotating Chocolate Splash Swirl SVG Ring */}
            <svg
              className="absolute inset-0 w-full h-full text-[#D5B77A]/30 animate-[spin_40s_linear_infinite]"
              viewBox="0 0 200 200"
              fill="currentColor"
            >
              <path
                d="M100 10 C150 10 190 50 190 100 C190 150 150 190 100 190 C50 190 10 150 10 100 C10 50 50 10 100 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray="20 10"
              />
            </svg>

            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10 flex flex-col items-center select-none"
            >
              <img
                src="/images/hero-ice-cream-bar.jpg"
                alt="CEI Signature Bar"
                className="w-32 sm:w-40 max-h-56 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
            </motion.div>
          </div>

          {/* Email Newsletter Box */}
          <div className="w-full max-w-md mb-12">
            <p className="text-xs text-[#F4EBD8]/70 mb-3 font-light">
              Receive private invitations to confidential micro-batch releases and secret salon tastings.
            </p>
            <div className="flex items-center rounded-sm bg-[#171916] border border-[#D5B77A]/30 p-1 focus-within:border-[#D5B77A] transition-colors">
              <input
                type="email"
                placeholder="ENTER YOUR PRIVATE EMAIL"
                className="w-full bg-transparent px-4 py-2.5 text-xs text-[#F4EBD8] placeholder:text-[#F4EBD8]/30 focus:outline-none uppercase tracking-wider font-sans"
              />
              <button
                className="px-5 py-2.5 bg-[#D5B77A] text-[#07140E] hover:brightness-110 font-bold text-xs uppercase tracking-wider rounded-sm shrink-0 transition-all flex items-center justify-center"
                aria-label="Submit Email"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Legal / Trademark */}
          <div className="w-full pt-8 border-t border-[#D5B77A]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EBD8]/40 space-y-4 sm:space-y-0">
            <div>
              © {new Date().getFullYear()} CEI Haute Glacerie S.A. All rights reserved. Worldwide protected trademark.
            </div>
            <div className="flex items-center space-x-6 text-[11px]">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Cryo-Chain Terms</span>
              <span>•</span>
              <span>Terroir Sourcing</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
