import { useState } from 'react';

export default function Portfolio({ showGallery = false }: { showGallery?: boolean }) {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = async () => {
    const password = prompt("Please enter the access password to view the archive:");
    if (!password) return;

    try {
      const response = await fetch('/api/verify-portfolio-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsUnlocked(true);
        alert("Access granted. Archive unlocked.");
      } else {
        alert("Incorrect password. Please contact us for access.");
      }
    } catch (error) {
      console.error('Error verifying password:', error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto section-spacing">
      {/* Only show the Designed for Impact section if not in gallery mode */}
      {!showGallery && (
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Designed for <span className="italic font-serif">Impact</span>.</h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-lg">
            Admission officers spend less than 10 minutes on an application. A professional website ensures they immediately see your technical depth and leadership potential.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Custom Domain</span>
            <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Mobile-First Design</span>
            <span className="flex items-center text-sm font-semibold"><i className="fas fa-check text-indigo-500 mr-2"></i> Interactive Showcases</span>
          </div>
        </div>
      )}

      {/* Only show the two showcase cards if not in gallery mode */}
      {!showGallery && (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 portfolio-card hover:shadow-xl transition-shadow duration-300">
            <img src="https://api.microlink.io/?url=https://student-showcase-001.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt="Example Portfolio 001" className="w-full h-auto" />
            <div className="p-6 bg-white flex justify-between items-center">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Portfolio Template</span>
                <span className="font-bold text-slate-800">Student Showcase 001</span>
              </div>
              <a href="https://student-showcase-001.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 portfolio-card hover:shadow-xl transition-shadow duration-300">
            <img src="https://api.microlink.io/?url=https://student-showcase-002.vercel.app/&screenshot=true&meta=false&embed=screenshot.url" alt="Example Portfolio 002" className="w-full h-auto" />
            <div className="p-6 bg-white flex justify-between items-center">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Portfolio Template</span>
                <span className="font-bold text-slate-800">Student Showcase 002</span>
              </div>
              <a href="https://student-showcase-002.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition-colors">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Only show the More Showcases button if not in gallery mode */}
      {!showGallery && (
        <div className="text-center mt-8">
          <a 
            href="/portfolio-gallery"
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-indigo-700 transition text-lg shadow-lg"
          >
            More Showcases
          </a>
        </div>
      )}

      {showGallery && (
        <div className="mt-24 border-t border-slate-100 pt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-3">Showcase Portfolio Gallery</h3>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm">
              Explore our diverse collection of portfolio styles tailored to different student profiles. 
              Unlock the full gallery to browse more design options and find the perfect match for your application.
            </p>
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 ${isUnlocked ? 'opacity-100' : 'opacity-75'}`}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`group relative rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors ${isUnlocked ? 'hover:border-indigo-500 cursor-pointer shadow-sm hover:shadow-md' : 'hover:border-indigo-200 cursor-not-allowed'}`}>
                 <div className="aspect-[4/3] bg-slate-50 flex flex-col items-center justify-center relative">
                   {isUnlocked ? (
                     <>
                       <i className="fas fa-eye text-indigo-400 text-2xl mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all"></i>
                       <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all absolute bottom-2">View Case</span>
                       <div className="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                       <span className="text-4xl font-black text-slate-100 select-none group-hover:opacity-0 transition-opacity">
                          {String(i + 3).padStart(2, '0')}
                       </span>
                     </>
                   ) : (
                     <>
                       <i className="fas fa-lock text-slate-300 text-2xl mb-2"></i>
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Private</span>
                     </>
                   )}
                 </div>
                 <div className="p-3 border-t border-slate-100 bg-white">
                   <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold ${isUnlocked ? 'text-slate-700' : 'text-slate-500'}`}>Exhibit #{String(i + 3).padStart(3, '0')}</span>
                      <div className={`w-2 h-2 rounded-full ${isUnlocked ? 'bg-green-400' : 'bg-slate-200'}`}></div>
                   </div>
                 </div>
                 {isUnlocked && (
                    <a href="#" onClick={(e) => { e.preventDefault(); alert("This is a demo placeholder for a protected portfolio."); }} className="absolute inset-0 z-10"></a>
                 )}
              </div>
            ))}
          </div>
          {!isUnlocked ? (
            <div className="text-center mt-8">
               <button 
                 onClick={handleUnlock}
                 className="text-xs font-bold text-indigo-500 hover:text-indigo-600 border border-indigo-100 hover:border-indigo-200 px-4 py-2 rounded-full transition-all hover:shadow-sm active:scale-95 bg-white"
               >
                 Request Access Password
               </button>
            </div>
          ) : (
            <div className="text-center mt-8">
               <span className="text-xs font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100">
                 <i className="fas fa-unlock mr-2"></i> Archive Unlocked via Admin Access
               </span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}