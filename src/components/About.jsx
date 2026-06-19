import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '#about',
      start: 'top 65%',
      once: true,
      onEnter: () => {
        [{ el: 'sn1', to: 6 }, { el: 'sn2', to: 8 }, { el: 'sn3', to: 3 }].forEach(({ el, to }) => {
          const o = { n: 0 };
          gsap.to(o, {
            n: to,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => {
              const domEl = document.getElementById(el);
              if (domEl) domEl.textContent = Math.floor(o.n);
            },
            onComplete: () => {
              const domEl = document.getElementById(el);
              if (domEl) domEl.textContent = to + '+';
            }
          });
        });
      }
    });
  }, { scope: aboutRef });

  return (
    <section id="about" ref={aboutRef}>
      <div className="we rv">About</div>
      <h2 className="sh rv">Who is<br/><em>Het?</em></h2>
      <div className="ab-grid">
        <div className="ab-l">
          <p className="ab-p rv">Hey! I'm <em>Het Rathod</em>, also known as <strong>"Het"</strong> — a <em>Full Stack Developer</em> in my first year of B.Tech Computer Science (Batch 2025–2029) from Gandhinagar, Gujarat.</p>
          <p className="ab-p rv">I specialize in building <em>complete web systems</em> — pixel-perfect React frontends powered by GSAP animations, Node.js + Express backends, MongoDB databases, and JWT / OAuth authentication flows.</p>
          <p className="ab-p rv">I've shipped <strong>6 live production projects</strong> on Netlify, earned <strong>8 certifications</strong>, and competed in <strong>3 hackathons</strong> — including the <em>Odoo × Indus University Hackathon '26</em> where I served as <strong>Frontend Lead</strong> for Team Czar and built a full contactless POS system in 48 hours.</p>
          <div className="ab-quote rv">"I don't just build websites — I engineer experiences that people remember."</div>
          <div className="ab-tags rv">
            <span className="atag">B.Tech CSE '29</span><span className="atag">Gandhinagar, Gujarat</span>
            <span className="atag">Remote Ready</span><span className="atag">Hackathon Enthusiast</span>
            <span className="atag">MERN Stack</span><span className="atag">Anime Fan 🎌</span>
          </div>
        </div>
        <div>
          <div className="ab-card rv">
            <div className="stats">
              <div className="stat"><span className="stat-n" id="sn1">0</span><span className="stat-l">Projects</span></div>
              <div className="stat"><span className="stat-n" id="sn2">0</span><span className="stat-l">Certs</span></div>
              <div className="stat"><span className="stat-n" id="sn3">0</span><span className="stat-l">Hackathons</span></div>
            </div>
            <div className="avl"><div className="avl-dot"></div>Open to Work &amp; Internships</div>
            <div className="ab-info">
              <div className="ai-row"><span className="ai-k">Degree</span><span className="ai-v">B.Tech Computer Science</span></div>
              <div className="ai-row"><span className="ai-k">Batch</span><span className="ai-v">2025 – 2029</span></div>
              <div className="ai-row"><span className="ai-k">Location</span><span className="ai-v">Gandhinagar, Gujarat</span></div>
              <div className="ai-row"><span className="ai-k">Stack</span><span className="ai-v">MERN + GSAP</span></div>
              <div className="ai-row" style={{ borderBottom: 'none' }}><span className="ai-k">Email</span><span className="ai-v" style={{ fontSize: '11px' }}>hetrathod49@gmail.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
