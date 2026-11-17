import React from 'react';
import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ProductRevealViewer } from './reveal/ProductRevealViewer';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, setIsCartOpen } = useCart();

  return (
    <div className="group relative rounded-sm bg-[#0E1511]/95 border border-[#D5B77A]/25 hover:border-[#D5B77A]/90 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_22px_45px_rgba(213,183,122,0.22)] select-none">
      {/* 3D Interactive Exploded-View Reveal Viewer */}
      <ProductRevealViewer product={product} onQuickView={onQuickView} />

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Collection & Origin */}
          <div className="flex items-center justify-between text-[10px] tracking-widest uppercase text-[#D5B77A]/80 font-light mb-1.5">
            <span>{product.collectionTitle}</span>
            <span className="font-serif italic capitalize text-[#F4EBD8]/60">
              {product.provenance.country}
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-medium text-[#F4EBD8] group-hover:text-[#D5B77A] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {product.name}
          </h3>

          {/* French Haute Glacerie Title */}
          <p className="font-serif italic text-xs text-[#F4EBD8]/50 mt-0.5 line-clamp-1">
            {product.frenchName}
          </p>

          {/* Artisanal Description / Quote */}
          <p className="text-[11px] text-[#F4EBD8]/70 font-light mt-2.5 line-clamp-2 leading-relaxed italic min-h-[34px]">
            "{product.tagline}"
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2 mt-2.5 text-xs">
            <div className="flex items-center text-[#D5B77A]">
              <Star className="w-3 h-3 fill-[#C5A46D] text-[#C5A46D]" />
              <span className="ml-1 text-[11px] font-semibold text-[#F4EBD8]">
                {product.rating.toFixed(product.rating % 1 === 0 ? 0 : 2)}
              </span>
            </div>
            <span className="text-[#F4EBD8]/30">•</span>
            <span className="text-[10px] text-[#F4EBD8]/50 font-light">
              {product.reviewsCount} reviews
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Bar */}
        <div className="pt-4 mt-4 border-t border-[#D5B77A]/15 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-[#F4EBD8]/50 uppercase tracking-wider block font-light">
              Handcrafted Bar
            </span>
            <span className="font-serif text-lg font-semibold text-[#D5B77A]">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              addToCart(product, 1, 'single-pint');
              setIsCartOpen(true);
            }}
            className="px-3.5 py-2 bg-[#07140E] border border-[#D5B77A]/40 hover:border-[#D5B77A] text-[#D5B77A] hover:bg-[#D5B77A] hover:text-[#07140E] transition-all duration-300 rounded-sm text-xs font-sans tracking-wider uppercase font-semibold flex items-center space-x-1.5"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
