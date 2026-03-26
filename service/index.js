const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');
const { WebSocketServer } = require('ws');
const DB = require('./database.js');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// register
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ msg: 'Username and password required' });

  const existing = await DB.getUser(username);
  if (existing) return res.status(409).json({ msg: 'Username already taken' });

  const hashed = await bcrypt.hash(password, 10);
  const token = uuid.v4();
  await DB.addUser({ username, password: hashed, token });
  res.cookie('token', token, { sameSite: 'strict', httpOnly: true });
  res.json({ username });
});

// login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await DB.getUser(username);
  if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ msg: 'Invalid credentials' });

  const token = uuid.v4();
  await DB.updateUserToken(username, token);
  res.cookie('token', token, { sameSite: 'strict', httpOnly: true });
  res.json({ username });
});

// logout
app.delete('/api/auth/logout', async (req, res) => {
  const token = req.cookies.token;
  if (token) await DB.removeUserToken(token);
  res.clearCookie('token');
  res.json({ msg: 'Logged out' });
});

// get current user
app.get('/api/auth/me', async (req, res) => {
  const token = req.cookies.token;
  const user = token ? await DB.getUserByToken(token) : null;
  if (!user) return res.status(401).json({ msg: 'Not logged in' });
  res.json({ username: user.username });
});

// auth middleware

async function requireAuth(req, res, next) {
  const token = req.cookies.token;
  const user = token ? await DB.getUserByToken(token) : null;
  if (!user) return res.status(401).json({ msg: 'Not authenticated' });
  req.username = user.username;
  next();
}

// saved dates endpoints

app.get('/api/dates', requireAuth, async (req, res) => {
  const dates = await DB.getSavedDates(req.username);
  res.json(dates);
});

app.post('/api/dates', requireAuth, async (req, res) => {
  const { day, month, year, dateString } = req.body;
  if (!day || !month || !year || !dateString) return res.status(400).json({ msg: 'Missing date fields' });

  const dates = await DB.addSavedDate(req.username, { day, month, year, dateString });
  res.json(dates);
});

// online users endpoint
app.get('/api/users/online', (req, res) => {
  res.json({ count: Math.floor(Math.random() * 10) + 1 });
});

// nasa api

app.get('/api/apod', async (req, res) => {
  const keys = [process.env.NASA_API_KEY, 'wpSuJeAR9FRyHcUYeaDCJwKjreFAwEaCqwmq39Ne', 'DEMO_KEY'].filter(Boolean);
  let lastErr;
  for (const key of keys) {
    try {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
      if (!response.ok) {
        const body = await response.text();
        lastErr = new Error(`NASA API error: ${response.status}`);
        console.warn(`APOD key attempt failed (${response.status}): ${body.slice(0, 300)}`);
        continue;
      }
      const data = await response.json();
      // Normalize YouTube watch URLs to embed URLs so they render in an iframe
      if (data.media_type === 'video' && data.url) {
        const ytMatch = data.url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
        if (ytMatch) {
          data.url = `https://www.youtube.com/embed/${ytMatch[1]}`;
        }
      }
      return res.json(data);
    } catch (err) {
      lastErr = err;
      console.warn(`APOD fetch attempt failed: ${err.message}`);
    }
  }
  console.error('All APOD key attempts failed:', lastErr);
  res.status(500).json({ msg: 'Failed to fetch APOD' });
});

// start server

const httpServer = app.listen(port, () => {
  console.log(`Service running on port ${port}`);
});

// webSocket server
const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws) => {
  console.log('[WebSocket] Client connected. Total clients:', wss.clients.size);

  // send current user count to the new client
  const userCountMsg = JSON.stringify({ type: 'userCount', count: wss.clients.size });
  ws.send(userCountMsg);

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(userCountMsg);
    }
  });

  ws.on('close', () => {
    console.log('[WebSocket] Client disconnected. Total clients:', wss.clients.size - 1);


    const updatedMsg = JSON.stringify({ type: 'userCount', count: wss.clients.size - 1 });
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(updatedMsg);
      }
    });
  });

  ws.on('error', (err) => {
    console.log('[WebSocket] Error:', err.message);
  });
});