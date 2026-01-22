// File: src/pages/ApproachPage.jsx
import React from 'react';


const ApproachPage = () => (
<section className="max-w-7xl mx-auto px-8 py-32">
<div className="max-w-3xl">
<h2 className="text-5xl font-extrabold tracking-tighter mb-12 reveal reveal-up">OUR METHODOLOGY</h2>
<div className="space-y-20">
{[
{ step: '01', title: 'Discovery', desc: 'Deep diving into the project core to understand logic and user requirements.' },
{ step: '02', title: 'Architecture', desc: 'Designing robust database schemas and high-scalability backend structures.' },
{ step: '03', title: 'Development', desc: 'Writing clean, performant code with a focus on seamless full-stack integration.' },
{ step: '04', title: 'Launch', desc: 'Automated deployment and continuous monitoring for zero-downtime performance.' }
].map((item, i) => (
<div key={i} className="flex gap-8 reveal reveal-left" style={{ transitionDelay: `${i * 100}ms` }}>
<span className="text-3xl font-black text-zinc-900 leading-none">{item.step}</span>
<div>
<h3 className="text-2xl font-bold mb-3">{item.title}</h3>
<p className="text-zinc-600 leading-relaxed text-lg">{item.desc}</p>
</div>
</div>
))}
</div>
</div>
</section>
);


export default ApproachPage;