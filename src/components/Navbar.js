import { Menu} from 'antd';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const Navbar = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') == 'true';
    const name = localStorage.getItem('name');
    console.log(isLoggedIn);

    return (
        <Menu theme="dark" mode="horizontal" style={{ fontSize: '22px', padding: "1%", display: 'flex', justifyContent:'flex-end' }} defaultSelectedKeys={[window.location.pathname]}>
          {/* <Menu.Item>
            <Link to="/" style={{ fontWeight: '600', color: 'white' }}>Resources</Link>
          </Menu.Item> */}
          {isLoggedIn && (
            <div>Hi, { name }</div>
          )} 
          <Menu.Item key="/" style={{fontSize: '16px'}}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/dashboard" style={{fontSize: '16px'}}>
            <Link to="/dashboard">Live</Link>
          </Menu.Item>
          <Menu.Item key="/resources" style={{fontSize: '16px'}}>
            <Link to="/resources">Links</Link>
          </Menu.Item>
          <Menu.Item key="/about" style={{fontSize: '16px'}}>
            <Link to="/about">About</Link>
          </Menu.Item>
          {!isLoggedIn && (
            <Login />
          )} 
          {isLoggedIn && (
            <Logout />
          )}     
        </Menu>
    );
}

export default Navbar;