import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { products } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { useAppContext } from '../lib/context';
import gsap from 'gsap';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { currency } = useAppContext();
  const location = useLocation();

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      const match = categories.find(c => c.toLowerCase() === categoryParam.toLowerCase());
      if (match) {
        setActiveCategory(match);
      }
    }
  }, [location, categories]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate network request

    return () => clearTimeout(timer);
  }, [activeCategory]);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (!isLoading) {
      gsap.fromTo('.product-card', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [isLoading, filteredProducts]);

  return (
    <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen bg-brand-cream">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-black/20 pb-6">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-tight">Shop</h1>
        <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 text-xs font-semibold uppercase transition-colors border ${
                activeCategory === category 
                  ? "bg-brand-black text-white border-brand-black" 
                  : "bg-transparent text-brand-black border-brand-black hover:bg-brand-black hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col h-full bg-white p-4 border border-brand-black/5 animate-pulse">
              <div className="aspect-[4/5] bg-brand-black/10 mb-4 rounded-sm"></div>
              <div className="mt-auto space-y-3">
                <div className="h-4 bg-brand-black/10 rounded w-3/4"></div>
                <div className="flex justify-between items-end">
                  <div className="h-3 bg-brand-black/10 rounded w-1/4"></div>
                  <div className="h-5 bg-brand-black/10 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          ))
        ) : (
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="product-card group flex flex-col h-full bg-white p-4 border border-brand-black/5 hover:border-brand-black/20 transition-colors">
              <div className="aspect-[4/5] bg-brand-cream/50 mb-4 overflow-hidden relative">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-brand-black text-white text-[10px] font-bold px-2 py-1 uppercase z-10">New In</span>
                )}
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                   <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="mt-auto">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-sm uppercase max-w-[70%]">{product.name}</h3>
                  <div className="flex text-brand-black text-[10px]">★★★★★</div>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[10px] text-brand-black/60 uppercase">{product.category}</p>
                  <p className="font-display text-lg font-medium">{formatCurrency(product.price, currency)}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-brand-black/50">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
