import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import matter from 'gray-matter';

const slugs = ['ai-vs-dev'];

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const loadedPosts = await Promise.all(
        slugs.map(async (slug) => {
          const res = await fetch(`/blog/${slug}.md`);
          const text = await res.text();
          const { data } = matter(text);
          return {
            slug,
            title: data.title || slug,
            author: data.author || 'Anonyme',
            date: data.date || 'Inconnue',
          };
        })
      );
      setPosts(loadedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="prose p-4">
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              <strong>{post.title}</strong>
            </Link>
            <div>
              <em>
                Par {post.author} — {post.date}
              </em>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
