import React from 'react';

const skills = [
  {
    category: 'Front-end',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material Design', 'Clean Architecture', 'MVVM', 'Coroutines', 'Dagger Hilt']
  },
  {
    category: 'Back-end',
    technologies: ['Firebase', 'REST APIs', 'JSON', 'SQLite', 'Room Database', 'Retrofit', 'OkHttp']
  },
  {
    category: 'Tools & Testing',
    technologies: ['Android Studio', 'Git', 'GitHub', 'JUnit', 'Espresso', 'Postman', 'Figma']
  },
  {
    category: 'Publishing',
    technologies: ['Google Play Console', 'App Store Connect', 'App Signing', 'Release Management', 'Analytics']
  }
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2 className="section-title">Crafted with care</h2>
            <p className="about-text">I strive to make each app easy on the eye, simple to use, and rock-solid under the hood. Every line of code is written with maintainability, performance, and user experience in mind.</p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">50+</div>
                <div className="about-stat-label">Features Developed</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">99.9%</div>
                <div className="about-stat-label">App Uptime</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">Support</div>
              </div>
            </div>
          </div>
          <div className="about-right">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.category} className="skill-box">
                  <h3 className="skill-title">{skill.category}</h3>
                  <div className="skill-tech">
                    {skill.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
