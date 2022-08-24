const AWS = require("aws-sdk");

const ssmClient = new AWS.SSM({
  region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1',
});

async function getDecryptedValue(key) {
  const request = {
    Name: key,
    WithDecryption: true,
  };
  const response = await ssmClient.getParameter(request).promise();

  return response?.Parameter?.Value || "";
}

module.exports = {
  aws_table_name: "auto-ins",
  aws_local_config: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1'
  },
  aws_remote_config: {
    accessKeyId: getDecryptedValue("/autoins/accesskey"),
    secretAccessKey: getDecryptedValue("/autoins/secretaccess"),
    region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1',
  },
};
