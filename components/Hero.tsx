export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto section-spacing text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter">
        High-Performance <span className="text-indigo-600">Web & AI</span> Solutions.
      </h1>
      <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
        I help local businesses and ambitious students build their digital future with speed and precision.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#pricing"
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition shadow-lg"
        >
          View Plans
        </a>
        <a
          href="#how-it-works"
          className="border border-slate-200 text-slate-600 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition"
        >
          The Process
        </a>
      </div>
    </section>
  );
}