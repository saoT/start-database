'use strict';

var MongoClient = require('mongodb').MongoClient;

// Database URL.
var url = 'mongodb://localhost:27017/fixeez';

// Connect to the database.
// Pass <request.body> and <controller.create> method as arguments
MongoClient.connect(url, function(error, db) {
  if (!error) {
    console.log('Connected to my database');

    let users = db.collection('users');

    // CRUD method
    users.insert({
      name: 'Sara',
      mail: 'sze.zf@zef.com',
    }, function (err, res) {
      console.log('--------------------THIS IS INSERT RESPONSE--------------');
      console.log(res);
    });

    users.find({}).toArray(function(err, docs) {
      console.log('--------------------THIS IS FIND RESPONSE--------------');
      console.log(docs);
    });

    users.updateOne({ name : 'Sara' }, { $set: { mail : 'scsdcds@khz.iedc' } }, function(err, result) {
      console.log('--------------------THIS IS UPDATE RESPONSE--------------');
      console.log(result);
    });

    users.deleteOne({ name : 'Sara' }, function(err, result) {
      console.log("Removed the document with the field a equal to 3");
      console.log(result);
    });
  }
  else {
    console.log(error);
  }
});