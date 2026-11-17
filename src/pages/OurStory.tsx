import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, ShieldCheck, Heart, Leaf, Award, ArrowRight } from 'lucide-react';

interface OurStoryProps {
  onNavigate: (page: string) => void;
}

export const OurStory: React.FC<OurStoryProps> = ({ onNavigate }) => {
  const ingredients = [
    {
      title: 'Chuao Valley Criollo Cacao',
      origin: 'Chuao, Aragua, Venezuela',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
      description: 'Grown in an isolated maritime valley accessible only by coastal pirogue boats. Fermented for seven days in native cedar troughs to unlock dried cherry and roasted espresso notes.'
    },
    {
      title: 'Volcanic Bronte Pistachios DOP',
      origin: 'Mount Etna, Sicily, Italy',
      image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=800&q=80',
      description: 'Harvested only in odd years from ancient trees rooted directly in volcanic basalt lava stone. Stone-milled in granite wheels without artificial coloring or chemical extracts.'
    },
    {
      title: 'Sun-Cured Tahitensis Vanilla Orchids',
      origin: 'Raiatea, French Polynesia',
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=800&q=80',
      description: 'Plump, oily orchid pods hand-pollinated and massaged under Polynesian trade winds for nine months. Prized for ethereal lilac, anisic, and cherry blossom top notes.'
    },
    {
      title: 'Jersey Island Sweet Meadow Cream',
      origin: 'Channel Islands Heritage Farms',
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=800&q=80',
      description: 'Grass-fed heritage Jersey cows produce milk with over 5.4% natural butterfat and natural beta-carotene, bestowing a silky, golden hue and clean dairy finish.'
    }
  ];

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24">
      {/* Editorial Page Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center border-b border-cei-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cei-gold/30 bg-cei-surface/50 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cei-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-medium">
              Maison Heritage & Craft
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-cei-cream mb-6">
            The Pursuit of Pure Cold Perfection.
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-cei-cream/80 max-w-2xl font-light italic leading-relaxed">
            "We did not set out to make ice cream. We set out to liberate the sacred aromatics of the world’s most noble botanicals through cold gastronomy."
          </p>
        </div>
      </section>

      {/* 1. Our Story & Our Beginning */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-cei-gold/30 shadow-2xl bg-cei-card">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="CEI Paris Atelier"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cei-dark via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-light block">
                  Fort Kochi Heritage Quarter, Kerala
                </span>
                <span className="font-serif text-xl text-cei-cream">
                  The Malabar Atelier of Cold Gastronomy
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light">
              Chapter I — Our Beginning
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cei-cream leading-tight">
              From Malabar Spice Routes to Haute Glacerie.
            </h2>
            <div className="w-16 h-[1px] bg-cei-gold/40" />
            <p className="text-sm text-cei-cream/80 leading-relaxed font-light">
              CEI was born along the historic spice waterfront of Fort Kochi, Kerala. For over two thousand years, the Malabar Coast stood as the epicentre of the global spice trade. While commercial ice cream had surrendered to mass industrial shortcuts—50% pumped atmospheric air, artificial gums, and synthetic extracts—we set out to craft pure handheld luxury.
            </p>
            <p className="text-sm text-cei-cream/80 leading-relaxed font-light">
              Trained under classical French pastry masters in Paris and generational gelatieri in Florence, our founders established our flagship atelier in Fort Kochi. Here, classical European cold churn craftsmanship merges with India's most extraordinary terroirs—Wayanad orchid vanilla, Malabar roast cacao, Idukki hill honey, and farm-fresh Kerala dairy cream.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cei-gold/15">
              <div>
                <span className="font-serif text-2xl font-bold text-cei-gold block">18 Litres</span>
                <span className="text-[11px] text-cei-cream/60 uppercase tracking-wider font-light">
                  Max Batch Volume per Churn
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-cei-gold block">72 Hours</span>
                <span className="text-[11px] text-cei-cream/60 uppercase tracking-wider font-light">
                  Cold Infusion Window
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cei-charcoal/50 border-t border-b border-cei-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-2">
              Chapter II — Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream">
              The Physics & Art of Cold Density
            </h2>
            <p className="text-sm text-cei-cream/70 font-light mt-3">
              Why overrun density defines the difference between cheap ice cream and fine dining glacé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-cei-gold mb-4 block">01</span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  Sub-15% Air Overrun
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Supermarket pints contain up to 100% overrun—meaning half the pint you buy is literally air. CEI maintains a strict 12% to 15% overrun. The result is pure, unyielding silk that lingers on the palate for minutes.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-cei-gold mb-4 block">02</span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  72-Hour Slow Steep
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Instead of industrial extracts, whole Tahitian vanilla orchids, hand-cracked cocoa nibs, and wild mint are cold-macerated inside raw Jersey milk for three days at 2°C to coax out subtle volatile esters.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-sm bg-cei-card/80 border border-cei-gold/20 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-light text-cei-gold mb-4 block">03</span>
                <h3 className="font-serif text-xl font-medium text-cei-cream mb-3">
                  French Pot Slow Churning
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                  Our custom freezing pots spin at 45 RPM inside a cryogenic brine mantle. Microscopic ice crystals form so tiny that they remain completely imperceptible to human touch receptors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quality Ingredients */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-2">
              Chapter III — Sourcing
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream">
              Quality Ingredients Without Compromise
            </h2>
            <p className="text-sm text-cei-cream/70 font-light mt-3">
              Direct relationship contracts with the Earth's most dedicated agricultural stewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ingredients.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-sm bg-cei-card/60 border border-cei-gold/20 hover:border-cei-gold/50 transition-all flex flex-col sm:flex-row gap-6 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-36 h-36 object-cover rounded-sm border border-cei-gold/25 shrink-0"
                />
                <div className="flex-1">
                  <span className="text-[10px] tracking-widest text-cei-gold uppercase font-light block mb-1">
                    {item.origin}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-cei-cream mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Promise */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cei-surface/40 border-t border-cei-gold/15 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-cei-gold/40 flex items-center justify-center text-cei-gold mb-6 bg-cei-dark">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light mb-2">
            Chapter IV — The CEI Guarantee
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream mb-6">
            Our Unwavering Promise
          </h2>

          <div className="w-20 h-[1px] bg-cei-gold/30 mb-8" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full text-left">
            <div className="p-6 rounded-sm bg-cei-dark/60 border border-cei-gold/15">
              <h4 className="font-serif text-lg font-medium text-cei-gold mb-2">
                Zero Artificial Stabilizers
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                No guar gum, locust bean gum, xanthan, or soy lecithin. Only pure dairy fat, pasture-raised egg yolks, and botanical nectar.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-cei-dark/60 border border-cei-gold/15">
              <h4 className="font-serif text-lg font-medium text-cei-gold mb-2">
                100% Sustainable Packaging
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                Insulated using natural upcycled mycelium mushroom blocks that dissolve in backyard soil within 45 days.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-cei-dark/60 border border-cei-gold/15">
              <h4 className="font-serif text-lg font-medium text-cei-gold mb-2">
                Cryo-Integrity Arrival
              </h4>
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed">
                If your order does not arrive frozen rock-solid at -18°C or below, we dispatch a fresh batch via courier immediately.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              onNavigate('flavours');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="mt-12 px-8 py-4 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.2em] font-bold uppercase rounded-sm shadow-xl flex items-center space-x-2"
          >
            <span>Taste The Difference</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
