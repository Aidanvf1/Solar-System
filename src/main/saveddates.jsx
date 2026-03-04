import React from 'react';

export function SavedDates({ savedDates, showSavedDatesList, setShowSavedDatesList, onSaveDate, onLoadDate }) {
  return (
    <section id="saveddates">
      <button id="savedatebutton" onClick={onSaveDate} className="link-with-arrow">
        Save Date + <span className="arrow">←</span>
      </button>
      <button id="saved" onClick={() => setShowSavedDatesList(prev => !prev)} className="link-with-arrow">
        {showSavedDatesList ? 'Hide Dates' : 'Date Archive'} <span className="arrow">←</span>
      </button>
      {showSavedDatesList && (
        <div id="saveddateslist">
          <ul>
            {savedDates.length > 0 ? (
              savedDates.map((date, index) => (
                <li 
                  key={index} 
                  onClick={() => onLoadDate(date)}
                  className="link-with-arrow"
                >
                  {date.dateString} <span className="arrow">←</span>
                </li>
              ))
            ) : (
              <li className="no-dates-message">No saved dates yet</li>
            )}
          </ul>
        </div>
      )}
    </section>
  );
}
