import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '483933534809-u26duelm7pqej6en9cru19cjqkp3a0uj.apps.googleusercontent.com';

function Login() {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    localStorage.setItem('name', res.profileObj.name);
    localStorage.setItem('email', res.profileObj.email);
    localStorage.setItem('isLoggedIn', true);
    refreshTokenSetup(res);
    window.location.reload(false);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    localStorage.setItem('isLoggedIn', false);
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.reload(false);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;