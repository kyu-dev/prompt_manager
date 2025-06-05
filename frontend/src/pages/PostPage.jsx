import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

const PostPage = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then(setMarkdown)
      .catch((err) => setMarkdown('# Erreur : Article introuvable', err));
  }, [slug]);

  return (
    <div className="prose mx-auto p-4">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
