import { ArrowRightCircle } from 'lucide-react';
import React from 'react';

const ChatBar = () => {
  return (
    <div>
      <form className="border-gray-800 border-2 rounded-2xl w-full py-10 px-2">
        <div className="flex justify-between">
          <input placeholder="Poser votre question" />
          <button>
            <ArrowRightCircle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBar;
