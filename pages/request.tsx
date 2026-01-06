import Head from 'next/head';

export default function Request() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Request Your Portfolio Demo - RZ Digital Studio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Request Your Portfolio Demo</h1>
      <p className="mb-8">Fill out this quick form on Google Forms to complete your portfolio request. We'll use the information to create a live demo of your personalized student portfolio in 3-5 days. No interview needed!</p>

      <div className="flex justify-center">
        <a 
          href="https://forms.gle/2mqdqnjdkSvikpRAA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-700 transition shadow-lg inline-flex items-center gap-2"
        >
          Fill out Request Form 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}