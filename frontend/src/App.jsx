import React, { useState, useEffect, useRef } from 'react';

// Note: In a real project, imports like these are used. 
// For this preview, we will use the string paths defined in the state.
// import camara from "../public/camara.png"
// import video1 from "../public/video1.mp4"

const App = () => {
  // --- State ---
  const [loadingCount, setLoadingCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Project State
  const [currentProject, setCurrentProject] = useState({
    name: "Brain-Box",
    year: "2025",
    category: "Full Stack Platform",
    media: "/video2.mp4" // Renamed to 'media' for clarity
  });

  // --- Effects ---
  
  // 1. Loading Counter logic
  useEffect(() => {
    let currentCount = 0;
    const interval = setInterval(() => {
      const increment = currentCount < 85 ? Math.floor(Math.random() * 4) + 1 : 1;
      currentCount += increment;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoaded(true), 600);
      }
      setLoadingCount(currentCount);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // 2. Scroll Reveal Observer
  useEffect(() => {
    if (!isLoaded) return;

    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoaded]);

  // Helper to check if media is a video
  const isVideo = (path) => {
    return path?.match(/\.(mp4|webm|ogg)$/i);
  };

  return (
    <div className={`bg-[#050505] text-white min-h-screen font-sans ${!isLoaded ? 'overflow-hidden' : 'overflow-x-hidden'}`}>
      
      {/* Loader Component */}
      <div 
        className={`fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center transition-transform duration-[1200ms] cubic-bezier(0.85, 0, 0.15, 1) ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="text-center">
          <div className="text-[clamp(4rem,15vw,10rem)] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white to-zinc-800 bg-clip-text text-transparent">
            {loadingCount}
          </div>
          <div className="w-[200px] h-[2px] bg-white/5 mt-5 rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-white transition-all duration-100" 
              style={{ width: `${loadingCount}%` }}
            />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-semibold">Portfolio Initializing</p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full h-10 flex items-center justify-center gap-3
  text-[11px] uppercase tracking-[0.4em] text-zinc-300
  bg-black/60 backdrop-blur-md border-b border-white/5 z-50">
  
  {/* Status Dot */}
  <span className="relative flex h-2 w-2">
    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
  </span>

  <span>Under Maintenance</span>
</nav>

        <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto reveal reveal-up delay-[800ms]">
          <div className="text-xl font-bold tracking-tighter">STUDIO.</div>
          <div className="hidden md:flex gap-12 text-[12px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
            <a href="#" className="hover:text-white transition">Work</a>
            <a href="#" className="hover:text-white transition">Approach</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
          <button className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold hover:scale-105 transition-transform">Inquiry</button>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] reveal reveal-up delay-[1000ms]">
                  FULL STACK<br />
                  <span className="text-zinc-800">DEVELOPER.</span>
                </h1>
              </div>

              <p className="text-xl text-zinc-600 max-w-md leading-relaxed reveal reveal-up delay-[1100ms]">
                I build immersive digital interfaces that bridge the gap between complex logic and human emotion.
              </p>

              <div className="flex flex-wrap gap-10 reveal reveal-up delay-[1200ms]">
                <div className="group cursor-pointer">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">Featured Project</p>
                  <p className="text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    {currentProject.name} {currentProject.year} —&gt;
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">Based in</p>
                  <p className="text-sm font-semibold">Bengaluru, India</p>
                </div>
              </div>
            </div>

            {/* Works Preview Container (Adjustable & Video Compatible) */}
            <div className="relative reveal reveal-right delay-[1300ms] w-full max-w-[600px] justify-self-center lg:justify-self-end">
              <div className="relative aspect-[4/5] md:aspect-square rounded-3xl bg-[#0a0a0a] border border-white/[0.04] shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden group">
                
                {/* Media Layer */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.0]">
                  {currentProject.media ? (
                    isVideo(currentProject.media) ? (
                      <video 
                        src={currentProject.media} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img 
                        src={currentProject.media} 
                        alt={currentProject.name} 
                        className="w-full h-full object-cover"
                      />
                    )
                  ) : (
                    <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center">
                      <div className="text-center opacity-10 group-hover:opacity-30 transition-opacity duration-700">
                         <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mx-auto mb-4">
                            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                         </div>
                         <p className="text-[10px] uppercase tracking-[0.4em]">Waiting for Media</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Glassy Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />
                <div className="absolute inset-0 rounded-3xl border border-white/[0.03] pointer-events-none group-hover:border-white/[0.08] transition-colors duration-700" />
              </div>
              
              {/* Project Info Card */}
              <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#0c0c0c]/95 backdrop-blur-2xl p-7 rounded-2xl border border-white/[0.05] hidden md:block reveal reveal-up delay-[1400ms] shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:translate-y-[-5px] transition-transform duration-500 z-20">
                <div className="flex flex-col gap-1">
                  <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em] font-bold">Current Showcase</p>
                  <h3 className="text-lg font-extrabold tracking-tight">{currentProject.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-zinc-500 uppercase font-medium">{currentProject.category}</span>
                    <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span className="text-[10px] text-zinc-500 uppercase font-medium">{currentProject.year}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-8 py-40 border-t border-white/[0.03] grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { val: "02+", label: "Years Mastery" },
            { val: "15+", label: "Deployments" },
            { val: "05+", label: "Projects" },
            { val: "01", label: "Unique Vision" }
          ].map((stat, i) => (
            <div key={i} className="reveal reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-5xl font-extrabold mb-2 tracking-tighter text-zinc-200">{stat.val}</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-700">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Bottom Section */}
        <section className="max-w-7xl mx-auto px-8 py-40">
          <div className="reveal reveal-left bg-zinc-900/[0.1] p-20 rounded-3xl border border-white/[0.03]">
            <h2 className="text-4xl font-bold mb-4">Let's create the future.</h2>
            <p className="text-zinc-700 mb-8">Available for freelance and full-time opportunities.</p>
            <button className="text-xs uppercase tracking-widest font-bold border-b border-zinc-800 pb-2 hover:border-white hover:translate-x-2 transition-all">
              Send a Message —&gt;
            </button>
          </div>
        </section>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .reveal {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform, opacity;
        }
        .reveal-up { transform: translateY(60px); }
        .reveal-left { transform: translateX(-60px); }
        .reveal-right { transform: translateX(60px); }
        .reveal-active {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        .cubic-bezier(0.85, 0, 0.15, 1) {
          transition-timing-function: cubic-bezier(0.85, 0, 0.15, 1);
        }
      `}} />
    </div>
  );
};

export default App;