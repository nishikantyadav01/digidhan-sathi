import React from 'react';
import { Container, Header, Segment, Card, Icon, Button } from 'semantic-ui-react';
import EducationCard from './EducationCard';
import { useNavigate } from 'react-router-dom';

const educationServices = [
  {
    title: 'Scholarship Explorer',
    image: '/assets/scholarship.jpg',
    description:
      'Find national and international scholarships that suit your child’s education level.',
    link: '/scholarships',
  },
  {
    title: 'Smart Savings Plans',
    image: '/assets/savings.jpg',
    description: 'Tailored savings plans to meet your education goals step-by-step.',
    link: '/savings-plans',
  },
  {
    title: 'Govt Schemes & Benefits',
    image: '/assets/government.jpg',
    description: 'Explore government-backed plans like Sukanya Samriddhi, PPF, and more.',
    link: '/govt-benefits',
  },
  {
    title: 'Scholarship Explorer',
    image: '/assets/scholarship.jpg',
    description:
      'Find national and international scholarships that suit your child’s education level.',
    link: '/scholarships',
  },
  {
    title: 'Smart Savings Plans',
    image: '/assets/savings.jpg',
    description: 'Tailored savings plans to meet your education goals step-by-step.',
    link: '/savings-plans',
  },
  {
    title: 'Govt Schemes & Benefits',
    image: '/assets/government.jpg',
    description: 'Explore government-backed plans like Sukanya Samriddhi, PPF, and more.',
    link: '/govt-benefits',
  },
];

const EducationPage: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    console.log('Notifications clicked!');
  };
  return (
    <Container className="education-page" style={{ marginTop: '2em' }}>
      <Segment basic textAlign="center" className="main-segment">
        <div className="header-gradient">
          <Header as="h2" icon textAlign="center" className="header-box">
            <Icon name="graduation" circular />
            <Header.Content>Children’s Higher Education Planning</Header.Content>
          </Header>
          <div className="btn-block">
            <Button circular icon color="blue" size="mini" onClick={handleNotificationClick}>
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

        <Card.Group centered stackable itemsPerRow={2} className="cards-grp">
          {educationServices.map((service, i) => (
            <EducationCard key={i} {...service} />
          ))}
        </Card.Group>
      </Segment>
    </Container>
  );
};

export default EducationPage;
