import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.hero-text', {
        yPercent: 120,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.from(heroImgRef.current, {
        scale: 1.25,
        opacity: 0,
        duration: 2,
        ease: 'power3.out',
        delay: 0.4
      });

      gsap.from('.hero-fade', {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8
      });

      // Parallax effect on hero image
      gsap.to(heroImgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Scroll animations for other sections
      gsap.utils.toArray('.animate-up').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-20 pb-12 overflow-hidden bg-brand-cream">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24 lg:mt-8 min-h-[85vh] flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[55%] z-10 pt-12 lg:pt-0">
          <div className="mb-6 overflow-hidden">
            <h1 className="font-display text-[15vw] lg:text-[8vw] leading-[0.85] tracking-tight uppercase">
              <span className="block overflow-hidden"><span className="hero-text inline-block">Royal</span></span>
              <span className="block overflow-hidden text-brand-black/30"><span className="hero-text inline-block">Standard</span></span>
              <span className="block overflow-hidden"><span className="hero-text inline-block ml-8 lg:ml-16">Accessories</span></span>
            </h1>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-start gap-8 lg:ml-16 hero-fade relative z-20">
            <p className="max-w-xs text-sm text-brand-black/70 font-medium">
              Discover timeless outfits and luxury accessories crafted for elegance. Style that speaks louder than words.
            </p>
            <Link to="/shop" className="group inline-flex items-center gap-4 bg-transparent text-brand-black border border-brand-black px-6 py-4 text-xs font-semibold uppercase hover:bg-brand-black hover:text-brand-white transition-all">
              Explore Collection 
              <div className="bg-brand-black text-brand-white group-hover:bg-brand-white group-hover:text-brand-black p-1 rounded-full transition-colors">
                <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>
        </div>
        
        <div className="w-full lg:w-[45%] relative lg:h-[75vh]">
          <div className="w-full h-[60vh] lg:h-full overflow-hidden relative bg-brand-black/5 rounded-sm">
            <img 
              ref={heroImgRef}
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2000&auto=format&fit=crop" 
              alt="Luxury Accessories" 
              className="w-full h-[120%] object-cover -mt-[10%]"
            />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -left-12 bottom-12 bg-white p-6 shadow-xl hidden lg:block max-w-[200px] border border-brand-black/5 hero-fade">
            <div className="text-[10px] font-bold uppercase mb-2 text-brand-blue">New Collection</div>
            <div className="font-display text-xl uppercase mb-1">Golden Hour</div>
            <div className="text-xs text-brand-black/60">Curated premium jewelry and watches for any occasion.</div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-16 animate-up">
        <h2 className="text-xl font-medium mb-6 uppercase tracking-wide">Filter By</h2>
        <div className="flex flex-wrap gap-4 items-center justify-between border-t border-b border-brand-black/20 py-4">
          <div className="flex flex-wrap gap-4">
            <select className="bg-white border border-brand-black/10 px-4 py-2 text-sm focus:outline-none min-w-[120px]">
              <option>CATEGORY</option>
            </select>
            <select className="bg-white border border-brand-black/10 px-4 py-2 text-sm focus:outline-none min-w-[100px]">
              <option>SIZE</option>
            </select>
            <div className="bg-brand-black text-brand-white px-4 py-2 text-sm flex items-center gap-2">
              <span>AMBER..</span>
              <button><X size={14} /></button>
            </div>
            <select className="bg-white border border-brand-black/10 px-4 py-2 text-sm focus:outline-none min-w-[100px]">
              <option>PRICE</option>
            </select>
          </div>
          <div className="relative flex-1 max-w-xs mt-4 lg:mt-0">
             <input type="text" placeholder="SEARCH" className="w-full bg-white border border-brand-black/10 px-4 py-2 text-sm focus:outline-none" />
             <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-black/40" />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24 relative animate-up">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-brand-blue -z-10 hidden lg:block"></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:pr-8 py-8 lg:bg-transparent bg-brand-blue p-4 lg:p-0">
            <div className="text-sm mb-12">/02</div>
            <h2 className="font-display text-5xl uppercase leading-tight mb-6">New<br/>Arrivals</h2>
            <p className="text-sm mb-12">Stay in style with our newest collection. Fashion that fits every moment</p>
            <Link to="/shop" className="inline-flex items-center gap-4 bg-white px-6 py-3 font-medium text-sm hover:bg-brand-black hover:text-white transition-colors border border-brand-black/10">
              Buy Now <div className="bg-brand-black text-white p-1 rounded-full"><ArrowUpRight size={14} /></div>
            </Link>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.slice(0, 6).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="animate-up group bg-white p-4 flex flex-col h-full border border-brand-black/5 hover:border-brand-black/20 transition-colors">
                <div className="aspect-square w-full bg-brand-cream/50 mb-4 overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                     <ArrowUpRight size={16} />
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm uppercase max-w-[70%]">{product.name}</h3>
                    <div className="flex text-brand-black text-[10px]">
                      ★★★★★
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] text-brand-black/60 uppercase">XS - XXXL</p>
                    <p className="font-display text-lg font-medium">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Style Out Look */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24 animate-up">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 border-b border-brand-black/20 pb-4">
          <h2 className="font-display text-5xl md:text-6xl uppercase">Style Out Look</h2>
          <p className="max-w-sm text-sm lg:text-right mt-6 lg:mt-0">Explore our extensive property listings across prime locations, meet professional agents,</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          <div className="md:col-span-2 bg-white p-8 border border-brand-black/5 aspect-square md:aspect-auto flex flex-col items-center justify-center relative group overflow-hidden">
             <img src={products[0]?.image || "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format"} className="h-2/3 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Style" />
             <div className="absolute bottom-6 left-6 text-sm font-semibold uppercase">Softwear</div>
             <div className="absolute bottom-6 right-6 text-sm font-semibold uppercase">Softwear</div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
             <div className="bg-white p-6 border border-brand-black/5 aspect-square flex flex-col items-center justify-center relative group overflow-hidden">
                <img src={products[1]?.image || "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=400&auto=format"} className="h-2/3 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Jacket" />
                <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase">Softwear</div>
             </div>
             <div className="bg-white p-6 border border-brand-black/5 aspect-square flex flex-col items-center justify-center relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=400&auto=format" className="h-1/2 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700" alt="Belt" />
                <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase">Softwear</div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Elevate Style / Activewear */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto mb-24 animate-up">
        <div className="flex flex-wrap justify-between items-center text-sm font-semibold uppercase mb-6">
          <div>Activewear</div>
          <div>Sport Kalcer</div>
        </div>
        <div className="flex flex-wrap gap-2 mb-16 border-b border-brand-black/20 pb-12">
          {['Classic', 'Everyday', 'Soft', 'Foundation', 'Active', 'Essential'].map((tab, i) => (
             <button key={tab} className={`px-8 py-2 text-sm border border-brand-black hover:bg-brand-black hover:text-white transition-colors uppercase ${i === 4 ? 'bg-brand-black text-white' : 'bg-transparent text-brand-black'}`}>
               {tab}
             </button>
          ))}
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-sm mb-4 md:mb-0">/04</div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-right leading-[0.9]">Elevate Your<br/>Daily Style</h2>
        </div>
        
        <div className="flex gap-2 mb-8">
           <button className="p-2 border border-brand-black hover:bg-brand-black hover:text-white transition-colors"><ChevronLeft size={20}/></button>
           <button className="p-2 border border-brand-black hover:bg-brand-black hover:text-white transition-colors"><ChevronRight size={20}/></button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {products.slice(2, 6).map(product => (
             <Link key={product.id} to={`/product/${product.id}`} className="animate-up bg-white p-6 border border-brand-black/5 group">
                <div className="text-[10px] font-semibold mb-4">30% OFF</div>
                <div className="aspect-square mb-6 bg-brand-cream/30">
                  <img src={product.image} className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" alt={product.name} />
                </div>
                <div className="flex justify-between items-center text-[10px] font-semibold uppercase">
                  <span className="truncate pr-2">{product.name}</span>
                  <span>${product.price}</span>
                </div>
             </Link>
           ))}
        </div>
      </section>

      {/* Banner */}
      <section className="border-t border-brand-black/20 pt-4 mb-24 animate-up">
        <div className="text-center text-sm font-semibold uppercase mb-4">USE ORMAS25 NOW, GET 25% OFF YOUR FIRST FIUT</div>
        <div className="relative h-[60vh] w-full overflow-hidden bg-brand-blue">
           <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format" alt="Banner" className="absolute inset-0 w-full h-full object-cover object-right opacity-80 mix-blend-multiply" />
           <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between">
              <h2 className="font-display text-5xl md:text-8xl text-white uppercase max-w-2xl leading-[0.9]">The Future<br/>Of Comfort<br/>Awlayes</h2>
              <Link to="/shop" className="self-start inline-flex items-center gap-4 bg-white px-6 py-3 font-medium text-sm hover:bg-brand-black hover:text-white transition-colors">
                Buy Now <div className="bg-brand-black text-white p-1 rounded-full"><ArrowUpRight size={14} /></div>
              </Link>
           </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto animate-up">
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-brand-black/20 pb-16">
            <h2 className="font-display text-4xl md:text-6xl uppercase max-w-md leading-none">Subscribe Our Newsletters</h2>
            <div className="w-full max-w-md">
               <p className="text-sm mb-6">Discover Quality Of Our Blog That Reflects Your Style And Makes Everyday Using More Enjoyable.</p>
               <form className="flex border border-brand-black/20 p-1 bg-white">
                 <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 text-sm focus:outline-none" />
                 <button className="bg-brand-black text-white px-6 py-2 text-xs font-semibold uppercase hover:bg-brand-blue transition-colors">Check It Now</button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
