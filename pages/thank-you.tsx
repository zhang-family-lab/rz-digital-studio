import Head from 'next/head';

export default function ThankYou() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <Head>
        <title>Thank You - RZ Digital Studio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Thank You!</h1>
      <p className="mb-8">We've received your request. Check your email for the next steps to complete your portfolio demo.</p>
      <a href="/" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-indigo-700">Back to Home</a>
    </div>
  );
}