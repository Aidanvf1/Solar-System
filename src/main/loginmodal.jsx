import React, { useState } from 'react';

export function LoginModal({
  showLoginModal,
  setShowLoginModal,
  loginInput,
  setLoginInput,
  passwordInput,
  setPasswordInput,
  onLoginSuccess,
}) {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [showEmptyError, setShowEmptyError] = useState(false);

  if (!showLoginModal) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    const user = loginInput.trim();
    const pass = passwordInput.trim();
    
    if (!user || !pass) {
      setShowEmptyError(true);
      setErrorMsg('');
      return;
    }
    
    setShowEmptyError(false);

    setLoading(true);
    setErrorMsg('');

    try {
      // first, try to login
      let res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass }),
      });

      let data = await res.json();

      // if login fails, try to register (maybe it's a new user)
      if (!res.ok && res.status === 401) {
        res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user, password: pass }),
        });
        data = await res.json();
      }

      // check result
      if (!res.ok) {
        if (res.status === 409) {
          setErrorMsg('Wrong password or username already taken');
        } else {
          setErrorMsg('Something went wrong. Try again.');
        }
        return;
      }

      setLoginInput('');
      setPasswordInput('');
      onLoginSuccess(data.username);
    } catch (err) {
      setErrorMsg('Could not reach server. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div 
      className="modal-backdrop" 
      onClick={() => setShowLoginModal(false)}
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <h2>Welcome to Eyes on Space</h2>
        <p className="modal-subtitle">Login or create an account to explore the solar system</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={loginInput}
            onChange={(e) => {
              setLoginInput(e.target.value);
              setShowEmptyError(false);
              setErrorMsg('');
            }}
            style={{
              border: showEmptyError ? '2px solid #ff0040' : undefined,
              boxShadow: showEmptyError ? '0 0 10px #ff0040' : undefined
            }}
            autoFocus
          />
          <input
            type="password"
            placeholder="Enter password"
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
              setShowEmptyError(false);
              setErrorMsg('');
            }}
            style={{
              border: showEmptyError ? '2px solid #ff0040' : undefined,
              boxShadow: showEmptyError ? '0 0 10px #ff0040' : undefined
            }}
          />
          {showEmptyError && (
            <p style={{ 
              color: '#ff0040', 
              fontSize: '0.9rem', 
              marginTop: '5px',
              textShadow: '0 0 5px #ff0040'
            }}>
              Please enter both username and password
            </p>
          )}
          {errorMsg && (
            <p style={{ 
              color: '#ff0040', 
              fontSize: '0.9rem', 
              marginTop: '5px',
              textShadow: '0 0 5px #ff0040'
            }}>
              {errorMsg}
            </p>
          )}
          <div className="modal-buttons">
            <button type="submit" className="btn-login" disabled={loading}>
              {loading ? 'Please wait...' : 'Continue'}
            </button>
            <button type="button" className="btn-skip" onClick={() => setShowLoginModal(false)}>
              Skip for now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}