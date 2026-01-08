import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import Link from 'next/link';
import { useState } from 'react';

export default function Partners() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Using environment variables or fallback to defaults
    const validUser = process.env.NEXT_PUBLIC_PARTNER_USER || 'partner2026';
    const validPass = process.env.NEXT_PUBLIC_PARTNER_PASSWORD || 'rz-digital-elite';

    if (username === validUser && password === validPass) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <SeoHead 
          title="Partner Login | RZ Digital Studio" 
          description="Access the RZ Digital Studio Partner Portal."
          noIndex={true}
        />
        <Header />
        <main className="bg-slate-50 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-indigo-100">
                <i className="fas fa-lock"></i>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Partner Portal</h1>
              <p className="text-slate-500 text-sm mt-2">Enter your credentials to access the referral program.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Username</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Enter partner username"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Enter password"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg text-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  {error}
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100"
              >
                Access Portal
              </button>
            </form>

            <p className="text-center text-xs text-slate-400 mt-8">
              Authorized personnel only. If you are a student or parent, please return to the <Link href="/" className="text-indigo-600 hover:underline">homepage</Link>.
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SeoHead 
        title="Referral Rewards Program | RZ Digital Studio" 
        description="Join our partnership program. Refer students and earn rewards while helping them succeed."
        noIndex={true}
      />
      <Header />
      
      <main className="bg-slate-50 min-h-screen">
        <section className="section-spacing pt-20 pb-32">
          <div className="max-w-5xl mx-auto px-6">
            
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-3 block">Partnership & Growth</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                The Referral Rewards Program
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We believe the most powerful endorsements come from within our community. The Referral Rewards Program is a strategic initiative designed to build a network of ambitious students invested in mutual success. It is structured as a win-win collaboration that rewards both current clients for their advocacy and new clients for joining our network.
              </p>
            </div>

            {/* Cards Container */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* Card 1: For Referrers */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-indigo-50 text-indigo-700 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-widest border-b border-l border-indigo-100">
                  For You
                </div>
                
                <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-8 text-white text-2xl shadow-lg shadow-indigo-200">
                  <i className="fas fa-hand-holding-dollar"></i>
                </div>
                
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Referrer Rewards</h2>
                <div className="text-5xl font-extrabold text-indigo-600 mb-4 tracking-tight">10% <span className="text-lg text-slate-400 font-medium ml-1 tracking-normal">Cash Back</span></div>
                
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Receive a 10% Cash Back incentive for every new client who successfully signs up using your unique referral.
                </p>
                
                <div className="border-t border-slate-100 pt-6 space-y-3">
                  <div className="flex items-center text-sm text-slate-700 font-medium">
                    <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                    <span>Unique coupon code for easy tracking</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-700 font-medium">
                    <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                    <span>Payout after 3 successful referrals</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-700 font-medium">
                    <i className="fas fa-check-circle text-indigo-500 mr-3"></i>
                    <span>30-day verification period</span>
                  </div>
                </div>
              </div>

              {/* Card 2: For Referees */}
              <div className="bg-slate-900 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden text-white group hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-widest">
                  For Them
                </div>
                
                 <div className="w-14 h-14 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center mb-8 text-indigo-400 text-2xl">
                  <i className="fas fa-gift"></i>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">Student Discount</h2>
                <div className="text-5xl font-extrabold text-white mb-4 tracking-tight">10% <span className="text-lg text-slate-400 font-medium ml-1 tracking-normal">Off</span></div>
                
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Referrees get a 10% Discount on their setup fee when they use a valid referral code from a current RZ Digital Studio client.
                </p>
                
                <div className="border-t border-slate-800 pt-6 space-y-3">
                  <div className="flex items-center text-sm text-slate-300 font-medium">
                    <i className="fas fa-check-circle text-indigo-400 mr-3"></i>
                    <span>Instant discount application</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-300 font-medium">
                    <i className="fas fa-check-circle text-indigo-400 mr-3"></i>
                    <span>Valid for all packages</span>
                  </div>
                  <div className="flex items-center text-sm text-slate-300 font-medium">
                    <i className="fas fa-check-circle text-indigo-400 mr-3"></i>
                    <span>Helps families save money</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payout Schedule Section */}
            <div className="max-w-3xl mx-auto mb-16 bg-slate-100/50 rounded-2xl p-6 border border-slate-200">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
                    <i className="fas fa-calendar-check mr-2 text-indigo-600"></i>
                    Payout Schedule & Terms
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
                    <div>
                        <p className="font-bold text-slate-900 mb-1">Activation Threshold</p>
                        <p>To ensure efficient management, your first payout is triggered once you reach **3 successful referrals**. Subsequent rewards are paid out per referral.</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-900 mb-1">Verification Period</p>
                        <p>Rewards are processed **30 days** after a student's project goes live. This period allows us to finalize the build and ensure long-term client success.</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-3xl p-8 md:p-16 text-center border-2 border-indigo-50 shadow-lg relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to start earning?</h3>
                 <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                   I will generate a **unique coupon code** exclusively for you. Because tracking is based on your specific code, it’s incredibly easy to see when someone has referred by you. The entire system is designed for transparency and simplicity.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                   <Link href="mailto:roger.zhangruizhe@gmail.com?subject=Partnership%20Inquiry" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 text-lg flex items-center">
                     <i className="fas fa-envelope mr-3"></i>
                     Join Program via Email
                   </Link>
                 </div>
                 <p className="mt-8 text-slate-500 font-medium">
                   Contact: <span className="text-indigo-600">roger.zhangruizhe@gmail.com</span>
                 </p>
               </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
