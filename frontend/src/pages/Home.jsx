import React from 'react';
import { Card } from '@/components/ui/card';
import { ClipboardCheckIcon } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Star } from 'lucide-react';
import { Folder } from 'lucide-react';

const Home = () => {
  // Exemple de données pour les cartes
  const cardsData = [
    { title: 'Vacance en Thaïlande' },
    { title: 'Week-end à Paris' },
    { title: 'Randonnée en montagne' },
    { title: 'Randonnée en montagne' },
  ];

  return (
    <div className="container flex flex-col mx-auto px-8 pt-8 w-screen gap-5">
      <h1 className="text-6xl font-bold mb-20">Hello Arthur 👋</h1>

      <h2 className="text-2xl flex items-center gap-2">
        Historique des promps <Clock />
      </h2>
      <div className="flex gap-6 overflow-x-auto  py-2">
        {cardsData.map((card, index) => (
          <Card key={index} className="w-[300px] h-[100px] p-2 flex-shrink-0">
            <h3 className="text-xl">{card.title}</h3>
            <button>
              <ClipboardCheckIcon className="hover:cursor-pointer" />
            </button>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl flex items-center gap-2">
        Favories <Star />
      </h2>
      <div className="flex gap-6 overflow-x-auto  py-2">
        {cardsData.map((card, index) => (
          <Card key={index} className="w-[300px] h-[100px] p-2 flex-shrink-0">
            <h3 className="text-xl">{card.title}</h3>
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
