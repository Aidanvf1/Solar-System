// imports
import React, { useMemo, useState } from 'react';

const USERS_PER_PAGE = 6;

function buildUserList(onlineCount) {
  const fallbackUsers = [
    'NovaExplorer',
    'StarGazer88',
    'ViewingWorm',
    'CosmicQuery',
    'OrbitalSim_24',
    'MoonMapper',
    'PlasmaDrift',
    'HeliosWatch',
    'ZenithPilot',
    'AstroBloom',
    'SkyVector',
    'SolarCarto',
  ];

  const targetCount = Math.max(onlineCount, USERS_PER_PAGE);
  return Array.from({ length: targetCount }, (_, index) => fallbackUsers[index] || `Explorer_${index + 1}`);
}

// online users display
export function OnlineUsers({ onlineCount }) {
  const [page, setPage] = useState(0);
  const users = useMemo(() => buildUserList(onlineCount), [onlineCount]);
  const pageCount = Math.max(1, Math.ceil(users.length / USERS_PER_PAGE));
  const visibleUsers = users.slice(page * USERS_PER_PAGE, (page + 1) * USERS_PER_PAGE);
  const paddedUsers = [...visibleUsers, ...Array(Math.max(0, USERS_PER_PAGE - visibleUsers.length)).fill(null)];

  return (
    <section id="onlineusers">
      <h2>Online Users</h2>
      <p><span id="online-count">{onlineCount}</span> others online</p>
      <ul className="user-placeholder-list online-users-paged-list" style={{ marginTop: '8px', fontSize: '10px' }}>
        {paddedUsers.map((user, index) => (
          <li key={user || `empty-${page}-${index}`} className={`user-placeholder ${user ? '' : 'user-placeholder-empty'}`}>
            {user || 'placeholder'}
          </li>
        ))}
      </ul>
      {pageCount > 1 && (
        <div className="users-pagination">
          <button type="button" onClick={() => setPage(prev => Math.max(prev - 1, 0))} disabled={page === 0}>
            Prev
          </button>
          <span>{page + 1} / {pageCount}</span>
          <button type="button" onClick={() => setPage(prev => Math.min(prev + 1, pageCount - 1))} disabled={page === pageCount - 1}>
            Next
          </button>
        </div>
      )}
    </section>
  );
}
