export default function Portfolio() {
  return (
    <section id="work" className="max-w-6xl mx-auto section-spacing border-t border-slate-100">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight">Recent Work</h2>
        <p className="text-slate-400 text-sm hidden sm:block italic font-medium">Quality you can trust</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <a href="https://www.rogerzhang.me/" target="_blank" className="work-card group block">
          <div className="overflow-hidden rounded-2xl bg-slate-100 aspect-video mb-4 flex items-center justify-center relative shadow-sm border border-slate-100">
            <img
              src="https://api.microlink.io/?url=https://www.rogerzhang.me/&screenshot=true&meta=false&embed=screenshot.url"
              alt="Roger Zhang Portfolio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-xl transition-all text-sm border border-slate-100">
                Visit Site →
              </span>
            </div>
          </div>
          <h4 className="text-xl font-bold">Roger's Academic Portfolio</h4>
          <p className="text-slate-500 text-sm mb-2">A high-end showcase of technical projects and academic excellence.</p>
        </a>
        <div className="work-card group border border-dashed border-slate-200 rounded-2xl p-4 flex flex-col justify-center text-center">
          <div className="overflow-hidden rounded-xl bg-slate-50 aspect-video mb-4 flex items-center justify-center border border-slate-100 italic text-slate-300">
            Your Site Next
          </div>
          <h4 className="text-xl font-bold text-slate-400 italic">Future Partner</h4>
          <p className="text-slate-400 text-sm mb-2 italic">Optimized for speed and conversion.</p>
        </div>
      </div>
    </section>
  );
}