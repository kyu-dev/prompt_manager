// components/PromptDialog.jsx
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useFolder } from '@/hooks/useFolder';

export function PromptDialog({
  initialTitle = '',
  initialContent = '',
  initialFolderId = '',
  onSubmit,
  mode = 'create', // 'edit' ou 'create'
  onClose,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [prompt, setPrompt] = useState(initialContent);
  const [folderId, setFolderId] = useState(initialFolderId);
  const { folder } = useFolder();

  const handleSubmit = async () => {
    await onSubmit(title, prompt, folderId);
    onClose();
  };

  return (
    <DialogContent className="sm:max-w-[600px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>
            {mode === 'edit' ? 'Edit Prompt' : 'Create a Prompt'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'edit'
              ? 'Modify your prompt and save changes.'
              : "Create your prompt, and click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Title</Label>
            <Input
              value={title}
              placeholder="Titre de votre prompt"
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Dossier</Label>
            <select
              value={folderId}
              onChange={(e) => setFolderId(e.target.value)}
              className="col-span-3 p-2 border rounded-md"
            >
              <option value="">Sélectionner un dossier</option>
              {folder.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            {mode === 'edit' ? 'Save changes' : 'Save the prompt'}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
