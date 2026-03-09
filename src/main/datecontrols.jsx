// imports
import React, { useState, useEffect } from 'react';

// month names
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// date controls
export function DateControls({ day, month, year, onChangeDay, onChangeMonth, onChangeYear, isPlaying, speed }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // update clock every 50ms when visible
  useEffect(() => {
    if (isPlaying && speed === 1) {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying, speed]);

  // format time as HH:MM:SS.mmm
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };
  return (
    <div id="datecontrolsgroup">
      <div id="daycontrol">
        <label htmlFor="day">Day:</label>
        <input id="day" value={day} readOnly />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeDay(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeDay(1)}>⋗</button>
        </div>
      </div>
      <div id="monthcontrol">
        <label htmlFor="month">Month:</label>
        <input id="month" value={MONTH_NAMES[month - 1]} readOnly />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeMonth(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeMonth(1)}>⋗</button>
        </div>
      </div>
      <div id="yearcontrol">
        <label htmlFor="year">Year:</label>
        <input id="year" value={year} readOnly />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeYear(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeYear(1)}>⋗</button>
        </div>
      </div>
      {isPlaying && speed === 1 && (
        <div style={{ marginTop: '3px', textAlign: 'center' }}>
          <div style={{
            fontSize: '0.4rem',
            color: '#888',
            marginBottom: '1px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Real-Time Clock
          </div>
          <div id="realtimeclock" style={{
            fontSize: '0.65rem',
            color: '#aaa',
            textAlign: 'center',
            fontFamily: 'monospace',
            letterSpacing: '0.5px'
          }}>
            {formatTime(currentTime)}
          </div>
        </div>
      )}
    </div>
  );
}
