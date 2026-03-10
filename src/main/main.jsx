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
  Venus:   { a: 0.723, e: 0.007, i: 3.4, color: '#e6c87a', size: 0.12, period: 224.7,   omega: 131.53, node: 76.68,  M0: 50.42,  axialTilt: 177.4 },
  Earth:   { a: 1.0,   e: 0.017, i: 0.0, color: '#4a90d9', size: 0.13, period: 365.25,  omega: 102.94, node: -11.26, M0: 357.53, axialTilt: 23.44 },
  Mars:    { a: 1.524, e: 0.093, i: 1.85,color: '#c1440e', size: 0.1,  period: 686.98,  omega: 336.04, node: 49.58,  M0: 19.41,  axialTilt: 25.19 },
  Jupiter: { a: 5.203, e: 0.048, i: 1.3, color: '#d4a574', size: 0.35, period: 4332.59, omega: 14.75,  node: 100.56, M0: 20.02,  axialTilt: 3.13 },
  Saturn:  { a: 9.537, e: 0.054, i: 2.49,color: '#e6d4a3', size: 0.3,  period: 10759.22,omega: 92.43,  node: 113.72, M0: 317.02, rings: true, axialTilt: 26.73 },
  Uranus:  { a: 19.19, e: 0.047, i: 0.77,color: '#7de3f4', size: 0.22, period: 30688.5, omega: 170.96, node: 74.23,  M0: 142.24, axialTilt: 97.77 },
  Neptune: { a: 30.07, e: 0.009, i: 1.77,color: '#4b70dd', size: 0.21, period: 60182,   omega: 44.97,  node: 131.72, M0: 256.23, axialTilt: 28.32 }
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
  while (Math.abs(delta) > tolerance && iterations < 30) {
    delta = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= delta;
    iterations++;
  }
  return E;
}

// orbital position
function getOrbitalPosition(a, e, i, omega, node, M) {
  // degrees to radians
  // omega in PLANETS_DATA is longitude of perihelion (ω̃ = ω + Ω).
  // The argument of perihelion needed for the rotation is ω = ω̃ − Ω.
  const iRad = i * Math.PI / 180;
  const argPeriRad = (omega - node) * Math.PI / 180;
  const nodeRad = node * Math.PI / 180;
  const MRad = M * Math.PI / 180;

  // solve kepler's equation for eccentric anomaly
  const E = solveKeplersEquation(MRad, e);

  // calculate true anomaly
  const nu = 2 * Math.atan2(Math.sqrt(1 + e) * Math.sin(E / 2), Math.sqrt(1 - e) * Math.cos(E / 2));

  // calculate distance from sun
  const r = a * (1 - e * Math.cos(E));

  // orbital plane position
  const xOrb = r * Math.cos(nu);
  const yOrb = r * Math.sin(nu);

  // rotate to ecliptic
  // perihelion rotation (argument of perihelion)
  const x1 = xOrb * Math.cos(argPeriRad) - yOrb * Math.sin(argPeriRad);
  const y1 = xOrb * Math.sin(argPeriRad) + yOrb * Math.cos(argPeriRad);

  // apply inclination
  const x2 = x1;
  const y2 = y1 * Math.cos(iRad);
  const z2 = y1 * Math.sin(iRad);

  // apply longitude of ascending node
  const x3 = x2 * Math.cos(nodeRad) - y2 * Math.sin(nodeRad);
  const y3 = x2 * Math.sin(nodeRad) + y2 * Math.cos(nodeRad);

  // negate x to match Three.js left-hand screen convention
  // (ecliptic X increases eastward; Three.js scene X increases rightward when viewed from above,
  //  which is the opposite handedness — negating corrects the left/right mirror)
  return { x: -x3, y: z2, z: y3 };
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

  // date state
  const today = new Date();
  const [day, setDay] = useState(today.getDate());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [year, setYear] = useState(today.getFullYear());

  // animation
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);

  // ui toggles
  const [showOrbits, setShowOrbits] = useState(true);
  const [onlineCount, setOnlineCount] = useState(0);
  const [showUsersList, setShowUsersList] = useState(false);
  const [showSavedDatesList, setShowSavedDatesList] = useState(false);
  const [showApod, setShowApod] = useState(false);
  const [apodData, setApodData] = useState(null);
  const [apodLoading, setApodLoading] = useState(false);
  const [hideHub, setHideHub] = useState(false);

  // saved dates
  const [savedDates, setSavedDates] = useState([]);

  // authentication
  const [username, setUsername] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isMuted, setIsMuted] = useState(true);

  // camera init
  const getInitialCameraState = () => {
    const saved = localStorage.getItem('cameraState');
    if (saved) {
      const { rotX, rotY, zoom } = JSON.parse(saved);
      return { isDragging: false, prevX: 0, prevY: 0, rotX, rotY, zoom, velX: 0, velY: 0 };
    }
    return { isDragging: false, prevX: 0, prevY: 0, rotX: 0.2, rotY: 0, zoom: 100, velX: 0, velY: 0 };
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
    setMonth(prev => { const next = prev + delta; if (next < 1) return 12; if (next > 12) return 1; return next; });
  }

  function changeYear(delta) {
    setYear(prev => prev + delta);
  }

  // save date — posts to backend if logged in
  async function saveCurrentDate() {
    const dateString = `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
    const newDate = { day, month, year, dateString };
    if (username) {
      try {
        const res = await fetch('/api/dates', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newDate),
        });
        if (res.ok) {
          const updated = await res.json();
          setSavedDates(updated);
          return;
        }
      } catch (err) {
        console.error('Failed to save date to backend:', err);
      }
    }
    setSavedDates(prev => {
      const newDates = [newDate, ...prev];
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

  // load saved dates from backend
  async function loadUserDates() {
    try {
      const res = await fetch('/api/dates');
      if (res.ok) {
        const dates = await res.json();
        setSavedDates(dates);
      }
    } catch (err) {
      console.error('Failed to load dates:', err);
    }
  }

  // check if already logged in on mount
  useEffect(() => {
    fetch('/api/auth/me')
      .then(res => res.ok ? res.json() : null)
      .then(data => {
        if (data?.username) {
          setUsername(data.username);
          setShowLoginModal(false);
          loadUserDates();
        }
      })
      .catch(() => {});
  }, []);

  // nasa apod — fetches from backend proxy (no CORS issues)
  useEffect(() => {
    const fetchApod = async () => {
      setApodLoading(true);
      try {
        const res = await fetch('/api/apod');
        if (res.ok) {
          const data = await res.json();
          setApodData(data);
        } else {
          throw new Error('APOD fetch failed');
        }
      } catch (err) {
        console.error('APOD error:', err);
        setApodData({
          date: new Date().toISOString().split('T')[0],
          title: 'Astronomy Picture of the Day',
          media_type: 'image',
          url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80',
          hdurl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1600&q=90',
          explanation: 'Could not reach backend. Real NASA APOD loads via /api/apod when the service is running.'
        });
      } finally {
        setApodLoading(false);
      }
    };
    fetchApod();
  }, []);

  // online users from backend
  useEffect(() => {
    const fetchOnline = async () => {
      try {
        const res = await fetch('/api/users/online');
        if (res.ok) {
          const data = await res.json();
          setOnlineCount(data.count);
        }
      } catch {
        setOnlineCount(Math.floor(Math.random() * 10) + 1);
      }
    };
    fetchOnline();
    const interval = setInterval(fetchOnline, 5000);
    return () => clearInterval(interval);
  }, []);

  // sync days
  useEffect(() => {
    daysRef.current = dateToDays(year, month, day);
  }, [day, month, year]);

  // orbit visibility
  useEffect(() => {
    orbitLinesRef.current.forEach(line => { line.visible = showOrbits; });
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
    const starsGeo = new THREE.BufferGeometry();
    starsGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
    scene.add(new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 })));

    // sun
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffdd44 })));
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0.15 })));

    // lights
    scene.add(new THREE.PointLight(0xffffff, 2, 200));
    scene.add(new THREE.AmbientLight(0x333333));

    // planets
    Object.entries(PLANETS_DATA).forEach(([name, data]) => {
      const planet = new THREE.Mesh(
        new THREE.SphereGeometry(data.size * 3, 24, 24),
        new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 0.3, roughness: 0.8 })
      );
      planet.userData.name = name;

      // axial tilt
      planet.rotation.z = data.axialTilt * Math.PI / 180;

      // initial position
      const initialPos = getOrbitalPosition(data.a * SCALE, data.e, data.i, data.omega, data.node, data.M0);
      planet.position.set(initialPos.x, initialPos.y, initialPos.z);
      scene.add(planet);

      // rings
      if (data.rings) {
        const ring = new THREE.Mesh(
          new THREE.RingGeometry(data.size * 3 * 1.4, data.size * 3 * 2.4, 64),
          new THREE.MeshBasicMaterial({ color: 0xc4a66a, side: THREE.DoubleSide, transparent: true, opacity: 0.7 })
        );
        ring.rotation.x = Math.PI / 2;
        planet.add(ring);
      }

      planetsRef.current[name] = planet;

      // orbit path
      const orbitPoints = [];
      for (let M = 0; M <= 360; M += 2) {
        const pos = getOrbitalPosition(data.a * SCALE, data.e, data.i, data.omega, data.node, M);
        orbitPoints.push(new THREE.Vector3(pos.x, pos.y, pos.z));
      }
      const orbitLine = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(orbitPoints),
        new THREE.LineBasicMaterial({ color: 0x334455, transparent: true, opacity: 0.4 })
      );
      scene.add(orbitLine);
      orbitLinesRef.current.push(orbitLine);
    });

    // asteroid belt
    const asteroidBeltGroup = new THREE.Group();
    for (let i = 0; i < 1500; i++) {
      const r = (2.2 + Math.random() * 1.3) * SCALE;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 0.5;
      const b = 0.3 + Math.random() * 0.3;
      const asteroid = new THREE.Mesh(
        new THREE.SphereGeometry(0.03 + Math.random() * 0.04, 4, 4),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(b, b * 0.9, b * 0.8) })
      );
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
      controlsRef.current.velX = 0;
      controlsRef.current.velY = 0;
    };
    const onMouseUp = () => { controlsRef.current.isDragging = false; };
    const onMouseMove = (e) => {
      if (!controlsRef.current.isDragging) return;
      const dx = (e.clientX - controlsRef.current.prevX) * 0.005;
      const dy = (e.clientY - controlsRef.current.prevY) * 0.005;
      controlsRef.current.velY = dx;
      controlsRef.current.velX = dy;
      controlsRef.current.rotY += dx;
      controlsRef.current.rotX += dy;

      // clamp rotation
      const maxAngle = Math.PI / 2 - 0.1;
      controlsRef.current.rotX = Math.max(-maxAngle, Math.min(maxAngle, controlsRef.current.rotX));

      // save camera state
      const { rotX, rotY, zoom } = controlsRef.current;
      localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));

      // update camera position
      camera.position.x = Math.sin(rotY) * Math.cos(rotX) * zoom;
      camera.position.y = Math.sin(rotX) * zoom;
      camera.position.z = Math.cos(rotY) * Math.cos(rotX) * zoom;
      camera.lookAt(0, 0, 0);

      // re-render
      renderer.render(scene, camera);
      controlsRef.current.prevX = e.clientX;
      controlsRef.current.prevY = e.clientY;
    };
    const onWheel = (e) => {
      e.preventDefault();

      // zoom
      controlsRef.current.zoom = Math.max(15, Math.min(200, controlsRef.current.zoom + e.deltaY * 0.05));

      // save camera state
      const { rotX, rotY, zoom } = controlsRef.current;
      localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));

      // update camera position
      camera.position.x = Math.sin(rotY) * Math.cos(rotX) * zoom;
      camera.position.y = Math.sin(rotX) * zoom;
      camera.position.z = Math.cos(rotY) * Math.cos(rotX) * zoom;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // touch controls for mobile
    let lastTouchDistance = 0;
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        // single finger drag
        controlsRef.current.isDragging = true;
        controlsRef.current.prevX = e.touches[0].clientX;
        controlsRef.current.prevY = e.touches[0].clientY;
        controlsRef.current.velX = 0;
        controlsRef.current.velY = 0;
      } else if (e.touches.length === 2) {
        // two finger pinch zoom
        controlsRef.current.isDragging = false;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
      }
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      
      if (e.touches.length === 1 && controlsRef.current.isDragging) {
        // single finger drag to rotate
        const dx = (e.touches[0].clientX - controlsRef.current.prevX) * 0.005;
        const dy = (e.touches[0].clientY - controlsRef.current.prevY) * 0.005;
        controlsRef.current.velY = dx;
        controlsRef.current.velX = dy;
        controlsRef.current.rotY += dx;
        controlsRef.current.rotX += dy;

        // clamp rotation
        const maxAngle = Math.PI / 2 - 0.1;
        controlsRef.current.rotX = Math.max(-maxAngle, Math.min(maxAngle, controlsRef.current.rotX));

        // save camera state
        const { rotX, rotY, zoom } = controlsRef.current;
        localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));

        // update camera position
        camera.position.x = Math.sin(rotY) * Math.cos(rotX) * zoom;
        camera.position.y = Math.sin(rotX) * zoom;
        camera.position.z = Math.cos(rotY) * Math.cos(rotX) * zoom;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
        controlsRef.current.prevX = e.touches[0].clientX;
        controlsRef.current.prevY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        // two finger pinch to zoom
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (lastTouchDistance > 0) {
          const delta = lastTouchDistance - distance;
          controlsRef.current.zoom = Math.max(15, Math.min(200, controlsRef.current.zoom + delta * 0.1));

          // save camera state
          const { rotX, rotY, zoom } = controlsRef.current;
          localStorage.setItem('cameraState', JSON.stringify({ rotX, rotY, zoom }));

          // update camera position
          camera.position.x = Math.sin(rotY) * Math.cos(rotX) * zoom;
          camera.position.y = Math.sin(rotX) * zoom;
          camera.position.z = Math.cos(rotY) * Math.cos(rotX) * zoom;
          camera.lookAt(0, 0, 0);

          renderer.render(scene, camera);
        }
        
        lastTouchDistance = distance;
      }
    };

    const onTouchEnd = () => {
      controlsRef.current.isDragging = false;
      lastTouchDistance = 0;
    };

    // handle window resize
    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.render(scene, camera);
    };

    // event listeners
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
    renderer.domElement.addEventListener('touchstart', onTouchStart, { passive: false });
    renderer.domElement.addEventListener('touchmove', onTouchMove, { passive: false });
    renderer.domElement.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    renderer.render(scene, camera);

    // cleanup
    return () => {
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.domElement.removeEventListener('touchstart', onTouchStart);
      renderer.domElement.removeEventListener('touchmove', onTouchMove);
      renderer.domElement.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (containerRef.current?.contains(renderer.domElement)) containerRef.current.removeChild(renderer.domElement);
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
        daysRef.current += ((1/60) / 86400) * speedRef.current;
        const d = new Date(Date.UTC(2000, 0, 1, 12));
        d.setUTCDate(d.getUTCDate() + Math.floor(daysRef.current));
        setDay(d.getUTCDate());
        setMonth(d.getUTCMonth() + 1);
        setYear(d.getUTCFullYear());
      }

      // update planets
      Object.entries(PLANETS_DATA).forEach(([name, data]) => {
        const planet = planetsRef.current[name];
        if (!planet) return;
        const n = 360 / data.period;
        let M = (data.M0 + n * daysRef.current) % 360;
        if (M < 0) M += 360;
        const pos = getOrbitalPosition(data.a * SCALE, data.e, data.i, data.omega, data.node, M);
        planet.position.set(pos.x, pos.y, pos.z);
      });

      // camera inertia
      const c = controlsRef.current;
      if (!c.isDragging && (Math.abs(c.velX) > 0.0001 || Math.abs(c.velY) > 0.0001)) {
        c.rotY += c.velY;
        c.rotX += c.velX;
        const maxAngle = Math.PI / 2 - 0.1;
        c.rotX = Math.max(-maxAngle, Math.min(maxAngle, c.rotX));
        c.velX *= 0.88;
        c.velY *= 0.88;
        const cam = cameraRef.current;
        if (cam) {
          cam.position.x = Math.sin(c.rotY) * Math.cos(c.rotX) * c.zoom;
          cam.position.y = Math.sin(c.rotX) * c.zoom;
          cam.position.z = Math.cos(c.rotY) * Math.cos(c.rotX) * c.zoom;
          cam.lookAt(0, 0, 0);
        }
      }

      // asteroids
      asteroidsRef.current.forEach(a => {
        const orbitalPeriod = 365.25 * Math.pow(a.r / SCALE, 1.5);
        const n = (2 * Math.PI) / orbitalPeriod;
        const angle = a.angle + n * daysRef.current;
        a.mesh.position.x = Math.cos(angle) * a.r;
        a.mesh.position.z = Math.sin(angle) * a.r;
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
            el.style.left = (vector.x * 0.5 + 0.5) * rect.width + 'px';
            el.style.top = ((-vector.y * 0.5 + 0.5) * rect.height - 20) + 'px';
            el.style.display = 'block';
          } else {
            el.style.display = 'none';
          }
        });
      }
    };
    animate();
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, []);

  return (
    <div>
      <header id="mainheader">
        <h1>Eyes on Space</h1>
        <p>
          Username: <span id="username-display">{username || '[Not logged in]'}</span>
          {username ? (
            <button className="logout-btn" onClick={async () => {
              await fetch('/api/auth/logout', { method: 'DELETE' });
              setUsername(null);
              setSavedDates([]);
              setShowLoginModal(true);
            }}>Logout</button>
          ) : (
            <button className="login-btn" onClick={() => setShowLoginModal(true)}>Login</button>
          )}
        </p>
        <p style={{ marginTop: '-10px' }}>
          <button className="login-btn" onClick={() => setHideHub(!hideHub)}>
            {hideHub ? 'Show Hud' : 'Hide Hud'}
          </button>
        </p>
      </header>

      <main id="solarsystem">
        <div id="scenearea" ref={containerRef}></div>
        <PlanetLabels labelsRef={labelsRef} />
        {!hideHub && <div id="instructions">Drag to move camera • Scroll to zoom</div>}
      </main>

      {!hideHub && <ApodSection showApod={showApod} setShowApod={setShowApod} apodData={apodData} apodLoading={apodLoading} />}
      {!hideHub && <OnlineUsers onlineCount={onlineCount} showUsersList={showUsersList} setShowUsersList={setShowUsersList} />}
      {!hideHub && <DateControls 
        day={day} 
        month={month} 
        year={year} 
        onChangeDay={changeDay} 
        onChangeMonth={changeMonth} 
        onChangeYear={changeYear}
        isPlaying={isPlaying}
        speed={speed}
      />}
      {!hideHub && <SavedDates
        savedDates={savedDates}
        showSavedDatesList={showSavedDatesList}
        setShowSavedDatesList={setShowSavedDatesList}
        onSaveDate={saveCurrentDate}
        onLoadDate={loadSavedDate}
      />}
      {!hideHub && <PlayControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        speed={speed}
        setSpeed={setSpeed}
        showOrbits={showOrbits}
        setShowOrbits={setShowOrbits}
        onPlayPause={() => { const n = !isPlaying; setIsPlaying(n); if (!n) snapDateToRef(); }}
      />}

      <footer>
        <nav style={{ marginBottom: '-2px' }}>
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
        onLoginSuccess={(user) => {
          setUsername(user);
          setShowLoginModal(false);
          loadUserDates();
        }}
      />

      {!hideHub && <MusicPlayer isMuted={isMuted} setIsMuted={setIsMuted} />}
    </div>
  );
}