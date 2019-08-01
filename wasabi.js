// JavaScript source code


console.log(firebase.auth().currentUser)

var AWS = require('aws-sdk');

var accessKeyId = '61JXYQO8LAQHWH38ZBL6';
var secretAccessKey = 'O6YYoZAl7iJ25uubJlUAywKe2y5BJs5hJeXAkiU1';

var wasabiEndpoint = new AWS.Endpoint('s3.wasabisys.com');
var s3 = new AWS.S3({
    endpoint: wasabiEndpoint,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
});



