import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Learn = () => {
  const [markdown, setMarkdown] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/blog/learn.md')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Le fichier Markdown n'a pas pu être chargé.");
        }
        return res.text();
      })
      .then(setMarkdown)
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  if (error) {
    return <div className="prose mx-auto p-4 text-red-500">{error}</div>;
  }

  if (!markdown) {
    return <div className="prose mx-auto p-4">Chargement en cours...</div>;
  }

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Learn;
