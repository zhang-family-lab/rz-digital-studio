export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto section-spacing">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight mb-6">Designed for <span className="italic font-serif">Impact</span>.</h2>
        <p className="text-slate-500 mb-8 leading-relaxed text-lg">
          Admission officers spend less than 10 minutes on an application. A professional website ensures they immediately see your technical depth and leadership potential.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Custom Domain</span>
          <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Mobile-First Design</span>
          <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Interactive Showcases</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 portfolio-card hover:shadow-xl transition-shadow duration-300">
          <img src="https://api.microlink.io/?url=https://student-showcase-001.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt="Example Portfolio 001" className="w-full h-auto" />
          <div className="p-6 bg-white flex justify-between items-center">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Portfolio Template</span>
              <span className="font-bold text-slate-800">Student Showcase 001</span>
            </div>
            <a href="https://student-showcase-001.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 portfolio-card hover:shadow-xl transition-shadow duration-300">
          <img src="https://api.microlink.io/?url=https://student-showcase-002.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt="Example Portfolio 002" className="w-full h-auto" />
          <div className="p-6 bg-white flex justify-between items-center">
            <div>
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Portfolio Template</span>
              <span className="font-bold text-slate-800">Student Showcase 002</span>
            </div>
            <a href="https://student-showcase-002.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}