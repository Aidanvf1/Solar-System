// imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { LoginModal } from './loginmodal';
import { DateControls } from './datecontrols';
import { PlayControls } from './playcontrols';
import { SavedDates } from './saveddates';
import { OnlineUsers } from './onlineusers';
import { ApodSection } from './apodsection';
import { PlanetLabels } from './planetlabels';
import { MusicPlayer } from './musicplayer';

// planetary data
const PLANETS_DATA = {
  Mercury: { a: 0.387, e: 0.205, i: 7.0, color: '#8c8c8c', size: 0.08, period: 87.97, omega: 77.45, node: 48.33, M0: 174.79, axialTilt: 0.03 },
  Venus: { a: 0.723, e: 0.007, i: 3.4, color: '#e6c87a', size: 0.12, period: 224.7, omega: 131.53, node: 76.68, M0: 50.42, axialTilt: 177.4 },
  Earth: { a: 1.0, e: 0.017, i: 0.0, color: '#4a90d9', size: 0.13, period: 365.25, omega: 102.94, node: -11.26, M0: 357.53, axialTilt: 23.44 },
  Mars: { a: 1.524, e: 0.093, i: 1.85, color: '#c1440e', size: 0.1, period: 686.98, omega: 336.04, node: 49.58, M0: 19.41, axialTilt: 25.19 },
  Jupiter: { a: 5.203, e: 0.048, i: 1.3, color: '#d4a574', size: 0.35, period: 4332.59, omega: 14.75, node: 100.56, M0: 20.02, axialTilt: 3.13 },
  Saturn: { a: 9.537, e: 0.054, i: 2.49, color: '#e6d4a3', size: 0.3, period: 10759.22, omega: 92.43, node: 113.72, M0: 317.02, rings: true, axialTilt: 26.73 },
  Uranus: { a: 19.19, e: 0.047, i: 0.77, color: '#7de3f4', size: 0.22, period: 30688.5, omega: 170.96, node: 74.23, M0: 142.24, axialTilt: 97.77 },
  Neptune: { a: 30.07, e: 0.009, i: 1.77, color: '#4b70dd', size: 0.21, period: 60182, omega: 44.97, node: 131.72, M0: 256.23, axialTilt: 28.32 }
};

// scale
const SCALE = 6;

// month names
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// date to days
function dateToDays(year, month, day) {
  const j2000 = new Date(Date.UTC(2000, 0, 1, 12));
  const target = new Date(Date.UTC(year, month - 1, day, 12));
  return (target - j2000) / (1000 * 60 * 60 * 24);
}

// days in month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// kepler's equation
function solveKeplersEquation(M, e, tolerance = 1e-6) {
  let E = M;
  let delta = 1;
  let iterations = 0;
  const maxIterations = 30;
  
  while (Math.abs(delta) > tolerance && iterations < maxIterations) {
    delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E = E - delta;
    iterations++;
  }
  
  return E;
}

// orbital position
function getOrbitalPosition(a, e, i, omega, node, M) {
  // degrees to radians
  const iRad = i * Math.PI / 180;
  const omegaRad = omega * Math.PI / 180;
  const nodeRad = node * Math.PI / 180;
  const MRad = M * Math.PI / 180;
  
  // solve kepler's equation for eccentric anomaly
  const E = solveKeplersEquation(MRad, e);
  
  // calculate true anomaly
  const nu = 2 * Math.atan2(
    Math.sqrt(1 + e) * Math.sin(E / 2),
    Math.sqrt(1 - e) * Math.cos(E / 2)
  );
  
  // calculate distance from sun
  const r = a * (1 - e * Math.cos(E));
  
  // orbital plane position
  const xOrbital = r * Math.cos(nu);
  const yOrbital = r * Math.sin(nu);
  
  // rotate to ecliptic
  // perihelion rotation
  const x1 = xOrbital * Math.cos(omegaRad) - yOrbital * Math.sin(omegaRad);
  const y1 = xOrbital * Math.sin(omegaRad) + yOrbital * Math.cos(omegaRad);
  
  // apply inclination
  const x2 = x1;
  const y2 = y1 * Math.cos(iRad);
  const z2 = y1 * Math.sin(iRad);
  
  // apply longitude of ascending node
  const x3 = x2 * Math.cos(nodeRad) - y2 * Math.sin(nodeRad);
  const y3 = x2 * Math.sin(nodeRad) + y2 * Math.cos(nodeRad);
  const z3 = z2;
  
  return { x: x3, y: z3, z: y3 };
}

export function Main() {
  // scene refs
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const labelsRef = useRef({});
  const asteroidsRef = useRef([]);
  const orbitLinesRef = useRef([]);
  const [onlineCount, setOnlineCount] = useState(0);

  // date state
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());
  
  // animation
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  
  // ui toggles
  const [showOrbits, setShowOrbits] = useState(true);
  const [showUsersList, setShowUsersList] = useState(false);
  const [showSavedDatesList, setShowSavedDatesList] = useState(false);
  const [showApod, setShowApod] = useState(false);
  const [apodData, setApodData] = useState(null);
  const [apodLoading, setApodLoading] = useState(false);
  
  // saved dates
  const [savedDates, setSavedDates] = useState(() => {
    const stored = localStorage.getItem('savedDates');
    return stored ? JSON.parse(stored) : [];
  });
  
  // authentication
  const [username, setUsername] = useState(() => {
    const session = localStorage.getItem('userSession');
    return session ? JSON.parse(session).username : null;
  });
  const [showLoginModal, setShowLoginModal] = useState(() => !localStorage.getItem('userSession'));
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);

  // camera init
  const getInitialCameraState = () => {
    const saved = localStorage.getItem('cameraState');
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        isDragging: false,
        prevX: 0,
        prevY: 0,
        rotX: parsed.rotX,
        rotY: parsed.rotY,
        zoom: parsed.zoom
      };
    }
    return { 
      isDragging: false, 
      prevX: 0, 
      prevY: 0, 
      rotX: 0.2, 
      rotY: 0, 
      zoom: 100 
    };
  };
  
  // animation refs
  const controlsRef = useRef(getInitialCameraState());
  const isPlayingRef = useRef(false);
  const speedRef = useRef(1);
  const daysRef = useRef(dateToDays(today.getFullYear(), today.getMonth() + 1, today.getDate()));

  // sync date
  function snapDateToRef() {
    const d = new Date(Date.UTC(2000, 0, 1, 12));
    d.setUTCDate(d.getUTCDate() + Math.floor(daysRef.current));
    setDay(d.getUTCDate());
    setMonth(d.getUTCMonth() + 1);
    setYear(d.getUTCFullYear());
  }

  // date changes
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

  // save date
  function saveCurrentDate() {
    const dateString = `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
    setSavedDates(prev => {
      const newDates = [{ day, month, year, dateString }, ...prev];
      return newDates.length > 5 ? newDates.slice(0, 5) : newDates;
    });
  }

  // load date
  function loadSavedDate(savedDate) {
    setDay(savedDate.day);
    setMonth(savedDate.month);
    setYear(savedDate.year);
    daysRef.current = dateToDays(savedDate.year, savedDate.month, savedDate.day);
  }

  // sync days
  useEffect(() => {
    daysRef.current = dateToDays(year, month, day);
  }, [day, month, year]);

  // orbit visibility
  useEffect(() => {
    orbitLinesRef.current.forEach(line => {
      line.visible = showOrbits;
    });
  }, [showOrbits]);

  // scene init
  useEffect(() => {
    if (!containerRef.current) return;

    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

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

    // planets
    Object.entries(PLANETS_DATA).forEach(([name, data]) => {
      const planetGeo = new THREE.SphereGeometry(data.size * 3, 24, 24);
      const planetMat = new THREE.MeshStandardMaterial({ 
        color: data.color,
        emissive: data.color,
        emissiveIntensity: 0.3,
        roughness: 0.8 
      });
      const planet = new THREE.Mesh(planetGeo, planetMat);
      planet.userData.name = name;
      
      // axial tilt
      const tiltRad = data.axialTilt * Math.PI / 180;
      planet.rotation.z = tiltRad;
      
      // initial position
      const initialPos = getOrbitalPosition(
        data.a * SCALE, 
        data.e, 
        data.i, 
        data.omega, 
        data.node, 
        data.M0
      );
      planet.position.set(initialPos.x, initialPos.y, initialPos.z);
      scene.add(planet);

      // rings
      if (data.rings) {
        const ringGeo = new THREE.RingGeometry(data.size * 3 * 1.4, data.size * 3 * 2.4, 64);
        const ringMat = new THREE.MeshBasicMaterial({ 
          color: 0xc4a66a, 
          side: THREE.DoubleSide, 
          transparent: true, 
          opacity: 0.7 
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
      }

      planetsRef.current[name] = planet;

      // orbit path
      const orbitPoints = [];
      for (let M = 0; M <= 360; M += 2) {
        const pos = getOrbitalPosition(
          data.a * SCALE,
          data.e,
          data.i,
          data.omega,
          data.node,
          M
        );
        orbitPoints.push(new THREE.Vector3(pos.x, pos.y, pos.z));
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

    // asteroid belt
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

    // mouse controls
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
      
      // clamp rotation
      const maxAngle = Math.PI / 2 - 0.1;
      controlsRef.current.rotX = Math.max(-maxAngle, Math.min(maxAngle, controlsRef.current.rotX));

      // save camera state
      const { rotX, rotY, zoom } = controlsRef.current;
      localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));

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

      // zoom
      controlsRef.current.zoom += e.deltaY * 0.05;
      controlsRef.current.zoom = Math.max(15, Math.min(200, controlsRef.current.zoom));

      // save camera state
      const { rotX, rotY, zoom } = controlsRef.current;
      localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));
  
      // update camera position
      const c = controlsRef.current;
      camera.position.x = Math.sin(c.rotY) * Math.cos(c.rotX) * c.zoom;
      camera.position.y = Math.sin(c.rotX) * c.zoom;
      camera.position.z = Math.cos(c.rotY) * Math.cos(c.rotX) * c.zoom;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };

    // event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

    renderer.render(scene, camera);

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

  // sync refs
  useEffect(() => {
    isPlayingRef.current = isPlaying;
    speedRef.current = speed;
  }, [isPlaying, speed]);

  // animation loop
  useEffect(() => {
    let animationId;
    
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // advance time
      if (isPlayingRef.current) {
        daysRef.current += 0.5 * speedRef.current;

        const d = new Date(Date.UTC(2000, 0, 1, 12));
        d.setUTCDate(d.getUTCDate() + Math.floor(daysRef.current));
        setDay(d.getUTCDate());
        setMonth(d.getUTCMonth() + 1);
        setYear(d.getUTCFullYear());
      }
      
      // update planets
      Object.entries(PLANETS_DATA).forEach(([name, data]) => {
        const planet = planetsRef.current[name];
        if (planet) {
          const n = 360 / data.period;
          let M = (data.M0 + n * daysRef.current) % 360;
          if (M < 0) M += 360;
          
          const pos = getOrbitalPosition(
            data.a * SCALE,
            data.e,
            data.i,
            data.omega,
            data.node,
            M
          );
          
          planet.position.set(pos.x, pos.y, pos.z);
        }
      });

      // asteroids
      asteroidsRef.current.forEach(a => {
        const orbitalPeriod = 365.25 * Math.pow(a.r / SCALE, 1.5);
        const n = (2 * Math.PI) / orbitalPeriod;
        const step = isPlayingRef.current ? n * 0.5 * speedRef.current : 0;
        a.angle += step;
        a.mesh.position.x = Math.cos(a.angle) * a.r;
        a.mesh.position.z = Math.sin(a.angle) * a.r;
      });
      
      // render scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);

        // position labels
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

  // online users
  useEffect(() => {
    setOnlineCount(Math.floor(Math.random() * 5) + 1);
    const interval = setInterval(() => {
      setOnlineCount(Math.floor(Math.random() * 10) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // nasa apod
  useEffect(() => {
    const fetchApod = async () => {
      setApodLoading(true);
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setApodData({
        date: "2026-03-03",
        hdurl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1200&q=80",
        media_type: "image",
        service_version: "v1",
        title: "Mock Astronomy Picture of the Day",
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80"
      });
      
      setApodLoading(false);
    };
    fetchApod();
  }, []);

  // persist dates
  useEffect(() => {
    localStorage.setItem('savedDates', JSON.stringify(savedDates));
  }, [savedDates]);

  // persist session
  useEffect(() => {
    if (username) {
      const session = { username, timestamp: Date.now() };
      localStorage.setItem('userSession', JSON.stringify(session));
    } else {
      localStorage.removeItem('userSession');
    }
  }, [username]);

  return (
    <div>
      <header id="mainheader">
        <h1>Eyes on Space</h1>
        <p>
          Username: <span id="username-display">{username || '[Not logged in]'}</span>
          {username ? (
            <button 
              className="logout-btn" 
              onClick={() => {
                setUsername(null);
                setShowLoginModal(true);
              }}
            >
              Logout
            </button>
          ) : (
            <button 
              className="login-btn" 
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </button>
          )}
        </p>
      </header>

      <main id="solarsystem">
        <div id="scenearea" ref={containerRef}></div>
        <PlanetLabels labelsRef={labelsRef} />
        <div id="instructions">Drag to move camera • Scroll to zoom.</div>
      </main>

      <ApodSection 
        showApod={showApod} 
        setShowApod={setShowApod} 
        apodData={apodData} 
        apodLoading={apodLoading} 
      />

      <OnlineUsers 
        onlineCount={onlineCount} 
        showUsersList={showUsersList} 
        setShowUsersList={setShowUsersList} 
      />

      <DateControls 
        day={day} 
        month={month} 
        year={year} 
        onChangeDay={changeDay} 
        onChangeMonth={changeMonth} 
        onChangeYear={changeYear} 
      />

      <PlayControls 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        speed={speed} 
        setSpeed={setSpeed} 
        showOrbits={showOrbits} 
        setShowOrbits={setShowOrbits} 
        onPlayPause={() => {
          const newPlaying = !isPlaying;
          setIsPlaying(newPlaying);
          if (!newPlaying) snapDateToRef();
        }} 
      />

      <SavedDates 
        savedDates={savedDates} 
        showSavedDatesList={showSavedDatesList} 
        setShowSavedDatesList={setShowSavedDatesList} 
        onSaveDate={saveCurrentDate} 
        onLoadDate={loadSavedDate} 
      />

      <footer>
        <nav>
          <Link to="/about" className="link-with-arrow">About <span className="arrow">←</span></Link>
        </nav>
        <a href="https://github.com/Aidanvf1/Solar-System" className="link-with-arrow">GitHub Repository <span className="arrow">←</span></a>
        <p>© 2026 Aidan Von Feldt</p>
      </footer>

      <LoginModal 
        showLoginModal={showLoginModal} 
        setShowLoginModal={setShowLoginModal} 
        loginInput={loginInput} 
        setLoginInput={setLoginInput} 
        passwordInput={passwordInput} 
        setPasswordInput={setPasswordInput} 
        setUsername={setUsername} 
      />

      <MusicPlayer isMuted={isMuted} setIsMuted={setIsMuted} />
    </div>
  );
}