// File: src/pages/InquiryPage.jsx
import React from 'react';


const InquiryPage = () => (
<section className="max-w-7xl mx-auto px-8 py-32">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal reveal-left">
<div className="relative aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/[0.05] overflow-hidden grayscale group shadow-2xl">
<div className="absolute inset-0 bg-white/[0.02] group-hover:bg-transparent transition-all duration-700" />
<div className="w-full h-full flex flex-col items-center justify-center text-center p-12 opacity-20 group-hover:opacity-40 transition-opacity">
<div className="w-20 h-20 border border-white rounded-full flex items-center justify-center mb-4">
<svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
</div>
<p className="text-[10px] uppercase tracking-[0.4em]">Profile Portrait Area</p>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
</div>
</div>


<div className="space-y-12 reveal reveal-right">
<div>
<h2 className="text-5xl font-extrabold tracking-tighter mb-6">LET'S CONNECT.</h2>
<p className="text-zinc-500 text-lg leading-relaxed">I am always open to discussing high-impact engineering roles, architecture consultations, or innovative full-stack projects.</p>
</div>


<div className="space-y-8">
{[
{ label: 'LINKEDIN', link: 'linkedin.com/in/username', icon: '↗' },
{ label: 'GITHUB', link: 'github.com/username', icon: '↗' },
{ label: 'TWITTER / X', link: 'twitter.com/username', icon: '↗' },
{ label: 'EMAIL', link: 'hello@studio.com', icon: '✉' }
].map((social, i) => (
<a key={i} href={`#${social.label}`} className="group flex justify-between items-center border-b border-white/5 pb-6 hover:border-white transition-all duration-500">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-600 font-bold tracking-[0.3em] mb-1">{social.label}</span>
<span className="text-sm font-medium tracking-tight text-zinc-400 group-hover:text-white transition-colors">{social.link}</span>
</div>
<span className="text-xl text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-1">{social.icon}</span>
</a>
))}
</div>


<div className="pt-4">
<p className="text-[10px] text-zinc-700 uppercase tracking-[0.4em] mb-4">Current Availability</p>
<div className="inline-flex items-center gap-3 px-4 py-2 border border-zinc-800 rounded-full">
<div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
<span className="text-[11px] font-bold text-zinc-300">Accepting Projects Q1 2026</span>
</div>
</div>
</div>
</div>
</section>
);


export default InquiryPage;