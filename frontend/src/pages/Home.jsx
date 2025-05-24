import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { ClipboardCheckIcon } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Star } from 'lucide-react';
import { getPrompt } from '../api/prompts';

const Home = () => {
  const [prompts, setPrompts] = useState([]);

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
          <Card key={index} className="w-[300px] h-[100px] p-2 flex-shrink-0">
            <h3 className="text-xl">{prompt.title}</h3>
            <p>{prompt.content}</p>
            <button>
              <ClipboardCheckIcon className="hover:cursor-pointer" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
