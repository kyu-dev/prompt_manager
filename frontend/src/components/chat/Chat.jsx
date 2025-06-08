import React from 'react';
import ChatBar from './ChatBar';
import ChatSection from './ChatSection';

const Chat = () => {
  return (
    <div className="bg-blue-200 w-200 h-200 border-2 border-gray-900 rounded-2xl p-10">
      <ChatSection />
      <ChatBar />
    </div>
  );
};

export default Chat;
