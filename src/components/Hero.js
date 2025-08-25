import React from 'react';

const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/Saad-Zaman1', icon: '🐙' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/saad-zaman1/', icon: '💼' },
  { label: 'Mail', url: 'mailto:saad.zaman5439@gmail.com', icon: '📧' },
  // { label: 'Facebook', url: '#', icon: '📘' },
  // { label: 'Instagram', url: '#', icon: '📷' },
];

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
                                    <h1 className="title">Impossible. <span className="accent">Maybe.</span></h1>
                        <p className="subtitle">Senior Android Engineer with 3+ years of experience building apps that serve millions of users. I transform complex problems into elegant, maintainable solutions.</p>
            <div className="cta-row">
              <a href="#projects" className="btn primary">Projects</a>
              <div className="arrow">→</div>
            </div>
          </div>
          <div className="hero-right">
                                    <div className="hero-stats">
                          <div className="stat-item">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Published Apps</div>
                          </div>
                          <div className="stat-item">
                            <div className="stat-number">1M+</div>
                            <div className="stat-label">Downloads</div>
                          </div>
                          <div className="stat-item">
                            <div className="stat-number">3+</div>
                            <div className="stat-label">Years Experience</div>
                          </div>
                        </div>
                        <div className="social-grid">
                          {socialLinks.map((social) => (
                            <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="social-btn">
                              <span className="social-icon">{social.icon}</span>
                              <span className="social-label">{social.label}</span>
                            </a>
                          ))}
                        </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;


