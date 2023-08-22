import React from 'react';
import './App.css';
import images from './images'
function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header section-fade">
        <h1>Jordan Lin</h1>
        <p>Frontend Web Application Developer</p>
      </header>

      {/* About Section */}
      <section className="about-section section-fade">
        <h2>About Me</h2>
        <p>
          Hello! I am a passionate web developer that loves making applications easier to use and more visually appealing to potential users.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-fade">
        <h2>Projects</h2>
        <div className="project">
          <h3>TrailMatch: Hiking Made Easy</h3>
          <img src={images.trailmatchImage} alt="TrailMatch Project" style={{ width: '100%', display: 'block', margin: '0 auto' }}/>
          <p>Short project description goes here.</p>
        </div>
        {/* Add more projects here */}
      </section>

      {/* Contact Section */}
      <section className="contact-section section-fade">
        <h2>Contact Me</h2>
        <p>If you're interested in collaborating or have any questions, feel free to get in touch!</p>
        <a href="mailto:jordanjlin2003@gmail.com">jordanjlin2003@gmail.com</a>
      </section>
    </div>
  );
}

export default App;




