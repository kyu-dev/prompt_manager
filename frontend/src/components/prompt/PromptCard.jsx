import React from 'react';
import { Card } from '@/components/ui/card';
import { Trash } from 'lucide-react';
import { EditPromptBtn } from './EditPromptBtn';
import CopyBtn from './CopyBtn';

const PromptCard = ({ prompt, onDelete, onEdit, onCopy }) => {
  return (
    <Card className="w-[300px] gap-4 px-4 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold">{prompt.title}</h3>
        <p className="text-sm text-muted-foreground truncate">
          {prompt.content}
        </p>
      </div>

      <div className="flex justify-end gap-2">
        <CopyBtn
          content={prompt.content}
          title={prompt.title}
          id={prompt.id}
          onCopy={onCopy} // 👈 ici !
        />
        <EditPromptBtn
          id={prompt.id}
          title={prompt.title}
          content={prompt.content}
          onEdit={onEdit}
        />
        <button
          onClick={() => onDelete(prompt.id)}
          className="text-red-500 hover:text-red-700 flex items-center gap-1"
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
};

export default PromptCard;
