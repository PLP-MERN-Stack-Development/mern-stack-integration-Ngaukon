import { useForm } from 'react-hook-form';

const PostForm = ({ onSuccess }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      if (data.featuredImage && data.featuredImage[0]) {
        formData.append('featuredImage', data.featuredImage[0]);
      }

      const res = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to create post');
      onSuccess();
      reset();
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="space-y-5"
    >
      {/* Title */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          {...register('title', { required: 'Title is required' })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Enter post title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Content</label>
        <textarea
          {...register('content', { required: 'Content is required' })}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 h-40 focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Write your content..."
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>
        )}
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Featured Image</label>
        <input
          type="file"
          {...register('featuredImage')}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isSubmitting ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;