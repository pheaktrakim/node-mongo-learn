const express = require('express');
const { createPost, getAllPosts, getUserPosts, updatePost, deletePost } = require('../controllers/postController');
const { authenticate } = require('../middlewares/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: './uploads' });

router.post('/', authenticate, upload.single('coverImage'), createPost);
router.get('/', authenticate, getAllPosts);
router.get('/my-posts', authenticate, getUserPosts);
router.delete('/:id', authenticate, deletePost);
router.put('/:id', authenticate, upload.single('coverImage'), updatePost);

module.exports = router;
