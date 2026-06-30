import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../lib/context';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({ id: '1', email, name: email.split('@')[0] });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen pt-32 pb-12 flex items-center justify-center px-4 bg-brand-cream">
      <div className="max-w-md w-full bg-white p-8 md:p-12 border border-brand-black/10 shadow-sm relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue"></div>
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl uppercase mb-4">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-sm text-brand-black/60">
            {isLogin ? 'Enter your details to access your account.' : 'Join us to track orders and save your favorites.'}
          </p>
          <div className="mt-6 inline-block bg-brand-black text-white px-3 py-1 text-xs uppercase font-semibold">
            Demo Mode Active
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30"
              />
            </div>
          )}
          
          <div>
            <label className="block text-xs font-semibold uppercase mb-2">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30"
            />
          </div>

          {isLogin && (
            <div className="flex justify-end">
              <a href="#" className="text-xs font-semibold uppercase text-brand-black/60 hover:text-brand-black">Forgot password?</a>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-brand-black text-white py-4 text-sm uppercase font-semibold hover:bg-brand-blue transition-colors mt-4 flex items-center justify-center gap-2"
          >
            {isLogin ? 'Sign In' : 'Sign Up'} <ArrowUpRight size={16} />
          </button>
        </form>

        <div className="mt-8 text-center text-xs font-semibold uppercase text-brand-black/70">
          {isLogin ? (
            <p>Don't have an account? <button onClick={() => setIsLogin(false)} className="text-brand-black underline ml-2">Sign up</button></p>
          ) : (
            <p>Already have an account? <button onClick={() => setIsLogin(true)} className="text-brand-black underline ml-2">Sign in</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
