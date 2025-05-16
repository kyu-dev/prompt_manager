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
import { FolderPlus } from 'lucide-react';

export function CreatFolderBtn({ isOpen }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // évite le refresh
    console.log({ title }); // faudra créer le hook
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FolderPlus />
          {isOpen && <span>Create a Folder</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create a Folder</DialogTitle>
            <DialogDescription>
              Create your Folder, and click save when your done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Title</Label>
              <Input
                id="name"
                value={title}
                placeHolder="entrez le nom de votre Folder"
                onChange={(e) => setTitle(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save The Folder</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
