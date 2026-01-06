export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-6xl mx-auto section-spacing border-t border-slate-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight mb-4">A Streamlined Process</h2>
        <p className="text-slate-500 italic text-sm">Efficient. Transparent. Professional.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
          <div className="step-number">1</div>
          <h4 className="font-bold mb-2">Project Request</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Fill out a simple Google Form with your goals. No upfront meeting needed.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
          <div className="step-number">2</div>
          <h4 className="font-bold mb-2">Visual Demo</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            I create a visual demo or screenshots within 48h. See the product before paying a cent.
          </p>
        </div>
        <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100 relative">
          <div className="step-number">3</div>
          <h4 className="font-bold mb-2">Deposit & Build</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pay <strong>50% deposit</strong> to start the full build. I handle all technical setup.
          </p>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative">
          <div className="step-number">4</div>
          <h4 className="font-bold mb-2">Go Live</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Pay the <strong>final 50%</strong>. I launch your site and provide ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
}