export default function Header() {
  return (
    <header className="max-w-6xl mx-auto py-6 px-6 flex justify-between items-center border-b border-slate-50">
      <div className="text-xl font-extrabold tracking-tighter italic">RZ DIGITAL STUDIO.</div>
      <a href="/request" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition">Apply Now</a>
    </header>
  );
}