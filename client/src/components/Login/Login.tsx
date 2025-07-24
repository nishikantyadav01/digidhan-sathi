import React, { useRef, useState, FormEvent } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
//import { useAuth } from '../contexts/AuthContext'; // Your auth context
import './Login.css';
import { useAuth } from '../contexts/AuthContext';
import CustomInput from '../Input/CustomInput';
import CustomButton from '../Button/CustomButton';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Guest credentials (hardcoded)
  const guestEmail = 'guest@example.com';
  const guestPassword = 'guest123';

  // Fill guest credentials into inputs when clicking the guest link
  const handleGuestClick = () => {
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = guestEmail;
      passwordRef.current.value = guestPassword;
      setError(''); // Clear any previous error
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      setError('Input fields are not available');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch {
      setError('Failed to sign in');
    } finally {
      setLoading(false);
    }
  }

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h2 className="login-title">Welcome</h2>

        {error && <div className="error-message">{error}</div>}

        <label htmlFor="email" className="input-label">Email</label>
        <CustomInput
          label=""
          type="text"
          inputRef={emailRef}
          name="email"
          required
          onChange={() => setError('')} // clear error on manual change
          id="email"
          test="input-email-test"
        />

        <label htmlFor="password" className="input-label">Password</label>
        <CustomInput
          label=""
          type="password"
          inputRef={passwordRef}
          name="password"
          required
          onChange={() => setError('')}
          id="password"
          test="input-pass-test"
        />

        <CustomButton disabled={loading} type="submit" title="Log in" test="btn-login-test" />

        <div className="extra-links">
          {/* Changed from Link to span with onClick */}
          <span
            onClick={handleGuestClick}
            style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'underline' }}
            data-testid="guest-login"
          >
            Continue as Guest?
          </span>
          <span> | </span>
          <Link to="/signup" id="link-signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;