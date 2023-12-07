// auth.js
const jwt = require('jsonwebtoken');

const secretKey = 'your-secret-key';

const generateToken = (user) => {
  return jwt.sign({ user }, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { generateToken, verifyToken };

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./auth');

const app = express();
app.use(bodyParser.json());

const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    const token = auth.generateToken(user);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/secure-data', (req, res) => {
  const token = req.header('Authorization')?.split(' ')[1];

  try {
    const decoded = auth.verifyToken(token);
    res.json({ message: 'Secure data accessed successfully', user: decoded.user });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
