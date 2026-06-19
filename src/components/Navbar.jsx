import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  const navRef = useRef(null);

  useGSAP(() => {
    gsap.to(navRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 3 });
  }, { scope: navRef });

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveId(sec.id),
        onEnterBack: () => setActiveId(sec.id)
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={navRef}>
      <nav id="nav">
        <a href="#home" className="nav-logo">HR<em>.</em></a>
        {['about', 'skills', 'work', 'certs', 'hackathon'].map(item => (
          <a key={item} href={`#${item}`} className={`nav-lnk ${activeId === item ? 'on' : ''}`}>
            {item}
          </a>
        ))}
        <a href="#contact" className="nav-hire">hire me</a>
        <button className="mnav-btn" id="mnavBtn" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span>
        </button>
      </nav>
      <div id="mnav" className={menuOpen ? 'on' : ''}>
        {['about', 'skills', 'work', 'certs', 'hackathon', 'contact'].map(item => (
          <a key={item} href={`#${item}`} className="mnav-lnk" onClick={closeMenu}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
