import React from 'react';

export default function TrustedPayments() {
  return (
    <section className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Secure & Flexible Payment Options</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-3xl font-bold text-[#635BFF] tracking-tighter" style={{ fontFamily: 'system-ui' }}>stripe</span>
          <span className="text-2xl font-semibold text-[#07C160]">WeChat Pay</span>
          <span className="text-2xl font-bold text-[#6d1ed4]">Zelle</span>
          <span className="text-2xl font-bold text-[#008CFF]">venmo</span>
        </div>
        <div className="flex items-center justify-center mt-8 space-x-2 text-xs text-slate-400">
          <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
          <span>SSL Encrypted Secure Transaction</span>
        </div>
      </div>
    </section>
  );
}
