import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { BOUTIQUES } from '../data/products';

interface BoutiqueModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBoutique: (boutiqueId: string) => void;
}

export const BoutiqueModal: React.FC<BoutiqueModalProps> = ({
  isOpen,
  onClose,
  onSelectBoutique,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl bg-cei-dark border border-cei-gold/30 rounded-sm shadow-2xl p-6 sm:p-8 z-10 my-auto text-cei-cream max-h-[90vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-cei-gold/20 pb-4 mb-6">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-light block mb-0.5">
                Kerala & India Flagship Salons
              </span>
              <h2 className="font-serif text-2xl font-medium text-cei-cream">
                CEI Boutiques & Tasting Salons
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-cei-cream/60 hover:text-cei-gold hover:bg-cei-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BOUTIQUES.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-sm bg-cei-surface/50 border border-cei-gold/15 hover:border-cei-gold/40 transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-lg text-cei-gold font-medium">
                      {b.city}
                    </h3>
                    <span className="text-[9px] px-2 py-0.5 bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 rounded-sm">
                      Open Today
                    </span>
                  </div>
                  <span className="text-[10px] tracking-wider text-cei-cream/50 uppercase block mb-2 font-light">
                    {b.district}
                  </span>

                  <div className="space-y-1.5 text-xs text-cei-cream/70 font-light">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-cei-gold shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{b.address}</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-3.5 h-3.5 text-cei-gold shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{b.hours}</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onSelectBoutique(b.id);
                    onClose();
                  }}
                  className="w-full py-2 bg-cei-surface border border-cei-gold/30 hover:border-cei-gold text-cei-gold text-xs uppercase tracking-wider font-semibold rounded-sm flex items-center justify-center space-x-1 transition-all"
                >
                  <span>View Details & Reserve</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
