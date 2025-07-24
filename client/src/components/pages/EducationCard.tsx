import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './educationPage.css';

interface Props {
  title: string;
  image: string;
  description: string;
  link: string;
}

const EducationCard: React.FC<Props> = ({ title, image, description, link }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="education-card"
      onClick={() => navigate(link)}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
    >
      {/* <Image src={image} wrapped ui={false} /> */}
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EducationCard;
