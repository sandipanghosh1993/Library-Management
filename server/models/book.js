const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true
  },
  author: {
    type: String,
    require: true,
    trim: true
  }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book, bookSchema};
