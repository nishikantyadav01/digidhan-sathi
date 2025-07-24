import React from 'react';
import { Container, Header, Segment, Grid } from 'semantic-ui-react';
import WidgetTile from './widgetTile';
import './homePage.css';
import { useAuth } from '../contexts/AuthContext'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // redirect after logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div style={{ padding: '0 10px', backgroundColor: '#000000', position: 'relative' }}>
      {/* Logout button top right */}
      <button
        onClick={handleLogout}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: '8px 12px',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          zIndex: 1000,
          fontWeight: 'bold',
        }}
        data-testid="logout-btn"
        aria-label="Logout"
      >
        Log Out
      </button>

      <Container className="home-page-container">
        {/* Page Header */}
        <div className="hero-section">
          <Segment vertical textAlign="center" className="header-box">
            <Container text>
              <Header as="h1" className="main-title">
                Hack4Inclusion
              </Header>
              <Header as="h3" className="sub-title">
                Empowering Your Financial Future
              </Header>
            </Container>
          </Segment>
        </div>

        {/* Intro Video */}
        <Segment basic textAlign="center" className="intro-video">
          <iframe
            src="https://www.youtube.com/embed/AJLFcbzTBbg"
            title="Financial Inclusion in the Digital Age"
            width={840}
            height={350}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Segment>

        {/* Widgets Section */}
        <Segment
          vertical
          className="widgets"
          style={{ backgroundColor: 'rgb(125 94 94 / 92%)' }}
        >
          <Header as="h2" textAlign="center">
            Explore Our Services
          </Header>
          <Grid stackable columns={3} padded="vertically" centered>
            <Grid.Row>
              <Grid.Column className="widgets-col">
                <WidgetTile
                  title="Voice-based Financial Advisor"
                  image="src/assets/images/alexander-shatov.jpg"
                  description="Speak to an AI advisor to manage your finances smartly."
                  link="/voiceWizard"
                />
              </Grid.Column>
              <Grid.Column className="widgets-col">
                <WidgetTile
                  title="Children's Higher Education"
                  image="src/assets/images/premium_photo.jpg"
                  description="Plan and save for your child’s academic future."
                  link="/education"
                />
              </Grid.Column>
              <Grid.Column className="widgets-col">
                <WidgetTile
                  title="E-Learning Support"
                  image="src/assets/images/kelly-sikkema.jpg"
                  description="Learn essential financial skills anytime, anywhere."
                  link="/elearning"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    </div>
  );
};

export default HomePage;
