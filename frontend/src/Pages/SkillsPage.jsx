// File: src/pages/SkillsPage.jsx
import React from 'react';


const SkillsPage = () => (
  <section className="max-w-7xl mx-auto px-8 py-32">
    {/* HEADER */}
    <div className="mb-20">
      <h2 className="text-5xl font-extrabold tracking-tighter mb-4 reveal reveal-up">
        TECHNICAL SKILLS
      </h2>
      <p className="text-zinc-600 uppercase tracking-widest text-xs reveal reveal-up">
        Currently learning and applying
      </p>
    </div>

    {/* SKILLS GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
      {[
        {
          category: 'Frontend',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
        },
        {
          category: 'Backend',
          skills: ['Node.js', 'Express.js'],
        },
        {
          category: 'Database',
          skills: ['MongoDB', 'SQL (Basic)'],
        },
        {
          category: 'Programming & CS',
          skills: [
            'Java',
            'Data Structures & Algorithms',
            'Object-Oriented Programming',
            'Computer Networks (Basics)',
          ],
        },
        {
          category: 'DevOps & Tools',
          skills: ['Git & GitHub', 'Postman', 'Vercel'],
        },
      ].map((group, i) => (
        <div
          key={group.category}
          className="reveal reveal-up"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.3em] mb-6">
            {group.category}
          </h3>

          <ul className="space-y-4">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="text-lg font-medium border-l border-white/5 pl-4
                           hover:border-white transition-colors"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);



export default SkillsPage;