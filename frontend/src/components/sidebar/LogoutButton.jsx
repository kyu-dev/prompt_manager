import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { logoutUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';

export function LogoutButton({ isOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };

  return (
    <div>
      <Button
        onClick={handleLogout}
        variant="destructive"
        className={isOpen ? 'justify-start' : 'justify-center'}
      >
        <LogOut className="h-4 w-4 " />
        {isOpen && <span>Déconnexion</span>}
      </Button>
    </div>
  );
}
