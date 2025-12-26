const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/books', bookRoutes);



// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
