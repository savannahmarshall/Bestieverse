const User = require('../models/User'); // Ensure the path is correct

module.exports = {
  // Fetch all users
  getUsers: async (req, res) => {
    try {
      const users = await User.find({});
      res.json(users);
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Fetch a single user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error fetching user by ID:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    try {
      const { username, email } = req.body;

      // Validate request body
      if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
      }

      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(updatedUser);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted' });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Add a friend to a user's friend list
  addFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error adding friend:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  },

  // Remove a friend from a user's friend list
  removeFriend: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error removing friend:', err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  }
};