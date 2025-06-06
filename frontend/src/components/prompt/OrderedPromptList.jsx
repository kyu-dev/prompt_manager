import React from 'react';
import { usePrompt } from '@/hooks/usePrompt';
import PromptCard from './PromptCard';

const OrderedPromptList = () => {
  const {
    promptsByCopy,
    loading,
    handleDeletePrompt,
    handleEditPrompt,
    handleCopiedAt,
  } = usePrompt();

  if (loading) {
    return <p className="text-muted-foreground">Chargement en cours...</p>;
  }

  return (
    <div className="flex gap-6 overflow-x-auto py-2">
      {promptsByCopy.length > 0 ? (
        promptsByCopy.map((prompt, index) => (
          <PromptCard
            key={index}
            prompt={prompt}
            onDelete={handleDeletePrompt}
            onEdit={handleEditPrompt}
            onCopy={handleCopiedAt}
          />
        ))
      ) : (
        <p>Aucun prompt pour l'instant 🫠</p>
      )}
    </div>
  );
};

export default OrderedPromptList;
