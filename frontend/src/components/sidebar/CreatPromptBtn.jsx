import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CirclePlus } from 'lucide-react';
import { usePrompt } from '@/hooks/usePrompt';

export function CreatPromptBtn({ isOpen }) {
  const [title, setTitle] = useState('');
  const [prompt, setPrompt] = useState('');
  const { handleCreatePrompt } = usePrompt();

  const handleSubmit = async () => {
    await handleCreatePrompt(title, prompt); // utilisation du hook
    setTitle('');
    setPrompt('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus />
          {isOpen && <span>Create a Prompt</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create a Prompt</DialogTitle>
            <DialogDescription>
              Create your prompt, and click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Title</Label>
              <Input
                value={title}
                placeholder="Entrez le nom de votre prompt"
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Prompt</Label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="col-span-3 h-32 p-2 border rounded-md"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save The Prompt</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
