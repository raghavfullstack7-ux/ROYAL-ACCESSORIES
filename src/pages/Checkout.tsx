import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAppContext } from '../lib/context';
import { formatCurrency } from '../lib/utils';
import { CheckCircle, Lock } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, currency, clearCart } = useAppContext();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    // Simulate sending email notification (in a real app this would be backend)
    console.log("Email notification sent for order.");
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 bg-brand-cream">
        <h2 className="text-2xl font-display uppercase">Your bag is empty</h2>
        <Link to="/shop" className="text-brand-blue underline uppercase text-sm font-semibold">Return to Shop</Link>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-6 px-4 text-center bg-brand-cream">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
          <CheckCircle size={40} />
        </div>
        <h1 className="font-display text-4xl text-brand-black uppercase">Order Confirmed!</h1>
        <p className="text-brand-black/70 max-w-md">
          Thank you for your purchase. Your order #ORD-{Math.floor(Math.random() * 10000)} is processing. 
          We've sent a confirmation email with your order details.
        </p>
        <button 
          onClick={() => {
            clearCart();
            navigate('/shop');
          }}
          className="mt-8 bg-brand-black text-white px-8 py-3 text-sm uppercase font-semibold hover:bg-brand-blue transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen bg-brand-cream">
      <h1 className="font-display text-5xl md:text-6xl text-brand-black uppercase mb-8 tracking-tight">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          {/* Steps Indicator */}
          <div className="flex items-center mb-8 text-xs font-semibold uppercase tracking-wider">
            <span className={`${step >= 1 ? 'text-brand-black' : 'text-brand-black/40'}`}>Shipping</span>
            <span className="mx-4 text-brand-black/20">/</span>
            <span className={`${step >= 2 ? 'text-brand-black' : 'text-brand-black/40'}`}>Payment</span>
          </div>

          {step === 1 && (
            <form onSubmit={handleShippingSubmit} className="space-y-6 bg-white p-8 border border-brand-black/10">
              <h2 className="text-xl font-display uppercase mb-4">Shipping Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Address</label>
                <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">City</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Postal Code</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                </div>
              </div>
              <button type="submit" className="w-full bg-brand-black text-white py-4 text-sm uppercase font-semibold hover:bg-brand-blue transition-colors mt-8">
                Continue to Payment
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handlePaymentSubmit} className="space-y-6 bg-white p-8 border border-brand-black/10">
              <h2 className="text-xl font-display uppercase mb-4 flex items-center gap-2">
                <Lock size={18} className="text-brand-black" /> Secure Payment
              </h2>
              <p className="text-sm text-brand-black/60 mb-6">All transactions are secure and encrypted.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Card Number</label>
                  <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30 font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Expiry (MM/YY)</label>
                    <input required type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">CVC</label>
                    <input required type="text" placeholder="123" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Name on Card</label>
                  <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button type="button" onClick={() => setStep(1)} className="w-1/3 border border-brand-black text-brand-black py-4 text-sm uppercase font-semibold hover:bg-brand-black/5 transition-colors">
                  Back
                </button>
                <button type="submit" className="w-2/3 bg-brand-black text-white py-4 text-sm uppercase font-semibold hover:bg-brand-blue transition-colors flex justify-center items-center gap-2">
                  <Lock size={16} /> Pay {formatCurrency(cartTotal, currency)}
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white p-8 border border-brand-black/10">
            <h2 className="text-xl font-display uppercase mb-6 border-b border-brand-black/10 pb-4">Order Summary</h2>
            <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-2 hover:bg-brand-cream/30 transition-colors">
                  <div className="w-20 h-20 bg-brand-cream/50 p-2 border border-brand-black/5 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 py-1">
                    <h3 className="font-semibold text-sm uppercase">{item.name}</h3>
                    <p className="text-xs text-brand-black/60 uppercase mt-1">Qty: {item.quantity}</p>
                  </div>
                  <div className="font-display text-lg py-1">
                    {formatCurrency(item.price * item.quantity, currency)}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-brand-black/10 pt-6 space-y-3 text-sm">
              <div className="flex justify-between text-brand-black/70 font-semibold uppercase text-xs">
                <span>Subtotal</span>
                <span className="font-display text-lg">{formatCurrency(cartTotal, currency)}</span>
              </div>
              <div className="flex justify-between text-brand-black/70 font-semibold uppercase text-xs">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold uppercase text-sm pt-4 mt-4 border-t border-brand-black/10">
                <span>Total</span>
                <span className="font-display text-2xl">{formatCurrency(cartTotal, currency)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
