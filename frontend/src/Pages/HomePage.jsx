// File: src/pages/HomePage.jsx
import React from 'react';
import { isVideo } from '../utils/media';

const HomePage = ({ currentProject }) => (
  <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 py-16 sm:py-20 md:py-28 lg:py-32">
    <div className="grid lg:grid-cols-2 items-center gap-12 md:gap-16 lg:gap-20">

      {/* LEFT CONTENT */}
      <div className="space-y-10">
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] reveal reveal-up delay-[100ms]">
            Hi, I'm<br />
            <span className="text-zinc-300">Dharmaraj</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-md leading-relaxed reveal reveal-up delay-[200ms]">
          “Passionate Coder | Web Developer | Aspiring Software Engineer”
        </p>

        {/* META INFO */}
        <div className="flex flex-wrap gap-8 md:gap-10 reveal reveal-up delay-[300ms]">
          <div className="group cursor-pointer">
            <p className="text-[10px] uppercase tracking-widest text-zinc-700 mb-2">
              Featured Project
            </p>
            <a href="https://lms-seven-lemon.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold inline-flex items-center gap-1 transition-all duration-300 hover:translate-x-2 hover:text-blue-500 hover:underline">
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
          <p className="text-md sm:text-[15px] text-zinc-600 leading-relaxed">
            I’m a Pre-final year engineering student focused on Java, DSA, and development. I enjoy building practical projects and preparing for
            software engineering roles.
          </p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="relative reveal reveal-right delay-[400ms] w-full max-w-[600px] mx-auto lg:mx-0 justify-self-center lg:justify-self-end">
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
       <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-[#0c0c0c]/95 backdrop-blur-2xl p-6 lg:p-7 rounded-2xl border border-white/[0.05] hidden md:block reveal reveal-up delay-[500ms] shadow-2xl z-20">
          <p className="text-[9px] text-zinc-700 uppercase tracking-[0.3em] font-bold">
            Showcase
          </p>
         <h3 className="text-base lg:text-lg font-extrabold tracking-tight">
            {currentProject.name}
          </h3>
        </div>
      </div>

    </div>
  </section>
);

export default HomePage;
