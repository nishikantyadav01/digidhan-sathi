// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Icon,
  Menu,
  Sidebar,
  Segment,
} from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const menuItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'contact', path: '/contact' },
    { name: 'login', path: '/login' },
  ];
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {/* Desktop Menu */}
      { isMobile &&
        <Menu pointing secondary>
          {menuItems.slice(0, 4).map((item) => (
            <Menu.Item
              key={item.name}
              name={item.name}
              active={location.pathname === item.path}
              as={Link}
              to={item.path}
            />
          ))}
          <Menu.Menu position="right">
            <Menu.Item
              name="login"
              active={location.pathname === '/login'}
              as={Link}
              to="/login"
            />
          </Menu.Menu>
        </Menu>
      }

      {/* Mobile Menu */}
      { isMobile && 
        <>
            <Menu secondary>
            <Menu.Item onClick={() => setSidebarOpened(true)}>
                <Icon name="sidebar" />
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item header>MySite</Menu.Item>
            </Menu.Menu>
            </Menu>

            <Sidebar.Pushable as={Segment} style={{ minHeight: '100vh' }}>
            <Sidebar
                as={Menu}
                animation="overlay"
                onHide={() => setSidebarOpened(false)}
                vertical
                visible={sidebarOpened}
            >
                {menuItems.map((item) => (
                <Menu.Item
                    key={item.name}
                    name={item.name}
                    as={Link}
                    to={item.path}
                    active={location.pathname === item.path}
                    onClick={() => setSidebarOpened(false)}
                />
                ))}
            </Sidebar>
            <Sidebar.Pusher dimmed={sidebarOpened}>
                <Segment basic>
                <div style={{ width: '100%' }} />
                </Segment>
            </Sidebar.Pusher>
            </Sidebar.Pushable>
        </>
      }
    </>
  );
};

export default Navbar;
