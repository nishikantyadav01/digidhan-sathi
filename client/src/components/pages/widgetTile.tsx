import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title: string;
  image: string;
  description: string;
  link: string;
}

const WidgetTile: React.FC<Props> = ({ title, image, description, link }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(link)}
      style={{ cursor: 'pointer', boxShadow: '0 1px 5px rgba(0,0,0,0.1)' }}
    >
      <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
        <Image src={image} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
      </div>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default WidgetTile;
