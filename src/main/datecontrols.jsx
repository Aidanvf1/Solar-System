// imports
import React, { useState, useEffect } from 'react';

// month names
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getDaysInMonth(year, month) {
  const d = new Date(Date.UTC(0, month, 0, 12));
  d.setUTCFullYear(year);
  return d.getUTCDate();
}

function formatDayOrMonth(value) {
  return String(value).padStart(2, '0');
}

function clampDate(day, month, year) {
  const now = new Date();
  const fallbackYear = now.getFullYear();
  const fallbackMonth = now.getMonth() + 1;
  const fallbackDay = now.getDate();

  const rawYear = Number.isFinite(year) ? Math.trunc(year) : fallbackYear;
  const safeYear = Math.max(0, Math.min(3000, rawYear));

  const rawMonth = Number.isFinite(month) ? Math.trunc(month) : fallbackMonth;
  const safeMonth = Math.max(1, Math.min(12, rawMonth));

  const maxDay = getDaysInMonth(safeYear, safeMonth);
  const rawDay = Number.isFinite(day) ? Math.trunc(day) : fallbackDay;
  const safeDay = Math.max(1, Math.min(maxDay, rawDay));

  return { day: safeDay, month: safeMonth, year: safeYear };
}

// date controls
export function DateControls({ day, month, year, onChangeDay, onChangeMonth, onChangeYear, onSetDate, isPlaying, speed, onReturnToToday }) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dayInput, setDayInput] = useState(String(day));
  const [monthInput, setMonthInput] = useState(String(month));
  const [yearInput, setYearInput] = useState(String(year));

  // check if current date is today
  const today = new Date();
  const isToday = day === today.getDate() && month === (today.getMonth() + 1) && year === today.getFullYear();

  // update clock every 50ms when visible
  useEffect(() => {
    if (isPlaying && speed === 1 && isToday) {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isPlaying, speed, isToday]);

  useEffect(() => {
    setDayInput(formatDayOrMonth(day));
    setMonthInput(formatDayOrMonth(month));
    setYearInput(String(year));
  }, [day, month, year]);

  // format time as HH:MM:SS.mmm
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const applyTypedDate = () => {
    const parsedDay = Number.parseInt(dayInput, 10);
    const parsedMonth = Number.parseInt(monthInput, 10);
    const parsedYear = Number.parseInt(yearInput, 10);

    // fallback to current values if any field is temporarily empty
    const normalized = clampDate(
      Number.isFinite(parsedDay) ? parsedDay : day,
      Number.isFinite(parsedMonth) ? parsedMonth : month,
      Number.isFinite(parsedYear) ? parsedYear : year,
    );
    setDayInput(formatDayOrMonth(normalized.day));
    setMonthInput(formatDayOrMonth(normalized.month));
    setYearInput(String(normalized.year));
    onSetDate(normalized.day, normalized.month, normalized.year);
  };

  const sanitizeDigits = (value) => value.replace(/\D/g, '');

  const handleDateInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      applyTypedDate();
    }

    if (event.key === 'Escape') {
      setDayInput(formatDayOrMonth(day));
      setMonthInput(formatDayOrMonth(month));
      setYearInput(String(year));
    }
  };

  return (
    <div id="datecontrolsgroup">
      <div id="daycontrol">
        <label htmlFor="day">Day:</label>
        <input
          id="day"
          value={dayInput}
          onChange={(e) => setDayInput(sanitizeDigits(e.target.value).slice(0, 2))}
          onBlur={applyTypedDate}
          onKeyDown={handleDateInputKeyDown}
          inputMode="numeric"
        />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeDay(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeDay(1)}>⋗</button>
        </div>
      </div>
      <div id="monthcontrol">
        <label htmlFor="month">Month:</label>
        <input
          id="month"
          value={monthInput}
          onChange={(e) => setMonthInput(sanitizeDigits(e.target.value).slice(0, 2))}
          onBlur={applyTypedDate}
          onKeyDown={handleDateInputKeyDown}
          inputMode="numeric"
        />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeMonth(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeMonth(1)}>⋗</button>
        </div>
      </div>
      <div id="yearcontrol">
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          value={yearInput}
          onChange={(e) => setYearInput(sanitizeDigits(e.target.value).slice(0, 4))}
          onBlur={applyTypedDate}
          onKeyDown={handleDateInputKeyDown}
          inputMode="numeric"
        />
        <div className="buttongroup">
          <button className="buttonleft" onClick={() => onChangeYear(-1)}>⋖</button>
          <button className="buttonright" onClick={() => onChangeYear(1)}>⋗</button>
        </div>
      </div>
      <div className="clock-status-block" style={{ marginTop: '3px', textAlign: 'center' }}>
        <div className="clock-title" style={{
          fontSize: '0.5rem',
          color: '#888',
          marginBottom: '1px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Real-Time Clock
        </div>
        <div id="realtimeclock" style={{
          fontSize: isToday ? '0.9rem' : '0.72rem',
          color: '#aaa',
          textAlign: 'center',
          fontFamily: 'monospace',
          letterSpacing: isToday ? '1.5px' : '0.5px'
        }}>
          {isToday ? formatTime(currentTime) : "Not on today's date"}
        </div>
        {!isToday && (
          <button type="button" className="return-today-btn" onClick={onReturnToToday}>
            Return to Today
          </button>
        )}
      </div>
    </div>
  );
}
