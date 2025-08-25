import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Apps from './components/Apps';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#home" className="brand">Saad Zaman</a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contacts</a>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Apps />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
