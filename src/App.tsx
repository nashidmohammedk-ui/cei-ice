import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductModal } from './components/ProductModal';
import { BoutiqueModal } from './components/BoutiqueModal';
import { ToastNotification } from './components/ToastNotification';

// Pages
import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';
import { Flavours } from './pages/Flavours';
import { OurExperience } from './pages/OurExperience';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Product } from './types';
import { useLuxuryScrollAnimations } from './utils/animations';

const MainApp: React.FC = () => {
  useLuxuryScrollAnimations();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isBoutiqueModalOpen, setIsBoutiqueModalOpen] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);
  const [isPreloaded, setIsPreloaded] = useState(false);

  const { notificationMessage, dismissNotification } = useCart();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleFilterCategory = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage('flavours');
  };

  const handleOrderSuccess = (orderDetails: any) => {
    setCompletedOrder(orderDetails);
    setCurrentPage('order-confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#F5F2EB] font-sans antialiased selection:bg-[#C5A46D] selection:text-[#121110]">
      {/* 1. Luxury Preloader */}
      {!isPreloaded && <Preloader onComplete={() => setIsPreloaded(true)} />}

      {/* 2. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Toast Notifications */}
      <ToastNotification
        message={notificationMessage}
        onDismiss={dismissNotification}
      />

      {/* 4. Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBoutiques={() => setIsBoutiqueModalOpen(true)}
      />

      {/* 5. Main Content Pages */}
      <main className="min-h-[85vh]">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onFilterCategory={handleFilterCategory}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {currentPage === 'story' && (
          <OurStory onNavigate={handleNavigate} />
        )}

        {currentPage === 'flavours' && (
          <Flavours
            selectedCategory={selectedCategory}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        )}

        {currentPage === 'experience' && (
          <OurExperience onNavigate={handleNavigate} />
        )}

        {currentPage === 'shop' && (
          <Shop
            onQuickView={(p) => setQuickViewProduct(p)}
            onProceedToCheckout={() => setCurrentPage('checkout')}
          />
        )}

        {currentPage === 'contact' && <Contact />}

        {currentPage === 'checkout' && (
          <Checkout
            onBackToShop={() => setCurrentPage('shop')}
            onOrderSuccess={handleOrderSuccess}
          />
        )}

        {currentPage === 'order-confirmation' && (
          <OrderConfirmation
            order={completedOrder}
            onNavigateHome={() => setCurrentPage('home')}
          />
        )}
      </main>

      {/* 6. Global Modals & Drawers */}
      <CartDrawer
        onProceedToCheckout={() => setCurrentPage('checkout')}
      />

      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <BoutiqueModal
        isOpen={isBoutiqueModalOpen}
        onClose={() => setIsBoutiqueModalOpen(false)}
        onSelectBoutique={() => {
          setCurrentPage('contact');
        }}
      />

      {/* 7. Global Premium Footer on Inner Pages */}
      {currentPage !== 'home' && currentPage !== 'checkout' && currentPage !== 'order-confirmation' && (
        <Footer
          onNavigate={handleNavigate}
          onFilterCategory={handleFilterCategory}
        />
      )}
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}

export default App;
