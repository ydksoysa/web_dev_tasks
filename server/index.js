const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Item = require('./models/Item');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected')) // <-- This line was fixed
  .catch(err => console.log('DB connection error:', err)); // <-- This line was fixed

// Routes
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching items" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  // This line was also fixed
  console.log(`Server running on http://localhost:${PORT}`);
});