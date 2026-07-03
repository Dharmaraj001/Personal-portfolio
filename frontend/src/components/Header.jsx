// File: src/components/Header.jsx

import React from "react";

const Header = ({
  currentPage,
  setCurrentPage,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  const navLinks = [
    { id: "work", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[80] bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => {
            setCurrentPage("home");
            setIsMobileMenuOpen(false);
          }}
          className="text-lg sm:text-xl font-bold tracking-tight cursor-pointer hover:text-zinc-300 transition"
        >
          Home
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-[11px] lg:text-xs uppercase tracking-[0.25em] text-zinc-500 font-semibold">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`transition hover:text-white ${
                currentPage === link.id
                  ? "text-white"
                  : "text-zinc-500"
              }`}
            >
              {link.label}
            </button>
          ))}

          <a
            href="https://drive.google.com/file/d/19uK_1ZXT_LHe-eMfP7ayDLr0zA89N5ip/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            RESUME
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Contact Button */}
          <button
            onClick={() => {
              setCurrentPage("inquiry");
              setIsMobileMenuOpen(false);
            }}
            className="hidden md:block bg-white text-black px-5 lg:px-8 py-2.5 lg:py-3 rounded-full text-[11px] lg:text-xs font-bold uppercase tracking-widest hover:scale-105 transition"
          >
            CONTACT
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          >
            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen
                  ? "rotate-45 translate-y-[7px]"
                  : ""
              }`}
            />

            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                isMobileMenuOpen
                  ? "-rotate-45 -translate-y-[7px]"
                  : ""
              }`}
            />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;