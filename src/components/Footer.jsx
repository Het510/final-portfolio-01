import React from 'react';

const Footer = () => {
  return (
    <footer className="inn">
      <div className="foot-top">
        <span className="foot-logo">HET <em>RATHOD</em></span>
        <nav className="foot-nav">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#work">work</a>
          <a href="#certs">certs</a>
          <a href="#hackathon">hackathon</a>
          <a href="#contact">contact</a>
        </nav>
      </div>
      <div className="foot-btm">
        <span className="foot-copy">© 2026 Het Rathod. All rights reserved.</span>
        <span className="foot-made">Designed &amp; built by <em>Het Rathod</em></span>
      </div>
    </footer>
  );
};

export default Footer;
