const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware'); // Optional: for protected routes

const router = express.Router();

// Specific routes before the dynamic :id route
router.post('/logout', authenticate, userController.logoutUser); // logout current user
router.get('/current_user', authenticate, userController.getCurrentUser); // Get current logged-in user
// Dynamic :id route for other operations
router.post('/', userController.createUser); // Create a user
router.get('/', authenticate, userController.getAllUsers); // Get all users (protected)
router.get('/:id', authenticate, userController.getUserById); // Get a single user (protected)
router.put('/:id', authenticate, userController.updateUser); // Update a user (protected)
router.delete('/:id', authenticate, userController.deleteUser); // Delete a user (protected)

module.exports = router;
