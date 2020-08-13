const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Book} = require('./../models/book');

describe('GET /books', () => {
  it('should fetch books', (done) => {
    request(app)
      .get('/books')
      .send({})
      .expect(200)
      .end(done);
  });
});

describe('POST /user', () => {
  it('should fetch user', (done) => {
    request(app)
      .post('/user')
      .send({userId: "1234"})
      .expect(200)
      .end(done);
  });
});

describe('POST /borrow', () => {
  const data = {
  	userId: "1235",
  	book: {
  		 title: "Song of Solomon",
       author: "Toni Morrison"
  	}
  };
  it('should borrow a book', (done) => {
    request(app)
      .post('/borrow')
      .send(data)
      .expect(200)
      .end(done);
  });
});
