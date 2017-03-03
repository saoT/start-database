var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var users = new Schema({
  name: String,
  mail: String,
  type: String,
  note: [Number],
  tokens: [Schema.Tokens.ObjectId]
  position: {
    lat: Number,
    lng: Number
  }
});