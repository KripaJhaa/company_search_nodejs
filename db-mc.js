const MongoClient = require('mongodb').MongoClient
var url = 'mongodb://13.232.174.178:27017';

var state;


exports.connectDB = function () {

    console.log("Mongo Called")

    MongoClient.connect(url, (err, db) => {
        state = db
        console.log("Connected successfully to server");
    })
}

exports.getDB = function () {
    console.log(" db...")
    return state
}