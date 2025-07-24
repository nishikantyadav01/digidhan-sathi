import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './ClientAdvisor.css';

interface Question {
  key: string;
  en: string;
  hi: string;
  mr: string;
}

interface ClientAdvisorVoiceWizardProps {
  setAiResponse: (response: string) => void;
}

const questionsData: Question[] = [
  {
    key: 'education',
    en: 'What is your education?',
    hi: 'आपकी शिक्षा क्या है?',
    mr: 'तुमचं शिक्षण काय आहे?',
  },
  { key: 'age', en: 'What is your age?', hi: 'आपकी उम्र क्या है?', mr: 'तुमचं वय काय आहे?' },
  {
    key: 'salary',
    en: 'What is your monthly income?',
    hi: 'आपकी मासिक आय कितनी है?',
    mr: 'तुमचं मासिक उत्पन्न काय आहे?',
  },
  {
    key: 'savings',
    en: 'How much do you save monthly?',
    hi: 'आप हर महीने कितनी बचत करते हैं?',
    mr: 'तुम दर महिन्याला किती बचत करता?',
  },
  // {
  //   key: 'support',
  //   en: 'Which type of finance support do you need?',
  //   hi: 'आपको किस प्रकार की वित्तीय सहायता की आवश्यकता है?',
  //   mr: 'तुम्ही कोणत्याही सरकारी योजनेंत भाग घेतलाय का?',
  // },
];

const ClientAdvisorVoiceWizard: React.FC<ClientAdvisorVoiceWizardProps> = ({ setAiResponse }) => {
  const [show, setShow] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [lang, setLang] = useState<'en' | 'hi' | 'mr'>('hi');
  const [retryCount, setRetryCount] = useState<number>(0);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const { t } = useTranslation();

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert('Speech recognition not supported');
    }
  }, []);

  useEffect(() => {
    if (!listening && transcript.trim() !== '') {
      saveAnswer(transcript.trim());
    }
  }, [listening]);

  const speak = (text: string, callback?: () => void) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'hi' ? 'hi-IN' : lang === 'mr' ? 'mr-IN' : 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;

    utterance.onend = () => {
      if (callback) callback();
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleClose = () => {
  setShow(false);

  // Stop any ongoing voice/speech recognition or speaking
  SpeechRecognition.stopListening();
  window.speechSynthesis.cancel();

  // Clear timeout
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
};


  const startInterview = () => {
    setShow(true);
    setCurrent(0);
    setAnswers({});
    setRetryCount(0);
    setTimeout(() => {
      askQuestion(0);
    }, 500);
  };

  const askQuestion = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const q = questionsData[index];
    setRetryCount(0);
    SpeechRecognition.stopListening();

    speak(q[lang], () => {
      startListeningWithTimeout();
    });
  };

  const startListeningWithTimeout = () => {
    resetTranscript();
    SpeechRecognition.startListening({
      continuous: false,
      language: lang === 'hi' ? 'hi-IN' : lang === 'mr' ? 'mr-IN' : 'en-US',
    });

    timeoutRef.current = setTimeout(() => {
      handleNoResponse();
    }, 5000);
  };

  const handleNoResponse = () => {
    SpeechRecognition.stopListening();

    if (retryCount < 2) {
      setRetryCount((prev) => prev + 1);
      const message =
        lang === 'hi'
          ? 'मैंने आपकी बात नहीं सुनी, कृपया दोहराएं।'
          : lang === 'mr'
          ? 'मी तुमचं उत्तर ऐकू शकलो नाही, पुन्हा सांगा.'
          : 'I could not hear you, please repeat.';

      speak(message, () => {
        startListeningWithTimeout();
      });
    } else {
      saveAnswer('No response');
    }
  };

  const saveAnswer = (text: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const key = questionsData[current].key;
    const newAnswers = { ...answers, [key]: text };
    setAnswers(newAnswers);
    resetTranscript();

    if (current < questionsData.length - 1) {
      setCurrent(current + 1);
      setRetryCount(0);
      askQuestion(current + 1);
    } else {
      finishInterview(newAnswers);
    }
  };

  const finishInterview = async (collectedAnswers: Record<string, string>) => {
    console.log('Collected Profile: ', collectedAnswers);

    SpeechRecognition.stopListening();

    const thankYouMsg =
      lang === 'hi'
        ? 'धन्यवाद! हम आपके उत्तरों के अनुसार सुझाव देंगे।'
        : lang === 'mr'
        ? 'धन्यवाद! आम्ही तुमच्या उत्तरांनुसार उपाय सुचवू.'
        : 'Thank you! We will suggest solutions based on your answers.';

    speak(thankYouMsg);
    setTimeout(() => setShow(false), 4000);

    try {
      setAiResponse('loading');

      const res = await fetch('http://localhost:5000/api/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(collectedAnswers),
      });

      const data = await res.json();
      if (data.suggestion) {
        console.log(data.suggestion);
        setAiResponse(data.suggestion);
      } else {
        setAiResponse('No suggestions returned from AI.');
      }
    } catch (err) {
      console.error('Error contacting backend:', err);
      setAiResponse('Server error. Please try again later.');
    }
  };

  return (
    <>
      <Button
        variant="warning"
        style={{
          position: 'fixed',
          top: '30%',
          right: '16px',
          transform: 'rotate(-90deg)',
          transformOrigin: 'right center',
          zIndex: 1050,
          borderRadius: '8px 8px 0 0',
          padding: '8px 20px',
          fontWeight: 'bold',
          fontSize: '14px',
          boxShadow: '0px 2px 6px rgba(0,0,0,0.2)',
        }}
        onClick={startInterview}
      >
        {t('get_to_know')}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{t('get_to_know')}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Card body>
            <p>
              <strong>{t('current_question')}:</strong> {questionsData[current][lang]}
            </p>
            <p>
              <strong>{t('listening')}:</strong> {listening ? '🎤...' : 'Stopped'}
            </p>
            <p>
              <strong>{t('your_answer')}:</strong> {transcript}
            </p>

            <p className="mt-3">
              <strong>{t('collected')}:</strong>
            </p>
            <pre>{JSON.stringify(answers, null, 2)}</pre>

            <label className="mt-3">Language:</label>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'hi' | 'mr')}
              className="form-select"
            >
              <option value="hi">हिंदी</option>
              <option value="mr">मराठी</option>
              <option value="en">English</option>
            </select>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ClientAdvisorVoiceWizard;
