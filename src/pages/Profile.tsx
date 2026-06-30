import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { LogOut, Package, Heart, Settings, ArrowUpRight } from 'lucide-react';
import { useAppContext } from '../lib/context';

const Profile = () => {
  const { user, setUser } = useAppContext();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/auth" />;
  }

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto bg-brand-cream">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-black/20 pb-6">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-tight">My Account</h1>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 text-xs font-semibold uppercase hover:text-brand-blue transition-colors mt-4 md:mt-0"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-2">
          <div className="bg-white p-6 border border-brand-black/10 mb-6 text-center">
             <div className="w-20 h-20 bg-brand-blue rounded-full mx-auto mb-4 border border-brand-black/10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt={user.name} className="w-full h-full object-cover" />
             </div>
             <h2 className="font-semibold text-lg uppercase">{user.name}</h2>
             <p className="text-xs text-brand-black/60">{user.email}</p>
          </div>
          
          <div className="bg-white border border-brand-black/10">
            <button className="w-full flex items-center gap-3 p-4 text-sm font-semibold uppercase border-b border-brand-black/10 bg-brand-black/5">
              <Package size={18} /> Orders
            </button>
            <button className="w-full flex items-center gap-3 p-4 text-sm font-semibold uppercase border-b border-brand-black/10 hover:bg-brand-black/5 transition-colors">
              <Heart size={18} /> Wishlist
            </button>
            <button className="w-full flex items-center gap-3 p-4 text-sm font-semibold uppercase hover:bg-brand-black/5 transition-colors">
              <Settings size={18} /> Settings
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          <div className="bg-white p-8 border border-brand-black/10 h-full">
            <h2 className="font-display text-3xl uppercase mb-6">Recent Orders</h2>
            
            <div className="text-center py-16 border-2 border-dashed border-brand-black/10">
              <Package size={48} className="mx-auto mb-4 text-brand-black/20" />
              <h3 className="font-semibold text-lg uppercase mb-2">No orders yet</h3>
              <p className="text-sm text-brand-black/60 mb-6 max-w-sm mx-auto">
                Looks like you haven't made any purchases yet. Explore our collection.
              </p>
              <button 
                onClick={() => navigate('/shop')}
                className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 text-xs uppercase font-semibold hover:bg-brand-blue transition-colors"
              >
                Start Shopping <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
