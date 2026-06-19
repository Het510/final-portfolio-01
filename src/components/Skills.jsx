import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const skillsData = {
    frontend: {
      bars: [
        { name: 'React.js', pc: 90 },
        { name: 'JavaScript', pc: 88 },
        { name: 'TypeScript', pc: 80 },
        { name: 'HTML5', pc: 95 },
        { name: 'CSS3', pc: 90 },
        { name: 'TailwindCSS', pc: 85 },
        { name: 'Vite', pc: 82 },
      ],
      desc: 'Frontend is my primary domain. I build fast, accessible, visually compelling interfaces — obsessed with clean architecture.',
      chips: [
        { name: 'React', h: true }, { name: 'JavaScript', h: true }, { name: 'TypeScript', h: true },
        { name: 'HTML5', h: false }, { name: 'CSS3', h: false }, { name: 'TailwindCSS', h: false },
        { name: 'Vite', h: false }
      ]
    },
    backend: {
      bars: [
        { name: 'Node.js', pc: 85 },
        { name: 'Express', pc: 82 },
        { name: 'MongoDB', pc: 80 },
        { name: 'MySQL', pc: 75 },
      ],
      desc: 'I build the full server layer — REST APIs, auth systems, and database design. The MERN stack is my comfort zone for production apps.',
      chips: [
        { name: 'Node.js', h: true }, { name: 'Express', h: true }, { name: 'MongoDB', h: true },
        { name: 'MySQL', h: false }
      ]
    },
    tools: {
      bars: [
        { name: 'Git', pc: 88 },
        { name: 'GitHub', pc: 85 },
        { name: 'Figma', pc: 80 },
        { name: 'VS Code', pc: 95 },
        { name: 'Postman', pc: 85 },
      ],
      desc: 'Dev tooling, design, and workflow. Figma for UI mockups, Git for version control, and VS Code as my main IDE with all the right extensions.',
      chips: [
        { name: 'Git', h: true }, { name: 'GitHub', h: true }, { name: 'Figma', h: true },
        { name: 'VS Code', h: false }, { name: 'Postman', h: false }
      ]
    }
  };

  useEffect(() => {
    // We animate after render when activeTab changes
    gsap.fromTo('.skbr-fill', { width: 0 }, {
      width: (i, el) => el.dataset.w + '%',
      duration: 1.1,
      ease: 'power3.out',
      stagger: 0.12
    });
  }, [activeTab]);

  const tabLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Design'
  };

  return (
    <section id="skills">
      <div className="we rv">Tech Stack</div>
      <h2 className="sh rv">What I <em>Build</em> With</h2>
      <div className="sk-tabs rv">
        {Object.keys(skillsData).map(tab => (
          <button 
            key={tab} 
            className={`sk-tab ${activeTab === tab ? 'on' : ''}`} 
            onClick={() => setActiveTab(tab)}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>
      
      <div className="sk-panel on">
        <div className="sk-grid">
          <div className="sk-bars">
            {skillsData[activeTab].bars.map(bar => (
              <div className="skbr" key={bar.name}>
                <div className="skbr-top"><span className="skbr-nm">{bar.name}</span><span className="skbr-pc">{bar.pc}%</span></div>
                <div className="skbr-track"><div className="skbr-fill" data-w={bar.pc}></div></div>
              </div>
            ))}
          </div>
          <div className="sk-right">
            <p className="sk-desc">{skillsData[activeTab].desc}</p>
            <div className="sk-chips">
              {skillsData[activeTab].chips.map(chip => (
                <span key={chip.name} className={`schip ${chip.h ? 'h' : ''}`}>{chip.name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
