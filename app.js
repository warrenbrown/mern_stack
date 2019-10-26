const express = require('express');
const connectDb = require('./config/db');
const app = express();
const books = require('./routes/api/books');

// Connect Database
connectDb();

app.use('/api/books', books);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));