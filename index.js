// Import express module
const express = require('express');

// Initialize express app
const app = express();

// Set up a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define the port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
