import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

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