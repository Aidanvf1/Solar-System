// imports
import React from 'react';

// play controls
export function PlayControls({ isPlaying, setIsPlaying, speed, setSpeed, showOrbits, setShowOrbits, onPlayPause }) {
  return (
    <section id="dateandcontrols">
      <button 
        id="playbutton" 
        type="button"
        onClick={onPlayPause}
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
  );
}
