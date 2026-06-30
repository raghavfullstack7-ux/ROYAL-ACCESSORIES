import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto min-h-screen bg-brand-cream">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-black/20 pb-6">
        <h1 className="font-display text-5xl md:text-6xl uppercase tracking-tight">Contact Us</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-display uppercase mb-4">Get in Touch</h2>
            <p className="text-brand-black/70 mb-8 max-w-md">
              Have a question or need assistance? We're here to help. Reach out to us through any of the following channels.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold uppercase text-sm mb-1">Store Location</h3>
                <p className="text-brand-black/70 text-sm">
                  123 Fashion Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold uppercase text-sm mb-1">Phone</h3>
                <p className="text-brand-black/70 text-sm">
                  +1 (555) 123-4567<br />
                  Mon-Fri, 9am - 6pm EST
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1" size={20} />
              <div>
                <h3 className="font-semibold uppercase text-sm mb-1">Email</h3>
                <p className="text-brand-black/70 text-sm">
                  hello@royalaccessories.com<br />
                  support@royalaccessories.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 border border-brand-black/10">
          <h2 className="text-xl font-display uppercase mb-6">Send a Message</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Email</label>
              <input required type="email" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Subject</label>
              <input required type="text" className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30" />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-brand-black/70 mb-2">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 border border-brand-black/20 focus:outline-none focus:border-brand-black bg-brand-cream/30 resize-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand-black text-white py-4 text-sm uppercase font-semibold hover:bg-brand-blue transition-colors flex items-center justify-center gap-2">
              Send Message <ArrowUpRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
