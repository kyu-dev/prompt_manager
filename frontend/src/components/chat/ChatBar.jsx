import React, { useState } from 'react';
import { ArrowRightCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ChatBar = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    await onSendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        className="flex-1"
        placeholder="Écris ton message ici..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button type="submit" size="icon">
        <ArrowRightCircle className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatBar;