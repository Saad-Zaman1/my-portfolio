import React from 'react';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="section-title">Let's Build Something Great</h2>
            <div className="contact-info">
              <h3 className="contact-name">Saad Zaman</h3>
              <p className="contact-title">Mobile App Developer</p>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-links">
              <a href="#home">Main</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
            </div>
          </div>
        </div>
        <div className="contact-social">
          <a href="https://github.com/Saad-Zaman1" target="_blank" rel="noreferrer" className="social-icon">🐙</a>
          <a href="https://www.linkedin.com/in/saad-zaman1/" target="_blank" rel="noreferrer" className="social-icon">💼</a>
          <a href="mailto:saad.zaman5439@gmail.com" className="social-icon">📧</a>
          {/* <a href="#" className="social-icon">📱</a>
          <a href="#" className="social-icon">📘</a>
          <a href="#" className="social-icon">📷</a> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;