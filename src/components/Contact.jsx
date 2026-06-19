import React, { useState } from 'react';

const Contact = () => {
  const [btnText, setBtnText] = useState('✉  Send Message');
  const [bgStyle, setBgStyle] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setBtnText('✓  Sent!');
    setBgStyle({ background: '#2d6e4a' });
    setDisabled(true);

    setTimeout(() => {
      setBtnText('✉  Send Message');
      setBgStyle({});
      setDisabled(false);
      e.target.reset();
    }, 3500);
  };

  return (
    <section id="contact">
      <div className="we rv">Get In Touch</div>
      <div className="con-wrap">
        <div>
          <div className="con-big rv">Let's<br/><em>Build It.</em></div>
          <p className="con-sub rv">Available for freelance, internships &amp; collabs. I reply within 24h — no ghosting.</p>
          <div className="con-links rv">
            <a className="cln" href="mailto:hetrathod49@gmail.com"><div className="cln-l"><div className="cln-ico">📧</div><div><div className="cln-lbl">Email</div><div className="cln-val">hetrathod49@gmail.com</div></div></div><span className="cln-arr">↗</span></a>
            <a className="cln" href="tel:+919979612044"><div className="cln-l"><div className="cln-ico">📞</div><div><div className="cln-lbl">Phone</div><div className="cln-val">+91 9979612044</div></div></div><span className="cln-arr">↗</span></a>
            <a className="cln" href="https://www.linkedin.com/in/het-rathod-a6203839b/" target="_blank" rel="noopener noreferrer"><div className="cln-l"><div className="cln-ico">💼</div><div><div className="cln-lbl">LinkedIn</div><div className="cln-val">het-rathod</div></div></div><span className="cln-arr">↗</span></a>
            <a className="cln" href="https://github.com/Het510" target="_blank" rel="noopener noreferrer"><div className="cln-l"><div className="cln-ico">🐙</div><div><div className="cln-lbl">GitHub</div><div className="cln-val">Het510</div></div></div><span className="cln-arr">↗</span></a>
            <a className="cln" href="https://leetcode.com/u/Het510/" target="_blank" rel="noopener noreferrer"><div className="cln-l"><div className="cln-ico">🧠</div><div><div className="cln-lbl">LeetCode</div><div className="cln-val">Het510</div></div></div><span className="cln-arr">↗</span></a>
          </div>
        </div>
        <div className="con-form rv">
          <div className="con-form-title">Send a Message</div>
          <form onSubmit={handleForm}>
            <div className="cf-fld" style={{ marginBottom: '12px' }}><label className="cf-lbl">Your Name</label><input className="cf-in" type="text" placeholder="John Doe" required/></div>
            <div className="cf-fld" style={{ marginBottom: '12px' }}><label className="cf-lbl">Email</label><input className="cf-in" type="email" placeholder="john@example.com" required/></div>
            <div className="cf-fld" style={{ marginBottom: '12px' }}><label className="cf-lbl">Message</label><textarea className="cf-ta" placeholder="Hey Het, I'd love to collaborate on..." required></textarea></div>
            <button className="cf-sub" type="submit" style={bgStyle} disabled={disabled}>{btnText}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
