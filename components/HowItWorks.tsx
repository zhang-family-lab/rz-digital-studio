export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 section-spacing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 tracking-tight">The 3-5 Days Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="step-circle">1</div>
            <h4 className="font-bold mb-2">Request</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Fill out my structured form with your awards, projects, and personal brand goals.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="step-circle">2</div>
            <h4 className="font-bold mb-2">Demo Draft</h4>
            <p className="text-xs text-slate-500 leading-relaxed">I'll create a custom visual demo of your site. No generic templates—designed for your profile.</p>
          </div>
          <div className="bg-indigo-600 p-6 rounded-2xl shadow-lg text-white">
            <div className="step-circle bg-white text-indigo-600">3</div>
            <h4 className="font-bold mb-2">Deposit</h4>
            <p className="text-xs text-indigo-100 leading-relaxed">Pay a 50% deposit to secure your slot. I'll finish the build and optimize for mobile/desktop.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="step-circle">4</div>
            <h4 className="font-bold mb-2">Launch</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Pay the final 50%. We go live with your custom domain. Ready for your applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}