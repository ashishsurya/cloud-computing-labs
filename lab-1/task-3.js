/*
    Description : Task 3 for the First Lab Assignment of CSE322.
    Author : B V Surya Ashish
*/

const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  const labDetails = {
    course: "CSE322",
    title: "Cloud Computing",
    instructor: "Shajulin Benedict",
    semester: "6",
  }
  res.json({courseDetails:labDetails})
});

app.post("/", (req, res) => {
  const body_data = req.body;
  res.json({data_recieved : body_data})
})

app.listen(8000, () => {
  console.log(`Server started on http://localhost:8000 🚀🚀🚀`);
});

const results = {
  name: "Trishal",
  rollNo: "2019BCS0090",
  sem:6
}

