// imports
import React from 'react';

// nasa apod section
export function ApodSection({ showApod, setShowApod, apodData, apodLoading }) {
  return (
    <section id="apod">
      <h2>NASA APOD</h2>
      <ul>
        <li className="link-with-arrow" onClick={() => setShowApod(prev => !prev)} style={{ cursor: 'pointer' }}>
          {showApod ? 'Hide Media' : 'Show Media'}<span className="arrow">←</span>
        </li>
      </ul>
      {showApod && (
        <div className="apod-content">
          {apodLoading ? (
            <p className="apod-loading">Loading...</p>
          ) : apodData?.unavailable ? (
            <>
              <p className="apod-error">APOD unavailable for today, sorry :/</p>
              <p className="apod-description">
                You can still visit it directly: <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer" className="apod-link">APOD</a>
              </p>
            </>
          ) : apodData ? (
            <>
              {apodData.media_type === 'video' ? (
                <iframe
                  src={apodData.url}
                  className="apod-video"
                  frameBorder="0"
                  allow="encrypted-media"
                  allowFullScreen
                  title={apodData.title}
                />
              ) : (
                <img 
                  src={apodData.url} 
                  alt={apodData.title || 'Astronomy Picture of the Day'} 
                  className="apod-image"
                />
              )}
              <p className="apod-description">
                To learn more about NASA's photo of the day visit: <a href="https://apod.nasa.gov/apod/astropix.html" target="_blank" rel="noopener noreferrer" className="apod-link">APOD</a>
              </p>
            </>
          ) : (
            <p className="apod-error">Failed to load APOD</p>
          )}
        </div>
      )}
    </section>
  );
}
