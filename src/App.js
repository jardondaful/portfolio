import React, { useState } from 'react';
import './App.css';
import images from './images';

function App() {
  const [trailMatchIndex, setTrailMatchIndex] = useState(0);
  const trailMatchImages = [images.trailmatchImage, images.trailMatchCardImage, images.trailMatchMapImage];

  const handleTrailMatchNavigation = (offset) => {
    const newIndex = trailMatchIndex + offset;
    setTrailMatchIndex((newIndex + trailMatchImages.length) % trailMatchImages.length);
  };
  
  return (
    <div className="App">
      <header className="App-header section-fade">
        <h1>Jordan Lin</h1>
        <p>Frontend Web Application Developer</p>
      </header>

      <section className="about-section section-fade">
        <h2>About Me</h2>
        <p>
          Hello! I'm an enthusiastic web developer dedicated to enhancing user experiences and creating visually captivating applications. I specialize in integrating Esri GIS products to vividly represent natural phenomena and modernizing existing applications to align with current market demands. With my versatile background in software development, UI/UX design, and GIS, I can contribute meaningfully and make a difference in various settings.
        </p>
      </section>

      <section className="projects-section section-fade">
        <h2>Projects</h2>
        <div className="project-group">
        <div className="project">
  <h3>TrailMatch: Hiking Made Easy</h3>
  <div className="project-image-container">
    {/* Slideshow Controls */}
    <button className="arrow-button left-arrow" onClick={() => handleTrailMatchNavigation(-1)}>←</button>
    <img src={trailMatchImages[trailMatchIndex]} alt="TrailMatch Project" />
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
        </div>

        <div className="project-group">
          <div className="project">
            <h3>California Cities Weather Dashboard</h3>
            <img src={images.DashboardImage} alt="DashboardImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
            <p>This was made with ArcGIS Pro and ArcGIS Dashboards, showcasing California's highest temperatures during the month of August. The interactive map highlights statewide temperature patterns and identifies major cities' hottest and coldest points, fusing application design and data analytics with the power of GIS.</p>
          </div>

          <div className="project">
            <h3>LA Cell Towers Explorer</h3>
            <img src={images.CellTowersImage} alt="CellImage" style={{ width: '100%', display: 'block', margin: '0 auto', borderRadius: '10px' }}/>
            <p>This was made with ArcGIS Pro and ArcGIS Web AppBuilder, showcasing all the cell towers within an inputted radius of an inputted address that's within LA.</p>
          </div>
        </div>
      </section>

      <section className="contact-section section-fade">
        <h2>Contact Me</h2>
        <p>If you're interested in collaborating or have any questions, feel free to get in touch!</p>
        <a href="mailto:jordanjlin2003@gmail.com">jordanjlin2003@gmail.com</a>
      </section>
    </div>
  );
}

export default App;
