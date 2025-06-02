import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { PromptDialog } from './PromptDialog';
import { usePrompt } from '@/hooks/usePrompt';
import { Pen } from 'lucide-react';

export const EditPromptBtn = ({ id, title, content, folder_id }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { handleEditPrompt } = usePrompt();

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <Pen /> Modifier
        </Button>
      </DialogTrigger>
      <PromptDialog
        mode="edit"
        initialTitle={title}
        initialContent={content}
        initialFolderId={folder_id}
        onSubmit={(title, prompt, folder_id) => {
          handleEditPrompt(id, title, prompt, folder_id);
          setIsDialogOpen(false);
        }}
        onClose={() => setIsDialogOpen(false)}
      />
    </Dialog>
  );
};
