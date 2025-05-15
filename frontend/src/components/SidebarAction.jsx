// SidebarAction.jsx ou SidebarAction.tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function SidebarAction({ item, isOpen }) {
  const content = (
    <>
      {item.icon}
      {isOpen && <span>{item.label}</span>}
    </>
  );

  if (item.type === 'link') {
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

  if (item.type === 'button') {
    return (
      <Button
        onClick={item.onClick}
        variant={item.variant || 'default'}
        className={isOpen ? 'justify-start' : 'justify-center'}
      >
        {content}
      </Button>
    );
  }

  return null;
}
