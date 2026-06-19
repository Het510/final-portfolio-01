import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cringRef = useRef(null);
  const cdotRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(hover:hover)').matches) {
      const handleMouseMove = (e) => {
        gsap.to(cdotRef.current, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(cringRef.current, { x: e.clientX, y: e.clientY, duration: 0.55, ease: 'power3.out' });
      };

      window.addEventListener('mousemove', handleMouseMove);

      const handleMouseOver = (e) => {
        if (e.target.closest('a, button, .sk-tab, .cert, .team-mem, .wk-row')) {
          document.body.classList.add('on-link');
        } else {
          document.body.classList.remove('on-link');
        }
      };
      
      document.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  return (
    <>
      <div className="cur" id="cring" ref={cringRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998 }}>
        <div id="cur-ring"></div>
      </div>
      <div className="cur" id="cdot" ref={cdotRef} style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9998 }}>
        <div id="cur-dot"></div>
      </div>
    </>
  );
};

export default CustomCursor;
