import React, { useRef, useState, FormEvent } from 'react';
import { useAuth } from '../../components/contexts/AuthContext';
import './SignUp.css'; // regular CSS import, not module
import { Link, useNavigate } from 'react-router-dom';
import CustomInput  from '../Input/CustomInput';
import CustomButton from '../Button/CustomButton';

const SignUp: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const { signup } = useAuth();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !passwordConfirmRef.current ||
      !passwordRef.current ||
      passwordConfirmRef.current.value !== passwordRef.current.value
    ) {
      return setError('Passwords do not match');
    }

    if (
      !emailRef.current ||
      !nameRef.current ||
      !passwordRef.current
    ) {
      return setError('Please fill in all fields');
    }

    try {
      setError('');
      setLoading(true);
      await signup(
        nameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
      navigate('/Login');
    } catch {
      setError('Failed to create an account');
    } finally {
      setLoading(false);
    }
  }

  const handleEmailChange = (value: string) => {
    if (emailRef.current) emailRef.current.value = value;
  };

  const handlePasswordChange = (value: string) => {
    if (passwordRef.current) passwordRef.current.value = value;
  };

  const handlePasswordConfirmChange = (value: string) => {
    if (passwordConfirmRef.current) passwordConfirmRef.current.value = value;
  };

  const handleNameChange = (value: string) => {
    if (nameRef.current) nameRef.current.value = value;
  };

  // if (currentUser) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <CustomInput
          label="E-mail"
          type="text"
          inputRef={emailRef}
          name="email"
          required
          onChange={handleEmailChange}
          id="email"
          test="input-email-test"
        />
        <CustomInput
          label="Name"
          type="text"
          inputRef={nameRef}
          name="name"
          required
          onChange={handleNameChange}
          id="name"
          test="input-name-test"
        />
        <CustomInput
          label="Password"
          type="password"
          inputRef={passwordRef}
          name="password"
          required
          onChange={handlePasswordChange}
          id="password"
          test="input-pass-test"
        />
        <CustomInput
          label="Password confirm"
          type="password"
          inputRef={passwordConfirmRef}
          name="password-repeat"
          required
          onChange={handlePasswordConfirmChange}
          id="password-repeat"
          test="input-pass-confirm-test"
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <CustomButton disabled={loading} type="submit" title="Sign Up" />
      </form>
      <div className="link">
        Already have an account?
        <Link to="/login" id="link-login">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
