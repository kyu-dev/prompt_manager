import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { checkSession } from '../api/auth';

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifySession = async () => {
      const result = await checkSession();

      if (result?.user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        if (result?.error) {
          console.error(result.error);
        }
      }
    };

    verifySession();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
