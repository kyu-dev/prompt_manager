import React from 'react';

const ChatSection = ({ messages }) => {
  const getNoteColor = (note) => {
    const numericNote = parseFloat(note);
    if (numericNote >= 8) return 'text-green-600';
    if (numericNote >= 5) return 'text-yellow-600';
    return 'text-red-600';
  };

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
            {msg.sender === 'user' ? (
              <p className="text-sm">{msg.text}</p>
            ) : (
              (() => {
                try {
                  // Nettoyer msg.text des éventuels backticks et ```json
                  const cleaned = msg.text
                    .replace(/```json/, '') // enlève ```json
                    .replace(/```/g, '')    // enlève ```
                    .trim();

                  const parsed = JSON.parse(cleaned);

                  return (
                    <div className="text-sm space-y-2">
                      <p>
                        <strong>Note :</strong>{' '}
                        <span className={`font-bold ${getNoteColor(parsed.note)}`}>
                          {parsed.note}
                        </span>
                      </p>
                      <p>
                        <strong>Explication :</strong>{' '}
                        <span className="text-gray-700">{parsed.explication}</span>
                      </p>
                      <p>
                        <strong>Proposition :</strong>{' '}
                        <span className="text-blue-600 font-medium">
                          {parsed.correction}
                        </span>
                      </p>
                    </div>
                  );
                } catch (e) {
                  return <p className="text-sm text-red-500">Erreur JSON : {msg.text + e}</p>;
                }
              })()
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
