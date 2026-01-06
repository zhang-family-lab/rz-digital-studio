export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-900 text-white section-spacing">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 tracking-tight">Investment for Your Future</h2>
        <p className="text-slate-400 mb-12 text-sm">One clear package. Professional management.</p>

        <div className="bg-white text-slate-900 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden text-left max-w-lg mx-auto">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Premium Choice</div>
          <h4 className="text-2xl font-extrabold mb-2">Student Elite Portfolio</h4>
          <div className="text-4xl font-black mb-1">$299 <span className="text-sm text-slate-400 font-normal italic">One-time setup</span></div>
          <p className="text-indigo-600 font-bold text-sm mb-8 italic">Including $29/mo all-inclusive hosting & updates</p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span><strong>Custom Domain</strong> included (e.g., yourname.com)</span></li>
            <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Dynamic Resume & Project Boards</span></li>
            <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>SEO optimization for admission namesakes</span></li>
            <li className="flex items-start text-sm"><i className="fas fa-certificate text-indigo-500 mt-1 mr-3"></i> <span>Unlimited content updates every semester</span></li>
          </ul>

          <a href="/request" id="request" className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition">Start My Request</a>
          <p className="text-[10px] text-slate-400 text-center mt-4 uppercase font-bold tracking-tighter">No payment required until you approve the demo.</p>
        </div>
      </div>
    </section>
  );
}