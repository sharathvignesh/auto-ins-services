const AWS = require("aws-sdk");
const getConfig = require("../config/dynamobdb");

const postUser = async function (user) {
  const fetchedConfig = await getConfig()
  AWS.config.update(process.env.NODE_ENV === 'development' ? fetchedConfig.localConfig : fetchedConfig.remoteConfig);
  const DynamoDB = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: fetchedConfig.tableName,
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
