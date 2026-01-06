import Head from 'next/head';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Terms of Service - RZ Digital Studio</title>
        <meta name="description" content="Terms of Service for RZ Digital Studio" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: January 5, 2026</p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>Welcome to RZ Digital Studio. These Terms of Service govern your use of our services. By engaging our services, you agree to these terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
        <p>We provide digital design and development services, including but not limited to web design, AI solutions, and related consulting.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Revisions</h2>
        <p>We offer up to 3 free revisions per project to ensure client satisfaction. Additional revisions beyond the initial 3 may incur extra charges, which will be discussed and agreed upon in advance.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Payment</h2>
        <p>Payment terms will be outlined in the project agreement. Invoices are due within 30 days unless otherwise specified.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
        <p>If you have any questions about these Terms of Service, please contact us.</p>
      </section>
    </div>
  );
}