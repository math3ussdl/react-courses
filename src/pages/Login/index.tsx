import React, { useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Loader from '../../components/Loader';
import api from '../../services/api';
import { login } from '../../services/auth';
import { BottomActions, Container, Form } from './styles';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSignIn = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Fill these required fields!');
    } else {
      setIsLoading(true);
      try {
        const response = await api.post('/sessions', { email, password });

        console.log('data', response);

        setIsLoading(false);

        login(response.data.token);
        history.push('/app');
      } catch (error) {
        alert('Oops... Something went wrong!');
      }
    }
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      {isLoading ? <Loader loading={isLoading} /> : null}

      <Form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <p>Access your account right now!</p>

        <fieldset>
          <label htmlFor="mail-box">Email</label>
          <input
            id="mail-box"
            type="text"
            placeholder="Your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass-box">Password</label>
          <input
            id="pass-box"
            type="password"
            placeholder="Your supersecret password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>

        <div className="actions">
          <button id="login" type="submit" disabled={isLoading}>
            <FaSignInAlt /> Sign In
          </button>

          <button id="reset" type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </Form>

      <BottomActions>
        <select name="lang" id="lang">
          <option value="en_US">English (United States)</option>
          <option value="es_ES">Español</option>
          <option value="pt_BR">Português (Brasil)</option>
        </select>

        <div className="links">
          <a href="/help">Help</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </BottomActions>
    </Container>
  );
};

export default Login;
