const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB({region: 'us-east-1', apiVersion: '2012-08-10'});
const cisp = new AWS.CognitoIdentityServiceProvider({apiVersion: '2016-04-18'});

exports.handler = (event, context, callback) => {
    console.log(event);

    const type = event.type;
    const accessToken = event.accessToken;
    
    if(type === 'all') {
        const params = {
            TableName: 'compare-api'
        };
        
        dynamoDB.scan(params, (err, data) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log(data);
                const items = data.Items.map((dataField) => {
                    return {
                        age: +dataField.Age.N,
                        height: +dataField.Height.N,
                        income: +dataField.Income.N
                    }
                });
                callback(null, items);
            }
        });
    } else if (type === 'single') {
        const cispParams = {
            "AccessToken": accessToken
        };
        
        cisp.getUser(cispParams, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            } else {
                console.log(result);
                const userId = result.UserAttributes[0].Value;
                const params = {
                    Key: {
                        UserId: {
                            S: userId
                        }
                    },
                    TableName: "compare-api"
                };
                
                dynamoDB.getItem(params, (err, data) => {
                    if (err) {
                        console.log(err);
                        callback(err);
                    } else {
                        console.log(data);
                        callback(null, [{
                            age: +data.Item.Age.N,
                            height: +data.Item.Height.N,
                            income: +data.Item.Income.N,
                        }]);
                    }
                });
            }
        });
    } else {
        callback(null, 'Get other data');   
    }
};