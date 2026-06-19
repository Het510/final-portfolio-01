import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Loader = ({ onComplete }) => {
  const ldrRef = useRef(null);
  const barRef = useRef(null);
  const pctRef = useRef(null);
  
  useGSAP(() => {
    const ring1 = document.querySelector('.ldr-r1');
    const ring2 = document.querySelector('.ldr-r2');
    const ring3 = document.querySelector('.ldr-r3');
    const nameI = document.querySelector('.ldr-name-i');
    const tagI = document.querySelector('.ldr-tag-i');
    const roleI = document.querySelector('.ldr-role-i');

    gsap.to(ring1, { rotation: 360, duration: 3, ease: 'none', repeat: -1 });
    gsap.to(ring2, { rotation: -360, duration: 5, ease: 'none', repeat: -1 });
    gsap.to(ring3, { rotation: 360, duration: 8, ease: 'none', repeat: -1 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(ldrRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power3.inOut',
          delay: 0.35,
          onComplete: () => {
            if (ldrRef.current) ldrRef.current.style.display = 'none';
            if (onComplete) onComplete();
          }
        });
      }
    });

    tl.to(tagI, { y: '0%', duration: 0.7, ease: 'power3.out' }, 0.2)
      .to(nameI, { y: '0%', duration: 1, ease: 'power4.out' }, 0.4)
      .to(roleI, { y: '0%', duration: 0.7, ease: 'power3.out' }, 0.7)
      .to(barRef.current, { width: '100%', duration: 1.6, ease: 'power2.inOut' }, 0.5)
      .to({}, {
        duration: 1.6, ease: 'power2.inOut', onUpdate: function() {
          if (pctRef.current) {
            pctRef.current.textContent = String(Math.round(this.progress() * 100)).padStart(3, '0');
          }
        }
      }, 0.5);
  }, { scope: ldrRef });

  return (
    <div id="ldr" ref={ldrRef}>
      <div className="ldr-ring ldr-r1"></div>
      <div className="ldr-ring ldr-r2"></div>
      <div className="ldr-ring ldr-r3"></div>
      <div className="ldr-dot"></div>
      <div className="ldr-body">
        <div className="ldr-tag"><span className="ldr-tag-i">Full Stack Developer · Gujarat, India</span></div>
        <div className="ldr-name"><span className="ldr-name-i">HET <em>RATHOD</em></span></div>
        <div className="ldr-role"><span className="ldr-role-i">B.Tech CSE · Batch 2025–2029</span></div>
        <div className="ldr-prog"><div className="ldr-bar" id="ldrBar" ref={barRef}></div></div>
        <div className="ldr-pct" id="ldrPct" ref={pctRef}>000</div>
      </div>
    </div>
  );
};

export default Loader;
