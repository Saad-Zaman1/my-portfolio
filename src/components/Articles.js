import React from 'react';

const articles = [
  {
    id: 1,
    title: 'Building Android Apps with Jetpack Compose',
    description: 'A comprehensive guide to modern Android development using Jetpack Compose and Clean Architecture principles.',
    readMore: 'Read more'
  },
  {
    id: 2,
    title: 'Implementing Clean Architecture in Android',
    description: 'Learn how to structure your Android projects using Clean Architecture for maintainable and scalable code.',
    readMore: 'Read more'
  },
  {
    id: 3,
    title: 'Publishing Apps to Google Play Store',
    description: 'Step-by-step guide to publishing your Android app to Google Play Store with best practices.',
    readMore: 'Read more'
  },
  {
    id: 4,
    title: 'Android UI/UX Design Patterns',
    description: 'Modern UI/UX design patterns and Material Design implementation in Android applications.',
    readMore: 'Read more'
  }
];

function Articles() {
  return (
    <section id="articles" className="section articles">
      <div className="container">
        <h2 className="section-title">Articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-number">{article.id}</div>
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-action">
                  <a href="#" className="article-link">{article.readMore}</a>
                  <span className="article-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
