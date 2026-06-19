import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 3 }); 
    tl.to('#nav', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0)
      .to('#hEy', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.1)
      .to(['#hN1', '#hN2'], { y: '0%', stagger: 0.12, duration: 1.1, ease: 'expo.out' }, 0.2)
      .to('#hRO', { opacity: 1, duration: 0.7 }, 0.55)
      .to('#hBtm', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.85)
      .to('#hSc', { opacity: 1, duration: 0.6 }, 1.3);

    const inner = document.getElementById('hRoles');
    if (!inner) return;
    const items = inner.querySelectorAll('.h-role');
    if (!items.length) return;
    const h = items[0].offsetHeight || 40;
    let cur = 0;
    const interval = setInterval(() => {
      cur = cur + 1 >= items.length - 1 ? 0 : cur + 1;
      gsap.to(inner, { y: -(cur * h), duration: 0.72, ease: 'power3.inOut' });
    }, 2600);

    return () => clearInterval(interval);
  });

  return (
    <section id="home" ref={heroRef}>
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>
      <div className="hero-eyebrow" id="hEy">Gandhinagar, Gujarat &nbsp;·&nbsp; Open to Work &nbsp;·&nbsp; 2026</div>
      <div className="hero-name-wrap">
        <span className="hero-name" id="hN1">HET</span>
      </div>
      <div className="hero-name-wrap">
        <span className="hero-name" id="hN2"><em>RATHOD.</em></span>
      </div>
      <div className="hero-role-outer" id="hRO">
        <div className="hero-roles" id="hRoles">
          <span className="h-role"><em>Full Stack</em> Developer</span>
          <span className="h-role">Frontend <em>Craftsman</em></span>
          <span className="h-role"><em>Software</em> Engineer</span>
          <span className="h-role">React <em>+</em> Node.js</span>
          <span className="h-role"><em>Full Stack</em> Developer</span>
        </div>
      </div>
      <div className="hero-bottom" id="hBtm">
        <div>
          <p className="hero-desc">I'm a <strong>Full Stack Developer</strong> from Gandhinagar, Gujarat. I build complete web systems — <strong>React frontends</strong>, <strong>Node.js backends</strong>, <strong>MongoDB</strong> databases. 6 live projects. 8 certs. 3 hackathons.</p>
          <div className="hero-actions" style={{ marginTop: '24px' }}>
            <a href="#work" className="btn-p">↓ &nbsp;View Projects</a>
            <a href="#contact" className="btn-g">→ &nbsp;Say Hello</a>
          </div>
        </div>
        <div className="hero-meta">
          <div className="hero-yr" style={{ fontFamily: 'var(--fh)', fontSize: '22px', color: 'var(--c40)' }}>'25 – '29</div>
          <div className="hero-loc" style={{ fontFamily: 'var(--fm)', fontSize: '9px', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(201,100,81,.5)', marginTop: '4px' }}>B.Tech CSE</div>
        </div>
      </div>
      <div className="scroll-hint" id="hSc"><div className="sh-line"></div><span className="sh-txt">scroll</span></div>
    </section>
  );
};

export default Hero;
