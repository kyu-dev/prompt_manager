import React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

const CopyBtn = ({ content, title }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    toast('Copié', {
      description: (
        <span>
          Prompt <strong>{title}</strong> enregistré dans votre presse-papiers
        </span>
      ),
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
