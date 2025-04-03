import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem('user');

  if (!user || user === 'undefined' || user === 'null') {
    // on S'assure que il n'y a rien dans le localstorage car au lancement localstorage est sur undefine ce qui est condirer user = true
    return <Navigate to="/login" replace />;
  }
  return children;
}
