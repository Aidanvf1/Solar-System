const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

// in-memory storage — will be replaced with database in DB deliverable
let users = {};
let sessions = {};
let savedDatesByUser = {};

// register
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ msg: 'Username and password required' });
  if (users[username]) return res.status(409).json({ msg: 'Username already taken' });

  const hashed = await bcrypt.hash(password, 10);
  users[username] = { username, password: hashed };
  savedDatesByUser[username] = [];

  const token = uuid.v4();
  sessions[token] = username;
  res.cookie('token', token, { sameSite: 'strict', httpOnly: true });
  res.json({ username });
});

// login
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ msg: 'Invalid credentials' });

  const token = uuid.v4();
  sessions[token] = username;
  res.cookie('token', token, { sameSite: 'strict', httpOnly: true });
  res.json({ username });
});

// logout
app.delete('/api/auth/logout', (req, res) => {
  const token = req.cookies.token;
  if (token) delete sessions[token];
  res.clearCookie('token');
  res.json({ msg: 'Logged out' });
});

// get current user
app.get('/api/auth/me', (req, res) => {
  const token = req.cookies.token;
  const username = sessions[token];
  if (!username) return res.status(401).json({ msg: 'Not logged in' });
  res.json({ username });
});

// auth middleware

function requireAuth(req, res, next) {
  const token = req.cookies.token;
  const username = sessions[token];
  if (!username) return res.status(401).json({ msg: 'Not authenticated' });
  req.username = username;
  next();
}

// saved dates endpoints

app.get('/api/dates', requireAuth, (req, res) => {
  res.json(savedDatesByUser[req.username] || []);
});

app.post('/api/dates', requireAuth, (req, res) => {
  const { day, month, year, dateString } = req.body;
  if (!day || !month || !year || !dateString) return res.status(400).json({ msg: 'Missing date fields' });

  const dates = savedDatesByUser[req.username] || [];
  const newDates = [{ day, month, year, dateString }, ...dates];
  savedDatesByUser[req.username] = newDates.length > 5 ? newDates.slice(0, 5) : newDates;
  res.json(savedDatesByUser[req.username]);
});

// online users endpoint

app.get('/api/users/online', (req, res) => {
  res.json({ count: Object.keys(sessions).length || Math.floor(Math.random() * 10) + 1 });
});

// nasa api

app.get('/api/apod', async (req, res) => {
  try {
    const NASA_KEY = process.env.NASA_API_KEY || 'wpSuJeAR9FRyHcUYeaDCJwKjreFAwEaCqwmq39Ne';
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
    if (!response.ok) throw new Error(`NASA API error: ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('APOD fetch error:', err);
    res.status(500).json({ msg: 'Failed to fetch APOD' });
  }
});

// start server

app.listen(port, () => {
  console.log(`Service running on port ${port}`);
});