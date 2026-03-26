// imports
import React, { useEffect, useMemo, useState } from 'react';

const USERS_PER_PAGE = 6;

function buildUserList(onlineUsers) {
  if (!Array.isArray(onlineUsers)) {
    return [];
  }

  return onlineUsers.filter(Boolean);
}

// online users display
export function OnlineUsers({ onlineUsers }) {
  const [page, setPage] = useState(0);
  const users = useMemo(() => buildUserList(onlineUsers), [onlineUsers]);
  const realOnlineCount = users.length;
  const pageCount = Math.max(1, Math.ceil(users.length / USERS_PER_PAGE));
  const visibleUsers = users.slice(page * USERS_PER_PAGE, (page + 1) * USERS_PER_PAGE);

  useEffect(() => {
    if (page > pageCount - 1) {
      setPage(Math.max(0, pageCount - 1));
    }
  }, [page, pageCount]);

  return (
    <section id="onlineusers">
      <h2>Online Users</h2>
      <p><span id="online-count">{realOnlineCount}</span> others online</p>
      {users.length === 0 ? (
        <p style={{ marginTop: '8px', fontSize: '10px' }}>No one is online.</p>
      ) : (
        <ul className="user-placeholder-list online-users-paged-list" style={{ marginTop: '8px', fontSize: '10px' }}>
          {visibleUsers.map((user) => (
            <li key={user} className="user-placeholder">
              {user}
            </li>
          ))}
        </ul>
      )}
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
