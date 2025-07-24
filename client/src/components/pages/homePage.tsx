import React from 'react';
import { Container, Header, Segment, Embed, Grid } from 'semantic-ui-react';
import WidgetTile from './widgetTile';
import './homePage.css';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '0 10px', backgroundColor: '#000000' }}>
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
        <Segment vertical className="widgets" style={{ backgroundColor: 'rgb(125 94 94 / 92%)' }}>
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
