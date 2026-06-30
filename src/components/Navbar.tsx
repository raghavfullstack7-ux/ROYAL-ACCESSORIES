import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useAppContext } from '../lib/context';
import { cn } from '../lib/utils';
import CartDrawer from './CartDrawer';

const Navbar = () => {
  const { cart, setIsCartOpen } = useAppContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="fixed w-full z-40 bg-brand-cream border-b border-brand-black/10 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-display font-bold text-xl md:text-3xl tracking-tight text-brand-black uppercase">
                Royal Accessories
              </Link>
            </div>

            {/* Center Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
              <input 
                type="text"
                placeholder="Search"
                className="w-full bg-brand-white px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-black"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-black/60 hover:text-brand-black">
                <Search size={18} />
              </button>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                className="flex items-center space-x-2 text-sm font-medium hover:opacity-70 transition-opacity"
                onClick={() => setIsCartOpen(true)}
              >
                <span className="uppercase text-xs tracking-widest font-semibold">BAG</span>
                <div className="relative">
                  <ShoppingBag size={18} strokeWidth={2} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-2 text-[10px] font-bold bg-brand-black text-brand-white w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </button>
              
              <Link to="/auth" className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
                <div className="w-8 h-8 bg-brand-blue rounded-full overflow-hidden border border-brand-black/10">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium">Jenny</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex md:hidden items-center space-x-4">
              <button onClick={() => setIsCartOpen(true)} className="relative">
                <ShoppingBag size={24} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-2 text-[10px] font-bold bg-brand-black text-brand-white w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden absolute top-20 left-0 w-full bg-brand-cream border-b border-brand-black/10 overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-[300px] py-4" : "max-h-0"
        )}>
          <div className="px-4 space-y-4">
            <div className="relative mb-4">
              <input 
                type="text"
                placeholder="Search"
                className="w-full bg-brand-white px-4 py-3 text-sm border border-brand-black/10 focus:outline-none"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-black/60" />
            </div>
            <Link to="/auth" className="flex items-center space-x-3 w-full p-2 hover:bg-brand-black/5" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="w-10 h-10 bg-brand-blue rounded-full overflow-hidden border border-brand-black/10">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
              </div>
              <span className="font-medium">Profile</span>
            </Link>
          </div>
        </div>
      </header>
      
      <CartDrawer />
    </>
  );
};

export default Navbar;
