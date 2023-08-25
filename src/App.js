import React, { useState } from 'react';
import './App.css';
import images from './images';

function App() {
  // Declare state for the slideshow index
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);
  // Array of TrailMatch images
  const trailMatchImages = [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage];

  // Function to navigate through slideshow images
  const handleTrailMatchNavigation = (offset) => {
    const newIndex = trailMatchIndex + offset;
    // Ensure index is within bounds of the images array
    setTrailMatchIndex((newIndex + trailMatchImages.length) % trailMatchImages.length);
  };

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
          {/* Slideshow Controls */}
          <div className="slideshow-container">
            <button className="arrow-button left-arrow" onClick={() => handleTrailMatchNavigation(-1)}>←</button>
            <img src={trailMatchImages[trailMatchIndex]} alt="TrailMatch Project" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }} />
            <button className="arrow-button right-arrow" onClick={() => handleTrailMatchNavigation(1)}>→</button>
          </div>
          <p>TrailMatch harnesses the power of ChatGPT API to create an exhilarating hiking experience tailored just for you. I was responsible for the entire user interface of this project, and my team was able to secure 9th place in Esri's 8th Annual Hackathon!</p>
        </div>
        <div className="project">
          <h3>Bruin Bites</h3>
          <img src={images.BruinBitesImage} alt="BruinBites" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>Bruin Bites is a website that allows UCLA students to more easily connect with their friends through food! Right off the bat, 
             a new user can use the website to view what each restaurant/take-out option is serving, view their respective ratings, and even make them themselves.</p>
        </div>
        <div className="project">
          <h3>California Cities Weather Dashboard</h3>
          <img src={images.DashboardImage} alt="DasbhoardImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>
             This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California's highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities' hottest and coldest points, fusing application design and data analytics with the power of GIS. 
          </p>
        </div>
        <div className="project">
          <h3>LA Cell Towers Explorer</h3>
          <img src={images.CellTowersImage} alt="CellImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
          <p>test</p>
        </div>
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
