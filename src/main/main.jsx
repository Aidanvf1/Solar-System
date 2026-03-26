// imports
import React from 'react';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { useWebSocket } from '../useWebSocket';
import { LoginModal } from './loginmodal';
import { DateControls } from './datecontrols';
import { PlayControls } from './playcontrols';
import { SavedDates } from './saveddates';
import { OnlineUsers } from './onlineusers';
import { ApodSection } from './apodsection';
import { PlanetLabels } from './planetlabels';
import { MusicPlayer } from './musicplayer';
import { PLANET_INFO } from './planetInfo';

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

// moon orbital elements around earth (J2000-era approximations)
const MOON_DATA = {
  a: 0.00257,
  e: 0.0549,
  i: -4.5,
  period: 27.321661, // sidereal days
  omega: 318.15,
  node: 125.08,
  M0: 115.3654,
  size: 0.035,
  color: '#cfcfcf'
};

// moon distance from earth
const MOON_DISTANCE_VISUAL_BOOST = 45;

const ASTEROID_BELT_DATA = {
  innerAU: 2.2,
  widthAU: 1.3,
  count: 1500,
  ySpread: 0.5,
  minSize: 0.03,
  maxSize: 0.07,
  scatterChance: 0.32,
  scatterAU: 0.75,
};

const KUIPER_BELT_DATA = {
  innerAU: 32.5,
  widthAU: 2.6,
  ySpread: 1.1,
  minSize: 0.18,
  maxSize: 0.42,
  scatterChance: 0.4,
  scatterAU: 2.6,
};

KUIPER_BELT_DATA.count = Math.round(
  ASTEROID_BELT_DATA.count * (KUIPER_BELT_DATA.widthAU / ASTEROID_BELT_DATA.widthAU)
);

// month names
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const ORBIT_LINE_MAX_OPACITY = 0.7;

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

function createBeltBody(minSize, maxSize) {
  const brightness = 0.3 + Math.random() * 0.3;
  return new THREE.Mesh(
    new THREE.SphereGeometry(minSize + Math.random() * (maxSize - minSize), 4, 4),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(brightness, brightness * 0.9, brightness * 0.8) })
  );
}

function populateBelt(group, store, beltData) {
  for (let index = 0; index < beltData.count; index += 1) {
    const baseRadius = beltData.innerAU + Math.random() * beltData.widthAU;
    const scatterOffset = Math.random() < (beltData.scatterChance || 0)
      ? (Math.random() - 0.5) * 2 * (beltData.scatterAU || 0)
      : 0;
    const radius = (baseRadius + scatterOffset) * SCALE;
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * beltData.ySpread;
    const body = createBeltBody(beltData.minSize, beltData.maxSize);

    body.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    group.add(body);
    store.push({ mesh: body, r: radius, angle, y });
  }
}

export function Main() {
  // authentication
  const [username, setUsername] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(true);
  
  // websocket connection with username
  const { userCount: wsUserCount, onlineUsers: wsOnlineUsers } = useWebSocket(username);
  const [userCount, setUserCount] = useState(wsUserCount);
  const [onlineUsers, setOnlineUsers] = useState(wsOnlineUsers || []);
  
  // update local state when websocket data changes
  useEffect(() => {
    if (wsUserCount !== undefined) {
      setUserCount(wsUserCount);
    }
  }, [wsUserCount]);

  useEffect(() => {
    if (Array.isArray(wsOnlineUsers)) {
      setOnlineUsers(wsOnlineUsers);
    }
  }, [wsOnlineUsers]);

  const otherOnlineUsersCount = onlineUsers.filter((name) => name && name !== username).length;
  const hasOthersOnline = otherOnlineUsersCount > 0;
  
  // scene refs
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const planetsRef = useRef({});
  const labelsRef = useRef({});
  const asteroidsRef = useRef([]);
  const orbitLinesRef = useRef([]);
  const orbitTargetOpacityRef = useRef(ORBIT_LINE_MAX_OPACITY);
  const moonRef = useRef(null);

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
  const [showSavedDatesList, setShowSavedDatesList] = useState(false);
  const [apodData, setApodData] = useState(null);
  const [apodLoading, setApodLoading] = useState(false);
  const [hideHub, setHideHub] = useState(false);

  // saved dates
  const [savedDates, setSavedDates] = useState([]);

  // more authentication
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(30);
  const [activePanel, setActivePanel] = useState(null);
  const [activePlanet, setActivePlanet] = useState(null);
  const [displayedPlanet, setDisplayedPlanet] = useState(null);
  const setActivePlanetAndRef = (val) => {
    activePlanetRef.current = val;
    if (val) setDisplayedPlanet(val);
    setActivePlanet(val);
  };
  const hoveredPlanetRef = useRef(null);
  const activePlanetRef = useRef(null);
  const outlineRefs = useRef({});

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

  function returnToToday() {
    const now = new Date();
    const todayDay = now.getDate();
    const todayMonth = now.getMonth() + 1;
    const todayYear = now.getFullYear();

    setDay(todayDay);
    setMonth(todayMonth);
    setYear(todayYear);
    daysRef.current = dateToDays(todayYear, todayMonth, todayDay);
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

  useEffect(() => {
    if (activePlanet) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setDisplayedPlanet(null);
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [activePlanet]);

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
          setApodData({ unavailable: true });
        }
      } catch (err) {
        console.error('APOD error:', err);
        setApodData({ unavailable: true });
      } finally {
        setApodLoading(false);
      }
    };
    fetchApod();
  }, []);

  // online users count received from websocket via props

  // sync days
  useEffect(() => {
    daysRef.current = dateToDays(year, month, day);
  }, [day, month, year]);

  // orbit visibility
  useEffect(() => {
    orbitTargetOpacityRef.current = showOrbits ? ORBIT_LINE_MAX_OPACITY : 0;
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
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffdd44 })
    );
    sun.userData.name = 'Sun';
    scene.add(sun);
    planetsRef.current.Sun = sun;

    const sunOutline = new THREE.Mesh(
      new THREE.SphereGeometry(0.8 * 1.14, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 0.85 })
    );
    sunOutline.visible = false;
    sun.add(sunOutline);
    outlineRefs.current.Sun = sunOutline;

    const sunGlow = new THREE.Mesh(
      new THREE.SphereGeometry(1.5, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0.15 })
    );
    scene.add(sunGlow);

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

      // outline mesh for hover effect (visible only on hover)
      const outlineMesh = new THREE.Mesh(
        new THREE.SphereGeometry(data.size * 3 * 1.18, 24, 24),
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 0.85 })
      );
      outlineMesh.visible = false;
      planet.add(outlineMesh);
      outlineRefs.current[name] = outlineMesh;

      // orbit path
      const orbitPoints = [];
      for (let M = 0; M <= 360; M += 2) {
        const pos = getOrbitalPosition(data.a * SCALE, data.e, data.i, data.omega, data.node, M);
        orbitPoints.push(new THREE.Vector3(pos.x, pos.y, pos.z));
      }
      const orbitLine = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(orbitPoints),
        new THREE.LineBasicMaterial({ color: 0x334455, transparent: true, opacity: ORBIT_LINE_MAX_OPACITY })
      );
      scene.add(orbitLine);
      orbitLinesRef.current.push(orbitLine);
    });

    // moon (attached to earth so it follows earth's translation)
    const earth = planetsRef.current.Earth;
    if (earth) {
      const moon = new THREE.Mesh(
        new THREE.SphereGeometry(MOON_DATA.size * 3, 16, 16),
        new THREE.MeshStandardMaterial({ color: MOON_DATA.color, emissive: 0x333333, emissiveIntensity: 0.2, roughness: 0.95 })
      );
      moon.userData.name = 'Moon';

      let moonM = MOON_DATA.M0 % 360;
      if (moonM < 0) moonM += 360;
      const moonInitialPos = getOrbitalPosition(
        MOON_DATA.a * SCALE * MOON_DISTANCE_VISUAL_BOOST,
        MOON_DATA.e,
        MOON_DATA.i,
        MOON_DATA.omega,
        MOON_DATA.node,
        moonM
      );
      moon.position.set(
        earth.position.x + moonInitialPos.x,
        earth.position.y + moonInitialPos.y,
        earth.position.z + moonInitialPos.z
      );
      scene.add(moon);

      const moonOutline = new THREE.Mesh(
        new THREE.SphereGeometry(MOON_DATA.size * 3 * 1.3, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.BackSide, transparent: true, opacity: 0.85 })
      );
      moonOutline.visible = false;
      moon.add(moonOutline);

      moonRef.current = moon;
      planetsRef.current.Moon = moon;
      outlineRefs.current.Moon = moonOutline;
    }

    // asteroid belt
    const asteroidBeltGroup = new THREE.Group();
    populateBelt(asteroidBeltGroup, asteroidsRef.current, ASTEROID_BELT_DATA);
    scene.add(asteroidBeltGroup);

    // kuiper belt
    const kuiperBeltGroup = new THREE.Group();
    populateBelt(kuiperBeltGroup, asteroidsRef.current, KUIPER_BELT_DATA);
    scene.add(kuiperBeltGroup);

    // mouse controls
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const mouseDownPos = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      controlsRef.current.isDragging = true;
      controlsRef.current.prevX = e.clientX;
      controlsRef.current.prevY = e.clientY;
      controlsRef.current.velX = 0;
      controlsRef.current.velY = 0;
      mouseDownPos.x = e.clientX;
      mouseDownPos.y = e.clientY;
    };
    const onMouseUp = () => { controlsRef.current.isDragging = false; };
    const onMouseMove = (e) => {
      if (controlsRef.current.isDragging) {
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
      } else {
        // hover detection
        const rect = renderer.domElement.getBoundingClientRect();
        if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
          if (hoveredPlanetRef.current) {
            if (outlineRefs.current[hoveredPlanetRef.current]) outlineRefs.current[hoveredPlanetRef.current].visible = false;
            hoveredPlanetRef.current = null;
            renderer.domElement.style.cursor = '';
          }
          return;
        }
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const hits = raycaster.intersectObjects(Object.values(planetsRef.current), false);
        const hitName = hits.length > 0 ? hits[0].object.userData.name : null;
        const validHit = hitName && PLANET_INFO[hitName] ? hitName : null;
        if (validHit !== hoveredPlanetRef.current) {
          if (hoveredPlanetRef.current && outlineRefs.current[hoveredPlanetRef.current]) {
            outlineRefs.current[hoveredPlanetRef.current].visible = false;
          }
          hoveredPlanetRef.current = validHit;
          if (validHit && outlineRefs.current[validHit]) {
            outlineRefs.current[validHit].visible = true;
          }
          renderer.domElement.style.cursor = validHit ? 'pointer' : '';
        }
      }
    };
    const onClick = (e) => {
      const dx = e.clientX - mouseDownPos.x;
      const dy = e.clientY - mouseDownPos.y;
      if (Math.sqrt(dx * dx + dy * dy) > 5) return;
      if (hoveredPlanetRef.current && PLANET_INFO[hoveredPlanetRef.current]) {
        setActivePlanetAndRef(
          activePlanetRef.current === hoveredPlanetRef.current ? null : hoveredPlanetRef.current
        );
      }
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
    renderer.domElement.addEventListener('click', onClick);
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
      renderer.domElement.removeEventListener('click', onClick);
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

      // update moon around earth
      if (moonRef.current && planetsRef.current.Earth) {
        const earth = planetsRef.current.Earth;
        const nMoon = 360 / MOON_DATA.period;
        let moonM = (MOON_DATA.M0 + nMoon * daysRef.current) % 360;
        if (moonM < 0) moonM += 360;
        const moonPos = getOrbitalPosition(
          MOON_DATA.a * SCALE * MOON_DISTANCE_VISUAL_BOOST,
          MOON_DATA.e,
          MOON_DATA.i,
          MOON_DATA.omega,
          MOON_DATA.node,
          moonM
        );
        moonRef.current.position.set(
          earth.position.x + moonPos.x,
          earth.position.y + moonPos.y,
          earth.position.z + moonPos.z
        );
        moonRef.current.lookAt(earth.position);
      }

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
        a.mesh.position.x = -Math.cos(angle) * a.r;
        a.mesh.position.z = Math.sin(angle) * a.r;
      });

      // smoothly fade orbit lines in/out
      orbitLinesRef.current.forEach(line => {
        const material = line.material;
        if (!material || !('opacity' in material)) return;

        if (orbitTargetOpacityRef.current > 0) line.visible = true;

        const currentOpacity = material.opacity;
        const nextOpacity = THREE.MathUtils.lerp(currentOpacity, orbitTargetOpacityRef.current, 0.08);
        material.opacity = nextOpacity;

        if (orbitTargetOpacityRef.current === 0 && nextOpacity < 0.01) {
          material.opacity = 0;
          line.visible = false;
        }
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
      </header>

      <div id="panel-links" className={`hud-fade ${hideHub ? 'hud-hidden' : 'hud-visible'}`}>
        <button type="button" className="panel-link-btn users-link" onClick={() => setActivePanel('users')}>
          <span className={`users-online-dot ${hasOthersOnline ? 'is-active' : 'is-idle'}`} aria-hidden="true"></span>
          <span className="panel-link-arrow">→</span>
          <span>Online Users</span>
        </button>
        <button type="button" className="panel-link-btn" onClick={() => setActivePanel('apod')}>
          <span className="panel-link-arrow">→</span>
          <span>NASA APOD</span>
        </button>
        <button type="button" className="panel-link-btn" onClick={() => setActivePanel('settings')}>
          <span className="panel-link-arrow">→</span>
          <span>Settings</span>
        </button>
      </div>

      <main id="solarsystem">
        <div id="scenearea" ref={containerRef}></div>
        <PlanetLabels labelsRef={labelsRef} />
        <div id="instructions" className={`hud-fade ${hideHub ? 'hud-hidden' : 'hud-visible'}`}>
          Drag to move camera • Scroll to zoom
        </div>
      </main>

      <div className={`hud-fade ${hideHub ? 'hud-hidden' : 'hud-visible'}`}>
        <DateControls 
          day={day} 
          month={month} 
          year={year} 
          onChangeDay={changeDay} 
          onChangeMonth={changeMonth} 
          onChangeYear={changeYear}
          isPlaying={isPlaying}
          speed={speed}
          onReturnToToday={returnToToday}
        />
      </div>
      <div className={`hud-fade ${hideHub ? 'hud-hidden' : 'hud-visible'}`}>
        <SavedDates
          savedDates={savedDates}
          showSavedDatesList={showSavedDatesList}
          setShowSavedDatesList={setShowSavedDatesList}
          onSaveDate={saveCurrentDate}
          onLoadDate={loadSavedDate}
        />
      </div>
      <div className={`hud-fade ${hideHub ? 'hud-hidden' : 'hud-visible'}`}>
        <PlayControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          speed={speed}
          setSpeed={setSpeed}
          onPlayPause={() => { const n = !isPlaying; setIsPlaying(n); if (!n) snapDateToRef(); }}
        />
      </div>

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

      {activePanel && (
        <div className="ui-panel-backdrop" onClick={() => setActivePanel(null)}>
          <div className="ui-panel-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="ui-panel-close" onClick={() => setActivePanel(null)} aria-label="Close panel">
              ×
            </button>

            {activePanel === 'settings' && (
              <section id="settingspanel">
                <h2>Settings</h2>
                <div className="settings-row">
                  <label htmlFor="volume-slider">Volume</label>
                  <div className="settings-volume-wrap">
                    <input
                      id="volume-slider"
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={volume}
                      onChange={(e) => setVolume(+e.target.value)}
                    />
                    <span>{volume}%</span>
                  </div>
                </div>
              </section>
            )}

            {activePanel === 'apod' && (
              <ApodSection
                apodData={apodData}
                apodLoading={apodLoading}
              />
            )}

            {activePanel === 'users' && (
              <OnlineUsers
                onlineCount={userCount}
                onlineUsers={onlineUsers}
              />
            )}
          </div>
        </div>
      )}

      <div className={`planet-info-panel${activePlanet ? ' open' : ''}`}>
        {displayedPlanet && PLANET_INFO[displayedPlanet] && (
          <>
            <button type="button" className="planet-info-close" onClick={() => setActivePlanetAndRef(null)} aria-label="Close">×</button>
            <img
              className="planet-info-image"
              src={PLANET_INFO[displayedPlanet].image}
              alt={displayedPlanet}
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallbackImage = PLANET_INFO[displayedPlanet].fallbackImage;
                if (fallbackImage && e.currentTarget.src !== fallbackImage) {
                  e.currentTarget.src = fallbackImage;
                }
              }}
            />
            <h2 className="planet-info-name">{displayedPlanet}</h2>
            <div className="planet-info-facts">
              <div className="fact-row"><span>Diameter</span><span>{PLANET_INFO[displayedPlanet].diameter}</span></div>
              <div className="fact-row"><span>Day Length</span><span>{PLANET_INFO[displayedPlanet].dayLength}</span></div>
              <div className="fact-row"><span>Year Length</span><span>{PLANET_INFO[displayedPlanet].yearLength}</span></div>
              {!PLANET_INFO[displayedPlanet].hideMoons && (
                <div className="fact-row"><span>Moons</span><span>{PLANET_INFO[displayedPlanet].moons}</span></div>
              )}
              <div className="fact-row"><span>Avg. Temperature</span><span>{PLANET_INFO[displayedPlanet].avgTemp}</span></div>
              {!PLANET_INFO[displayedPlanet].hideDistanceFromSun && (
                <div className="fact-row"><span>Distance from Sun</span><span>{PLANET_INFO[displayedPlanet].distanceFromSun}</span></div>
              )}
            </div>
            <p className="planet-info-description">{PLANET_INFO[displayedPlanet].description}</p>
          </>
        )}
      </div>

      <MusicPlayer
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        volume={volume}
        showOrbits={showOrbits}
        setShowOrbits={setShowOrbits}
        hideHub={hideHub}
        setHideHub={setHideHub}
      />

    </div>
  );
}