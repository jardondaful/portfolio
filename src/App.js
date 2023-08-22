import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>Jordan Lin</h1>
        <p>Frontend Web Application Developer</p>
      </header>

      {/* About Section */}
      <section className="about-section section-fade">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer that is most interested in optimizing the user's experience
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section section-fade">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project Name 1</h3>
          <p>Short project description goes here.</p>
        </div>
        <div className="project">
          <h3>Project Name 2</h3>
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
