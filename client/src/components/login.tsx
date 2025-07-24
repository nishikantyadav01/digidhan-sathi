// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Message, Segment } from 'semantic-ui-react';
import { useAuth } from './core/auth/authContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1234admin');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      await auth.login(username, password);
      navigate('/');
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Segment padded="very" style={{ maxWidth: 450, margin: 'auto', marginTop: 80 }}>
      <Form onSubmit={handleSubmit} loading={loading} error={!!error}>
        <Form.Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button primary fluid type="submit">
          Login
        </Button>
        {error && <Message error content={error} />}
      </Form>
    </Segment>
  );
};

export default Login;
