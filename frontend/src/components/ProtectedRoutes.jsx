import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkSession } from '../api/auth';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        const response = await checkSession();
        if (response.user) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error(error);
      }
    };

    verifySession();
  }, []);

  if (isAuthenticated === null) {
    return null; // ou un loader
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
