import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import { useAppContext } from '../lib/context';
import { formatCurrency } from '../lib/utils';
import gsap from 'gsap';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, currency } = useAppContext();
  const [added, setAdded] = useState(false);
  
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.fromTo('.product-content', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h2 className="text-2xl font-display uppercase mb-4">Product not found</h2>
          <Link to="/shop" className="text-brand-blue underline uppercase text-sm font-semibold">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-content pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen bg-brand-cream">
      <Link to="/shop" className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-brand-black/60 hover:text-brand-black mb-12 transition-colors">
        <ArrowLeft size={16} className="mr-2" /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Image */}
        <div className="aspect-[4/5] bg-white border border-brand-black/10 flex items-center justify-center p-8">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-4 lg:pt-12">
          <div className="mb-4 flex justify-between items-center">
            <div className="text-xs uppercase font-semibold text-brand-black/50">
              {product.category}
            </div>
            <div className="flex text-brand-black text-[10px]">
              ★★★★★
            </div>
          </div>
          <h1 className="font-display text-4xl lg:text-6xl text-brand-black uppercase leading-tight mb-4">{product.name}</h1>
          <p className="font-display text-3xl mb-8">{formatCurrency(product.price, currency)}</p>
          
          <div className="prose prose-sm text-brand-black/80 mb-8">
            <p>{product.description}</p>
          </div>

          <div className="space-y-4 border-t border-brand-black/10 pt-8 mb-12">
            <details className="group border-b border-brand-black/10 pb-4">
              <summary className="flex justify-between items-center font-semibold uppercase text-sm cursor-pointer list-none">
                <span>Size & Fit</span>
                <span className="transition group-open:rotate-45">+</span>
              </summary>
              <div className="text-sm text-brand-black/70 pt-4 pb-2">
                True to size. Model is 5'9" and wearing size S. We recommend choosing your regular size for the best fit.
              </div>
            </details>
            <details className="group border-b border-brand-black/10 pb-4">
              <summary className="flex justify-between items-center font-semibold uppercase text-sm cursor-pointer list-none">
                <span>Material & Care</span>
                <span className="transition group-open:rotate-45">+</span>
              </summary>
              <div className="text-sm text-brand-black/70 pt-4 pb-2">
                Crafted from premium fabrics carefully selected for comfort and longevity. Dry clean only. Do not bleach. Iron on low heat.
              </div>
            </details>
            <details className="group border-b border-brand-black/10 pb-4">
              <summary className="flex justify-between items-center font-semibold uppercase text-sm cursor-pointer list-none">
                <span>Shipping & Returns</span>
                <span className="transition group-open:rotate-45">+</span>
              </summary>
              <div className="text-sm text-brand-black/70 pt-4 pb-2">
                Free standard shipping on orders over $300. Returns accepted within 30 days of delivery. Items must be in original condition with tags attached.
              </div>
            </details>
          </div>

          <div className="space-y-6 border-t border-brand-black/20 pt-8 mt-auto">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 flex items-center justify-center gap-4 text-sm uppercase font-semibold transition-all border border-brand-black ${
                added ? 'bg-green-600 text-white border-green-600' : 'bg-brand-black text-white hover:bg-white hover:text-brand-black'
              }`}
            >
              {added ? (
                'Added to Bag'
              ) : (
                <>Add to Bag <ArrowUpRight size={16} /></>
              )}
            </button>
            <p className="text-[10px] text-center text-brand-black/50 uppercase tracking-widest font-semibold">Free shipping on orders over {formatCurrency(300, currency)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
