import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(10);
  const [isDone, setIsDone] = useState(false);

  const handleEnter = () => {
    setIsDone(true);
    setTimeout(onComplete, 700);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 750);
          }, 800);
          return 100;
        }
        const step = Math.floor(Math.random() * 9) + 4;
        return Math.min(prev + step, 100);
      });
    }, 65);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center select-none overflow-hidden bg-[#07140E] text-[#F4EBD8]"
        >
          {/* Deep Luxury Forest Green Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07140E] via-[#0A261B] to-[#040D09]" />

          {/* Central Champagne Gold Ambient Aura */}
          <div className="absolute w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-[#D5B77A]/12 blur-[130px] pointer-events-none" />

          {/* Centered Iconic CEI Monogram (Clean, Royal & Minimal) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Celestial Orbit Ring & Crest */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 flex items-center justify-center mb-8">
              {/* Rotating Celestial Dashed Ring */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="#D5B77A"
                  strokeWidth="0.7"
                  strokeDasharray="4 5"
                  className="animate-[spin_25s_linear_infinite]"
                  opacity="0.75"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#D5B77A"
                  strokeWidth="1.2"
                  opacity="0.4"
                />
                <circle cx="50" cy="4" r="1.5" fill="#D5B77A" />
                <circle cx="50" cy="96" r="1.5" fill="#D5B77A" />
                <circle cx="4" cy="50" r="1.5" fill="#D5B77A" />
                <circle cx="96" cy="50" r="1.5" fill="#D5B77A" />
              </svg>

              {/* Central Iconic CEI Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  animate={{
                    opacity: [0.9, 1, 0.9],
                    textShadow: [
                      '0 0 20px rgba(213,183,122,0.3)',
                      '0 0 35px rgba(213,183,122,0.6)',
                      '0 0 20px rgba(213,183,122,0.3)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="font-display text-4xl sm:text-5xl font-black tracking-[0.25em] bg-gradient-to-b from-[#FFF5DE] via-[#D5B77A] to-[#8C6D34] bg-clip-text text-transparent pl-2 select-none"
                >
                  CEI
                </motion.span>
              </div>
            </div>

            {/* Sub-Brand Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-serif italic text-xs sm:text-sm tracking-[0.35em] text-[#D5B77A] uppercase mb-8"
            >
              Haute Glacerie • Paris & Tokyo
            </motion.p>

            {/* Minimal Razor-Thin Gold Progress Line */}
            <div className="w-48 sm:w-60 h-[1.5px] bg-[#D5B77A]/15 relative overflow-hidden rounded-full mb-3">
              <motion.div
                className="h-full bg-gradient-to-r from-[#D5B77A]/40 via-[#FFF5DE] to-[#D5B77A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.2 }}
              />
            </div>

            {/* Minimal Percentage Counter / Enter Action */}
            <div className="h-9 flex items-center justify-center mt-2">
              {progress >= 100 ? (
                <motion.button
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={handleEnter}
                  className="px-6 py-1.5 border border-[#D5B77A] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all duration-300 font-sans text-[11px] tracking-[0.3em] uppercase rounded-sm"
                >
                  ENTER
                </motion.button>
              ) : (
                <span className="font-mono text-[10px] tracking-widest text-[#D5B77A]/60">
                  {progress}%
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
