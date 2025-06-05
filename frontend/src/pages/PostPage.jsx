import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import matter from 'gray-matter';

const PostPage = () => {
  const { slug } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [meta, setMeta] = useState({});

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text);
        setMeta(data);
        setMarkdown(content);
      })
      .catch(() => {
        setMarkdown('# Erreur : Article introuvable');
        setMeta({});
      });
  }, [slug]);

  return (
    <div className="flex w-full justify-center pt-10">
      <div className="prose prose-lg w-full max-w-4xl px-4">
        <h1>{meta.title || slug}</h1>
        <p>
          <em>
            Par {meta.author || 'Anonyme'} — {meta.date || 'Inconnue'}
          </em>
        </p>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPage;
