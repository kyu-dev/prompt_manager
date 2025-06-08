import { ArrowRightCircle } from 'lucide-react';
import React from 'react';

const ChatBar = () => {
  return (
    <div>
      <form className="border border-gray-800 rounded-xl p-4 w-full">
        <div className="flex gap-2">
          <textarea
            className="w-full resize-none overflow-hidden rounded-md  p-2 focus:outline-none focus:ring-0"
            rows={1}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`; //auto size par rapport au contenue
            }}
            placeholder="Écris ton message ici..."
          ></textarea>
          <button type="submit" className="self-end">
            <ArrowRightCircle />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatBar;
