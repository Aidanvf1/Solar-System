import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';

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



// START OF JAVASCRIPT
    const controlsRef = useRef({ 
        isDragging: false, 
        prevX: 0, 
        prevY: 0, 
        rotX: 0.2, 
        rotY: 0, 
        zoom: 100 
    });


    useEffect(() => {
    if (!containerRef.current) return;

    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    console.log('Creating 3D scene...');

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000510);
    sceneRef.current = scene;

    // camera
    const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
    camera.position.set(0, 30, 95
    );
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // stars
    const starsGeo = new THREE.BufferGeometry();
    const starPositions = [];
    for (let i = 0; i < 2000; i++) {
        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 500;
        const z = (Math.random() - 0.5) * 500;
        starPositions.push(x, y, z);
    }
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3 });
    scene.add(new THREE.Points(starsGeo, starsMat));

    // sun
    const sunGeo = new THREE.SphereGeometry(0.8, 32, 32);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffdd44 });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);

    const glowGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({ 
        color: 0xffaa33, 
        transparent: true, 
        opacity: 0.15 
    });
    scene.add(new THREE.Mesh(glowGeo, glowMat));

    // lights
    const light = new THREE.PointLight(0xffffff, 2, 200);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x333333));

    const scale = 1; // Make orbits smaller

    Object.entries(PLANETS_DATA).forEach(([name, data]) => {
        // planets
        const planetGeo = new THREE.SphereGeometry(data.size * 3, 24, 24);
        const planetMat = new THREE.MeshStandardMaterial({ 
        color: data.color, 
        roughness: 0.8 
        });
        const planet = new THREE.Mesh(planetGeo, planetMat);
        planet.userData.name = name;
        
        const distance = data.a * scale;
        planet.position.set(distance, 0, 0);
        
        scene.add(planet);

        console.log(`Added ${name} at distance ${distance}, position:`, planet.position);
    });

    const onMouseDown = (e) => {
        controlsRef.current.isDragging = true;
        controlsRef.current.prevX = e.clientX;
        controlsRef.current.prevY = e.clientY;
    };

    const onMouseMove = (e) => {
        if (!controlsRef.current.isDragging) return;

        const dx = e.clientX - controlsRef.current.prevX;
        const dy = e.clientY - controlsRef.current.prevY;

        controlsRef.current.rotY += dx * 0.005;
        controlsRef.current.rotX += dy * 0.005;

        // update camera position
        const c = controlsRef.current;
        camera.position.x = Math.sin(c.rotY) * Math.cos(c.rotX) * c.zoom;
        camera.position.y = Math.sin(c.rotX) * c.zoom;
        camera.position.z = Math.cos(c.rotY) * Math.cos(c.rotX) * c.zoom;
        camera.lookAt(0, 0, 0);

        // re-render
        renderer.render(scene, camera);

        controlsRef.current.prevX = e.clientX;
        controlsRef.current.prevY = e.clientY;
    };

    const onMouseUp = () => {
        controlsRef.current.isDragging = false;
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

  
    // render the scene
    renderer.render(scene, camera);

    console.log('3D scene created!');

    // cleanup
    return () => {
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);

    renderer.dispose();
    if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
    }
    };
    }, []);
// END OF JAVASCRIPT

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
    <input id="day" value="20" min="1" max="31" readOnly />
    <div className="buttongroup">
        <button className="buttonleft">⋖</button>
        <button className="buttonright">⋗</button>
    </div>
</div>
<div id="monthcontrol">
    <label htmlFor="month">Month:</label>
    <input id="month" value="June" readOnly />
    <div className="buttongroup">
        <button className="buttonleft">⋖</button>
        <button className="buttonright">⋗</button>
    </div>
</div>
<div id="yearcontrol">
    <label htmlFor="year">Year:</label>
    <input id="year" value="2004" min="0" max="2500" readOnly />
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
        <input type="range" id="speed" value="1" step=".1" min=".1" max="5" onChange={() => {}} />
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