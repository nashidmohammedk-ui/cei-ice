import React, { useState } from 'react';
import { Sparkles, ThermometerSnowflake, Gift, Check, ShieldCheck, ArrowRight, Package } from 'lucide-react';
import { PRODUCTS, CATEGORIES, TASTING_FLIGHTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ShopProps {
  onQuickView: (product: Product) => void;
  onProceedToCheckout: () => void;
}

export const Shop: React.FC<ShopProps> = ({ onQuickView, onProceedToCheckout }) => {
  const { addToCart, totalItems, subtotal, setIsCartOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = PRODUCTS.filter(
    (product) => activeCategory === 'all' || product.collection === activeCategory
  );

  const handleAddFlight = (flightId: string) => {
    // Add flight items into cart as tasting flight
    const sampleProduct = flightId === 'flight-discovery' ? PRODUCTS[0] : PRODUCTS[2];
    addToCart(sampleProduct, 1, 'tasting-flight', 'Gift Flight Collection');
  };

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24 min-h-screen">
      {/* Editorial Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 text-center border-b border-cei-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cei-gold/30 bg-cei-surface/50 mb-3">
            <ThermometerSnowflake className="w-3.5 h-3.5 text-cei-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-medium">
              Cryogenic Cold Delivery
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium tracking-tight text-cei-cream mb-4">
            Couture Bars & Gifting
          </h1>

          <p className="font-serif text-base sm:text-xl text-cei-cream/70 max-w-2xl font-light italic leading-relaxed">
            Order individual artisanal bars on engraved birchwood sticks or curated presentation hampers. Shipped in solid carbon dioxide dry-ice travel cases for 48-hour frozen arrival.
          </p>

          {/* Quick Floating Cart Banner if user has items */}
          {totalItems > 0 && (
            <div className="mt-6 inline-flex items-center space-x-4 px-5 py-2.5 rounded-full bg-cei-surface border border-cei-gold/50 shadow-xl">
              <span className="text-xs text-cei-cream font-light">
                {totalItems} items in your case (${subtotal.toFixed(2)})
              </span>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-xs text-cei-gold hover:underline font-semibold uppercase tracking-wider flex items-center space-x-1"
              >
                <span>View Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Tasting Flight Hampers Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 text-xs tracking-widest uppercase text-cei-gold font-light mb-6">
          <Gift className="w-4 h-4 text-cei-gold" />
          <span>Curated Tasting Hampers & Flight Sets</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TASTING_FLIGHTS.map((flight) => (
            <div
              key={flight.id}
              className="p-8 rounded-sm bg-gradient-to-br from-cei-surface via-cei-card to-cei-surface border border-cei-gold/30 hover:border-cei-gold/60 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 px-3 py-1 bg-cei-dark/90 border border-cei-gold/40 text-cei-gold text-[10px] tracking-widest uppercase font-serif">
                {flight.badge}
              </div>

              <div>
                <span className="text-[10px] tracking-[0.25em] uppercase text-cei-gold font-light block mb-1">
                  Presentation Hamper
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cei-cream mb-2">
                  {flight.name}
                </h3>
                <p className="text-xs text-cei-cream/70 font-light leading-relaxed mb-6">
                  {flight.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[10px] tracking-widest uppercase text-cei-gold block font-semibold">
                    Flavours Included:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-cei-cream/80 font-light">
                    {flight.items.map((fl, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-3.5 h-3.5 text-cei-gold shrink-0" />
                        <span>{fl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-cei-gold/15 flex items-center justify-between">
                <div>
                  <span className="text-xs text-cei-cream/50 line-through mr-2">
                    ${flight.originalPrice}.00
                  </span>
                  <span className="font-serif text-2xl font-bold text-cei-gold">
                    ${flight.price}.00
                  </span>
                </div>
                <button
                  onClick={() => handleAddFlight(flight.id)}
                  className="px-6 py-3 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.15em] font-semibold uppercase rounded-sm shadow-xl flex items-center space-x-2"
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Add Hamper</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Pints Catalogue */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-cei-gold/15">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-1">
              Select By Collection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cei-cream">
              Handcrafted Couture Bars (95ml)
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 hover:text-cei-cream border border-cei-gold/20'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </section>

      {/* Cryo Freight & Cold Chain Assurance Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="p-8 rounded-sm bg-cei-card/60 border border-cei-gold/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full border border-cei-gold/30 flex items-center justify-center text-cei-gold bg-cei-dark shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base text-cei-cream font-medium">
                Complimentary Dry-Ice Delivery On Orders Over $80
              </h4>
              <p className="text-xs text-cei-cream/60 font-light mt-0.5">
                Every pint remains at -18°C throughout transit. Guaranteed cold arrival anywhere nationwide.
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="px-6 py-3 border border-cei-gold text-cei-gold hover:bg-cei-gold hover:text-cei-dark transition-all text-xs tracking-[0.2em] uppercase font-semibold rounded-sm shrink-0"
          >
            Review Cryo-Case
          </button>
        </div>
      </section>
    </div>
  );
};
