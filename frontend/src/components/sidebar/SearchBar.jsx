import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandItem,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function SearchBar({ isOpen }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'x') {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex  items-center w-full gap-2 px-2"
          size={isOpen ? 'default' : 'icon'}
        >
          <Search />
          {isOpen && (
            <p>
              <span className="text-gray-600 text-sm">Cherchez un prompt </span>{' '}
              ⌘x
            </p>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden max-w-md">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Tape un nom de prompt..." />
          <CommandList>
            <CommandEmpty>
              Génère une idée de startup en 10 secondes
            </CommandEmpty>
            <CommandItem>Décris un monde où les humains volent</CommandItem>
            <CommandItem>Trouve un nom stylé pour une app météo</CommandItem>
            <CommandItem>
              Crée un univers de science-fiction original
            </CommandItem>
            <CommandItem>Propose une idée de roman en une phrase</CommandItem>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
