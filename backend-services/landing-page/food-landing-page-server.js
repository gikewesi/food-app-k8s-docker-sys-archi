const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = 3003;

app.use(bodyParser.json());

// Use cors middleware to allow requests from all origins
app.use(cors());

let meals = [
  { id: 1, name: 'Indomie', description: 'Delicious Indomie' },
  { id: 2, name: 'Fish', description: 'Tasty Fish' },
  { id: 3, name: 'Bread', description: 'Yummy Bread' }
];

app.get('/meals', (req, res) => {
  res.json(meals);
});

app.post('/orders', (req, res) => {
  const { mealId } = req.body;
  const selectedMeal = meals.find(meal => meal.id === mealId);
  if (!selectedMeal) {
    return res.status(404).json({ error: 'Meal not found' });
  }
  res.json({ message: 'Order created successfully', meal: selectedMeal });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
