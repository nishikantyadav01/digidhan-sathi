import React from 'react';
import { Container, Header, Segment, Grid, Icon, Button } from 'semantic-ui-react';
import WidgetTile from './widgetTile';
import './homePage.css';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Button as BootstrapButton } from 'react-bootstrap';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    console.log('Notifications clicked!');
  };

  const handleEducationClick = () => {
    navigate('/education');
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
                title="E-Learning Support"
                image="src/assets/images/elearning.jpeg"
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
            <Grid.Column className="widgets-col">
              <WidgetTile
                title="CSR-initiatives"
                image="src/assets/images/csrInitiatives.png"
                description="Connect NGOs, entrepreneurs, and corporates for social impact."
                link="/csr-dashboard"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Segment vertical className="video-section" textAlign="center">
        <Header as="h3" className="video-title">
          DigiDhan Saathi Introduction
        </Header>
        <iframe
          className="embedded-iframe"
          src="src/assets/videos/DigiDhan_Saathi_introduction_video_V2.mp4"
          title="Financial Inclusion"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Segment>
      <Row className="justify-content-center mb-5 wealth-section">
        <Col>
          <div className="financial-section">
            <h3 className="display-4 fw-bold financial-heading">Understand. Plan. Prosper.</h3>
            <p className="lead fw-semibold financial-subtext mt-3">
              Learn to Build and Manage Wealth Smartly
            </p>
            <div className="mt-4">
              <BootstrapButton onClick={handleEducationClick} className="financial-btn" size="lg">
                Get Started
              </BootstrapButton>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mb-5 home-footer">
        {/* Our Impact */}
        <Col>
          <section className="py-5">
            <Container className="px-4 py-5 rounded shadow-sm">
              <h2 className="fw-bold">Our Impact</h2>
              <p className="text-muted mb-4">Making a difference in rural communities</p>
              <Row className="g-4">
                <Col md={3}>
                  <h4 className="text-primary fw-bold">500+</h4>
                  <p className="text-muted">Women Entrepreneurs</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-success fw-bold">100+</h4>
                  <p className="text-muted">CSR Events</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-info fw-bold">50+</h4>
                  <p className="text-muted">Corporate Partners</p>
                </Col>
                <Col md={3}>
                  <h4 className="text-danger fw-bold">₹2Cr+</h4>
                  <p className="text-muted">Business Value Created</p>
                </Col>
              </Row>
            </Container>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
