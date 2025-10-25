const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addComment
} = require('../controllers/postController');

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', upload.single('featuredImage'), createPost);
router.put('/:id', upload.single('featuredImage'), updatePost);
router.delete('/:id', deletePost);
router.post('/:postId/comments', addComment);

module.exports = router;