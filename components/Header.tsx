import Link from 'next/link';

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto py-6 px-6 flex justify-between items-center border-b border-slate-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-extrabold tracking-tighter italic">RZ DIGITAL STUDIO.</Link>
        <Link href="/blogs" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition">Blogs</Link>
      </div>
      <Link href="/request" className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-700 transition">Apply Now</Link>
    </header>
  );
}