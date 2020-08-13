require('../config/config');
const {mongoose} = require('../db/mongoose');
const {Book} = require('../models/book');

const bookList = [
  {title: "The Lord of the Rings", author: "J.R.R. Tolkien", noofcopy: 1},
  {title: "The Satanic Verses", author: "Salman Rushdie", noofcopy: 10},
  {title: "Don Quixote", author: "Miguel de Cervantes", noofcopy: 1},
  {title: "The Golden Compass", author: "Philip Pullman", noofcopy: 3},
  {title: "The Kite Runner", author: "Khaled Hosseini", noofcopy: 1},
  {title: "Little Women", author: "Louisa May Alcott", noofcopy: 2},
  {title: "The Cloud Atlas", author: "David Mitchell", noofcopy: 5},
  {title: "The Fountainhead", author: "Ayn Rand", noofcopy: 6},
  {title: "Lolita", author: "Vladimir Nabokov", noofcopy: 1},
  {title: "Gravity’s Rainbow", author: "Thomas Pynchon", noofcopy: 2},
];

Book.remove({}, () => {
  mongoose.connection.close();
});

Book.insertMany(bookList).then(() => {
    console.log('Data inserted!');
    mongoose.connection.close();
}).catch(error => {
    console.log(error);
    mongoose.connection.close();
});
