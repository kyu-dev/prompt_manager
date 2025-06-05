import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const Learn = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/blog/learn.md')
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(console.error);
  }, []);

  return (
    <div className="prose">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Learn;
