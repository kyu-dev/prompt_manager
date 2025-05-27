import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { usePrompt } from '@/hooks/usePrompt';
import { PromptDialog } from '../prompt/PromptDialog';

export function EditPromptBtn({ id, title, content }) {
  const { handleEditPrompt } = usePrompt();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span>Edit Prompt</span>
        </Button>
      </DialogTrigger>
      <PromptDialog
        mode="edit"
        initialTitle={title}
        initialContent={content}
        onSubmit={(newTitle, newContent) =>
          handleEditPrompt(id, newTitle, newContent)
        }
      />
    </Dialog>
  );
}
