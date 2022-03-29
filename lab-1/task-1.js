/*
    Description : Task 1 for the First Lab Assignment of CSE322.
    Author : B V Surya Ashish
*/

const express = require('express');

app = express();

app.get('/', function (req, res) {
    res.write("<h1>Hello World</h1>");
    res.end()

})

app.listen(8000, function () {
    console.log("Server started at http://localhost:8000");
})