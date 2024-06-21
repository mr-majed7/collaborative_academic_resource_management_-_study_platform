// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic (e.g., authentication)
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <div className="create-account">
        <p>Don't have an account?</p>
        <Link to="/register">Create New Account</Link>
      </div>
    </div>
  );
};

export default Login;