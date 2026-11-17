import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 400);
    }, 450);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center select-none overflow-hidden bg-[#121110] text-[#F5F2EB]"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center space-y-1.5"
          >
            <span className="font-serif text-3xl sm:text-4xl font-normal tracking-[0.25em] text-[#F5F2EB]">
              CĒI
            </span>
            <span className="text-[9px] tracking-[0.35em] uppercase text-[#C5A46D] font-sans font-light">
              Haute Glacerie • Kerala
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
