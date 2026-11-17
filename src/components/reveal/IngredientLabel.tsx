import React from 'react';
import { motion } from 'framer-motion';
import { IngredientLeaderLabel } from '../../types/reveal';

interface IngredientLabelProps {
  label: IngredientLeaderLabel;
  delay?: number;
}

export const IngredientLabel: React.FC<IngredientLabelProps> = ({ label, delay = 0 }) => {
  const isLeft = label.side === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.45, delay }}
      className="absolute pointer-events-none z-40 select-none"
      style={{
        top: `${label.labelY}%`,
        left: isLeft ? `${label.labelX}%` : undefined,
        right: !isLeft ? `${100 - label.labelX}%` : undefined,
        transform: 'translateY(-50%)'
      }}
    >
      {/* SVG Connecting Leader Line to Exploded Part */}
      <svg
        className="absolute top-1/2 overflow-visible pointer-events-none"
        style={{
          left: isLeft ? '100%' : 'auto',
          right: !isLeft ? '100%' : 'auto',
          width: '1px',
          height: '1px'
        }}
      >
        {/* Minimal Anchor Dot on the Exploded Ingredient */}
        <circle
          cx={isLeft ? `${(label.anchorX - label.labelX) * 2.8}px` : `-${(label.labelX - label.anchorX) * 2.8}px`}
          cy={`${(label.anchorY - label.labelY) * 2.8}px`}
          r="2.5"
          fill="#C5A46D"
        />

        {/* Minimal Line to Anchor Point */}
        <line
          x1="0"
          y1="0"
          x2={isLeft ? `${(label.anchorX - label.labelX) * 2.8}px` : `-${(label.labelX - label.anchorX) * 2.8}px`}
          y2={`${(label.anchorY - label.labelY) * 2.8}px`}
          stroke="rgba(197, 164, 109, 0.45)"
          strokeWidth="0.8"
        />
      </svg>

      {/* Clean Minimalist Editorial Label */}
      <div
        className={`px-2 py-0.5 rounded-sm bg-[#141312]/90 backdrop-blur-sm border border-white/10 shadow-md flex flex-col ${
          isLeft ? 'items-start text-left' : 'items-end text-right'
        } max-w-[145px] sm:max-w-[170px]`}
      >
        <div className="flex items-center space-x-1">
          <span className="w-1 h-1 rounded-full bg-[#C5A46D] inline-block shrink-0" />
          <span className="text-[9px] font-sans font-medium tracking-wider uppercase text-[#F5F2EB] leading-tight line-clamp-1">
            {label.title}
          </span>
        </div>
        <span className="text-[8px] font-serif italic text-[#C5A46D] mt-0.5 line-clamp-1">
          {label.provenance}
        </span>
      </div>
    </motion.div>
  );
};
