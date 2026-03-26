// imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { Main } from './main/main';
import { About } from './about/about';
import { useWebSocket } from './useWebSocket';

// 404 page
function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

// main app router
export default function App() {
  const { userCount } = useWebSocket(); // get online user count from websocket

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main userCount={userCount} />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}