// imports
import React from 'react';

// login modal
export function LoginModal({ 
  showLoginModal, 
  setShowLoginModal, 
  loginInput, 
  setLoginInput, 
  passwordInput, 
  setPasswordInput, 
  setUsername 
}) {
  if (!showLoginModal) return null;

  return (
    <div className="modal-backdrop" onClick={() => setShowLoginModal(false)}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome to Eyes on Space</h2>
        <p className="modal-subtitle">Login to explore the solar system</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          const user = loginInput.trim();
          const pass = passwordInput.trim();
          if (user && pass) {
            setUsername(user);
            setShowLoginModal(false);
            setLoginInput('');
            setPasswordInput('');
          }
        }}>
          <input
            type="text"
            placeholder="Enter username"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <div className="modal-buttons">
            <button type="submit" className="btn-login">Login</button>
            <button type="button" className="btn-skip" onClick={() => setShowLoginModal(false)}>Skip for now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
