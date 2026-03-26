// imports
import React from 'react';

function formatSpeed(speed) {
  if (speed < 1000) {
    return `${speed}x`;
  }

  if (speed < 1000000) {
    const value = speed / 1000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}Kx`;
  }

  const value = speed / 1000000;
  return `${Number.isInteger(value) ? value : value.toFixed(1)}Mx`;
}

// play controls
export function PlayControls({ isPlaying, setIsPlaying, speed, setSpeed, onPlayPause }) {
  return (
    <section id="dateandcontrols">
      <button 
        id="playbutton" 
        type="button"
        onClick={onPlayPause}
        style={{
          letterSpacing: isPlaying ? '0px' : '0',
          fontSize: isPlaying ? '14px' : '16px',
          color: isPlaying ? '#ef4444' : '#22c55e',
        }}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
      
      <div id="speedcontrols">
        <label htmlFor="speed" className="speed-label">
          <span className="speed-label-title">SPEED:</span>
          <span className="speed-value">{formatSpeed(speed)}</span>
        </label>
        <div className="speed-range-wrap">
          <input 
            type="range" 
            id="speed" 
            value={speed} 
            step="10" 
            min="1" 
            max="10000000" 
            onChange={(e) => setSpeed(+e.target.value)} 
          />
          <div className="speed-range-labels">
            <span>1x</span>
            <span>10Mx</span>
          </div>
        </div>
      </div>
    </section>
  );
}
