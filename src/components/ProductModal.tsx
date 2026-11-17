import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShieldCheck, Thermometer, Wine, Sparkles, Check, Heart } from 'lucide-react';
import { Product, CartItem } from '../types';
import { useCart } from '../context/CartContext';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<CartItem['sizeOption']>('single-pint');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'provenance' | 'nutrition'>('profile');

  if (!product) return null;

  const getPriceMultiplier = (size: CartItem['sizeOption']) => {
    if (size === 'tasting-flight') return 3.6;
    if (size === 'grand-cru-pack') return 5.2;
    return 1;
  };

  const currentPrice = (product.price * getPriceMultiplier(selectedSize) * quantity).toFixed(2);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-4xl bg-cei-dark border border-cei-gold/30 rounded-sm shadow-2xl overflow-hidden z-10 my-auto text-cei-cream max-h-[92vh] flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-cei-dark/70 text-cei-cream/70 hover:text-cei-gold hover:bg-cei-surface transition-all border border-cei-gold/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Column: Image Showcase */}
          <div className="md:w-1/2 relative bg-cei-surface/50 min-h-[300px] md:min-h-[520px] flex items-center justify-center p-8 overflow-hidden">
            {/* Ambient gold glow */}
            <div className="absolute w-72 h-72 rounded-full bg-cei-gold/10 blur-[80px] pointer-events-none" />

            <div className="relative group w-full h-full flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[420px] object-cover rounded-sm border border-cei-gold/30 shadow-2xl transition-transform duration-700 group-hover:scale-105"
              />

              {product.badge && (
                <div className="absolute top-3 left-3 px-3 py-1 bg-cei-dark/90 backdrop-blur-sm border border-cei-gold/40 text-cei-gold text-[10px] tracking-widest uppercase font-serif">
                  {product.badge}
                </div>
              )}

              {/* Wishlist button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-3 right-3 p-2 rounded-full bg-cei-dark/80 backdrop-blur-sm border border-cei-gold/30 text-cei-gold hover:bg-cei-gold hover:text-cei-dark transition-all"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-cei-gold' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right Column: Gourmet Details & Ordering */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Category & French Name */}
              <div className="flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-cei-gold font-light mb-1">
                <span>{product.collectionTitle}</span>
                <span>•</span>
                <span className="font-serif italic capitalize">{product.provenance.country}</span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl font-medium text-cei-cream leading-tight">
                {product.name}
              </h2>

              <p className="font-serif italic text-xs text-cei-gold/80 mt-1">
                {product.frenchName}
              </p>

              {/* Rating & Reviews */}
              <div className="flex items-center space-x-3 mt-3 text-xs">
                <div className="flex items-center text-cei-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-cei-gold" />
                  ))}
                  <span className="ml-1.5 font-semibold text-cei-cream">{product.rating}</span>
                </div>
                <span className="text-cei-cream/40">•</span>
                <span className="text-cei-cream/60 font-light">
                  {product.reviewsCount} Connoisseur Critiques
                </span>
              </div>

              {/* Tagline */}
              <p className="text-xs text-cei-cream/70 font-light leading-relaxed mt-3 border-l-2 border-cei-gold/40 pl-3 italic">
                "{product.tagline}"
              </p>

              {/* Navigation Tabs */}
              <div className="flex border-b border-cei-gold/20 mt-5 text-xs font-light tracking-wider">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`pb-2 mr-5 transition-colors uppercase text-[11px] ${
                    activeTab === 'profile'
                      ? 'border-b-2 border-cei-gold text-cei-gold font-medium'
                      : 'text-cei-cream/60 hover:text-cei-cream'
                  }`}
                >
                  Tasting Pyramid
                </button>
                <button
                  onClick={() => setActiveTab('provenance')}
                  className={`pb-2 mr-5 transition-colors uppercase text-[11px] ${
                    activeTab === 'provenance'
                      ? 'border-b-2 border-cei-gold text-cei-gold font-medium'
                      : 'text-cei-cream/60 hover:text-cei-cream'
                  }`}
                >
                  Terroir & Craft
                </button>
                <button
                  onClick={() => setActiveTab('nutrition')}
                  className={`pb-2 transition-colors uppercase text-[11px] ${
                    activeTab === 'nutrition'
                      ? 'border-b-2 border-cei-gold text-cei-gold font-medium'
                      : 'text-cei-cream/60 hover:text-cei-cream'
                  }`}
                >
                  Allergens & Purity
                </button>
              </div>

              {/* Tab Contents */}
              <div className="py-4 text-xs font-light">
                {activeTab === 'profile' && (
                  <div className="space-y-3">
                    <div className="p-3 bg-cei-surface/60 rounded-sm border border-cei-gold/15 space-y-2">
                      <div className="flex items-start">
                        <span className="w-16 text-[10px] tracking-wider uppercase text-cei-gold font-semibold shrink-0">
                          Top:
                        </span>
                        <span className="text-cei-cream/80">{product.notes.top}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-16 text-[10px] tracking-wider uppercase text-cei-gold font-semibold shrink-0">
                          Heart:
                        </span>
                        <span className="text-cei-cream/80">{product.notes.heart}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="w-16 text-[10px] tracking-wider uppercase text-cei-gold font-semibold shrink-0">
                          Base:
                        </span>
                        <span className="text-cei-cream/80">{product.notes.base}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-cei-gold/90 text-[11px]">
                      <Wine className="w-4 h-4 shrink-0 text-cei-gold" />
                      <div>
                        <span className="font-semibold uppercase tracking-wider text-[10px] text-cei-gold block">
                          Sommelier Pairing:
                        </span>
                        <span className="text-cei-cream/80">{product.details.sommelierPairing}</span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-cei-cream/70 text-[11px]">
                      <Thermometer className="w-4 h-4 shrink-0 text-cei-gold" />
                      <div>
                        <span className="font-semibold uppercase tracking-wider text-[10px] text-cei-gold block">
                          Serving Temperature:
                        </span>
                        <span>{product.details.tastingRitual}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'provenance' && (
                  <div className="space-y-3 leading-relaxed text-cei-cream/80">
                    <p>{product.details.description}</p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                      <div className="p-2 bg-cei-surface/50 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-gold block font-semibold text-[10px] uppercase">Terroir:</span>
                        <span>{product.provenance.region}, {product.provenance.country}</span>
                      </div>
                      <div className="p-2 bg-cei-surface/50 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-gold block font-semibold text-[10px] uppercase">Micro-Overrun:</span>
                        <span>{product.details.overrun}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'nutrition' && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {product.details.dietary.map((d, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-sm bg-cei-surface border border-cei-gold/20 text-cei-gold text-[10px] tracking-wider uppercase font-medium"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-cei-cream/70">
                      <span className="text-cei-gold font-semibold uppercase text-[10px] block mb-1">
                        Allergens:
                      </span>
                      {product.details.allergens.length > 0
                        ? product.details.allergens.join(', ')
                        : 'Zero common allergens (Manufactured in pure allergen-segregated room).'}
                    </div>

                    <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px]">
                      <div className="p-1.5 bg-cei-surface/40 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-cream/50 block">Calories</span>
                        <span className="font-semibold text-cei-cream">{product.details.nutrition.calories}</span>
                      </div>
                      <div className="p-1.5 bg-cei-surface/40 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-cream/50 block">Butterfat</span>
                        <span className="font-semibold text-cei-cream">{product.details.nutrition.fat}</span>
                      </div>
                      <div className="p-1.5 bg-cei-surface/40 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-cream/50 block">Natural Sugars</span>
                        <span className="font-semibold text-cei-cream">{product.details.nutrition.sugars}</span>
                      </div>
                      <div className="p-1.5 bg-cei-surface/40 border border-cei-gold/10 rounded-sm">
                        <span className="text-cei-cream/50 block">Protein</span>
                        <span className="font-semibold text-cei-cream">{product.details.nutrition.protein}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Size Selector */}
              <div className="pt-2 border-t border-cei-gold/15">
                <span className="text-[10px] tracking-widest uppercase text-cei-gold font-semibold block mb-2">
                  Select Presentation Format:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedSize('single-pint')}
                    className={`p-2 text-left rounded-sm border text-xs transition-all ${
                      selectedSize === 'single-pint'
                        ? 'border-cei-gold bg-cei-gold/10 text-cei-gold'
                        : 'border-cei-gold/20 text-cei-cream/70 hover:border-cei-gold/40'
                    }`}
                  >
                    <span className="block font-medium">Single Bar</span>
                    <span className="text-[10px] text-cei-cream/50">95 ml</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSize('tasting-flight')}
                    className={`p-2 text-left rounded-sm border text-xs transition-all ${
                      selectedSize === 'tasting-flight'
                        ? 'border-cei-gold bg-cei-gold/10 text-cei-gold'
                        : 'border-cei-gold/20 text-cei-cream/70 hover:border-cei-gold/40'
                    }`}
                  >
                    <span className="block font-medium">4-Bar Box</span>
                    <span className="text-[10px] text-cei-cream/50">4 x 95 ml</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedSize('grand-cru-pack')}
                    className={`p-2 text-left rounded-sm border text-xs transition-all ${
                      selectedSize === 'grand-cru-pack'
                        ? 'border-cei-gold bg-cei-gold/10 text-cei-gold'
                        : 'border-cei-gold/20 text-cei-cream/70 hover:border-cei-gold/40'
                    }`}
                  >
                    <span className="block font-medium">6-Bar Hamper</span>
                    <span className="text-[10px] text-cei-cream/50">6 x 95 ml</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Add to Cart & Total */}
            <div className="pt-6 border-t border-cei-gold/20 flex items-center justify-between gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center space-x-2 border border-cei-gold/30 rounded-sm px-2 py-1.5 bg-cei-surface">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-cei-cream/60 hover:text-cei-gold text-base font-bold px-1"
                >
                  -
                </button>
                <span className="text-xs font-semibold px-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-cei-cream/60 hover:text-cei-gold text-base font-bold px-1"
                >
                  +
                </button>
              </div>

              {/* Price and CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-5 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 transition-all font-sans text-xs tracking-[0.15em] font-semibold uppercase rounded-sm shadow-xl flex items-center justify-between"
              >
                <span>Add to Cryo-Case</span>
                <span className="font-serif text-sm font-bold">${currentPrice}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
