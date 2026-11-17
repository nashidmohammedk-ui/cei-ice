import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Gift, ThermometerSnowflake, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onProceedToCheckout }) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shipping,
    freeShippingThreshold,
    total,
    includeGiftWrap,
    setIncludeGiftWrap,
    includeTastingSpoons,
    setIncludeTastingSpoons
  } = useCart();

  const [customNote, setCustomNote] = useState('');
  const [showNoteInput, setShowNoteInput] = useState(false);

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const getItemPrice = (price: number, sizeOption: string) => {
    let multiplier = 1;
    if (sizeOption === 'tasting-flight') multiplier = 3.6;
    if (sizeOption === 'grand-cru-pack') multiplier = 5.2;
    return (price * multiplier).toFixed(2);
  };

  const getSizeLabel = (sizeOption: string) => {
    switch (sizeOption) {
      case 'tasting-flight': return 'Curated 4-Bar Presentation Box (4 x 95ml)';
      case 'grand-cru-pack': return 'Grand Connoisseur 6-Bar Hamper (6 x 95ml)';
      default: return 'Handcrafted Bar on Birchwood Stick (95ml)';
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80]"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-cei-dark border-l border-cei-gold/25 z-[90] flex flex-col justify-between shadow-2xl text-cei-cream"
          >
            {/* Header */}
            <div className="p-5 border-b border-cei-gold/15 flex items-center justify-between bg-cei-surface/40">
              <div className="flex items-center space-x-2.5">
                <div className="w-7 h-7 rounded-full border border-cei-gold/40 flex items-center justify-center bg-cei-dark">
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cei-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-lg tracking-wider text-cei-cream font-medium">
                    Cryo-Tasting Case
                  </h3>
                  <span className="text-[10px] tracking-widest text-cei-gold uppercase font-light">
                    {items.length} {items.length === 1 ? 'Selection' : 'Selections'} in Cold Transit
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full text-cei-cream/60 hover:text-cei-gold hover:bg-cei-gold/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="px-5 py-3 bg-cei-charcoal/60 border-b border-cei-gold/10 text-xs">
              <div className="flex justify-between items-center mb-1.5 font-light">
                <span className="text-cei-cream/80">
                  {remainingForFreeShipping > 0
                    ? `Add ₹${Math.round(remainingForFreeShipping).toLocaleString('en-IN')} for Complimentary Cryo-Freight Across Kerala & India`
                    : 'Complimentary Dry-Ice Delivery Unlocked Across India'}
                </span>
                <span className="text-cei-gold font-medium">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-cei-surface rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 text-cei-cream/60">
                  <div className="w-16 h-16 rounded-full border border-cei-gold/30 flex items-center justify-center bg-cei-surface text-cei-gold">
                    <ThermometerSnowflake className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-cei-cream font-medium">Your Case is Empty</h4>
                    <p className="text-xs text-cei-cream/50 mt-1 max-w-xs leading-relaxed font-light">
                      Explore our single-origin grand cru cacao, rare Tahitian vanilla, or volcanic pistachio collections.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-2.5 rounded-sm border border-cei-gold text-cei-gold hover:bg-cei-gold hover:text-cei-dark text-xs tracking-widest uppercase transition-all duration-300 font-medium"
                  >
                    Explore Flavours
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.sizeOption}`}
                    className="p-3.5 rounded-sm bg-cei-surface/50 border border-cei-gold/15 flex space-x-3.5 hover:border-cei-gold/30 transition-colors"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-18 h-18 object-cover rounded-sm border border-cei-gold/20 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-medium text-cei-cream leading-tight">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.sizeOption)}
                            className="text-cei-cream/40 hover:text-red-400 transition-colors p-0.5 ml-1"
                            title="Remove"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-[10px] tracking-wider text-cei-gold/80 block mt-0.5 font-light">
                          {getSizeLabel(item.sizeOption)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-3">
                        {/* Quantity Buttons */}
                        <div className="flex items-center space-x-2 border border-cei-gold/25 rounded-sm px-1.5 py-0.5 bg-cei-dark/60">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.sizeOption, -1)}
                            className="text-cei-cream/60 hover:text-cei-gold transition-colors p-0.5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium px-1.5 text-cei-cream">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.sizeOption, 1)}
                            className="text-cei-cream/60 hover:text-cei-gold transition-colors p-0.5"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-serif text-sm font-semibold text-cei-gold">
                          ₹{(Math.round(Number(getItemPrice(item.product.price, item.sizeOption)) * item.quantity)).toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {/* Complimentary Luxury Add-ons */}
              {items.length > 0 && (
                <div className="pt-2 border-t border-cei-gold/15 space-y-2.5">
                  <div className="flex items-center justify-between text-xs p-2.5 rounded-sm bg-cei-charcoal/40 border border-cei-gold/10">
                    <div className="flex items-center space-x-2">
                      <Gift className="w-4 h-4 text-cei-gold" />
                      <span className="text-cei-cream/90 font-light">
                        Complimentary Gold Ribbon Gift Box
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIncludeGiftWrap(!includeGiftWrap)}
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        includeGiftWrap ? 'bg-cei-gold' : 'bg-cei-surface'
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-cei-dark transition-transform ${
                          includeGiftWrap ? 'translate-x-3.5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs p-2.5 rounded-sm bg-cei-charcoal/40 border border-cei-gold/10">
                    <div className="flex items-center space-x-2">
                      <Utensils className="w-4 h-4 text-cei-gold" />
                      <span className="text-cei-cream/90 font-light">
                        Engraved Gold Tasting Spoons (Pack of 2)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIncludeTastingSpoons(!includeTastingSpoons)}
                      className={`w-8 h-4.5 rounded-full p-0.5 transition-colors ${
                        includeTastingSpoons ? 'bg-cei-gold' : 'bg-cei-surface'
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full bg-cei-dark transition-transform ${
                          includeTastingSpoons ? 'translate-x-3.5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Gift Card Message toggle */}
                  <div className="pt-1">
                    {!showNoteInput ? (
                      <button
                        onClick={() => setShowNoteInput(true)}
                        className="text-[11px] text-cei-gold hover:underline font-light flex items-center space-x-1"
                      >
                        <span>+ Add Handwritten Calligraphy Gift Card (Complimentary)</span>
                      </button>
                    ) : (
                      <div className="space-y-1.5 pt-1">
                        <textarea
                          value={customNote}
                          onChange={(e) => setCustomNote(e.target.value)}
                          placeholder="Write your gift message for the recipient..."
                          rows={2}
                          className="w-full text-xs bg-cei-surface border border-cei-gold/30 rounded-sm p-2 text-cei-cream placeholder:text-cei-cream/30 focus:outline-none focus:border-cei-gold"
                        />
                        <button
                          onClick={() => setShowNoteInput(false)}
                          className="text-[10px] text-cei-cream/50 hover:text-cei-gold uppercase tracking-wider"
                        >
                          Save Message
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-5 border-t border-cei-gold/20 bg-cei-surface/70 space-y-3">
                {/* Cold Chain Guarantee Badge */}
                <div className="flex items-center space-x-2 text-[11px] text-cei-gold/90 font-light">
                  <ShieldCheck className="w-4 h-4 text-cei-gold shrink-0" />
                  <span>Guaranteed -18°C arrival or instant artisanal replacement.</span>
                </div>

                <div className="space-y-1.5 text-xs text-cei-cream/70 pt-1 font-light">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-serif text-sm font-medium text-cei-cream">₹{Math.round(subtotal).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cryogenic Dry-Ice Freight</span>
                    <span className="font-serif text-sm font-medium text-cei-cream">
                      {shipping === 0 ? <span className="text-cei-gold">Complimentary</span> : `₹${Math.round(shipping).toLocaleString('en-IN')}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-cei-cream pt-2 border-t border-cei-gold/15">
                    <span className="font-serif text-base text-cei-gold">Total (INR)</span>
                    <span className="font-serif text-lg font-bold text-cei-gold">₹{Math.round(total).toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    onProceedToCheckout();
                  }}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 transition-all font-sans text-xs tracking-[0.2em] font-semibold uppercase rounded-sm shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>Proceed to Cryo-Checkout</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
