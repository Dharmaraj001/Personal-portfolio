// File: src/pages/HomePage.jsx
import React from 'react';
import { isVideo } from '../utils/media';

const HomePage = ({ currentProject }) => (
  <section className="max-w-7xl mx-auto px-8 py-20 md:py-32">
    <div className="grid lg:grid-cols-2 items-center gap-20">

      {/* LEFT CONTENT */}
      <div className="space-y-10">
        <div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] reveal reveal-up delay-[100ms]">
            Dharmaraj’s<br />
            <span className="text-zinc-800">Portfolio.</span>
          </h1>
        </div>

        <p className="text-xl text-zinc-600 max-w-md leading-relaxed reveal reveal-up delay-[200ms]">
          “Passionate Coder | Web Developer | Aspiring Software Engineer”
        </p>

        {/* META INFO */}
        <div className="flex flex-wrap gap-10 reveal reveal-up delay-[300ms]">
          <div className="group cursor-pointer">
            <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">
              Featured Project
            </p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold inline-flex items-center gap-1 transition-transform hover:translate-x-2 hover:text-blue-500 hover:underline">
            {currentProject.name} {currentProject.year} →
            </a>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">
              Based in
            </p>
            <p className="text-sm font-semibold">Bengaluru, India</p>
          </div>
        </div>

        {/* ABOUT ME (SMALL DIV) */}
        <div className="max-w-md pt-6 border-t border-zinc-200 reveal reveal-up delay-[350ms]">
          <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-3  hover:text-white">
            About Me
          </p>
          <p className="text-sm text-zinc-600 leading-relaxed">
            I’m a Pre-final year engineering student focused on Java, DSA, and development. I enjoy building practical projects and preparing for
            software engineering roles.
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative reveal reveal-right delay-[400ms] w-full max-w-[600px] justify-self-center lg:justify-self-end">
        <div className="relative aspect-[4/5] md:aspect-square rounded-3xl bg-[#0a0a0a] border border-white/[0.04] shadow-[0_0_50px_rgba(0,0,0,1)] overflow-hidden group">
          <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.02]">
            {currentProject.media && isVideo(currentProject.media) ? (
              <video
                src={currentProject.media}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-[#0d0d0d] flex items-center justify-center opacity-20 italic text-xs tracking-widest">
                Preview Media
              </div>
            )}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
        </div>

        {/* PROJECT TAG */}
        <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#0c0c0c]/95 backdrop-blur-2xl p-7 rounded-2xl border border-white/[0.05] hidden md:block reveal reveal-up delay-[500ms] shadow-2xl z-20">
          <p className="text-[9px] text-zinc-700 uppercase tracking-[0.3em] font-bold">
            Showcase
          </p>
          <h3 className="text-lg font-extrabold tracking-tight">
            {currentProject.name}
          </h3>
        </div>
      </div>

    </div>
  </section>
);

export default HomePage;
