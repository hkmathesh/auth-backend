const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Connect to DB
connectDB();

// Middleware
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://auth-frontend-piwm.onrender.com'
  ],
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api', authRoutes);

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
