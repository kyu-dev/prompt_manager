// components/CreatePromptBtn.jsx
import { useState } from 'react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import { usePrompt } from '@/hooks/usePrompt';
import { PromptDialog } from '../prompt/PromptDialog';

export function CreatPromptBtn({ isOpen }) {
  const { handleCreatePrompt } = usePrompt();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus />
          {isOpen && <span>Create a Prompt</span>}
        </Button>
      </DialogTrigger>
      <PromptDialog
        mode="create"
        onSubmit={(title, prompt, folder_id) => {
          handleCreatePrompt(title, prompt, folder_id);
        }}
        onClose={() => setIsDialogOpen(false)}
      />
    </Dialog>
  );
}
