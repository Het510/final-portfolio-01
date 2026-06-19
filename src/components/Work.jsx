import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const projects = [
    { num: '01', title: 'Rejouice Clone', sub: 'Frontend Clone · GSAP · 2025', tags: ['GSAP', 'HTML/CSS', 'Animations'], link: 'https://rejouiceclone1.netlify.app/', img: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=700&q=75', lbl: 'Frontend Clone' },
    { num: '02', title: 'Rolex Clone', sub: 'Luxury UI · Parallax · 2025', tags: ['Parallax', 'Premium UI', 'Frontend'], link: 'https://rolex-clone30.netlify.app/', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=700&q=75', lbl: 'Luxury UI' },
    { num: '03', title: 'Otaku Verse', sub: 'Anime Community Platform · 2025', tags: ['Community', 'Anime', 'Immersive UI'], link: 'https://otakuverse1.netlify.app/', img: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&q=75', lbl: 'Community Platform' },
    { num: '04', title: 'Git Analyzer', sub: 'Dev Analytics Tool · GitHub API · 2025', tags: ['GitHub API', 'Data Viz', 'React'], link: 'https://git-analyzer10.netlify.app/', img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=700&q=75', lbl: 'Dev Tool' },
    { num: '05', title: 'World Factory', sub: 'E-Commerce Platform · Full Stack · 2025', tags: ['E-Commerce', 'Full Stack', 'Premium UI'], link: 'https://worldfactory1.netlify.app/', img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=75', lbl: 'E-Commerce' },
    { num: '06', title: 'Meal Explorer', sub: 'Recipe Search Engine · API · 2025', tags: ['API', 'Search', 'JavaScript'], link: 'https://meal-explorer1.netlify.app/', img: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=75', lbl: 'Recipe App' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.utils.toArray('.wk-row').forEach((el, i) => {
      gsap.fromTo(el, { opacity: 0, x: -30 }, { 
        opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.06 * i, 
        scrollTrigger: { trigger: el, start: 'top 92%', once: true } 
      });
    });
  }, []);

  return (
    <section id="work">
      <div className="we rv">Selected Work</div>
      <h2 className="sh rv">Projects I've <em>Shipped</em></h2>
      
      {window.matchMedia('(hover:hover)').matches && (
        <div id="pp" className={hoveredProject ? 'on' : ''} style={{ left: mousePos.x, top: mousePos.y }}>
          <img src={hoveredProject?.img || ''} alt="" />
          <div className="pp-lbl">{hoveredProject?.lbl || ''}</div>
        </div>
      )}

      <div className="wk-list">
        {projects.map((proj) => (
          <a 
            key={proj.num}
            className="wk-row rv" 
            href={proj.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredProject(proj)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <span className="wk-num">{proj.num}</span>
            <div className="wk-info">
              <div className="wk-title">{proj.title}</div>
              <div className="wk-sub">{proj.sub}</div>
            </div>
            <div className="wk-tags">
              {proj.tags.map(tag => <span key={tag} className="wtag">{tag}</span>)}
            </div>
            <div className="wk-arr">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Work;
