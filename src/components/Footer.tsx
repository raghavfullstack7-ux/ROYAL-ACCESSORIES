import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-black text-brand-white pt-16 pb-8 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 text-xs uppercase tracking-widest font-semibold">
          <Link to="/shop" className="hover:text-brand-blue transition-colors">New Arrival</Link>
          <Link to="/shop" className="hover:text-brand-blue transition-colors">Most Pick</Link>
          <Link to="/shop" className="hover:text-brand-blue transition-colors">Sale</Link>
          <Link to="/shop" className="hover:text-brand-blue transition-colors">Women</Link>
          <Link to="/shop" className="hover:text-brand-blue transition-colors">Men</Link>
          <Link to="/shop" className="hover:text-brand-blue transition-colors">Sneakers</Link>
          <Link to="/about" className="hover:text-brand-blue transition-colors">Store Location</Link>
          <Link to="/about" className="hover:text-brand-blue transition-colors">Contact Us</Link>
        </div>

        {/* Giant Logo */}
        <div className="text-center">
          <h2 className="font-display text-[15vw] leading-none tracking-tight">ROYAL ACC.</h2>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 border-t border-brand-white/10 pt-8">
          <p>&copy; {new Date().getFullYear()} Royal Accessories. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-brand-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-brand-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
