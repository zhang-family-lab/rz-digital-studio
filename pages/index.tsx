import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <Footer />
    </div>
  );
}
