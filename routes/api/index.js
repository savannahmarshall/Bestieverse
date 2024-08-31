const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Use the user routes for paths that start with /users
router.use('/users', userRoutes);

// Use the thought routes for paths that start with /thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;