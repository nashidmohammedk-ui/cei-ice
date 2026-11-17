import React from 'react';
import { motion } from 'framer-motion';
import { ProductRevealConfig, FloatingIngredientSpec } from '../../types/reveal';

interface IngredientLayerProps {
  config: ProductRevealConfig;
  stage: number; // 0: Idle, 1: Zoom, 2: Shell Separating, 3: Core Emerging, 4: Exploded Ingredients, 5: Labels Visible
}

export const IngredientLayer: React.FC<IngredientLayerProps> = ({ config, stage }) => {
  const isSeparated = stage >= 2;
  const isCoreRevealed = stage >= 3;
  const isExploded = stage >= 4;

  const { shell, core, ingredients } = config;

  // Render high-fidelity SVG shapes for ingredients
  const renderIngredientSVG = (p: FloatingIngredientSpec) => {
    switch (p.shape) {
      case 'nut':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            <defs>
              <linearGradient id={`nut-grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={p.color} />
                <stop offset="100%" stopColor="#4A2612" />
              </linearGradient>
            </defs>
            <path
              d="M14 4 C20 4 24 9 24 15 C24 21 19 24 14 24 C8 24 4 20 4 15 C4 8 8 4 14 4 Z"
              fill={`url(#nut-grad-${p.id})`}
            />
            {/* Nut cleft line & roasted texture */}
            <path d="M14 5 C14 11 15 17 14 23" stroke="#2B1408" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M9 10 C11 9 13 10 13 13" stroke={p.secondaryColor || '#FFD27D'} strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d="M15 13 C17 15 19 17 19 19" stroke={p.secondaryColor || '#FFD27D'} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
          </svg>
        );

      case 'cherry':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_12px_rgba(145,29,54,0.6)]">
            <defs>
              <radialGradient id={`cherry-grad-${p.id}`} cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF4A6E" />
                <stop offset="35%" stopColor={p.color} />
                <stop offset="100%" stopColor="#30030A" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="15" r="10" fill={`url(#cherry-grad-${p.id})`} />
            <ellipse cx="11" cy="11" rx="3.5" ry="2" fill="#FFFFFF" opacity="0.5" transform="rotate(-20 11 11)" />
            <path d="M14 6 C14 10 13 13 12 15" stroke="#3D0510" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="14" cy="5" r="1.5" fill="#4A180E" />
          </svg>
        );

      case 'raspberry':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_10px_rgba(201,42,74,0.5)]">
            <defs>
              <radialGradient id={`rasp-grad-${p.id}`} cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FF6B8B" />
                <stop offset="50%" stopColor={p.color} />
                <stop offset="100%" stopColor="#5E0D1E" />
              </radialGradient>
            </defs>
            {/* Raspberry drupelet cluster */}
            <circle cx="14" cy="14" r="5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="9" cy="11" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="19" cy="11" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="8" cy="16" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="20" cy="16" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="11" cy="20" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="17" cy="20" r="3.5" fill={`url(#rasp-grad-${p.id})`} />
            <circle cx="14" cy="8" r="3" fill={`url(#rasp-grad-${p.id})`} />
            {/* Highlights */}
            <circle cx="9" cy="10" r="1" fill="#FFFFFF" opacity="0.6" />
            <circle cx="14" cy="13" r="1.2" fill="#FFFFFF" opacity="0.6" />
            <circle cx="18" cy="15" r="1" fill="#FFFFFF" opacity="0.5" />
          </svg>
        );

      case 'strawberry':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_10px_rgba(217,83,116,0.5)]">
            <defs>
              <linearGradient id={`straw-grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF708F" />
                <stop offset="50%" stopColor={p.color} />
                <stop offset="100%" stopColor="#800F25" />
              </linearGradient>
            </defs>
            <path
              d="M14 5 C21 5 23 11 21 18 C19 22 15 24 14 24 C13 24 9 22 7 18 C5 11 7 5 14 5 Z"
              fill={`url(#straw-grad-${p.id})`}
            />
            {/* Seeds */}
            <ellipse cx="11" cy="11" rx="0.8" ry="1.2" fill="#FFEAA7" opacity="0.8" />
            <ellipse cx="17" cy="12" rx="0.8" ry="1.2" fill="#FFEAA7" opacity="0.8" />
            <ellipse cx="14" cy="16" rx="0.8" ry="1.2" fill="#FFEAA7" opacity="0.8" />
            <ellipse cx="10" cy="17" rx="0.8" ry="1.2" fill="#FFEAA7" opacity="0.8" />
            <ellipse cx="18" cy="18" rx="0.8" ry="1.2" fill="#FFEAA7" opacity="0.8" />
            <path d="M12 4 L14 7 L16 4 L14 5 Z" fill="#4E8D42" />
          </svg>
        );

      case 'cookie':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]">
            <circle cx="14" cy="14" r="10" fill={p.color} stroke="#3A3430" strokeWidth="1" />
            <circle cx="14" cy="14" r="7" fill="none" stroke="#2B2623" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Crumb indentations */}
            <circle cx="10" cy="11" r="1.5" fill="#0D0C0B" />
            <circle cx="17" cy="12" r="1.2" fill="#0D0C0B" />
            <circle cx="13" cy="17" r="1.4" fill="#0D0C0B" />
          </svg>
        );

      case 'bilberry':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_10px_rgba(36,59,85,0.6)]">
            <defs>
              <radialGradient id={`bil-grad-${p.id}`} cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#6C8BB8" />
                <stop offset="40%" stopColor={p.color} />
                <stop offset="100%" stopColor="#0B1320" />
              </radialGradient>
            </defs>
            <circle cx="14" cy="15" r="9.5" fill={`url(#bil-grad-${p.id})`} />
            <ellipse cx="11" cy="11" rx="3" ry="1.5" fill="#FFFFFF" opacity="0.45" transform="rotate(-25 11 11)" />
            {/* Wild berry crown */}
            <polygon points="14,6 15.5,8 12.5,8" fill="#0D1726" />
            <polygon points="12,7 13.5,9 10.5,9" fill="#0D1726" />
            <polygon points="16,7 17.5,9 14.5,9" fill="#0D1726" />
          </svg>
        );

      case 'rose':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_12px_rgba(217,83,116,0.6)]">
            <defs>
              <linearGradient id={`rose-grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFA6BC" />
                <stop offset="50%" stopColor={p.color} />
                <stop offset="100%" stopColor="#8A1832" />
              </linearGradient>
            </defs>
            <path
              d="M14 2 C8 7 3 14 5 20 C7 24 16 25 19 21 C23 15 19 8 14 2 Z"
              fill={`url(#rose-grad-${p.id})`}
            />
            {/* Petal vein */}
            <path d="M14 5 C13 11 12 17 14 22" stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.45" />
            <path d="M12 10 C9 12 8 14 8 16" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
          </svg>
        );

      case 'pistachio':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_10px_rgba(88,129,87,0.5)]">
            <defs>
              <linearGradient id={`pista-grad-${p.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4E0A0" />
                <stop offset="50%" stopColor={p.color} />
                <stop offset="100%" stopColor="#304D2E" />
              </linearGradient>
            </defs>
            {/* Pistachio kernel shape */}
            <path
              d="M14 4 C19 4 23 9 23 15 C23 21 19 24 14 24 C9 24 5 20 5 15 C5 9 9 4 14 4 Z"
              fill={`url(#pista-grad-${p.id})`}
            />
            {/* Purple skin edge */}
            <path d="M5 15 C5 20 9 24 14 24" stroke="#874C62" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
            <path d="M11 9 C13 8 15 10 15 14" stroke="#D5F0AA" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          </svg>
        );

      case 'caramel':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_12px_rgba(213,152,54,0.6)]">
            <defs>
              <radialGradient id={`caram-grad-${p.id}`} cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FFE08F" />
                <stop offset="45%" stopColor={p.color} />
                <stop offset="100%" stopColor="#7A4510" />
              </radialGradient>
            </defs>
            <path
              d="M14 3 C14 3 6 12 6 17 C6 21.4 9.6 25 14 25 C18.4 25 22 21.4 22 17 C22 12 14 3 14 3 Z"
              fill={`url(#caram-grad-${p.id})`}
            />
            <ellipse cx="11" cy="15" rx="3" ry="5" fill="#FFFFFF" opacity="0.45" />
          </svg>
        );

      case 'shard':
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
            <polygon points="14,2 26,14 16,26 2,16" fill={p.color} stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
            <polygon points="14,2 26,14 16,16" fill="#FFFFFF" opacity="0.25" />
          </svg>
        );

      case 'crumb':
      default:
        return (
          <svg viewBox="0 0 28 28" className="w-full h-full drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
            <rect x="4" y="4" width="20" height="20" rx="5" fill={p.color} transform="rotate(18 14 14)" />
            <rect x="7" y="7" width="10" height="10" rx="2" fill="#FFFFFF" opacity="0.15" />
          </svg>
        );
    }
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center select-none"
      style={{ perspective: '1100px' }}
    >
      {/* Ambient Lighting Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: stage >= 1 ? 0.75 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none rounded-full blur-2xl z-0"
        style={{ background: config.glowColor }}
      />

      {/* Main 3D Stage Container */}
      <div
        className="relative flex flex-col items-center justify-center w-[160px] sm:w-[190px] h-[210px] sm:h-[240px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* ========================================================
            LAYER 1: CENTRAL GELATO CORE & MOLTEN SWIRL
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, z: 0 }}
          animate={{
            opacity: isCoreRevealed ? 1 : 0,
            scale: isCoreRevealed ? 1 : 0.85,
            z: isCoreRevealed ? 20 : 0
          }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10 w-[100px] sm:w-[120px] h-[140px] sm:h-[165px] rounded-t-2xl rounded-b-lg shadow-[0_20px_45px_rgba(0,0,0,0.85)] flex flex-col items-center justify-center overflow-hidden border border-[#D5B77A]/25"
          style={{
            background: core.textureGradient,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Internal Micro-Overrun Ice Texture */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px] pointer-events-none" />

          {/* Molten Swirl Ribbon (Spiraling through core) */}
          <motion.div
            initial={{ scaleY: 0.2, opacity: 0 }}
            animate={{
              scaleY: isCoreRevealed ? 1 : 0.2,
              opacity: isCoreRevealed ? 1 : 0
            }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-[70px] sm:w-[85px] h-[100px] sm:h-[120px] rounded-full filter blur-[1px] opacity-90 shadow-inner"
            style={{
              background: `radial-gradient(ellipse at center, ${core.swirlColor} 0%, transparent 75%)`,
              transform: 'rotate(-15deg)'
            }}
          />

          {/* Swirl Ribbon Wave Highlight */}
          <div
            className="absolute inset-x-2 top-8 h-4 rounded-full opacity-70"
            style={{
              background: `linear-gradient(90deg, transparent, ${core.swirlColor}, transparent)`
            }}
          />
        </motion.div>

        {/* ========================================================
            LAYER 2: SPLIT OUTER CHOCOLATE SHELL (Separating in 3D!)
           ======================================================== */}
        {/* Left Floating Shell Half */}
        <motion.div
          animate={{
            x: isSeparated ? -shell.separationDistanceX : 0,
            y: isSeparated ? -shell.separationDistanceY : 0,
            rotateY: isSeparated ? -shell.rotateYDeg : 0,
            rotateZ: isSeparated ? -12 : 0,
            scale: isSeparated ? 0.98 : 1,
            z: isSeparated ? 55 : 0,
            opacity: 1
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-20 w-[55px] sm:w-[65px] h-[142px] sm:h-[167px] left-[25px] sm:left-[30px] rounded-tl-2xl rounded-bl-lg overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] border-l border-t border-b border-[#D5B77A]/30"
          style={{
            background: shell.textureGradient,
            transformOrigin: 'right center',
            borderRight: `3px solid ${shell.thicknessColor}`
          }}
        >
          {/* Cracked Shell Chocolate Thickness & Specular Gloss */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-black/40" />
        </motion.div>

        {/* Right Floating Shell Half */}
        <motion.div
          animate={{
            x: isSeparated ? shell.separationDistanceX : 0,
            y: isSeparated ? shell.separationDistanceY : 0,
            rotateY: isSeparated ? shell.rotateYDeg : 0,
            rotateZ: isSeparated ? 12 : 0,
            scale: isSeparated ? 0.98 : 1,
            z: isSeparated ? 55 : 0,
            opacity: 1
          }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-20 w-[55px] sm:w-[65px] h-[142px] sm:h-[167px] right-[25px] sm:right-[30px] rounded-tr-2xl rounded-br-lg overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.85)] border-r border-t border-b border-[#D5B77A]/30"
          style={{
            background: shell.textureGradient,
            transformOrigin: 'left center',
            borderLeft: `3px solid ${shell.thicknessColor}`
          }}
        >
          {/* Specular Glaze Sheen on Right Shell */}
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black/40" />
        </motion.div>

        {/* ========================================================
            LAYER 3: CEI LASER-ENGRAVED BIRCHWOOD STICK
           ======================================================== */}
        <div className="absolute bottom-1 w-[26px] sm:w-[30px] h-[52px] sm:h-[60px] bg-gradient-to-b from-[#E0C193] via-[#D0AA75] to-[#B88C56] border-t-2 border-[#A07340] rounded-b-md shadow-2xl flex items-center justify-center z-5">
          <span className="text-[9px] font-mono font-black text-[#6E4922] tracking-widest rotate-90 select-none">
            CEI
          </span>
        </div>

        {/* ========================================================
            LAYER 4: 3D FLOATING INGREDIENTS (Exploded Composition)
           ======================================================== */}
        {isExploded &&
          ingredients.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{
                opacity: 0,
                scale: 0.2,
                x: 0,
                y: 0,
                z: 0,
                rotate: 0
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: [p.targetX - 2, p.targetX + 3, p.targetX - 2],
                y: [p.targetY - 3, p.targetY + 4, p.targetY - 3],
                z: p.targetZ,
                rotate: [p.targetRotate - 5, p.targetRotate + 5, p.targetRotate - 5]
              }}
              exit={{ opacity: 0, scale: 0.2 }}
              transition={{
                opacity: { duration: 0.35, delay: p.emergeDelay },
                scale: { duration: 0.45, delay: p.emergeDelay, ease: [0.17, 0.67, 0.83, 0.67] },
                x: { duration: 2.5 + idx * 0.2, repeat: Infinity, ease: 'easeInOut' },
                y: { duration: 2.2 + idx * 0.25, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 3.0 + idx * 0.3, repeat: Infinity, ease: 'easeInOut' }
              }}
              className="absolute z-30 pointer-events-none"
              style={{
                width: `${p.size + 8}px`,
                height: `${p.size + 8}px`,
                transformStyle: 'preserve-3d'
              }}
            >
              {renderIngredientSVG(p)}
            </motion.div>
          ))}
      </div>
    </div>
  );
};
