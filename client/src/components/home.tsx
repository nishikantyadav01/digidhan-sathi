import React, { useEffect, useState } from 'react';
import { Menu, Segment, Header, Icon } from 'semantic-ui-react';
import { useAuth } from './core/auth/authContext';
import { authService } from './core/auth/auth';
import type { MenuItemProps } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './../assets/home.css';
import Footer from './footer';

const HomePage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('home');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const LogoutIcon = () => <Icon name="sign-out" />;

  useEffect(() => {
    console.log(!!user + ' => ', user);
    setIsAuth(!!user);
  }, [user]);

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>, data: MenuItemProps) => {
    if (data.name) {
      setActiveItem(data.name);
    }
    switch (data.name) {
      case 'home':
        navigate('/');
        break;
      case 'chatbot':
        navigate('/chatbot');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'contact':
        navigate('/contact');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'logout':
        authService.logout();
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Horizontal Menu */}
      <Menu pointing secondary stackable>
        <Menu.Item name="home" active={activeItem === 'home'} onClick={handleItemClick}>
          <Icon name="home" /> Home
        </Menu.Item>
        <Menu.Item name="chatbot" active={activeItem === 'chatbot'} onClick={handleItemClick}>
          VoiceInput
        </Menu.Item>
        <Menu.Item name="services" active={activeItem === 'services'} onClick={handleItemClick}>
          Services
        </Menu.Item>
        <Menu.Item name="contact" active={activeItem === 'contact'} onClick={handleItemClick}>
          Contact
        </Menu.Item>
        <Menu.Menu position="right">
          {!isAuth ? (
            <Menu.Item name="login" active={activeItem === 'login'} onClick={handleItemClick}>
              Login
            </Menu.Item>
          ) : (
            <Menu.Item name="logout" active={activeItem === 'logout'} onClick={handleItemClick}>
              <LogoutIcon /> Logout
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>

      {/* Main Content */}
      <div className="container">
        <Segment vertical textAlign="center" style={{ padding: '0em', height: '91.6%' }}>
          <div style={{ width: '100%', height: '100%' }}>
            <Header as="h1" icon>
              Welcome to Hack4Inclusion
              <Header.Subheader>Create a wealth with Hack4Inclusion!</Header.Subheader>
            </Header>
          </div>
          <Footer />
        </Segment>
      </div>
    </>
  );
};

export default HomePage;
