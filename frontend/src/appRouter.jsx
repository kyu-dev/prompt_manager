import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './auth/LoginPage';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoutes';
import Blog from './pages/Blog';
import PostPage from './pages/PostPage';
import Library from './pages/Library';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<PostPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
