import React, { useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { FaBullhorn, FaBrain } from 'react-icons/fa';
import FeedbackWidget from './ClientAdvisorVoiceWizard';
import { useNavigate } from 'react-router-dom';

const VoiceAssistant: React.FC = () => {
  const [suggestions, setAiSuggestions] = useState<string>('');
  const navigate = useNavigate();
  const hasKeyword = (key: string) => suggestions.toLowerCase().includes(key.toLowerCase());

  return (
    <div className="container mt-5">
      <h2 className='header-txt'>
        <FaBullhorn /> AI Voice Enabled Financial Advisor
      </h2>

      {suggestions === 'loading' ? (
        <Card className="mt-4 shadow-sm p-4 text-center">
          <Spinner animation="border" role="status" />
          <p className="mt-3">Fetching your personalized suggestions...</p>
        </Card>
      ) : suggestions ? (
        <>
          <Card className="mt-4 shadow-sm border-success" style={{ padding: '2rem' }}>
            <Card.Body>
              <h5 className="text-success" style={{ paddingBottom: '1rem' }}>
                <FaBrain /> AI Suggestions:
              </h5>
              <p style={{ whiteSpace: 'pre-wrap' }}>{suggestions}</p>
              <p
                onClick={() => navigate('/elearning')}
                className="ui text"
                style={{ cursor: 'pointer', fontWeight: '600', color: '#27279b' }} >
                Click here for your personlized learning suggestions!
              </p>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p className="text-muted mt-4 blink" style={{fontWeight: '600', fontSize: '1.2em'}}>Use the "Get to Know You" wizard to get suggestions.</p>
      )}

      <FeedbackWidget setAiResponse={setAiSuggestions} />
    </div>
  );
};

export default VoiceAssistant;
