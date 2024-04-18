const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3008;

app.use(bodyParser.json());
app.use(cors());

let reviews = [];

app.post('/reviews', (req, res) => {
  const { username, review } = req.body;

  // Assuming username and review are required fields
  if (!username || !review) {
    return res.status(400).json({ error: 'Username and review are required' });
  }

  // Add the review to the list
  reviews.push({ username, review });

  res.status(201).json({ message: 'Review submitted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
