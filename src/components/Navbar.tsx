import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Globe, Youtube, Instagram, Facebook } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBoutiques?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'FR' | 'IT' | 'JA'>('EN');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'story', label: 'OUR STORY', sectionId: 'story' },
    { id: 'flavours', label: 'FLAVOURS', sectionId: 'flavours' },
    { id: 'mission', label: 'OUR MISSION', sectionId: 'mission' },
    { id: 'shop', label: 'SHOP', sectionId: 'shop' },
    { id: 'contact', label: 'CONTACT', sectionId: 'contact' },
  ];

  const handleNavClick = (linkId: string, sectionId?: string) => {
    if (currentPage === 'home') {
      if (linkId === 'flavours') {
        const el = document.getElementById('flavours');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
          return;
        }
      }
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setMobileMenuOpen(false);
          return;
        }
      }
    }
    onNavigate(linkId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#07140E]/95 backdrop-blur-md border-b border-[#D5B77A]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'bg-gradient-to-b from-[#07140E]/95 via-[#07140E]/70 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Signature Gold 3D Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-2.5 group text-left focus:outline-none"
            >
              <div className="relative flex items-center">
                <span className="font-display text-2xl sm:text-3xl font-extrabold tracking-[0.2em] bg-gradient-to-b from-[#FFF2D6] via-[#D5B77A] to-[#8C6D34] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(213,183,122,0.45)] group-hover:brightness-110 transition-all">
                  CEI
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5B77A] ml-1.5 opacity-80" />
              </div>
            </button>

            {/* Center: Clean Uppercase Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.25em] font-medium font-sans">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id, link.sectionId)}
                    className={`relative py-1 transition-all duration-300 hover:text-[#D5B77A] ${
                      isActive ? 'text-[#D5B77A] font-semibold' : 'text-[#F4EBD8]/80'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D5B77A] to-transparent" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Language Selector, Social Icons, and Shopping Cart */}
            <div className="flex items-center space-x-4 sm:space-x-5">
              {/* Language Selector (EN ▾) */}
              <div className="relative hidden lg:block">
                <button
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  className="flex items-center space-x-1 text-xs tracking-wider text-[#F4EBD8]/70 hover:text-[#D5B77A] uppercase transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#D5B77A]/70" />
                  <span>{language}</span>
                  <span className="text-[10px] text-[#D5B77A]">▾</span>
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 top-full mt-2 w-24 bg-[#07140E] border border-[#D5B77A]/30 rounded-sm py-1 shadow-2xl z-50">
                    {(['EN', 'FR', 'IT', 'JA'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setShowLangMenu(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs tracking-wider transition-colors hover:bg-[#D5B77A]/10 hover:text-[#D5B77A] ${
                          language === lang ? 'text-[#D5B77A] font-bold' : 'text-[#F4EBD8]/80'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Media Icons (YouTube, Instagram, Facebook) */}
              <div className="hidden sm:flex items-center space-x-3 text-[#F4EBD8]/70">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5B77A] transition-colors p-1"
                  aria-label="CEI YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5B77A] transition-colors p-1"
                  aria-label="CEI Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5B77A] transition-colors p-1"
                  aria-label="CEI Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>

              {/* Shopping Bag Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#F4EBD8] hover:text-[#D5B77A] transition-colors"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#D5B77A] text-[#07140E] text-[10px] font-bold flex items-center justify-center shadow-lg">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#F4EBD8] hover:text-[#D5B77A]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#07140E] border-t border-[#D5B77A]/20 px-6 py-6 space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id, link.sectionId)}
                className="block w-full text-left text-sm tracking-widest uppercase font-serif text-[#F4EBD8] hover:text-[#D5B77A]"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
