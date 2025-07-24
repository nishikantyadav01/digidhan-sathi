// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigations';
// import Home from './components/home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
import Login from './components/login';
import ProtectedRoute from './components/core/protectedRoute';
import { AuthProvider } from './components/core/auth/authContext';
import 'semantic-ui-css/semantic.min.css'; // Semantic UI base
import './assets/sematic-theme.css'; // Your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatbotPage from './components/chatbot/chatbot';
import ElearningPage from './components/pages/eLearningPage';
import EducationPage from './components/pages/educationPage';
import HomePage from './components/pages/homePage';
import './i18n';
import ScrollToTop from './components/core/scrollToTop';
import ClientAdvisorVoiceWizard from './components/chatbot/ClientAdvisorVoiceWizard';
import VoiceAssistant from './components/chatbot/VoiceAssistant';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/elearning" element={<ElearningPage />} />
          <Route path="/voiceWizard" element={<VoiceAssistant />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
