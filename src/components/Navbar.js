import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <Menu style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
    <Menu.Item header style={{ flex: '0 0 auto' }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> {/* Use Link to wrap the text */}
        DEV@Deakin
      </Link>
    </Menu.Item>
    <Menu.Item style={{ flexGrow: 1 }}>
      <Input icon="search" placeholder="Search..." style={{ width: '100%' }} />
    </Menu.Item>
    <Menu.Menu position="right" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
      <Menu.Item>
      <Button style={{ backgroundColor: 'darkcyan', color: 'white' }}>Post</Button>
      </Menu.Item>
      <Menu.Item>
      <Link to="/login"> {/* Use Link for navigation */}
          <Button>Login</Button>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/signup"> {/* Add a Signup button */}
          <Button>Signup</Button>
        </Link>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
