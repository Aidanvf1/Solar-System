import React from 'react';

export function OnlineUsers({ onlineCount, showUsersList, setShowUsersList }) {
  return (
    <section id="onlineusers">
      <h2>Online Users</h2>
      <p><span id="online-count">{onlineCount}</span> others online</p>
      <ul>
        <li className="link-with-arrow" onClick={() => setShowUsersList(prev => !prev)} style={{ cursor: 'pointer' }}>
          {showUsersList ? 'Hide Users' : 'See Users'}<span className="arrow">←</span>
        </li>
      </ul>
      {showUsersList && (
        <ul className="user-placeholder-list" style={{ marginTop: '8px', fontSize: '10px' }}>
          <li className="user-placeholder">User1 (placeholder)</li>
          <li className="user-placeholder">User2 (placeholder)</li>
          <li className="user-placeholder">User3 (placeholder)</li>
        </ul>
      )}
    </section>
  );
}
