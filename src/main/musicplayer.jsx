// imports
import React, { useRef, useEffect } from 'react';

// music player
export function MusicPlayer({ isMuted, setIsMuted }) {
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
        className="music-toggle-btn" 
        onClick={() => setIsMuted(prev => !prev)}
        title={isMuted ? 'Play Music' : 'Mute Music'}
      >
        {isMuted ? '🔇' : '🔊'}
      </button>
    </div>
  );
}
