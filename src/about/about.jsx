// imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';

// about page
export function About() {
  const navigate = useNavigate();

  return (
    <>
      <a id="backbutton" className="link-with-arrow" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
        Back<span className="arrow">←</span>
      </a>

      <header>
        <img id="profilepic" src="Aidanprofessional.png" alt="Profile Picture" width="205" height="307" />
        <p id="name">Created by Aidan Von Feldt</p>   
        <p id="website-description">
          Hi friends! My name is Aidan Von Feldt. I'm a Computer Science Animation major at BYU.
          I am facinated with space.
          This interactive solar system lets you explore planetary motion in 3D. 
          It's mathematically accurate — following Kepler's laws and displaying the real axial tilt of each planet and orbit.
          Visit my website to learn more about me and my projects. Enjoy!
        </p>
        <a id="websitelink" className="link-with-arrow" href="https://www.aidanvonfeldt.com/">
          Visit My Website<span className="arrow">←</span>
        </a>
      </header>
    </>
  );
}