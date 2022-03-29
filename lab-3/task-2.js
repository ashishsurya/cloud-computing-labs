const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

MongoClient.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      return console.log(err);
    }

    // Specify database you want to access
    // connecting to databse
    const db = client.db('mongo-db-tut');

    // specifying collection
    const students = db.collection('students');

    students.insertMany([
      { _id: 'fjhgvbjfhgv', studentName: 'Jones' },
      { _id: 'dfhjgvfgfv', studentName: 'Francis' },
      { _id: 'ruytrrir', studentName: 'Surya' },
    ]);

    console.log(`MongoDB Connected: ${url}`);
  }
);
