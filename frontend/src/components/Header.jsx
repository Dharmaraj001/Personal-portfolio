// File: src/components/Header.jsx
import React from 'react';

const Header = ({
  currentPage,
  setCurrentPage,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {

  const navLinks = [
    { id: 'work', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' }
  ];

  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0
          z-[80]
          bg-[#050505]
          p-11
          flex justify-between items-center
          max-w-full mx-auto
        "
      >
        {/* Logo / Name */}
        <div
          onClick={() => {
            setCurrentPage('home');
            setIsMobileMenuOpen(false);
          }}
          className="ml-[40px] text-xl font-bold tracking-tighter cursor-pointer"
        >
          Home
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 text-[12px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => setCurrentPage(link.id)}
              className={`hover:text-white transition cursor-pointer ${
                currentPage === link.id ? 'text-white' : ''
              }`}
            >
              {link.label}
            </button>
          ))}

          {/* Resume Download */}
          <a
            href="/full stack resume intern.pdf"
            download
            className="hover:text-white transition cursor-pointer"
          >
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 z-[70]"
        >
          <span
            className={`w-6 h-[2px] bg-white transition-transform ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-opacity ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-white transition-transform ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
            }`}
          />
        </button>

        {/* Contact Button */}
        <button
          onClick={() => {
            setCurrentPage('inquiry');
            setIsMobileMenuOpen(false);
          }}
          className="hidden md:block bg-white text-black px-8 py-3 rounded-full text-xs font-bold hover:scale-105 transition-transform cursor-pointer"
        >
          CONTACT
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#050505] z-[60] flex flex-col items-center justify-center gap-8 text-lg uppercase tracking-widest">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsMobileMenuOpen(false);
              }}
              className="text-white"
            >
              {link.label}
            </button>
          ))}

          {/* Mobile Resume Download */}
          <a
            href="/full stack resume intern.pdf"
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white"
          >
            RESUME
          </a>

          <button
            onClick={() => {
              setCurrentPage('inquiry');
              setIsMobileMenuOpen(false);
            }}
            className="text-white"
          >
            CONTACT
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
