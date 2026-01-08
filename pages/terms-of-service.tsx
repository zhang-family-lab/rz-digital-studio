import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function TermsOfService() {
  return (
    <div>
    <Header />
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Terms & Privacy - RZ Digital Studio</title>
        <meta name="description" content="Terms of Service and Privacy Policy for RZ Digital Studio" />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4 text-slate-500">Last updated: January 6, 2026</p>

      <div className="prose max-w-none text-slate-700">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">1. Acceptance of Terms</h2>
          <p>By accessing and using the services provided by RZ Digital Studio ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">2. Description of Service</h2>
          <p>RZ Digital Studio provides digital portfolio design, development, and hosting services for students ("Services"). We offer different packages (Elite, Pro) which include a one-time setup service and ongoing hosting/maintenance.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">3. Payment & Subscription</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Fees:</strong> Services are billed as a one-time "Setup Fee" and a recurring monthly "Subscription Fee".</li>
            <li><strong>Billing:</strong> Payments are processed securely via Stripe. By providing a payment method, you authorize us to charge the applicable fees.</li>
            <li><strong>Renewal:</strong> Subscriptions automatically renew each month unless cancelled.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Your site will remain active until the end of the current billing period.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">4. Refund Policy</h2>
          <p>Since we provide a visual demo before payment, and the setup involves significant manual labor and customization:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The <strong>One-time Setup Fee</strong> is generally non-refundable once work on the full site has commenced.</li>
            <li><strong>Subscription Fees</strong> are non-refundable. If you cancel, you will not be charged for the next month.</li>
            <li>Exceptions may be made at our sole discretion if there is a failure to deliver the agreed-upon service.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-slate-900">5. Content & Ownership</h2>
          <p>You retain all rights to the personal content (text, images, videos) you provide. You grant us a license to use this content solely for the purpose of creating and hosting your portfolio.</p>
        </section>

        <section className="mb-8 border-t pt-8 mt-8">
          <h1 className="text-3xl font-bold mb-6 text-slate-900">Privacy Policy</h1>
          <p className="mb-4">Your privacy is important to us. This section explains how we collect and use your information.</p>
          
          <h3 className="text-xl font-semibold mb-2 text-slate-900">Information We Collect</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Personal Information:</strong> Name, email address, and educational details provided during the request process.</li>
            <li><strong>Payment Information:</strong> We do NOT store your credit card details. All payment processing is handled securely by Stripe.</li>
            <li><strong>Usage Data:</strong> We may collect anonymous data on website performance to improve our services.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-slate-900">How We Use Your Information</h3>
          <p className="mb-4">We use your information to:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Provide and maintain your digital portfolio.</li>
            <li>Process payments and send invoices.</li>
            <li>Communicate with you regarding your service status and updates.</li>
          </ul>

           <h3 className="text-xl font-semibold mb-2 text-slate-900">Contact Us</h3>
          <p>If you have any questions about these Terms or our Privacy Policy, please contact us at: roger.zhangruizhe@gmail.com</p>
        </section>
      </div>
    </div>
    <Footer />
    </div>
  );
}