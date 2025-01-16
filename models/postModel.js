const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Title is required'], // Field is required
    minlength: [3, 'Title must be at least 3 characters'], // Minimum length
    maxlength: [100, 'Title cannot exceed 100 characters'], // Maximum length
  },
  content: {
    type: String,
    required: [true, 'Content is required'], // Field is required
    minlength: [10, 'Content must be at least 10 characters'], // Minimum length
  },
  coverImage: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User reference is required'], // User must be specified
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Post', postSchema);
