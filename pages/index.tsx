import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <SeoHead
        title="RZ Digital Studio | Build Your Ivy League Application Portfolio"
        description="Don't just be a PDF. Stand out to admissions officers with a professional personal website. Custom coded portfolios for elite high school students."
      />
      <Header hideApplyNow={true} />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      {/* Move Apply Now button to the end of the main page */}
      <div className="flex flex-col items-center py-12">
        <p className="mb-4 text-slate-600 text-center max-w-xl">
          <span className="font-semibold text-indigo-700">No payment required to apply.</span> You will receive a free visual demo of your site before deciding whether to pay. Click "Apply Now" to get started—see your demo first, then decide!
        </p>
        <Link href="/apply" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition shadow-lg">
          Apply Now
        </Link>
      </div>
      <Footer />
    </div>
  );
}
