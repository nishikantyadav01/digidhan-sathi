import React, { useState } from 'react';
import { quizQuestions, QuizQuestion } from './quiz-data';
import { Container, Header, Form, Radio, Button, Segment, Message, Icon } from 'semantic-ui-react';
import './quiz.css';

const QuizPage: React.FC = () => {
  const [answers, setAnswers] = useState<number[]>(Array(quizQuestions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleOptionChange = (questionIndex: number, selectedIndex: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] = selectedIndex;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quizQuestions.forEach((q, index) => {
      if (answers[index] === q.correctAnswerIndex) {
        calculatedScore += 1;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
    // const calculatedScore = 8; // Replace with real score logic
    // setScore(calculatedScore);
    setShowMessage(true);

    // Optional: auto-hide popup after 5 seconds
    // setTimeout(() => setShowMessage(false), 5000);
  };

  const handleClose = () => setShowMessage(false);

  return (
    <Container text style={{ marginTop: '1rem', padding: '1rem' }}>
      <Header as="h2" dividing>
        📚 Financial Literacy Quiz (India)
      </Header>
      <div className="main-content">
        <div className="left-content">
          {quizQuestions.map((q: QuizQuestion, qIndex: number) => (
            <Segment key={qIndex}>
              <Header as="h4">{q.question}</Header>
              <Form>
                {q.options.map((option, oIndex) => (
                  <Form.Field key={oIndex}>
                    <Radio
                      label={option}
                      name={`question-${qIndex}`}
                      value={oIndex}
                      checked={answers[qIndex] === oIndex}
                      onChange={() => handleOptionChange(qIndex, oIndex)}
                    />
                  </Form.Field>
                ))}
              </Form>
            </Segment>
          ))}

          <Button primary onClick={handleSubmit} disabled={submitted}>
            Submit Quiz
          </Button>
        </div>
        {/* <div className="right-content"> */}
        {/* </div> */}
      </div>
      {/* {showMessage && (
        <div className="centered-popup">
          <Message success header="Quiz Submitted!" content={`Your score is ${score}/10. 🎉`} />
        </div>
      )} */}
      {showMessage && (
        <>
          <div className="popup-backdrop" onClick={handleClose} />
          <div className="centered-popup">
            <Message
              success
              onDismiss={handleClose}
              header={
                <div
                  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                  <span>Quiz Submitted!</span>
                </div>
              }
              content={`Your score is ${score}/${quizQuestions.length}. 🎉`}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default QuizPage;
