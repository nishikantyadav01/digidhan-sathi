import React from 'react';
import { Container, Header, Segment, Grid, Icon, Button } from 'semantic-ui-react';
import WidgetTile from './widgetTile';
import './homePage.css';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    console.log('Notifications clicked!');
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <Header as="h1" className="main-title">
            DigiDhan Saathi
          </Header>
          <div className="btn-block">
            <Button circular icon color="blue" onClick={handleNotificationClick}>
              <Icon name="bell" />
            </Button>
            <Button
              color="blue"
              className="logout-btn"
              icon
              labelPosition="left"
              onClick={() => navigate('/login')}
            >
              <Icon name="sign-out" />
              Logout
            </Button>
          </div>
        </div>
      </div>
      {/* <Header as="h3" className="sub-title">Empowering Your Financial Future</Header> */}

      <Container className="widget-section">
        <Grid stackable columns={4} doubling centered>
          <Grid.Row>
            <Grid.Column>
              <WidgetTile
                title="Voice-based Financial Advisor"
                image="src/assets/images/alexander-shatov.jpg"
                description="Speak to an AI advisor to manage your finances smartly."
                link="/voiceWizard"
              />
            </Grid.Column>
            <Grid.Column>
              <WidgetTile
                title="Children's Higher Education"
                image="src/assets/images/premium_photo.jpg"
                description="Plan and save for your child’s academic future."
                link="/education"
              />
            </Grid.Column>
            <Grid.Column>
              <WidgetTile
                title="E-Learning Support"
                image="src/assets/images/kelly-sikkema.jpg"
                description="Learn essential financial skills anytime, anywhere."
                link="/elearning"
              />
            </Grid.Column>
            <Grid.Column>
              <WidgetTile
                title="Quiz"
                image="src/assets/images/quiz.webp"
                description="Apply your financial skills with an interactive quiz."
                link="/quiz"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>

      <Segment vertical className="video-section" textAlign="center">
        <Header as="h3" className="video-title">
          Financial Inclusion in the Digital Age
        </Header>
        <iframe
          src="https://www.youtube.com/embed/AJLFcbzTBbg"
          title="Financial Inclusion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Segment>
    </div>
  );
};

export default HomePage;
