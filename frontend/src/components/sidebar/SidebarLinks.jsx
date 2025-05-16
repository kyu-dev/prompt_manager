import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function SidebarLinks({ item, isOpen }) {
  const content = (
    <>
      {item.icon}
      {isOpen && <span>{item.label}</span>}
    </>
  );

  return (
    <Button
      asChild
      variant={item.variant || 'ghost'}
      className={isOpen ? 'justify-start' : 'justify-center'}
    >
      <Link to={item.to}>{content}</Link>
    </Button>
  );
}
