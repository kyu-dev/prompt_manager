import { Link } from 'react-router-dom';

const posts = [
  { slug: 'intro', title: 'Introduction au Blog' },
  { slug: 'react-guide', title: 'Guide React pour Débutants' },
  { slug: 'ai-vs-dev', title: 'IA vs Développeur : Qui gagne ?' },
];

const Blog = () => {
  return (
    <div className="prose">
      <h1>Mon blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
