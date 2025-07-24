import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { FaBullhorn, FaBrain } from 'react-icons/fa';
import FeedbackWidget from './ClientAdvisorVoiceWizard';

const VoiceAssistant: React.FC = () => {
  const [suggestions, setAiSuggestions] = useState<string>('');

  const suggestionVideos = [
    {
      keyword: 'sukanya samriddhi',
      title: 'Sukanya Samriddhi Yojana',
      url: 'https://www.youtube.com/embed/dU2aM2vRdxQ',
    },
    {
      keyword: 'mutual fund',
      title: 'Mutual Funds Explained',
      url: 'https://www.youtube.com/embed/4zK_LwPQjmw',
    },
    {
      keyword: 'recurring deposit',
      title: 'Recurring Deposit (RD)',
      url: 'https://www.youtube.com/embed/RE1EgdFr0Y0',
    },
    {
      keyword: 'fixed deposit',
      title: 'Fixed Deposit (FD)',
      url: 'https://www.youtube.com/embed/2ASfKePkaUI',
    },
    {
      keyword: 'ppf',
      title: 'Public Provident Fund (PPF)',
      url: 'https://www.youtube.com/embed/ULe8WZKpi_o',
    },
    {
      keyword: 'accident insurance',
      title: 'Personal Accident Insurance Explained',
      url: 'https://www.youtube.com/embed/L-AxbCDifjU',
    },
    {
      keyword: 'term insurance',
      title: 'Term Insurance Made Easy',
      url: 'https://www.youtube.com/embed/qj-Fmz1z1O4',
    },
  ];

  const hasKeyword = (key: string) => suggestions.toLowerCase().includes(key.toLowerCase());

  return (
    <div className="container mt-5">
      <h2>
        <FaBullhorn /> Voice Assistant Main Screen
      </h2>

      {suggestions === 'loading' ? (
        <Card className="mt-4 shadow-sm p-4 text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-3">Fetching your personalized suggestions...</p>
        </Card>
      ) : suggestions ? (
        <>
          <Card className="mt-4 shadow-sm border-success">
            <Card.Body>
              <h5 className="text-success">
                <FaBrain /> AI Suggestions:
              </h5>
              <p style={{ whiteSpace: 'pre-wrap' }}>{suggestions}</p>
            </Card.Body>
          </Card>
          {suggestionVideos.map(({ keyword, title, url }) =>
            hasKeyword(keyword) ? (
              <Card key={keyword} className="mt-4 shadow-sm">
                <Card.Body>
                  <h5>{title}</h5>
                  <iframe
                    width="100%"
                    height="315"
                    src={url}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Card.Body>
              </Card>
            ) : null,
          )}
        </>
      ) : (
        <p className="text-muted mt-4">Use the "Get to Know You" wizard to get suggestions.</p>
      )}

      <FeedbackWidget setAiResponse={setAiSuggestions} />
    </div>
  );
};

export default VoiceAssistant;
