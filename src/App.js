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
          <p>TrailMatch harnesses the power of ChatGPT API to create an 
             exhilarating hiking experience tailored just for you. I was responsible for the entire user interface of this project,
             and my team was able to secure 9th place in Esri's 8th Annual Hackathon!
          </p>
        </div>
        <div className="project">
          <h4>Bruin Bites</h4>
          <img src={images.BruinBitesImage} alt="BruinBites" style={{ width: '100%', display: 'block', margin: '0 auto' }}/>
          <p>Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, 
             a new user can use the website to view what each restaurant/take-out option is serving, view their respective ratings, and even make them themselves. </p>
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




