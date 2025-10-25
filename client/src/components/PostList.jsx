import { useState, useEffect, useContext } from 'react';
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

const PostList = () => {
  const { posts, loading, error, fetchPosts } = useContext(PostContext);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  // 🔁 Fetch posts whenever page changes (or filters/search)
  useEffect(() => {
    fetchPosts(page, 10, category, search);
  }, [page, category, search]);

  // 🔍 Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    fetchPosts(1, 10, category, search);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* 🔎 Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row items-center gap-3 mb-8"
      >
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-auto flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* 🗂️ Posts */}
      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts found.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post._id}
              to={`/posts/${post._id}`}
              className="block bg-white border border-gray-100 rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {post.featuredImage && (
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt || post.content}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* ⏩ Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
        >
          Prev
        </button>
        <span className="text-gray-700">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostList;