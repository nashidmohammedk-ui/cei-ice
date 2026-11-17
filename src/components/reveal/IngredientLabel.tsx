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
        {/* Glowing Anchor Dot on the Exploded Ingredient */}
        <circle
          cx={isLeft ? `${(label.anchorX - label.labelX) * 2.8}px` : `-${(label.labelX - label.anchorX) * 2.8}px`}
          cy={`${(label.anchorY - label.labelY) * 2.8}px`}
          r="3"
          fill="#D5B77A"
          className="animate-pulse"
        />
        <circle
          cx={isLeft ? `${(label.anchorX - label.labelX) * 2.8}px` : `-${(label.labelX - label.anchorX) * 2.8}px`}
          cy={`${(label.anchorY - label.labelY) * 2.8}px`}
          r="6"
          fill="none"
          stroke="#D5B77A"
          strokeWidth="0.8"
          opacity="0.6"
        />

        {/* Diagonal Line to Anchor Point */}
        <line
          x1="0"
          y1="0"
          x2={isLeft ? `${(label.anchorX - label.labelX) * 2.8}px` : `-${(label.labelX - label.anchorX) * 2.8}px`}
          y2={`${(label.anchorY - label.labelY) * 2.8}px`}
          stroke="#D5B77A"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.75"
        />
      </svg>

      {/* Champagne-Gold Frosted Badge Card */}
      <div
        className={`px-2.5 py-1 rounded-sm bg-black/85 backdrop-blur-md border border-[#D5B77A]/50 shadow-[0_4px_20px_rgba(0,0,0,0.8),0_0_12px_rgba(213,183,122,0.25)] flex flex-col ${
          isLeft ? 'items-start text-left' : 'items-end text-right'
        } max-w-[145px] sm:max-w-[170px]`}
      >
        <div className="flex items-center space-x-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] inline-block shrink-0" />
          <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-wider uppercase text-[#FFF5DE] leading-tight line-clamp-1">
            {label.title}
          </span>
        </div>
        <span className="text-[8px] sm:text-[8.5px] font-serif italic text-[#D5B77A]/90 mt-0.5 line-clamp-1">
          {label.provenance}
        </span>
      </div>
    </motion.div>
  );
};
