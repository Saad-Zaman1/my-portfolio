import React from 'react';

const socials = [
  { label: 'LinkedIn', handle: '@saad-zaman1', url: 'https://www.linkedin.com/in/saad-zaman1/', icon: '💼' },
  { label: 'GitHub', handle: '@Saad-Zaman1', url: 'https://github.com/Saad-Zaman1', icon: '🐙' },
];

function Socials() {
  return (
    <section id="socials" className="section socials">
      <div className="container">
        <h2 className="section-title">.../Contacts...</h2>
        <div className="row">
          {socials.map((s) => (
            <a key={s.label} className="pill" href={s.url} target="_blank" rel="noreferrer">
              <span className="pill-icon" aria-hidden>{s.icon}</span>
              <span>{s.label}</span>
              <span className="muted">{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Socials;


