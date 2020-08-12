require('./config/config');
require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const {Book} = require('./models/book');

const app=express();
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
  Book.find({}, (err, data) => {
    if(err) {
      response.status(500).send('Error while fetching data');
    }
    response.status(200).send({
      success: true,
      books: data
    });
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
