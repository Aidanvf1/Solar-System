import React from 'react';

const PLANETS_DATA = {
  Mercury: { color: '#8c8c8c' },
  Venus: { color: '#e6c87a' },
  Earth: { color: '#4a90d9' },
  Mars: { color: '#c1440e' },
  Jupiter: { color: '#d4a574' },
  Saturn: { color: '#e6d4a3' },
  Uranus: { color: '#7de3f4' },
  Neptune: { color: '#4b70dd' }
};

export function PlanetLabels({ labelsRef }) {
  return (
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
  );
}
