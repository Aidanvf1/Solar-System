import React from 'react';

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export function DateControls({ day, month, year, onChangeDay, onChangeMonth, onChangeYear }) {
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
    </div>
  );
}
