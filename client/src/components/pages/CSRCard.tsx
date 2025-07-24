import React from 'react';
import './CsrPage.css';

interface CSRCardProps {
  title: string;
  organizer: string;
  location: string;
  description: string;
}

const CSRCard: React.FC<CSRCardProps> = ({ title, organizer, location, description }) => {
  return (
    <div className="csr-card">
      <h5>{title}</h5>
      <p><strong>Organizer:</strong> {organizer}</p>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
    </div>
  );
};

export default CSRCard;
