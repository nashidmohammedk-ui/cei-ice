import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, ThermometerSnowflake, Printer, ArrowRight, ShieldCheck, Package } from 'lucide-react';

interface OrderConfirmationProps {
  order: any;
  onNavigateHome: () => void;
}

export const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ order, onNavigateHome }) => {
  useEffect(() => {
    // Elegant gold and emerald celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D5B77A', '#FAF5EC', '#193325', '#E8D5A7']
      });
    } catch (e) {
      // safe fallback
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-cei-dark text-cei-cream pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Card */}
        <div className="p-8 sm:p-12 rounded-sm bg-cei-card/80 border border-cei-gold/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cei-gold/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col items-center text-center pb-8 border-b border-cei-gold/20">
            <div className="w-16 h-16 rounded-full border border-cei-gold flex items-center justify-center text-cei-gold mb-4 bg-cei-dark shadow-[0_0_25px_rgba(213,183,122,0.3)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-[10px] tracking-[0.35em] uppercase text-cei-gold font-light mb-1">
              Cryogenic Dispatch Reserved
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-cei-cream mb-2">
              Thank You for Your Order.
            </h1>

            <p className="font-serif italic text-base text-cei-gold/80 max-w-lg">
              "Your micro-batch glacé has entered our cryogenic packing sequence."
            </p>

            <div className="mt-4 px-4 py-2 rounded-sm bg-cei-surface border border-cei-gold/30 inline-flex items-center space-x-2 text-xs">
              <span className="text-cei-cream/60">Tracking ID:</span>
              <span className="font-mono text-cei-gold font-semibold tracking-wider">
                {order?.orderId || 'CEI-CRYO-849120'}
              </span>
            </div>
          </div>

          {/* Order Details & Logistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-b border-cei-gold/15 text-xs font-light">
            <div className="space-y-2">
              <span className="text-cei-gold uppercase text-[10px] tracking-wider font-semibold block">
                Destination & Delivery
              </span>
              <p className="text-cei-cream font-medium">
                {order?.customer?.firstName} {order?.customer?.lastName}
              </p>
              <p className="text-cei-cream/70">{order?.customer?.address}</p>
              <p className="text-cei-cream/70">
                {order?.customer?.city}, {order?.customer?.state} {order?.customer?.postalCode}
              </p>
              <p className="text-cei-gold font-serif italic pt-1">
                Scheduled: {order?.estimatedArrival || 'Within 48 hours'}
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-cei-gold uppercase text-[10px] tracking-wider font-semibold block">
                Order Financials
              </span>
              <div className="flex justify-between text-cei-cream/70">
                <span>Items Subtotal:</span>
                <span className="font-medium text-cei-cream">${order?.subtotal?.toFixed(2) || '54.00'}</span>
              </div>
              <div className="flex justify-between text-cei-cream/70">
                <span>Cryogenic Dry-Ice Freight:</span>
                <span className="font-medium text-cei-gold">
                  {order?.shipping === 0 ? 'Complimentary' : `$${order?.shipping?.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-cei-gold pt-2 border-t border-cei-gold/15">
                <span>Total Settled:</span>
                <span className="font-serif text-base">${order?.total?.toFixed(2) || '54.00'} USD</span>
              </div>
            </div>
          </div>

          {/* Unboxing Instructions */}
          <div className="py-8 border-b border-cei-gold/15 space-y-4">
            <h3 className="font-serif text-lg text-cei-gold">
              Cryogenic Unboxing Protocol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-light text-cei-cream/80">
              <div className="p-3 bg-cei-surface rounded-sm border border-cei-gold/10">
                <span className="font-semibold text-cei-gold block mb-1">1. Solid Dry Ice</span>
                <p>Do not touch dry ice pellets with bare skin. Allow pellets to sublimate in a well-ventilated area.</p>
              </div>
              <div className="p-3 bg-cei-surface rounded-sm border border-cei-gold/10">
                <span className="font-semibold text-cei-gold block mb-1">2. Freezer Storage</span>
                <p>Transfer pints immediately to a home freezer maintained at -18°C (0°F) or below.</p>
              </div>
              <div className="p-3 bg-cei-surface rounded-sm border border-cei-gold/10">
                <span className="font-semibold text-cei-gold block mb-1">3. Tempering</span>
                <p>Allow the pint to sit at room temperature for 3 minutes before scooping for optimal fat bloom.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handlePrint}
              className="px-6 py-3 border border-cei-gold/40 text-cei-cream hover:text-cei-gold hover:border-cei-gold text-xs uppercase tracking-widest font-medium rounded-sm flex items-center space-x-2 transition-colors"
            >
              <Printer className="w-4 h-4 text-cei-gold" />
              <span>Print Order Receipt</span>
            </button>

            <button
              onClick={onNavigateHome}
              className="px-8 py-3.5 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl flex items-center space-x-2"
            >
              <span>Return to Maison</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
