// File: src/pages/WorkPage.jsx
import React from 'react';


const WorkPage = () => (
<section className="max-w-7xl mx-auto px-8 py-32">
<div className="mb-20">
<h2 className="text-5xl font-extrabold tracking-tighter mb-4 reveal reveal-up">SELECTED WORK</h2>
<p className="text-zinc-600 uppercase tracking-widest text-xs reveal reveal-up">Full Stack Solutions & Architectures</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
{[
{ name: 'Brain-Box', type: 'AI Integration', year: '2025' },
{ name: 'Fair-Fix', type: 'Security System', year: '2026' },
{ name: 'Spotify-Clone', type: 'Live Backend', year: '2024' },
].map((project, i) => (
<div key={i} className="group cursor-pointer reveal reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
<div className="aspect-video bg-zinc-900/50 rounded-2xl border border-white/5 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors" />
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-bold mb-1">{project.name}</h3>
<p className="text-xs text-zinc-700 uppercase tracking-widest">{project.type}</p>
</div>
<span className="text-zinc-700 text-xs font-mono">{project.year}</span>
</div>
</div>
))}
</div>
</section>
);


export default WorkPage;