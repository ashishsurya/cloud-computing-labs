const { DynamoDB } = require('aws-sdk');
const aws = require('aws-sdk');
const config = require('./config');
require('dotenv').config();
const {v4} = require("uuid")




aws.config.update({
  region: config.aws_remote_config.region,
  accessKeyId: config.aws_remote_config.accessKeyId,
  secretAccessKey: config.aws_remote_config.secretAccessKey,
});

const dyanamoClient = new DynamoDB.DocumentClient();

// getting the full collections

const getData = async () => {
  const params = {
    TableName: config.aws_table_name,
  };

  const data = await dyanamoClient.scan(params).promise();
  console.log(data.Items)
  return data.Items;
};

console.log("INITIAL DATA")
getData();



// const addData = async (name, completed) => {
//   const params = {
//     TableName: config.aws_table_name,
//     Item: {
//       "id": v4(),
//       "completed": completed,
//       "name" : name,
//     }
//   }

//   console.log("ADDING A NEW ITEM TO THE DATABASE");
//   dyanamoClient.put(params, function (err, data) {
//       if (err) {
//         console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
//       } else {
//         console.log("Added item:", JSON.stringify(data, null, 2));
//       }
//     })
// }


// // addData("Surya", false);
// console.log("ADDING THREEE NEW RECORDSSSSS!!!!!!!!!")
// addData("Surya", false);
// addData("Name 1", true);
// addData("Name 2", false);
// addData("Name 3", true);

// getData();


// da005a31-cf63-4cae-968f-7a18bd29e958



console.log("DELETING A SINGLE ITEMMMM ");
const deleteItem = async (id) => {
  const params = {
    TableName: config.aws_table_name,
    Key: {
      "id":id
    }
  }

  console.log("DELETION STARTED");
  dyanamoClient.delete(params, function (err, data) {
    if (err) {
      console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Deleted item:", JSON.stringify(data, null, 2));
    }
  })
}


deleteItem("2ccebe6b-7c76-4fe2-a42f-1a5fe4463808");
getData();

