import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, Volume2, VolumeX, Sparkles, Film } from 'lucide-react';
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
  const [revealMode, setRevealMode] = useState<'video' | '3d'>('video');
  const [isMuted, setIsMuted] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Active if hovered on desktop OR locked via tap on mobile
  const isActive = isHovered || isMobileLocked;

  // Retrieve product-specific 3D configuration
  const config = PRODUCT_REVEAL_CONFIGS[product.id] || PRODUCT_REVEAL_CONFIGS['cei-bar-utopia-double-hazelnut'];

  // Manage video and audio playback based on isActive state
  useEffect(() => {
    if (isActive) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay fallback (e.g. if browser blocked unmuted)
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
      if (audioRef.current && !isMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isActive, isMuted]);

  const handleCardClick = (e: React.MouseEvent) => {
    // If mobile or click on card, toggle locked state
    if (window.innerWidth < 1024) {
      e.stopPropagation();
      setIsMobileLocked(!isMobileLocked);
    }
  };

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
    if (audioRef.current) {
      if (!nextMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden bg-[#07140E] cursor-pointer select-none flex items-center justify-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      onTouchStart={() => {
        if (!isMobileLocked) {
          setIsMobileLocked(true);
        }
      }}
    >
      {/* Hidden acoustic sound effect element */}
      {product.audio && (
        <audio
          ref={audioRef}
          src={product.audio}
          preload="auto"
          loop
        />
      )}

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

            {/* Top-Right: TOUCH TO PLAY FILM hint */}
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 0.95, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="absolute top-3 right-3 z-30 pointer-events-none"
            >
              <span className="text-[8px] tracking-widest uppercase font-mono px-2.5 py-1 rounded-full bg-black/80 border border-[#D5B77A]/50 text-[#D5B77A] shadow-lg flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] animate-pulse" />
                <span>TOUCH TO PLAY FILM</span>
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Controls Overlay when Active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-2.5 inset-x-2.5 z-40 flex items-center justify-between pointer-events-none"
          >
            {/* Left: Mode Switcher (Film vs 3D Reveal) */}
            {product.video && (
              <div className="flex items-center space-x-1 p-0.5 rounded-full bg-black/80 border border-[#D5B77A]/40 pointer-events-auto shadow-md">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRevealMode('video');
                  }}
                  className={`px-2 py-0.5 rounded-full text-[8px] tracking-widest uppercase font-mono transition-all flex items-center space-x-1 ${
                    revealMode === 'video'
                      ? 'bg-[#D5B77A] text-[#07140E] font-bold shadow'
                      : 'text-[#F4EBD8]/70 hover:text-[#D5B77A]'
                  }`}
                >
                  <Film className="w-2.5 h-2.5" />
                  <span>Film</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRevealMode('3d');
                  }}
                  className={`px-2 py-0.5 rounded-full text-[8px] tracking-widest uppercase font-mono transition-all flex items-center space-x-1 ${
                    revealMode === '3d'
                      ? 'bg-[#D5B77A] text-[#07140E] font-bold shadow'
                      : 'text-[#F4EBD8]/70 hover:text-[#D5B77A]'
                  }`}
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>3D Reveal</span>
                </button>
              </div>
            )}

            {/* Right: Sound Toggle & Mobile Close Button */}
            <div className="flex items-center space-x-1.5 pointer-events-auto ml-auto">
              {product.video && (
                <button
                  type="button"
                  onClick={toggleSound}
                  className="p-1 rounded-full bg-black/80 border border-[#D5B77A]/50 text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all shadow-md"
                  aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  title={isMuted ? 'Sound Off - Click to Unmute' : 'Sound On'}
                >
                  {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                </button>
              )}

              {isMobileLocked && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileLocked(false);
                  }}
                  className="p-1 rounded-full bg-black/85 border border-[#D5B77A] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all shadow-md"
                  aria-label="Close Reveal"
                  title="Close and show photo"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          ACTIVE VIEW (VIDEO OR 3D EXPLODED VIEW) VS STATIC PHOTO
         ======================================================== */}
      <AnimatePresence mode="wait">
        {isActive ? (
          <motion.div
            key={revealMode === 'video' && product.video ? 'video-mode' : '3d-mode'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full h-full relative"
          >
            {product.video && revealMode === 'video' ? (
              <div className="w-full h-full relative overflow-hidden bg-black flex items-center justify-center">
                <video
                  ref={videoRef}
                  src={product.video}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Bottom live indicator */}
                <div className="absolute bottom-2.5 left-3 z-20 pointer-events-none flex items-center space-x-1.5 px-2 py-0.5 rounded-full bg-black/75 border border-[#D5B77A]/40 text-[#D5B77A] text-[8px] font-mono tracking-widest uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] animate-ping" />
                  <span>PLAYING CINEMATIC</span>
                </div>
              </div>
            ) : (
              <ExplodedViewAnimation config={config} isActive={isActive} />
            )}
          </motion.div>
        ) : (
          /* Pristine Luxury Static Photograph */
          <motion.div
            key="static-photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
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
