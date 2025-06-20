const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .then(() => app.listen(5000, () => console.log('🚀 Server running on port 5000')))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);
