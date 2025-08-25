import React from 'react';

const workExperience = [
  {
    period: 'Aug 2025 - Present',
    company: 'Galixo AI',
    role: 'Android Engineer',
    technologies: 'Kotlin, Jetpack Compose, Clean Architecture, Android SDK',
    location: 'Islamabad, Pakistan'
  },
  {
    period: 'Sep 2023 - Aug 2025',
    company: 'Hazel Mobile',
    role: 'Android Engineer',
    technologies: 'Kotlin, Jetpack Compose, Clean Architecture, Hilt/Koin, Retrofit, Ktor, GitLab, Asana',
    location: 'Lahore, Punjab, Pakistan',
    description: 'Started as Android Engineer Intern and progressed to full Android Engineer role. Owned complete app development lifecycle from concept to Play Store release. Built dynamic layout systems for pixel-perfect views across all Android screen sizes. Developed expense tracker, real estate app, and photo gallery applications.'
  },
  {
    period: '2022 - Present',
    company: 'Freelance',
    role: 'Mobile App Developer',
    technologies: 'Kotlin, Jetpack Compose, Android SDK, Clean Architecture, Firebase',
    location: 'Remote',
    description: 'Developed and published multiple apps on Google Play Store. Specialized in modern Android development with Jetpack Compose.'
  }
];

function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <h2 className="section-title">Where I’ve Built Apps</h2>
                 <div className="work-timeline">
           {workExperience.map((job, index) => (
             <div key={index} className="work-item">
               <div className="work-period">{job.period}</div>
               <div className="work-details">
                 <div className="work-company">{job.company}</div>
                 <div className="work-role">{job.role}</div>
                 <div className="work-location">{job.location}</div>
                 <div className="work-tech">{job.technologies}</div>
                 {job.description && (
                   <div className="work-description">{job.description}</div>
                 )}
               </div>
             </div>
           ))}
         </div>
         <div className="work-summary">
           <span className="work-experience">Work experience 3+ years</span>
         </div>
      </div>
    </section>
  );
}

export default Work;
