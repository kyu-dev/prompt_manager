import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

const CopyBtn = ({ content }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    toast('Copié', {
      description: 'Prompt enregistré dans votre press papier',
      action: {
        label: 'Undo',
      },
    });
  };

  return (
    <Button variant="ghost" size="sm" onClick={handleCopy}>
      <Copy className="h-4 w-4" />
    </Button>
  );
};

export default CopyBtn;
