import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

export function Main() {
    const PLANETS_DATA = {
        Mercury: { a: 0.387, e: 0.205, i: 7.0, color: '#8c8c8c', size: 0.08, period: 87.97, omega: 77.45, node: 48.33, M0: 174.79 },
        Venus: { a: 0.723, e: 0.007, i: 3.4, color: '#e6c87a', size: 0.12, period: 224.7, omega: 131.53, node: 76.68, M0: 50.42 },
        Earth: { a: 1.0, e: 0.017, i: 0.0, color: '#4a90d9', size: 0.13, period: 365.25, omega: 102.94, node: -11.26, M0: 357.53 },
        Mars: { a: 1.524, e: 0.093, i: 1.85, color: '#c1440e', size: 0.1, period: 686.98, omega: 336.04, node: 49.58, M0: 19.41 },
        Jupiter: { a: 5.203, e: 0.048, i: 1.3, color: '#d4a574', size: 0.35, period: 4332.59, omega: 14.75, node: 100.56, M0: 20.02 },
        Saturn: { a: 9.537, e: 0.054, i: 2.49, color: '#e6d4a3', size: 0.3, period: 10759.22, omega: 92.43, node: 113.72, M0: 317.02, rings: true },
        Uranus: { a: 19.19, e: 0.047, i: 0.77, color: '#7de3f4', size: 0.22, period: 30688.5, omega: 170.96, node: 74.23, M0: 142.24 },
        Neptune: { a: 30.07, e: 0.009, i: 1.77, color: '#4b70dd', size: 0.21, period: 60182, omega: 44.97, node: 131.72, M0: 256.23 }
    };
    
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