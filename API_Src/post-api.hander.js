const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB();

exports.handler = (event, context, callback) => {
    console.log(event);
    
    const params = {
        Item: {
            "UserId": {
                S: event.userId
            },
            "Age": {
                N: event.age
            },
            "Height": {
                N: event.height
            },
            "Income": {
                N: event.income
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "compare-api"
    };
    
    dynamoDB.putItem(params, (err, data) => {
        if (err) {
            console.log(err);
            callback(err);
        } else {
            console.log(data);
            callback(null, data);
        }  
    });
};