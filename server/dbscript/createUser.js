require('../config/config');
const {mongoose} = require('../db/mongoose');
const {User} = require('../models/user');

const userList = [
  {userId: "1234", name: "Harry", phoneNo: 9878765654, borrowedbooks: []},
  {userId: "1235", name: "John", phoneNo: 9874455654, borrowedbooks: []},
  {userId: "1236", name: "Ron", phoneNo: 9867646454, borrowedbooks: []}
];

User.remove({}, () => {
  mongoose.connection.close();
});

User.insertMany(userList).then(() => {
    console.log('Data inserted!');
    mongoose.connection.close();
}).catch(error => {
    console.log(error);
    mongoose.connection.close();
});
