// File: src/pages/WorkPage.jsx

import React from "react";

import brainboxImg from "../assets/brainbox.png";
import fairfixImg from "../assets/fairfix.png";
import spotifyImg from "../assets/spotify.png";
import weatherImg from "../assets/weather.png";

import { Globe, Github } from "lucide-react";

const projects = [
  {
    name: "Brain-Box",
    type: "LMS Platform",
    year: "2025",
    image: brainboxImg,
    description:
      "Full stack LMS with authentication, course management and progress tracking.",
    live: "https://lms-seven-lemon.vercel.app/",
    github: "https://github.com/Dharmaraj001/lms",
    status: "All Systems Operational",
  },
  {
    name: "Fair-Fix",
    type: "Security System",
    year: "2026",
    image: fairfixImg,
    description:
      "AI powered security monitoring with real-time threat detection.",
    live: "https://fair-fix.vercel.app/",
    github: "https://github.com/Dharmaraj001/FairFix",
    status: "Running",
  },
  {
    name: "Password Generator",
    type: "Live Backend",
    year: "2024",
    image: spotifyImg,
    description:
      "Generates random password of required length with characters and symbols.",
    live: "https://password-generator-virid-kappa-66.vercel.app/",
    github: "https://github.com/Dharmaraj001/Password_Generator",
    status: "Completed",
  },
  {
    name: "Weather Widget",
    type: "API Integration",
    year: "2025",
    image: weatherImg,
    description: "Real-time weather app using external API integration.",
    live: "https://weather-widget-ten-chi.vercel.app/",
    github: "https://github.com/Dharmaraj001/Weather_widget",
    status: "Completed",
  },
];

const WorkPage = () => (
  <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 2xl:px-40 py-32">
    <div className="mb-20 text-center">
      <h2 className="text-5xl font-extrabold tracking-tighter mb-4 reveal reveal-up">
        Projects Worked On
      </h2>

      <p className="text-zinc-600 uppercase tracking-widest text-xs reveal reveal-up">
        Full Stack Solutions & Architectures
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 justify-items-center">
      {projects.map((project, i) => (
        <div
          key={i}
          onClick={() => window.open(project.live, "_blank")}
          className="group reveal reveal-up w-full cursor-pointer"
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden border border-white/5 mb-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full aspect-video object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold mb-1">{project.name}</h3>

              <p className="text-sm text-zinc-300 mb-2">
                {project.description}
              </p>
            </div>

            <div
              className="flex gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5 text-zinc-500 hover:text-white transition" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-zinc-500 hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center">
            <span className="text-xs text-zinc-500 font-mono">
              {project.year}
            </span>

            <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
              ● {project.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default WorkPage;