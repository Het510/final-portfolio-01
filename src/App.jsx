import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import StampColumns from './components/StampColumns';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Certifications from './components/Certifications';
import Hackathon from './components/Hackathon';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    gsap.ticker.lagSmoothing(0);
    
    lenis.on('scroll', ScrollTrigger.update);

    // Scroll Reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    if (!loading) {
      setTimeout(() => {
        document.querySelectorAll('.rv:not(.in)').forEach((el) => observer.observe(el));
      }, 100); // small delay to ensure DOM is ready
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, [loading]);

  return (
    <>
      <Loader onComplete={() => setLoading(false)} />
      <CustomCursor />
      
      {!loading && (
        <>
          <StampColumns />
          <Navbar />
          <main className="inn">
            <Hero />
            <Marquee />
            <About />
            <Skills />
            <Work />
            <Certifications />
            <Hackathon />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
