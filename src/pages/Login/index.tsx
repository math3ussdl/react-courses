import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Loader from '../../components/Loader';
import { BottomActions, Container, Form } from './styles';

const Login: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const history = useHistory();

  const handleSignIn = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('data', { email, password });
      setIsLoading(false);

      history.push('/app');
    }, 3000);
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
