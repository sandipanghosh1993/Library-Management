process.env.PORT = 8000;
process.env.MONGODB_URI = 'mongodb://localhost:27017/LibraryTest';
const {mongoose} = require('../db/mongoose');
const {Book} = require('../models/book');
const {User} = require('../models/user');

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

const userList = [
  {userId: "1234", name: "Harry", phoneNo: 9878765654, borrowedbooks: []},
  {userId: "1235", name: "John", phoneNo: 9874455654, borrowedbooks: []},
  {userId: "1236", name: "Ron", phoneNo: 9867646454, borrowedbooks: []}
];

Book.insertMany(bookList).then(() => {
    console.log('Test Book Data inserted!');
}).catch(error => {
    console.log(error);
});

User.insertMany(userList).then(() => {
    console.log('Test User Data inserted!');
}).catch(error => {
    console.log(error);
});
