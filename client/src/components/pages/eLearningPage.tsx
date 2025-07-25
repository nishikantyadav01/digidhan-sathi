import React from 'react';
import { Container, Header, Segment, Grid, Icon, Button } from 'semantic-ui-react';
import './eLearning.css';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';

const videos = {
  personalized: [
    {
      title: 'Business Loan Help',
      youtubeId: 'src/assets/videos/EducationLoanonAgricultural.mp4',
    },
    {
      title: 'How to avoid Scams',
      youtubeId: 'src/assets/videos/GovernmentSchemesForLoans.mp4',
    },
    {
      title: 'Loans for Woman Entrepreneur',
      youtubeId: 'src/assets/videos/LoanschemesforFemales.mp4',
    },
  ],
  common: [
    {
      title: 'Build trust with Digital payments',
      youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
    },
    {
      title: 'Credit Score Explained',
      youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
    },
    {
      title: 'Saving for Retirement Early',
      youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
    },
  ],
};

const ElearningPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    console.log('Notifications clicked!');
  };

  return (
    <Container
      className="elearning-page"
      style={{ marginTop: '2em', minHeight: '100vh', height: '100%' }}
    >
      <Segment vertical className="main-segment">
        <div className="header-gradient">
          <Header as="h2" icon textAlign="center" className="header-box">
            <Icon name="laptop" circular />
            <Header.Content>E-Learning Support</Header.Content>
          </Header>
          <div className="btn-block">
            <Button circular icon color="blue" size="mini" onClick={handleNotificationClick}>
              <Icon name="bell" />
            </Button>
            <Button
              color="blue"
              className="logout-btn"
              icon
              size="medium"
              labelPosition="left"
              onClick={() => navigate('/login')}
            >
              <Icon name="sign-out" />
              Logout
            </Button>
          </div>
        </div>
        <Row className="d-flex justify-content-between">
          <p
            className="ui text "
            style={{ width: '40%', fontSize: '1.5rem', fontWeight: '600', paddingLeft: '35px' }}
          >
            Handpicked Videos for Your Journey
          </p>
          <p
            onClick={() => navigate('/csr-dashboard')}
            className="ui text "
            style={{ width: '40%', cursor: 'pointer', fontSize: '1.5rem', fontWeight: '600', color: '#4406a2', textAlign: 'right' }}
          >
            Click here for our CSR initiatives!
          </p>
        </Row>
        <Grid vertical stackable columns={3} doubling className="elearning-grid">
          {videos.personalized.map((video, index) => (
            <Grid.Column key={index}>
              <Segment raised>
                <Header as="h4" textAlign="center">
                  {video.title}
                </Header>
                <div className="video-wrapper">
                  <video controls className="video-player">
                    <source src={video.youtubeId} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
        <Row className="d-flex justify-content-between mt-4">
          <p
            className="ui text "
            style={{ width: '40%', fontSize: '1.5rem', fontWeight: '600', paddingLeft: '35px', paddingBottom: '10px' }}
          >
            Learning Hub
          </p>
        </Row>
        <Grid vertical stackable columns={3} doubling className="elearning-grid">
          {videos.common.map((video, index) => (
            <Grid.Column key={index}>
              <Segment raised>
                <Header as="h4" textAlign="center">
                  {video.title}
                </Header>
                <div className="video-wrapper">
                  <video controls className="video-player">
                    <source src={video.youtubeId} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Segment>
    </Container>
  );
};

export default ElearningPage;
