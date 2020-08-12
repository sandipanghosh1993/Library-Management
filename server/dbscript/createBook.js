require('../config/config');
const {mongoose} = require('../db/mongoose');
const {Book} = require('../models/book');

const bookList = [
  {title: "Song of Solomon", author: "Toni Morrison"},
  {title: "Ulysses", author: "James Joyce"},
  {title: "The Shadow of the Wind", author: "Carlos Ruiz Zafon"},
  {title: "The Lord of the Rings", author: "J.R.R. Tolkien"},
  {title: "The Satanic Verses", author: "Salman Rushdie"},
  {title: "Don Quixote", author: "Miguel de Cervantes"},
  {title: "The Golden Compass", author: "Philip Pullman"},
  {title: "Catch-22", author: "Joseph Heller"},
  {title: "The Kite Runner", author: "Khaled Hosseini"},
  {title: "Little Women", author: "Louisa May Alcott"},
  {title: "Gitanjali", author: "Rabindranath Tagore"},
  {title: "The Cloud Atlas", author: "David Mitchell"},
  {title: "The Fountainhead", author: "Ayn Rand"},
  {title: "Lolita", author: "Vladimir Nabokov"},
  {title: "The Handmaid’s Tale", author: "Margaret Atwood"},
  {title: "Gravity’s Rainbow", author: "Thomas Pynchon"},
];

//Book.remove({}, () => {});

Book.insertMany(bookList).then(() => {
    console.log('Data inserted!');
    mongoose.connection.close();
}).catch(error => {
    console.log(error);
    mongoose.connection.close();
});
