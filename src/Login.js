import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  '697824084818-c1m2991m61lt5gk5mqgrcgn894mmi6cj.apps.googleusercontent.com';

function Login({update}) {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    update(true);

  //  alert(
  //    `Logged in successfully welcome ${res.profileObj.name}  `
//    );
    refreshTokenSetup(res);

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
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
