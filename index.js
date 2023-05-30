const express = require('express');
const bodyParser = require('body-parser');

const sde = express();
sde.use(bodyParser.json());

//Users data
const users = [
  {
    id: 1,
    name: 'Meet',
    hobbies: ['Music', 'Chess', 'Drawing'],
  },
  {
    id: 2,
    name: 'Pari Singh',
    hobbies: ['Music', 'Cooking', 'Reading'],
  },
  {
    id: 3,
    name: 'Naina Patel',
    hobbies: ['Music', 'Chess', 'Dance'],
  },
  {
    id: 4,
    name: 'Amy Bhatt',
    hobbies: ['Cooking'],
  },
];

// API endpoint to get potential matches based on hobbies

sde.get('/match/:user_id', (req, res) => {
  const userId = parseInt(req.params.user_id);

// Find the user by ID
  const user = users.find((u) => u.id === userId);

// The requested user not found
  if (!user) {
    return res.status(404).json({ error: "The user not found" });
  }

  /* calculate the degree of compatibility -> 
  based on hobbies*/
  const potentialMatches = users
  .filter((u) => u.id !== userId) // exclude the present or current user
  .map((u) => ({
    id: u.id,
    name: u.name,
    hobbies: u.hobbies,
    compatibility: u.hobbies.filter((hobby) => user.hobbies.includes(hobby)).length,
  }))
  .filter((match) => match.compatibility > 0)
  .sort((a, b) => b.compatibility - a.compatibility);

res.json(potentialMatches);
});

// Start the server
const port = 3000;
sde.listen(port, () => {
  console.log(`Server running on port ${port}`);
});