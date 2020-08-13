require('./config/config');
require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const {Book, findAllBooks} = require('./models/book');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// Add headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/books', (request, response) => {
  findAllBooks(response);
});

app.post('/user', (request, response) => {
  User.findOne({userId: request.body.userId}, (err, data) => {
    if(err) {
      response.status(500).send('Error while fetching user');
    }
    response.status(200).send({
      success: !!data,
      user: data
    });
  });
});

app.post('/borrow', (request, response) => {
  User.findOne({userId: request.body.userId}, (err, user) => {
    if(err) {
      response.status(500).send('Error while fetching user');
    }
    user.borrowedbooks = [...user.borrowedbooks, request.body.book];
    user.save().then(userdoc => {
      if(request.body.book.noofcopy > 1) {
        Book.findOne({title: request.body.book.title}, (err, book) => {
          if(err) {
            response.status(500).send('Error while fetching book');
          }
          book.noofcopy -= 1;
          book.save().then(bookdoc => {
            findAllBooks(response, userdoc);
          });
        });
      } else {
        Book.deleteOne({title: request.body.book.title}, err => {
          if(err) {
            response.status(500).send('Error while deleting book');
          }
          findAllBooks(response, userdoc);
        });
      }
    });
  });
});

app.post('/return', (request, response) => {
  User.findOne({userId: request.body.userId}, (err, user) => {
    if(err) {
      response.status(500).send('Error while fetching user');
    }
    user.borrowedbooks = user.borrowedbooks.filter(book => book.title !== request.body.book.title);
    user.save().then(userdoc => {
      Book.findOne({title: request.body.book.title}, (err, book) => {
        if(err) {
          response.status(500).send('Error while fetching book');
        }
        if(book) {
          book.noofcopy += 1;
          book.save().then(bookdoc => {
            findAllBooks(response, userdoc);
          });
        } else {
          Book.create(request.body.book, bookdoc => {
            findAllBooks(response, userdoc);
          });
        }
      });
    });
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
