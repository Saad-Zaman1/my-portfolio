import React from 'react';

const projects = [
  { 
    name: 'Status Saver Ultra', 
    description: 'Download WhatsApp status videos and images with ease. Features include status preview, batch downloading, media organization, and support for all WhatsApp status formats. Over 1M+ downloads with 4.5+ star rating.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material Design', 'Clean Architecture', 'MVVM'],
    url: 'https://play.google.com/store/apps/details?id=com.wastatus.downloadstatus.videodownloader.statussaver.ultra.status.saver.statusdownloader',
    logo: '/images/status-saver-logo.webp'
  },
  { 
    name: 'QR & Barcode Scanner', 
    description: 'Lightning-fast QR code and barcode scanner with instant results. Supports 50+ barcode formats including QR, Code 128, EAN-13, UPC-A, and more. Features history tracking, copy functionality, and flashlight support.',
    technologies: ['Kotlin', 'CameraX', 'ML Kit', 'Room Database', 'Coroutines', 'Dagger Hilt'],
    url: 'https://play.google.com/store/apps/details?id=qr.scanner.barcodescanner.qrcodescanner.qrcodereader',
    logo: '/images/qr-scanner-logo.webp'
  },
  { 
    name: 'Invitation Maker', 
    description: 'Create stunning RSVP cards and invitations with 100+ customizable templates. Features drag-and-drop design tools, social sharing, high-resolution export, and real-time collaboration. Perfect for weddings, parties, and events.',
    technologies: ['Kotlin', 'Canvas API', 'Custom Views', 'Firebase', 'Social Sharing', 'Material Design'],
    url: 'https://play.google.com/store/apps/details?id=invitation.maker.rsvp.carddesign',
    logo: '/images/invitation-maker-logo.webp'
  },
  { 
    name: 'Holy Quran App', 
    description: 'Complete Quran application with 30+ translations, audio recitations by famous Qaris, prayer times, and offline access. Features bookmarking, search functionality, verse sharing, and beautiful Arabic typography.',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Audio Player', 'Offline Storage', 'Prayer Times API'],
    url: 'https://play.google.com/store/apps/details?id=quran.holyquran.alquranapp',
    logo: '/images/quran-app-logo.webp'
  },
];

function Apps() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Engineering at the Core</h2>
        <div className="projects-stats">
          <div className="project-stat">
            <div className="project-stat-number">4</div>
            <div className="project-stat-label">Published Apps</div>
          </div>
          <div className="project-stat">
            <div className="project-stat-number">1M+</div>
            <div className="project-stat-label">Downloads</div>
          </div>
          <div className="project-stat">
            <div className="project-stat-number">50+</div>
            <div className="project-stat-label">Features Built</div>
          </div>
          <div className="project-stat">
            <div className="project-stat-number">99.9%</div>
            <div className="project-stat-label">Uptime</div>
          </div>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.name} className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="project-content">
                <div className="project-info">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-link">
                    View on Play Store →
                  </a>
                </div>
                                 <div className="project-visual">
                   <div className="project-logo">
                     <img src={project.logo} alt={`${project.name} logo`} />
                   </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apps;


