import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, sizeOption?: CartItem['sizeOption'], giftMessage?: string) => void;
  removeFromCart: (productId: string, sizeOption: CartItem['sizeOption']) => void;
  updateQuantity: (productId: string, sizeOption: CartItem['sizeOption'], delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotal: number;
  shipping: number;
  freeShippingThreshold: number;
  total: number;
  includeGiftWrap: boolean;
  setIncludeGiftWrap: (include: boolean) => void;
  includeTastingSpoons: boolean;
  setIncludeTastingSpoons: (include: boolean) => void;
  lastAddedItem: Product | null;
  notificationMessage: string | null;
  dismissNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'cei_luxury_ice_cream_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [includeGiftWrap, setIncludeGiftWrap] = useState(true);
  const [includeTastingSpoons, setIncludeTastingSpoons] = useState(true);
  const [lastAddedItem, setLastAddedItem] = useState<Product | null>(null);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [items]);

  const addToCart = (
    product: Product, 
    quantity = 1, 
    sizeOption: CartItem['sizeOption'] = 'single-pint',
    giftMessage?: string
  ) => {
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id && item.sizeOption === sizeOption
      );

      if (existingIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { product, quantity, sizeOption, giftMessage }];
      }
    });

    setLastAddedItem(product);
    setNotificationMessage(`Added "${product.name}" to your refrigerated case.`);
    setIsCartOpen(true);

    setTimeout(() => {
      setNotificationMessage(null);
    }, 4500);
  };

  const removeFromCart = (productId: string, sizeOption: CartItem['sizeOption']) => {
    setItems((prev) => prev.filter(item => !(item.product.id === productId && item.sizeOption === sizeOption)));
  };

  const updateQuantity = (productId: string, sizeOption: CartItem['sizeOption'], delta: number) => {
    setItems((prev) => 
      prev.map((item) => {
        if (item.product.id === productId && item.sizeOption === sizeOption) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const dismissNotification = () => {
    setNotificationMessage(null);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    let multiplier = 1;
    if (item.sizeOption === 'tasting-flight') multiplier = 3.6; // e.g. 4-mini-flight
    if (item.sizeOption === 'grand-cru-pack') multiplier = 5.2; // 6-pack bundle
    return sum + (item.product.price * multiplier * item.quantity);
  }, 0);

  const freeShippingThreshold = 80;
  const shipping = subtotal === 0 ? 0 : subtotal >= freeShippingThreshold ? 0 : 14;
  const giftWrapCost = includeGiftWrap && subtotal > 0 ? 0 : 0; // Complimentary luxury packaging
  const total = subtotal + shipping + giftWrapCost;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotal,
        shipping,
        freeShippingThreshold,
        total,
        includeGiftWrap,
        setIncludeGiftWrap,
        includeTastingSpoons,
        setIncludeTastingSpoons,
        lastAddedItem,
        notificationMessage,
        dismissNotification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
