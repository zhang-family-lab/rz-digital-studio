import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ThankYou() {
  const router = useRouter();
  const { session_id } = router.query;
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  useEffect(() => {
    if (session_id) {
      setIsPaymentSuccess(true);
    }
  }, [session_id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center">
      <Head>
        <title>Thank You - RZ Digital Studio</title>
      </Head>
      
      {isPaymentSuccess ? (
        <>
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <i className="fas fa-check text-green-600 text-3xl"></i>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-4 text-slate-900">Payment Successful!</h1>
          <p className="text-xl text-slate-600 mb-2">Thank you for starting your journey with RZ Digital Studio.</p>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto">
            We have received your deposit. A receipt and invoice have been sent to your email address automatically.
            We will begin building your site immediately and will contact you within 24 hours.
          </p>
        </>
      ) : (
        <>
           <h1 className="text-3xl font-bold mb-6">Request Received!</h1>
           <p className="mb-8">Thank you for your interest. Please make sure you have filled out the Google Form so we can start working on your demo.</p>
        </>
      )}

      <Link href="/" className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition inline-block">
        Back to Home
      </Link>
    </div>
  );
}