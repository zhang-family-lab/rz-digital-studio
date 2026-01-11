import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function PortfolioGalleryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Head>
        <title>Portfolio Gallery | RZ Digital Studio</title>
        <meta name="description" content="Explore our diverse collection of portfolio styles tailored to different student profiles." />
      </Head>
      <Header />
      <main className="flex-grow">
        <Portfolio showGallery={true} />
      </main>
      <Footer />
    </div>
  );
}