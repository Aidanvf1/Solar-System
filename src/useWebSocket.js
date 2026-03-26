import { useEffect, useRef, useState } from 'react';

export function useWebSocket(username) {
  const [userCount, setUserCount] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {

    const isDev = window.location.hostname === 'localhost';
    const wsHost = isDev ? 'localhost:4000' : window.location.host;
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${wsHost}`;

    console.log('[useWebSocket] Connecting to', wsUrl);

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('[useWebSocket] Connected!');
      // send username when connected
      if (username) {
        ws.send(JSON.stringify({ type: 'userJoin', username }));
      }
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('[useWebSocket] Message:', message);

      if (message.type === 'userCount') {
        console.log('[useWebSocket] Online users:', message.count);
        setUserCount(message.count);
      }

      if (message.type === 'onlineUsers') {
        console.log('[useWebSocket] Online users list:', message.users);
        setOnlineUsers(message.users);
        setUserCount(message.users.length);
      }
    };

    ws.onerror = (error) => {
      console.error('[useWebSocket] Error:', error);
    };

    ws.onclose = () => {
      console.log('[useWebSocket] Disconnected');
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
