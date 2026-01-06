export default function Header() {
  return (
    <header className="max-w-6xl mx-auto py-8 px-6 flex justify-between items-center border-b border-slate-100">
      <div className="text-xl font-extrabold tracking-tight italic">RZ DIGITAL STUDIO.</div>
      <nav className="hidden md:flex gap-8 text-sm font-semibold">
        <a href="#work" className="text-slate-500 hover:text-slate-900">
          Portfolio
        </a>
        <a href="#how-it-works" className="text-slate-500 hover:text-slate-900">
          How It Works
        </a>
        <a href="#pricing" className="text-slate-500 hover:text-slate-900">
          Pricing
        </a>
      </nav>
      <a
        href="https://forms.google.com/your-form-id"
        target="_blank"
        className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition shadow-md"
      >
        Start A Project
      </a>
    </header>
  );
}