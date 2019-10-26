const express = require('express');
const connectDb = require('./config/db');
const app = express();

// Connect Database
connectDb();

app.get('/', (req, res) => res.send('Hello World!!!!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));