import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postService } from '../services/api';
import PostDetail from '../components/PostDetail';

const PostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const data = await postService.getPost(id);
      setPost(data);
    }
    fetchPost();
  }, [id]);

  return post ? <PostDetail post={post} /> : <p>Loading...</p>;
};

export default PostPage;