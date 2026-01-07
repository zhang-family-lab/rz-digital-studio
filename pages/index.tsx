import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import TrustedPayments from '../components/TrustedPayments';
import Footer from '../components/Footer';
import SeoHead from '../components/SeoHead';

export default function Home() {
  return (
    <div>
      <SeoHead 
        title="RZ Digital Studio | Build Your Ivy League Application Portfolio"
        description="Don't just be a PDF. Stand out to admissions officers with a professional personal website. Custom coded portfolios for elite high school students."
      />
      <Header />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <TrustedPayments />
      <Footer />
    </div>
  );
}
