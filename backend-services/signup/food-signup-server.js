const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3007;

app.use(bodyParser.json());
app.use(cors());

let users = [];

app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).send('Username already exists');
  }

  // Create new user
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'Sign up successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
