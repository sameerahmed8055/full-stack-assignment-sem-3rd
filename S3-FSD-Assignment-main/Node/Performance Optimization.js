# Install memory-cache package
npm install memory-cache

// server.js
const express = require('express');
const cache = require('memory-cache');

const app = express();

const expensiveOperation = () => {
  // Simulating a time-consuming operation
  let result = 0;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result;
};

app.get('/cached-data', (req, res) => {
  const cachedData = cache.get('cachedData');

  if (cachedData) {
    res.json({ message: 'Data retrieved from cache', data: cachedData });
  } else {
    const result = expensiveOperation();
    cache.put('cachedData', result, 60000); // Cache for 1 minute
    res.json({ message: 'Data retrieved and cached', data: result });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


 // This code uses the memory-cache package to cache the result of an expensive operation. Caching is one of the strategies to optimize performance by avoiding redundant computations.
