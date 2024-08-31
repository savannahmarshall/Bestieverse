// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/bestieverseDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log Mongo queries being executed
mongoose.set('debug', true);

// Use the routes defined in your routes folder
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});