import React from 'react';
import { Link } from 'react-router-dom';
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

const SCALE = 5;

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function dateToDays(year, month, day) {
  const j2000 = new Date(Date.UTC(2000, 0, 1, 12));
  const target = new Date(Date.UTC(year, month - 1, day, 12));
  return (target - j2000) / (1000 * 60 * 60 * 24);
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

export function Main() {
  
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const labelsRef = useRef({});
  const asteroidsRef = useRef([]);
  const orbitLinesRef = useRef([]);

  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2026);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);

  // START OF JAVASCRIPT
  const controlsRef = useRef({ 
    isDragging: false, 
    prevX: 0, 
    prevY: 0, 
    rotX: 0.2, 
    rotY: 0, 
    zoom: 100 
  });
  const isPlayingRef = useRef(false);  
  const speedRef = useRef(1);
  const daysRef = useRef(dateToDays(2026, 1, 1));

  function snapDateToRef() {
    const d = new Date(Date.UTC(2000, 0, 1, 12));
    d.setUTCDate(d.getUTCDate() + Math.floor(daysRef.current));
    setDay(d.getUTCDate());
    setMonth(d.getUTCMonth() + 1);
    setYear(d.getUTCFullYear());
  }

  function changeDay(delta) {
    setDay(prev => {
      const max = getDaysInMonth(year, month);
      const next = prev + delta;
      if (next < 1) return max;
      if (next > max) return 1;
      return next;
    });
  }

  function changeMonth(delta) {
    setMonth(prev => {
      const next = prev + delta;
      if (next < 1) return 12;
      if (next > 12) return 1;
      return next;
    });
  }

  function changeYear(delta) {
    setYear(prev => prev + delta);
  }

  useEffect(() => {
    daysRef.current = dateToDays(year, month, day);
  }, [day, month, year]);

  useEffect(() => {
    orbitLinesRef.current.forEach(line => {
      line.visible = showOrbits;
    });
  }, [showOrbits]);

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
    
    const c = controlsRef.current;
    camera.position.x = Math.sin(c.rotY) * Math.cos(c.rotX) * c.zoom;
    camera.position.y = Math.sin(c.rotX) * c.zoom;
    camera.position.z = Math.cos(c.rotY) * Math.cos(c.rotX) * c.zoom;
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
    for (let i = 0; i < 3000; i++) {
      let x, y, z;
      do {
        x = (Math.random() - 0.5) * 800;
        y = (Math.random() - 0.5) * 800;
        z = (Math.random() - 0.5) * 800;
      } while (Math.sqrt(x*x + y*y + z*z) < 200);
      starPositions.push(x, y, z);
    }
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    const starsMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
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

    Object.entries(PLANETS_DATA).forEach(([name, data]) => {
      // planets
      const planetGeo = new THREE.SphereGeometry(data.size * 3, 24, 24);
      const planetMat = new THREE.MeshStandardMaterial({ 
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.3,
        roughness: 0.8 
      });
      const planet = new THREE.Mesh(planetGeo, planetMat);
      planet.userData.name = name;
      
      const distance = data.a * SCALE;
      const angle = Math.random() * Math.PI * 2;

      planet.position.set(
        Math.cos(angle) * distance,
        0,                            
        Math.sin(angle) * distance 
      );
      scene.add(planet);

      if (data.rings) {
        const ringGeo = new THREE.RingGeometry(data.size * 3 * 1.4, data.size * 3 * 2.4, 64);
        const ringMat = new THREE.MeshBasicMaterial({ 
          color: 0xc4a66a, 
          side: THREE.DoubleSide, 
          transparent: true, 
          opacity: 0.7 
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2.5;
        planet.add(ring);
      }

      planetsRef.current[name] = planet;

      console.log(`Added ${name} at distance ${distance}, position:`, planet.position);

      const orbitPoints = [];
      for (let angle = 0; angle <= 360; angle += 5) {
        const rad = (angle * Math.PI) / 180;
        orbitPoints.push(new THREE.Vector3(
          Math.cos(rad) * distance,
          0,
          Math.sin(rad) * distance
        ));
      }
      const orbitGeo = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMat = new THREE.LineBasicMaterial({ 
        color: 0x334455, 
        transparent: true, 
        opacity: 0.4 
      });
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
      scene.add(orbitLine);
      orbitLinesRef.current.push(orbitLine);
    });

    const asteroidBeltGroup = new THREE.Group();
    for (let i = 0; i < 1500; i++) {
      const r = (2.2 + Math.random() * 1.3) * SCALE;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.5;
      const geo = new THREE.SphereGeometry(0.03 + Math.random() * 0.04, 4, 4);
      const brightness = 0.3 + Math.random() * 0.3;
      const mat = new THREE.MeshBasicMaterial({ 
        color: new THREE.Color(brightness, brightness * 0.9, brightness * 0.8) 
      });
      const asteroid = new THREE.Mesh(geo, mat);
      asteroid.position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
      asteroidBeltGroup.add(asteroid);
      asteroidsRef.current.push({ mesh: asteroid, r, angle, y });
    }
    scene.add(asteroidBeltGroup);

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

    const onWheel = (e) => {
      e.preventDefault();

      // zoom based on scroll
      controlsRef.current.zoom += e.deltaY * 0.05;
  
      controlsRef.current.zoom = Math.max(15, Math.min(200, controlsRef.current.zoom));
  
      // update camera position
      const c = controlsRef.current;
      camera.position.x = Math.sin(c.rotY) * Math.cos(c.rotX) * c.zoom;
      camera.position.y = Math.sin(c.rotX) * c.zoom;
      camera.position.z = Math.cos(c.rotY) * Math.cos(c.rotX) * c.zoom;
      camera.lookAt(0, 0, 0);
      
      // re-render
      renderer.render(scene, camera);
      
      console.log('Zoom:', c.zoom);
    };

    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

    // render the scene
    renderer.render(scene, camera);

    console.log('3D scene created');

    // cleanup
    return () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);

      renderer.dispose();
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // sync state to refs
  useEffect(() => {
    isPlayingRef.current = isPlaying;
    speedRef.current = speed;
  }, [isPlaying, speed]);

  // planet animation
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      if (isPlayingRef.current) {
        daysRef.current += 0.5 * speedRef.current;

        const d = new Date(Date.UTC(2000, 0, 1, 12));
        d.setUTCDate(d.getUTCDate() + Math.floor(daysRef.current));
        setDay(d.getUTCDate());
        setMonth(d.getUTCMonth() + 1);
        setYear(d.getUTCFullYear());
      }
      
      // move each planet
      Object.entries(PLANETS_DATA).forEach(([name, data]) => {
        const planet = planetsRef.current[name];
        if (planet) {
          const distance = data.a * SCALE;
          const n = 360 / data.period;
          let M = (data.M0 + n * daysRef.current) % 360;
          if (M < 0) M += 360;
          const angle = M * (Math.PI / 180);
          
          planet.position.x = Math.cos(angle) * distance;
          planet.position.z = Math.sin(angle) * distance;
        }
      });

      asteroidsRef.current.forEach(a => {
        const orbitalPeriod = 365.25 * Math.pow(a.r / SCALE, 1.5);
        const n = (2 * Math.PI) / orbitalPeriod;
        const step = isPlayingRef.current ? n * 0.5 * speedRef.current : 0;
        a.angle += step;
        a.mesh.position.x = Math.cos(a.angle) * a.r;
        a.mesh.position.z = Math.sin(a.angle) * a.r;
      });
      
      // re-render the scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);

        Object.entries(planetsRef.current).forEach(([name, planet]) => {
          const el = labelsRef.current[name];
          if (!el) return;
          const vector = planet.position.clone();
          vector.project(cameraRef.current);
          const rect = rendererRef.current.domElement.getBoundingClientRect();
          if (vector.z < 1) {
            const x = (vector.x * 0.5 + 0.5) * rect.width;
            const y = (-vector.y * 0.5 + 0.5) * rect.height;
            el.style.left = x + 'px';
            el.style.top = (y - 20) + 'px';
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      }
    };
    
    animate();
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
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
        <div id="planetlabels" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}>
          {Object.keys(PLANETS_DATA).map(name => (
            <div
              key={name}
              ref={el => labelsRef.current[name] = el}
              style={{
                position: 'absolute',
                color: PLANETS_DATA[name].color,
                fontSize: '11px',
                fontFamily: 'monospace',
                textShadow: '0 0 4px black',
                whiteSpace: 'nowrap',
                transform: 'translateX(-50%)',
              }}
            >
              {name}
            </div>
          ))}
        </div>
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
          <input id="day" value={day} readOnly />
          <div className="buttongroup">
            <button className="buttonleft" onClick={() => changeDay(-1)}>⋖</button>
            <button className="buttonright" onClick={() => changeDay(1)}>⋗</button>
          </div>
        </div>
        <div id="monthcontrol">
          <label htmlFor="month">Month:</label>
          <input id="month" value={MONTH_NAMES[month - 1]} readOnly />
          <div className="buttongroup">
            <button className="buttonleft" onClick={() => changeMonth(-1)}>⋖</button>
            <button className="buttonright" onClick={() => changeMonth(1)}>⋗</button>
          </div>
        </div>
        <div id="yearcontrol">
          <label htmlFor="year">Year:</label>
          <input id="year" value={year} readOnly />
          <div className="buttongroup">
            <button className="buttonleft" onClick={() => changeYear(-1)}>⋖</button>
            <button className="buttonright" onClick={() => changeYear(1)}>⋗</button>
          </div>
        </div>
      </div>

      <section id="dateandcontrols">
        <button 
          id="playbutton" 
          type="button"
          onClick={() => {
            const newPlaying = !isPlaying;
            setIsPlaying(newPlaying);
            if (!newPlaying) snapDateToRef();
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        
        <div id="speedcontrols">
          <label htmlFor="speed">Speed:</label>
          <input 
            type="range" 
            id="speed" 
            value={speed} 
            step=".1" 
            min=".1" 
            max="5" 
            onChange={(e) => setSpeed(+e.target.value)} 
          />
        </div>

        <button type="button" className="orbit-toggle-btn" onClick={() => setShowOrbits(prev => !prev)}>
          {showOrbits ? 'Hide Lines' : 'Show Lines'}
        </button>
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