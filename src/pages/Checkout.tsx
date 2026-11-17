import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, ThermometerSnowflake, CreditCard, Lock, CheckCircle2, Truck, Calendar, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onBackToShop: () => void;
  onOrderSuccess: (orderDetails: any) => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBackToShop, onOrderSuccess }) => {
  const {
    items,
    subtotal,
    shipping,
    total,
    clearCart,
    includeGiftWrap,
    includeTastingSpoons
  } = useCart();

  // Form states
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vandermeer',
    email: 'eleanor.vandermeer@couture.com',
    phone: '+1 (555) 234-8900',
    address: '740 Park Avenue, Apt 14B',
    city: 'New York',
    state: 'NY',
    postalCode: '10021',
    deliveryDate: '2026-11-14',
    deliverySlot: 'morning',
    shippingMethod: 'dry-ice-standard',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 8842',
    cardExpiry: '08/29',
    cardCvc: '•••',
    orderNotes: 'Please ring concierge for dry-ice package handover.'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderPayload = {
        orderId: `CEI-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        items: [...items],
        subtotal,
        shipping,
        total,
        customer: formData,
        estimatedArrival: 'Thursday, November 14, by 1:00 PM (Cryo-Locked)'
      };

      clearCart();
      setIsSubmitting(false);
      onOrderSuccess(orderPayload);
    }, 1200);
  };

  if (items.length === 0) {
    return (
      <div className="bg-cei-dark text-cei-cream min-h-screen pt-36 pb-24 px-4 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <ThermometerSnowflake className="w-12 h-12 text-cei-gold mx-auto" />
          <h2 className="font-serif text-3xl">Your Case is Empty</h2>
          <p className="text-xs text-cei-cream/60">
            Please select your desired flavours before proceeding to cryogenic checkout.
          </p>
          <button
            onClick={onBackToShop}
            className="px-6 py-3 bg-cei-gold text-cei-dark text-xs uppercase tracking-widest font-semibold rounded-sm"
          >
            Return to Boutique
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={onBackToShop}
          className="inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-cei-gold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Flavours Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Checkout Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-sm bg-cei-card/60 border border-cei-gold/20 shadow-2xl space-y-8">
              {/* Header */}
              <div>
                <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-light block mb-1">
                  Cryogenic Shipping Protocol
                </span>
                <h1 className="font-serif text-3xl font-medium text-cei-cream">
                  Secure White-Glove Checkout
                </h1>
                <p className="text-xs text-cei-cream/60 font-light mt-1">
                  All orders packed in solid CO₂ (-78.5°C) with real-time temperature verification.
                </p>
              </div>

              <form onSubmit={handleSubmitOrder} className="space-y-8">
                {/* 1. Recipient Details */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-cei-gold border-b border-cei-gold/15 pb-2">
                    1. Recipient & Contact
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">First Name</label>
                      <input
                        type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Last Name</label>
                      <input
                        type="text"
                        required
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Email (For Cryo-Tracking)</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Telephone (For Courier Arrival SMS)</label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Delivery Address */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-cei-gold border-b border-cei-gold/15 pb-2">
                    2. Destination Address
                  </h3>
                  <div className="space-y-4 text-xs font-light">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Street Address & Suite</label>
                      <input
                        type="text"
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-cei-cream/70 mb-1">City</label>
                        <input
                          type="text"
                          required
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-cei-cream/70 mb-1">State / Province</label>
                        <input
                          type="text"
                          required
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-cei-cream/70 mb-1">Postal Code</label>
                        <input
                          type="text"
                          required
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Delivery Schedule & Temperature Verification */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg text-cei-gold border-b border-cei-gold/15 pb-2">
                    3. Desired Arrival Window
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Delivery Time Slot</label>
                      <select
                        name="deliverySlot"
                        value={formData.deliverySlot}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      >
                        <option value="morning">Morning Delivery (9:00 AM – 1:00 PM)</option>
                        <option value="afternoon">Afternoon Delivery (2:00 PM – 6:00 PM)</option>
                        <option value="evening">Evening White-Glove (6:00 PM – 9:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 4. Payment Gateway Integration Structure */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-cei-gold/15 pb-2">
                    <h3 className="font-serif text-lg text-cei-gold">
                      4. Payment Integration Structure
                    </h3>
                    <div className="flex items-center space-x-1.5 text-[11px] text-cei-gold font-light">
                      <Lock className="w-3.5 h-3.5" />
                      <span>256-Bit SSL Encrypted</span>
                    </div>
                  </div>

                  {/* Payment Options */}
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-sm border border-cei-gold bg-cei-gold/10 text-cei-gold font-medium text-center">
                      Credit / Debit Card
                    </div>
                    <div className="p-3 rounded-sm border border-cei-gold/20 bg-cei-surface text-cei-cream/60 text-center font-light">
                      Apple Pay
                    </div>
                    <div className="p-3 rounded-sm border border-cei-gold/20 bg-cei-surface text-cei-cream/60 text-center font-light">
                      VIP Concierge Wire
                    </div>
                  </div>

                  {/* Card Inputs */}
                  <div className="p-4 bg-cei-surface/70 rounded-sm border border-cei-gold/25 space-y-3 text-xs font-light">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Card Number</label>
                      <div className="relative">
                        <CreditCard className="w-4 h-4 text-cei-gold absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full bg-cei-dark border border-cei-gold/25 pl-10 pr-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-cei-cream/70 mb-1">Expiration (MM/YY)</label>
                        <input
                          type="text"
                          required
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          className="w-full bg-cei-dark border border-cei-gold/25 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                      <div>
                        <label className="block text-cei-cream/70 mb-1">Security Code (CVC)</label>
                        <input
                          type="text"
                          required
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          className="w-full bg-cei-dark border border-cei-gold/25 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                        />
                      </div>
                    </div>
                    <p className="text-[10px] text-cei-cream/40 italic">
                      Ready for Stripe / Adyen production API integration.
                    </p>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.2em] font-bold uppercase rounded-sm shadow-2xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Securing Cryogenic Dispatch...</span>
                  ) : (
                    <span>Confirm Order • ${total.toFixed(2)} USD</span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-sm bg-cei-card/80 border border-cei-gold/25 shadow-xl space-y-4">
              <h3 className="font-serif text-xl font-medium text-cei-cream border-b border-cei-gold/15 pb-3">
                Order Summary
              </h3>

              {/* Items List */}
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.sizeOption}`}
                    className="flex space-x-3 text-xs border-b border-cei-gold/10 pb-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 object-cover rounded-sm border border-cei-gold/20 shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif text-sm font-medium text-cei-cream leading-snug">
                          {item.product.name}
                        </h4>
                        <span className="text-[10px] text-cei-gold block mt-0.5">
                          Qty: {item.quantity} • {item.sizeOption === 'tasting-flight' ? 'Flight' : 'Pint'}
                        </span>
                      </div>
                      <span className="font-serif font-semibold text-cei-gold">
                        ${(item.product.price * (item.sizeOption === 'tasting-flight' ? 3.6 : 1) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Addons Status */}
              <div className="space-y-1.5 pt-2 text-xs text-cei-cream/70 font-light">
                {includeGiftWrap && (
                  <div className="flex items-center space-x-2 text-[11px] text-cei-gold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Complimentary Gold Presentation Box included</span>
                  </div>
                )}
                {includeTastingSpoons && (
                  <div className="flex items-center space-x-2 text-[11px] text-cei-gold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Engraved Gold Tasting Spoons (Pack of 2)</span>
                  </div>
                )}
              </div>

              {/* Financial Calculation */}
              <div className="pt-3 border-t border-cei-gold/15 space-y-2 text-xs font-light">
                <div className="flex justify-between">
                  <span className="text-cei-cream/70">Subtotal</span>
                  <span className="font-serif text-sm font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cei-cream/70">Solid CO₂ Cryo-Freight</span>
                  <span className="font-serif text-sm font-medium text-cei-gold">
                    {shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-cei-gold/15 text-sm font-medium">
                  <span className="font-serif text-base text-cei-gold">Total Due</span>
                  <span className="font-serif text-xl font-bold text-cei-gold">${total.toFixed(2)} USD</span>
                </div>
              </div>

              {/* Cold Chain Guarantee */}
              <div className="p-4 bg-cei-surface rounded-sm border border-cei-gold/20 flex items-start space-x-3 text-xs text-cei-cream/80">
                <ThermometerSnowflake className="w-5 h-5 text-cei-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-cei-cream block">48-Hour Cold Guarantee</span>
                  <p className="text-[11px] text-cei-cream/60 leading-relaxed font-light mt-0.5">
                    Your shipment is guaranteed to arrive rock-solid at -18°C or below anywhere in the United States and Western Europe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
