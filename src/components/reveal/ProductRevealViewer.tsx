import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCT_REVEAL_CONFIGS } from './ProductAnimationController';
import { ExplodedViewAnimation } from './ExplodedViewAnimation';

interface ProductRevealViewerProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductRevealViewer: React.FC<ProductRevealViewerProps> = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileLocked, setIsMobileLocked] = useState(false);

  // Active if hovered on desktop OR locked via tap on mobile
  const isActive = isHovered || isMobileLocked;

  // Retrieve product-specific 3D configuration
  const config = PRODUCT_REVEAL_CONFIGS[product.id] || PRODUCT_REVEAL_CONFIGS['cei-bar-utopia-double-hazelnut'];

  const handleCardClick = (e: React.MouseEvent) => {
    // If mobile or click on card, toggle locked state
    if (window.innerWidth < 768) {
      e.stopPropagation();
      setIsMobileLocked(!isMobileLocked);
    }
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-[#07140E] cursor-pointer select-none flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Background Ambient Aura */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07140E] via-transparent to-transparent opacity-80 z-5 pointer-events-none" />

      {/* Static Badge / Touch Hint (when NOT active) */}
      <AnimatePresence>
        {!isActive && (
          <>
            {/* Top-Left: Static Product Badge */}
            {product.badge && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-3 left-3 z-30 pointer-events-none px-2.5 py-0.8 bg-[#07140E]/90 backdrop-blur-sm border border-[#D5B77A]/40 text-[#D5B77A] text-[9px] tracking-widest uppercase font-serif"
              >
                {product.badge}
              </motion.div>
            )}

            {/* Top-Right: TOUCH TO REVEAL hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              className="absolute top-3 right-3 z-30 pointer-events-none"
            >
              <span className="text-[8px] tracking-widest uppercase font-mono px-2.5 py-0.8 rounded-full bg-black/70 border border-[#D5B77A]/40 text-[#D5B77A] shadow-lg">
                TOUCH TO REVEAL
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Close Button when locked open */}
      <AnimatePresence>
        {isMobileLocked && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileLocked(false);
            }}
            className="absolute top-3 right-3 z-50 p-1.5 rounded-full bg-black/85 border border-[#D5B77A] text-[#D5B77A] shadow-xl md:hidden"
            aria-label="Close Exploded View"
          >
            <X className="w-3.5 h-3.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ========================================================
          EXPLODED 3D VIEW VS STATIC PHOTOGRAPH
         ======================================================== */}
      <AnimatePresence mode="wait">
        {isActive ? (
          /* Realistic 3D Exploded View with Floating Ingredients & Leader Labels */
          <motion.div
            key="3d-exploded-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <ExplodedViewAnimation config={config} isActive={isActive} />
          </motion.div>
        ) : (
          /* Pristine Luxury Static Photograph */
          <motion.div
            key="static-photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative flex items-center justify-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Subtle Sheen Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Discover Notes Overlay Button (Desktop only on hover when not locked) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onQuickView(product);
          }}
          className="px-4 py-2 bg-[#07140E]/95 border border-[#D5B77A] text-[#D5B77A] text-xs tracking-widest uppercase font-sans rounded-sm hover:bg-[#D5B77A] hover:text-[#07140E] transition-all flex items-center space-x-1.5 shadow-xl font-semibold pointer-events-auto mt-24 opacity-0 group-hover:opacity-100"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Discover Notes</span>
        </button>
      </div>
    </div>
  );
};
