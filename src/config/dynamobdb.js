const AWS = require("aws-sdk");

const ssmClient = new AWS.SSM({
  region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1',
});

function getConfig() {
  return new Promise(async function (resolve, reject) {
    try {
      const accessKeyRequest = {
        Name: '/autoins/accesskey',
        WithDecryption: true,
      };
      const secretAccessKeyRequest = {
        Name: '/autoins/secretaccess',
        WithDecryption: true,
      };
      const { Parameter : { Value: accessKey }} = await ssmClient.getParameter(accessKeyRequest).promise();
      const { Parameter : { Value: secretAccessKey }} = await ssmClient.getParameter(secretAccessKeyRequest).promise();
    
      return resolve({
        tableName: "auto-ins",
        localConfig: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1'
        },
        remoteConfig: {
          accessKeyId: accessKey,
          secretAccessKey: secretAccessKey,
          region: process.env.AWS_DEFAULT_REGION || 'ap-northeast-1',
        },
      }) 
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = getConfig
