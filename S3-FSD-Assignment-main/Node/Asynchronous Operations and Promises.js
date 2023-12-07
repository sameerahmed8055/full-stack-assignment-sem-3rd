// main.js
const asyncOperation = require('./asyncOperation');

asyncOperation.performAsyncTask()
  .then(result => {
    console.log('Async task completed successfully:', result);
  })
  .catch(error => {
    console.error('Error during async task:', error);
  });

// asyncOperation.js
const fs = require('fs').promises;

const performAsyncTask = () => {
  return fs.readFile('input.txt', 'utf8')
    .then(data => data.toUpperCase());
};

module.exports = { performAsyncTask };
