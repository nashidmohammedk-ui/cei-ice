import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface ToastNotificationProps {
  message: string | null;
  onDismiss: () => void;
}

export const ToastNotification: React.FC<ToastNotificationProps> = ({ message, onDismiss }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[130] max-w-sm w-full bg-cei-card/95 border border-cei-gold/50 rounded-sm shadow-2xl p-4 text-cei-cream flex items-start space-x-3 backdrop-blur-md"
        >
          <div className="w-6 h-6 rounded-full border border-cei-gold flex items-center justify-center text-cei-gold bg-cei-dark shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <div className="flex-1">
            <span className="font-serif text-sm font-medium text-cei-gold block leading-tight">
              Case Updated
            </span>
            <p className="text-xs text-cei-cream/80 font-light mt-0.5 leading-snug">
              {message}
            </p>
          </div>

          <button
            onClick={onDismiss}
            className="text-cei-cream/50 hover:text-cei-gold transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
