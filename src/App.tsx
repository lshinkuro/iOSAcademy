import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Materials } from './pages/Materials';
import { MaterialDetail } from './pages/MaterialDetail';
import { TopicDetail } from './pages/TopicDetail';
import { Login } from './pages/Login';
import { EnrollmentForm } from './pages/EnrollmentForm';
import { Projects } from './pages/Projects';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useBootcampStore } from './store/bootcampStore';

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual Google Client ID

function App() {
  const { fetchPublicData } = useBootcampStore();

  useEffect(() => {
    fetchPublicData();
  }, [fetchPublicData]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/enroll" element={<EnrollmentForm />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/materials/:id"
              element={
                <ProtectedRoute>
                  <MaterialDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/materials/:id/topics/:topic"
              element={
                <ProtectedRoute>
                  <TopicDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;