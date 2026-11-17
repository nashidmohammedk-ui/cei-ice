import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Sparkles, ShoppingBag, Check, Play, Pause } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface TastingVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TastingVideoModal: React.FC<TastingVideoModalProps> = ({ isOpen, onClose }) => {
  const { addToCart } = useCart();
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        modalVideoRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const heroStickProduct = PRODUCTS.find(p => p.id === 'cei-stick-chuao-caramel') || PRODUCTS[0];

  const layers = [
    {
      title: 'Crackled 78% Dark Chocolate Shell',
      origin: 'Chuao Valley, Venezuela',
      desc: 'Single-estate Criollo cacao, tempered to acoustic perfection for a crisp, sensory snap.'
    },
    {
      title: 'Roasted Caramelized Hazelnuts',
      origin: 'Langhe Hills, Piedmont, Italy',
      desc: 'Tonda Gentile Trilobata nuts, kiln-roasted in small batches and hand-crushed for unctuous crunch.'
    },
    {
      title: 'Slow-Simmered Golden Caramel Ribbon',
      origin: 'Guérande, Brittany, France',
      desc: 'Wildflower honey and Jersey butter simmered in copper kettles with Breton Fleur de Sel crystals.'
    },
    {
      title: 'Madagascar Vanilla Bean Gelato Core',
      origin: 'Sambava Coast, Madagascar',
      desc: 'Cold-macerated whole Tahitensis orchid beans with under 12% air overrun.'
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          className="relative w-full max-w-4xl bg-cei-dark border border-cei-gold/30 rounded-sm shadow-2xl overflow-hidden z-10 my-auto text-cei-cream flex flex-col md:flex-row"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full bg-cei-dark/70 text-cei-cream/70 hover:text-cei-gold hover:bg-cei-surface transition-all border border-cei-gold/20"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Cinematic Visual Preview */}
          <div className="md:w-7/12 relative bg-cei-surface min-h-[350px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
            <video
              ref={modalVideoRef}
              src="/videos/cei-flavour-transformation.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover filter brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cei-dark via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Play/Pause & Audio Control */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-cei-dark/80 backdrop-blur-sm border border-cei-gold/40 text-cei-gold hover:bg-cei-gold hover:text-cei-dark transition-all"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-cei-dark/80 backdrop-blur-sm border border-cei-gold/40 text-cei-gold hover:bg-cei-gold hover:text-cei-dark transition-all"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <div className="px-3 py-1 bg-cei-dark/90 backdrop-blur-sm border border-cei-gold/40 text-cei-gold text-[10px] tracking-widest uppercase font-serif">
                Flavour Transformation • 1080p Film
              </div>
            </div>
          </div>

          {/* Right: Deconstructed Layers Breakdown */}
          <div className="md:w-5/12 p-6 md:p-8 flex flex-col justify-between bg-cei-card/90">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-[10px] tracking-[0.25em] uppercase text-cei-gold font-light mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sensory Deconstruction</span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-cei-cream leading-tight">
                Anatomy of the Signature Stick
              </h3>

              <p className="text-xs text-cei-cream/70 font-light italic mt-1 mb-5">
                Click any layer to explore the botanical sourcing and craft.
              </p>

              {/* Interactive Layer Pills */}
              <div className="space-y-2.5">
                {layers.map((l, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveLayer(idx)}
                    className={`p-3 rounded-sm border cursor-pointer transition-all text-xs ${
                      activeLayer === idx
                        ? 'border-cei-gold bg-cei-gold/10 text-cei-gold'
                        : 'border-cei-gold/15 bg-cei-surface/50 text-cei-cream/70 hover:border-cei-gold/30'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-serif font-medium text-sm text-cei-cream">
                        {l.title}
                      </span>
                      <span className="text-[10px] text-cei-gold uppercase tracking-wider font-light">
                        {l.origin}
                      </span>
                    </div>
                    {activeLayer === idx && (
                      <p className="text-[11px] text-cei-cream/80 font-light leading-relaxed mt-1">
                        {l.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Add Bar to Cart */}
            <div className="pt-6 border-t border-cei-gold/20 flex flex-col gap-2.5">
              <div className="flex justify-between items-center">
                <span className="text-xs text-cei-cream/70">Single Handcrafted Bar</span>
                <span className="font-serif text-lg font-bold text-cei-gold">₹{heroStickProduct.price.toLocaleString('en-IN')}</span>
              </div>

              <button
                onClick={() => {
                  addToCart(heroStickProduct, 1, 'single-pint');
                  onClose();
                }}
                className="w-full py-3 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.2em] font-semibold uppercase rounded-sm shadow-xl flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add Bar to Case • ₹{heroStickProduct.price.toLocaleString('en-IN')}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
