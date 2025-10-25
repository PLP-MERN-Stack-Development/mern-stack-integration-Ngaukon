import { useEffect, useState } from 'react';
import { postService } from '../services/api';
import PostList from '../components/PostList';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const data = await postService.getAllPosts();
        setPosts(data.posts || data); // handle both array or paginated responses
      } catch (err) {
        setError('Failed to load posts.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Latest Posts</h1>

      {loading && (
        <p className="text-center text-gray-500">Loading posts...</p>
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && posts.length === 0 && (
        <p className="text-center text-gray-400">No posts available yet.</p>
      )}

      {!loading && !error && posts.length > 0 && <PostList posts={posts} />}
    </div>
  );
};

export default Home;