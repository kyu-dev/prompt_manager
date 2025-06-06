import { DeleteIcon, Clock } from 'lucide-react';
import AllPromptList from '@/components/prompt/AllPromptList';
import OrderedPromptList from '@/components/prompt/OrderedPromptList';

const Home = () => {
  return (
    <div className="flex flex-col mx-auto px-8 pt-8 w-screen gap-5">
      <h1 className="text-6xl font-bold mb-20">Hello Arthur 👋</h1>
      <h2 className="text-2xl flex items-center gap-2">
        Historique des prompts <Clock />
      </h2>
      <>
        <OrderedPromptList />
        <AllPromptList />
      </>
    </div>
  );
};

export default Home;
