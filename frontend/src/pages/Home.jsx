import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { DeleteIcon } from 'lucide-react';
import { Clock } from 'lucide-react';
import { deletePrompt, getPrompt } from '../api/prompts';

const Home = () => {
  const [prompts, setPrompts] = useState([]);

  async function handleDelete(promptId) {
    try {
      await deletePrompt(promptId);
      setPrompts((prev) => prev.filter((p) => p.id !== promptId));
    } catch (err) {
      console.error('Erreur lors de la suppression du prompt:', err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPrompt();
        setPrompts(data); // Stocke les données dans l'état
      } catch (error) {
        console.error('Erreur lors de la récupération des prompts:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container flex flex-col mx-auto px-8 pt-8 w-screen gap-5">
      <h1 className="text-6xl font-bold mb-20">Hello Arthur 👋</h1>

      <h2 className="text-2xl flex items-center gap-2">
        Historique des promps <Clock />
      </h2>
      <div className="flex gap-6 overflow-x-auto py-2">
        {prompts.map((prompt, index) => (
          <Card key={index} className="w-[300px]  p-2 flex-shrink-0">
            <h3 className="text-xl">{prompt.title}</h3>
            <div>
              <p>{prompt.content}</p>
              <p>{prompt.id}</p>
            </div>

            <button onClick={() => handleDelete(prompt.id)}>
              <DeleteIcon className="hover:cursor-pointer" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
