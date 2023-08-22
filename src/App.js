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
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I am a passionate web developer and computer scientist with a strong foundation in computer science and engineering. I love creating user-friendly and innovative web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
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
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>If you're interested in collaborating or have any questions, feel free to get in touch!</p>
        <a href="mailto:your.email@example.com">jordanjlin2003@gmail.com</a>
      </section>
    </div>
  );
}

export default App;
