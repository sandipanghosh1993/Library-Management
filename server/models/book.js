const mongoose = require('mongoose');

const Book = mongoose.model('Book', {
  title: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },
  author: {
    type: String,
    require: true,
    trim: true
  }
});

module.exports = {Book};
