import { usePrompt } from '@/hooks/usePrompt';

import { DeleteIcon, Clock } from 'lucide-react';
import PromptCard from '../components/prompt/PromptCard';

const Home = () => {
  const { prompts, loading, handleDeletePrompt, handleEditPrompt } =
    usePrompt();

  return (
    <div className="container flex flex-col mx-auto px-8 pt-8 w-screen gap-5">
      <h1 className="text-6xl font-bold mb-20">Hello Arthur 👋</h1>

      <h2 className="text-2xl flex items-center gap-2">
        Historique des prompts <Clock />
      </h2>

      {loading ? (
        <p className="text-muted-foreground">Chargement en cours...</p>
      ) : (
        <div className="flex gap-6 overflow-x-auto py-2">
          {prompts.length > 0 ? (
            prompts.map((prompt, index) => (
              <PromptCard
                key={index}
                prompt={prompt}
                onDelete={handleDeletePrompt}
                onEdit={handleEditPrompt}
              />
            ))
          ) : (
            <p>Aucun prompt pour l'instant 🫠</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
