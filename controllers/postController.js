const Post = require('../models/postModel');
const fs = require('fs');
const path = require('path');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const coverImage = req.file ? req.file.path : null;
    const post = new Post({ title, content, coverImage, user: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    // Get page and limit from query parameters, default to 1 and 10
    const page = parseInt(req.query.page) || 1;
    const limit = Math.min(parseInt(req.query.limit) || 10, 50);

    // Calculate the starting index
    const skip = (page - 1) * limit;

    // Fetch posts with pagination
    const posts = await Post.find()
      .sort({ createdAt: -1 }) // Sort by most recent
      .skip(skip)
      .limit(limit)
      .populate('user', 'name email'); 

    // Total number of posts
    const total = await Post.countDocuments();

    res.status(200).json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      posts,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params; // Post ID from URL parameters
    const { title, content } = req.body;

    // Find the post by ID
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Ensure the authenticated user owns the post (if applicable)
    if (req.user.id !== post.user.toString()) {
      return res.status(403).json({ message: 'You are not authorized to update this post' });
    }

    // Update the post fields if they exist in the request
    if (title) post.title = title;
    if (content) post.content = content;

    // Handle file upload for coverImage
    if (req.file) {
      post.coverImage = req.file.path; // Update the cover image path
    }

    // Save the updated post
    const updatedPost = await post.save();

    res.status(200).json({
      message: 'Post updated successfully',
      post: updatedPost,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ errors });
    }

    res.status(500).json({ error: error.message });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('deletePost', id)

    // Find the post by ID
    const post = await Post.findById(id);
    console.log('post', post)

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Ensure the authenticated user owns the post (if applicable)
    if (req.user.id !== post.user.toString()) {
      return res.status(403).json({ message: 'You are not authorized to delete this post' });
    }

    // Delete the cover image file if it exists
    if (post.coverImage) {
      console.log("[findByIdAndDelete]")
      const filePath = path.resolve(post.coverImage);
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    console.log("[findByIdAndDelete]")
    // Delete the post from the database
    await Post.findByIdAndDelete(id);

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id }).populate('user', 'name email');
    res.json(posts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
