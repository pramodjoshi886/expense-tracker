import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    onLogin();
    navigate('/');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h1 className="text-center mt-5">Welcome to your expense tracker</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in to your account</h2>
        
        <label htmlFor="email">Your email</label>
        <input
          type="email"
          id="email"
          placeholder="user@login.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* <div className="remember-forgot">
          <div className="checkbox">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
        </div> */}

        <button type="submit" className="sign-in-button">Sign in</button>

        <p className="signup-link">
          Don’t have an account yet? <a href="#" onClick={handleSignUpClick}>Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
