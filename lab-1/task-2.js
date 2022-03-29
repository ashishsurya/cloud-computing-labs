/*
    Description : Task 2 for the First Lab Assignment of CSE322.
    Author : B V Surya Ashish
*/

const fs = require('fs');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  try {
    res.sendFile(`${__dirname}/index.txt`);
  } catch (error) {
    throw new Error(error.stack);
  }
});

app.listen(8000, () => {
  console.log(`Server started on http://localhost:8000 🚀🚀🚀`);
});
