import React from 'react';
import { useContext, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from "react-router-dom";
// refresh token
import { refreshTokenSetup } from '../utils/refresh-token';
import IsLoggedInContext from '../utils/loggedin-context';

const clientId =
  '483933534809-u26duelm7pqej6en9cru19cjqkp3a0uj.apps.googleusercontent.com';

function Login() {
  let history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);
  // const { isLoggedIn } = useContext(IsLoggedInContext);

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
    setIsLoggedIn(true);
    console.log(isLoggedIn + " is val of context on successful login");
    history.push('/update');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
    setIsLoggedIn(false);
    console.log(isLoggedIn + " is val of context on failed login");
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