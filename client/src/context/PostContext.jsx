import { createContext, useState, useEffect } from "react";
import { postService, categoryService } from "../services/api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async (page = 1, limit = 5) => {
    setLoading(true);
    try {
      const data = await postService.getAllPosts(page, limit);
      setPosts(data.posts || data); // in case backend sends {posts, total, pages}
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, setPosts, categories, loading, error, fetchPosts }}
    >
      {children}
    </PostContext.Provider>
  );
};
