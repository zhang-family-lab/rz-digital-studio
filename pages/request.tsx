import Head from 'next/head';

export default function Request() {

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Head>
        <title>Request Your Portfolio Demo - RZ Digital Studio</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Request Your Portfolio Demo</h1>
      <p className="mb-8">Fill out this quick form, and we'll send you an email with a detailed Google Form to complete your portfolio request. We'll use the information to create a live demo of your personalized student portfolio in 48 hours. No interview needed!</p>

      <form action="https://formspree.io/f/mbdlvvwk" method="POST" className="space-y-6">
        <input type="hidden" name="_next" value="https://rz-digital-studio.vercel.app/thank-you" />
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border border-slate-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 border border-slate-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Application Stage</label>
          <select
            name="stage"
            className="w-full p-3 border border-slate-300 rounded-lg"
            required
          >
            <option value="">Select</option>
            <option value="high-school">美高 (High School)</option>
            <option value="university">大学 (University)</option>
            <option value="summer-school">夏校 (Summer School)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Package</label>
          <select
            name="package"
            className="w-full p-3 border border-slate-300 rounded-lg"
            required
          >
            <option value="">Select</option>
            <option value="elite">Student Elite Portfolio ($299 + $29/mo)</option>
            <option value="pro">Student Pro Portfolio ($499 + $49/mo)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}