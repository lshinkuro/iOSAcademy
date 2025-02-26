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
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminMaterials } from './pages/admin/AdminMaterials';
import { AdminUsers } from './pages/admin/AdminUsers';

const GOOGLE_CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

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
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Routes>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="materials" element={<AdminMaterials />} />
                    <Route path="users" element={<AdminUsers />} />
                  </Routes>
                </ProtectedRoute>
              }
            />

            {/* Student Routes */}
            <Route
              path="/student/*"
              element={
                <ProtectedRoute requiredRole="student">
                  <Routes>
                    <Route path="materials" element={<Materials />} />
                    <Route path="materials/:id" element={<MaterialDetail />} />
                    <Route path="materials/:id/topics/:topic" element={<TopicDetail />} />
                    <Route path="enroll" element={<EnrollmentForm />} />
                    <Route path="projects" element={<Projects />} />
                  </Routes>
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