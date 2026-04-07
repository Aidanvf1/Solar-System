import { useEffect, useRef, useState } from 'react';

export function useWebSocket(username) {
  const [userCount, setUserCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const wsRef = useRef(null);
  const isDev = import.meta.env.DEV;

  useEffect(() => {

    const wsHost = window.location.hostname === 'localhost' ? 'localhost:4000' : window.location.host;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${wsHost}`;

    if (isDev) {
      console.log('[useWebSocket] Connecting to', wsUrl);
    }

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      if (isDev) {
        console.log('[useWebSocket] Connected!');
      }
      // send username when connected
      if (username) {
        ws.send(JSON.stringify({ type: 'userJoin', username }));
      }
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (isDev) {
        console.log('[useWebSocket] Message:', message);
      }

      if (message.type === 'userCount') {
        if (isDev) {
          console.log('[useWebSocket] Online users:', message.count);
        }
        setUserCount(message.count);
      }

      if (message.type === 'onlineUsers') {
        if (isDev) {
          console.log('[useWebSocket] Online users list:', message.users);
        }
        setOnlineUsers(message.users);
        setUserCount(message.users.length);
      }
    };

    ws.onerror = (error) => {
      console.error('[useWebSocket] Error:', error);
    };

    ws.onclose = () => {
      if (isDev) {
        console.log('[useWebSocket] Disconnected');
      }
    };

    wsRef.current = ws;

    // cleanup
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [username]);

  return { ws: wsRef.current, userCount, onlineUsers };
}
