import React from 'react';
import ChatBar from './ChatBar';
import ChatSection from './ChatSection';
import { apiAskGemini } from '../../api/gemini';
import { useState } from 'react';

const Chat = () => {
  const [chatResponse, setChatResponse] = useState(null);

  const handleSendMessage = async (msg) => {
    const response = await apiAskGemini(msg);
    setChatResponse(response);
  };
  return (
    <div className=" w-200 h-200 border-2 border-gray-900 rounded-2xl p-10">
      <ChatSection />
      <h3>{JSON.stringify(chatResponse)}</h3>
      <ChatBar onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
