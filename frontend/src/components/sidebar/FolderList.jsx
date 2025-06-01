import React, { useState } from 'react';
import { useFolder } from '../../hooks/useFolder';
import { usePrompt } from '../../hooks/usePrompt';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Folder, File, Edit, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FolderList = () => {
  const { folder, loading, handleDeleteFolder, handleEditFolder } = useFolder();
  const { prompts } = usePrompt();
  const [editFolderId, setEditFolderId] = useState(null);
  const [editFolderTitle, setEditFolderTitle] = useState('');

  const handleEditSubmit = async () => {
    await handleEditFolder(editFolderId, editFolderTitle);
  };

  return (
    <div className="space-y-2">
      {loading ? (
        <p className="text-muted-foreground">Chargement en cours...</p>
      ) : (
        <Accordion type="multiple" className="w-full">
          {folder.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <div className="group flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1">
                  <Folder className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setEditFolderId(item.id);
                        setEditFolderTitle(item.title);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteFolder(item.id)}
                    >
                      <Trash className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                  <AccordionTrigger className="hover:no-underline" />
                </div>
              </div>
              <AccordionContent>
                <div className="space-y-2 pl-6">
                  {prompts.filter((prompt) => prompt.folder_id === item.id)
                    .length > 0 ? (
                    prompts
                      .filter((prompt) => prompt.folder_id === item.id)
                      .map((prompt) => (
                        <div
                          key={prompt.id}
                          className="flex items-center gap-2"
                        >
                          <File className="h-4 w-4 text-muted-foreground" />
                          <p className="text-sm">{prompt.title}</p>
                        </div>
                      ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Il n'y a pas de prompt pour le moment
                    </p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      {/* Dialogue pour l'édition du dossier */}
      <Dialog
        open={!!editFolderId}
        onOpenChange={(open) => !open && setEditFolderId(null)}
      >
        <DialogContent className="sm:max-w-[600px]">
          <form onSubmit={handleEditSubmit}>
            <DialogHeader>
              <DialogTitle>Modifier le dossier</DialogTitle>
              <DialogDescription>
                Modifiez le titre du dossier et enregistrez les changements.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Titre</Label>
                <Input
                  value={editFolderTitle}
                  onChange={(e) => setEditFolderTitle(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Enregistrer</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FolderList;
