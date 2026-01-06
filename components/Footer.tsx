import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
      <div className="space-x-4">
        <span>&copy; 2026 RZ Digital Studio. Helping the next generation lead.</span>
        <Link href="/blogs" className="hover:underline">Blogs</Link>
        <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
      </div>
    </footer>
  );
}