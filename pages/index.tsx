import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import TrustedPayments from '../components/TrustedPayments';
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
      <TrustedPayments />
      {/* Move Apply Now button to the end of the main page */}
      <div className="flex justify-center py-12">
        <Link href="/request" className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-indigo-700 transition shadow-lg">
          Apply Now
        </Link>
      </div>
      <Footer />
    </div>
  );
}
