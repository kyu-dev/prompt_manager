import React from 'react';

const ChatSection = ({ messages }) => {
  return (
    <div className="flex flex-col gap-4 p-4 h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`max-w-[80%] p-3 rounded-lg ${
              msg.sender === 'user'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
