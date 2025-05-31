import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFolder } from '@/hooks/useFolder';
import { usePrompt } from '@/hooks/usePrompt';

export const EditPromptBtn = ({ id, title, content, folder_id }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newFolderId, setNewFolderId] = useState(folder_id);
  const { folder } = useFolder();
  const { handleEditPrompt } = usePrompt();

  const handleSubmit = async () => {
    await handleEditPrompt(id, newTitle, newContent, newFolderId);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Modifier</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier le prompt</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Titre</Label>
              <Input
                id="title"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="content">Contenu</Label>
              <Input
                id="content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="folder">Dossier</Label>
              <Select value={newFolderId} onValueChange={setNewFolderId}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionner un dossier" />
                </SelectTrigger>
                <SelectContent>
                  {folder.map((f) => (
                    <SelectItem key={f.id} value={f.id}>
                      {f.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Enregistrer</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
