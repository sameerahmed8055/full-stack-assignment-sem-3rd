// main.js
const fileHandler = require('./fileHandler');

fileHandler.readAndModifyFile('input.txt', 'output.txt', (err, modifiedContent) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('File content modified successfully:', modifiedContent);
});

// fileHandler.js
const fs = require('fs');

const readAndModifyFile = (inputFilePath, outputFilePath, callback) => {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    const modifiedContent = data.toUpperCase();

    fs.writeFile(outputFilePath, modifiedContent, (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, modifiedContent);
    });
  });
};

module.exports = { readAndModifyFile };
