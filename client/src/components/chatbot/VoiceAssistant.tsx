import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { FaBullhorn, FaBrain } from 'react-icons/fa';
import FeedbackWidget from './ClientAdvisorVoiceWizard';

const VoiceAssistant: React.FC = () => {
  const [suggestions, setAiSuggestions] = useState<string>('');

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
        <Card className="mt-4 shadow-sm border-success">
          <Card.Body>
            <h5 className="text-success">
              <FaBrain /> AI Suggestions:
            </h5>
            <p style={{ whiteSpace: 'pre-wrap' }}>{suggestions}</p>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-muted mt-4">Use the "Get to Know You" wizard to get suggestions.</p>
      )}

      <FeedbackWidget setAiResponse={setAiSuggestions} />
    </div>
  );
};

export default VoiceAssistant;
