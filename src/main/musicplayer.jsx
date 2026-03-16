// imports
import React, { useRef, useEffect } from 'react';

function EyeIcon() {
  return (
    <svg className="hud-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.8" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className="hud-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M4 20 20 4" />
    </svg>
  );
}

function SpeakerIcon() {
  return (
    <svg className="hud-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 7 9H4v6h3l4 4V5z" />
      <path d="M15 9c1 .7 1.5 1.7 1.5 3S16 14.3 15 15" />
      <path d="M17.5 7c1.6 1.3 2.5 3 2.5 5s-.9 3.7-2.5 5" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg className="hud-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5 7 9H4v6h3l4 4V5z" />
      <path d="M4 20 14 2" />
    </svg>
  );
}

// music player
export function MusicPlayer({ isMuted, setIsMuted, showOrbits, setShowOrbits, hideHub, setHideHub }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {});
      }
    }
  }, [isMuted]);

  return (
    <div id="musicplayer">
      {/* dune 2 soundtrack */}
      <audio ref={audioRef} src="/Dune： Part Two Soundtrack ｜ A Time of Quiet Between the Storms - Hans Zimmer ｜ WaterTower [igtwOdqboT0].mp3" />
      <button
        className="music-toggle-btn side-control-btn line-toggle-btn"
        onClick={() => setShowOrbits(prev => !prev)}
        title={showOrbits ? 'Hide Orbit Lines' : 'Show Orbit Lines'}
      >
        {showOrbits ? 'Hide Lines' : 'Show Lines'}
      </button>
      <button
        className="music-toggle-btn side-control-btn"
        onClick={() => setHideHub(prev => !prev)}
        title={hideHub ? 'Show HUD' : 'Hide HUD'}
      >
        {hideHub ? <EyeOffIcon /> : <EyeIcon />}
      </button>
      <button 
        className="music-toggle-btn side-control-btn" 
        onClick={() => setIsMuted(prev => !prev)}
        title={isMuted ? 'Play Music' : 'Mute Music'}
      >
        {isMuted ? <SpeakerOffIcon /> : <SpeakerIcon />}
      </button>
    </div>
  );
}
