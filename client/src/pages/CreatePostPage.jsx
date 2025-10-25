import PostForm from '../components/PostForm';
import { postService } from '../services/api';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (postData) => {
    await postService.createPost(postData);
    navigate('/');
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <PostForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreatePostPage;