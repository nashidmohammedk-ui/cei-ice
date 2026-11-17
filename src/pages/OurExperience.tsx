import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ThermometerSnowflake, Eye, X, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface OurExperienceProps {
  onNavigate: (page: string) => void;
}

export const OurExperience: React.FC<OurExperienceProps> = ({ onNavigate }) => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<'all' | 'pints' | 'churn' | 'moments'>('all');

  const galleryItems = [
    {
      id: 'g-1',
      category: 'pints',
      title: 'Imperial Bronte 24K Gold Crown',
      subtitle: 'Volcanic pistachio with edible gold leaf',
      image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1 md:col-span-2'
    },
    {
      id: 'g-2',
      category: 'churn',
      title: 'French Pot Low-RPM Freezing',
      subtitle: 'Brine circulation at -28°C',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1'
    },
    {
      id: 'g-3',
      category: 'moments',
      title: 'The Fort Kochi Flagship Tasting Counter',
      subtitle: 'Chilled marble and engraved brass trays',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1'
    },
    {
      id: 'g-4',
      category: 'pints',
      title: 'Chuao 78% Dark Ganache Churn',
      subtitle: 'Micro-density chocolate silk',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1 md:col-span-2'
    },
    {
      id: 'g-5',
      category: 'churn',
      title: 'Hand-Splitting Tahitensis Orchids',
      subtitle: 'Extracting seed caviar for 48h maceration',
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1'
    },
    {
      id: 'g-6',
      category: 'moments',
      title: 'Cryo-Box Unboxing Billow',
      subtitle: '-78.5°C solid dry-ice vapor release',
      image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=1200&q=85',
      span: 'col-span-1'
    }
  ];

  const filteredGallery = galleryItems.filter(
    (item) => activeGalleryFilter === 'all' || item.category === activeGalleryFilter
  );

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24">
      {/* Editorial Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center border-b border-cei-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cei-gold/30 bg-cei-surface/50 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cei-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-medium">
              The Sensory Ceremony
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-cei-cream mb-6">
            The CEI Experience
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-cei-cream/80 max-w-2xl font-light italic leading-relaxed">
            From the billow of cryogenic mist at your doorstep to the multi-sensory bloom of aromatic esters across the palate.
          </p>
        </div>
      </section>

      {/* 1. The Unboxing Ritual */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light">
              Phase I — The Unboxing Ritual
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream leading-tight">
              A Theatrical Opening of Solid Mist.
            </h2>
            <div className="w-16 h-[1px] bg-cei-gold/40" />
            <p className="text-sm text-cei-cream/80 leading-relaxed font-light">
              Every CEI shipment is treated as a temperature-critical gastronomic delivery. Pints are encased in certified compostable mycelium cold-cells enveloped by solid carbon dioxide dry ice blocks at -78.5°C.
            </p>
            <p className="text-sm text-cei-cream/80 leading-relaxed font-light">
              Upon lifting the gold foil-embossed lid, a cold cloud of icy vapor gently billows outward, preserving the pristine crystal lattice of the churned cream. Inside, you find our embossed tasting guide and gold engraved tasting spoons.
            </p>

            {/* Ritual Steps */}
            <div className="space-y-4 pt-4 border-t border-cei-gold/15 text-xs font-light">
              <div className="flex items-start space-x-3">
                <span className="font-serif text-sm font-semibold text-cei-gold">01</span>
                <div>
                  <h4 className="font-serif text-sm text-cei-cream font-medium">Break the Gold Wax Seal</h4>
                  <p className="text-cei-cream/60">Inspect the frozen indicator card to verify uninterrupted -18°C integrity.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-serif text-sm font-semibold text-cei-gold">02</span>
                <div>
                  <h4 className="font-serif text-sm text-cei-cream font-medium">The 3-Minute Temper</h4>
                  <p className="text-cei-cream/60">Allow the pint to breathe at room temperature for 180 seconds. High butterfat requires slight warmth to unlock volatility.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-serif text-sm font-semibold text-cei-gold">03</span>
                <div>
                  <h4 className="font-serif text-sm text-cei-cream font-medium">The Palette Bloom</h4>
                  <p className="text-cei-cream/60">Draw a shallow curl across the surface. Do not chew; let the silk liquefy against the roof of the mouth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-cei-gold/30 shadow-2xl bg-cei-surface">
              <img
                src="https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=1200&q=80"
                alt="Unboxing Ritual"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cei-dark via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cei-dark/90 backdrop-blur-sm border border-cei-gold/40 text-cei-gold text-[10px] tracking-widest uppercase font-serif mb-2">
                  <ThermometerSnowflake className="w-3.5 h-3.5" />
                  <span>-78.5°C Dry Ice Guarantee</span>
                </div>
                <h3 className="font-serif text-2xl text-cei-cream">
                  The Cryogenic Unboxing Experience
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Behind The Scenes & The Churn Room */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cei-charcoal/50 border-t border-b border-cei-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-2">
              Phase II — Atelier Craft
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream">
              Behind The Scenes: The Churn Room
            </h2>
            <p className="text-sm text-cei-cream/70 font-light mt-3">
              Where temperature physics, culinary chemistry, and generational French technique collide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-cei-gold uppercase font-light block mb-2">
                  Stage 01
                </span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  Infusion at 2°C
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Raw ingredients are never cooked or boiled with aggressive steam. We practice low-temperature cold steeping for 72 hours to safeguard delicate floral terpenes from heat degradation.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-cei-gold uppercase font-light block mb-2">
                  Stage 02
                </span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  Slow Pot Churning
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Inside cylindrical copper vessels surrounded by sub-zero glycol jackets, rotating silicone blades scrape the pot walls at microscopic tolerances, producing ice crystals smaller than 15 microns.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-widest text-cei-gold uppercase font-light block mb-2">
                  Stage 03
                </span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  Gold Foil Hand-Sealing
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Every pint is hand-poured, weighed to within 0.5 grams, immediately blast-frozen to -35°C in a cryogenic tunnel, and hermetically sealed with custom gold stamped foil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Gallery with Filterable Masonry & Lightbox */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-2">
                Visual Editorial
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream">
                Product Gallery
              </h2>
            </div>

            {/* Gallery Category Filter */}
            <div className="flex items-center space-x-2 mt-4 md:mt-0 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveGalleryFilter('all')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${
                  activeGalleryFilter === 'all'
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 border border-cei-gold/20'
                }`}
              >
                All Moments
              </button>
              <button
                onClick={() => setActiveGalleryFilter('pints')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${
                  activeGalleryFilter === 'pints'
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 border border-cei-gold/20'
                }`}
              >
                The Pints
              </button>
              <button
                onClick={() => setActiveGalleryFilter('churn')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${
                  activeGalleryFilter === 'churn'
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 border border-cei-gold/20'
                }`}
              >
                The Churn
              </button>
              <button
                onClick={() => setActiveGalleryFilter('moments')}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all ${
                  activeGalleryFilter === 'moments'
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 border border-cei-gold/20'
                }`}
              >
                The Boutiques
              </button>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedGalleryImage(item.image)}
                className={`group relative h-80 rounded-sm overflow-hidden border border-cei-gold/20 hover:border-cei-gold cursor-pointer transition-all ${item.span}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cei-dark via-cei-dark/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-cei-dark/90 border border-cei-gold text-cei-gold shadow-xl">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h4 className="font-serif text-lg font-medium text-cei-cream group-hover:text-cei-gold transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-cei-cream/60 font-light block">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Special Moments & Private Concierge */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cei-surface/40 border-t border-cei-gold/15">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-cei-gold/40 flex items-center justify-center text-cei-gold mb-6 bg-cei-dark">
            <Sparkles className="w-6 h-6" />
          </div>

          <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light mb-2">
            Private Hospitality & Celebrations
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream mb-6">
            Special Moments & Private Events
          </h2>

          <div className="w-20 h-[1px] bg-cei-gold/30 mb-8" />

          <p className="font-serif text-base sm:text-xl text-cei-cream/80 max-w-2xl font-light italic leading-relaxed mb-10">
            From superyacht provisioning in Monaco and the Caribbean to custom flavor development for Michelin galas, our Private Concierge crafts bespoke cold ceremonies for the world's most discerning hosts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full text-left mb-10">
            <div className="p-6 bg-cei-card/70 border border-cei-gold/15 rounded-sm">
              <h4 className="font-serif text-base text-cei-gold font-medium mb-1">
                Superyacht Provisions
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                Direct dockside cryogenic delivery in Cannes, Saint-Tropez, Dubai, and Miami.
              </p>
            </div>
            <div className="p-6 bg-cei-card/70 border border-cei-gold/15 rounded-sm">
              <h4 className="font-serif text-base text-cei-gold font-medium mb-1">
                Bespoke Wedding Flavours
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                Collaborate with our Master Gelatiere to formulate a custom botanical pint for your celebration.
              </p>
            </div>
            <div className="p-6 bg-cei-card/70 border border-cei-gold/15 rounded-sm">
              <h4 className="font-serif text-base text-cei-gold font-medium mb-1">
                Luxury Maison Events
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                Cartier, Chanel & private gallery VIP salon catering with our mobile marble tasting cart.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onNavigate('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.2em] font-bold uppercase rounded-sm shadow-xl flex items-center space-x-2"
          >
            <span>Inquire With Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGalleryImage && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-cei-surface border border-cei-gold/30 text-cei-gold hover:bg-cei-gold hover:text-cei-dark transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedGalleryImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-sm border border-cei-gold/40 shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
