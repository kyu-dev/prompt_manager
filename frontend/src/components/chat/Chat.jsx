import React, { useState } from 'react';
import ChatBar from './ChatBar';
import ChatSection from './ChatSection';
import { apiAskGemini } from '../../api/gemini';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (msg) => {
    // Ajouter le message de l'utilisateur
    setMessages(prev => [...prev, { sender: 'user', text: msg }]);

    // Obtenir la réponse de Gemini
    const response = await apiAskGemini(msg);
    const geminiText = response.data;

    // Ajouter la réponse de Gemini
    setMessages(prev => [...prev, { sender: 'gemini', text: geminiText }]);
  };

  return (
    <div className="w-full max-w-2xl border rounded-lg shadow-sm p-6">
      <ChatSection messages={messages} />
      <ChatBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;