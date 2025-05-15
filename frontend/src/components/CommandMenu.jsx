import { useState } from 'react';
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

export function CommandMenu({ isOpen }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center w-full gap-2 px-2"
          size={isOpen ? 'default' : 'icon'}
        >
          <Search />
          {isOpen && <span>Rechercher un prompt</span>}
        </Button>
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden max-w-md">
        <Command className="rounded-lg border shadow-md">
          <CommandInput placeholder="Tape un nom de prompt..." />
          <CommandList>
            <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
            <CommandItem>Prompt favori</CommandItem>
            <CommandItem>Créer un nouveau prompt</CommandItem>
            <CommandItem>Bibliothèque</CommandItem>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
