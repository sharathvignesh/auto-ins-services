const AWS = require("aws-sdk");
const dbConfig = require("../config/dynamobdb");

const postUser = async function (user) {
  AWS.config.update(dbConfig.aws_remote_config);
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: dbConfig.aws_table_name,
    Item: {
      liscenceId: user.liscenceNumber,
      ...user,
    },
  };
  return await DynamoDB.put(params).promise();
};

module.exports = {
  postUser,
};
