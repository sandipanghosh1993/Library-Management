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
  },
  noofcopy: {
    type: Number,
    require: true,
    default: 1
  }
});

const Book = mongoose.model('Book', bookSchema);

const findAllBooks = (response, user = null) => {
  Book.find({}, (err, books) => {
    if(err) {
      response.status(500).send('Error while fetching book');
    }
    response.status(200).send({
      success: true,
      books: books,
      user
    });
  });
}

module.exports = {Book, bookSchema, findAllBooks};
