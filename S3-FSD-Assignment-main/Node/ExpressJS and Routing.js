// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Sample data
let resources = [
  { id: 1, name: 'Resource 1' },
  { id: 2, name: 'Resource 2' },
];

// CRUD operations
app.get('/resources', (req, res) => {
  res.json(resources);
});

app.post('/resources', (req, res) => {
  const newResource = req.body;
  resources.push(newResource);
  res.status(201).json(newResource);
});

app.put('/resources/:id', (req, res) => {
  const resourceId = parseInt(req.params.id);
  const updatedResource = req.body;
  resources = resources.map(resource => (resource.id === resourceId ? updatedResource : resource));
  res.json(updatedResource);
});

app.delete('/resources/:id', (req, res) => {
  const resourceId = parseInt(req.params.id);
  resources = resources.filter(resource => resource.id !== resourceId);
  res.sendStatus(204);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
