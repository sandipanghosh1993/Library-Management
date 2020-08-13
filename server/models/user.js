const mongoose = require('mongoose');
const {bookSchema} = require('./book');

const User = mongoose.model('User', new mongoose.Schema({
  userId: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  name: {
    type: String,
    require: true,
    trim: true
  },
  phoneNo: {
    type: Number,
    require: true,
    trim: true
  },
  borrowedbooks: {
    type: [bookSchema],
    default: []
  },
}));

module.exports = {User};
