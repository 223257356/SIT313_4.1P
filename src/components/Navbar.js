import React from 'react';
import { Menu, Input, Button } from 'semantic-ui-react';
import '../styles/Navbar.css';

const Navbar = () => (
  <Menu style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
    <Menu.Item header style={{ flex: '0 0 auto' }}>DEV@Deakin</Menu.Item>
    <Menu.Item style={{ flexGrow: 1 }}>
      <Input icon="search" placeholder="Search..." style={{ width: '100%' }} />
    </Menu.Item>
    <Menu.Menu position="right" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
      <Menu.Item>
      <Button style={{ backgroundColor: 'darkcyan', color: 'white' }}>Post</Button>
      </Menu.Item>
      <Menu.Item>
        <Button>Login</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;
