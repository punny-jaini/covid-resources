import React, {useContext} from 'react';
import { GoogleLogout } from 'react-google-login';
import IsLoggedInContext from '../utils/loggedin-context';

const clientId =
  '483933534809-u26duelm7pqej6en9cru19cjqkp3a0uj.apps.googleusercontent.com';

function Logout() {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    setIsLoggedIn(false);
    console.log(isLoggedIn + " after logout");
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