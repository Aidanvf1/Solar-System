import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';

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
        <a id="websitelink" className="link-with-arrow" href="https://www.aidanvonfeldt.com/">
          Visit My Website<span className="arrow">←</span>
        </a>
      </header>
    </>
  );
}