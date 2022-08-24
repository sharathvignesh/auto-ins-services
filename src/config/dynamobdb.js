module.exports = {
    aws_table_name: 'auto-ins',
    aws_local_config: {
      //Provide details for local configuration
    },
    aws_remote_config: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_DEFAULT_REGION,
    }
};