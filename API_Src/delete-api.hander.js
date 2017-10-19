const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log(event);
    const userId = event.userId;

    const params = {
        Key: {
            UserId: {
                S: userId
            }
        },
        TableName: "compare-api"
    };
    
    dynamoDB.deleteItem(params, (err, data) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }
    });
};