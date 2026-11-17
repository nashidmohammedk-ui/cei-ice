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
    <div className="group relative rounded-sm bg-[#161514] border border-white/10 hover:border-[#C5A46D]/50 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-lg select-none">
      {/* 3D Interactive Exploded-View Reveal Viewer */}
      <ProductRevealViewer product={product} onQuickView={onQuickView} />

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between bg-[#161514]">
        <div>
          {/* Collection & Origin */}
          <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#C5A46D] font-light mb-2">
            <span>{product.collectionTitle}</span>
            <span className="font-serif italic capitalize text-white/50 tracking-normal text-[11px]">
              {product.provenance.country}
            </span>
          </div>

          {/* Product Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-serif text-lg font-medium text-[#F5F2EB] group-hover:text-[#C5A46D] transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {product.name}
          </h3>

          {/* French Haute Glacerie Title */}
          <p className="font-serif italic text-xs text-white/40 mt-1 line-clamp-1">
            {product.frenchName}
          </p>

          {/* Artisanal Description / Quote */}
          <p className="text-[11px] text-white/65 font-light mt-2.5 line-clamp-2 leading-relaxed italic min-h-[34px]">
            "{product.tagline}"
          </p>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2 mt-3 text-xs">
            <div className="flex items-center text-[#C5A46D]">
              <Star className="w-3 h-3 fill-[#C5A46D] text-[#C5A46D]" />
              <span className="ml-1 text-[11px] font-medium text-white/80">
                {product.rating.toFixed(product.rating % 1 === 0 ? 0 : 2)}
              </span>
            </div>
            <span className="text-white/20">•</span>
            <span className="text-[10px] text-white/40 font-light">
              {product.reviewsCount} reviews
            </span>
          </div>
        </div>

        {/* Pricing & Add to Cart Bar */}
        <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="text-[9px] text-white/40 uppercase tracking-widest block font-light">
              Handcrafted Bar
            </span>
            <span className="font-serif text-lg font-semibold text-[#C5A46D]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              addToCart(product, 1, 'single-pint');
              setIsCartOpen(true);
            }}
            className="px-4 py-1.5 bg-transparent border border-white/20 hover:border-[#C5A46D] text-white/90 hover:text-[#C5A46D] hover:bg-[#C5A46D]/5 transition-all duration-300 rounded-sm text-[10px] font-sans tracking-[0.2em] uppercase font-semibold flex items-center space-x-1.5"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
