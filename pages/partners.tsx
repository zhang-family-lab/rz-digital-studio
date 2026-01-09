import Header from '../components/Header';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import Link from 'next/link';
import { useState } from 'react';

export default function Partners() {
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      try {
        await fetch('/api/capture-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, honeypot, source: 'Partnership Portal' }),
        });
      } catch (error) {
        console.error('Lead capture error', error);
      } finally {
        // Grant access regardless of email success to avoid friction
        setLoading(false);
        setIsAccessGranted(true);
      }
    }
  };

  if (!isAccessGranted) {
    return (
      <>
        <SeoHead 
          title="Partnership Portal | RZ Digital Studio" 
          description="Access the RZ Digital Studio Partnership Proposal."
          noIndex={true}
        />
        <Header />
        <main className="bg-slate-50 min-h-screen flex items-center justify-center px-4">
          <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-indigo-100">
                <i className="fas fa-file-contract"></i>
              </div>
              <h1 className="text-2xl font-bold text-slate-900">Partnership Portal</h1>
              <p className="text-slate-500 text-sm mt-2">Enter your email to view our wholesale pricing and partnership details.</p>
            </div>

            <form onSubmit={handleAccess} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                  placeholder="Enter your professional email"
                  required
                />
                {/* Honeypot field - hidden from real users */}
                <input 
                  type="text" 
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-100 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : 'View Proposal'}
              </button>
            </form>

            <p className="text-center text-xs text-slate-400 mt-8">
              Confidential Business Proposal. <Link href="/" className="text-indigo-600 hover:underline">Return Home</Link>.
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
        title="Partnership Proposal | RZ Digital Studio"
        description="Elevating Student Profiles with Digital Branding. A white-label partnership opportunity for educational consultants."
        noIndex={true}
      />
      <Header />

      <main className="bg-slate-50 min-h-screen pb-20">
        {/* Proposal Header */}
        <section className="bg-white border-b border-slate-200">
             <div className="max-w-4xl mx-auto px-6 py-20 text-center">
                 <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-widest mb-4">
                    Partnership Proposal
                 </span>
                 <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                    Elevating Student Profiles with <span className="text-indigo-600">Digital Branding</span>
                 </h1>
                 <p className="text-lg text-slate-500 mb-0">
                    Proposer: <strong className="text-slate-900">Roger Zhang</strong> | Founder, <strong className="text-slate-900">RZ Digital Studio</strong>
                 </p>
             </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 space-y-16 py-16">

            {/* 1. Industry Insight */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">1</span>
                    Industry Insight: Why Students Need a Personal Website
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none text-slate-600">
                    <p className="mb-4">
                        In the competitive landscape of US college admissions, "Holistic Review" increasingly relies on a student's ability to showcase depth beyond the Common App. The 150-character limit for activities and the 650-word personal statement are often insufficient to capture a truly "standout" background.
                    </p>
                    <p className="font-medium text-slate-800">
                        Our solution: We provide high schoolers with custom-built Digital Portfolios that present their research, art projects, and non-profit initiatives in the most intuitive and professional way possible for admissions officers.
                    </p>
                </div>
            </section>

            {/* 2. Core Advantages */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">2</span>
                    Our Core Advantages
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">Peer-to-Peer Insight</h3>
                        <p className="text-sm text-slate-600">As a high school student myself, I have a better grasp of our generation's aesthetics and how to showcase individuality while maintaining professional standards.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">Cutting-Edge Tech Stack</h3>
                        <p className="text-sm text-slate-600">Unlike clunky Wix or WordPress sites, we deliver industrial-grade speed (Next.js + Node.js) and SEO optimization, ensuring admissions officers can access the site instantly.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="font-bold text-slate-900 mb-2">White Label Support</h3>
                        <p className="text-sm text-slate-600">We support complete removal of our branding, allowing the service to integrate seamlessly into your agency's existing offerings and enhance your brand's prestige.</p>
                    </div>
                </div>
            </section>

             {/* 3. White Label Branding */}
             <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">3</span>
                    White Label Branding & Empowerment
                </h2>
                <div className="bg-indigo-900 text-white rounded-2xl p-8 shadow-xl">
                    <p className="mb-8 text-indigo-100">We understand the importance of agency brand consistency. All delivered websites offer the following customization options:</p>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-white">Co-Branding</strong>
                                <span className="text-indigo-200 text-sm">The footer can be labeled as "Powered by [Your Agency Name] x RZ Digital Studio".</span>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-white">Anonymous Mode</strong>
                                <span className="text-indigo-200 text-sm">Hide all developer information. The website will appear as a high-end product developed by your own in-house technical team.</span>
                            </div>
                        </div>
                         <div className="flex items-start">
                            <i className="fas fa-check-circle text-indigo-400 mt-1 mr-3"></i>
                            <div>
                                <strong className="block text-white">Private Delivery</strong>
                                <span className="text-indigo-200 text-sm">All feedback can be channeled through your consultants, ensuring parents perceive the agency’s comprehensive professional capabilities.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Pricing & Profit Sharing */}
            <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">4</span>
                    Pricing & Profit Sharing
                </h2>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
                    <div className="p-6 border-b border-slate-100 bg-slate-50/50">
                        <h3 className="font-bold text-slate-900">A. Year 1 Package (All-inclusive)</h3>
                        <p className="text-sm text-slate-500">Website Design & Development + 12 Months Global Edge Hosting + SSL + Domain Mgmt</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 text-slate-500 uppercase font-bold text-xs">
                                <tr>
                                    <th className="px-6 py-4">Tier</th>
                                    <th className="px-6 py-4">Wholesale (Your Cost)</th>
                                    <th className="px-6 py-4">Suggested Retail (MSRP)</th>
                                    <th className="px-6 py-4 text-indigo-600">Est. Agency Profit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-900">Standard</td>
                                    <td className="px-6 py-4 font-mono">$299</td>
                                    <td className="px-6 py-4 font-mono text-slate-500">$799 - $1,199</td>
                                    <td className="px-6 py-4 font-mono font-bold text-green-600">$500 - $900</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 font-bold text-slate-900">Premium (Custom)</td>
                                    <td className="px-6 py-4 font-mono">$499</td>
                                    <td className="px-6 py-4 font-mono text-slate-500">$1,499 - $2,499</td>
                                    <td className="px-6 py-4 font-mono font-bold text-green-600">$1,000 - $2,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <div className="bg-slate-100 rounded-xl p-6 text-sm">
                    <h3 className="font-bold text-slate-900 mb-2">B. Renewal (From Year 2)</h3>
                    <p className="text-slate-600 mb-3">Starting from the 13th month, an annual maintenance fee is required to keep the site live for future visitors.</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        <li className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200">
                            <span className="font-semibold mr-2">Standard Renewal:</span> $150/year <span className="text-slate-400 text-xs ml-2">(MSRP $299+/year)</span>
                        </li>
                        <li className="flex items-center bg-white px-4 py-2 rounded-lg border border-slate-200">
                            <span className="font-semibold mr-2">Premium Renewal:</span> $250/year <span className="text-slate-400 text-xs ml-2">(MSRP $499+/year)</span>
                        </li>
                    </ul>
                </div>
            </section>

             {/* 5. Feature List */}
             <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">5</span>
                    Feature List
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                     {/* Standard */}
                     <div className="border border-slate-200 rounded-2xl p-6 hover:border-indigo-300 transition bg-white">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                            <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">$299 All-inclusive</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-bolt text-indigo-500 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-slate-900 text-sm block">High Performance</strong>
                                    <span className="text-slate-500 text-xs">Built on Next.js, Lighthouse score 95+, FCP &lt; 1.0s.</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <i className="fas fa-cubes text-indigo-500 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-slate-900 text-sm block">Core Modules</strong>
                                    <span className="text-slate-500 text-xs">Bio, Portfolio Gallery, and Integrated Resume Viewer (PDF).</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <i className="fas fa-server text-indigo-500 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-slate-900 text-sm block">Hosting</strong>
                                    <span className="text-slate-500 text-xs">Includes 12 months of Vercel global edge hosting for instant access worldwide.</span>
                                </div>
                            </li>
                        </ul>
                     </div>

                     {/* Premium */}
                     <div className="border border-indigo-100 bg-indigo-50/50 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-bold text-indigo-900">Premium Package</h3>
                            <span className="bg-white text-indigo-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm">$499 All-inclusive</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fas fa-layer-group text-indigo-600 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-indigo-900 text-sm block">Multi-Page Architecture</strong>
                                    <span className="text-indigo-700/80 text-xs">Up to 5 independent sub-pages (e.g., Research, Art Gallery, Personal Blog).</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <i className="fas fa-video text-indigo-600 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-indigo-900 text-sm block">Multimedia Integration</strong>
                                    <span className="text-indigo-700/80 text-xs">Embedded videos, interactive data charts, and GitHub repositories.</span>
                                </div>
                            </li>
                             <li className="flex items-start">
                                <i className="fas fa-search text-indigo-600 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-indigo-900 text-sm block">SEO Optimization</strong>
                                    <span className="text-indigo-700/80 text-xs">Keyword optimization for the student's name to dominate search results.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <i className="fas fa-user-secret text-indigo-600 mt-1 mr-3 text-xs"></i>
                                <div>
                                    <strong className="text-indigo-900 text-sm block">Deep White Labeling</strong>
                                    <span className="text-indigo-700/80 text-xs">Full anonymous mode available for a bespoke agency experience.</span>
                                </div>
                            </li>
                        </ul>
                     </div>
                </div>
             </section>

             {/* 6. Workflow */}
             <section>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm mr-3">6</span>
                    Workflow
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { step: '1', title: 'Data Submission', desc: 'The agency provides the student\'s resume draft and core activity photos.' },
                        { step: '2', title: 'Drafting', desc: 'We complete the Next.js site build within 3 business days.' },
                        { step: '3', title: 'Refinement', desc: '1-3 rounds of detailed adjustments based on the consultant’s strategy.' },
                        { step: '4', title: 'Launch', desc: 'The site goes live with a custom short URL.' },
                    ].map((item) => (
                        <div key={item.step} className="bg-white p-5 rounded-xl border border-slate-100 text-center relative group hover:-translate-y-1 transition duration-300">
                             <div className="w-10 h-10 mx-auto rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition">
                                {item.step}
                             </div>
                             <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
                             <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </section>

            {/* 7. Contact Us */}
             <section className="bg-indigo-600 rounded-3xl p-10 text-white text-center shadow-xl shadow-indigo-200">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                    I am eager to establish a long-term partnership with your agency. We offer one free trial slot for you to test our quality and white-label delivery.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
                    <a href="mailto:roger.zhangruizhe@gmail.com" className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition flex items-center">
                        <i className="fas fa-envelope mr-2"></i> roger.zhangruizhe@gmail.com
                    </a>
                    <a href="https://rogerzhang.me" target="_blank" rel="noopener noreferrer" className="bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-800 transition flex items-center border border-indigo-500">
                        <i className="fas fa-external-link-alt mr-2"></i> Demo: Rogerzhang.me
                    </a>
                </div>
                <div className="pt-8 border-t border-indigo-500/30 text-xs text-indigo-200">
                    &copy; 2026 RZ Digital Studio. Built for the next generation of leaders.
                </div>
             </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
