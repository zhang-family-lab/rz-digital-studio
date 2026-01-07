import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// Initialize Stripe outside of component to avoid recreating it
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Pricing() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (packageType: 'elite' | 'pro') => {
    setLoading(true);
    
    // Get correct price IDs based on package
    const prices = packageType === 'elite' 
      ? {
          setupId: process.env.NEXT_PUBLIC_PRICE_ID_ELITE_SETUP,
          subscriptionId: process.env.NEXT_PUBLIC_PRICE_ID_ELITE_SUB
        }
      : {
          setupId: process.env.NEXT_PUBLIC_PRICE_ID_PRO_SETUP,
          subscriptionId: process.env.NEXT_PUBLIC_PRICE_ID_PRO_SUB
        };

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prices),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to start checkout. Please check your configuration.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="pricing" className="bg-slate-900 text-white section-spacing">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Investment for Your Future</h2>
        <p className="text-slate-400 mb-12 text-sm">Two flexible packages. Professional management.</p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Starter</div>
            <h4 className="text-2xl font-extrabold mb-2">Student Elite Portfolio</h4>
            <div className="text-4xl font-black mb-1">$299 <span className="text-sm text-slate-400 font-normal italic">One-time setup</span></div>
            <p className="text-indigo-600 font-bold text-sm mb-8 italic">Including $29/mo all-inclusive hosting & updates</p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span><strong>Custom Domain</strong> included (e.g., yourname.com)</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Dynamic Resume & Project Boards</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>SEO optimization for admission namesakes</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Up to 3 content updates</span></li>
            </ul>

            <button 
              onClick={() => handleCheckout('elite')}
              disabled={loading}
              className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Pay Deposit & Start'}
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-4 uppercase font-bold tracking-tighter">Secure payment via Stripe</p>
          </div>

          <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Premium</div>
            <h4 className="text-2xl font-extrabold mb-2">Student Pro Portfolio</h4>
            <div className="text-4xl font-black mb-1">$499 <span className="text-sm text-slate-400 font-normal italic">One-time setup</span></div>
            <p className="text-indigo-600 font-bold text-sm mb-8 italic">Including $49/mo all-inclusive hosting & updates</p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span><strong>Custom Domain</strong> included (e.g., yourname.com)</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Dynamic Resume & Project Boards</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>SEO optimization for admission namesakes</span></li>
              <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Unlimited content updates</span></li>
            </ul>

            <button 
              onClick={() => handleCheckout('pro')}
              disabled={loading}
              className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Pay Deposit & Start'}
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-4 uppercase font-bold tracking-tighter">Secure payment via Stripe</p>
          </div>
        </div>
      </div>
    </section>
  );
}