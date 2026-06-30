import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../lib/context';
import { formatCurrency } from '../lib/utils';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
  const { cart, currency, updateQuantity, isCartOpen, setIsCartOpen, cartTotal } = useAppContext();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-brand-black/20 backdrop-blur-sm z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={cn(
        "fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col",
        isCartOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="p-6 flex justify-between items-center border-b border-brand-black/10">
          <h2 className="font-display text-3xl uppercase tracking-tight">Your Bag</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-brand-black/50 hover:text-brand-black">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-brand-cream/30">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-black/50 space-y-6">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="uppercase text-sm font-semibold tracking-wide">Your bag is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-4 px-8 py-3 bg-brand-black text-white text-xs uppercase font-semibold hover:bg-brand-blue transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-6 bg-white p-4 border border-brand-black/10">
                <div className="w-24 h-24 bg-brand-cream/50 p-2 border border-brand-black/5 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-semibold text-sm uppercase">{item.name}</h3>
                    <p className="text-xs text-brand-black/50 uppercase mt-1">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-brand-black/20 text-xs font-semibold">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-brand-black/5">
                        <Minus size={12} />
                      </button>
                      <span className="px-3 py-1 border-x border-brand-black/20 min-w-[2.5rem] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-brand-black/5">
                        <Plus size={12} />
                      </button>
                    </div>
                    <p className="font-display text-lg">{formatCurrency(item.price * item.quantity, currency)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-brand-black/10">
            <div className="flex justify-between mb-4">
              <span className="font-semibold uppercase text-sm">Subtotal</span>
              <span className="font-display text-2xl">{formatCurrency(cartTotal, currency)}</span>
            </div>
            <p className="text-xs text-brand-black/50 uppercase font-semibold mb-6">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={() => {
                setIsCartOpen(false);
                // navigate to checkout (omitted for now)
              }}
              className="w-full py-4 bg-brand-black text-white text-sm uppercase font-semibold hover:bg-brand-blue transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
