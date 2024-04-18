const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3010;

app.use(bodyParser.json());
app.use(cors());

let cartItems = [];

app.get('/cart', (req, res) => {
  res.json(cartItems);
});

app.post('/cart', (req, res) => {
  const newItem = req.body;
  cartItems.push(newItem);
  res.json({ message: 'Item added to cart' });
});

app.listen(PORT, () => {
  console.log(`Order service is running on port ${PORT}`);
});

