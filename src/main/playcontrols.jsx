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
        <label htmlFor="speed">Speed: {speed}x</label>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{
            position: 'absolute',
            right: '100%',
            top: '-5px',
            fontSize: '0.7rem',
            color: '#888',
            marginRight: '8px'
          }}>
            10Mx
          </div>
          <input 
            type="range" 
            id="speed" 
            value={speed} 
            step="10" 
            min="1" 
            max="10000000" 
            onChange={(e) => setSpeed(+e.target.value)} 
          />
          <div style={{
            position: 'absolute',
            right: '100%',
            bottom: '-1px',
            fontSize: '0.7rem',
            color: '#888',
            marginRight: '10px'
          }}>
            1x
          </div>
        </div>
      </div>

      <button type="button" className="orbit-toggle-btn" onClick={() => setShowOrbits(prev => !prev)}>
        {showOrbits ? 'Hide Lines' : 'Show Lines'}
      </button>
    </section>
  );
}
