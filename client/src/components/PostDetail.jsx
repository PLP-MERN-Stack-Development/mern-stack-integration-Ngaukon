import React, { useState } from 'react';
import { postService } from '../services/api';
import { useUser } from '@clerk/clerk-react';

const PostDetail = ({ post, fetchPost }) => {
  const { user } = useUser(); // Clerk user
  const [comment, setComment] = useState('');

  const submitComment = async (e) => {
    e.preventDefault();

    try {
      await postService.addComment(post._id, {
        userId: user?.id,
        content: comment,
      });
      setComment('');
      fetchPost(); // Refresh post data to show new comment
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  return (
    <article className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="mb-4">{post.content}</p>
      <small className="block mb-4 text-gray-500">Views: {post.viewCount || 0}</small>

      <form onSubmit={submitComment} className="mt-4 space-y-2">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Comment
        </button>
      </form>
    </article>
  );
};

export default PostDetail;