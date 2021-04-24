import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '483933534809-u26duelm7pqej6en9cru19cjqkp3a0uj.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
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