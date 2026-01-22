// File: src/components/Loader.jsx
import React from 'react';


const Loader = ({ loadingCount, isLoaded }) => (
<div className={`fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center transition-transform duration-[1200ms] cubic-bezier(0.85, 0, 0.15, 1) ${isLoaded ? '-translate-y-full' : 'translate-y-0'}`}>
<div className="text-center">
<div className="text-[clamp(4rem,15vw,10rem)] font-extrabold tracking-tighter leading-none bg-gradient-to-b from-white to-zinc-800 bg-clip-text text-transparent">
{loadingCount}
</div>
<div className="w-[200px] h-[2px] bg-white/5 mt-5 rounded-full overflow-hidden mx-auto">
<div className="h-full bg-white transition-all duration-100" style={{ width: `${loadingCount}%` }} />
</div>
<p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-semibold">Portfolio Initializing</p>
</div>
</div>
);


export default Loader;