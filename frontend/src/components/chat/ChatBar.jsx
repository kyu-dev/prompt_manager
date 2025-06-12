import React, { useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { apiAskGemini } from '../../api/gemini';

const ChatBar = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
      const response = await apiAskGemini(message);
      console.log(response);  // Tu pourras ici gérer la réponse plus tard
      setMessage(''); // Reset le champ après envoi
    } catch (error) {
      console.error(error);
    }
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