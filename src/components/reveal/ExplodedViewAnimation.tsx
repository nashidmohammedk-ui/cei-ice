import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductRevealConfig } from '../../types/reveal';
import { IngredientLayer } from './IngredientLayer';
import { IngredientLabel } from './IngredientLabel';

interface ExplodedViewAnimationProps {
  config: ProductRevealConfig;
  isActive: boolean;
}

export const ExplodedViewAnimation: React.FC<ExplodedViewAnimationProps> = ({ config, isActive }) => {
  // Stage timeline:
  // 0: Idle
  // 1: (0-1s) Zoom & cinematic light
  // 2: (1-2s) Shell separation
  // 3: (2-3s) Core & filling reveal
  // 4: (3-5s) Floating ingredients exploded
  // 5: (5-8s) Labels & connecting lines visible
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    let t1: any, t2: any, t3: any, t4: any;

    if (isActive) {
      setStage(1); // 0s: Zoom forward
      t1 = setTimeout(() => setStage(2), 550); // ~0.8s: Shell begins separating
      t2 = setTimeout(() => setStage(3), 1300); // ~1.5s: Core emerges
      t3 = setTimeout(() => setStage(4), 2200); // ~2.5s: Ingredients bloom in exploded view
      t4 = setTimeout(() => setStage(5), 3500); // ~3.5s: Labels and leader lines appear
    } else {
      setStage(0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [isActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 3D Exploded Bar & Floating Ingredients */}
      <IngredientLayer config={config} stage={stage} />

      {/* Champagne-Gold Ingredient Leader Labels */}
      <AnimatePresence>
        {stage >= 5 && (
          <div className="absolute inset-0 pointer-events-none z-40">
            {config.leaderLabels.map((lbl, idx) => (
              <IngredientLabel key={lbl.id} label={lbl} delay={idx * 0.1} />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Top Banner indicating Interactive 3D Exploded View */}
      <div className="absolute top-3 left-3 z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-2.5 py-0.8 bg-black/85 backdrop-blur-md border border-[#D5B77A] text-[#D5B77A] text-[9px] tracking-widest uppercase font-mono flex items-center space-x-1.5 shadow-xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] animate-ping" />
          <span>3D EXPLODED VIEW • INGREDIENTS REVEAL</span>
        </motion.div>
      </div>

      {/* Bottom Capsule indicating flavour origin & collection */}
      <div className="absolute bottom-3 inset-x-4 mx-auto max-w-fit pointer-events-none z-40">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="px-3.5 py-1 rounded-full bg-black/90 backdrop-blur-md border border-[#D5B77A]/50 text-[#F4EBD8] text-[10px] tracking-wider font-mono shadow-2xl flex items-center space-x-2"
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: config.accentColor }} />
          <span>{config.collectionName} • {config.country}</span>
        </motion.div>
      </div>
    </div>
  );
};
