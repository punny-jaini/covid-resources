import { Menu} from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    // console.log(isLoggedIn);
    // style={{ fontSize: '22px', padding: "1%", display: 'flex', justifyContent:'flex-end' }}
    return (
        <Menu mode="inline" defaultSelectedKeys={[window.location.pathname]} inlineCollapsed={false}>
          {/* <Menu.Item>
            <Link to="/" style={{ fontWeight: '600', color: 'white' }}>Resources</Link>
          </Menu.Item> */}
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
        </Menu>
    );
}

export default Navbar;