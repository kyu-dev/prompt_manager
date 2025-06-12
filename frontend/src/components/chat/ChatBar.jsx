import React, { useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';


  const ChatBar = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!message.trim()) return;
      await onSendMessage(message);
      setMessage('');
    };

  return (
    <div>
      <form className="border border-gray-800 rounded-xl p-4 w-full" onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <textarea
            className="w-full resize-none overflow-hidden rounded-md p-2 focus:outline-none focus:ring-0"
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onInput={(e) => {
              e.target.style.height = 'auto';
              e.target.style.height = `${e.target.scrollHeight}px`;
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