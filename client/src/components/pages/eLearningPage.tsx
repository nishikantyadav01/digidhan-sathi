import React from 'react';
import { Container, Header, Segment, Grid, Embed, Icon, Button } from 'semantic-ui-react';
import './eLearning.css';
import { useNavigate } from 'react-router-dom';

const videos = [
  {
    title: 'Financial Literacy Basics',
    youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
  },
  {
    title: 'How to Budget Your Money',
    youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
  },
  {
    title: 'Investing 101 for Beginners',
    youtubeId: 'https://www.youtube.com/embed/AJLFcbzTBbg',
  },
  {
    title: 'Debt Management Tips',
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
];

const ElearningPage: React.FC = () => {
  const navigate = useNavigate();
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
            <Button
              icon
              circular
              onClick={() => navigate('/')}
              size="mini"
              color="blue"
              style={{ marginRight: '1em' }}
              className="back-btn"
            >
              <Icon name="arrow left" />
            </Button>
          </Header>
        </div>
        <Grid vertical stackable columns={3} doubling className="elearning-grid">
          {videos.map((video, index) => (
            <Grid.Column key={index}>
              <Segment raised>
                <Header as="h4" textAlign="center">
                  {video.title}
                </Header>
                {/* <Embed id={video.youtubeId} source="youtube" iframe={{ allowFullScreen: true }} /> */}
                <iframe
                  src={video.youtubeId}
                  width={358}
                  title="Financial Inclusion in the Digital Age"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Segment>
            </Grid.Column>
          ))}
        </Grid>
      </Segment>
    </Container>
  );
};

export default ElearningPage;
