export default function Pricing() {
  return (
    <section id="pricing" className="max-w-6xl mx-auto section-spacing text-center">
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-slate-900">Simple & Transparent Pricing</h2>
      <p className="text-slate-500 mb-12">No hidden fees. Professional results.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Student Pricing */}
        <div className="border border-slate-200 p-8 rounded-3xl text-left hover:border-purple-200 transition bg-white shadow-sm flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-2 py-1 rounded">
              Admissions Edge
            </span>
          </div>
          <h4 className="font-bold text-xl mb-2">Student Portfolio</h4>
          <div className="text-3xl font-extrabold mb-2 text-slate-900">
            $299 <span className="text-base text-slate-400 font-normal italic">setup</span>
          </div>
          <div className="text-slate-500 font-bold mb-6 italic text-sm">All-inclusive: $29/mo</div>
          <ul className="text-sm text-slate-500 space-y-4 flex-grow">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-purple-500 mt-1 mr-2"></i> <strong>Domain & Hosting Included</strong>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-purple-500 mt-1 mr-2"></i> Award & Project Gallery
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-purple-500 mt-1 mr-2"></i> Content updates as you grow
            </li>
          </ul>
          <a
            href="https://forms.google.com/your-form-id"
            className="mt-8 block text-center py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Business Standard */}
        <div className="border border-slate-200 p-8 rounded-3xl text-left hover:border-indigo-200 transition bg-white shadow-sm flex flex-col">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
              Most Popular
            </span>
          </div>
          <h4 className="font-bold text-xl mb-2">Business Growth</h4>
          <div className="text-3xl font-extrabold mb-2 text-slate-900">
            $499 <span className="text-base text-slate-400 font-normal italic">setup</span>
          </div>
          <div className="text-indigo-600 font-bold mb-6 italic text-sm">All-inclusive: $49/mo</div>
          <ul className="text-sm text-slate-500 space-y-4 flex-grow">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i> <strong>Domain & Ultra-fast Hosting</strong>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i> Google Maps & Local SEO
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i> 24/7 Security & Maintenance
            </li>
          </ul>
          <a
            href="https://forms.google.com/your-form-id"
            className="mt-8 block text-center py-3 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Business Elite */}
        <div className="premium-glow p-8 rounded-3xl text-left transition bg-white shadow-xl flex flex-col relative border-2 border-indigo-600">
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-indigo-600 px-2 py-1 rounded">
              Elite AI Assistant
            </span>
          </div>
          <h4 className="font-bold text-xl mb-2">Elite Business AI</h4>
          <div className="text-3xl font-extrabold mb-2 text-slate-900">
            $1,299 <span className="text-base text-slate-400 font-normal italic">setup</span>
          </div>
          <div className="text-indigo-600 font-bold mb-6 italic text-sm">All-inclusive: $99/mo</div>
          <ul className="text-sm text-slate-500 space-y-4 flex-grow">
            <li className="flex items-start">
              <i className="fas fa-star text-amber-500 mt-1 mr-2"></i> <strong>Everything in Business Plan</strong>
            </li>
            <li className="flex items-start">
              <i className="fas fa-star text-amber-500 mt-1 mr-2"></i> <strong>Full AI Booking Bot</strong>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i> Advanced Competitor SEO
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-indigo-500 mt-1 mr-2"></i> Priority tech support
            </li>
          </ul>
          <a
            href="https://forms.google.com/your-form-id"
            className="mt-8 block text-center py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white p-12 rounded-3xl text-center">
        <h4 className="text-3xl font-bold mb-4 italic">Ready to build your digital future?</h4>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto italic text-sm">
          Our "All-inclusive" monthly subscription covers high-speed hosting, domain renewal, SSL security, and unlimited technical support. You focus on your business, I handle the tech.
        </p>
        <a
          href="https://forms.google.com/your-form-id"
          target="_blank"
          className="inline-block bg-white text-slate-900 px-12 py-4 rounded-full font-extrabold hover:bg-slate-100 transition shadow-xl text-lg tracking-tight"
        >
          START MY REQUEST →
        </a>
      </div>
    </section>
  );
}