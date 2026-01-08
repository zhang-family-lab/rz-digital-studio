export default function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto section-spacing">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Designed for <span className="italic font-serif">Impact</span>.</h2>
          <p className="text-slate-500 mb-6 leading-relaxed text-sm">
            Admission officers spend less than 10 minutes on an application. A professional website ensures they immediately see your technical depth and leadership potential.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Custom Domain (name.me)</li>
            <li className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Mobile-First Responsive Design</li>
            <li className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Interactive Project Showcases</li>
          </ul>
        </div>
        <div className="flex-1 w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 portfolio-card">
            <img src="https://api.microlink.io/?url=https://student-showcase-001.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt="Example Portfolio" className="w-full h-auto" />
            <div className="p-4 bg-white flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400">DEMO: STUDENT SHOWCASE</span>
              <a href="https://student-showcase-001.vercel.app/" target="_blank" className="text-indigo-600 font-bold text-xs">View Live →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}