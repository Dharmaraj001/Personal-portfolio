// File: src/pages/SkillsPage.jsx
import React from 'react';


const SkillsPage = () => (
<section className="max-w-7xl mx-auto px-8 py-32">
<div className="mb-20">
<h2 className="text-5xl font-extrabold tracking-tighter mb-4 reveal reveal-up">TECHNICAL ARSENAL</h2>
<p className="text-zinc-600 uppercase tracking-widest text-xs reveal reveal-up">Core competencies in modern engineering</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
{[
{ category: 'Frontend', skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'] },
{ category: 'Backend', skills: ['Node.js', 'Python', 'Go', 'GraphQL'] },
{ category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase'] },
{ category: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Vercel'] }
].map((group, i) => (
<div key={i} className="reveal reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>
<h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-6">{group.category}</h3>
<ul className="space-y-4">
{group.skills.map((skill, si) => (
<li key={si} className="text-lg font-medium border-l border-white/5 pl-4 hover:border-white transition-colors">{skill}</li>
))}
</ul>
</div>
))}
</div>
</section>
);


export default SkillsPage;