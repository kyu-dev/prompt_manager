import { usePrompt } from '@/hooks/usePrompt';
import { Card } from '@/components/ui/card';
import { DeleteIcon, Clock } from 'lucide-react';
import { EditPromptBtn } from '../components/prompt/EditPromptBtn';

const Home = () => {
  const { prompts, loading, handleDeletePrompt } = usePrompt();

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
              <Card
                key={index}
                className="w-[300px] p-4 flex-shrink-0 space-y-2"
              >
                <h3 className="text-xl font-semibold">{prompt.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {prompt.content}
                </p>
                <p className="text-xs text-gray-400">ID: {prompt.id}</p>

                <button
                  onClick={() => handleDeletePrompt(prompt.id)}
                  className="text-red-500 hover:text-red-700 flex items-center gap-1"
                >
                  <DeleteIcon className="w-4 h-4" />
                  Supprimer
                </button>
                <EditPromptBtn
                  id={prompt.id}
                  title={prompt.title}
                  content={prompt.content}
                />
              </Card>
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
