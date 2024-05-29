const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const myLogger = require('./middlewares/myLogger');

// Middleware untuk mencetak pesan
app.use(myLogger);

// Middleware untuk mem-parsing body JSON
app.use(express.json());

// Menggunakan rute
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
