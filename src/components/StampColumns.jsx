import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const emojis = ['💻','🚀','⚡','🎯','🔥','💡','🌐','🛠️','📱','🎨','⚙️','🧠','📡','🔗','🎮','🏆'];

const StampColumns = () => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    const fillStamp = (trackId, dir) => {
      const t = document.getElementById(trackId);
      if (!t) return;
      const doubled = [...emojis, ...emojis, ...emojis];
      t.innerHTML = '';
      doubled.forEach(e => {
        const c = document.createElement('div');
        c.className = 'stmp-cell';
        c.textContent = e;
        t.appendChild(c);
      });
      const h = 52;
      const tot = doubled.length * h;
      gsap.to(t, {
        y: dir === 1 ? -tot : tot,
        duration: dir === 1 ? 28 : 34,
        ease: 'none',
        repeat: -1,
        modifiers: { y: gsap.utils.unitize(y => parseFloat(y) % tot) }
      });
    };

    fillStamp('stl-t', 1);
    fillStamp('str-t', -1);
  }, { scope: containerRef });

  return (
    <div ref={containerRef}>
      <div className="stmp l" id="stl"><div className="stmp-track" id="stl-t"></div></div>
      <div className="stmp r" id="str"><div className="stmp-track" id="str-t"></div></div>
    </div>
  );
};

export default StampColumns;
