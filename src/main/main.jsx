import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export function Main() {

    
const navigate = useNavigate();
const containerRef = useRef(null);
const sceneRef = useRef(null);
const rendererRef = useRef(null);
const cameraRef = useRef(null);

const [year, setYear] = useState(2026);
const [isPlaying, setIsPlaying] = useState(false);
const [speed, setSpeed] = useState(1);
const [currentDay, setCurrentDay] = useState(0);

useEffect(() => {
  console.log('useEffect is running!');
  console.log('Container element:', containerRef.current);
  
  if (containerRef.current) {
    const testDiv = document.createElement('div');
    testDiv.style.width = '200px';
    testDiv.style.height = '200px';
    testDiv.style.background = 'red';
    testDiv.style.margin = '50px auto';
    testDiv.textContent = 'TEST - If you see this, React works!';
    testDiv.style.color = 'white';
    testDiv.style.display = 'flex';
    testDiv.style.alignItems = 'center';
    testDiv.style.justifyContent = 'center';
    containerRef.current.appendChild(testDiv);
    
    console.log('Red box added!');
  }
}, []);



return (
<div>
<header id="mainheader">
    <h1>Eyes on Space</h1>
    <p>Username: <span id="username-display">[Not logged in]</span></p>
</header>

{/* application text */}
<main id="solarsystem">
    <div id="scenearea" ref={containerRef}></div>
    <div id="instructions">Drag to move camera • Scroll to zoom.</div>
</main>

{/* websocket placeholder */}
<section id="onlineusers">
    <h2>Online Users</h2>
    <p><span id="online-count">0</span> others online</p>
    <ul>
        <li className="link-with-arrow">See Users<span className="arrow">←</span></li>
    </ul>
</section>

{/* login section */}
<section id="loginsection">   
    <h2>Login(will be a popup)</h2>
        <form>
            <p>
                <label htmlFor="username">Username:</label><br />
                <input type="text" id="username" name="username" placeholder="Enter username" />
            </p>
            <p>
                <label htmlFor="password">Password:</label><br />
                <input type="password" id="password" name="password" placeholder="Enter password" />
            </p>
            <button type="button">Login</button>
            <button type="button">Create Account</button>
        </form>

</section>

{/* 3rd party api stuff */}
<section id="nasaapi">
    <h2> Nasa API Holder</h2>
    <p>Will check to make sure positions are correct from nasas api</p>
</section>

{/* controls */}
<div id="datecontrolsgroup">
<div id="daycontrol">
    <label htmlFor="day">Day:</label>
    <input id="day" value="20" min="1" max="31" />
    <div className="buttongroup">
        <button className="buttonleft">⋖</button>
        <button className="buttonright">⋗</button>
    </div>
</div>
<div id="monthcontrol">
    <label htmlFor="month">Month:</label>
    <input id="month" value="June" />
    <div className="buttongroup">
        <button className="buttonleft">⋖</button>
        <button className="buttonright">⋗</button>
    </div>
</div>
<div id="yearcontrol">
    <label htmlFor="year">Year:</label>
    <input id="year" value="2004" min="0" max="2500" />
    <div className="buttongroup">
        <button className="buttonleft">⋖</button>
        <button className="buttonright">⋗</button>
    </div>
</div>
</div>


<section id="dateandcontrols">
    <button id="playbutton" type="button">▶</button>
    
    <div id="speedcontrols">
        <label htmlFor="speed">Speed:</label>
        <input type="range" id="speed" value="1" step=".1" min=".1" max="5" />
    </div>
</section>

{/* database placeholder */}
<section id="saveddates">
    <button id="savedatebutton">Save Current Date</button>
    <button id="saved">Saved Dates</button>
    <div id="saveddateslist">
        <ul>
            <li>Placeholder</li>
        </ul>
    </div>
</section>


{/* footer for github and html cross links */}
<footer>
    <nav>
        <Link to="/about" className="link-with-arrow">About <span className="arrow">←</span></Link>
    </nav>
    <a href="https://github.com/Aidanvf1/Solar-System" className="link-with-arrow">GitHub Repository <span className="arrow">←</span></a>
    <p>© 2026 Aidan Von Feldt</p>
</footer>

</div>
);
}