import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles, Instagram, ArrowUpRight } from 'lucide-react';
import { BOUTIQUES } from '../data/products';

export const Contact: React.FC = () => {
  const [selectedBoutique, setSelectedBoutique] = useState(BOUTIQUES[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    topic: 'private-tasting',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const instagramPosts = [
    {
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
      tag: '#CEIChuao78'
    },
    {
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80',
      tag: '#TahitianVanilla'
    },
    {
      image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=600&q=80',
      tag: '#BronteEtna'
    },
    {
      image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80',
      tag: '#MangoNectar'
    },
    {
      image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=600&q=80',
      tag: '#CryoUnboxing'
    },
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
      tag: '#MayfairSalon'
    }
  ];

  return (
    <div className="bg-cei-dark text-cei-cream pt-28 pb-24 min-h-screen">
      {/* Editorial Page Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 text-center border-b border-cei-gold/15 overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cei-gold/30 bg-cei-surface/50 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cei-gold" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-cei-gold font-medium">
              Private Concierge & Salons
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-cei-cream mb-6">
            Get In Touch
          </h1>

          <p className="font-serif text-lg sm:text-2xl text-cei-cream/80 max-w-2xl font-light italic leading-relaxed">
            Whether inquiring regarding flagship boutique tastings, private event provisioning, or international press inquiries.
          </p>
        </div>
      </section>

      {/* Flagship Boutiques Interactive Directory */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-cei-gold/15">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-1">
              Kerala & India Salons
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-cei-cream">
              Flagship Salons & Boutiques
            </h2>
          </div>

          {/* Boutique Selector Tabs */}
          <div className="flex items-center space-x-2 mt-4 md:mt-0 overflow-x-auto pb-2 no-scrollbar">
            {BOUTIQUES.map((boutique) => (
              <button
                key={boutique.id}
                onClick={() => setSelectedBoutique(boutique)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded-sm transition-all whitespace-nowrap ${
                  selectedBoutique.id === boutique.id
                    ? 'bg-cei-gold text-cei-dark font-semibold'
                    : 'bg-cei-surface text-cei-cream/70 hover:text-cei-cream border border-cei-gold/20'
                }`}
              >
                {boutique.city}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Boutique Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-sm bg-cei-card/60 border border-cei-gold/25 shadow-2xl">
          <div className="lg:col-span-6 relative rounded-sm overflow-hidden border border-cei-gold/30 h-[360px]">
            <img
              src={selectedBoutique.image}
              alt={selectedBoutique.city}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cei-dark via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-[10px] tracking-widest text-cei-gold uppercase font-serif block">
                {selectedBoutique.district}
              </span>
              <h3 className="font-serif text-2xl font-medium text-cei-cream">
                CEI Salon {selectedBoutique.city}
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 text-xs font-light">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{selectedBoutique.status}</span>
            </div>

            <div className="space-y-3 text-cei-cream/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cei-gold shrink-0 mt-0.5" />
                <span>{selectedBoutique.address}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-cei-gold shrink-0 mt-0.5" />
                <span>{selectedBoutique.hours}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-cei-gold shrink-0 mt-0.5" />
                <span>{selectedBoutique.phone}</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-cei-gold shrink-0 mt-0.5" />
                <span>{selectedBoutique.email}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-cei-gold/15">
              <span className="text-[10px] tracking-widest text-cei-gold uppercase font-semibold block mb-2">
                Salon Amenities:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedBoutique.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-sm bg-cei-surface border border-cei-gold/20 text-[10px] text-cei-cream"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  topic: 'private-tasting',
                  message: `I would like to reserve a private tasting at the CEI ${selectedBoutique.city} salon.`
                }));
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-2 px-6 py-2.5 bg-cei-gold text-cei-dark text-xs uppercase tracking-widest font-semibold rounded-sm hover:brightness-110"
            >
              Reserve Salon Table
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form & Direct Inquiries */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-cei-card/70 border border-cei-gold/25 shadow-2xl">
              <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-2">
                Direct Inquiry
              </span>
              <h2 className="font-serif text-3xl font-medium text-cei-cream mb-6">
                Send a Message to the Atelier
              </h2>

              {formSubmitted ? (
                <div className="p-8 rounded-sm bg-cei-surface border border-cei-gold/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full border border-cei-gold flex items-center justify-center text-cei-gold mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl text-cei-cream font-medium">
                    Message Received
                  </h3>
                  <p className="text-xs text-cei-cream/70 font-light max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.fullName}. Our concierge officer will attend to your inquiry within four business hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2 border border-cei-gold text-cei-gold text-xs uppercase tracking-widest rounded-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs font-light">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Lord Julian Davies"
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream placeholder:text-cei-cream/30 focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. julian@daviesholdings.com"
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream placeholder:text-cei-cream/30 focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Telephone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98470 12345"
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream placeholder:text-cei-cream/30 focus:outline-none focus:border-cei-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-cei-cream/70 mb-1">Topic / Area of Inquiry</label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream focus:outline-none focus:border-cei-gold"
                      >
                        <option value="private-tasting">Private Salon Tasting Reservation</option>
                        <option value="events-yachts">Private Events & Superyacht Catering</option>
                        <option value="wholesale">Boutique & Michelin Wholesale</option>
                        <option value="press">Press & Media Inquiries</option>
                        <option value="general">General Client Care</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-cei-cream/70 mb-1">Your Message or Requirements</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please share details regarding guests, dates, dietary requirements or questions..."
                      className="w-full bg-cei-surface border border-cei-gold/30 px-3.5 py-2.5 rounded-sm text-cei-cream placeholder:text-cei-cream/30 focus:outline-none focus:border-cei-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-cei-gold-dark via-cei-gold to-cei-gold-light text-cei-dark hover:brightness-110 font-sans text-xs tracking-[0.2em] font-semibold uppercase rounded-sm shadow-xl flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Business & Press Enquiries Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-sm bg-cei-card/60 border border-cei-gold/20 shadow-xl space-y-6 text-xs font-light">
              <h3 className="font-serif text-2xl font-medium text-cei-cream border-b border-cei-gold/15 pb-3">
                Business & Executive Offices
              </h3>

              <div className="space-y-4 text-cei-cream/80">
                <div>
                  <span className="text-[10px] tracking-widest text-cei-gold uppercase font-semibold block mb-0.5">
                    Kerala & India Concierge Desk
                  </span>
                  <p className="text-sm font-serif text-cei-cream">+91 484 221 8900 / +91 98470 12345</p>
                  <p className="text-[11px] text-cei-cream/50">Available Daily 10:00 AM – 11:00 PM IST</p>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest text-cei-gold uppercase font-semibold block mb-0.5">
                    Michelin & Hotel Partnerships
                  </span>
                  <p className="text-sm font-serif text-cei-cream">partnerships@ceicouture.in</p>
                  <p className="text-[11px] text-cei-cream/50">Sommeliers and executive chefs</p>
                </div>

                <div>
                  <span className="text-[10px] tracking-widest text-cei-gold uppercase font-semibold block mb-0.5">
                    Press & Editorial
                  </span>
                  <p className="text-sm font-serif text-cei-cream">press@ceicouture.in</p>
                  <p className="text-[11px] text-cei-cream/50">Media kits and photography assets</p>
                </div>
              </div>

              <div className="p-4 bg-cei-surface rounded-sm border border-cei-gold/20">
                <span className="font-serif text-sm text-cei-gold block mb-1">
                  Private Salon Tasting Protocol
                </span>
                <p className="text-[11px] text-cei-cream/70 leading-relaxed font-light">
                  All salon table tastings must be reserved minimum 24 hours in advance to ensure our master gelatiere can temper our grand cru flights to exact serving temperature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram & Social Media Couture Feed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cei-gold/15">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-cei-gold font-light block mb-1">
              Social Maison
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-cei-cream">
              @CEICoutureIceCream
            </h3>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 sm:mt-0 inline-flex items-center space-x-1.5 text-xs tracking-widest uppercase text-cei-gold hover:underline"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow Our Atelier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramPosts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-sm border border-cei-gold/20 hover:border-cei-gold transition-colors"
            >
              <img
                src={post.image}
                alt={post.tag}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-cei-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                <span className="font-serif text-xs text-cei-gold tracking-wider">
                  {post.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
