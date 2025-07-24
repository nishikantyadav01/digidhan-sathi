import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import ProtectedRoute from './components/core/protectedRoute';
// import { AuthProvider } from './components/core/auth/authContext';
import { AuthProvider } from './components/contexts/AuthContext';
import 'semantic-ui-css/semantic.min.css'; // Semantic UI base
import './assets/sematic-theme.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatbotPage from './components/chatbot/chatbot';
import ElearningPage from './components/pages/eLearningPage';
import EducationPage from './components/pages/educationPage';
import HomePage from './components/pages/homePage';
import './i18n';
import ScrollToTop from './components/core/scrollToTop';
import VoiceAssistant from './components/chatbot/VoiceAssistant';
import SignUp from './components/SignUp/SignUp';
import QuizPage from './components/fin-quiz/quiz-page';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<ProtectedRoute><ChatbotPage /></ProtectedRoute>} />
          <Route path="/education" element={<ProtectedRoute><EducationPage /></ProtectedRoute>} />
          <Route path="/elearning" element={<ProtectedRoute><ElearningPage /></ProtectedRoute>} />
          <Route path="/voiceWizard" element={<ProtectedRoute><VoiceAssistant /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
