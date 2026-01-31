// File: src/components/Header.jsx
import React from 'react';


const Header = ({ currentPage, setCurrentPage, setIsMobileMenuOpen, isMobileMenuOpen }) => {
const navLinks = [
{ id: 'work', label: 'PROJECTS' },
{ id: 'skills', label: 'SKILLS' },
];


return (
<>

<header className="
  fixed top-0 left-0 right-0 
  z-[80]
  bg-[#050505]
  p-11
  flex justify-between items-center
  max-w-full mx-auto
">

<div onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="ml-[40px] text-xl font-bold tracking-tighter cursor-pointer">Dharmaraj</div>


<div className="hidden md:flex gap-12 text-[12px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
{navLinks.map(link => (
<button key={link.id} onClick={() => setCurrentPage(link.id)} className={`hover:text-white transition cursor-pointer ${currentPage === link.id ? 'text-white' : ''}`}>
{link.label}
</button>
))}
{/* Resume Download */}
          <a
            href="/full stack resume intern.pdf"
            download
            className="hover:text-white transition cursor-pointer"
          >
            Resume
          </a>
</div>


<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 z-[70]">
<span className={`w-6 h-[2px] bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
<span className={`w-6 h-[2px] bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
<span className={`w-6 h-[2px] bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
</button>


<button onClick={() => setCurrentPage('inquiry')} className=" hidden md:block bg-white text-black px-8 py-3 rounded-full text-xs font-bold hover:scale-105 transition-transform cursor-pointer">Contact</button>
</header>
</>
);
};


export default Header;