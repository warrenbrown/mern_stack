const express = require('express');
const connectDb = require('./config/db');
const app = express();
const books = require('./routes/api/books');

var cors = require('cors');

// Connect Database
connectDb();

// cors
app.use(cors({ origin: true, credentials: true}));

// Init Middleware
app.use(express.json({ extended: false}));

app.use('/api/books', books);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));