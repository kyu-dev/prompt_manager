import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export function LogoutButton({ isOpen }) {
  const handleLogout = () => {
    // c'est ici le hook de déconexion =)
    console.log('Déconnexion en cours...');
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
