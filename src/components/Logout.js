import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.setItem('isLoggedIn', false);
    window.location.reload(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;