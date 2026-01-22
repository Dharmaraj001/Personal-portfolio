// File: src/components/Header.jsx
import React from 'react';


const Header = ({ currentPage, setCurrentPage, setIsMobileMenuOpen, isMobileMenuOpen }) => {
const navLinks = [
{ id: 'work', label: 'Work' },
{ id: 'approach', label: 'Approach' },
{ id: 'skills', label: 'Skills' }
];


return (
<>
<nav className="fixed top-0 left-0 w-full h-10 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.4em] text-zinc-400 bg-black backdrop-blur-md border-b border-white/5 z-[60]">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75 animate-ping" />
<span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
</span>
<span className='gap-2'>UNDER MAINTAINANCE</span>
</nav>


<header className="
  fixed top-10 left-0 right-0
  z-[80]
  bg-[#050505]
  p-8
  flex justify-between items-center
  max-w-full mx-auto
">

<div onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }} className="text-xl font-bold tracking-tighter cursor-pointer">STUDIO.</div>


<div className="hidden md:flex gap-12 text-[12px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
{navLinks.map(link => (
<button key={link.id} onClick={() => setCurrentPage(link.id)} className={`hover:text-white transition cursor-pointer ${currentPage === link.id ? 'text-white' : ''}`}>
{link.label}
</button>
))}
</div>


<button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden flex flex-col gap-1.5 z-[70]">
<span className={`w-6 h-[2px] bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
<span className={`w-6 h-[2px] bg-white transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
<span className={`w-6 h-[2px] bg-white transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
</button>


<button onClick={() => setCurrentPage('inquiry')} className="hidden md:block bg-white text-black px-8 py-3 rounded-full text-xs font-bold hover:scale-105 transition-transform cursor-pointer">Inquiry</button>
</header>
</>
);
};


export default Header;