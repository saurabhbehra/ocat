import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';


function Login() {
  const { oktaAuth } = useOktaAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const transaction = await oktaAuth.signInWithCredentials({
        username,
        password,
      });

      if (transaction.status === 'SUCCESS') {
        oktaAuth.signInWithRedirect({ sessionToken: transaction.sessionToken });
      } else {
        throw new Error('Unable to sign in');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
